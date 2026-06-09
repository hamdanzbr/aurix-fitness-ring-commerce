"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { wishlistService } from "@/services/wishlist/wishlist.service";
import { queryKeys } from "./queryKeys";

export function useWishlist() {
  return useQuery({
    queryKey: queryKeys.wishlist.all,
    queryFn: wishlistService.getWishlist,
    staleTime: 1000 * 60,
  });
}

export function useAddToWishlist() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: wishlistService.addToWishlist,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.wishlist.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.products.all });
    },
  });
}

export function useRemoveFromWishlist() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: wishlistService.removeFromWishlist,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.wishlist.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.products.all });
    },
  });
}
