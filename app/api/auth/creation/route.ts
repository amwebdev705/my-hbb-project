import { connectToDatabase } from '@/lib/db'
import User from '@/lib/db/models/user.model'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { NextResponse } from 'next/server'

export async function GET() {
  const { getUser } = getKindeServerSession()

  try {
    const user = await getUser()

    if (!user || !user.id) {
      throw new Error('User information is missing or invalid')
    }

    // Establish a connection to the database
    await connectToDatabase()

    // Check if the user exists in the database
    let dbUser = await User.findById(user.id)

    if (!dbUser) {
      // Create a new user if not found
      dbUser = new User({
        _id: user.id,
        firstName: user.given_name ?? '',
        lastName: user.family_name ?? '',
        email: user.email || '',
        profileImage:
          user.picture ?? `https://avatar.vercel.sh/${user.given_name}`,
      })

      await dbUser.save()
    } else {
      // Optionally update user details if necessary
      dbUser.lastLogin = new Date()
      dbUser.firstName = user.given_name || dbUser.firstName
      dbUser.lastName = user.family_name || dbUser.lastName
      dbUser.profileImage = user.picture || dbUser.profileImage

      await dbUser.save()
    }

    // Redirect to the homepage
    return NextResponse.redirect('http://localhost:3000')
  } catch (error) {
    console.error('Error processing user data:', error)

    // Return a 500 status if something goes wrong
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
