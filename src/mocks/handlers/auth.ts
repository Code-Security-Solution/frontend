import {
  GetUserProfileResponse,
  PostLoginRequest,
  PostLoginResponse,
  PostRegisterRequest,
  PostRegisterResponse,
} from '@/types/users';
import { http, HttpResponse } from 'msw';

const postRegister = () =>
  http.post('/register', async ({ request }) => {
    const requestBody = (await request.json()) as PostRegisterRequest;

    const adminData: PostRegisterRequest = {
      email: 'admin@email.com',
      password: '1234',
      username: 'admin',
    };

    if (requestBody === adminData) {
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

    const errorResponse: PostLoginResponse = {
      status: 400,
      message: '회원가입 실패',
      result: {},
    };

    return HttpResponse.json(errorResponse, { status: 400 });
  });

const postLogin = () =>
  http.post('/login', async ({ request }) => {
    const requestBody = (await request.json()) as PostLoginRequest;

    const adminData: PostLoginRequest = {
      email: 'admin@email.com',
      password: '1234',
    };

    if (requestBody === adminData) {
      const response: PostLoginResponse = {
        status: 200,
        message: '로그인 성공',
        result: {
          token: 'admin_token',
        },
      };

      return HttpResponse.json(response, { status: 200 });
    }

    const errorResponse: PostLoginResponse = {
      status: 401,
      message: '로그인 실패',
      result: {},
    };

    return HttpResponse.json(errorResponse, { status: 401 });
  });

const getUserProfile = () =>
  http.get('/user/me', async () => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      const errorResponse: GetUserProfileResponse = {
        status: 401,
        message: '유효하지 않은 토큰입니다.',
        result: {},
      };

      return HttpResponse.json(errorResponse, { status: 401 });
    }

    const response: GetUserProfileResponse = {
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
