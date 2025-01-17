import { notFound } from 'next/navigation';
import React from 'react';

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { getOrderById } from '@/lib/actions/order.actions';
import PaymentForm from './payment-form';
import Stripe from 'stripe';

export const metadata = {
  title: 'Payment',
};

const CheckoutPaymentPage = async (props: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const { id } = await props.params;

  const order = await getOrderById(id);
  if (!order) notFound();

  const { getUser, getPermission } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    throw new Error('Authentication required');
  }

  const adminPermission = await getPermission('admin-access');
  const isAdmin = !!adminPermission?.isGranted;

  let clientSecret = null;

  if (order.paymentMethod === 'Stripe' && !order.isPaid) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
      // apiVersion: '2022-11-15', // Ensure you're using the correct API version
    });

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(order.totalPrice * 100),
      currency: 'USD',
      metadata: { orderId: order._id },
    });

    clientSecret = paymentIntent.client_secret;
  }

  return (
    <PaymentForm
      order={order}
      paypalClientId={process.env.PAYPAL_CLIENT_ID || 'sb'}
      clientSecret={clientSecret}
      isAdmin={isAdmin}
    />
  );
};

export default CheckoutPaymentPage;
