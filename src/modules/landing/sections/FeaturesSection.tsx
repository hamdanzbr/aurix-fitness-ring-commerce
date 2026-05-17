"use client";

import { fadeUp, staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";
import { FeatureCard } from "../components/FeatureCard";
import { features } from "../constants/home.constants";

export function FeaturesSection() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.24 }} variants={staggerContainer}>
        <motion.div variants={fadeUp}>
          <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
            Everything you need.
            <span className="block text-white/40">Nothing you do not.</span>
          </h2>
        </motion.div>
        <motion.div className="mt-10 grid gap-5 md:grid-cols-3" variants={staggerContainer}>
          {features.map((feature) => (
            <motion.div key={feature.title} className={feature.featured ? "md:col-span-2" : ""} variants={fadeUp}>
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
