import { z } from 'zod'

import {
  CarouselSchema,
  CartSchema,
  OrderInputSchema,
  DeliveryDateSchema,
  OrderItemSchema,
  PaymentMethodSchema,
  ProductInputSchema,
  ReviewInputSchema,
  SettingInputSchema,
  ShippingAddressSchema,
  SiteCurrencySchema,
  SiteLanguageSchema,
  UserInputSchema,
  UserNameSchema,
  UserSignInSchema,
  UserSignUpSchema,
  WebPageInputSchema,
} from '@/lib/validator'

// Review Types
export type IReviewInput = z.infer<typeof ReviewInputSchema>
export type IReviewDetails = IReviewInput & {
  _id: string
  createdAt: string
  user: {
    name: string
  }
}

// Product Types
export type IProductInput = z.infer<typeof ProductInputSchema>

export interface Variant {
  color: string
  size?: string
  price: number
  listPrice?: number
  countInStock?: number
  images: string[]
  sku: string
}
export interface Product {
  _id: string
  slug: string
  name: string
  tags: string
  description: string
  brand: string
  category: string
  price: number
  listPrice?: number
  images: string[]
  countInStock: number
  color?: string[]
  size?: string[]
  variants?: Variant[] | undefined
}

export type Data = {
  settings: ISettingInput[]
  webPages: IWebPageInput[]
  users: IUserInput[]
  products: IProductInput[]
  reviews: {
    title: string
    rating: number
    comment: string
  }[]
  headerMenus: {
    name: string
    href: string
  }[]
  carousels: {
    image: string
    url: string
    title: string
    buttonCaption: string
    isPublished: boolean
  }[]
}

// Order Types
export type IOrderInput = z.infer<typeof OrderInputSchema>
export type IOrderList = IOrderInput & {
  _id: string
  user: {
    name: string
    email: string
  }
  createdAt: Date
}
export type OrderItem = z.infer<typeof OrderItemSchema>
export type Cart = z.infer<typeof CartSchema>
export type ShippingAddress = z.infer<typeof ShippingAddressSchema>

// user
export type IUserInput = z.infer<typeof UserInputSchema>
export type IUserSignIn = z.infer<typeof UserSignInSchema>
export type IUserSignUp = z.infer<typeof UserSignUpSchema>
export type IUserName = z.infer<typeof UserNameSchema>

// webpage
export type IWebPageInput = z.infer<typeof WebPageInputSchema>

// setting
export type ICarousel = z.infer<typeof CarouselSchema>
export type ISettingInput = z.infer<typeof SettingInputSchema>
export type ClientSetting = ISettingInput & {
  currency: string
}
export type SiteLanguage = z.infer<typeof SiteLanguageSchema>
export type SiteCurrency = z.infer<typeof SiteCurrencySchema>
export type PaymentMethod = z.infer<typeof PaymentMethodSchema>
export type DeliveryDate = z.infer<typeof DeliveryDateSchema>

// Define types for the API response
export type Address = {
  name: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  cityLocality: string;
  stateProvince: string;
  postalCode: string;
  countryCode: string;
  addressResidentialIndicator: "yes" | "no";
};
export type unit = "ounce" | "gram" | "kilogram" | "pound";
export type dimensionUnit = "inch" | "centimeter";

export type Package = {
  weight: {
    value: number;
    unit: unit;
  };
  dimensions: {
    height: number;
    width: number;
    length: number;
    unit: dimensionUnit;
  };
};

export type Rate = {
  rateId: string;
  rateType: string;
  carrierId: string;
  shippingAmount: {
    currency: string;
    amount: number;
  };
  serviceType: string;
  serviceCode: string;
  trackable: boolean;
  carrierFriendlyName: string;
  validationStatus: string;
  warningMessages?: string[];
};


export interface trackingObjType {
  trackingNumber: string;
  labelId: string;
  carrierCode: string;
}

export interface TrackingData {
  trackingNumber?: string;
  statusDescription?: string;
  carrierStatusDescription?: string;
  estimatedDeliveryDate?: string;
  actualDeliveryDate?: string;
}