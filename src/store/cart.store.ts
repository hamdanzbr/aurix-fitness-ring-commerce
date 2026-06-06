import { create } from "zustand";
import type { Cart, CartResponse } from "@/types/cart";

type CartState = {
  cart: CartResponse | null;
  cartCount: number;
  setCart: (cart: CartResponse | null) => void;
  setCartCount: (count: number) => void;
  resetCart: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  cart: null,
  cartCount: 0,

  setCart: (cart) => {
    set({
      cart,
      cartCount: cart?.totalItems ?? 0,
    });
  },

  setCartCount: (cartCount) => {
    set({ cartCount });
  },

  resetCart: () => {
    set({
      cart: null,
      cartCount: 0,
    });
  },
}));
