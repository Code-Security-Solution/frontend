import Input from '@/components/common/Input';
import * as S from './styles';
import Button from '@/components/common/Button';
import { formDropVarients } from '@/styles/motion';
import useRegister from './hooks/useRegister';

const RegisterPage = () => {
  const {
    email,
    password,
    name,
    emailError,
    passwordError,
    nameError,
    handleChangeEmail,
    handleChangePassword,
    handleChangeName,
    handleClickToggleLogin,
    handleClickRegister,
  } = useRegister();

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
        <Button styleType="secondary" onClick={handleClickRegister}>
          회원가입
        </Button>
        <S.ToggleLoginButton onClick={handleClickToggleLogin}>로그인하기</S.ToggleLoginButton>
      </S.RegisterForm>
    </S.RegisterPageContainer>
  );
};

export default RegisterPage;
