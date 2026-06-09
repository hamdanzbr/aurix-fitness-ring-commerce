export type filteredOrdersType =
  | "all"
  | "delivered"
  | "processing"
  | "shipped"
  | "cancelled"
  | "pending"

export type OrderFilterButtonType = {
  label: string;
  value: filteredOrdersType;
};