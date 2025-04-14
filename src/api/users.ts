import {
  GetUserProfileResponse,
  PostLoginRequest,
  PostLoginResponse,
  PostRegisterRequest,
  PostRegisterResponse,
  TokenResult,
  UserProfileResult,
} from '@/types/users';
import { publicAxios, tokenAxios } from '@/utils/axios';
import { endpoint } from './endpoints';

export const postRegister = async (requestData: PostRegisterRequest) => {
  const { data } = await publicAxios.post<PostRegisterResponse>(endpoint.users.POST_REGISTER, requestData);
  return data.result as UserProfileResult;
};

export const postLogin = async (requestData: PostLoginRequest) => {
  const { data } = await publicAxios.post<PostLoginResponse>(endpoint.users.POST_LOGIN, requestData);
  return data.result as TokenResult;
};

export const getUserProfile = async () => {
  const { data } = await tokenAxios.get<GetUserProfileResponse>(endpoint.users.GET_USER_PROFILE);
  return data.result as UserProfileResult;
};
