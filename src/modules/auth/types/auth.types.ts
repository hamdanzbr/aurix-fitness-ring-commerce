import type { InputHTMLAttributes, ReactNode } from "react";

export type AuthInputProps = InputHTMLAttributes<HTMLInputElement> & {
  fieldClassName?: string;
  icon: ReactNode;
  label: string;
};

export type SocialProvider = "google";
