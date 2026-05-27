export type filteredOrdersType =
  | "all"
  | "delivered"
  | "processing"
  | "shipped"
  | "cancelled";

export type OrderFilterButtonType = {
  label: string;
  value: filteredOrdersType;
};