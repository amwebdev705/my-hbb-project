import { Metadata } from 'next'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'

import OverviewReport from './overview-report'

export const metadata: Metadata = {
  title: 'Admin Dashboard',
}

const DashboardPage = async () => {
  const { isAuthenticated, getPermission } = getKindeServerSession()

  if (!(await isAuthenticated())) {
    return redirect('/api/auth/login')
  }

  if (!(await getPermission('admin-access'))?.isGranted) {
    return redirect('/')
  }

  return <OverviewReport />
}

export default DashboardPage
