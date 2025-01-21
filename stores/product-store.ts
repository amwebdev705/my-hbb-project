import { Product, Variant } from '@/types'
import { create } from 'zustand'

interface ProductState {
  product: Product | null
  selectedVariant: Variant | null
  selectedColor: string
  selectedSize: string
  setProduct: (product: Product) => void
  setSelectedVariant: (variant: Variant | null) => void
  setSelectedColor: (color: string) => void
  setSelectedSize: (size: string) => void
}

export const useProductStore = create<ProductState>((set) => ({
  product: null,
  selectedVariant: null,
  selectedColor: '', // Default to an empty string
  selectedSize: '', // Default to an empty string
  setProduct: (product: Product) => set({ product }),
  setSelectedVariant: (variant: Variant | null) =>
    set({ selectedVariant: variant }),
  setSelectedColor: (color: string) => set({ selectedColor: color }),
  setSelectedSize: (size: string) => set({ selectedSize: size }),
}))
