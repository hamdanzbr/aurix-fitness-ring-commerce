import type { Id, QueryParams } from "./api";

export type ProductImage = {
  id?: Id;
  url: string;
  alt?: string;
  isPrimary?: boolean;
};

export type ProductVariant = {
  _id: Id;
  size?: string;
  color?: string;
  material?: string;
  sku?: string;
  stock: number;
  price?: number;
};

export type Product = {
  _id: Id;
  name: string;
  slug?: string;
  description?: string;
  price: number;
  discountPrice?: number;
  images: string[];
  availableFinishes?: string[];
  availableSizes?: string[]|[];
  category?: string;
  averageRating?: number;
  totalRatings?: number;
  stock?: number;
  isFeatured?: boolean;
  createdAt?: string;
  updatedAt?: string;
  warrantyAvailable?: boolean;
  warrantyMonths?: number;
};

export type ProductDetailsResponse = {
  product: Product;
  relatedProducts: Product[];
};

export type ProductFilters = QueryParams & {
  search?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  sort?: string;
  page?: number;
  limit?: number;
};
