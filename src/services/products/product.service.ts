import api from "@/services/api/axios";
import { API_ENDPOINTS } from "@/services/api/endpoints";
import type { ApiResponse, PaginatedResponse } from "@/types/api";
import type { Product, ProductFilters } from "@/types/product";

export const productService = {
  async getProducts(params?: ProductFilters) {
    const response = await api.get<PaginatedResponse<Product>>(API_ENDPOINTS.products.list, {
      params,
    });
    return response.data;
  },

  async getProductDetails(id: string) {
    const response = await api.get<ApiResponse<Product>>(API_ENDPOINTS.products.details(id));
    return response.data.data;
  },
};
