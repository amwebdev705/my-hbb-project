import { Metadata } from 'next'

import OverviewReport from './overview-report'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Admin Dashboard',
}
const DashboardPage = async () => {
  const { isAuthenticated, getPermission } = getKindeServerSession()
  const isLoggedIn = await isAuthenticated()
  if (!isLoggedIn) {
    // redirect('/api/auth/login')
    redirect('/cart')
  }
  const requiredPermission = await getPermission('create-product')
  if (!requiredPermission?.isGranted) {
    redirect('/')
  }

  // const session = await auth()
  // if (session?.user.role !== 'Admin')
  //   throw new Error('Admin permission required')

  return <OverviewReport />
}

export default DashboardPage
