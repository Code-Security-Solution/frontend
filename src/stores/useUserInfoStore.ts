import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useAuthTokenStore } from './useAuthTokenStore';

export interface UserInfo {
  email: string;
  username: string;
}

interface UserInfoState {
  userInfo: UserInfo | null;
  isAuthenticated: boolean;
  setUserInfo: (userInfo: UserInfo) => void;
  clearUserInfo: () => void;
}

export const useUserInfoStore = create<UserInfoState>()(
  persist(
    (set) => ({
      userInfo: null,
      isAuthenticated: false,
      setUserInfo: (userInfo: UserInfo) => {
        const token = useAuthTokenStore.getState().accessToken;
        set({ userInfo, isAuthenticated: Boolean(token && userInfo) });
      },
      clearUserInfo: () => set({ userInfo: null, isAuthenticated: false }),
    }),
    {
      name: 'userInfo',
    },
  ),
);
