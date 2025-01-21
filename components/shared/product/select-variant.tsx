'use client'

import { useEffect } from 'react'
import { useProductStore } from '@/stores/product-store'
import { Button } from '@/components/ui/button'

export default function SelectVariant({
  initialColor,
}: {
  initialColor: string
}) {
  const { product, selectedVariant, setSelectedVariant } = useProductStore()

  useEffect(() => {
    if (product?.variants) {
      const variant =
        product.variants.find((v) => v.color === initialColor) || null
      setSelectedVariant(variant)
    }
  }, [initialColor, product, setSelectedVariant])

  // Ensure product is not null before accessing its properties
  if (!product) {
    return <div>Loading...</div>
  }

  const nonNullProduct = product! // Explicitly tell TypeScript `product` is not null
  const hasVariants =
    nonNullProduct.variants && nonNullProduct.variants.length > 0

  const availableColors: string[] = hasVariants
    ? [
        ...new Set(
          nonNullProduct
            .variants!.map((variant) => variant.color)
            .filter(Boolean)
        ),
      ]
    : Array.isArray(nonNullProduct.color)
      ? nonNullProduct.color
      : nonNullProduct.color
        ? [nonNullProduct.color]
        : []

  const handleColorChange = (color: string) => {
    const variant =
      nonNullProduct.variants?.find((v) => v.color === color) || null
    setSelectedVariant(variant)

    // Update URL
    const searchParams = new URLSearchParams({ color })
    window.history.replaceState({}, '', `?${searchParams.toString()}`)
  }

  return (
    <div className='mt-4'>
      {availableColors.length > 0 && (
        <div>
          <div>Color:</div>
          <div className='flex gap-2'>
            {availableColors.map((colorOption) => (
              <Button
                key={String(colorOption)} // Ensure key is valid
                variant='outline'
                className={`p-2 ${
                  selectedVariant?.color === colorOption
                    ? 'border-2 border-primary'
                    : 'border'
                }`}
                onClick={() => handleColorChange(colorOption)}
              >
                <div
                  style={{ backgroundColor: String(colorOption) }} // Ensure backgroundColor is a string
                  className='h-4 w-4 rounded-full'
                ></div>
                {colorOption}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
