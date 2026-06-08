"use client";

import { Heart, ShieldHalf, Truck } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Header = () => {
  const router=useRouter()
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-8 border-b border-[#161618] pb-8"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
            Smart Fitness Rings
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-[#A19CA5] lg:text-base">
            Discover the next generation of wearable wellness. Aerospace-grade
            materials meeting clinical-grade insights.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <Button className="flex items-center gap-2" onClick={()=>router.push('/wishlists')}>
            <Heart size={16} className="text-[#528DD5]" />

            <span className="text-sm text-[#A19CA5]">Wishlists</span>
          </Button>
          <div className="flex items-center gap-2">
            <Truck size={16} className="text-[#528DD5]" />

            <span className="text-sm text-[#A19CA5]">
              Free Express Shipping
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
