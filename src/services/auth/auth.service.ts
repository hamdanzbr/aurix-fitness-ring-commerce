import api from "@/services/api/axios";
import { API_ENDPOINTS } from "@/services/api/endpoints";
import type { ApiResponse } from "@/types/api";
import type { AuthResponse, LoginPayload, RegisterPayload, UpdateProfilePayload, User } from "@/types/auth";

export const authService = {
  async login(payload: LoginPayload) {
    const response = await api.post<ApiResponse<AuthResponse>>(API_ENDPOINTS.auth.login, payload);
    return response.data.data;
  },

  async register(payload: RegisterPayload) {
    const response = await api.post<ApiResponse<AuthResponse>>(API_ENDPOINTS.auth.register, payload);
    return response.data.data;
  },

  async me() {
    const response = await api.get<ApiResponse<User>>(API_ENDPOINTS.auth.me);
    return response.data.data;
  },

  async updateProfile(payload: UpdateProfilePayload) {
    const response = await api.patch<ApiResponse<User>>(API_ENDPOINTS.auth.me, payload);
    return response.data.data;
  },

  async logout() {
    await api.post<ApiResponse<null>>(API_ENDPOINTS.auth.logout);
  },
};
