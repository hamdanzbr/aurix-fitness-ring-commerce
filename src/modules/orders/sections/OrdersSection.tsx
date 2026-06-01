"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { useState } from "react";

import SelectDropdown from "@/modules/shop/components/SelectDropdown";

import {
  orderFilterButtons,
  orderTimeFilterOptions,
} from "../constants/orders.constants";

import { filteredOrdersType } from "../types/orders.types";
import { Input } from "@/components/ui/input";
import { Dot, Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import OrderCard from "../components/OrderCard";

const OrdersSection = () => {
  const [selectedFilter, setSelectedFilter] =
    useState<filteredOrdersType>("all");

  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div className="space-y-5">
      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        {orderFilterButtons.map((filter) => (
          <Button
            key={filter.value}
            className={cn(
              selectedFilter === filter.value && "bg-[#1C78FA] text-white",

              "h-10 rounded-full text-sm transition-colors hover:bg-[#1C78FA]/10 hover:text-[#1C78FA]",
            )}
            onClick={() => setSelectedFilter(filter.value)}
          >
            <h1>
              {filter.label} <span>15</span>
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
          onValueChange={setSelectedDate}
          options={orderTimeFilterOptions}
        />
      </div>

      <div className="space-y-5">
        <div className="flex justify-between">
          <h1 className="fontbold">Showing 14 results</h1>
          <SelectDropdown
            placeholder="Filter by Date"
            value={selectedDate}
            onValueChange={setSelectedDate}
            options={orderTimeFilterOptions}
          />
        </div>

        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </div>
  );
};

export default OrdersSection;
