import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { User, UserRole } from '../types';

interface UserState {
    user: User | null;
    setUser: (user: User | undefined) => void;
    clearUser: () => void;
    isAuthenticated: () => boolean;
    hasRole: (role: UserRole) => boolean;
}

export const useUserStore = create<UserState>()(
    persist(
        (set, get) => ({
            user: null,
            setUser: (user) => set({ user }),
            clearUser: () => set({ user: null }),
            isAuthenticated: () => !!get().user,
            hasRole: (role) => get().user?.role === role || false,
        }),
        {
            name: 'user-storage',
            storage: createJSONStorage(() => sessionStorage),
            // migrate: (persistedState, version) => { ... }
        }
    )
);