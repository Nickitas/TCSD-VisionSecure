import { create } from 'zustand';
import { DeleteUserParams } from '@/entities/user/types';

type UserId = DeleteUserParams['id'];

type DelateModalState = {
    isOpen: boolean;
    userId: UserId | null;
    onOpen: () => void;
    onClose: () => void;
    setUserId: (userId: UserId | null) => void;
};

export const useDelateModalStore = create<DelateModalState>((set) => ({
    isOpen: false,
    userId: null,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false, userId: null }),
    setUserId: (userId) => set({ userId }),
}));