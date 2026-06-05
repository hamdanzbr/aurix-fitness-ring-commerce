import type { Id } from "./api";
import type { Product, ProductVariant } from "./product";

export type CartItem = {
  id: Id;
  productId: Id;
  variantId?: Id;
  quantity: number;
  product?: Product;
  variant?: ProductVariant;
  unitPrice: number;
  subtotal: number;
};

export type Cart = {
  id?: Id;
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  discountTotal?: number;
  taxTotal?: number;
  shippingTotal?: number;
  selectedFinish?: string;
  selectedSize?: string;
  grandTotal: number;
};

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
