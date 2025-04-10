import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface UserInfo {
  email: string;
}

interface SetAuthStateProps {
  token: string;
  userInfo: UserInfo;
}

interface AuthState {
  accessToken: string | null;
  userInfo: UserInfo | null;
  isAuthenticated: boolean;
  setAuthState: (state: SetAuthStateProps) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      userInfo: null,
      isAuthenticated: false,
      setAuthState: ({ token, userInfo }: SetAuthStateProps) =>
        set({ accessToken: token, userInfo, isAuthenticated: Boolean(token && userInfo) }),
      logout: () => set({ accessToken: null, userInfo: null, isAuthenticated: false }),
    }),
    {
      name: 'auth',
    },
  ),
);
