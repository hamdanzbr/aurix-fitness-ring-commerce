"use client";

import { motion } from "framer-motion";

import Buybox from "../components/Buybox";
import ProductImage from "../components/ProductImage";
import { Product } from "@/types/product";
import { useState } from "react";

const BuySection = ({product}:{product:Product|undefined}) => {
  const [selectedSize,setSelectedSize]=useState<string|undefined>();
  const[selectedImg,setSelectedImg]=useState<string|undefined>();  
  const[selectedFinish,setSelectedFinish]=useState<string|undefined>();
  const activeImage = selectedImg ?? product?.images?.[0];
  const activeSize = selectedSize ?? product?.availableSizes?.[0];
  const activeFinish = selectedFinish ?? product?.availableFinishes?.[0];

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ProductImage prodImages={product?.images} selectedImg={activeImage} setSelectedImg={setSelectedImg}/>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="lg:sticky lg:top-6 h-fit"
      >
        <Buybox product={product} selectedSize={activeSize} setSelectedSize={setSelectedSize} selectedFinish={activeFinish} setSelectedFinish={setSelectedFinish} />
      </motion.div>
    </div>
  );
};

export default BuySection;
