import Input from '@/components/common/Input';
import * as S from './styles';
import { KeyboardEvent } from 'react';
import Button from '@/components/common/Button';
import { formDropVarients } from '@/styles/motion';
import useLogin from './hooks/useLogin';

const LoginPage = () => {
  const {
    email,
    password,
    emailError,
    passwordError,
    handleChangeEmail,
    handleChangePassword,
    handleClickLogin,
    handleClickToggleRegister,
  } = useLogin();

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
        <Button styleType="secondary" onClick={handleClickLogin}>
          로그인
        </Button>
        <S.ToggleRegisterButton onClick={handleClickToggleRegister}>회원가입하기</S.ToggleRegisterButton>
      </S.LoginForm>
    </S.LoginPageContainer>
  );
};

export default LoginPage;
