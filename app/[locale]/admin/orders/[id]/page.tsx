import { notFound } from 'next/navigation'
import React from 'react'

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { getOrderById } from '@/lib/actions/order.actions'
import OrderDetailsForm from '@/components/shared/order/order-details-form'
import Link from 'next/link'

export const metadata = {
  title: 'Admin Order Details',
}

const AdminOrderDetailsPage = async (props: {
  params: Promise<{
    id: string
  }>
}) => {
  const params = await props.params

  const { id } = params

  const order = await getOrderById(id)
  if (!order) notFound()

  const { isAuthenticated, getUser } = getKindeServerSession()
  const isUserAuthenticated = await isAuthenticated()
  const user = isUserAuthenticated ? await getUser() : null

  return (
    <main className='max-w-6xl mx-auto p-4'>
      <div className='flex mb-4'>
        <Link href='/admin/orders'>Orders</Link> <span className='mx-1'>›</span>
        <Link href={`/admin/orders/${order._id}`}>{order._id}</Link>
      </div>
      <OrderDetailsForm
        order={order}
        isAdmin={user?.email === 'Admin' || false}
      />
    </main>
  )
}

export default AdminOrderDetailsPage
