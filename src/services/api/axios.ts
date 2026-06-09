import axios from "axios";
import { attachRequestInterceptor, attachResponseInterceptor } from "./interceptors";

export const api = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

attachRequestInterceptor(api);
attachResponseInterceptor(api);

export default api;
