"use client";

import { motion } from "framer-motion";

import Buybox from "../components/Buybox";
import ProductImage from "../components/ProductImage";
import { Product } from "@/types/product";

const BuySection = ({product}:{product:Product|undefined}) => {
  console.log(product);
  
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ProductImage prodImages={product?.images}/>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="lg:sticky lg:top-6 h-fit"
      >
        <Buybox product={product}/>
      </motion.div>
    </div>
  );
};

export default BuySection;