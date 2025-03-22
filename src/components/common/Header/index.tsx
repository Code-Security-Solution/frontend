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

  return (
    <S.HeaderContainer>
      <S.LogoIcon src={LogoIcon} alt="" onClick={handleClickLogoIcon} />
      <S.NavBarContainer>
        <S.MenuList>
          <S.MenuWrapper onClick={handleClickTeamInfoButton}>팀 소개</S.MenuWrapper>
        </S.MenuList>
        <S.AnalysisButton styleType="secondary" onClick={handleClickAnalysisButton}>
          코드 분석
        </S.AnalysisButton>
      </S.NavBarContainer>
    </S.HeaderContainer>
  );
};

export default Header;
