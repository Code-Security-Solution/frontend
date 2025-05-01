import AlertModal from '@/components/common/modals/AlertModal';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';

interface RegisterSuccessModalProps {
  email: string;
}

const RegisterSuccessModal = ({ email }: RegisterSuccessModalProps) => {
  const navigate = useNavigate();

  const handleNavigateLoginPage = () => {
    navigate('/login');
  };

  return (
    <AlertModal>
      <S.ModalContainer>
        <S.Content>
          회원가입이 완료되었어요. <br />
          로그인 페이지로 이동할게요.
        </S.Content>
        <S.Content>
          가입한 이메일: <strong>{email}</strong>
        </S.Content>
        <S.ConfirmButton styleType="primary" onClick={handleNavigateLoginPage}>
          확인
        </S.ConfirmButton>
      </S.ModalContainer>
    </AlertModal>
  );
};

export default RegisterSuccessModal;
