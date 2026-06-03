"use client";

import { useQuery } from "@tanstack/react-query";
import { productService } from "@/services/products/product.service";
import type { ProductFilters } from "@/types/product";
import { queryKeys } from "./queryKeys";

export function useProducts(params?: ProductFilters) {
  return useQuery({
    queryKey: queryKeys.products.list(params),
    queryFn: () => productService.getProducts(params),
  });
}
