import { Document, Model, model, models, Schema } from 'mongoose'
import { IProductInput } from '@/types'

export interface IProductVariant {
  sku: string
  images: string[]
  price: number
  countInStock: number
  color: string
  size: string
}
export interface IProduct extends Document, IProductInput {
  _id: string
  createdAt: Date
  updatedAt: Date
  variants?: IProductVariant[] // Include variants in the interface
}

const variantSchema = new Schema<IProductVariant>(
  {
    sku: {
      type: String,
      required: false, // Optional as not all variants may have SKUs
    },
    images: {
      type: [String],
      required: false, // Optional as not all variants may have images
    },
    price: {
      type: Number,
      required: true,
    },
    countInStock: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: false, // Optional if not all variants need color
    },
    size: {
      type: String,
      required: false, // Optional if not all variants need size
    },
  },
  { _id: false } // Prevent additional `_id` field for each variant
)

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    sku: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: true,
    },
    images: [String],
    brand: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    listPrice: {
      type: Number,
      required: true,
    },
    countInStock: {
      type: Number,
      required: true,
    },
    tags: { type: [String], default: ['new arrival'] },
    colors: { type: [String], default: ['White', 'Red', 'Black'] },
    sizes: { type: [String], default: ['S', 'M', 'L'] },
    avgRating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    ratingDistribution: [
      {
        rating: {
          type: Number,
          required: true,
        },
        count: {
          type: Number,
          required: true,
        },
      },
    ],
    numSales: {
      type: Number,
      required: true,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      required: true,
      default: false,
    },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Review',
        default: [],
      },
    ],
    variants: [variantSchema], // Add the variants array with sub-schema
  },
  {
    timestamps: true,
  }
)

const Product =
  (models.Product as Model<IProduct>) ||
  model<IProduct>('Product', productSchema)

export default Product
