import Input from '@/components/common/Input';
import * as S from './styles';
import Button from '@/components/common/Button';
import { formDropVarients } from '@/styles/motion';
import useRegister from './hooks/useRegister';
import { useState } from 'react';
import { ErrorResponse } from 'react-router-dom';
import { postRegister } from '@/api/users';
import RegisterSuccessModal from './components/RegisterSuccessModal';
import useModalStore from '@/stores/useModalStore';

const RegisterPage = () => {
  const {
    email,
    password,
    name,
    emailError,
    passwordError,
    nameError,
    isFormValid,
    handleChangeEmail,
    handleChangePassword,
    handleChangeName,
    handleClickToggleLogin,
    validateForm,
  } = useRegister();

  const [formErrorMessage, setFormErrorMessage] = useState('');
  const { openModal } = useModalStore();

  const handleClickRegister = async () => {
    if (!isFormValid) return validateForm();

    try {
      await postRegister({ email, password, username: name });
      setFormErrorMessage('');
      openModal('alert', <RegisterSuccessModal email={email} />);
    } catch (error) {
      const status = (error as ErrorResponse).status;
      if (status === 400) setFormErrorMessage('중복된 이메일이에요. 다시 확인해 주세요.');
      else setFormErrorMessage('회원가입 중 문제가 발생했어요. 잠시 후 다시 시도해 주세요.');
    }
  };

  return (
    <S.RegisterPageContainer>
      <S.RegisterForm variants={formDropVarients} initial="hidden" animate="visible">
        <S.RegisterFormTitle>회원가입</S.RegisterFormTitle>
        <Input
          id="email"
          type="email"
          label="이메일"
          value={email}
          errorMessage={emailError}
          handleChange={handleChangeEmail}
        />
        <Input
          id="password"
          type="password"
          label="비밀번호"
          value={password}
          errorMessage={passwordError}
          handleChange={handleChangePassword}
        />
        <Input
          id="name"
          type="text"
          label="이름"
          value={name}
          errorMessage={nameError}
          handleChange={handleChangeName}
        />
        {formErrorMessage && <S.RegisterFormErrorMessage>{formErrorMessage}</S.RegisterFormErrorMessage>}
        <Button styleType="secondary" onClick={handleClickRegister}>
          회원가입
        </Button>
        <S.ToggleLoginButton onClick={handleClickToggleLogin}>로그인하기</S.ToggleLoginButton>
      </S.RegisterForm>
    </S.RegisterPageContainer>
  );
};

export default RegisterPage;
