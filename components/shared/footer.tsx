// 'use client'
// import { ChevronUp } from 'lucide-react'
// import Link from 'next/link'
// import Image from 'next/image'

// import { Button } from '@/components/ui/button'
// import useSettingStore from '@/hooks/use-setting-store'
// import { Select, SelectContent, SelectItem, SelectTrigger } from '../ui/select'

// import { SelectValue } from '@radix-ui/react-select'
// import { useLocale, useTranslations } from 'next-intl'
// import { usePathname, useRouter } from '@/i18n/routing'
// import { i18n } from '@/i18n-config'

// export default function Footer() {
//   const router = useRouter()
//   const pathname = usePathname()
//   const {
//     setting: { site, availableCurrencies, currency },
//     setCurrency,
//   } = useSettingStore()
//   const { locales } = i18n

//   const locale = useLocale()
//   const t = useTranslations()
//   return (
//     <footer className='bg-black  text-white underline-link'>
//       <div className='w-full'>
//         <Button
//           variant='ghost'
//           className='bg-gray-800 w-full  rounded-none '
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//         >
//           <ChevronUp className='mr-2 h-4 w-4' />
//           {t('Footer.Back to top')}
//         </Button>
//         <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto'>
//           <div>
//             <h3 className='font-bold mb-2'>{t('Footer.Get to Know Us')}</h3>
//             <ul className='space-y-2'>
//               <li>
//                 <Link href='/page/careers'>{t('Footer.Careers')}</Link>
//               </li>
//               <li>
//                 <Link href='/page/blog'>{t('Footer.Blog')}</Link>
//               </li>
//               <li>
//                 <Link href='/page/about-us'>
//                   {t('Footer.About name', { name: site.name })}
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className='font-bold mb-2'>{t('Footer.Make Money with Us')}</h3>
//             <ul className='space-y-2'>
//               <li>
//                 <Link href='/page/sell'>
//                   {t('Footer.Sell products on', { name: site.name })}
//                 </Link>
//               </li>
//               <li>
//                 <Link href='/page/become-affiliate'>
//                   {t('Footer.Become an Affiliate')}
//                 </Link>
//               </li>
//               <li>
//                 <Link href='/page/advertise'>
//                   {t('Footer.Advertise Your Products')}
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className='font-bold mb-2'>{t('Footer.Let Us Help You')}</h3>
//             <ul className='space-y-2'>
//               <li>
//                 <Link href='/page/shipping'>
//                   {t('Footer.Shipping Rates & Policies')}
//                 </Link>
//               </li>
//               <li>
//                 <Link href='/page/returns-policy'>
//                   {t('Footer.Returns & Replacements')}
//                 </Link>
//               </li>
//               <li>
//                 <Link href='/page/help'>{t('Footer.Help')}</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className='border-t border-gray-800'>
//           <div className='max-w-7xl mx-auto py-8 px-4 flex flex-col items-center space-y-4'>
//             <div className='flex items-center space-x-4 flex-wrap md:flex-nowrap'>
//               <Image
//                 src='/icons/logo.svg'
//                 alt={`${site.name} logo`}
//                 width={48}
//                 height={48}
//                 className='w-14'
//                 style={{
//                   maxWidth: '100%',
//                   height: 'auto',
//                 }}
//               />{' '}
//               <Select
//                 value={locale}
//                 onValueChange={(value) => {
//                   router.push(pathname, { locale: value })
//                 }}
//               >
//                 <SelectTrigger>
//                   <SelectValue placeholder={t('Footer.Select a language')} />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {locales.map((lang, index) => (
//                     <SelectItem key={index} value={lang.code}>
//                       <Link
//                         className='w-full flex items-center gap-1'
//                         href={pathname}
//                         locale={lang.code}
//                       >
//                         <span className='text-lg'>{lang.icon}</span> {lang.name}
//                       </Link>
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//               <Select
//                 value={currency}
//                 onValueChange={(value) => {
//                   setCurrency(value)
//                   window.scrollTo(0, 0)
//                 }}
//               >
//                 <SelectTrigger>
//                   <SelectValue placeholder={t('Footer.Select a currency')} />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {availableCurrencies
//                     .filter((x) => x.code)
//                     .map((currency, index) => (
//                       <SelectItem key={index} value={currency.code}>
//                         {currency.name} ({currency.code})
//                       </SelectItem>
//                     ))}
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className='p-4'>
//         <div className='flex justify-center  gap-3 text-sm'>
//           <Link href='/page/conditions-of-use'>
//             {t('Footer.Conditions of Use')}
//           </Link>
//           <Link href='/page/privacy-policy'>{t('Footer.Privacy Notice')}</Link>
//           <Link href='/page/help'>{t('Footer.Help')}</Link>
//         </div>
//         <div className='flex justify-center text-sm'>
//           <p> © {site.copyright}</p>
//         </div>
//         <div className='mt-8 flex justify-center text-sm text-gray-400'>
//           {site.address} | {site.phone}
//         </div>
//       </div>
//     </footer>
//   )
// }

import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const sections = [
  {
    title: 'Policies',
    links: [
      {
        name: 'Privacy',
        href: 'https://app.termly.io/policy-viewer/policy.html?policyUUID=97257ea0-7d31-4bc1-9759-a1220943de05',
      },
      {
        name: 'Terms',
        href: 'https://app.termly.io/policy-viewer/policy.html?policyUUID=b88c443b-6cf0-485b-bd39-ac5411afb574',
      },
      {
        name: 'Cookies',
        href: 'https://app.termly.io/policy-viewer/policy.html?policyUUID=99567149-af9e-45a2-bc9a-22ace7c485cd',
      },
      {
        name: 'Returns',
        href: 'https://app.termly.io/policy-viewer/policy.html?policyUUID=feb90577-8b82-41f8-a43b-8863fce6e7c8',
      },
      {
        name: 'Shipping',
        href: 'https://app.termly.io/policy-viewer/policy.html?policyUUID=b59cf784-1f9d-428c-9b59-f2f760fe8ead',
      },
      {
        name: 'Acceptable Use',
        href: 'https://app.termly.io/policy-viewer/policy.html?policyUUID=b59cf784-1f9d-428c-9b59-f2f760fe8ead',
      },
      {
        name: 'Disclaimer',
        href: 'https://app.termly.io/policy-viewer/policy.html?policyUUID=19850f5e-57e1-4f0a-9c17-c26c22eaffed',
      },
    ],
  },
  {
    title: 'Links',
    links: [
      { name: 'Shop', href: '/shop' },
      { name: 'Blog', href: '#' },
      { name: 'About', href: '/about' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Contact', href: '#' },
    ],
  },
]

const Footer = () => {
  return (
    <section className='py-32'>
      <div className='container'>
        <footer>
          <div className='grid grid-cols-4 justify-between gap-10 lg:grid-cols-6 lg:text-left'>
            <div className='col-span-4 flex w-full flex-col justify-between gap-6 lg:col-span-2'>
              <div>
                <span className='flex items-center gap-4'>
                  {/* <img
                    src="https://shadcnblocks.com/images/block/block-1.svg"
                    alt="logo"
                    className="h-11"
                  /> */}
                  <p className='text-3xl font-semibold'>HB Boutique</p>
                </span>
                <p className='mt-6 text-muted-foreground'>
                  You will be delighted with your environmentally responsible
                  purchase.
                </p>
              </div>
              <ul className='flex items-center space-x-6'>
                <li className='font-medium duration-200 hover:scale-110 hover:text-muted-foreground'>
                  <a href='https://www.instagram.com/hbbecochic/?igsh=MWxlN2ZhdWxoOHZwaA%3D%3D&utm_source=qr'>
                    <FaInstagram className='size-6' />
                  </a>
                </li>
                <li className='font-medium duration-200 hover:scale-110 hover:text-muted-foreground'>
                  <a href='https://www.facebook.com/profile.php?id=61557460627884&mibextid=LQQJ4d'>
                    <FaFacebook className='size-6' />
                  </a>
                </li>

                <li className='font-medium duration-200 hover:scale-110 hover:text-muted-foreground'>
                  <a href='https://www.pinterest.com/harlam0191/?invite_code=2b37189da8304b888fcdd96e1d8b222e&sender=900649762888508819'>
                    <FaPinterest className='size-6' />
                  </a>
                </li>
              </ul>
            </div>
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx} className='col-span-2 md:col-span-1'>
                <h3 className='mb-5 font-medium'>{section.title}</h3>
                <ul className='space-y-4 text-sm text-muted-foreground'>
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className='font-medium hover:text-primary'
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className='col-span-4 md:col-span-2'>
              <h3 className='mb-5 font-medium'>Newsletter</h3>
              <div className='grid gap-1.5'>
                <Label htmlFor='email'>Subscribe to our newsletter</Label>
                <div className='flex w-full items-center space-x-2'>
                  <Input type='email' placeholder='Email' />
                  <Button type='submit'>Subscribe</Button>
                </div>
              </div>
              <p className='mt-1 text-xs font-medium text-muted-foreground'>
                By submitting, you agree to our
                <a
                  href='https://app.termly.io/policy-viewer/policy.html?policyUUID=97257ea0-7d31-4bc1-9759-a1220943de05'
                  className='ml-1 text-primary hover:underline'
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
          <div className='mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left'>
            <p>
              <span className='mr-1 font-bold text-primary'>HB Boutique</span>©
              All rights reserved.
            </p>
            {/* <p>Made with ❤️ by Shacnblocks</p> */}
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Footer
