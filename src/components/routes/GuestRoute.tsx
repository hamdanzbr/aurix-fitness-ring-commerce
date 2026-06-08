"use client";

import { useAuthStore } from "@/store/auth.store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function GuestRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );

  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/");
    }
  }, [isAuthenticated, router]);

  return <>{children}</>;
}