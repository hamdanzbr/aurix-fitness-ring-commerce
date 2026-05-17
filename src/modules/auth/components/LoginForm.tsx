"use client";

import { Button } from "@/components/ui/button";
import { LockKeyhole, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AUTH_COPY, AUTH_LINKS } from "../constants/auth.constants";
import { usePasswordVisibility } from "../hooks/usePasswordVisibility";
import { handleAuthFormSubmit } from "../utils/auth.utils";
import { AuthInput } from "./AuthInput";
import { PasswordToggle } from "./PasswordToggle";
import { SocialLoginButton } from "./SocialLoginButton";

export function LoginForm() {
  const { inputType, isPasswordVisible, togglePasswordVisibility } = usePasswordVisibility();

  return (
    <form className="space-y-6" onSubmit={handleAuthFormSubmit}>
      <div className="space-y-5">
        <AuthInput
          icon={<Mail className="h-4 w-4" aria-hidden="true" />}
          label="Email or Username"
          name="identifier"
          type="text"
          placeholder="Enter your email"
          autoComplete="username"
        />

        <label className="block">
          <span className="mb-2 block text-xs font-bold text-white">Password</span>
          <span className="flex h-11 items-center gap-3 rounded-lg border border-white/[0.08] bg-[#1b1c21] px-3 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition focus-within:border-[#78f3ff]/45 focus-within:bg-[#202127] focus-within:ring-3 focus-within:ring-[#78f3ff]/10">
            <LockKeyhole className="h-4 w-4 text-white/48" aria-hidden="true" />
            <input
              className="min-w-0 flex-1 bg-transparent text-sm font-medium text-white outline-none placeholder:text-white/56"
              name="password"
              type={inputType}
              placeholder="Password"
              autoComplete="current-password"
            />
            <PasswordToggle isVisible={isPasswordVisible} onToggle={togglePasswordVisibility} />
          </span>
        </label>
      </div>

      <div className="flex items-center justify-between gap-4 text-xs">
        <label className="flex min-w-0 items-center gap-2 text-white/58">
          <input
            type="checkbox"
            name="remember"
            className="h-4 w-4 rounded border-white/[0.08] bg-[#1b1c21] accent-[#78f3ff]"
          />
          <span>Remember me</span>
        </label>
        <Link className="font-bold text-white transition hover:text-[#78f3ff]" href={AUTH_LINKS.forgotPassword}>
          Forgot password?
        </Link>
      </div>

      <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.99 }}>
        <Button
          type="submit"
          className="h-11 w-full rounded-lg bg-white text-sm font-semibold text-black transition hover:bg-[#dffbff]"
        >
          Sign In
        </Button>
      </motion.div>

      <div className="flex items-center gap-4 pt-4">
        <span className="h-px flex-1 bg-white/[0.08]" />
        <span className="text-[0.68rem] font-bold tracking-[0.12em] text-white/42">{AUTH_COPY.dividerLabel}</span>
        <span className="h-px flex-1 bg-white/[0.08]" />
      </div>

      <SocialLoginButton provider="google" />

      <p className="pt-3 text-center text-xs text-white/62">
        {AUTH_COPY.signupPrompt}{" "}
        <Link className="font-bold text-white transition hover:text-[#78f3ff]" href={AUTH_LINKS.signup}>
          {AUTH_COPY.signupCta}
        </Link>
      </p>
    </form>
  );
}
