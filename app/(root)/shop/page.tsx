import Pagination from '@/components/shared/pagination'
import { FilterSidebar } from '@/components/shared/product/fliter-sidebar'
import ProductCard from '@/components/shared/product/product-card'
import { getAllProducts } from '@/lib/actions/product.actions'
import { PAGE_SIZE } from '@/lib/constants'

interface SearchParams {
  query?: string | string[]
  page?: string | string[]
  sort?: string | string[]
  category?: string | string[]
  tag?: string | string[]
  price?: string | string[]
  rating?: string | string[]
}

export default async function Shop({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const {
    query = '',
    page = '1',
    sort = '',
    category = '',
    tag = '',
    price = '',
    rating = '',
  } = searchParams

  // Handle potential array types
  const normalizeParam = (param: string | string[] | undefined): string => {
    return Array.isArray(param) ? param[0] : param || ''
  }

  const normalizedQuery = normalizeParam(query)
  const normalizedPage = normalizeParam(page)
  const normalizedSort = normalizeParam(sort)
  const normalizedCategory = normalizeParam(category)
  const normalizedTag = normalizeParam(tag)
  const normalizedPrice = normalizeParam(price)
  const normalizedRating = normalizeParam(rating)

  const { products } = await getAllProducts({
    query: normalizedQuery,
    page: Number(normalizedPage),
    sort: normalizedSort,
    category: normalizedCategory,
    tag: normalizedTag,
    price: normalizedPrice,
    rating: normalizedRating,
    limit: PAGE_SIZE,
  })

  return (
    <div className='container mx-auto'>
      <div className='flex'>
        <FilterSidebar />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4'>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
      <Pagination page={Number(normalizedPage)} totalPages={2} />
    </div>
  )
}
