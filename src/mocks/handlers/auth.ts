import { endpoint } from '@/api/endpoints';
import {
  GetUserInfoResponse,
  PostLoginRequest,
  PostLoginResponse,
  PostRegisterRequest,
  PostRegisterResponse,
} from '@/types/users';
import { http, HttpResponse } from 'msw';

const baseURL = import.meta.env.VITE_API_URL;

const postRegister = () =>
  http.post(`${baseURL}${endpoint.users.POST_REGISTER}`, async ({ request }) => {
    const requestBody = (await request.json()) as PostRegisterRequest;

    const { email, password, username } = requestBody;

    const adminData: PostRegisterRequest = {
      email: 'admin@email.com',
      password: '1234',
      username: 'admin',
    };

    if (email === adminData.email && password === adminData.password && username === adminData.username) {
      const response: PostRegisterResponse = {
        status: 200,
        message: '회원가입 성공',
        result: {
          email: 'admin@email.com',
          username: 'admin',
        },
      };

      return HttpResponse.json(response, { status: 200 });
    }

    return HttpResponse.json({ error: '회원가입 실패(이미 존재하는 이메일)' }, { status: 400 });
  });

const postLogin = () =>
  http.post(`${baseURL}${endpoint.users.POST_LOGIN}`, async ({ request }) => {
    const requestBody = (await request.json()) as PostLoginRequest;

    const { email, password } = requestBody;

    const adminData: PostLoginRequest = {
      email: 'admin@email.com',
      password: '1234',
    };

    if (email === adminData.email && password === adminData.password) {
      const response: PostLoginResponse = {
        status: 200,
        message: '로그인 성공',
        result: {
          token: 'admin_token',
        },
      };

      return HttpResponse.json(response, { status: 200 });
    }

    return HttpResponse.json({ error: '로그인 실패' }, { status: 401 });
  });

const getUserProfile = () =>
  http.get(`${baseURL}${endpoint.users.GET_USER_INFO}`, async () => {
    const token = localStorage.getItem('accessToken');

    if (!token) {
      return HttpResponse.json({ error: '토큰 에러' }, { status: 401 });
    }

    const response: GetUserInfoResponse = {
      status: 200,
      message: '사용자 정보 조회 성공',
      result: {
        email: 'admin@email.com',
        username: 'admin',
      },
    };

    return HttpResponse.json(response, { status: 200 });
  });

const authHandler = [postRegister(), postLogin(), getUserProfile()];

export default authHandler;
