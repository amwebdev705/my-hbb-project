// 'use client'

// import { Fragment, useState } from 'react'
// import {
//   Dialog,
//   DialogBackdrop,
//   DialogPanel,
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
//   Popover,
//   PopoverButton,
//   PopoverGroup,
//   PopoverPanel,
//   Radio,
//   RadioGroup,
//   Tab,
//   TabGroup,
//   TabList,
//   TabPanel,
//   TabPanels,
// } from '@headlessui/react'
// import {
//   Bars3Icon,
//   HeartIcon,
//   MagnifyingGlassIcon,
//   MinusIcon,
//   PlusIcon,
//   ShoppingBagIcon,
//   UserIcon,
//   XMarkIcon,
// } from '@heroicons/react/24/outline'
// import { StarIcon } from '@heroicons/react/20/solid'

// const navigation = {
//   categories: [
//     {
//       id: 'women',
//       name: 'Women',
//       featured: [
       
//       ],
//       sections: [
//         [
//           {
//             id: 'shoes',
//             name: 'Shoes & Accessories',
//             items: [
//               { name: 'Sneakers', href: '#' },
//               { name: 'Boots', href: '#' },
//               { name: 'Flats', href: '#' },
//               { name: 'Sandals', href: '#' },
//               { name: 'Heels', href: '#' },
//               { name: 'Socks', href: '#' },
//             ],
//           },
//           {
//             id: 'collection',
//             name: 'Shop Collection',
//             items: [
//               { name: 'Everything', href: '#' },
//               { name: 'Core', href: '#' },
//               { name: 'New Arrivals', href: '#' },
//               { name: 'Sale', href: '#' },
//               { name: 'Accessories', href: '#' },
//             ],
//           },
//         ],
//         [
//           {
//             id: 'clothing',
//             name: 'All Clothing',
//             items: [
//               { name: 'Basic Tees', href: '#' },
//               { name: 'Artwork Tees', href: '#' },
//               { name: 'Tops', href: '#' },
//               { name: 'Bottoms', href: '#' },
//               { name: 'Swimwear', href: '#' },
//               { name: 'Underwear', href: '#' },
//             ],
//           },
//           {
//             id: 'accessories',
//             name: 'All Accessories',
//             items: [
//               { name: 'Watches', href: '#' },
//               { name: 'Wallets', href: '#' },
//               { name: 'Bags', href: '#' },
//               { name: 'Sunglasses', href: '#' },
//               { name: 'Hats', href: '#' },
//               { name: 'Belts', href: '#' },
//             ],
//           },
//         ],
//         [
//           {
//             id: 'brands',
//             name: 'Brands',
//             items: [
//               { name: 'Full Nelson', href: '#' },
//               { name: 'My Way', href: '#' },
//               { name: 'Re-Arranged', href: '#' },
//               { name: 'Counterfeit', href: '#' },
//               { name: 'Significant Other', href: '#' },
//             ],
//           },
//         ],
//       ],
//     },
//     {
//       id: 'men',
//       name: 'Men',
//       featured: [
//         {
//           name: 'Accessories',
//           href: '#',
//           imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-03-category-01.jpg',
//           imageAlt:
//             'Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters.',
//         },
//         {
//           name: 'New Arrivals',
//           href: '#',
//           imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
//           imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
//         },
//         {
//           name: 'Artwork Tees',
//           href: '#',
//           imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-02-image-card-06.jpg',
//           imageAlt:
//             'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
//         },
//       ],
//       sections: [
//         [
//           {
//             id: 'shoes',
//             name: 'Shoes & Accessories',
//             items: [
//               { name: 'Sneakers', href: '#' },
//               { name: 'Boots', href: '#' },
//               { name: 'Sandals', href: '#' },
//               { name: 'Socks', href: '#' },
//             ],
//           },
//           {
//             id: 'collection',
//             name: 'Shop Collection',
//             items: [
//               { name: 'Everything', href: '#' },
//               { name: 'Core', href: '#' },
//               { name: 'New Arrivals', href: '#' },
//               { name: 'Sale', href: '#' },
//             ],
//           },
//         ],
//         [
//           {
//             id: 'clothing',
//             name: 'All Clothing',
//             items: [
//               { name: 'Basic Tees', href: '#' },
//               { name: 'Artwork Tees', href: '#' },
//               { name: 'Pants', href: '#' },
//               { name: 'Hoodies', href: '#' },
//               { name: 'Swimsuits', href: '#' },
//             ],
//           },
//           {
//             id: 'accessories',
//             name: 'All Accessories',
//             items: [
//               { name: 'Watches', href: '#' },
//               { name: 'Wallets', href: '#' },
//               { name: 'Bags', href: '#' },
//               { name: 'Sunglasses', href: '#' },
//               { name: 'Hats', href: '#' },
//               { name: 'Belts', href: '#' },
//             ],
//           },
//         ],
//         [
//           {
//             id: 'brands',
//             name: 'Brands',
//             items: [
//               { name: 'Re-Arranged', href: '#' },
//               { name: 'Counterfeit', href: '#' },
//               { name: 'Full Nelson', href: '#' },
//               { name: 'My Way', href: '#' },
//             ],
//           },
//         ],
//       ],
//     },
//   ],
//   pages: [
//     { name: 'Company', href: '#' },
//     { name: 'Stores', href: '#' },
//   ],
// }
// const product = {
//   name: 'Zip Tote Basket',
//   price: '$140',
//   rating: 4,
//   images: [
//     {
//       id: 1,
//       name: 'Angled view',
//       src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-03-product-01.jpg',
//       alt: 'Angled front view with bag zipped and handles upright.',
//     },
//     // More images...
//   ],
//   colors: [
//     { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
//     { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
//     { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
//   ],
//   description: `
//     <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
//   `,
//   details: [
//     {
//       name: 'Features',
//       items: [
//         'Multiple strap configurations',
//         'Spacious interior with top zip',
//         'Leather handle and tabs',
//         'Interior dividers',
//         'Stainless strap loops',
//         'Double stitched construction',
//         'Water-resistant',
//       ],
//     },
//     // More sections...
//   ],
// }
// const relatedProducts = [
//   {
//     id: 1,
//     name: 'Zip Tote Basket',
//     color: 'White and black',
//     href: '#',
//     imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-03-related-product-01.jpg',
//     imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
//     price: '$140',
//   },
//   // More products...
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Example() {
//   const [open, setOpen] = useState(false)
//   const [selectedColor, setSelectedColor] = useState(product.colors[0])

//   return (
//     <div className="bg-white">
//       {/* Mobile menu */}
//       <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
//         <DialogBackdrop
//           transition
//           className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
//         />

//         <div className="fixed inset-0 z-40 flex">
//           <DialogPanel
//             transition
//             className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
//           >
//             <div className="flex px-4 pb-2 pt-5">
//               <button
//                 type="button"
//                 onClick={() => setOpen(false)}
//                 className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
//               >
//                 <span className="sr-only">Close menu</span>
//                 <XMarkIcon aria-hidden="true" className="size-6" />
//               </button>
//             </div>

//             {/* Links */}
//             <TabGroup className="mt-2">
//               <div className="border-b border-gray-200">
//                 <TabList className="-mb-px flex space-x-8 px-4">
//                   {navigation.categories.map((category) => (
//                     <Tab
//                       key={category.name}
//                       className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
//                     >
//                       {category.name}
//                     </Tab>
//                   ))}
//                 </TabList>
//               </div>
//               <TabPanels as={Fragment}>
//                 {navigation.categories.map((category) => (
//                   <TabPanel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
//                     <div className="space-y-4">
//                       {category.featured.map((item, itemIdx) => (
//                         <div key={itemIdx} className="group relative overflow-hidden rounded-md bg-gray-100">
//                           <img
//                             alt={item.imageAlt}
//                             src={item.imageSrc}
//                             className="aspect-square w-full object-cover group-hover:opacity-75"
//                           />
//                           <div className="absolute inset-0 flex flex-col justify-end">
//                             <div className="bg-white/60 p-4 text-base sm:text-sm">
//                               <a href={item.href} className="font-medium text-gray-900">
//                                 <span aria-hidden="true" className="absolute inset-0" />
//                                 {item.name}
//                               </a>
//                               <p aria-hidden="true" className="mt-0.5 text-gray-700 sm:mt-1">
//                                 Shop now
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                     {category.sections.map((column, columnIdx) => (
//                       <div key={columnIdx} className="space-y-10">
//                         {column.map((section) => (
//                           <div key={section.name}>
//                             <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
//                               {section.name}
//                             </p>
//                             <ul
//                               role="list"
//                               aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
//                               className="mt-6 flex flex-col space-y-6"
//                             >
//                               {section.items.map((item) => (
//                                 <li key={item.name} className="flow-root">
//                                   <a href={item.href} className="-m-2 block p-2 text-gray-500">
//                                     {item.name}
//                                   </a>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         ))}
//                       </div>
//                     ))}
//                   </TabPanel>
//                 ))}
//               </TabPanels>
//             </TabGroup>

//             <div className="space-y-6 border-t border-gray-200 px-4 py-6">
//               {navigation.pages.map((page) => (
//                 <div key={page.name} className="flow-root">
//                   <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
//                     {page.name}
//                   </a>
//                 </div>
//               ))}
//             </div>

//             <div className="border-t border-gray-200 px-4 py-6">
//               <a href="#" className="-m-2 flex items-center p-2">
//                 <img
//                   alt=""
//                   src="https://tailwindui.com/plus/img/flags/flag-canada.svg"
//                   className="block h-auto w-5 shrink-0"
//                 />
//                 <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
//                 <span className="sr-only">, change currency</span>
//               </a>
//             </div>
//           </DialogPanel>
//         </div>
//       </Dialog>

    

//       <main className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
//         <div className="mx-auto max-w-2xl lg:max-w-none">
//           {/* Product */}
//           <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
//             {/* Image gallery */}
//             <TabGroup className="flex flex-col-reverse">
//               {/* Image selector */}
//               <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
//                 <TabList className="grid grid-cols-4 gap-6">
//                   {product.images.map((image) => (
//                     <Tab
//                       key={image.id}
//                       className="group relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-indigo-500/50 focus:ring-offset-4"
//                     >
//                       <span className="sr-only">{image.name}</span>
//                       <span className="absolute inset-0 overflow-hidden rounded-md">
//                         <img alt="" src={image.src} className="size-full object-cover" />
//                       </span>
//                       <span
//                         aria-hidden="true"
//                         className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-[selected]:ring-indigo-500"
//                       />
//                     </Tab>
//                   ))}
//                 </TabList>
//               </div>

//               <TabPanels>
//                 {product.images.map((image) => (
//                   <TabPanel key={image.id}>
//                     <img alt={image.alt} src={image.src} className="aspect-square w-full object-cover sm:rounded-lg" />
//                   </TabPanel>
//                 ))}
//               </TabPanels>
//             </TabGroup>

//             {/* Product info */}
//             <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
//               <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>

//               <div className="mt-3">
//                 <h2 className="sr-only">Product information</h2>
//                 <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>
//               </div>

//               {/* Reviews */}
//               <div className="mt-3">
//                 <h3 className="sr-only">Reviews</h3>
//                 <div className="flex items-center">
//                   <div className="flex items-center">
//                     {[0, 1, 2, 3, 4].map((rating) => (
//                       <StarIcon
//                         key={rating}
//                         aria-hidden="true"
//                         className={classNames(
//                           product.rating > rating ? 'text-indigo-500' : 'text-gray-300',
//                           'size-5 shrink-0',
//                         )}
//                       />
//                     ))}
//                   </div>
//                   <p className="sr-only">{product.rating} out of 5 stars</p>
//                 </div>
//               </div>

//               <div className="mt-6">
//                 <h3 className="sr-only">Description</h3>

//                 <div
//                   dangerouslySetInnerHTML={{ __html: product.description }}
//                   className="space-y-6 text-base text-gray-700"
//                 />
//               </div>

//               <form className="mt-6">
//                 {/* Colors */}
//                 <div>
//                   <h3 className="text-sm text-gray-600">Color</h3>

//                   <fieldset aria-label="Choose a color" className="mt-2">
//                     <RadioGroup value={selectedColor} onChange={setSelectedColor} className="flex items-center gap-x-3">
//                       {product.colors.map((color) => (
//                         <Radio
//                           key={color.name}
//                           value={color}
//                           aria-label={color.name}
//                           className={classNames(
//                             color.selectedColor,
//                             'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1',
//                           )}
//                         >
//                           <span
//                             aria-hidden="true"
//                             className={classNames(color.bgColor, 'size-8 rounded-full border border-black/10')}
//                           />
//                         </Radio>
//                       ))}
//                     </RadioGroup>
//                   </fieldset>
//                 </div>

//                 <div className="mt-10 flex">
//                   <button
//                     type="submit"
//                     className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
//                   >
//                     Add to bag
//                   </button>

//                   <button
//                     type="button"
//                     className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
//                   >
//                     <HeartIcon aria-hidden="true" className="size-6 shrink-0" />
//                     <span className="sr-only">Add to favorites</span>
//                   </button>
//                 </div>
//               </form>

//               <section aria-labelledby="details-heading" className="mt-12">
//                 <h2 id="details-heading" className="sr-only">
//                   Additional details
//                 </h2>

//                 <div className="divide-y divide-gray-200 border-t">
//                   {product.details.map((detail) => (
//                     <Disclosure key={detail.name} as="div">
//                       <h3>
//                         <DisclosureButton className="group relative flex w-full items-center justify-between py-6 text-left">
//                           <span className="text-sm font-medium text-gray-900 group-data-[open]:text-indigo-600">
//                             {detail.name}
//                           </span>
//                           <span className="ml-6 flex items-center">
//                             <PlusIcon
//                               aria-hidden="true"
//                               className="block size-6 text-gray-400 group-hover:text-gray-500 group-data-[open]:hidden"
//                             />
//                             <MinusIcon
//                               aria-hidden="true"
//                               className="hidden size-6 text-indigo-400 group-hover:text-indigo-500 group-data-[open]:block"
//                             />
//                           </span>
//                         </DisclosureButton>
//                       </h3>
//                       <DisclosurePanel className="pb-6">
//                         <ul
//                           role="list"
//                           className="list-disc space-y-1 pl-5 text-sm/6 text-gray-700 marker:text-gray-300"
//                         >
//                           {detail.items.map((item) => (
//                             <li key={item} className="pl-2">
//                               {item}
//                             </li>
//                           ))}
//                         </ul>
//                       </DisclosurePanel>
//                     </Disclosure>
//                   ))}
//                 </div>
//               </section>
//             </div>
//           </div>

//           <section aria-labelledby="related-heading" className="mt-10 border-t border-gray-200 px-4 py-16 sm:px-0">
//             <h2 id="related-heading" className="text-xl font-bold text-gray-900">
//               Customers also bought
//             </h2>

//             <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
//               {relatedProducts.map((product) => (
//                 <div key={product.id}>
//                   <div className="relative">
//                     <div className="relative h-72 w-full overflow-hidden rounded-lg">
//                       <img alt={product.imageAlt} src={product.imageSrc} className="size-full object-cover" />
//                     </div>
//                     <div className="relative mt-4">
//                       <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
//                       <p className="mt-1 text-sm text-gray-500">{product.color}</p>
//                     </div>
//                     <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
//                       <div
//                         aria-hidden="true"
//                         className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
//                       />
//                       <p className="relative text-lg font-semibold text-white">{product.price}</p>
//                     </div>
//                   </div>
//                   <div className="mt-6">
//                     <a
//                       href={product.href}
//                       className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
//                     >
//                       Add to bag<span className="sr-only">, {product.name}</span>
//                     </a>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </div>
//       </main>

    

           
//     </div>
//   )
// }

import React from 'react'

export default function TestPage() {
  return (
    <div>TestPage</div>
  )
}
