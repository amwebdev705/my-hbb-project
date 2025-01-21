import LanguageSwitcher from '../header/language-switcher'
import UserButton from '../header/user-button'

export default function TopHeader() {
  return (
    <div>
      {/* Running banner for "Free Shipping" */}
      <div className='bg-black text-white overflow-hidden'>
        <div className='whitespace-nowrap py-2 animate-scroll scroll-smooth md:scroll-auto'>
          Free Shipping On Orders Over $100
        </div>
      </div>

      {/* Hidden on small screens, flex layout for md+ */}
      <div className='hidden md:flex items-center justify-between px-5 w-full'>
        {/* LanguageSwitcher aligned to the left */}
        <div className='ml-20'>
          <LanguageSwitcher />
        </div>
        {/* UserButton aligned to the right */}
        <div className='mr-20'>
          <UserButton />
        </div>
      </div>
    </div>
  )
}
