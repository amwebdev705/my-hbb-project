import ProductDetailsContent from '@/components/shared/product-details-content';
import { getProductBySlug } from '@/lib/actions/product.actions';
import { getTranslations } from 'next-intl/server';

export default async function ProductDetails({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>; // Adjusted type for params as a Promise
  searchParams: Promise<{ color?: string }>; // Adjusted type for searchParams as a Promise
}) {
  const { slug } = await params; // Await the Promise to resolve the params
  const { color } = await searchParams; // Await the Promise to resolve the searchParams

  const product = await getProductBySlug(slug);

  if (!product) {
    return <div>Product not found.</div>;
  }

  const t = await getTranslations('Product');

  const translations = {
    loading: t('Loading'),
    brand: t('Brand'),
    outOfStock: t('OutOfStock'),
  };

  const transformedProduct = {
    ...product,
    color: Array.isArray(product.color)
      ? product.color
      : product.color
      ? [product.color]
      : undefined,
    size: Array.isArray(product.size)
      ? product.size
      : product.size
      ? [product.size]
      : undefined,
    tags: product.tags || '', // Ensure tags is a string
  };

  const initialVariant =
    transformedProduct.variants?.find((variant) => variant.color === color) ||
    null;

  return (
    <ProductDetailsContent
      initialProduct={transformedProduct}
      initialVariant={initialVariant}
      initialColor={color || ''}
      translations={translations}
    />
  );
}
