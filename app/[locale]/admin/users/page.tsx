import { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
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
import { deleteUser, getAllUsers } from '@/lib/actions/user.actions'
import { IUser } from '@/lib/db/models/user.model'
import { formatId } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Admin Users',
}

export default async function AdminUser(props: {
  searchParams: Promise<{ page?: string }> // Awaitable type
}) {
  // Await the `searchParams`
  const resolvedSearchParams = await props.searchParams

  // Fetch authentication details using KindeAuth
  const { getUser, getPermission } = getKindeServerSession()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const user = await getUser()
  const adminPermission = await getPermission('admin-access')
  const isAdmin = adminPermission?.isGranted

  // If the user does not have admin permissions, redirect to the homepage
  if (!isAdmin) {
    redirect('/')
    return null // Prevent further rendering
  }

  // Parse page number from resolved search params
  const page = Number(resolvedSearchParams.page) || 1

  // Fetch users for the admin dashboard
  const users = await getAllUsers({ page })

  return (
    <div className='space-y-2'>
      <h1 className='h1-bold'>Users</h1>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users?.data.map((user: IUser) => (
              <TableRow key={user._id}>
                <TableCell>{formatId(user._id)}</TableCell>
                <TableCell>
                  {user.firstName && user.lastName
                    ? `${user.firstName} ${user.lastName}`
                    : ''}
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell className='flex gap-1'>
                  <Button asChild variant='outline' size='sm'>
                    <Link href={`/admin/users/${user._id}`}>Edit</Link>
                  </Button>
                  <DeleteDialog id={user._id} action={deleteUser} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {users?.totalPages > 1 && (
          <Pagination page={page} totalPages={users?.totalPages} />
        )}
      </div>
    </div>
  )
}
