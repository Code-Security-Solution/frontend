import { http, HttpResponse } from 'msw';

// 수정 예정
const postLogin = () =>
  http.post('/login', async () => {
    return HttpResponse.json({
      status: 200,
      body: {
        message: 'Login successful',
      },
    });
  });

const authHandler = [postLogin()];

export default authHandler;
