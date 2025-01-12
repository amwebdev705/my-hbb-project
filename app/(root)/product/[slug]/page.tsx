import { getProductBySlug } from '@/lib/actions/product.actions'
import SelectVariant from '@/components/shared/product/select-variant'
import ProductPrice from '@/components/shared/product/product-price'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent } from '@/components/ui/card'
import AddToCart from '@/components/shared/product/add-to-cart'
import { generateId } from '@/lib/utils'

export default async function ProductDetails({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ color?: string; size?: string }>
}) {
  const paramsObj = await params
  const { slug } = paramsObj
  const { color, size } = await searchParams

  const product = await getProductBySlug(slug)

  if (!product) {
    return <div>Product not found.</div>
  }

  const selectedColor = color || product.color?.[0] || ''
  const selectedSize = size || product.size?.[0] || ''

  return (
    <div>
      <section>
        <div className='grid grid-cols-1 md:grid-cols-5'>
          {/* Left Column: Variants & Gallery */}
          <div className='col-span-2'>
            <SelectVariant product={product} color={selectedColor} />
          </div>

          {/* Center Column: Product Details */}
          <div className='col-span-2 flex flex-col gap-3 md:p-5'>
            <p className='p-medium-16 text-grey-500'>Brand {product.brand}</p>
            <h1 className='font-bold text-lg lg:text-xl'>{product.name}</h1>
            <Separator />
            <ProductPrice
              price={product.price}
              listPrice={product.listPrice}
              isDeal={product.tags.includes('todays-deal')}
            />
            <Separator className='my-2' />
            <p className='p-medium-16'>{product.description}</p>
          </div>

          {/* Right Column: Stock & Cart */}
          <div>
            <Card>
              <CardContent className='p-4 flex flex-col gap-4'>
                {product.countInStock > 0 ? (
                  <AddToCart
                    item={{
                      product: product._id,
                      name: product.name,
                      slug: product.slug,
                      category: product.category,
                      price: product.price,
                      image: product.images[0],
                      size: selectedSize,
                      color: selectedColor,
                      countInStock: product.countInStock,
                      clientId: generateId(),
                      quantity: 1,
                    }}
                  />
                ) : (
                  <div className='text-destructive'>Out of Stock</div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
