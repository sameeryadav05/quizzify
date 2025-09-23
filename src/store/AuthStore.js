import { create } from 'zustand';

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  accessToken: null,
  setAuth: ({ user, accessToken }) =>
    set({ isAuthenticated: true, user, accessToken }),
  logout: () =>
    set({ isAuthenticated: false, user: null, accessToken: null }),
  setUser: (user) => set((state) => ({ ...state, user })),
  setAccessToken: (token) => set((state) => ({ ...state, accessToken: token })),
}));
export default useAuthStore;
