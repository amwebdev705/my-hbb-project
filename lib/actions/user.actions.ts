// 'use server'

// import bcrypt from 'bcryptjs'
// import { auth, signIn, signOut } from '@/auth'
// import { IUserName, IUserSignIn, IUserSignUp } from '@/types'
// import { UserSignUpSchema, UserUpdateSchema } from '../validator'
// import { connectToDatabase } from '../db'
// import User, { IUser } from '../db/models/user.model'
// import { formatError } from '../utils'
// import { redirect } from 'next/navigation'
// import { revalidatePath } from 'next/cache'
// import { z } from 'zod'
// import { getSetting } from './setting.actions'

// // CREATE
// export async function registerUser(userSignUp: IUserSignUp) {
//   try {
//     const user = await UserSignUpSchema.parseAsync({
//       name: userSignUp.name,
//       email: userSignUp.email,
//       password: userSignUp.password,
//       confirmPassword: userSignUp.confirmPassword,
//     })

//     await connectToDatabase()
//     await User.create({
//       ...user,
//       password: await bcrypt.hash(user.password, 5),
//     })
//     return { success: true, message: 'User created successfully' }
//   } catch (error) {
//     return { success: false, error: formatError(error) }
//   }
// }

// // DELETE

// export async function deleteUser(id: string) {
//   try {
//     await connectToDatabase()
//     const res = await User.findByIdAndDelete(id)
//     if (!res) throw new Error('Use not found')
//     revalidatePath('/admin/users')
//     return {
//       success: true,
//       message: 'User deleted successfully',
//     }
//   } catch (error) {
//     return { success: false, message: formatError(error) }
//   }
// }
// // UPDATE

// export async function updateUser(user: z.infer<typeof UserUpdateSchema>) {
//   try {
//     await connectToDatabase()
//     const dbUser = await User.findById(user._id)
//     if (!dbUser) throw new Error('User not found')
//     dbUser.name = user.name
//     dbUser.email = user.email
//     dbUser.role = user.role
//     const updatedUser = await dbUser.save()
//     revalidatePath('/admin/users')
//     return {
//       success: true,
//       message: 'User updated successfully',
//       data: JSON.parse(JSON.stringify(updatedUser)),
//     }
//   } catch (error) {
//     return { success: false, message: formatError(error) }
//   }
// }
// export async function updateUserName(user: IUserName) {
//   try {
//     await connectToDatabase()
//     const session = await auth()
//     const currentUser = await User.findById(session?.user?.id)
//     if (!currentUser) throw new Error('User not found')
//     currentUser.name = user.name
//     const updatedUser = await currentUser.save()
//     return {
//       success: true,
//       message: 'User updated successfully',
//       data: JSON.parse(JSON.stringify(updatedUser)),
//     }
//   } catch (error) {
//     return { success: false, message: formatError(error) }
//   }
// }

// export async function signInWithCredentials(user: IUserSignIn) {
//   return await signIn('credentials', { ...user, redirect: false })
// }
// export const SignInWithGoogle = async () => {
//   await signIn('google')
// }
// export const SignOut = async () => {
//   const redirectTo = await signOut({ redirect: false })
//   redirect(redirectTo.redirect)
// }

// // GET
// export async function getAllUsers({
//   limit,
//   page,
// }: {
//   limit?: number
//   page: number
// }) {
//   const {
//     common: { pageSize },
//   } = await getSetting()
//   limit = limit || pageSize
//   await connectToDatabase()

//   const skipAmount = (Number(page) - 1) * limit
//   const users = await User.find()
//     .sort({ createdAt: 'desc' })
//     .skip(skipAmount)
//     .limit(limit)
//   const usersCount = await User.countDocuments()
//   return {
//     data: JSON.parse(JSON.stringify(users)) as IUser[],
//     totalPages: Math.ceil(usersCount / limit),
//   }
// }

// export async function getUserById(userId: string) {
//   await connectToDatabase()
//   const user = await User.findById(userId)
//   if (!user) throw new Error('User not found')
//   return JSON.parse(JSON.stringify(user)) as IUser
// }




// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


'use server'

// import bcrypt from 'bcryptjs'
// import { auth, signIn, signOut } from '@/auth'
// import { auth } from '@/auth'
// import { IUserName, IUserSignIn, IUserSignUp } from '@/types'
// import { IUserName } from '@/types'
// import { UserSignUpSchema, UserUpdateSchema } from '../validator'
// import { UserUpdateSchema } from '../validator'
import { connectToDatabase } from '../db'
import User, { IUser } from '../db/models/user.model'
import { formatError } from '../utils'
// import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
// import { z } from 'zod'
import { getSetting } from './setting.actions'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

// // CREATE
// export async function registerUser(userSignUp: IUserSignUp) {
//   try {
//     const user = await UserSignUpSchema.parseAsync({
//       name: userSignUp.name,
//       email: userSignUp.email,
//       password: userSignUp.password,
//       confirmPassword: userSignUp.confirmPassword,
//     })

//     await connectToDatabase()
//     await User.create({
//       ...user,
//       password: await bcrypt.hash(user.password, 5),
//     })
//     return { success: true, message: 'User created successfully' }
//   } catch (error) {
//     return { success: false, error: formatError(error) }
//   }
// }

// DELETE

export async function deleteUser(id: string) {
  try {
    await connectToDatabase()
    const res = await User.findByIdAndDelete(id)
    if (!res) throw new Error('Use not found')
    revalidatePath('/admin/users')
    return {
      success: true,
      message: 'User deleted successfully',
    }
  } catch (error) {
    return { success: false, message: formatError(error) }
  }
}
// UPDATE

// export async function updateUser(user: z.infer<typeof UserUpdateSchema>) {
//   try {
//     await connectToDatabase()
//     const dbUser = await User.findById(user._id)
//     if (!dbUser) throw new Error('User not found')
//     dbUser.name = user.name
//     dbUser.email = user.email
//     dbUser.role = user.role
//     const updatedUser = await dbUser.save()
//     revalidatePath('/admin/users')
//     return {
//       success: true,
//       message: 'User updated successfully',
//       data: JSON.parse(JSON.stringify(updatedUser)),
//     }
//   } catch (error) {
//     return { success: false, message: formatError(error) }
//   }
// }
// export async function updateUserName(user: IUserName) {
//   try {
//     await connectToDatabase()
//     const session = await auth()
//     const currentUser = await User.findById(session?.user?.id)
//     if (!currentUser) throw new Error('User not found')
//     currentUser.name = user.name
//     const updatedUser = await currentUser.save()
//     return {
//       success: true,
//       message: 'User updated successfully',
//       data: JSON.parse(JSON.stringify(updatedUser)),
//     }
//   } catch (error) {
//     return { success: false, message: formatError(error) }
//   }
// }

export async function updateUserName() {
  try {
    // Ensure database connection is established
    await connectToDatabase()

    // Get the current session and user from KindeAuth
    const { getUser } = getKindeServerSession()
    const sessionUser = await getUser()

    if (!sessionUser || !sessionUser.id) {
      throw new Error('User session not found or invalid')
    }

    // Find the current user in the database
    const currentUser = await User.findById(sessionUser.id)
    if (!currentUser) {
      throw new Error('User not found')
    }

    // Update the user's name
    // currentUser.firstName = user.firstName || currentUser.firstName;
    // currentUser.lastName = user.lastName || currentUser.lastName;

    // Save the updated user
    const updatedUser = await currentUser.save()

    return {
      success: true,
      message: 'User updated successfully',
      data: JSON.parse(JSON.stringify(updatedUser)), // Safely serialize the user data
    }
  } catch (error) {
    console.error('Error updating user name:', error)
    return {
      success: false,
      message: formatError(error),
    }
  }
}

// export async function signInWithCredentials(user: IUserSignIn) {
//   return await signIn('credentials', { ...user, redirect: false })
// }
// export const SignInWithGoogle = async () => {
//   await signIn('google')
// }
// export const SignOut = async () => {
//   const redirectTo = await signOut({ redirect: false })
//   redirect(redirectTo.redirect)
// }

// GET
export async function getAllUsers({
  limit,
  page,
}: {
  limit?: number
  page: number
}) {
  const {
    common: { pageSize },
  } = await getSetting()
  limit = limit || pageSize
  await connectToDatabase()

  const skipAmount = (Number(page) - 1) * limit
  const users = await User.find()
    .sort({ createdAt: 'desc' })
    .skip(skipAmount)
    .limit(limit)
  const usersCount = await User.countDocuments()
  return {
    data: JSON.parse(JSON.stringify(users)) as IUser[],
    totalPages: Math.ceil(usersCount / limit),
  }
}

export async function getUserById(userId: string) {
  await connectToDatabase()
  const user = await User.findById(userId)
  if (!user) throw new Error('User not found')
  return JSON.parse(JSON.stringify(user)) as IUser
}