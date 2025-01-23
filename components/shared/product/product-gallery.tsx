import Image from 'next/image';
import { useState } from 'react';

export default function ProductGallery({ images = [] }: { images?: string[] }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col items-center">
      {/* Main Image */}
      <div className="mb-4">
        <Image
          src={images[selectedImage]}
          width={500}
          height={500}
          alt="Main"
          className="border"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2">
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
    </div>
  );
}
