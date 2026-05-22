"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Star } from "lucide-react";
import { collection } from "../types/home.types";
import { motion } from "framer-motion";

type productCardProps = {
  collection: collection;
};
const ProductCard = ({ collection }: productCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: (collection.id - 1) * 0.08,
      }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card
        className="
                group
                h-full
                rounded-3xl
                border
                border-[#151517]
                bg-[#070709]
                p-4
                overflow-hidden
                transition-all
                duration-300
                hover:border-[#1C78FA]
                hover:shadow-[0_0_30px_rgba(28,120,250,0.12)]
                ring-[#151517]
              "
      >
        {/* Image */}
        <div className="relative overflow-hidden rounded-2xl bg-[#0c0c0e]">
          <img
            src={collection.image}
            alt={collection.name}
            width={500}
            height={500}
            className="
                    h-[320px]
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
          />
        </div>

        {/* Colors + Ratings */}
        <div className="mt-4 flex items-center justify-between">
          {/* Color Options */}
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#18181B]" />
            <span className="h-3 w-3 rounded-full bg-[#C7A44F]" />
            <span className="h-3 w-3 rounded-full bg-[#6B2C2C]" />
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 text-sm">
            <Star size={12} className="fill-[#60A5FA] text-[#60A5FA]" />

            <span className="font-medium text-white">
              {collection.avgRating}
            </span>

            <span className="text-zinc-500">({collection.totalRatings})</span>
          </div>
        </div>

        {/* Content */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold text-white">
            {collection.name}
          </h2>

          <p className="mt-1 text-sm text-zinc-400">${collection.price}</p>
        </div>

        {/* Button */}
        <Button
          className="
                  mt-5
                  h-12
                  w-full
                  rounded-xl
                  border
                  border-[#202024]
                  bg-[#141418]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#1a1a20]
                  hover:border-[#2a2a31]
                "
        >
          <ShoppingCart size={16} />

          <span>Quick Add</span>
        </Button>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
