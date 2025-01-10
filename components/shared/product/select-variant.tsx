// import { Button } from '@/components/ui/button'
// import { IProduct } from '@/lib/db/models/product.model'
// import Link from 'next/link'

// export default function SelectVariant({
//   product,
//   size,
//   color,
// }: {
//   product: IProduct
//   color: string
//   size: string
// }) {
//   const selectedColor = color || product.colors
//   const selectedSize = size || product.sizes

//   return (
//     <>
//       {product.colors?.length > 0 && (
//         <div className='space-x-2 space-y-2'>
//           <div>Color:</div>
//           {product.colors.map((x: string) => (
//             <Button
//               asChild
//               variant='outline'
//               className={
//                 selectedColor === x ? 'border-2 border-primary' : 'border-2'
//               }
//               key={x}
//             >
//               <Link
//                 replace
//                 scroll={false}
//                 href={`?${new URLSearchParams({
//                   color: x,
//                   size: selectedSize,
//                 })}`}
//                 key={x}
//               >
//                 <div
//                   style={{ backgroundColor: x }}
//                   className='h-4 w-4 rounded-full border border-muted-foreground'
//                 ></div>
//                 {x}
//               </Link>
//             </Button>
//           ))}
//         </div>
//       )}
//       {product.sizes.length > 0 && (
//         <div className='mt-2 space-x-2 space-y-2'>
//           <div>Size:</div>
//           {product.sizes.map((x: string) => (
//             <Button
//               asChild
//               variant='outline'
//               className={
//                 selectedSize === x ? 'border-2  border-primary' : 'border-2  '
//               }
//               key={x}
//             >
//               <Link
//                 replace
//                 scroll={false}
//                 href={`?${new URLSearchParams({
//                   color: selectedColor,
//                   size: x,
//                 })}`}
//               >
//                 {x}
//               </Link>
//             </Button>
//           ))}
//         </div>
//       )}
//     </>
//   )
// }

import { Button } from '@/components/ui/button';
import { IProduct } from '@/lib/db/models/product.model';
import Link from 'next/link';

export default function SelectVariant({
  product,
  size,
  color,
}: {
  product: IProduct;
  color: string;
  size: string;
}) {
  // Normalize colors and sizes to arrays if they are not already
  const colors = Array.isArray(product.colors) ? product.colors : [product.colors];
  const sizes = Array.isArray(product.sizes) ? product.sizes : [product.sizes];

  // Fallback to default values if no query parameters are present
  const selectedColor = color || colors[0];
  const selectedSize = size || sizes[0];

  return (
    <>
      {colors.length > 0 && (
        <div className="space-x-2 space-y-2">
          <div>Color:</div>
          {colors.map((colorOption: string) => (
            <Button
              asChild
              variant="outline"
              className={
                selectedColor === colorOption
                  ? 'border-2 border-primary'
                  : 'border-2'
              }
              key={colorOption}
            >
              <Link
                replace
                scroll={false}
                href={`?${new URLSearchParams({
                  color: colorOption,
                  size: selectedSize,
                })}`}
              >
                <div
                  style={{ backgroundColor: colorOption }}
                  className="h-4 w-4 rounded-full border border-muted-foreground"
                ></div>
                {colorOption}
              </Link>
            </Button>
          ))}
        </div>
      )}
      {sizes.length > 0 && (
        <div className="mt-2 space-x-2 space-y-2">
          <div>Size:</div>
          {sizes.map((sizeOption: string) => (
            <Button
              asChild
              variant="outline"
              className={
                selectedSize === sizeOption
                  ? 'border-2 border-primary'
                  : 'border-2'
              }
              key={sizeOption}
            >
              <Link
                replace
                scroll={false}
                href={`?${new URLSearchParams({
                  color: selectedColor,
                  size: sizeOption,
                })}`}
              >
                {sizeOption}
              </Link>
            </Button>
          ))}
        </div>
      )}
    </>
  );
}


