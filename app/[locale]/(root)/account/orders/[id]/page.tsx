import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { getOrderById } from '@/lib/actions/order.actions'
import { formatId } from '@/lib/utils'
import OrderDetailsForm from '@/components/shared/order/order-details-form'

export default async function OrderDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  // Ensure `params` is resolved if it's a Promise
  const resolvedParams = await Promise.resolve(params)
  const { id } = resolvedParams

  // Fetch the order by ID
  const order = await getOrderById(id)
  if (!order) notFound()

  // Fetch session details using KindeAuth
  const { isAuthenticated, getUser } = getKindeServerSession()
  const isUserAuthenticated = await isAuthenticated()
  const user = isUserAuthenticated ? await getUser() : null

  // Determine if the user is an admin
  const isAdmin = user?.email === 'Admin'

  return (
    <>
      <div className='flex gap-2'>
        <Link href='/account'>Your Account</Link>
        <span>›</span>
        <Link href='/account/orders'>Your Orders</Link>
        <span>›</span>
        <span>Order {formatId(order._id)}</span>
      </div>
      <h1 className='h1-bold py-4'>Order {formatId(order._id)}</h1>
      <OrderDetailsForm order={order} isAdmin={isAdmin || false} />
    </>
  )
}
