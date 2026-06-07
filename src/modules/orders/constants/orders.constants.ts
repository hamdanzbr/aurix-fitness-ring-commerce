import { SelectOptionType } from "@/modules/shop/types/shop.types";
import { OrderFilterButtonType } from "../types/orders.types";

export const orderFilterButtons: OrderFilterButtonType[] = [
  {
    label: "All Orders",
    value: "all",
  },
  {
    label: "Delivered",
    value: "delivered",
  },
  {
    label: "Processing",
    value: "pending",
  },
  {
    label: "Shipped",
    value: "shipped",
  },
  {
    label: "Cancelled",
    value: "cancelled",
  },
];

export const orderTimeFilterOptions:SelectOptionType[] = [
  {
    label: "Last 7 Days",
    value: "7days",
  },
  {
    label: "Last 1 Month",
    value: "1month",
  },
  {
    label: "Last 3 Months",
    value: "3months",
  },
  {
    label: "Last 6 Months",
    value: "6months",
  },
  {
    label: "Last 1 Year",
    value: "1year",
  },
];

export const orderSortOptions = [
  {
    label: "Newest First",
    value: "newest",
  },
  {
    label: "Oldest First",
    value: "oldest",
  },
  {
    label: "Price High to Low",
    value: "price_high_to_low",
  },
  {
    label: "Price Low to High",
    value: "price_low_to_high",
  },
];