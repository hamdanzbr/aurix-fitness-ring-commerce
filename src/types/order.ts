import type { Id, QueryParams } from "./api";
import type { CartItem } from "./cart";

export type OrderStatus =
  | "pending"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled";
export type PaymentStatus = "pending" | "paid" | "failed" | "refunded";

export type Address = {
  fullName: string;
  phoneNumber: string;
  addressLine1: string;
  addressLine2?: string;
  email: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

export type Order = {
  _id: Id;
  orderNumber?: string;
  items: CartItem[];
  orderStatus: OrderStatus;
  paymentStatus: PaymentStatus;
  shippingAddress: Address;
  subtotal: number;
  discountTotal?: number;
  taxTotal?: number;
  shippingTotal?: number;
  totalAmount: number;
  createdAt: string;
  updatedAt?: string;
};

export type MyOrdersStats = {
  totalOrders: number;
  processingOrders: number;
  deliveredOrders: number;
  shippedOrders: number;
  cancelledOrders: number;
  totalSpent: number;
};
export type CreateOrderPayload = {
  shippingAddress: Address;
  billingAddress?: Address;
  paymentMethod: string;
  deliveryMethod: string;
  couponCode?: string;
};

export type OrderFilters = QueryParams & {
  status?: OrderStatus | "all";
  page?: number;
  limit?: number;
  keyword?: string;
  startDate?: string;
  endDate?: string;
  sortBy?: string;
};
