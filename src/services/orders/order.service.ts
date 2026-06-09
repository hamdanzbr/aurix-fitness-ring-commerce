import api from "@/services/api/axios";
import { API_ENDPOINTS } from "@/services/api/endpoints";
import type { ApiResponse, PaginatedResponse } from "@/types/api";
import type { CreateOrderPayload, MyOrdersStats, Order, OrderFilters } from "@/types/order";

export const orderService = {
  async getOrders(params?: OrderFilters) {
    const response = await api.get<PaginatedResponse<Order>>(API_ENDPOINTS.orders.list, {
      params,
    });
    return response.data;
  },

  
  async getOrdersStats() {
    const response = await api.get<ApiResponse<MyOrdersStats>>(API_ENDPOINTS.orders.stats);
    return response.data.data;
  },

  async getOrderDetails(id: string) {
    const response = await api.get<ApiResponse<Order>>(API_ENDPOINTS.orders.details(id));
    return response.data.data;
  },

  async createOrder(payload: CreateOrderPayload) {
    const response = await api.post<ApiResponse<Order>>(API_ENDPOINTS.orders.create, payload);
    return response.data.data;
  },
};
