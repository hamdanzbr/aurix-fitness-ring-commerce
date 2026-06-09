"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { useState } from "react";

import SelectDropdown from "@/modules/shop/components/SelectDropdown";

import {
  orderFilterButtons,
  orderSortOptions,
  orderTimeFilterOptions,
} from "../constants/orders.constants";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import OrderCard from "../components/OrderCard";
import { useOrders } from "@/hooks/api/useOrders";
import { OrderFilters } from "@/types/order";

const OrdersSection = () => {
  const [filters, setFilters] = useState<OrderFilters>({
    endDate: "",
    startDate: "",
    keyword: "",
    limit: 10,
    page: 1,
    sortBy: "",
    status: "all",
  });
  const { data } = useOrders(filters);

  const [selectedDate, setSelectedDate] = useState("");
  const handleDateFilter = (value: string) => {
    const endDate = new Date();
    const startDate = new Date();
    switch (value) {
      case "7days":
        startDate.setDate(endDate.getDate() - 7);
        break;

      case "1month":
        startDate.setMonth(endDate.getMonth() - 1);
        break;

      case "3months":
        startDate.setMonth(endDate.getMonth() - 3);
        break;

      case "6months":
        startDate.setMonth(endDate.getMonth() - 6);
        break;

      case "1year":
        startDate.setFullYear(endDate.getFullYear() - 1);
        break;

      default:
        return;
    }

    setSelectedDate(value);

    setFilters((prev) => ({
      ...prev,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      page: 1,
    }));
  };
  return (
    <div className="space-y-5">
      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        {orderFilterButtons.map((filter) => (
          <Button
            key={filter.value}
            className={cn(
              filters.status === filter.value && "bg-[#1C78FA] text-white",

              "h-10 rounded-full text-sm transition-colors hover:bg-[#1C78FA]/10 hover:text-[#1C78FA]",
            )}
            onClick={() =>
              setFilters((prev) => ({ ...prev, status: filter.value }))
            }
          >
            <h1>
              {filter.label}
            </h1>
          </Button>
        ))}
      </div>

      <div className="flex items-center gap-3 sm:flex-row sm:items-center">
        {/* Search */}
        <div className="relative w-full sm:max-w-[320px]">
          <Search
            size={16}
            className="
        absolute
        left-4
        top-1/2
        -translate-y-1/2
        text-zinc-500
      "
          />

          <Input
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, keyword: e.target.value }))
            }
            placeholder="Search orders..."
            className="
        h-11
        rounded-full
        border-[#1A1A1C]
        bg-[#0C0C0D]
        pl-11
        text-white
        placeholder:text-zinc-500
        focus-visible:ring-0
        focus-visible:ring-offset-0
      "
          />
        </div>

        {/* Dropdown */}
        <SelectDropdown
          placeholder="Filter by Date"
          value={selectedDate}
          onValueChange={(val)=>{
            if(!val) return
            handleDateFilter(val)
          }}
          options={orderTimeFilterOptions}
        />
      </div>

      <div className="space-y-5">
        <div className="flex justify-between">
          <h1 className="fontbold">
            Showing {data?.pagination?.total} results
          </h1>
          <SelectDropdown
            placeholder="Sort By"
            value={filters.sortBy}
            onValueChange={(value) =>{
              if(!value) return
              setFilters((prev) => ({
                ...prev,
                sortBy: value,
                page: 1,
              }))}
            }
            options={orderSortOptions}
          />
        </div>
        {data?.data?.map((order) => (
          <OrderCard key={order._id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default OrdersSection;
