import { Metadata } from 'next';
import Link from 'next/link';

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import DeleteDialog from '@/components/shared/delete-dialog';
import Pagination from '@/components/shared/pagination';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { deleteUser, getAllUsers } from '@/lib/actions/user.actions';
import { IUser } from '@/lib/db/models/user.model';
import { formatId } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Admin Users',
};

export default async function AdminUser(props: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { searchParams } = props;

  // Fetch authentication details using KindeAuth
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  const user = isUserAuthenticated ? await getUser() : null;

  // Ensure the user has admin permissions
  if (!isUserAuthenticated || user?.email !== 'Admin') {
    throw new Error('Admin permission required');
  }

  // Parse page number from search params
  const page = Number((await searchParams).page) || 1;

  // Fetch users for the admin dashboard
  const users = await getAllUsers({
    page,
  });

  return (
    <div className="space-y-2">
      <h1 className="h1-bold">Users</h1>
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
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.email}</TableCell>
                {/* <TableCell>{user.role}</TableCell> */}
                <TableCell className="flex gap-1">
                  <Button asChild variant="outline" size="sm">
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
  );
}
