'use client'

import { useSearchParams } from 'next/navigation'
import { IProduct } from '@/lib/db/models/product.model'
import SelectVariant from './select-variant'
import ProductGallery from './product-gallery'
import ProductPrice from './product-price'

export default function DetailsCard({ product }: { product: IProduct }) {
  const searchParams = useSearchParams()
  const selectedColor = searchParams.get('color') || product.colors?.[0] || ''
  const selectedSize = searchParams.get('size') || product.sizes?.[0] || ''

  // Find the selected variant
  const selectedVariant = product.variants?.find(
    (variant) =>
      variant.color === selectedColor && variant.size === selectedSize
  )

  const variantImages = selectedVariant?.images || product.images || [] // Fallback to product images if no variant

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Product Gallery */}
        <ProductGallery images={variantImages} />

        {/* Product Details */}
        <div>
          <h1 className='text-3xl font-bold'>{product.name}</h1>
          <p className='text-sm text-muted-foreground mb-4'>{product.brand}</p>

          {/* Pricing */}
          <div className='mb-4'>
            <ProductPrice
              price={selectedVariant?.price || product.price}
              listPrice={product.listPrice}
              isDeal={product.tags.includes('todays-deal')}
            />
          </div>

          {/* SKU */}
          <div className='mb-2'>
            <strong>SKU:</strong> {selectedVariant?.sku || 'N/A'}
          </div>

          {/* Stock */}
          <div className='mb-4'>
            <strong>Stock:</strong>{' '}
            {selectedVariant?.countInStock || product.countInStock}
          </div>

          {/* Select Variants */}
          <SelectVariant product={product} color={selectedColor} size={selectedSize} />

          {/* Description */}
          <div className='mt-6'>
            <h2 className='text-xl font-semibold mb-2'>Product Description</h2>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
