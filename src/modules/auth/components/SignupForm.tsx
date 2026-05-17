"use client";

import { Button } from "@/components/ui/button";
import { AtSign, LockKeyhole, Mail, User } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AUTH_COPY, AUTH_LINKS, FITNESS_GOALS } from "../constants/auth.constants";
import { usePasswordVisibility } from "../hooks/usePasswordVisibility";
import { handleAuthFormSubmit } from "../utils/auth.utils";
import { AuthInput } from "./AuthInput";
import { PasswordToggle } from "./PasswordToggle";
import { SocialLoginButton } from "./SocialLoginButton";

function SignupPasswordField({
  autoComplete,
  label,
  name,
}: {
  autoComplete: string;
  label: string;
  name: string;
}) {
  const { inputType, isPasswordVisible, togglePasswordVisibility } = usePasswordVisibility();

  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold text-white">{label}</span>
      <span className="flex h-9 items-center gap-3 rounded-lg border border-white/[0.08] bg-[#1b1c21] px-3 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition focus-within:border-[#78f3ff]/45 focus-within:bg-[#202127] focus-within:ring-3 focus-within:ring-[#78f3ff]/10">
        <LockKeyhole className="h-4 w-4 text-white/48" aria-hidden="true" />
        <input
          className="min-w-0 flex-1 bg-transparent text-sm font-medium text-white outline-none placeholder:text-white/56"
          name={name}
          type={inputType}
          placeholder="Password"
          autoComplete={autoComplete}
        />
        <PasswordToggle isVisible={isPasswordVisible} onToggle={togglePasswordVisibility} />
      </span>
    </label>
  );
}

function PasswordStrengthMeter() {
  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_auto] items-center gap-1.5">
      <span className="h-0.5 rounded-full bg-[#4aa3ff]" />
      <span className="h-0.5 rounded-full bg-[#4aa3ff]" />
      <span className="h-0.5 rounded-full bg-white/[0.12]" />
      <span className="text-[0.62rem] font-semibold text-white/55">Fair</span>
    </div>
  );
}

function FitnessGoalSelector() {
  return (
    <fieldset>
      <legend className="mb-3 text-xs font-bold text-white">Primary Fitness Goal (Optional)</legend>
      <div className="grid grid-cols-1 gap-2 min-[420px]:grid-cols-2 sm:grid-cols-3">
        {FITNESS_GOALS.map((goal, index) => (
          <label key={goal} className="min-w-0">
            <input className="peer sr-only" type="radio" name="fitnessGoal" defaultChecked={index === 0} value={goal} />
          <span className="flex h-8 items-center justify-center rounded-lg border border-white/[0.08] bg-[#1b1c21] px-2 text-center text-[0.68rem] font-semibold text-white/54 transition peer-checked:border-[#4aa3ff] peer-checked:bg-[#17304a] peer-checked:text-[#72b8ff] peer-focus-visible:ring-2 peer-focus-visible:ring-[#78f3ff]/35">
              {goal}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function SignupForm() {
  return (
    <form className="space-y-4" onSubmit={handleAuthFormSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <AuthInput
          fieldClassName="h-9"
          icon={<User className="h-4 w-4" aria-hidden="true" />}
          label="Full Name"
          name="fullName"
          type="text"
          placeholder="John Doe"
          autoComplete="name"
        />
        <AuthInput
          fieldClassName="h-9"
          icon={<AtSign className="h-4 w-4" aria-hidden="true" />}
          label="Username"
          name="username"
          type="text"
          placeholder="johndoe"
          autoComplete="username"
        />
      </div>

      <AuthInput
        fieldClassName="h-9"
        icon={<Mail className="h-4 w-4" aria-hidden="true" />}
        label="Email Address"
        name="email"
        type="email"
        placeholder="john@example.com"
        autoComplete="email"
      />

      <div className="space-y-3">
        <div className="grid gap-4 sm:grid-cols-2">
          <SignupPasswordField label="Password" name="password" autoComplete="new-password" />
          <SignupPasswordField label="Confirm Password" name="confirmPassword" autoComplete="new-password" />
        </div>
        <PasswordStrengthMeter />
      </div>

      <FitnessGoalSelector />

      <label className="flex items-start gap-3 text-xs leading-5 text-white/58">
        <input
          type="checkbox"
          name="terms"
        className="mt-0.5 h-3.5 w-3.5 rounded border-white/[0.08] bg-[#1b1c21] accent-[#78f3ff]"
        />
        <span>
          By creating an account, you agree to our{" "}
          <Link className="font-bold text-white underline decoration-white/35 underline-offset-3" href={AUTH_LINKS.terms}>
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link className="font-bold text-white underline decoration-white/35 underline-offset-3" href={AUTH_LINKS.privacy}>
            Privacy Policy
          </Link>
        </span>
      </label>

      <div className="grid gap-3 pt-1 sm:grid-cols-2">
        <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.99 }}>
          <Button
            type="submit"
            className="h-10 w-full rounded-lg bg-white text-xs font-semibold text-black transition hover:bg-[#dffbff]"
          >
            Create Account
          </Button>
        </motion.div>
        <SocialLoginButton provider="google" label="Sign up with Google" className="h-10 text-xs" />
      </div>

      <p className="pt-3 text-center text-xs text-white/62">
        {AUTH_COPY.loginPrompt}{" "}
        <Link className="font-bold text-white transition hover:text-[#78f3ff]" href={AUTH_LINKS.login}>
          {AUTH_COPY.loginCta}
        </Link>
      </p>
    </form>
  );
}
