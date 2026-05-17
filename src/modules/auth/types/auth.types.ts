import type { InputHTMLAttributes, ReactNode } from "react";

export type AuthInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  label: string;
};

export type SocialProvider = "google";
