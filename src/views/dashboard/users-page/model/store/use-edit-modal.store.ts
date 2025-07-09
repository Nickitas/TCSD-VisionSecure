import { create } from 'zustand';
import { EditUserParams, } from '@/entities/user/types';

type UserId = EditUserParams['id'];

type EditModalState = {
    isOpen: boolean;
    userId: UserId | null;
    onOpen: () => void;
    onClose: () => void;
    setUserId: (userId: UserId | null) => void;
};

export const useEditModalStore = create<EditModalState>((set) => ({
    isOpen: false,
    userId: null,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false, userId: null }),
    setUserId: (userId) => set({ userId }),
}));