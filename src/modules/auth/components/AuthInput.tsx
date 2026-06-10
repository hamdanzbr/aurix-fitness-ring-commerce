import { cn } from "@/lib/utils";
import type { AuthInputProps } from "../types/auth.types";
import { forwardRef } from "react";
import Error from "./Error";

export const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(
  ({ fieldClassName, icon, label, className, error, ...props }, ref) => {
    return (
      <label className="block">
        <span className="mb-2 block text-xs font-bold text-white">{label}</span>

        <span
          className={cn(
            "flex h-11 items-center gap-3 rounded-lg border border-white/[0.08] bg-[#1b1c21] px-3",
            fieldClassName,
          )}
        >
          <span className="text-white/48">{icon}</span>

          <input
            ref={ref}
            className={cn(
              "min-w-0 flex-1 bg-transparent text-sm font-medium text-white outline-none",
              className,
            )}
            {...props}
          />
        </span>

        {error && (
          <Error error={error} />
        )}
      </label>
    );
  },
);

AuthInput.displayName = "AuthInput";
