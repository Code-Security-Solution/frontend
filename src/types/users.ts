export interface PostRegisterRequest {
  email: string;
  password: string;
  username: string;
}

export interface UserInfoResult {
  email: string;
  username: string;
}

export interface PostRegisterResponse {
  status: number;
  message: string;
  result: UserInfoResult | {};
}

export interface PostLoginRequest {
  email: string;
  password: string;
}

export interface TokenResult {
  token: string;
}

export interface PostLoginResponse {
  status: number;
  message: string;
  result: TokenResult | {};
}

export interface GetUserInfoResponse {
  status: number;
  message: string;
  result: UserInfoResult | {};
}
