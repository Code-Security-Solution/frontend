import axios from 'axios';

// TODO: tokenAxios는 로그인 도입 이후 추가 예정

// export const tokenAxios = axios.create({
//   baseURL: import.meta.env.VITE_API_URL,
//   timeout: 15000,
//   withCredentials: true,
//   headers: {
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Credentials': 'true',
//   },
// });

// tokenAxios.interceptors.request.use((config) => {
//   const token = localStorage.getItem('access_token');

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

export const publicAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});
