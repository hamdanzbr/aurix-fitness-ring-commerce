"use client";

import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Dispatch, SetStateAction } from "react";
import { ProductFilters } from "@/types/product";
import {
  filterCategories,
  filterFeatures,
  filterFinishes,
} from "../constants/shop.constants";

const SidebarFilters = ({
  setFilters,
  filters,
}: {
  setFilters: Dispatch<SetStateAction<ProductFilters>>;
  filters: ProductFilters;
}) => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45 }}
      className="
        h-fit
        w-full
        rounded-3xl
        border
        border-[#1A1A1C]
        bg-[#070709]
        p-5
        lg:sticky
        lg:top-6
        lg:w-[280px]
      "
    >
      <div className="space-y-8">
        {/* CATEGORY */}
        <div>
          <h2 className="text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase">
            Category
          </h2>

          <div className="mt-4 space-y-3">
            {filterCategories.map((item, index) => (
              <label
                key={index}
                className="flex cursor-pointer items-center gap-3"
              >
                <input
                  checked={filters?.categories?.includes(item.value)}
                  onChange={(e) => {
                    setFilters((prev) => ({
                      ...prev,
                      page: 1,
                      categories: e.target.checked
                        ? [...(prev?.categories ?? []), item.value]
                        : (prev?.categories ?? []).filter(
                            (category) => category !== item.value,
                          ),
                    }));
                  }}
                  type="checkbox"
                  className="accent-[#1C78FA]"
                />

                <span className="text-sm text-[#A19CA5]">{item.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* PRICE */}
        {/* PRICE */}
        <div>
          <h2 className="text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase">
            Price
          </h2>

          <div className="mt-5">
            <Slider
              value={[filters.minPrice ?? 100, filters.maxPrice ?? 30000]}
              min={100}
              max={30000}
              step={100}
              onValueChange={(value) => {
                if (Array.isArray(value) && value.length === 2) {
                  setFilters((prev) => ({
                    ...prev,
                    page: 1,
                    minPrice: value[0],
                    maxPrice: value[1],
                  }));
                }
              }}
            />

            <div className="mt-3 flex justify-between text-xs text-zinc-500">
              <span>${filters.minPrice?.toLocaleString()}</span>
              <span>${filters.maxPrice?.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* FINISH */}
        <div>
          <h2 className="text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase">
            Finish
          </h2>

          <div className="mt-4 space-y-3">
            {filterFinishes.map((item, index) => (
              <label
                key={index}
                className="flex cursor-pointer items-center gap-3"
              >
                <input
                  checked={filters?.finishes?.includes(item.value)}
                  onChange={(e) => {
                    setFilters((prev) => ({
                      ...prev,
                      page: 1,
                      finishes: e.target.checked
                        ? [...(prev?.finishes ?? []), item.value]
                        : (prev?.finishes ?? []).filter(
                            (category) => category !== item.value,
                          ),
                    }));
                  }}
                  type="checkbox"
                  className="accent-[#1C78FA]"
                />

                <span className="text-sm text-[#A19CA5]">{item.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* FEATURES */}
        <div>
          <h2 className="text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase">
            Features
          </h2>

          <div className="mt-4 space-y-3">
            {filterFeatures.map((item, index) => (
              <label
                key={index}
                className="flex cursor-pointer items-center gap-3"
              >
                <input
                  checked={filters?.features?.includes(item.value)}
                  onChange={(e) => {
                    setFilters((prev) => ({
                      ...prev,
                      page: 1,
                      features: e.target.checked
                        ? [...(prev?.features ?? []), item.value]
                        : (prev?.features ?? []).filter(
                            (category) => category !== item.value,
                          ),
                    }));
                  }}
                  type="checkbox"
                  className="accent-[#1C78FA]"
                />

                <span className="text-sm text-[#A19CA5]">{item.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </motion.aside>
  );
};

export default SidebarFilters;
