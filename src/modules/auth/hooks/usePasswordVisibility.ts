"use client";

import { useCallback, useState } from "react";

export function usePasswordVisibility() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = useCallback(() => {
    setIsPasswordVisible((current) => !current);
  }, []);

  return {
    inputType: isPasswordVisible ? "text" : "password",
    isPasswordVisible,
    togglePasswordVisibility,
  };
}
