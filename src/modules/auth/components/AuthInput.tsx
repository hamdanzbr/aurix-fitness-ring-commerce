import { cn } from "@/lib/utils";
import type { AuthInputProps } from "../types/auth.types";

export function AuthInput({ fieldClassName, icon, label, className, ...props }: AuthInputProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold text-white">{label}</span>
      <span
        className={cn(
          "flex h-11 items-center gap-3 rounded-lg border border-white/[0.08] bg-[#1b1c21] px-3 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition focus-within:border-[#78f3ff]/45 focus-within:bg-[#202127] focus-within:ring-3 focus-within:ring-[#78f3ff]/10",
          fieldClassName,
        )}
      >
        <span className="text-white/48">{icon}</span>
        <input
          className={cn(
            "min-w-0 flex-1 bg-transparent text-sm font-medium text-white outline-none placeholder:text-white/56",
            className,
          )}
          {...props}
        />
      </span>
    </label>
  );
}
