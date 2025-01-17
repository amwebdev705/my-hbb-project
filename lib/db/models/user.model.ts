// import { IUserInput } from '@/types'
import { Document, Model, model, models, Schema } from 'mongoose'

export interface IUser extends Document {
  _id: string; // KindeAuth unique identifier
  email: string
  firstName?: string // Maps to `given_name`
  lastName?: string // Maps to `family_name`
  profileImage?: string // Maps to `picture`
  role?: string
}

// Mongoose Schema for User
const userSchema = new Schema<IUser>(
  {
    _id: { type: String, required: true }, // KindeAuth ID as the primary key
    email: { type: String, required: true, unique: true },
    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' },
    profileImage: { type: String, default: '' },
  },
  {
    timestamps: true, // Automatically manages `createdAt` and `updatedAt`
  }
)

const User = (models.User as Model<IUser>) || model<IUser>('User', userSchema)

export default User
