import UserButton from './user-button'
// import ThemeSwitcher from './theme-switcher'

// import { useTranslations } from 'next-intl'

const TopMenuRight = () => {
  // const t = useTranslations()
  return (
    <div className='flex justify-end'>
      <nav className='md:flex gap-3 hidden w-full'>
        {/* <ThemeSwitcher /> */}
        <UserButton />
        {/* {forAdmin ? null : <CartButton />} */}
      </nav>
    </div>
  )
}

export default TopMenuRight