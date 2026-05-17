"use client";

import { Eye, EyeOff } from "lucide-react";

type PasswordToggleProps = {
  isVisible: boolean;
  onToggle: () => void;
};

export function PasswordToggle({ isVisible, onToggle }: PasswordToggleProps) {
  const Icon = isVisible ? EyeOff : Eye;

  return (
    <button
      type="button"
      aria-label={isVisible ? "Hide password" : "Show password"}
      className="flex h-8 w-8 items-center justify-center rounded-full text-white/50 transition hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78f3ff]/40"
      onClick={onToggle}
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}
