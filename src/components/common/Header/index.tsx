import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import LogoIcon from '@/assets/Logo.svg';

const Header = () => {
  const navigate = useNavigate();

  const handleClickLogoIcon = () => {
    navigate('/');
  };

  const handleClickTeamInfoButton = () => {
    navigate('/team');
  };

  const handleClickAnalysisButton = () => {
    navigate('/');
  };

  const handleClickLoginButton = () => {
    navigate('/login');
  };

  return (
    <S.HeaderContainer>
      <S.LogoIcon src={LogoIcon} alt="" onClick={handleClickLogoIcon} />
      <S.NavBarContainer>
        <S.MenuList>
          <S.MenuWrapper onClick={handleClickTeamInfoButton}>팀 소개</S.MenuWrapper>
        </S.MenuList>
        <S.MenuList>
          <S.MenuWrapper onClick={handleClickAnalysisButton}>코드 분석</S.MenuWrapper>
        </S.MenuList>
        <S.LoginButton styleType="secondary" onClick={handleClickLoginButton}>
          로그인
        </S.LoginButton>
      </S.NavBarContainer>
    </S.HeaderContainer>
  );
};

export default Header;
