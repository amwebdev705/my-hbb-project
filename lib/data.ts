import { Data, IProductInput, IUserInput } from '@/types'
import { toSlug } from './utils'
import bcrypt from 'bcryptjs'
import { i18n } from '@/i18n-config'

const users: IUserInput[] = [
  {
    name: 'John',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'Admin',
    address: {
      fullName: 'John Doe',
      street: '111 Main St',
      city: 'New York',
      state: 'NY',
      postalCode: '10001',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Stripe',
    emailVerified: false,
  },
  {
    name: 'Jane',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Jane Harris',
      street: '222 Main St',
      city: 'New York',
      state: 'NY',
      postalCode: '1002',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'Jack',
    email: 'jack@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Jack Ryan',
      street: '333 Main St',
      city: 'New York',
      state: 'NY',
      postalCode: '1003',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
  {
    name: 'Sarah',
    email: 'sarah@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Sarah Smith',
      street: '444 Main St',
      city: 'New York',
      state: 'NY',
      postalCode: '1005',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'Michael',
    email: 'michael@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'John Alexander',
      street: '555 Main St',
      city: 'New York',
      state: 'NY',
      postalCode: '1006',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
  {
    name: 'Emily',
    email: 'emily@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Emily Johnson',
      street: '666 Main St',
      city: 'New York',
      state: 'NY',
      postalCode: '10001',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Stripe',
    emailVerified: false,
  },
  {
    name: 'Alice',
    email: 'alice@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Alice Cooper',
      street: '777 Main St',
      city: 'New York',
      state: 'NY',
      postalCode: '10007',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'Tom',
    email: 'tom@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Tom Hanks',
      street: '888 Main St',
      city: 'New York',
      state: 'NY',
      postalCode: '10008',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Stripe',
    emailVerified: false,
  },
  {
    name: 'Linda',
    email: 'linda@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Linda Holmes',
      street: '999 Main St',
      city: 'New York',
      state: 'NY',
      postalCode: '10009',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
  {
    name: 'George',
    email: 'george@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'George Smith',
      street: '101 First Ave',
      city: 'New York',
      state: 'NY',
      postalCode: '10010',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Stripe',
    emailVerified: false,
  },
  {
    name: 'Jessica',
    email: 'jessica@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Jessica Brown',
      street: '102 First Ave',
      city: 'New York',
      state: 'NY',
      postalCode: '10011',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'Chris',
    email: 'chris@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Chris Evans',
      street: '103 First Ave',
      city: 'New York',
      state: 'NY',
      postalCode: '10012',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
  {
    name: 'Samantha',
    email: 'samantha@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Samantha Wilson',
      street: '104 First Ave',
      city: 'New York',
      state: 'NY',
      postalCode: '10013',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Stripe',
    emailVerified: false,
  },
  {
    name: 'David',
    email: 'david@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'David Lee',
      street: '105 First Ave',
      city: 'New York',
      state: 'NY',
      postalCode: '10014',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'Anna',
    email: 'anna@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Anna Smith',
      street: '106 First Ave',
      city: 'New York',
      state: 'NY',
      postalCode: '10015',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
]

const products: IProductInput[] = [
  // Product with Variants
  {
    name: 'Nike Mens Slim-fit Long-Sleeve T-Shirt',
    slug: toSlug('Nike Mens Slim-fit Long-Sleeve T-Shirt'),
    category: 'T-Shirts',
    images: ['/images/p11-1.jpg', '/images/p11-2.jpg'],
    tags: 'new-arrival',
    isPublished: true,
    isFavorite: false,
    price: 21.8,
    listPrice: 0,
    brand: 'Nike',
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    numSales: 9,
    countInStock: 0, // Stock handled by variants
    description:
      'Made with chemicals safer for human health and the environment',
    size: '',
    color: '',
    reviews: [],
    variants: [
      {
        sku: 'NMSLT-GRN-S',
        images: ['/images/p11-1.jpg'],
        price: 21.8,
        countInStock: 5,
        color: 'Green',
        size: 'S',
      },
      {
        sku: 'NMSLT-RED-M',
        images: ['/images/p11-2.jpg'],
        price: 21.8,
        countInStock: 6,
        color: 'Red',
        size: 'M',
      },
    ],
  },
  // Non-Variant Product
  {
    name: 'Jerzees Long-Sleeve Heavyweight Blend T-Shirt',
    slug: toSlug('Jerzees Long-Sleeve Heavyweight Blend T-Shirt'),
    category: 'T-Shirts',
    images: ['/images/p12-1.jpg', '/images/p12-2.jpg', '/images/p12-3.jpg'],
    tags: 'featured',
    isPublished: true,
    isFavorite: false,
    price: 23.78,
    listPrice: 0,
    brand: 'Jerzees',
    avgRating: 4.2,
    numReviews: 10,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    numSales: 29,
    countInStock: 12,
    description:
      'Made with sustainably sourced USA grown cotton; Shoulder-to-shoulder tape; double-needle coverstitched front neck; Set-in sleeves; Rib cuffs with concealed seams; Seamless body for a wide printing area',
    size: '',
    color: '',
    reviews: [],
    variants: [],
  },
  // Another Product with Variants
  {
    name: "Jerzees Men's Long-Sleeve T-Shirt",
    slug: toSlug('Jerzees Men Long-Sleeve T-Shirt'),
    category: 'T-Shirts',
    brand: 'Jerzees',
    images: ['/images/p13-1.jpg', '/images/p13-2.jpg'],
    tags: 'best-seller',
    isPublished: true,
    isFavorite: false,
    price: 13.86,
    listPrice: 16.03,
    avgRating: 4,
    numReviews: 12,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 2 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    numSales: 55,
    countInStock: 0,
    description:
      'The Jerzees long sleeve t-shirt is made with dri-power technology that wicks away moisture to keep you cool and dry throughout your day. We also included a rib collar and cuffs for added durability, and a lay-flat collar for comfort.',
    size: '',
    color: '',
    reviews: [],
    variants: [
      {
        sku: 'JLS-GRN-XL',
        images: ['/images/p13-1.jpg'],
        price: 13.86,
        countInStock: 8,
        color: 'Green',
        size: 'XL',
      },
      {
        sku: 'JLS-WHT-XXL',
        images: ['/images/p13-2.jpg'],
        price: 13.86,
        countInStock: 5,
        color: 'White',
        size: 'XXL',
      },
    ],
  },
  // Non-Variant Product
  {
    name: 'Silver Jeans Co. Mens Jace Slim Fit Bootcut Jeans',
    slug: toSlug('Silver Jeans Co. Mens Jace Slim Fit Bootcut Jeans'),
    category: 'Jeans',
    brand: 'Silver Jeans Co',
    images: ['/images/p21-1.jpg', '/images/p21-2.jpg'],
    tags: 'new-arrival',
    isPublished: true,
    isFavorite: false,
    price: 95.34,
    listPrice: 0,
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    countInStock: 54,
    numSales: 21,
    description:
      'Silver Jeans Co. Jace Slim Fit Bootcut Jeans - Consider Jace a modern cowboy jean. It sits below the waist and features a slim fit through the hip and thigh. Finished with an 18” bootcut leg opening that complements the slimmer silhouette while still fitting over boots',
    size: '',
    color: '',
    reviews: [],
    variants: [],
  },
  // Product with Variants
  {
    name: "ASICS Men's GT-2000 13 Running Shoes",
    slug: toSlug("ASICS Men's GT-2000 13 Running Shoes"),
    category: 'Shoes',
    brand: 'ASICS',
    images: ['/images/p45-1.jpg', '/images/p45-2.jpg'],
    tags: 'new-arrival, featured',
    isPublished: true,
    isFavorite: false,
    price: 179.95,
    listPrice: 200,
    avgRating: 3.66,
    numReviews: 15,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 0,
    numSales: 64,
    description:
      "At least 50% of the shoe's main upper material is made with recycled content to reduce waste and carbon emissions",
    size: '',
    color: '',
    reviews: [],
    variants: [
      {
        sku: 'ASICS-BLU-9',
        images: ['/images/p45-1.jpg'],
        price: 179.95,
        countInStock: 10,
        color: 'Blue',
        size: '9',
      },
      {
        sku: 'ASICS-BLK-10',
        images: ['/images/p45-2.jpg'],
        price: 179.95,
        countInStock: 12,
        color: 'Black',
        size: '10',
      },
    ],
  },
  {
    name: 'Puma Mens Long-Sleeve Training T-Shirt',
    slug: toSlug('Puma Mens Long-Sleeve Training T-Shirt'),
    category: 'T-Shirts',
    images: ['/images/p11-1.jpg', '/images/p11-2.jpg'],
    tags: 'new-arrival',
    isPublished: true,
    isFavorite: true,
    price: 19.99,
    listPrice: 25.99,
    brand: 'Puma',
    avgRating: 4.5,
    numReviews: 12,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 1 },
      { rating: 3, count: 2 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    numSales: 20,
    countInStock: 10,
    description:
      'Stay comfortable during your workouts with this long-sleeve training t-shirt made from breathable fabric.',
    size: '',
    color: '',
    reviews: [],
    variants: [],
  },
  {
    name: 'Under Armour Mens Charged Cotton Long Sleeve T-Shirt',
    slug: toSlug('Under Armour Mens Charged Cotton Long Sleeve T-Shirt'),
    category: 'T-Shirts',
    images: ['/images/p12-1.jpg', '/images/p12-2.jpg'],
    tags: 'featured',
    isPublished: true,
    isFavorite: false,
    price: 24.99,
    listPrice: 30.99,
    brand: 'Under Armour',
    avgRating: 4.3,
    numReviews: 15,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 3 },
      { rating: 4, count: 5 },
      { rating: 5, count: 6 },
    ],
    numSales: 18,
    countInStock: 0, // Stock managed by variants
    description:
      'This t-shirt combines the softness of cotton with performance fabric for ultimate comfort.',
    size: '',
    color: '',
    reviews: [],
    variants: [
      {
        sku: 'UA-TGRN-S',
        images: ['/images/p12-1.jpg'],
        price: 24.99,
        countInStock: 5,
        color: 'Green',
        size: 'S',
      },
      {
        sku: 'UA-TBLU-M',
        images: ['/images/p12-2.jpg'],
        price: 24.99,
        countInStock: 7,
        color: 'Blue',
        size: 'M',
      },
    ],
  },
  {
    name: 'Reebok Mens Graphic Tee',
    slug: toSlug('Reebok Mens Graphic Tee'),
    category: 'T-Shirts',
    images: ['/images/p13-1.jpg', '/images/p13-2.jpg'],
    tags: 'best-seller',
    isPublished: true,
    isFavorite: true,
    price: 22.5,
    listPrice: 0,
    brand: 'Reebok',
    avgRating: 4.0,
    numReviews: 10,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 1 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 2 },
    ],
    numSales: 12,
    countInStock: 8,
    description:
      'Show off your style with this comfortable and breathable graphic tee.',
    size: '',
    color: 'Black',
    reviews: [],
    variants: [],
  },
  {
    name: 'Adidas Mens Performance Tee',
    slug: toSlug('Adidas Mens Performance Tee'),
    category: 'T-Shirts',
    images: ['/images/p14-1.jpg', '/images/p14-2.jpg'],
    tags: 'todays-deal',
    isPublished: true,
    isFavorite: false,
    price: 26.99,
    listPrice: 30.99,
    brand: 'Adidas',
    avgRating: 4.7,
    numReviews: 18,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 1 },
      { rating: 4, count: 5 },
      { rating: 5, count: 12 },
    ],
    numSales: 22,
    countInStock: 0,
    description:
      'The perfect blend of performance and comfort, ideal for your workout sessions.',
    size: '',
    color: '',
    reviews: [],
    variants: [
      {
        sku: 'ADPT-WHT-L',
        images: ['/images/p14-1.jpg'],
        price: 26.99,
        countInStock: 10,
        color: 'White',
        size: 'L',
      },
      {
        sku: 'ADPT-GRY-XL',
        images: ['/images/p14-2.jpg'],
        price: 26.99,
        countInStock: 12,
        color: 'Grey',
        size: 'XL',
      },
    ],
  },
  {
    name: 'Nike Mens Dri-FIT T-Shirt',
    slug: toSlug('Nike Mens Dri-FIT T-Shirt'),
    category: 'T-Shirts',
    images: ['/images/p15-1.jpg', '/images/p15-2.jpg'],
    tags: 'new-arrival, featured',
    isPublished: true,
    isFavorite: true,
    price: 30.0,
    listPrice: 35.0,
    brand: 'Nike',
    avgRating: 4.6,
    numReviews: 14,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 1 },
      { rating: 3, count: 2 },
      { rating: 4, count: 6 },
      { rating: 5, count: 5 },
    ],
    numSales: 25,
    countInStock: 15,
    description:
      'Stay cool and dry with Nike Dri-FIT technology in this stylish and functional t-shirt.',
    size: '',
    color: 'Black',
    reviews: [],
    variants: [],
  },
  {
    name: 'Levis Mens Denim Jacket',
    slug: toSlug('Levis Mens Denim Jacket'),
    category: 'Jackets',
    images: ['/images/p16-1.jpg', '/images/p16-2.jpg'],
    tags: 'best-seller, todays-deal',
    isPublished: true,
    isFavorite: false,
    price: 59.99,
    listPrice: 70.0,
    brand: "Levi's",
    avgRating: 4.3,
    numReviews: 16,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 1 },
      { rating: 3, count: 3 },
      { rating: 4, count: 5 },
      { rating: 5, count: 6 },
    ],
    numSales: 30,
    countInStock: 10,
    description: 'Classic Levi’s denim jacket, a timeless wardrobe essential.',
    size: '',
    color: 'Grey',
    reviews: [],
    variants: [],
  },
  {
    name: 'Hanes Mens ComfortBlend EcoSmart Sweatshirt',
    slug: toSlug('Hanes Mens ComfortBlend EcoSmart Sweatshirt'),
    category: 'Sweatshirts',
    images: ['/images/p11-1.jpg', '/images/p11-2.jpg'],
    tags: 'new-arrival',
    isPublished: true,
    isFavorite: true,
    price: 18.99,
    listPrice: 20.99,
    brand: 'Hanes',
    avgRating: 4.5,
    numReviews: 11,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 1 },
      { rating: 3, count: 1 },
      { rating: 4, count: 5 },
      { rating: 5, count: 4 },
    ],
    numSales: 15,
    countInStock: 8,
    description:
      'Eco-friendly and ultra-comfortable sweatshirt perfect for everyday wear.',
    size: '',
    color: 'Green',
    reviews: [],
    variants: [],
  },
  {
    name: 'Adidas Mens Classic Hoodie',
    slug: toSlug('Adidas Mens Classic Hoodie'),
    category: 'Hoodies',
    images: ['/images/p12-1.jpg', '/images/p12-2.jpg'],
    tags: 'featured',
    isPublished: true,
    isFavorite: false,
    price: 49.99,
    listPrice: 55.99,
    brand: 'Adidas',
    avgRating: 4.8,
    numReviews: 20,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 1 },
      { rating: 4, count: 4 },
      { rating: 5, count: 15 },
    ],
    numSales: 30,
    countInStock: 0,
    description:
      'Adidas Classic Hoodie, perfect for workouts and casual outings.',
    size: '',
    color: '',
    reviews: [],
    variants: [
      {
        sku: 'ADCH-BLK-L',
        images: ['/images/p12-1.jpg'],
        price: 49.99,
        countInStock: 8,
        color: 'Black',
        size: 'L',
      },
      {
        sku: 'ADCH-WHT-M',
        images: ['/images/p12-2.jpg'],
        price: 49.99,
        countInStock: 7,
        color: 'White',
        size: 'M',
      },
    ],
  },
]

const reviews = [
  {
    rating: 1,
    title: 'Poor quality',
    comment:
      'Very disappointed. The item broke after just a few uses. Not worth the money.',
  },
  {
    rating: 2,
    title: 'Disappointed',
    comment:
      "Not as expected. The material feels cheap, and it didn't fit well. Wouldn't buy again.",
  },
  {
    rating: 2,
    title: 'Needs improvement',
    comment:
      "It looks nice but doesn't perform as expected. Wouldn't recommend without upgrades.",
  },
  {
    rating: 3,
    title: 'not bad',
    comment:
      'This product is decent, the quality is good but it could use some improvements in the details.',
  },
  {
    rating: 3,
    title: 'Okay, not great',
    comment:
      'It works, but not as well as I hoped. Quality is average and lacks some finishing.',
  },
  {
    rating: 3,
    title: 'Good product',
    comment:
      'This product is amazing, I love it! The quality is top notch, the material is comfortable and breathable.',
  },
  {
    rating: 4,
    title: 'Pretty good',
    comment:
      "Solid product! Great value for the price, but there's room for minor improvements.",
  },
  {
    rating: 4,
    title: 'Very satisfied',
    comment:
      'Good product! High quality and worth the price. Would consider buying again.',
  },
  {
    rating: 4,
    title: 'Absolutely love it!',
    comment:
      'Perfect in every way! The quality, design, and comfort exceeded all my expectations.',
  },
  {
    rating: 4,
    title: 'Exceeded expectations!',
    comment:
      'Fantastic product! High quality, feels durable, and performs well. Highly recommend!',
  },
  {
    rating: 5,
    title: 'Perfect purchase!',
    comment:
      "Couldn't be happier with this product. The quality is excellent, and it works flawlessly!",
  },
  {
    rating: 5,
    title: 'Highly recommend',
    comment:
      "Amazing product! Worth every penny, great design, and feels premium. I'm very satisfied.",
  },
  {
    rating: 5,
    title: 'Just what I needed',
    comment:
      'Exactly as described! Quality exceeded my expectations, and it arrived quickly.',
  },
  {
    rating: 5,
    title: 'Excellent choice!',
    comment:
      'This product is outstanding! Everything about it feels top-notch, from material to functionality.',
  },
  {
    rating: 5,
    title: "Couldn't ask for more!",
    comment:
      "Love this product! It's durable, stylish, and works great. Would buy again without hesitation.",
  },
]
const data: Data = {
  users,
  products,
  reviews,
  webPages: [
    {
      title: 'About Us',
      slug: 'about-us',
      content: `Welcome to [Your Store Name], your trusted destination for quality products and exceptional service. Our journey began with a mission to bring you the best shopping experience by offering a wide range of products at competitive prices, all in one convenient platform.

At [Your Store Name], we prioritize customer satisfaction and innovation. Our team works tirelessly to curate a diverse selection of items, from everyday essentials to exclusive deals, ensuring there's something for everyone. We also strive to make your shopping experience seamless with fast shipping, secure payments, and excellent customer support.

As we continue to grow, our commitment to quality and service remains unwavering. Thank you for choosing [Your Store Name]—we look forward to being a part of your journey and delivering value every step of the way.`,
      isPublished: true,
    },
    {
      title: 'Contact Us',
      slug: 'contact-us',
      content: `We’re here to help! If you have any questions, concerns, or feedback, please don’t hesitate to reach out to us. Our team is ready to assist you and ensure you have the best shopping experience.

**Customer Support**
For inquiries about orders, products, or account-related issues, contact our customer support team:
- **Email:** support@example.com
- **Phone:** +1 (123) 456-7890
- **Live Chat:** Available on our website from 9 AM to 6 PM (Monday to Friday).

**Head Office**
For corporate or business-related inquiries, reach out to our headquarters:
- **Address:** 1234 E-Commerce St, Suite 567, Business City, BC 12345
- **Phone:** +1 (987) 654-3210

We look forward to assisting you! Your satisfaction is our priority.
`,
      isPublished: true,
    },
    {
      title: 'Help',
      slug: 'help',
      content: `Welcome to our Help Center! We're here to assist you with any questions or concerns you may have while shopping with us. Whether you need help with orders, account management, or product inquiries, this page provides all the information you need to navigate our platform with ease.

**Placing and Managing Orders**
Placing an order is simple and secure. Browse our product categories, add items to your cart, and proceed to checkout. Once your order is placed, you can track its status through your account under the "My Orders" section. If you need to modify or cancel your order, please contact us as soon as possible for assistance.

**Shipping and Returns**
We offer a variety of shipping options to suit your needs, including standard and express delivery. For detailed shipping costs and delivery timelines, visit our Shipping Policy page. If you're not satisfied with your purchase, our hassle-free return process allows you to initiate a return within the specified timeframe. Check our Returns Policy for more details.

**Account and Support**
Managing your account is easy. Log in to update your personal information, payment methods, and saved addresses. If you encounter any issues or need further assistance, our customer support team is available via email, live chat, or phone. Visit our Contact Us page for support hours and contact details.`,
      isPublished: true,
    },
    {
      title: 'Privacy Policy',
      slug: 'privacy-policy',
      content: `We value your privacy and are committed to protecting your personal information. This Privacy Notice explains how we collect, use, and share your data when you interact with our services. By using our platform, you consent to the practices described herein.

We collect data such as your name, email address, and payment details to provide you with tailored services and improve your experience. This information may also be used for marketing purposes, but only with your consent. Additionally, we may share your data with trusted third-party providers to facilitate transactions or deliver products.

Your data is safeguarded through robust security measures to prevent unauthorized access. However, you have the right to access, correct, or delete your personal information at any time. For inquiries or concerns regarding your privacy, please contact our support team.`,
      isPublished: true,
    },
    {
      title: 'Conditions of Use',
      slug: 'conditions-of-use',
      content: `Welcome to [Ecommerce Website Name]. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. These terms govern your use of our platform, including browsing, purchasing products, and interacting with any content or services provided. You must be at least 18 years old or have the consent of a parent or guardian to use this website. Any breach of these terms may result in the termination of your access to our platform.

We strive to ensure all product descriptions, pricing, and availability information on our website are accurate. However, errors may occur, and we reserve the right to correct them without prior notice. All purchases are subject to our return and refund policy. By using our site, you acknowledge that your personal information will be processed according to our privacy policy, ensuring your data is handled securely and responsibly. Please review these terms carefully before proceeding with any transactions.
`,
      isPublished: true,
    },
    {
      title: 'Customer Service',
      slug: 'customer-service',
      content: `At [Your Store Name], our customer service team is here to ensure you have the best shopping experience. Whether you need assistance with orders, product details, or returns, we are committed to providing prompt and helpful support.

If you have questions or concerns, please reach out to us through our multiple contact options:
- **Email:** support@example.com
- **Phone:** +1 (123) 456-7890
- **Live Chat:** Available on our website for instant assistance

We also provide helpful resources such as order tracking, product guides, and FAQs to assist you with common inquiries. Your satisfaction is our priority, and we’re here to resolve any issues quickly and efficiently. Thank you for choosing us!`,
      isPublished: true,
    },
    {
      title: 'Returns Policy',
      slug: 'returns-policy',
      content: 'Returns Policy Content',
      isPublished: true,
    },
    {
      title: 'Careers',
      slug: 'careers',
      content: 'careers Content',
      isPublished: true,
    },
    {
      title: 'Blog',
      slug: 'blog',
      content: 'Blog Content',
      isPublished: true,
    },
    {
      title: 'Sell Products',
      slug: 'sell',
      content: `Sell Products Content`,
      isPublished: true,
    },
    {
      title: 'Become Affiliate',
      slug: 'become-affiliate',
      content: 'Become Affiliate Content',
      isPublished: true,
    },
    {
      title: 'Advertise Your Products',
      slug: 'advertise',
      content: 'Advertise Your Products',
      isPublished: true,
    },
    {
      title: 'Shipping Rates & Policies',
      slug: 'shipping',
      content: 'Shipping Rates & Policies',
      isPublished: true,
    },
  ],
  headerMenus: [
    {
      name: "Today's Deal",
      href: '/search?tag=todays-deal',
    },
    {
      name: 'New Arrivals',
      href: '/search?tag=new-arrival',
    },
    {
      name: 'Featured Products',
      href: '/search?tag=featured',
    },
    {
      name: 'Best Sellers',
      href: '/search?tag=best-seller',
    },
    {
      name: 'Browsing History',
      href: '/#browsing-history',
    },
    {
      name: 'Customer Service',
      href: '/page/customer-service',
    },
    {
      name: 'About Us',
      href: '/page/about-us',
    },
    {
      name: 'Help',
      href: '/page/help',
    },
  ],
  carousels: [
    {
      title: 'Most Popular Shoes For Sale',
      buttonCaption: 'Shop Now',
      image: '/images/banner3.jpg',
      url: '/search?category=Shoes',
      isPublished: true,
    },
    {
      title: 'Best Sellers in T-Shirts',
      buttonCaption: 'Shop Now',
      image: '/images/banner1.jpg',
      url: '/search?category=T-Shirts',
      isPublished: true,
    },
    {
      title: 'Best Deals on Wrist Watches',
      buttonCaption: 'See More',
      image: '/images/banner2.jpg',
      url: '/search?category=Wrist Watches',
      isPublished: true,
    },
  ],
  settings: [
    {
      common: {
        freeShippingMinPrice: 35,
        isMaintenanceMode: false,
        defaultTheme: 'Light',
        defaultColor: 'Gold',
        pageSize: 9,
      },
      site: {
        name: 'HB BoutiqueAmzn',
        description:
          'HB BoutiqueAmzn is a sample Ecommerce website built with Next.js, Tailwind CSS, and MongoDB.',
        keywords: 'Next Ecommerce, Next.js, Tailwind CSS, MongoDB',
        url: 'https://next-mongo-ecommerce-final.vercel.app',
        logo: '/icons/logo.svg',
        slogan: 'Spend less, enjoy more.',
        author: 'Next Ecommerce',
        copyright: '2000-2024, Next-Ecommerce.com, Inc. or its affiliates',
        email: 'admin@example.com',
        address: '123, Main Street, Anytown, CA, Zip 12345',
        phone: '+1 (123) 456-7890',
      },
      carousels: [
        {
          title: 'Most Popular Shoes For Sale',
          buttonCaption: 'Shop Now',
          image: '/images/banner3.jpg',
          url: '/search?category=Shoes',
        },
        {
          title: 'Best Sellers in T-Shirts',
          buttonCaption: 'Shop Now',
          image: '/images/banner1.jpg',
          url: '/search?category=T-Shirts',
        },
        {
          title: 'Best Deals on Wrist Watches',
          buttonCaption: 'See More',
          image: '/images/banner2.jpg',
          url: '/search?category=Wrist Watches',
        },
      ],
      availableLanguages: i18n.locales.map((locale) => ({
        code: locale.code,
        name: locale.name,
      })),
      defaultLanguage: 'en-US',
      availableCurrencies: [
        {
          name: 'United States Dollar',
          code: 'USD',
          symbol: '$',
          convertRate: 1,
        },
        { name: 'Euro', code: 'EUR', symbol: '€', convertRate: 0.96 },
        { name: 'UAE Dirham', code: 'AED', symbol: 'AED', convertRate: 3.67 },
      ],
      defaultCurrency: 'USD',
      availablePaymentMethods: [
        { name: 'PayPal', commission: 0 },
        { name: 'Stripe', commission: 0 },
        { name: 'Cash On Delivery', commission: 0 },
      ],
      defaultPaymentMethod: 'PayPal',
      availableDeliveryDates: [
        {
          name: 'Tomorrow',
          daysToDeliver: 1,
          shippingPrice: 12.9,
          freeShippingMinPrice: 0,
        },
        {
          name: 'Next 3 Days',
          daysToDeliver: 3,
          shippingPrice: 6.9,
          freeShippingMinPrice: 0,
        },
        {
          name: 'Next 5 Days',
          daysToDeliver: 5,
          shippingPrice: 4.9,
          freeShippingMinPrice: 35,
        },
      ],
      defaultDeliveryDate: 'Next 5 Days',
    },
  ],
}

export default data
