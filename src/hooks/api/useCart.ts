"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { cartService } from "@/services/cart/cart.service";
import { useCartStore } from "@/store/cart.store";
import { queryKeys } from "./queryKeys";

export function useCart() {
  const setCart = useCartStore((state) => state.setCart);

  const query = useQuery({
    queryKey: queryKeys.cart.all,
    queryFn: cartService.getCart,
  });

  useEffect(() => {
    if (query.data) {
      setCart(query.data);
    }
  }, [query.data, setCart]);

  return query;
}

export function useAddToCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cartService.addToCart,
    onSuccess: (cart) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.cart.all });
    },
  });
}

export function useUpdateCartItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ itemId, quantity }: { itemId: string; quantity: number }) =>
      cartService.updateCartItem(itemId, { quantity }),
    onSuccess: (cart) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.cart.all });
    },
  });
}

export function useRemoveCartItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cartService.removeCartItem,
    onSuccess: (cart) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.cart.all });
    },
  });
}

export function useClearCart() {
  const queryClient = useQueryClient();
  const resetCart = useCartStore((state) => state.resetCart);

  return useMutation({
    mutationFn: cartService.clearCart,
    onSuccess: () => {
      resetCart();
      queryClient.invalidateQueries({ queryKey: queryKeys.cart.all });
    },
  });
}
