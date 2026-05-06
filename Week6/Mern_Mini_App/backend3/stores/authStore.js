import { create } from "zustand";
import axios from "axios";
const API = import.meta.env.VITE_API_URL;

export const useAuthStore = create((set) => ({
  user: null,
  token: localStorage.getItem("token") || null,
  isLoading: false,
  error: null,
  login: async (email, password) => {
    try {
      set({ isLoading: true, error: null });

      const res = await axios.post(`${API}/login`, {
        email,
        password
      });
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      set({
        user,
        token,
        isLoading: false
      });
    } catch (err) {
      set({
        error: err.response?.data?.message || "Login failed",
        isLoading: false
      });
    }
  },
  logout: () => {
    localStorage.removeItem("token");
    set({
      user: null,
      token: null
    });
  }
}));
