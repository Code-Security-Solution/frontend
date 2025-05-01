import Button from '@/components/common/Button';
import * as S from './styles';
import CautionImage from '@/assets/caution.svg';
import { useNavigate } from 'react-router-dom';

const errorMessage = `서버와의 통신이 불안정해요.
잠시 후 다시 시도해주세요.`;

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleClickGoHome = () => {
    navigate('/');
  };

  return (
    <S.Layout>
      <S.ErrorPageContainer>
        <S.ErrorTitleContainer>
          <img src={CautionImage} alt="" />
          <S.ErrorDescription>{errorMessage}</S.ErrorDescription>
        </S.ErrorTitleContainer>
        <Button styleType="secondary">
          <S.GoHomeButtonMessage onClick={handleClickGoHome}>처음으로 돌아가기</S.GoHomeButtonMessage>
        </Button>
      </S.ErrorPageContainer>
    </S.Layout>
  );
};

export default ErrorPage;
