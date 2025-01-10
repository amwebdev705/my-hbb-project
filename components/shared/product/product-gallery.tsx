// 'use client'

// import { useState } from 'react'
// import Image from 'next/image'
// import Zoom from 'react-medium-image-zoom'
// import 'react-medium-image-zoom/dist/styles.css'
// export default function ProductGallery({ images }: { images: string[] }) {
//   const [selectedImage, setSelectedImage] = useState(0)
//   return (
//     <div className='flex gap-2'>
//       <div className='flex flex-col gap-2 mt-8'>
//         {images.map((image, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               setSelectedImage(index)
//             }}
//             onMouseOver={() => {
//               setSelectedImage(index)
//             }}
//             className={`bg-white rounded-lg overflow-hidden ${
//               selectedImage === index
//                 ? 'ring-2 ring-blue-500'
//                 : 'ring-1 ring-gray-300'
//             }`}
//           >
//             <Image src={image} alt={'product image'} width={48} height={48} />
//           </button>
//         ))}
//       </div>

//       <div className='w-full'>
//         <Zoom>
//           <div className='relative h-[500px]'>
//             <Image
//               src={images[selectedImage]}
//               alt={'product image'}
//               fill
//               sizes='90vw'
//               className='object-contain'
//               priority
//             />
//           </div>
//         </Zoom>
//       </div>
//     </div>
//   )
// }

import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export default function ProductGallery({ images }: { images: string[] }) {
  let selectedImage = images[0] || null; // Default to the first image or null


  return (
    <div className="flex gap-2">
      {images.length > 0 ? (
        <>
          <div className="flex flex-col gap-2 mt-8">
            {images.map((image, index) => (
              <button
                key={index}
                onMouseOver={() => {
                  // Ensure no empty image is used
                  if (image) selectedImage = image;
                }}
                className={`bg-white rounded-lg overflow-hidden ${
                  selectedImage === image
                    ? 'ring-2 ring-blue-500'
                    : 'ring-1 ring-gray-300'
                }`}
              >
                {image ? (
                  <Image
                    src={image}
                    alt="product image"
                    width={48}
                    height={48}
                  />
                ) : null}
              </button>
            ))}
          </div>

          <div className="w-full">
            {selectedImage ? (
              <Zoom>
                <div className="relative h-[500px]">
                  <Image
                    src={selectedImage}
                    alt="product image"
                    fill
                    sizes="90vw"
                    className="object-contain"
                    priority
                  />
                </div>
              </Zoom>
            ) : (
              <p>No image available</p> // Fallback when no images exist
            )}
          </div>
        </>
      ) : (
        <p>No images available</p> // Fallback for empty images array
      )}
    </div>
  );
}
