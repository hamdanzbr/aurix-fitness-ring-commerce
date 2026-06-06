import api from "@/services/api/axios";
import { API_ENDPOINTS } from "@/services/api/endpoints";
import type { ApiResponse } from "@/types/api";
import type { AddToCartPayload, Cart, CartResponse, UpdateCartItemPayload } from "@/types/cart";

export const cartService = {
  async getCart() {
    const response = await api.get<ApiResponse<CartResponse>>(API_ENDPOINTS.cart.get);
    return response.data.data;
  },

  async addToCart(payload: AddToCartPayload) {
    const response = await api.post<ApiResponse<Cart>>(API_ENDPOINTS.cart.add, payload);
    return response.data.data;
  },

  async updateCartItem(itemId: string, payload: UpdateCartItemPayload) {
    const response = await api.patch<ApiResponse<Cart>>(API_ENDPOINTS.cart.updateItem(itemId), payload);
    return response.data.data;
  },

  async removeCartItem(itemId: string) {
    const response = await api.delete<ApiResponse<Cart>>(API_ENDPOINTS.cart.removeItem(itemId));
    return response.data.data;
  },

  async clearCart() {
    const response = await api.delete<ApiResponse<Cart>>(API_ENDPOINTS.cart.clear);
    return response.data.data;
  },
};
