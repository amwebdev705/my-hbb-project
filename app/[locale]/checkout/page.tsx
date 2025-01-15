import { Metadata } from 'next'
import CheckoutForm from './checkout-form'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Checkout',
}

export default async function CheckoutPage() {
  const { isAuthenticated, getUser } = getKindeServerSession()
  const isUserAuthenticated = await isAuthenticated()
  const user = isUserAuthenticated ? await getUser() : null
  if (!user) {
    redirect('/sign-in?callbackUrl=/checkout')
  }
  return <CheckoutForm />
}
