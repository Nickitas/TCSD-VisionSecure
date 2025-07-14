import { create } from "zustand";

type AddModalState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useAddModalStore = create<AddModalState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
