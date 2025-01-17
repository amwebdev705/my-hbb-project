import React from 'react'

import Header from '@/components/shared/header'
import Footer from '@/components/shared/footer'
import TopHeader from '@/components/shared/topHeader'

export default async function ShopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex flex-col min-h-screen'>
      <TopHeader/>
      <Header />
      <main className='flex-1 flex flex-col p-4'>{children}</main>
      <Footer />
    </div>
  )
}