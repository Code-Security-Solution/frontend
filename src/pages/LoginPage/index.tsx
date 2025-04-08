import Input from '@/components/common/Input';
import * as S from './styles';
import { useState } from 'react';
import Button from '@/components/common/Button';
import { useNavigate } from 'react-router-dom';
import { formDropVarients } from '@/styles/motion';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (value: string) => {
    setEmail(value);
  };

  const handleChangePassword = (value: string) => {
    setPassword(value);
  };

  const handleClickToggleRegister = () => {
    navigate('/register');
  };

  const handleClickLogin = () => {
    // 테스트용 admin 로그인
    if (email === 'admin' && password === '1234') {
      alert('admin 로그인 성공');
      localStorage.setItem('access_token', 'admin_token');
      navigate('/');
    }
  };

  return (
    <S.LoginPageContainer>
      <S.LoginForm variants={formDropVarients} initial="hidden" animate="visible">
        <S.LoginFormHeader>
          <S.LoginFormTitle>로그인</S.LoginFormTitle>
          <S.LoginFormDescription>로그인 하면 이전에 분석한 기록을 볼 수 있어요.</S.LoginFormDescription>
        </S.LoginFormHeader>
        <Input id="email" type="email" label="이메일" value={email} handleChange={handleChangeEmail} />
        <Input id="password" type="password" label="비밀번호" value={password} handleChange={handleChangePassword} />
        <Button styleType="secondary" onClick={handleClickLogin}>
          로그인
        </Button>
        <S.ToggleRegisterButton onClick={handleClickToggleRegister}>회원가입하기</S.ToggleRegisterButton>
      </S.LoginForm>
    </S.LoginPageContainer>
  );
};

export default LoginPage;
