import { create } from "zustand";
import { CameraId } from "@/entities/cameras/types";

type EditModalState = {
  isOpen: boolean;
  cameraId: CameraId | null;
  onOpen: () => void;
  onClose: () => void;
  setCameraId: (cameraId: CameraId | null) => void;
};

export const useEditModalStore = create<EditModalState>((set) => ({
  isOpen: false,
  cameraId: null,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false, cameraId: null }),
  setCameraId: (cameraId) => set({ cameraId }),
}));
