export const endpoint = {
  semgrep: {
    POST_FILE_UPLOAD: '/scan',
    GET_TOTAL_REPORT: (scanId: string) => `/scan-result/${scanId}`,
    GET_SUMMARY_REPORT: (scanId: string) => `/summary-report/${scanId}`,
    GET_DOWNLOAD_SCAN_RESULT: (scanId: string) => `/download-result/${scanId}`,
    GET_DOWNLOAD_SOURCE_CODE: (scanId: string) => `/download-source/${scanId}`,
    GET_DOWNLOAD_ALL_SOURCE_CODE: (scanId: string) => `/download-all-sources/${scanId}`,
    GET_DOWNLOAD_TRANSLATED_SCAN_RESULT: (scanId: string) => `/download-translated-result/${scanId}`,
  },
  user: {
    POST_REGISTER: '/register',
    POST_LOGIN: '/login',
    GET_USER_PROFILE: '/user/me',
    GET_USER_SCAN_HISTORY: '/my-files',
  },
};
