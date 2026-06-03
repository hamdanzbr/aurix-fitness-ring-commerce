import type { Id } from "./api";
import type { Product } from "./product";

export type WishlistItem = {
  id: Id;
  productId: Id;
  product?: Product;
  createdAt?: string;
};

export type Wishlist = {
  id?: Id;
  items: WishlistItem[];
};

export type WishlistPayload = {
  productId: Id;
};
