import { Button } from '@/components/ui/button'
import { IProduct } from '@/lib/db/models/product.model'
import Link from 'next/link'
import ProductGallery from './product-gallery'
import ProductPrice from './product-price'

export default function SelectVariant({
  product,
  color,
  size,
}: {
  product: IProduct
  color: string
  size: string
}) {
  const selectedColor = color || product.colors?.[0] || "DefaultColor"
  const selectedSize = size || product.sizes?.[0] || "DefaultSize"

  // Find the selected variant
  const selectedVariant = product.variants?.find(
    (variant) =>
      variant.color === selectedColor && variant.size === selectedSize
  )

  const variantImages = selectedVariant?.images || product.images || [] // Fallback to product images if no variant

  return (
    <>
      {/* Product Gallery */}
      <ProductGallery images={variantImages} />

      {/* Display Variant Details */}
      <div className='mt-4'>
        <div>
          <strong>SKU:</strong> {selectedVariant?.sku || 'N/A'}
        </div>
        <div>
          <strong>Price:</strong>{' '}
          <ProductPrice
            price={selectedVariant?.price || product.price}
            listPrice={product.listPrice}
            isDeal={product.tags.includes('todays-deal')}
          />
        </div>
        <div>
          <strong>Stock:</strong> {selectedVariant?.countInStock || product.countInStock}
        </div>
      </div>

      {/* Color Selection */}
      {product.colors?.length > 0 && (
        <div className='space-x-2 space-y-2 mt-4'>
          <div>Color:</div>
          {product.colors.map((x: string) => (
            <Button
              asChild
              variant='outline'
              className={
                selectedColor === x ? 'border-2 border-primary' : 'border-2'
              }
              key={x}
            >
              <Link
                replace
                scroll={false}
                href={`?${new URLSearchParams({
                  color: x,
                  size: selectedSize,
                })}`}
              >
                <div
                  style={{ backgroundColor: x }}
                  className='h-4 w-4 rounded-full border border-muted-foreground'
                ></div>
                {x}
              </Link>
            </Button>
          ))}
        </div>
      )}

      {/* Size Selection */}
      {product.sizes?.length > 0 && (
        <div className='mt-2 space-x-2 space-y-2'>
          <div>Size:</div>
          {product.sizes.map((x: string) => (
            <Button
              asChild
              variant='outline'
              className={
                selectedSize === x ? 'border-2 border-primary' : 'border-2'
              }
              key={x}
            >
              <Link
                replace
                scroll={false}
                href={`?${new URLSearchParams({
                  color: selectedColor,
                  size: x,
                })}`}
              >
                {x}
              </Link>
            </Button>
          ))}
        </div>
      )}
    </>
  )
}
