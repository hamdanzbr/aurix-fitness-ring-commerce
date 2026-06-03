"use client";

import type { ReactNode } from "react";
import { Toaster } from "sonner";
import { ReactQueryProvider } from "@/lib/react-query/provider";

type AppProvidersProps = {
  children: ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ReactQueryProvider>
      {children}
      <Toaster richColors position="top-right" />
    </ReactQueryProvider>
  );
}
