import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import Image from 'next/image'
import React from 'react'

export default async function MadBoard() {
  const { isAuthenticated, getUser } = getKindeServerSession()
  const session = await isAuthenticated()
  const user = await getUser()

  return (
    <div>
      {session ? (
        <>
          <h1>Dashboard</h1>
          <h1>{user.given_name}</h1>
          <Image
            src={user.picture || ''}
            alt={user.given_name || ''}
            width={100}
            height={100}
          />

          <LogoutLink>Logout</LogoutLink>
        </>
      ) : (
        <div>
          <h1>Not Authenticated</h1>
        </div>
      )}
    </div>
  )
}
