export type ApiStatus = "success" | "error" | "fail";

export type ApiResponse<T> = {
  status?: ApiStatus;
  success?: boolean;
  message?: string;
  data: T;
};

export type ApiErrorResponse = {
  status?: ApiStatus;
  success?: boolean;
  message?: string;
  errors?: Record<string, string[] | string> | string[];
};

export type PaginationMeta = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export type PaginatedResponse<T> = ApiResponse<T[]> & {
  pagination?: PaginationMeta;
};

export type QueryParams = Record<string, string | number | boolean | null | undefined>;

export type Id = string;
