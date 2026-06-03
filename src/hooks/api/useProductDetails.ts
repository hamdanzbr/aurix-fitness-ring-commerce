"use client";

import { useQuery } from "@tanstack/react-query";
import { productService } from "@/services/products/product.service";
import { queryKeys } from "./queryKeys";

export function useProductDetails(productId: string) {
  return useQuery({
    queryKey: queryKeys.products.details(productId),
    queryFn: () => productService.getProductDetails(productId),
    enabled: Boolean(productId),
  });
}
