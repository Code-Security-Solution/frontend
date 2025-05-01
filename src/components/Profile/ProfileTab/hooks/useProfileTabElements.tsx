import { useNavigate } from 'react-router';
import { IoMdPerson } from 'react-icons/io';
import { FiLogOut } from 'react-icons/fi';
import { useUserInfoStore } from '@/stores/useUserInfoStore';
import { useAuthTokenStore } from '@/stores/useAuthTokenStore';

export interface ProfileTabElementContent {
  icon: React.ReactNode;
  text: string;
}

export interface ProfileTabElement {
  elementId: string;
  content: ProfileTabElementContent;
  handleClick?: () => void;
}

const useProfileTabElements = () => {
  const navigate = useNavigate();
  const { clearAccessToken } = useAuthTokenStore();
  const { userInfo, clearUserInfo } = useUserInfoStore();

  const handleClickMyPageMenu = () => {
    if (!userInfo) return;

    navigate(`/mypage/${userInfo.email}`);
  };

  const handleLogout = () => {
    clearAccessToken();
    clearUserInfo();
    navigate('/');
  };

  const profileTabElements: ProfileTabElement[] = [
    {
      elementId: 'reviewLinkControlButton',
      content: { icon: <IoMdPerson size={20} />, text: '마이 페이지' },
      handleClick: handleClickMyPageMenu,
    },
    {
      elementId: 'logoutButton',
      content: { icon: <FiLogOut size={20} />, text: '로그아웃' },
      handleClick: handleLogout,
    },
  ];

  return { profileTabElements };
};

export default useProfileTabElements;
