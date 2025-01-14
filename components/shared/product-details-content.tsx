'use client';

import { useEffect } from 'react';
import { useProductStore } from '@/stores/product-store';
import ProductGallery from '@/components/shared/product/product-gallery';
import ProductPrice from '@/components/shared/product/product-price';
import SelectVariant from '@/components/shared/product/select-variant';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import AddToCart from '@/components/shared/product/add-to-cart';
import { Product, Variant } from '@/types';
import { generateId } from '@/lib/utils';

export default function ProductDetailsContent({
  initialProduct,
  initialVariant,
  initialColor,
  translations,
}: {
  initialProduct: Product;
  initialVariant: Variant | null;
  initialColor: string;
  translations: Record<string, string>; // Translations as a serializable object
}) {
  const {
    setProduct,
    setSelectedVariant,
    product,
    selectedVariant,
    selectedColor,
    selectedSize,
  } = useProductStore();

  useEffect(() => {
    setProduct(initialProduct);
    setSelectedVariant(initialVariant);

    if (initialColor) {
      useProductStore.setState({ selectedColor: initialColor });
    }
  }, [initialProduct, initialVariant, initialColor, setProduct, setSelectedVariant]);

  if (!product) {
    return <div>{translations.loading || 'Loading...'}</div>;
  }

  const variantImages = selectedVariant?.images || product.images;
  const stockCount =
    selectedVariant?.countInStock !== undefined
      ? selectedVariant.countInStock
      : product.countInStock;

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="col-span-2">
          <ProductGallery images={variantImages} />
        </div>
        <div className="col-span-2 flex flex-col gap-3 md:p-5">
          <p className="p-medium-16 text-grey-500">
            {translations.brand} {product.brand}
          </p>
          <h1 className="font-bold text-lg lg:text-xl">{product.name}</h1>
          <Separator />
          <ProductPrice
            price={selectedVariant?.price || product.price}
            listPrice={product.listPrice}
            isDeal={product.tags.includes('todays-deal')}
          />
          <Separator className="my-2" />
          <SelectVariant initialColor={initialColor} />
          <p className="p-medium-16">{product.description}</p>
        </div>
        <div>
          <Card>
            <CardContent className="p-4 flex flex-col gap-4">
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
                <div className="text-destructive">
                  {translations.outOfStock || 'Out of Stock'} 
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
