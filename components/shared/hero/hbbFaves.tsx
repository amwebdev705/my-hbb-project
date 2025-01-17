'use client';

import Image from 'next/image';

interface FavoriteProductsProps {
  favorites: {
    _id: string;
    name: string;
    price: number;
    image: string;
  }[];
}

const FavoriteProducts: React.FC<FavoriteProductsProps> = ({ favorites }) => {
  if (!favorites || favorites.length === 0) {
    return <div>No recommended products found.</div>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Editor’s Favorites</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorites.map((product) => (
          <div key={product._id} className="card">
            <Image
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover mb-2"
              width={300}
              height={300}
              priority
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-500">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteProducts;
