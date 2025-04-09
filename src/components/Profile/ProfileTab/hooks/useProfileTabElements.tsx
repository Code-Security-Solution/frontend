import { useNavigate } from 'react-router';
import { IoMdPerson } from 'react-icons/io';
import { FiLogOut } from 'react-icons/fi';

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

  const handleClickMyPageMenu = () => {
    const userEmail: string = JSON.parse(localStorage.getItem('userInfo')!).email;
    navigate(`/mypage/${userEmail}`);
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
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
