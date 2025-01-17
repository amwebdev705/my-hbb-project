'use server'

import { connectToDatabase } from '../db'
import User, { IUser } from '../db/models/user.model'
import { formatError } from '../utils'
// import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

import { getSetting } from './setting.actions'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

// DELETE USER
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

// UPDATE USER
export async function updateUser(data: {
  _id: string
  firstName: string
  lastName: string
  email: string
}): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch(`/api/users/${data._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Failed to update user')
    }

    return await response.json()
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error updating user:', error.message)
      return { success: false, message: error.message }
    }

    console.error('Unexpected error updating user:', error)
    return { success: false, message: 'An unexpected error occurred' }
  }
}

//UPDATE USERNAME
export async function updateUserName(values: { name: string }) {
  try {
    await connectToDatabase()

    const session = getKindeServerSession()
    if (!session) {
      throw new Error('User session not found')
    }

    const userId = session.getClaim('sub') // Extract user ID from session
    if (!userId) {
      throw new Error('User ID not found in session')
    }

    const [firstName, ...lastNameParts] = values.name.split(' ')
    const lastName = lastNameParts.join(' ') || ''

    const currentUser = await User.findOne({ _id: userId })
    if (!currentUser) {
      throw new Error('User not found')
    }

    currentUser.firstName = firstName || currentUser.firstName
    currentUser.lastName = lastName || currentUser.lastName

    const updatedUser = await currentUser.save()

    return {
      success: true,
      message: 'User updated successfully',
      data: JSON.parse(JSON.stringify(updatedUser)),
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error updating user name:', error.message)
      return { success: false, message: error.message }
    }

    console.error('Unexpected error updating user:', error)
    return { success: false, message: 'An unexpected error occurred' }
  }
}

// GET ALL USERS
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

// GET USER BY ID
export async function getUserById(userId: string): Promise<IUser> {
  await connectToDatabase()

  // Validate that the userId is a non-empty string
  if (!userId || typeof userId !== 'string') {
    throw new Error('Invalid user ID format')
  }
  const user = await User.findById(userId)

  if (!user) {
    console.error(`User not found with ID: ${userId}`) // Log the missing user
    throw new Error('User not found')
  }

  return JSON.parse(JSON.stringify(user)) as IUser
}
