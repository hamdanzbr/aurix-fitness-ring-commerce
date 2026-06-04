import type { InputHTMLAttributes, ReactNode } from "react";

export type AuthInputProps = InputHTMLAttributes<HTMLInputElement> & {
  fieldClassName?: string;
  icon: ReactNode;
  label: string;
  error?: string;
};

export type SocialProvider = "google";

export type LoginFormValues = {
  email: string;
  password: string;
};