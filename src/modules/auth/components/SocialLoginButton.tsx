"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import type { SocialProvider } from "../types/auth.types";

type SocialLoginButtonProps = {
  provider: SocialProvider;
};

const providerLabel: Record<SocialProvider, string> = {
  google: "Google",
};

export function SocialLoginButton({ provider }: SocialLoginButtonProps) {
  return (
    <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.99 }}>
      <Button
        type="button"
        className="h-11 w-full gap-3 rounded-lg border border-white/[0.08] bg-[#1b1c21] text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:border-white/15 hover:bg-[#22242a]"
      >
        <span
          aria-hidden="true"
          className="flex h-4 w-4 items-center justify-center rounded-full border border-white/25 text-[0.65rem] font-black leading-none"
        >
          G
        </span>
        {providerLabel[provider]}
      </Button>
    </motion.div>
  );
}
