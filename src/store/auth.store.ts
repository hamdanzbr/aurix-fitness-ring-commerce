import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { AuthResponse, User } from "@/types/auth";

type AuthState = {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  login: (auth: AuthResponse) => void;
  logout: () => void;
  setUser: (user: User | null) => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      isAuthenticated: false,
      login: ({ user, accessToken }) => {
        set({ user, accessToken, isAuthenticated: true });
      },
      logout: () => {
        set({ user: null, accessToken: null, isAuthenticated: false });
      },
      setUser: (user) => {
        set((state) => ({ user, isAuthenticated: Boolean(user && state.accessToken) }));
      },
    }),
    {
      name: "aurix-auth",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        user: state.user,
        accessToken: state.accessToken,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
);
