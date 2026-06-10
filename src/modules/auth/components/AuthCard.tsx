"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AUTH_COPY } from "../constants/auth.constants";
import { LoginForm } from "./LoginForm";

export function AuthCard() {
  return (
    <motion.div
      className="relative z-10 grid min-h-[calc(100vh-2rem)] w-full max-w-6xl overflow-hidden rounded-none border border-white/[0.06] bg-black/54 shadow-[0_28px_90px_rgba(0,0,0,0.52)] backdrop-blur-xl md:min-h-[43rem] md:grid-cols-[1.02fr_1fr] md:rounded-[1.6rem]"
      initial={{ opacity: 0, y: 24, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
    >
      <section className="relative hidden overflow-hidden px-10 py-12 md:flex md:flex-col md:justify-center lg:px-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_34%,rgba(255,255,255,0.11),transparent_13rem),radial-gradient(circle_at_60%_78%,rgba(49,108,159,0.26),transparent_20rem)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,transparent_38%,rgba(120,243,255,0.12)_39%,transparent_41%),linear-gradient(21deg,transparent_0%,transparent_52%,rgba(72,151,205,0.12)_53%,transparent_56%)]" />

        <div className="relative mx-auto w-full max-w-sm text-center">
          <Link className="mx-auto mb-8 inline-flex items-center gap-3 text-xl font-black tracking-[0.14em]" href="/">
            <span className="h-6 w-6 rounded-full border-2 border-dashed border-white/90 shadow-[0_0_22px_rgba(120,243,255,0.36)]" />
            {AUTH_COPY.brand}
          </Link>

          <motion.div
            className="relative mx-auto h-64 w-64 overflow-hidden rounded-full border border-white/[0.08] bg-white/[0.04] shadow-[0_28px_80px_rgba(0,0,0,0.55)] lg:h-72 lg:w-72"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/aurix-ring-hero.png"
              alt="Aurix smart ring on reflective glass"
              width={640}
              height={640}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/18" />
          </motion.div>

          <h1 className="mt-8 text-3xl font-black leading-tight text-white">{AUTH_COPY.heroTitle}</h1>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-white/58">{AUTH_COPY.heroDescription}</p>
        </div>
      </section>

      <section className="flex min-h-[calc(100vh-2rem)] items-center px-5 py-10 sm:px-8 md:min-h-0 md:px-12 lg:px-16">
        <div className="mx-auto w-full max-w-md">
          <div className="mb-9 md:hidden">
            <Link className="inline-flex items-center gap-3 text-base font-black tracking-[0.14em]" href="/">
              <span className="h-5 w-5 rounded-full border-2 border-dashed border-white/90 shadow-[0_0_22px_rgba(120,243,255,0.36)]" />
              {AUTH_COPY.brand}
            </Link>
          </div>

          <div className="mb-9">
            <h2 className="text-3xl font-black tracking-[-0.02em] text-white sm:text-4xl md:text-3xl">
              {AUTH_COPY.loginTitle}
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/62">{AUTH_COPY.loginDescription}</p>
          </div>

          <LoginForm />
        </div>
      </section>
    </motion.div>
  );
}
