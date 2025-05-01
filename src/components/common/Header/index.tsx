import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import LogoIcon from '@/assets/Logo.svg';
import ProfileInfo from '@/components/Profile/ProfileInfo';
import UndraggableWrapper from '../UndraggableWrapper';
import { useUserInfoStore } from '@/stores/useUserInfoStore';
import { useAuthTokenStore } from '@/stores/useAuthTokenStore';
import { getUserInfo } from '@/api/users';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const { accessToken } = useAuthTokenStore();
  const { isAuthenticated, userInfo, setUserInfo } = useUserInfoStore();

  const { data } = useQuery({
    queryKey: ['userProfile', accessToken],
    queryFn: getUserInfo,
    enabled: !!accessToken,
    staleTime: 60 * 60 * 1000,
  });

  useEffect(() => {
    if (data) {
      setUserInfo({
        email: data.email,
        username: data.username,
      });
    }
  }, [data]);

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
