import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthTokenState {
  accessToken: string | null;
  setAccessToken: (token: string) => void;
  clearAccessToken: () => void;
}

export const useAuthTokenStore = create<AuthTokenState>()(
  persist(
    (set) => ({
      accessToken: null,
      setAccessToken: (token: string) => set({ accessToken: token }),
      clearAccessToken: () => set({ accessToken: null }),
    }),
    {
      name: 'accessToken',
    },
  ),
);
