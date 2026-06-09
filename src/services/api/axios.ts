import axios from "axios";
import { attachRequestInterceptor, attachResponseInterceptor } from "./interceptors";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

attachRequestInterceptor(api);
attachResponseInterceptor(api);

export default api;
