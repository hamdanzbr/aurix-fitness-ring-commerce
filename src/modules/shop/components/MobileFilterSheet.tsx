"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { SlidersHorizontal } from "lucide-react";

import SidebarFilters from "./SidebarFilters";
import { ProductFilters } from "@/types/product";
import { Dispatch, SetStateAction } from "react";

type Props = {
  filters: ProductFilters;
  setFilters: Dispatch<SetStateAction<ProductFilters>>;
};

const MobileFilterSheet = ({
  filters,
  setFilters,
}: Props) => {
  return (
    <Sheet>
      <SheetTrigger>
        <div
          className="
            h-11
            border-[#1A1A1C]
            bg-[#070709]
            text-white
            flex gap-2
          "
        >
          <SlidersHorizontal size={18} />
          Filters
        </div>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="
          w-[320px]
          overflow-y-auto
          border-[#1A1A1C]
          bg-[#070709]
          p-0
        "
      >
        <SheetHeader className="p-5">
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>

        <div className="p-5">
          <SidebarFilters
            filters={filters}
            setFilters={setFilters}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileFilterSheet;