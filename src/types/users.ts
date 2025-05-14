import { ApiResponse } from './common';

export interface PostRegisterRequest {
  email: string;
  password: string;
  username: string;
}

export interface UserInfoResult {
  email: string;
  username: string;
}

export type PostRegisterResponse = ApiResponse<UserInfoResult>;

export interface PostLoginRequest {
  email: string;
  password: string;
}

export interface TokenResult {
  token: string;
}

export type PostLoginResponse = ApiResponse<TokenResult>;

export type GetUserInfoResponse = ApiResponse<UserInfoResult>;

export interface ScanInfo {
  email: string;
  file_id: string;
  file_paths: string[];
  result_file: string;
  translated_result_file: string;
  uploaded_file_id: string;
  created_at: Date;
  download_links: {
    result: string;
    source_all: string;
    source_single: string;
    translated_result: string;
    view_detail: string; // TODO: 수정 예정
    view_result: string;
    view_summary: string;
  };
}
export interface MyFilesResult {
  user_email: string;
  files_count: number;
  files: ScanInfo[];
  files_list: string[];
}

export type GetMyFilesResponse = ApiResponse<MyFilesResult>;
