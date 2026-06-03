import type { Id, QueryParams } from "./api";

export type ProductImage = {
  id?: Id;
  url: string;
  alt?: string;
  isPrimary?: boolean;
};

export type ProductVariant = {
  id: Id;
  size?: string;
  color?: string;
  material?: string;
  sku?: string;
  stock: number;
  price?: number;
};

export type Product = {
  id: Id;
  name: string;
  slug?: string;
  description?: string;
  price: number;
  salePrice?: number | null;
  images: ProductImage[];
  variants?: ProductVariant[];
  category?: string;
  rating?: number;
  reviewCount?: number;
  stock?: number;
  isFeatured?: boolean;
  createdAt?: string;
  updatedAt?: string;
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
