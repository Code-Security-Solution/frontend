import generateFormData from '@/utils/generateFormData';
import { endpoint } from './endpoints';
import { publicAxios } from '@/utils/axios';
import {
  GetSummaryReportResponse,
  PostFileUploadRequest,
  PostFileUploadResponse,
  SummaryReport,
} from '@/types/semgrep';

export const postFileUpload = async (requestData: PostFileUploadRequest) => {
  const formData = generateFormData(requestData);

  const { data } = await publicAxios.post<PostFileUploadResponse>(endpoint.semgrep.POST_FILE_UPLOAD, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};

interface GetTotalReportParams {
  scan_id: string;
}

export const getTotalReport = async ({ scan_id }: GetTotalReportParams) => {
  return await publicAxios.get(endpoint.semgrep.GET_TOTAL_REPORT(scan_id));
};

interface GetSummaryReportParams {
  scan_id: string;
}

export const getSummaryReport = async ({ scan_id }: GetSummaryReportParams) => {
  const { data } = await publicAxios.get<GetSummaryReportResponse>(endpoint.semgrep.GET_SUMMARY_REPORT(scan_id));
  return data.result as SummaryReport;
};
