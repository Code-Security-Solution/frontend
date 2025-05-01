import Input from '@/components/common/Input';
import * as S from './styles';
import { KeyboardEvent, useState } from 'react';
import Button from '@/components/common/Button';
import { formDropVarients } from '@/styles/motion';
import useLogin from './hooks/useLogin';
import { useAuthTokenStore } from '@/stores/useAuthTokenStore';
import { postLogin } from '@/api/users';
import { ErrorResponse, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const {
    email,
    password,
    emailError,
    passwordError,
    isFormValid,
    handleChangeEmail,
    handleChangePassword,
    handleClickToggleRegister,
    validateForm,
  } = useLogin();

  const navigate = useNavigate();
  const [formErrorMessage, setFormErrorMessage] = useState('');
  const { setAccessToken } = useAuthTokenStore();

  const handleClickLogin = async () => {
    if (!isFormValid) return validateForm();

    try {
      const loginResult = await postLogin({ email, password });
      if (loginResult?.token) {
        setAccessToken(loginResult.token);
        navigate('/');
      }
    } catch (error) {
      const status = (error as ErrorResponse).status;
      if (status === 401) setFormErrorMessage('아이디 또는 비밀번호를 확인해주세요.');
      else setFormErrorMessage('로그인 중 문제가 발생했어요. 잠시 후 다시 시도해 주세요.');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') handleClickLogin();
  };

  return (
    <S.LoginPageContainer>
      <S.LoginForm onKeyDown={handleKeyDown} variants={formDropVarients} initial="hidden" animate="visible">
        <S.LoginFormHeader>
          <S.LoginFormTitle>로그인</S.LoginFormTitle>
          <S.LoginFormDescription>로그인 하면 이전에 분석한 기록을 볼 수 있어요.</S.LoginFormDescription>
        </S.LoginFormHeader>
        <Input
          id="email"
          type="email"
          label="이메일"
          value={email}
          errorMessage={emailError}
          handleChange={handleChangeEmail}
          autoFocus
        />
        <Input
          id="password"
          type="password"
          label="비밀번호"
          value={password}
          errorMessage={passwordError}
          handleChange={handleChangePassword}
        />
        {formErrorMessage && <S.LoginFormErrorMessage>{formErrorMessage}</S.LoginFormErrorMessage>}
        <Button styleType="secondary" onClick={handleClickLogin}>
          로그인
        </Button>
        <S.ToggleRegisterButton onClick={handleClickToggleRegister}>회원가입하기</S.ToggleRegisterButton>
      </S.LoginForm>
    </S.LoginPageContainer>
  );
};

export default LoginPage;
