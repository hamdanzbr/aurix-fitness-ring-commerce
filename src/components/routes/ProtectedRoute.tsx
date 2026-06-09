"use client";

import { useAuthStore } from "@/store/auth.store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isHydrated, setIsHydrated] = useState(false);
  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );
  const router = useRouter();

  // Wait for Zustand to hydrate from localStorage
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    // Only check authentication after hydration
    if (isHydrated && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated, router, isHydrated]);

  // Don't render anything until hydration is complete
  if (!isHydrated) {
    return null; // or a loading spinner
  }

  return isAuthenticated ? <>{children}</> : null;
}