import TopMenuLeft from './topMenuLeft'
import TopMenuRight from './topMenuRight'

export default async function TopHeader() {
  return (
    <header className='bg-black  text-white'>
      <div className='px-2'>
        <div className='flex items-center justify-between'>
          <TopMenuLeft />

          <div className='hidden md:block flex-1 max-w-xl'>
            <h1 className='text-center'>Free Shipping On Orders Over $100</h1>
          </div>
          <TopMenuRight />
        </div>
        <div className='md:hidden block py-2'>
          <h1 className='text-center'>Free Shipping On Orders Over $100</h1>
        </div>
      </div>
    </header>
  )
}
