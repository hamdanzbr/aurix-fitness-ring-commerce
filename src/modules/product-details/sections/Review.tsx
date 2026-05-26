"use client";

import { motion } from "framer-motion";

import RatingCard from "../components/RatingCard";
import ReviewCard from "../components/ReviewCard";

const Review = () => {
  return (
    <section className="mt-24">
      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Endorsed by high performers
          </h1>

          <p className="mt-3 max-w-2xl text-zinc-400">
            Trusted by athletes, founders, creators, and elite
            performers worldwide.
          </p>
        </div>

        <p className="text-sm text-zinc-500">
          Based on 1,420 verified worldwide purchases
        </p>
      </div>

      {/* Content */}
      <div className="mt-10 grid grid-cols-1 gap-6 xl:grid-cols-[360px_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="xl:sticky xl:top-6 h-fit"
        >
          <RatingCard />
        </motion.div>

        <div className="space-y-5">
          {[1, 2, 3, 4].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
            >
              <ReviewCard />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;