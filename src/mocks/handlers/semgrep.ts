import { endpoint } from '@/api/endpoints';
import { http, HttpResponse } from 'msw';

const baseURL = import.meta.env.VITE_API_URL;

const postFileUpload = () =>
  http.post(`http://127.0.0.1:5000/scan`, async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return HttpResponse.json({
      status: 200,
      message: '파일이 성공적으로 분석되었습니다.',
      result: {
        scan_id: 'example_scan_id',
        uploaded_files: ['example_file_1.cpp', 'example_file_2.cpp', 'example_file_3.cpp'],
      },
    });
  });

const semgrepHandler = [postFileUpload()];

export default semgrepHandler;
