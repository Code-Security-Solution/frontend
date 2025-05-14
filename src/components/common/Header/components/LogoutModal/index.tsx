import AlertModal from '@/components/common/modals/AlertModal';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import { useAuthTokenStore } from '@/stores/useAuthTokenStore';

const LogoutModal = () => {
  const navigate = useNavigate();
  const { clearAccessToken } = useAuthTokenStore();

  const handleNavigateLoginPage = () => {
    clearAccessToken();
    navigate('/login');
  };

  return (
    <AlertModal handleClose={handleNavigateLoginPage}>
      <S.ModalContainer>
        <S.Content>
          토큰이 만료되었거나 서버에 문제가 생겼어요. <br />
          다시 로그인 해주세요.
        </S.Content>
        <S.ConfirmButton styleType="primary" onClick={handleNavigateLoginPage}>
          확인
        </S.ConfirmButton>
      </S.ModalContainer>
    </AlertModal>
  );
};

export default LogoutModal;
