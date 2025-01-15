// import { Metadata } from 'next'

// import OverviewReport from './overview-report'
// import { auth } from '@/auth'
// export const metadata: Metadata = {
//   title: 'Admin Dashboard',
// }
// const DashboardPage = async () => {
//   const session = await auth()
//   if (session?.user.role !== 'Admin')
//     throw new Error('Admin permission required')

//   return <OverviewReport />
// }

// export default DashboardPage

import { Metadata } from 'next'

import OverviewReport from './overview-report'
// import { auth } from '@/auth'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'


export const metadata: Metadata = {
  title: 'Admin Dashboard',
}
const DashboardPage = async () => {
const {getUser} = getKindeServerSession()
const user = await getUser()

if(!user || user.email !== "amwebdev705@gmail.com") {
return redirect('/' )
} 

  return <OverviewReport />
}

export default DashboardPage