import { create } from "zustand";
export const UseAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("insta-user")) || null,
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
  setUser: (user) => set({ user }),
}));
