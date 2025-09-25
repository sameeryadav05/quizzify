import { create } from 'zustand';
const useAuthStore = create((set) => ({
  isAuthenticated: Boolean(localStorage.getItem('token')),
  SetisAuthenticated: () => {
    localStorage.setItem('token', 'your_token_here');
    set({ isAuthenticated: true });
  },
  logout: () => {
    localStorage.removeItem('token');
    set({ isAuthenticated: false });
  }
}));

export default useAuthStore;
