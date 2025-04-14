import { PostLoginRequest, PostLoginResponse, PostRegisterRequest, PostRegisterResponse } from '@/types/users';
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

const authHandler = [postRegister(), postLogin()];

export default authHandler;
