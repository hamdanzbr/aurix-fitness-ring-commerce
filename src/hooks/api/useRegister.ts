"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authService } from "@/services/auth/auth.service";
import { useAuthStore } from "@/store/auth.store";
import { queryKeys } from "./queryKeys";

export function useRegister() {
  const queryClient = useQueryClient();
  const login = useAuthStore((state) => state.login);

  return useMutation({
    mutationFn: authService.register,
    onSuccess: (auth) => {
      login(auth);
      queryClient.setQueryData(queryKeys.auth.me, auth.user);
      queryClient.invalidateQueries({ queryKey: queryKeys.cart.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.wishlist.all });
    },
  });
}
