import { endpoint } from '@/api/endpoints';
import { http, HttpResponse } from 'msw';
import { MOCK_SUMMARY_REPORT } from '../mockData/summaryReport';
import { MOCK_SCAN_ID } from '../mockData/fileUpload';

const baseURL = import.meta.env.VITE_API_URL;

const postFileUpload = () =>
  http.post(`${baseURL}${endpoint.semgrep.POST_FILE_UPLOAD}`, async () => {
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

const getSummaryReport = () =>
  http.get(`${baseURL}${endpoint.semgrep.GET_SUMMARY_REPORT(MOCK_SCAN_ID)}`, async () => {
    return HttpResponse.json({
      status: 200,
      message: '성공',
      result: MOCK_SUMMARY_REPORT,
    });
  });

const semgrepHandler = [postFileUpload(), getSummaryReport()];

export default semgrepHandler;
