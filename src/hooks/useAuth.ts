const useAuth = () => {
  // 로그인 상태 관리 훅
  // localStorage에 access_token이 있는지 확인하여 로그인 상태를 판단 (임시)
  return {
    isLoggedIn: !!localStorage.getItem('access_token'),
  };
};

export default useAuth;
