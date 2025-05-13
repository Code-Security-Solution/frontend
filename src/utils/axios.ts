import { useAuthTokenStore } from '@/stores/useAuthTokenStore';
import axios from 'axios';

export const tokenAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 60 * 60 * 1000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

tokenAxios.interceptors.request.use((config) => {
  const token = useAuthTokenStore.getState().accessToken;

  if (token) {
    config.headers['x-access-token'] = token;
  }

  return config;
});

export const publicAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});
