import generateFormData from '@/utils/generateFormData';
import { endpoint } from './endpoints';
import { publicAxios } from '@/utils/axios';
import { PostFileUploadRequest, PostFileUploadResponse } from '@/types/semgrep';

export const postFileUpload = async (data: PostFileUploadRequest) => {
  const formData = generateFormData(data);

  return await publicAxios.post<PostFileUploadResponse>(endpoint.semgrep.POST_FILE_UPLOAD, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

interface GetTotalReportParams {
  file_id: string;
}

export const getTotalReport = async ({ file_id }: GetTotalReportParams) => {
  return await publicAxios.get(endpoint.semgrep.GET_TOTAL_REPORT(file_id));
};

interface GetSummaryReportParams {
  file_id: string;
}

export const getSummaryReport = async ({ file_id }: GetSummaryReportParams) => {
  return await publicAxios.get(endpoint.semgrep.GET_SUMMARY_REPORT(file_id));
};
