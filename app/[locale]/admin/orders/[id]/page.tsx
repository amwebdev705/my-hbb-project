import { notFound } from 'next/navigation';
import React from 'react';

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { getOrderById } from '@/lib/actions/order.actions';
import OrderDetailsForm from '@/components/shared/order/order-details-form';
import Link from 'next/link';

export const metadata = {
  title: 'Admin Order Details',
};

const AdminOrderDetailsPage = async (props: {
  params: Promise<{ id: string }>;
}) => {
  // Await the params object
  const { id } = await props.params;

  // Fetch the session and admin permission
  const { getUser, getPermission } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    throw new Error('Authentication required');
  }

  const adminPermission = await getPermission('admin-access');
  const isAdmin = adminPermission?.isGranted;

  if (!isAdmin) {
    throw new Error('Admin permission required');
  }

  // Fetch the order by ID
  const order = await getOrderById(id);
  if (!order) notFound();

  return (
    <main className="max-w-6xl mx-auto p-4">
      <div className="flex mb-4">
        <Link href="/admin/orders">Orders</Link>
        <span className="mx-1">›</span>
        <Link href={`/admin/orders/${order._id}`}>{order._id}</Link>
      </div>
      <OrderDetailsForm order={order} isAdmin={isAdmin} />
    </main>
  );
};

export default AdminOrderDetailsPage;
