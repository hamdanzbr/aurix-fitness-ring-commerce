"use client";

import { fadeUp } from "@/lib/motion";
import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type MotionSectionProps = {
  children: ReactNode;
} & HTMLMotionProps<"section">;

export function MotionSection({ children, className, ...props }: MotionSectionProps) {
  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
      variants={fadeUp}
      {...props}
    >
      {children}
    </motion.section>
  );
}
