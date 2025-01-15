import { useState, useEffect } from 'react'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

// Define the User interface to align with KindeUser's structure
interface User {
  firstName?: string | null
  lastName?: string | null
  email?: string | null
}

interface Session {
  user: User
}

export const useKindeSession = (): {
  session: Session | null
  updateSession: (updatedSession: Session) => void
} => {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    const fetchSession = async () => {
      const { getUser } = getKindeServerSession()
      const user = await getUser()
      
      // Map user data to align with the expected `User` interface
      const mappedUser: User = {
        firstName: user.given_name || null,
        lastName: user.family_name || null,
        email: user.email || null,
      }

      setSession({ user: mappedUser })
    }

    fetchSession()
  }, [])

  const updateSession = (updatedSession: Session) => {
    setSession(updatedSession)
  }

  return { session, updateSession }
}
