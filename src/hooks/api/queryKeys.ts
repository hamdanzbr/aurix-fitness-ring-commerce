export const queryKeys = {
  auth: {
    me: ["auth", "me"] as const,
  },
  products: {
    all: ["products"] as const,
    list: (params?: unknown) => ["products", "list", params] as const,
    details: (id: string) => ["products", "details", id] as const,
  },
  wishlist: {
    all: ["wishlist"] as const,
  },
  cart: {
    all: ["cart"] as const,
  },
  orders: {
    all: ["orders"] as const,
    list: (params?: unknown) => ["orders", "list", params] as const,
    details: (id: string) => ["orders", "details", id] as const,
  },
} as const;
