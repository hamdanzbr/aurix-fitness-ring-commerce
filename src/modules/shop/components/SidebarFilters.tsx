"use client";

import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";

const SidebarFilters = () => {
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
            {[
              "Smart Rings",
              "Fitness Tracking",
              "Sleep Monitoring",
              "Wellness",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-sm"
              >
                <span className="cursor-pointer text-[#A19CA5] transition hover:text-white">
                  {item}
                </span>

                <span className="text-zinc-600">12</span>
              </div>
            ))}
          </div>
        </div>

        {/* PRICE */}
        <div>
          <h2 className="text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase">
            Price
          </h2>

          <div className="mt-5">
            <Slider defaultValue={[200, 800]} min={200} max={800} />

            <div className="mt-3 flex justify-between text-xs text-zinc-500">
              <span>$200</span>
              <span>$800</span>
            </div>
          </div>
        </div>

        {/* FINISH */}
        <div>
          <h2 className="text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase">
            Finish
          </h2>

          <div className="mt-4 space-y-3">
            {[
              "Titanium",
              "Matte Black",
              "Silver",
              "Rose Gold",
            ].map((item, index) => (
              <label
                key={index}
                className="flex cursor-pointer items-center gap-3"
              >
                <input
                  type="checkbox"
                  className="accent-[#1C78FA]"
                />

                <span className="text-sm text-[#A19CA5]">
                  {item}
                </span>
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
            {[
              "Heart Rate",
              "Sleep Tracking",
              "Waterproof",
              "Stress Analysis",
              "Long Battery",
            ].map((item, index) => (
              <label
                key={index}
                className="flex cursor-pointer items-center gap-3"
              >
                <input
                  type="checkbox"
                  className="accent-[#1C78FA]"
                />

                <span className="text-sm text-[#A19CA5]">
                  {item}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </motion.aside>
  );
};

export default SidebarFilters;