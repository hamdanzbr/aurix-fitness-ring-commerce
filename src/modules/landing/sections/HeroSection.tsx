"use client";

import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  
  return (
    <section id="shop" className="mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-8 lg:pb-24 lg:pt-16">
      <motion.div className="max-w-3xl" initial="hidden" animate="visible" variants={staggerContainer}>
        <motion.p className="text-xs font-bold uppercase tracking-[0.22em] text-white/60" variants={fadeUp}>
          Now available in matte black
        </motion.p>
        <motion.h1 className="mt-7 max-w-3xl text-5xl font-black leading-[1.02] text-white sm:text-6xl lg:text-7xl" variants={fadeUp}>
          Know your body.
          <span className="block text-aurix-blue">Master your life.</span>
        </motion.h1>
        <motion.p className="mt-7 max-w-xl text-base leading-8 text-white/60 sm:text-lg" variants={fadeUp}>
          The smartest ring ever designed. Aurix tracks your sleep, readiness, and activity with clinical-grade accuracy,
          wrapped in an elegant titanium shell.
        </motion.p>
        <motion.div className="mt-8 flex flex-wrap items-center gap-4" variants={fadeUp}>
          <Button>Shop Aurix</Button>
          <a className="text-sm font-medium text-white/60 transition hover:text-white" href="#features">
            3+ new variants
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative mt-12 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.03] p-3 shadow-panel"
        initial={{ opacity: 0, y: 34, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 bg-radial-blue opacity-50" />
        <Image
          priority
          src="/images/aurix-ring-hero.png"
          alt="A matte black Aurix smart fitness ring standing on reflective glass"
          width={1536}
          height={1536}
          className="relative z-10 aspect-[1.28/1] w-full rounded-[1.45rem] object-cover object-center"
        />
      </motion.div>
    </section>
  );
}
