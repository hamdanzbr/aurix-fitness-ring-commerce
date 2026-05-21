"use client";

import { motion } from "framer-motion";
import { ArrowRight, Truck, Shield } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#060c18] flex items-center">

      <div className="pointer-events-none absolute inset-0 opacity-[0.07] border">
        <Image
          src="/images/futuristic-luxurious.png"
          alt="Aurix ring product finish detail"
          width={1536}
          height={1536}
          priority
          className="relative z-10 aspect-[1.1/1] rounded-xl object-cover"
        />
      </div>
      {/* ── Main content grid ── */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-10 px-6 py-24 lg:grid-cols-2 lg:px-16">
        {/* LEFT — copy */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {/* Pill badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
              Aurix Gen 3 Is Here
            </span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden">
            <motion.h1
              className=" text-5xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl xl:text-7xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Elevate your
              <br />
              <span className="bg-gradient-to-r from-[#3b9eff] to-[#60c8ff] bg-clip-text text-transparent">
                potential.
              </span>
            </motion.h1>
          </div>

          {/* Body */}
          <motion.p
            className="max-w-[480px] text-[15px] leading-relaxed text-slate-400"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
          >
            Experience the ultimate fusion of luxury design and clinical-grade
            wellness tracking. Precision engineered in aerospace-grade titanium.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34, ease: "easeOut" }}
          >
            <button className="group flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#060c18] shadow-[0_0_28px_rgba(255,255,255,0.15)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_36px_rgba(255,255,255,0.25)]">
              Shop Now
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <button className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10">
              Explore Features
            </button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="flex flex-wrap items-center gap-6 pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.48 }}
          >
            <div className="flex items-center gap-2 text-[13px] text-slate-400">
              <Truck size={15} className="text-slate-500" />
              <span>Free Express Shipping</span>
            </div>
            <div className="flex items-center gap-2 text-[13px] text-slate-400">
              <Shield size={15} className="text-slate-500" />
              <span>Lifetime Warranty</span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT — product visual */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.88, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Outer ambient glow */}
          <div className="absolute h-[380px] w-[380px] rounded-full bg-orange-600/10 blur-[80px]" />
          <div className="absolute h-[280px] w-[280px] rounded-full bg-blue-500/15 blur-[60px]" />

          {/* Ring illustration */}
          <motion.div
            className="relative"
            // animate={{ y: [0, -12, 0] }}
            // transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/ring-home.webp"
              alt="Aurix smart fitness ring product image"
              width={400}
              height={400}
              priority
              className="relative z-10 aspect-square object-contain"
            />
            {/* Fire trail SVG */}

          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#060c18] to-transparent" />

      {/* Load Syne font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');
      `}</style>
    </section>
  );
};

export default HeroSection;
