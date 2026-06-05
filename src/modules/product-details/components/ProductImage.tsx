"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "https://app.banani.co/api/flow-image/4%3A3%0AA%20majestic%20ultra-high-definition%20cinematic%20photo%20of%20the%20AURIX%20smart%20ring%2C%20minimalist%20matte%20black%20titanium%2C%20emitting%20a%20soft%20blue%20light%20halo%20from%20the%20interior%20sensors%2C%20set%20against%20a%20dark%20premium%20space%20stardust%20background",
];

const ProductImage = ({prodImages}:{prodImages:string[]|undefined}) => {
  const[selectedImg,setSelectedImg]=useState<string|undefined>('');

  useEffect(()=>{
   !selectedImg &&  setSelectedImg(prodImages?.[0]);
  }, [prodImages])

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
          className="
            aspect-[4/3]
            w-full
            rounded-2xl
            object-cover
          "
          src={selectedImg}
          alt="Aurix Ring"
        />
      </motion.div>

      {/* Thumbnails */}
      <div className="mt-4 grid grid-cols-4 gap-3">
        {prodImages?.map((item) => (
          <motion.button
            whileHover={{ y: -3 }}
            key={item}
            className={cn("overflow-hidden rounded-2xl border border-[#151727] bg-[#0B0D18] p-2 transition-all duration-300 hover:border-[#3B81F5]",selectedImg===item && "border-[#3B81F5]")}
            onClick={()=>setSelectedImg(item)}
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
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;