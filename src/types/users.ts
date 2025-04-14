export interface PostRegisterRequest {
  email: string;
  password: string;
  username: string;
}

export interface UserProfileResult {
  email: string;
  username: string;
}

export interface PostRegisterResponse {
  status: number;
  message: string;
  result: UserProfileResult | {};
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

export interface GetUserProfileResponse {
  status: number;
  message: string;
  result: UserProfileResult | {};
}
