import type { Id, QueryParams } from "./api";
import type { CartItem } from "./cart";

export type OrderStatus = "pending" | "processing" | "shipped" | "delivered" | "cancelled";
export type PaymentStatus = "pending" | "paid" | "failed" | "refunded";

export type Address = {
  fullName: string;
  phone: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

export type Order = {
  id: Id;
  orderNumber?: string;
  items: CartItem[];
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  shippingAddress: Address;
  subtotal: number;
  discountTotal?: number;
  taxTotal?: number;
  shippingTotal?: number;
  grandTotal: number;
  createdAt: string;
  updatedAt?: string;
};

export type CreateOrderPayload = {
  shippingAddress: Address;
  billingAddress?: Address;
  paymentMethod: string;
  couponCode?: string;
};

export type OrderFilters = QueryParams & {
  status?: OrderStatus | "all";
  page?: number;
  limit?: number;
};
