import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import LogoIcon from '@/assets/Logo.svg';
import ProfileInfo from '@/components/Profile/ProfileInfo';
import UndraggableWrapper from '../UndraggableWrapper';
import { useUserInfoStore } from '@/stores/useUserInfoStore';
import { useAuthTokenStore } from '@/stores/useAuthTokenStore';
import { useEffect } from 'react';
import useModalStore from '@/stores/useModalStore';
import LogoutModal from './components/LogoutModal';
import useGetUserInfo from '@/hooks/useGetUserInfo';

const Header = () => {
  const navigate = useNavigate();
  const { accessToken } = useAuthTokenStore();
  const { isAuthenticated, userInfo, setUserInfo, clearUserInfo } = useUserInfoStore();
  const { openModal } = useModalStore();

  const { data, isError } = useGetUserInfo();

  useEffect(() => {
    if (data) {
      setUserInfo({
        email: data.email,
        username: data.username,
      });
    }
  }, [data]);

  useEffect(() => {
    if (accessToken && isError) {
      clearUserInfo();
      openModal('alert', <LogoutModal />);
    }
  }, [accessToken, isError]);

  const handleClickLogoIcon = () => {
    navigate('/');
  };

  const handleClickTeamInfoButton = () => {
    navigate('/introduction');
  };

  const handleClickAnalysisButton = () => {
    navigate('/');
  };

  const handleClickLoginButton = () => {
    navigate('/login');
  };

  return (
    <UndraggableWrapper>
      <S.HeaderContainer>
        <S.LogoIcon src={LogoIcon} alt="" onClick={handleClickLogoIcon} />
        <S.NavBarContainer>
          <S.MenuList>
            <S.MenuWrapper onClick={handleClickAnalysisButton}>코드 분석</S.MenuWrapper>
            <S.MenuWrapper onClick={handleClickTeamInfoButton}>서비스 소개</S.MenuWrapper>
            {isAuthenticated && (
              <>
                <S.MenuDivider />
                <ProfileInfo email={userInfo!.email} />
              </>
            )}
          </S.MenuList>
          {!isAuthenticated && (
            <S.LoginButton styleType="secondary" onClick={handleClickLoginButton}>
              로그인
            </S.LoginButton>
          )}
        </S.NavBarContainer>
      </S.HeaderContainer>
    </UndraggableWrapper>
  );
};

export default Header;
