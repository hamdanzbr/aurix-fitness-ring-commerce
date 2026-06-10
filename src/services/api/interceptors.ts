import type { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { toast } from "sonner";
import { useAuthStore } from "@/store/auth.store";
import type { ApiErrorResponse } from "@/types/api";

const getErrorMessage = (error: AxiosError<ApiErrorResponse>) => {
  return (
    error.response?.data?.message ||
    error.message ||
    "Something went wrong. Please try again."
  );
};

export const attachRequestInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = useAuthStore.getState().accessToken;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });
};

export const attachResponseInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    (response) => response,
    (error: AxiosError<ApiErrorResponse>) => {
      const status = error.response?.status;
      const message = getErrorMessage(error);

      if (status === 401) {
        useAuthStore.getState().logout();
        toast.error("Session expired. Please sign in again.");
      } else if (typeof window !== "undefined") {
        toast.error(message);
      }

      return Promise.reject(error);
    },
  );
};
