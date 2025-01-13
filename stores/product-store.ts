import { Product, Variant } from '@/types'
import { create } from 'zustand'

interface ProductState {
  product: Product | null
  selectedVariant: Variant | null
  setProduct: (product: Product) => void
  setSelectedVariant: (variant: Variant | null) => void
}

export const useProductStore = create<ProductState>((set) => ({
  product: null,
  selectedVariant: null,
  setProduct: (product) => set({ product }),
  setSelectedVariant: (variant) => set({ selectedVariant: variant }),
}))
