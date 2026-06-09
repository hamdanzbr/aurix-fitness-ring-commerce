"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { orderService } from "@/services/orders/order.service";
import type { OrderFilters } from "@/types/order";
import { queryKeys } from "./queryKeys";

export function useOrders(params?: OrderFilters) {
  return useQuery({
    queryKey: queryKeys.orders.list(params),
    queryFn: () => orderService.getOrders(params),
    staleTime: 1000 * 60,
  });
}

export function useOrderDetails(orderId: string) {
  return useQuery({
    queryKey: queryKeys.orders.details(orderId),
    queryFn: () => orderService.getOrderDetails(orderId),
    enabled: Boolean(orderId),
    staleTime: 1000 * 60,
  });
}

export function useOrderStats() {
  return useQuery({
    queryKey: queryKeys.orders.stats,
    queryFn: () => orderService.getOrdersStats(),
    staleTime: 1000 * 60,
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
