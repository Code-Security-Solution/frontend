import { getUserInfo } from '@/api/users';
import { useAuthTokenStore } from '@/stores/useAuthTokenStore';
import { useQuery } from '@tanstack/react-query';

const useGetUserInfo = () => {
  const { accessToken } = useAuthTokenStore();

  const result = useQuery({
    queryKey: ['userProfile', accessToken],
    queryFn: getUserInfo,
    enabled: !!accessToken,
    staleTime: 60 * 60 * 1000,
    retry: (count, err: any) => {
      if (err?.response?.status === 401) return false;
      return count < 3;
    },
    throwOnError: false,
  });

  return {
    data: result.data,
    isError: result.isError,
  };
};

export default useGetUserInfo;
