import { Product, Variant } from '@/types';
import { create } from 'zustand';

interface ProductState {
  product: Product | null;
  selectedVariant: Variant | null;
  selectedColor: string;
  selectedSize: string;
  quantities: Record<string, number>; // Store quantities keyed by product/variant ID
  setProduct: (product: Product) => void;
  setSelectedVariant: (variant: Variant | null) => void;
  setSelectedColor: (color: string) => void;
  setSelectedSize: (size: string) => void;
  setQuantity: (id: string, quantity: number) => void; // Update quantity for a specific product/variant
  getQuantity: (id: string) => number; // Retrieve quantity for a specific product/variant
}


export const useProductStore = create<ProductState>((set, get) => ({
  product: null,
  selectedVariant: null,
  selectedColor: '',
  selectedSize: '',
  quantities: {},

  setProduct: (product: Product) => set({ product }),
  setSelectedVariant: (variant: Variant | null) =>
    set({ selectedVariant: variant }),
  setSelectedColor: (color: string) => set({ selectedColor: color }),
  setSelectedSize: (size: string) => set({ selectedSize: size }),

  setQuantity: (id: string, quantity: number) => {
    set((state) => ({
      quantities: { ...state.quantities, [id]: quantity },
    }));
  },

  getQuantity: (id: string) => get().quantities[id] || 1,
}));


// <div className='prose'>
// {product.description ? (
//   <div
//     dangerouslySetInnerHTML={{
//       __html: DOMPurify.sanitize(product.description),
//     }}
//   ></div>
// ) : (
//   <p>No description provided.</p>
// )}
// </div>