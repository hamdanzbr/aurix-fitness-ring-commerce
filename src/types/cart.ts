import type { Id } from "./api";
import type { Product, ProductVariant } from "./product";

export type CartItem = {
  _id: Id;
  productId: Id | Product;
  variantId?: Id;
  image?: string;
  name?: string;
  selectedFinish?: string;
  selectedSize?: string;
  quantity: number;
  product?: Product;
  variant?: ProductVariant;
  unitPrice: number;
  subtotal: number;
};

export type Cart = {
  _id?: Id;
  productId: Product;
  quantity: number;
  selectedFinish?: string;
  selectedSize?: string;
  userId:Id;
  createdAt:string
  itemTotal: number;
};

export type CartResponse = {
  items: Cart[];
  totalItems: number;
  subtotal: number;
}

export type AddToCartPayload = {
  productId: Id;
  variantId?: Id;
  quantity: number;
  selectedFinish?: string;
  selectedSize?: string;
};

export type UpdateCartItemPayload = {
  quantity: number;
};
