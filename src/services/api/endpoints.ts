export const API_ENDPOINTS = {
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    me: "/auth/me",
    logout: "/auth/logout",
    refresh: "/auth/refresh",
  },
  products: {
    list: "/products",
    details: (id: string) => `/products/${id}`,
  },
  wishlist: {
    list: "/wishlist",
    add: "/wishlist",
    remove: (productId: string) => `/wishlist/${productId}`,
  },
  cart: {
    get: "/cart",
    add: "/cart",
    updateItem: (itemId: string) => `/cart/items/${itemId}`,
    removeItem: (itemId: string) => `/cart/${itemId}`,
    clear: "/cart",
  },
  orders: {
    list: "/orders",
    create: "/orders",
    details: (id: string) => `/orders/${id}`,
  },
} as const;
