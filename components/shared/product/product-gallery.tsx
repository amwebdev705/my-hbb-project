'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ProductGallery({ images = [] }: { images?: string[] }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex gap-2">
      {/* Thumbnails */}
      <div className="flex flex-col gap-2">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelectedImage(i)}
            className={`p-1 ${
              selectedImage === i ? 'border-2 border-primary' : 'border'
            }`}
          >
            <Image src={img} width={50} height={50} alt={`Thumbnail ${i}`} />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div>
        <Image
          src={images[selectedImage]}
          width={500}
          height={500}
          alt="Main"
          className="border"
        />
      </div>
    </div>
  );
}
