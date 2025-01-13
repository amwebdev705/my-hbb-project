'use client'

import { useEffect } from 'react'
import { useProductStore } from '@/stores/product-store'
import ProductGallery from '@/components/shared/product/product-gallery'
import ProductPrice from '@/components/shared/product/product-price'
import SelectVariant from '@/components/shared/product/select-variant'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent } from '@/components/ui/card'
import AddToCart from '@/components/shared/product/add-to-cart'
import { Product, Variant } from '@/types'

export default function ProductDetailsContent({
  initialProduct,
  initialVariant,
  initialColor,
}: {
  initialProduct: Product // Use the Product type
  initialVariant: Variant | null // Use the Variant type
  initialColor: string
}) {
  const { setProduct, setSelectedVariant, product, selectedVariant } =
    useProductStore()

  useEffect(() => {
    // Initialize Zustand state
    setProduct(initialProduct)
    setSelectedVariant(initialVariant)
  }, [initialProduct, initialVariant, setProduct, setSelectedVariant])

  if (!product) {
    return <div>Loading...</div>
  }

  const variantImages = selectedVariant?.images || product.images
  const stockCount =
    selectedVariant?.countInStock !== undefined
      ? selectedVariant.countInStock
      : product.countInStock

  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-5'>
        {/* Left Column */}
        <div className='col-span-2'>
          <ProductGallery images={variantImages} />
        </div>

        {/* Center Column */}
        <div className='col-span-2 flex flex-col gap-3 md:p-5'>
          <p className='p-medium-16 text-grey-500'>Brand {product.brand}</p>
          <h1 className='font-bold text-lg lg:text-xl'>{product.name}</h1>
          <Separator />
          <ProductPrice
            price={selectedVariant?.price || product.price}
            listPrice={product.listPrice}
            isDeal={product.tags.includes('todays-deal')}
          />
          <Separator className='my-2' />
          <SelectVariant initialColor={initialColor} />
          <p className='p-medium-16'>{product.description}</p>
        </div>

        {/* Right Column */}
        <div>
          <Card>
            <CardContent className='p-4 flex flex-col gap-4'>
              {stockCount > 0 ? (
                <AddToCart
                  item={{
                    product: product._id,
                    name: product.name,
                    slug: product.slug,
                    category: product.category,
                    price: selectedVariant?.price || product.price,
                    image: variantImages[0],
                    size: selectedVariant?.size || '',
                    color: selectedVariant?.color || '',
                    countInStock: stockCount,
                    clientId: Math.random().toString(36).substr(2, 9), // Generate random ID
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
  )
}
