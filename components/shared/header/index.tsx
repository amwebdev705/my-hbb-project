import Image from 'next/image'
import Link from 'next/link'
// import { getAllCategories } from '@/lib/actions/product.actions'
import Menu from './menu'
import Search from './search'
import data from '@/lib/data'
// import Sidebar from './sidebar'
// import { getSetting } from '@/lib/actions/setting.actions'
import { getTranslations } from 'next-intl/server'
import Prods from '../productsNav'
import { LoginLink, LogoutLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components'
import { Button } from '@/components/ui/button'
// import Navbar4 from '@/components/comps'
// import ProductsNav from '@/app/[locale]/productsNav'

export default async function Header() {
  // const categories = await getAllCategories()
  // const { site } = await getSetting()
  const t = await getTranslations()
  return (
    <header className='bg-[#d1bd7d]  text-black'>
      <div className='px-2'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <div>About Us | </div>
            <div>Shop | </div>
            {/* <Link
              href='/'
              className='flex items-center header-button font-extrabold text-2xl m-1 '
            >
              <Image
                src={site.logo}
                width={40}
                height={40}
                alt={`${site.name} logo`}
              />
              {site.name}
            </Link> */}
          </div>
          <Button><LoginLink>Sign In</LoginLink></Button>
          <Button><RegisterLink>Sign Up</RegisterLink></Button>
          <Button><LogoutLink>Logout</LogoutLink></Button>
          

          <div className='hidden md:block flex-1 max-w-xl'>
            <Link
              href='/'
              className='flex items-center header-button font-extrabold text-2xl m-1 ml-72'
            >
              <Image
                src={
                  'https://du9gmflrz1.ufs.sh/f/HowwugeXmS3hgKp6LZU8XxMgNPkCIUfvn190LiQTAasVOpD4'
                }
                width={100}
                height={100}
                // alt={`${site.name} logo`}
                alt='logo'
              />
              {/* {site.name} */}
            </Link>
          </div>
          <div className=''>{/* <Search /> */}</div>

          <Menu />
        </div>
        <div className='md:hidden block py-2'>
          <Search />
        </div>
      </div>
      <div className='flex items-center px-3 mb-[1px]  bg-gray-800'>
        {/* <Sidebar categories={categories} /> */}
        <div className='flex items-center flex-wrap gap-3 overflow-hidden   max-h-[42px]'>
          {/* <Navbar4/> */}
          <Prods/>
          {data.headerMenus.map((menu) => (
            <Link
              href={menu.href}
              key={menu.href}
              className='header-button !p-2 '
            >
              {t('Header.' + menu.name)}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
