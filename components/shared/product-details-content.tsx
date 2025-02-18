'use client'

import { useEffect } from 'react'
import { useProductStore } from '@/stores/product-store'
import ProductGallery from '@/components/shared/product/product-gallery'
import ProductPrice from '@/components/shared/product/product-price'
import SelectVariant from '@/components/shared/product/select-variant'
import { Separator } from '@/components/ui/separator'
import AddToCart from '@/components/shared/product/add-to-cart'
import { Product, Variant } from '@/types'
import { generateId } from '@/lib/utils'
import DOMPurify from 'dompurify'

export default function ProductDetailsContent({
  initialProduct,
  initialVariant,
  initialColor,
  translations,
}: {
  initialProduct: Product
  initialVariant: Variant | null
  initialColor: string
  translations: Record<string, string>
}) {
  const {
    setProduct,
    setSelectedVariant,
    setSelectedColor,
    product,
    selectedVariant,
    selectedColor,
    selectedSize,
  } = useProductStore()

  useEffect(() => {
    setProduct(initialProduct)

    const defaultVariant =
      initialVariant ||
      initialProduct.variants?.find(
        (variant) => variant.color === initialColor
      ) ||
      initialProduct.variants?.[0] ||
      null

    setSelectedVariant(defaultVariant)
    setSelectedColor(initialColor || '')
  }, [
    initialProduct,
    initialVariant,
    initialColor,
    setProduct,
    setSelectedVariant,
    setSelectedColor,
  ])

  if (!product) {
    return <div>{translations.loading || 'Loading...'}</div>
  }

  const variantImages = selectedVariant?.images || product.images
  const stockCount =
    selectedVariant?.countInStock !== undefined
      ? selectedVariant.countInStock
      : product.countInStock

  return (
    <section className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      {/* Main Image and Thumbnails */}
      <div className='col-span-1 flex flex-col'>
        <ProductGallery images={variantImages} />
      </div>

      {/* Product Details */}
      <div className='col-span-2 flex flex-col gap-4'>
        <h1 className='font-bold text-lg lg:text-xl'>{product.name}</h1>
        <ProductPrice
          price={selectedVariant?.price || product.price}
          listPrice={product.listPrice}
          isDeal={product.tags.includes('todays-deal')}
        />
        <Separator />
        <div className='flex items-center gap-2'>
          <span className='text-sm text-gray-600'>{translations.reviews || 'Reviews'}:</span>
          {/* Add a reviews component or static placeholder */}
          <span>★★★★☆</span>
        </div>
        <Separator />
        <SelectVariant initialColor={selectedColor} />
        <div className='mt-4 prose'>
          {product.description ? (
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(product.description),
              }}
            ></div>
          ) : (
            <p>No description provided.</p>
          )}
        </div>
        <div className='mt-4'>
          {stockCount > 0 ? (
            <AddToCart
              item={{
                product: selectedVariant?.sku || product._id,
                name: product.name,
                slug: product.slug,
                category: product.category,
                price: selectedVariant?.price || product.price,
                image: selectedVariant?.images?.[0] || product.images[0],
                size: selectedSize || '',
                color: selectedColor || '',
                countInStock: stockCount,
                clientId: generateId(),
                quantity: 1,
              }}
            />
          ) : (
            <div className='text-destructive'>
              {translations.outOfStock || 'Out of Stock'}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
