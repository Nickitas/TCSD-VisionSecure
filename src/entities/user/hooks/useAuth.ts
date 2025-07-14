import { useUserStore } from "../store";

export function useAuth() {
  return useUserStore((state) => ({
    user: state.user,
    isAuthenticated: state.isAuthenticated(),
    hasRole: state.hasRole,
  }));
}
