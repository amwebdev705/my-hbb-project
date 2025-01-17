import mongoose, { Document, Model, Schema as MongooseSchema } from 'mongoose'

// Define the Email interface
interface IEmail extends Document {
  email: string
  date: Date
}

// Create the Email schema
const EmailSchema = new MongooseSchema<IEmail>({
  email: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

// Create models with TypeScript types
const EmailModel: Model<IEmail> =
  mongoose.models.email || mongoose.model<IEmail>('email', EmailSchema)

export { EmailModel }
