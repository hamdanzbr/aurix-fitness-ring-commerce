"use client";

import { motion } from "framer-motion";

export function AuthBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[#020304]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_72%,rgba(61,132,184,0.24),transparent_28rem),radial-gradient(circle_at_88%_10%,rgba(120,243,255,0.08),transparent_22rem),linear-gradient(180deg,#020304_0%,#050607_50%,#020304_100%)]" />
      <motion.div
        className="absolute left-[28%] top-[-8%] h-[46rem] w-px rotate-[12deg] bg-gradient-to-b from-transparent via-[#78f3ff]/35 to-transparent blur-[0.5px]"
        animate={{ opacity: [0.24, 0.62, 0.24], x: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-14%] left-[8%] h-[34rem] w-[42rem] rounded-[48%] border border-[#78f3ff]/10"
        animate={{ opacity: [0.18, 0.34, 0.18], y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute left-0 top-0 hidden h-full w-[48%] bg-[linear-gradient(115deg,transparent_0%,transparent_48%,rgba(120,243,255,0.08)_49%,transparent_52%),linear-gradient(154deg,transparent_0%,transparent_42%,rgba(61,132,184,0.16)_43%,transparent_47%)] opacity-80 lg:block" />
      <div className="absolute inset-y-0 left-1/2 hidden w-px bg-white/[0.06] lg:block" />
    </div>
  );
}
