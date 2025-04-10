import { useNavigate } from 'react-router';
import { IoMdPerson } from 'react-icons/io';
import { FiLogOut } from 'react-icons/fi';
import { useAuthStore } from '@/stores/useAuthStore';

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
  const { logout, userInfo } = useAuthStore();

  const handleClickMyPageMenu = () => {
    if (!userInfo) return;

    navigate(`/mypage/${userInfo.email}`);
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
      handleClick: logout,
    },
  ];

  return { profileTabElements };
};

export default useProfileTabElements;
