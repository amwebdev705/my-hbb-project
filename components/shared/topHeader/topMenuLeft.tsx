import ThemeSwitcher from './theme-switcher'
import LanguageSwitcher from './language-switcher'
// import { useTranslations } from 'next-intl'

const TopMenuLeft = () => {
  // const t = useTranslations()
  return (
    <div className='flex justify-end'>
      <nav className='md:flex gap-3 hidden w-full ml-10'>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </nav>
    </div>
  )
}

export default TopMenuLeft