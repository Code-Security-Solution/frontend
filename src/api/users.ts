import {
  PostLoginRequest,
  PostLoginResponse,
  PostRegisterRequest,
  PostRegisterResponse,
  TokenResult,
  UserInfoResult,
} from '@/types/users';
import { publicAxios } from '@/utils/axios';
import { endpoint } from './endpoints';

export const postRegister = async (requestData: PostRegisterRequest) => {
  const { data } = await publicAxios.post<PostRegisterResponse>(endpoint.users.POST_REGISTER, requestData);
  return data.result as UserInfoResult;
};

export const postLogin = async (requestData: PostLoginRequest) => {
  const { data } = await publicAxios.post<PostLoginResponse>(endpoint.users.POST_LOGIN, requestData);
  return data.result as TokenResult;
};
