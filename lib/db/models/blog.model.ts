import mongoose, { Document, Model, Schema as MongooseSchema } from 'mongoose'

// Define the Blog interface
interface IBlog extends Document {
  title: string
  description: string
  category: string
  author: string
  image: string
  authorImg: string
  date: Date
}

// Create the Blog schema
const BlogSchema = new MongooseSchema<IBlog>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  authorImg: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

// Create models with TypeScript types
const BlogModel: Model<IBlog> =
  mongoose.models.blog || mongoose.model<IBlog>('blog', BlogSchema)

export { BlogModel }
