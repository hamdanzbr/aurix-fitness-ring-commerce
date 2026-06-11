"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";


const ProductImage = ({
  prodImages,
  selectedImg,
  setSelectedImg,
}: {
  prodImages: string[] | undefined;
  selectedImg: string | undefined;
  setSelectedImg: Dispatch<SetStateAction<string | undefined>>;
}) => {
  return (
    <div>
      {/* Main Image */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
        className="
          overflow-hidden
          rounded-3xl
          border
          border-[#151727]
          bg-[#0B0D18]
          p-4
        "
      >
        <img
          className="aspect-[4/3] w-full rounded-2xl object-cover"
          src={selectedImg ?? ""}
          alt="Aurix Ring"
          width={800}
          height={600}
        />
      </motion.div>

      {/* Thumbnails */}
      <div className="mt-4 grid grid-cols-4 gap-3">
        {prodImages?.map((item,idx) => (
          <motion.button
            whileHover={{ y: -3 }}
            key={idx}
            className={cn(
              "overflow-hidden rounded-2xl border border-[#151727] bg-[#0B0D18] p-2 transition-all duration-300 hover:border-[#3B81F5]",
              selectedImg === item && "border-[#3B81F5]",
            )}
            onClick={() => setSelectedImg(item)}
          >
            <img
              className="
                aspect-square
                w-full
                h-full
                rounded-xl
                object-cover
              "
              src={item}
              alt=""
              width={160}
              height={160}
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
