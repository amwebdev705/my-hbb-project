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

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const sections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "Marketing", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
];

const Footer8 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <footer>
          <div className="grid grid-cols-4 justify-between gap-10 lg:grid-cols-6 lg:text-left">
            <div className="col-span-4 flex w-full flex-col justify-between gap-6 lg:col-span-2">
              <div>
                <span className="flex items-center gap-4">
                  <img
                    src="https://shadcnblocks.com/images/block/block-1.svg"
                    alt="logo"
                    className="h-11"
                  />
                  <p className="text-3xl font-semibold">Shadcnblocks</p>
                </span>
                <p className="mt-6 text-muted-foreground">
                  A collection of 100+ responsive HTML templates for your
                  startup business or side project.
                </p>
              </div>
              <ul className="flex items-center space-x-6">
                <li className="font-medium duration-200 hover:scale-110 hover:text-muted-foreground">
                  <a href="#">
                    <FaInstagram className="size-6" />
                  </a>
                </li>
                <li className="font-medium duration-200 hover:scale-110 hover:text-muted-foreground">
                  <a href="#">
                    <FaFacebook className="size-6" />
                  </a>
                </li>
                <li className="font-medium duration-200 hover:scale-110 hover:text-muted-foreground">
                  <a href="#">
                    <FaTwitter className="size-6" />
                  </a>
                </li>
                <li className="font-medium duration-200 hover:scale-110 hover:text-muted-foreground">
                  <a href="#">
                    <FaLinkedin className="size-6" />
                  </a>
                </li>
              </ul>
            </div>
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx} className="col-span-2 md:col-span-1">
                <h3 className="mb-5 font-medium">{section.title}</h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-span-4 md:col-span-2">
              <h3 className="mb-5 font-medium">Newsletter</h3>
              <div className="grid gap-1.5">
                <Label htmlFor="email">Subscribe to our newsletter</Label>
                <div className="flex w-full items-center space-x-2">
                  <Input type="email" placeholder="Email" />
                  <Button type="submit">Subscribe</Button>
                </div>
              </div>
              <p className="mt-1 text-xs font-medium text-muted-foreground">
                By submitting, you agree to our
                <a href="#" className="ml-1 text-primary hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
          <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
            <p>
              <span className="mr-1 font-bold text-primary">Shadcnblocks</span>
              © All rights reserved.
            </p>
            <p>Made with ❤️ by Shacnblocks</p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer8;
