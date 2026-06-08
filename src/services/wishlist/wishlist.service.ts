import api from "@/services/api/axios";
import { API_ENDPOINTS } from "@/services/api/endpoints";
import type { ApiResponse } from "@/types/api";
import type { Wishlist, WishlistItem, WishlistPayload } from "@/types/wishlist";

export const wishlistService = {
  async getWishlist() {
    const response = await api.get<ApiResponse<WishlistItem[]>>(API_ENDPOINTS.wishlist.list);
    return response.data.data;
  },

  async addToWishlist(payload: WishlistPayload) {
    const response = await api.post<ApiResponse<Wishlist>>(API_ENDPOINTS.wishlist.add, payload);
    return response.data.data;
  },

  async removeFromWishlist(productId: string) {
    const response = await api.delete<ApiResponse<Wishlist>>(API_ENDPOINTS.wishlist.remove(productId));
    return response.data.data;
  },
};
