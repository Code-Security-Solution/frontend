export const endpoint = {
  semgrep: {
    POST_FILE_UPLOAD: '/scan',
    GET_TOTAL_REPORT: (scanId: string) => `/scan-result/${scanId}`,
    GET_SUMMARY_REPORT: (scanId: string) => `/summary-report/${scanId}`,
  },
};
