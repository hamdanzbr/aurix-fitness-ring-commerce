import { QueryClient } from "@tanstack/react-query";

type RetryableError = {
  status?: number;
  response?: {
    status?: number;
  };
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      gcTime: 1000 * 60 * 10,
      refetchOnWindowFocus: false,
      retry: (failureCount, error) => {
        const retryableError = error as RetryableError;
        const status = retryableError.response?.status ?? retryableError.status;

        if (status === 401 || status === 404) {
          return false;
        }

        return failureCount < 2;
      },
    },
    mutations: {
      retry: false,
    },
  },
});
