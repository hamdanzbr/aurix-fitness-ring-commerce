"use client";

import { useAuthStore } from "@/store/auth.store";
import { useRouter } from "next/navigation";
import { useEffect, useSyncExternalStore } from "react";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const isHydrated = useSyncExternalStore(
    (callback) => useAuthStore.persist.onFinishHydration(callback),
    () => useAuthStore.persist.hasHydrated(),
    () => false,
  );
  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );
  const router = useRouter();

  useEffect(() => {
    if (isHydrated && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated, router, isHydrated]);

  if (!isHydrated) {
    return null;
  }

  return isAuthenticated ? <>{children}</> : null;
}
