import { notFound } from 'next/navigation';
import React from 'react';

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { getOrderById } from '@/lib/actions/order.actions';
import OrderDetailsForm from '@/components/shared/order/order-details-form';
import Link from 'next/link';
import { formatId } from '@/lib/utils';

export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;

  return {
    title: `Order ${formatId(params.id)}`,
  };
}

export default async function OrderDetailsPage(props: {
  params: Promise<{
    id: string;
  }>;
}) {
  const params = await props.params;

  const { id } = params;

  // Fetch the order by ID
  const order = await getOrderById(id);
  if (!order) notFound();

  // Fetch the session and user permissions using KindeAuth
  const { getUser, getPermission } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    throw new Error('Authentication required');
  }

  const adminPermission = await getPermission('admin-access');
  const isAdmin = !!adminPermission?.isGranted; // Ensure boolean value

  return (
    <>
      <div className="flex gap-2">
        <Link href="/account">Your Account</Link>
        <span>›</span>
        <Link href="/account/orders">Your Orders</Link>
        <span>›</span>
        <span>Order {formatId(order._id)}</span>
      </div>
      <h1 className="h1-bold py-4">Order {formatId(order._id)}</h1>
      <OrderDetailsForm order={order} isAdmin={isAdmin} />
    </>
  );
}
