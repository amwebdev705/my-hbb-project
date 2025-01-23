import Pagination from '@/components/shared/pagination'
// import { FilterSidebar } from '@/components/shared/product/filter-sidebar';
import ProductCard from '@/components/shared/product/product-card'
import { getAllProducts } from '@/lib/actions/product.actions'
// import { PAGE_SIZE } from '@/lib/constants';

export default async function Shop({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>
}) {
  const searchParamsObj = await searchParams
  const query = searchParamsObj.query || ''
  const page = searchParamsObj.page || '1'
  const sort = searchParamsObj.sort || ''
  const category = searchParamsObj.category || ''
  const tag = searchParamsObj.tag || ''
  const price = searchParamsObj.price || ''
  const rating = searchParamsObj.rating || ''

  const { products } = await getAllProducts({
    query,
    page: Number(page),
    sort,
    category,
    tag,
    price,
    rating,
    // limit: PAGE_SIZE,
  })

  return (
    // <div className='container mx-auto'>
    //   <div className='flex'>
    //     <FilterSidebar />
    //     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4'>

    <div className='bg-white'>
      <div className='mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8'>
        <div className='-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4'>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
      {/* Pass page and totalPages to the Pagination component */}
      <Pagination page={Number(page)} totalPages={3} />
    </div>
  )
}

// import React from 'react'

// export default function Shop() {
//   return <div>ShopPage</div>
// }
