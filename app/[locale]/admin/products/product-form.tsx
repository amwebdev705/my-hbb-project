'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useForm, useFieldArray } from 'react-hook-form'

import 'draft-js/dist/Draft.css'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import { createProduct, updateProduct } from '@/lib/actions/product.actions'
import { UploadButton } from '@/lib/uploadthing'
import { ProductInputSchema, ProductUpdateSchema } from '@/lib/validator'
import { Checkbox } from '@/components/ui/checkbox'
import { toSlug } from '@/lib/utils'
import { IProductInput } from '@/types'
import RichTextEditor from '@/components/shared/product/rich-text-editor'
import { IProduct } from '@/lib/db/models/product.model'

const productDefaultValues: IProductInput =
  process.env.NODE_ENV === 'development'
    ? {
        name: 'Sample Product',
        slug: 'sample-product',
        sku: 'sample- SP001',
        category: 'Sample Category',
        images: ['/images/p11-1.jpg'],
        brand: 'Sample Brand',
        description: 'This is a sample description of the product.',
        price: 99.99,
        listPrice: 0,
        countInStock: 15,
        numReviews: 0,
        avgRating: 0,
        numSales: 0,
        isPublished: false,
        isFavorite: false,
        tags: '',
        size: '',
        color: '',
        ratingDistribution: [],
        reviews: [],
        variants: [], // Initialize variants
      }
    : {
        name: '',
        slug: '',
        sku: '',
        category: '',
        images: [],
        brand: '',
        description: '',
        price: 0,
        listPrice: 0,
        countInStock: 0,
        numReviews: 0,
        avgRating: 0,
        numSales: 0,
        isPublished: false,
        isFavorite: false,
        tags: '',
        size: '',
        color: '',
        ratingDistribution: [],
        reviews: [],
        variants: [], // Initialize variants
      }

const ProductForm = ({
  type,
  product,
  productId,
}: {
  type: 'Create' | 'Update'
  product?: IProduct
  productId?: string
}) => {
  const router = useRouter()
  const { toast } = useToast()

  const form = useForm<IProductInput>({
    resolver:
      type === 'Update'
        ? zodResolver(ProductUpdateSchema)
        : zodResolver(ProductInputSchema),
    defaultValues:
      product && type === 'Update'
        ? { ...productDefaultValues, ...product }
        : productDefaultValues,
  })

  const {
    fields: variants,
    append,
    remove,
  } = useFieldArray({
    control: form.control,
    name: 'variants',
  })

  const images = form.watch('images')
  // const { watch, setValue } = form

  async function onSubmit(values: IProductInput) {
    const hasVariants = values.variants && values.variants.length > 0

    if (hasVariants && values.variants) {
      // Ensure values.variants is defined
      const firstVariant = values.variants[0]
      // Set default values if not explicitly provided
      if (values.images.length === 0 && firstVariant.images?.[0]) {
        values.images = [firstVariant.images[0]]
      }

      if (!values.price || values.price === 0) {
        values.price = firstVariant.price || 0
      }

      if (!values.countInStock || values.countInStock === 0) {
        values.countInStock = firstVariant.countInStock || 0
      }
    }

    const res =
      type === 'Create'
        ? await createProduct(values)
        : await updateProduct({ ...values, _id: productId as string })

    if (!res.success) {
      toast({ variant: 'destructive', description: res.message })
    } else {
      toast({ description: res.message })
      router.push(`/admin/products`)
    }
  }

  return (
    <Form {...form}>
      <form
        method='post'
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-8'
      >
        <div className='flex flex-col gap-5 md:flex-row'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder='Enter product name' {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='slug'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Slug</FormLabel>

                <FormControl>
                  <div className='relative'>
                    <Input
                      placeholder='Enter product slug'
                      className='pl-8'
                      {...field}
                    />
                    <button
                      type='button'
                      onClick={() => {
                        form.setValue('slug', toSlug(form.getValues('name')))
                      }}
                      className='absolute right-2 top-2.5'
                    >
                      Generate
                    </button>
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <FormField
              control={form.control}
              name='isFavorite'
              render={({ field }) => (
                <FormItem className='space-x-2 items-center'>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel>Is Favorite?</FormLabel>
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className='flex flex-col gap-5 md:flex-row'>
          <FormField
            control={form.control}
            name='sku'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>SKU</FormLabel>
                <FormControl>
                  <Input placeholder='Enter SKU' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='category'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Input placeholder='Enter category' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='brand'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Brand</FormLabel>
                <FormControl>
                  <Input placeholder='Enter product brand' {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='flex flex-col gap-5 md:flex-row'>
          <FormField
            control={form.control}
            name='tags'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Tags</FormLabel>
                <FormControl>
                  <Input placeholder='Enter tags' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='color'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Color</FormLabel>
                <FormControl>
                  <Input placeholder='Enter color' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='size'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Size</FormLabel>
                <FormControl>
                  <Input placeholder='Enter product size' {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='flex flex-col gap-5 md:flex-row'>
          <FormField
            control={form.control}
            name='listPrice'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>List Price</FormLabel>
                <FormControl>
                  <Input placeholder='Enter product list price' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='price'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Net Price</FormLabel>
                <FormControl>
                  <Input placeholder='Enter product price' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='countInStock'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Count In Stock</FormLabel>
                <FormControl>
                  <Input
                    type='number'
                    placeholder='Enter product count in stock'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className='flex flex-col gap-5 md:flex-row'>
          <FormField
            control={form.control}
            name='images'
            render={() => (
              <FormItem className='w-full'>
                <FormLabel>Images</FormLabel>
                <Card>
                  <CardContent className='space-y-2 mt-2 min-h-48'>
                    <div className='flex flex-wrap gap-4 items-center'>
                      {images.map((image: string, index: number) => (
                        <div key={index} className='relative'>
                          <Image
                            src={image}
                            alt={`Product image ${index + 1}`}
                            className='w-20 h-20 object-cover object-center rounded-sm'
                            width={80}
                            height={80}
                          />
                          <button
                            type='button'
                            onClick={() => {
                              const updatedImages = [...images]
                              updatedImages.splice(index, 1) // Remove the image at the current index
                              form.setValue('images', updatedImages) // Update the form value
                            }}
                            className='absolute top-0 right-0 bg-red-500 text-white rounded-full p-1'
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                      <FormControl>
                        <UploadButton
                          endpoint='imageUploader'
                          onClientUploadComplete={(res: { url: string }[]) => {
                            form.setValue('images', [...images, res[0].url])
                          }}
                          onUploadError={(error: Error) => {
                            toast({
                              variant: 'destructive',
                              description: `ERROR! ${error.message}`,
                            })
                          }}
                        />
                      </FormControl>
                    </div>
                  </CardContent>
                </Card>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div>
          {/* Description Field */}
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <RichTextEditor
                    value={field.value || ''}
                    onChange={(content) => field.onChange(content)} // Ensure `content` updates the form field
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name='isPublished'
            render={({ field }) => (
              <>
                <FormItem className='space-x-2 items-center'>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel>Is Published?</FormLabel>
                </FormItem>
                <FormDescription></FormDescription>
                <FormMessage />
              </>
            )}
          />
        </div>

        {/* Variants Section */}
        <div>
          <div className='flex justify-between items-center'>
            <FormLabel>Product Variants</FormLabel>
            <Button
              type='button'
              onClick={() =>
                append({
                  sku: '',
                  images: [],
                  price: 0,
                  countInStock: 0,
                  color: '',
                  size: '',
                })
              }
            >
              Add Variant
            </Button>
          </div>
          <div className='space-y-4'>
            {variants.map((variant, index) => (
              <Card key={variant.id}>
                <CardContent className='grid grid-cols-6 gap-4 items-center'>
                  <FormField
                    control={form.control}
                    name={`variants.${index}.sku`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>SKU</FormLabel>
                        <FormControl>
                          <Input placeholder='SKU' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`variants.${index}.price`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Price</FormLabel>
                        <FormControl>
                          <Input type='number' placeholder='Price' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`variants.${index}.countInStock`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Stock</FormLabel>
                        <FormControl>
                          <Input type='number' placeholder='Stock' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`variants.${index}.color`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Color</FormLabel>
                        <FormControl>
                          <Input placeholder='Color' {...field} />
                        </FormControl>

  {/* Preview Section */}
  <div className="mt-4">
        <h4 className="font-bold">Preview:</h4>
        <div
          dangerouslySetInnerHTML={{ __html: field.value || '' }}
          className="prose"
        ></div>
      </div>





                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`variants.${index}.size`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Size</FormLabel>
                        <FormControl>
                          <Input placeholder='Size' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`variants.${index}.images`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Images</FormLabel>
                        <UploadButton
                          endpoint='imageUploader'
                          onClientUploadComplete={(res: { url: string }[]) => {
                            field.onChange([
                              ...(field.value || []),
                              ...res.map((r) => r.url),
                            ])
                          }}
                        />
                        <div className='flex space-x-2 mt-2'>
                          {field.value?.map((img: string, i: number) => (
                            <div key={i} className='relative'>
                              <Image
                                src={img}
                                alt={`Variant ${index} Image ${i}`}
                                className='w-16 h-16 object-cover rounded-md'
                                width={64}
                                height={64}
                              />
                              <button
                                type='button'
                                onClick={() =>
                                  field.onChange(
                                    field.value?.filter((_, idx) => idx !== i)
                                  )
                                }
                                className='absolute top-0 right-0 bg-red-500 text-white rounded-full p-1'
                              >
                                ✕
                              </button>
                            </div>
                          ))}
                        </div>
                      </FormItem>
                    )}
                  />
                  <Button
                    type='button'
                    variant='destructive'
                    onClick={() => remove(index)}
                  >
                    Remove
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <Button
            type='submit'
            size='lg'
            disabled={form.formState.isSubmitting}
            className='button col-span-2 w-full'
          >
            {form.formState.isSubmitting ? 'Submitting...' : `${type} Product `}
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default ProductForm
