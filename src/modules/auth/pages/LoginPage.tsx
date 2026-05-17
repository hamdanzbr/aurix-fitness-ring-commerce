"use client";

import { motion } from "framer-motion";
import { AuthBackground } from "../components/AuthBackground";
import { AuthCard } from "../components/AuthCard";

export function LoginPage() {
  return (
    <motion.main
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-0 py-0 text-white sm:px-5 sm:py-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <AuthBackground />
      <AuthCard />
    </motion.main>
  );
}
