"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AuthBackground } from "../components/AuthBackground";
import { SignupForm } from "../components/SignupForm";
import { AUTH_COPY } from "../constants/auth.constants";

export default function SignupPage() {
  return (
    <motion.main
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-5 text-white sm:px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <AuthBackground />

      <section className="relative z-10 w-full max-w-[28.5rem]">
        <motion.div
          className="mb-5 text-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link className="inline-flex items-center gap-2 text-lg font-black tracking-[0.14em]" href="/">
            <span className="h-6 w-6 rounded-full border-2 border-dashed border-white/90 shadow-[0_0_22px_rgba(120,243,255,0.36)]" />
            {AUTH_COPY.brand}
          </Link>
          <p className="mt-2 text-xs text-white/58">{AUTH_COPY.signupEyebrow}</p>
        </motion.div>

        <motion.div
          className="rounded-2xl border border-white/[0.08] bg-[#101113]/92 px-5 py-7 shadow-[0_28px_90px_rgba(0,0,0,0.52)] backdrop-blur-xl sm:px-8"
          initial={{ opacity: 0, y: 24, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-7 text-center">
            <h1 className="text-2xl font-black tracking-[-0.02em] text-white">
              {AUTH_COPY.signupTitle}
            </h1>
            <p className="mt-3 text-sm leading-6 text-white/58">{AUTH_COPY.signupDescription}</p>
          </div>

          <SignupForm />
        </motion.div>
      </section>
    </motion.main>
  );
}
