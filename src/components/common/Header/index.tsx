import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import LogoIcon from '@/assets/Logo.svg';
import useAuth from '@/hooks/useAuth';
import ProfileInfo from '@/components/Profile/ProfileInfo';
import UndraggableWrapper from '../UndraggableWrapper';

const Header = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

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
            {isLoggedIn && (
              <>
                <S.MenuDivider />
                <ProfileInfo email="example@email.com" />
              </>
            )}
          </S.MenuList>
          {!isLoggedIn && (
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
