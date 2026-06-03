"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { orderService } from "@/services/orders/order.service";
import type { OrderFilters } from "@/types/order";
import { queryKeys } from "./queryKeys";

export function useOrders(params?: OrderFilters) {
  return useQuery({
    queryKey: queryKeys.orders.list(params),
    queryFn: () => orderService.getOrders(params),
  });
}

export function useOrderDetails(orderId: string) {
  return useQuery({
    queryKey: queryKeys.orders.details(orderId),
    queryFn: () => orderService.getOrderDetails(orderId),
    enabled: Boolean(orderId),
  });
}

export function useCreateOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: orderService.createOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.orders.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.cart.all });
    },
  });
}
