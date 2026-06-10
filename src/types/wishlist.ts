import type { Id } from "./api";
import type { Product } from "./product";

export type WishlistItem = {
  _id: Id;
  productId: Product;
  updatedAt?: string;
  createdAt?: string;
  userId?:string;
  __v?:number
};

export type Wishlist = {
  id?: Id;
  items: WishlistItem[];
};

export type WishlistPayload = {
  productId: Id;
};
