import { useAuthTokenStore } from '@/stores/useAuthTokenStore';
import axios from 'axios';

export const tokenAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 15000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': 'true',
  },
});

tokenAxios.interceptors.request.use((config) => {
  const { accessToken } = useAuthTokenStore();

  if (accessToken) {
    config.headers['x-access-token'] = accessToken;
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
