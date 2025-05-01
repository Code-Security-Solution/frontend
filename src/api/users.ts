import {
  GetUserInfoResponse,
  PostLoginRequest,
  PostLoginResponse,
  PostRegisterRequest,
  PostRegisterResponse,
} from '@/types/users';
import { publicAxios, tokenAxios } from '@/utils/axios';
import { endpoint } from './endpoints';

export const postRegister = async (requestData: PostRegisterRequest) => {
  const { data } = await publicAxios.post<PostRegisterResponse>(endpoint.users.POST_REGISTER, requestData);
  return data.result;
};

export const postLogin = async (requestData: PostLoginRequest) => {
  const { data } = await publicAxios.post<PostLoginResponse>(endpoint.users.POST_LOGIN, requestData);
  return data.result;
};

export const getUserInfo = async () => {
  const { data } = await tokenAxios.get<GetUserInfoResponse>(endpoint.users.GET_USER_INFO);
  return data.result;
};
