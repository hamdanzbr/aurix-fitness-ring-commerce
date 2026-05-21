"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  ChevronRight,
  ShoppingCart,
  Star,
} from "lucide-react";

import { collections } from "../constants/home.constants";

const Collection = () => {
  return (
    <section className="relative w-full overflow-hidden px-4 py-20 sm:px-6 lg:px-16">
      {/* Header */}
      <div className="flex items-end justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            The Collection
          </h1>

          <p className="mt-2 text-sm sm:text-base text-zinc-400">
            Choose the perfect finish for your style.
          </p>
        </div>

        <button className="group flex items-center gap-1 text-sm font-medium text-[#1C78FA] transition-colors hover:text-blue-400">
          View All

          <ChevronRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>

      {/* Collection Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {collections.map((collection, index) => (
          <motion.div
            key={collection.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
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
                  <Star
                    size={12}
                    className="fill-[#60A5FA] text-[#60A5FA]"
                  />

                  <span className="font-medium text-white">
                    {collection.avgRating}
                  </span>

                  <span className="text-zinc-500">
                    ({collection.totalRatings})
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="mt-4">
                <h2 className="text-lg font-semibold text-white">
                  {collection.name}
                </h2>

                <p className="mt-1 text-sm text-zinc-400">
                  ${collection.price}
                </p>
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
        ))}
      </div>
    </section>
  );
};

export default Collection;