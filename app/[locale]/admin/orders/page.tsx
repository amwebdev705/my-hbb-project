import { Metadata } from 'next'
import Link from 'next/link'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

import DeleteDialog from '@/components/shared/delete-dialog'
import Pagination from '@/components/shared/pagination'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { deleteOrder, getAllOrders } from '@/lib/actions/order.actions'
import { formatDateTime, formatId } from '@/lib/utils'
import { IOrderList } from '@/types'
import ProductPrice from '@/components/shared/product/product-price'

export const metadata: Metadata = {
  title: 'Admin Orders',
}

interface OrdersPageProps {
  searchParams: Promise<Record<string, string | undefined>> // Allow undefined properties
}

export default async function OrdersPage({ searchParams }: OrdersPageProps) {

  // Fetch the search parameters
  const searchParamsObj = await searchParams;
  
  // Fetch the session using KindeAuth
  const { getUser, getPermission } = getKindeServerSession()

  const user = await getUser()
  if (!user) {
    throw new Error('Authentication required')
  }

  const adminPermission = await getPermission('admin-access')
  const isAdmin = adminPermission?.isGranted

  if (!isAdmin) {
    throw new Error('Admin permission required')
  }

  // Get the current page from search parameters
  const page = searchParamsObj.page || '1'

  // Fetch orders for the admin view
  const orders = await getAllOrders({
    page: Number(page),
  })

  return (
    <div className='space-y-2'>
      <h1 className='h1-bold'>Orders</h1>
      <div className='overflow-x-auto'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Buyer</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Paid</TableHead>
              <TableHead>Delivered</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.data.map((order: IOrderList) => (
              <TableRow key={order._id}>
                <TableCell>{formatId(order._id)}</TableCell>
                <TableCell>
                  {formatDateTime(order.createdAt!).dateTime}
                </TableCell>
                <TableCell>
                  {order.user ? order.user.name : 'Deleted User'}
                </TableCell>
                <TableCell>
                  <ProductPrice price={order.totalPrice} plain />
                </TableCell>
                <TableCell>
                  {order.isPaid && order.paidAt
                    ? formatDateTime(order.paidAt).dateTime
                    : 'No'}
                </TableCell>
                <TableCell>
                  {order.isDelivered && order.deliveredAt
                    ? formatDateTime(order.deliveredAt).dateTime
                    : 'No'}
                </TableCell>
                <TableCell className='flex gap-1'>
                  <Button asChild variant='outline' size='sm'>
                    <Link href={`/admin/orders/${order._id}`}>Details</Link>
                  </Button>
                  <DeleteDialog id={order._id} action={deleteOrder} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {orders.totalPages > 1 && (
          <Pagination page={Number(page)} totalPages={orders.totalPages!} />
        )}
      </div>
    </div>
  )
}