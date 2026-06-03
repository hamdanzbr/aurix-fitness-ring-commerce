import { create } from "zustand";

type UiState = {
  isGlobalLoading: boolean;
  isMobileMenuOpen: boolean;
  activeModal: string | null;
  setGlobalLoading: (isGlobalLoading: boolean) => void;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  toggleMobileMenu: () => void;
  setActiveModal: (activeModal: string | null) => void;
};

export const useUiStore = create<UiState>((set) => ({
  isGlobalLoading: false,
  isMobileMenuOpen: false,
  activeModal: null,
  setGlobalLoading: (isGlobalLoading) => set({ isGlobalLoading }),
  openMobileMenu: () => set({ isMobileMenuOpen: true }),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  setActiveModal: (activeModal) => set({ activeModal }),
}));
