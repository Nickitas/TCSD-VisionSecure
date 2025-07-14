import { create } from "zustand";
import { Camera, CameraId } from "@/entities/cameras/types";

type DelateModalState = {
  isOpen: boolean;
  cameraId: CameraId | null;
  onOpen: () => void;
  onClose: () => void;
  setCameraId: (cameraId: CameraId | null) => void;
};

export const useDelateModalStore = create<DelateModalState>((set) => ({
  isOpen: false,
  cameraId: null,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false, cameraId: null }),
  setCameraId: (cameraId) => set({ cameraId }),
}));
