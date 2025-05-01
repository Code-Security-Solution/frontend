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
