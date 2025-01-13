import ProductDetailsContent from '@/components/shared/product-details-content';
import { getProductBySlug } from '@/lib/actions/product.actions';

export default async function ProductDetails({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ color?: string }>;
}) {
  const { slug } = await params;
  const { color } = await searchParams;

  const product = await getProductBySlug(slug);

  if (!product) {
    return <div>Product not found.</div>;
  }

  // Normalize color and size
  const transformedProduct = {
    ...product,
    color: Array.isArray(product.color) ? product.color : product.color ? [product.color] : undefined,
    size: Array.isArray(product.size) ? product.size : product.size ? [product.size] : undefined,
  };

  const initialVariant =
    transformedProduct.variants?.find((variant) => variant.color === color) || null;

  return (
    <ProductDetailsContent
      initialProduct={transformedProduct}
      initialVariant={initialVariant}
      initialColor={color || ''}
    />
  );
}
