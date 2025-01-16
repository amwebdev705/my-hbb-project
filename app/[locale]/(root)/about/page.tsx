'use client'

import { LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'

const About = () => {
  const { user, isAuthenticated, isLoading } = useKindeBrowserClient()
  return (
    <div>
      AboutUs
      {isLoading && <p>Loading...</p>}
      {user?.picture && (
        <Image
          src={user?.picture}
          alt='Picture of the author'
          width={50}
          height={50}
          className='rounded-full'
        />
      )}
      {user && !user.picture && (
        <p className='text-center text-xs mb-3'>
          Logged in as {user.given_name} {user.family_name}
        </p>
      )}
      {user?.email && (
        <p className='text-center text-xs mb-3'>Logged in as {user.email}</p>
      )}
      {isAuthenticated && <LogoutLink>Logout</LogoutLink>}
    </div>
  )
}

export default About
