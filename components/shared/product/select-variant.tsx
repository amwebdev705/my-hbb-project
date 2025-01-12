'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { IProduct } from '@/lib/db/models/product.model';
import ProductGallery from './product-gallery';
import ProductPrice from './product-price';

export default function SelectVariant({
  product,
  color,
}: {
  product: IProduct;
  color?: string;
}) {
  const hasVariants = product.variants?.length ?? 0 > 0; // Safely check if variants exist

  // Extract available colors from variants, or fallback to product color
  const availableColors = hasVariants
    ? [...new Set(product.variants!.map((variant) => variant.color).filter(Boolean))]
    : product.color
    ? [product.color]
    : [];

  const defaultColor = color || availableColors[0] || '';

  // Find the initial selected variant
  const initialSelectedVariant = hasVariants
    ? product.variants!.find((variant) => variant.color === defaultColor)
    : null;

  const [selectedVariant, setSelectedVariant] = useState(initialSelectedVariant);
  const [selectedColor, setSelectedColor] = useState(defaultColor);
  const [variantImages, setVariantImages] = useState(
    initialSelectedVariant?.images || product.images
  );
  const [stockCount, setStockCount] = useState(
    initialSelectedVariant?.countInStock || product.countInStock || 0
  );

  // Update selectedVariant and related state when the color changes
  useEffect(() => {
    if (hasVariants) {
      const newSelectedVariant = product.variants!.find(
        (variant) => variant.color === selectedColor
      );

      setSelectedVariant(newSelectedVariant || null);
      setVariantImages(newSelectedVariant?.images || product.images);
      setStockCount(newSelectedVariant?.countInStock || product.countInStock || 0);
    } else {
      // No variants, fallback to base product
      setSelectedVariant(null);
      setVariantImages(product.images);
      setStockCount(product.countInStock || 0);
    }
  }, [selectedColor, product, hasVariants]);

  const handleColorChange = (newColor: string) => {
    setSelectedColor(newColor);

    // Update URL with new query parameters
    const searchParams = new URLSearchParams({ color: newColor });
    window.history.replaceState({}, '', `?${searchParams.toString()}`);
  };

  return (
    <div>
      {/* Product Gallery */}
      <ProductGallery images={variantImages} />

      {/* Variant Details */}
      <div className="mt-4">
        <div>
          <strong>SKU:</strong> {selectedVariant?.sku || product.sku || 'N/A'}
        </div>
        <div>
          <strong>Size:</strong> {selectedVariant?.size || product.size || 'N/A'}
        </div>
        <div>
          <strong>Price:</strong>{' '}
          <ProductPrice
            price={selectedVariant?.price || product.price}
            listPrice={product.listPrice}
          />
        </div>
        <div>
          <strong>Stock:</strong> {stockCount > 0 ? stockCount : 'Out of Stock'}
        </div>
      </div>

      {/* Color Selector */}
      {availableColors.length > 0 && (
        <div className="mt-4">
          <div>Color:</div>
          <div className="flex gap-2">
            {availableColors.map((colorOption) => (
              <Button
                key={colorOption}
                variant="outline"
                className={`${
                  selectedColor === colorOption
                    ? 'border-2 border-primary'
                    : 'border'
                }`}
                onClick={() => handleColorChange(colorOption)}
              >
                <div
                  style={{ backgroundColor: colorOption }}
                  className="h-4 w-4 rounded-full"
                ></div>
                {colorOption}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}