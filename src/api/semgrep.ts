import generateFormData from '@/utils/generateFormData';
import { endpoint } from './endpoints';
import { tokenAxios } from '@/utils/axios';
import {
  GetDetailedReportResponse,
  GetSummaryReportResponse,
  PostFileUploadRequest,
  PostFileUploadResponse,
} from '@/types/semgrep';

export const postFileUpload = async (requestData: PostFileUploadRequest) => {
  const formData = generateFormData(requestData);

  const { data } = await tokenAxios.post<PostFileUploadResponse>(endpoint.semgrep.POST_FILE_UPLOAD, formData, {
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
  return await tokenAxios.get(endpoint.semgrep.GET_TOTAL_REPORT(scan_id));
};

interface GetSummaryReportParams {
  scan_id: string;
}

export const getSummaryReport = async ({ scan_id }: GetSummaryReportParams) => {
  const { data } = await tokenAxios.get<GetSummaryReportResponse>(endpoint.semgrep.GET_SUMMARY_REPORT(scan_id));
  return data.result;
};

interface GetDetailedReportParams {
  scan_id: string;
}

export const getDetailedReport = async ({ scan_id }: GetDetailedReportParams) => {
  const { data } = await tokenAxios.get<GetDetailedReportResponse>(endpoint.semgrep.GET_SUMMARY_REPORT(scan_id));
  return data.result;
};
