import Input from '@/components/common/Input';
import * as S from './styles';
import { useState } from 'react';
import Button from '@/components/common/Button';
import { useNavigate } from 'react-router-dom';
import { formDropVarients } from '@/styles/motion';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleChangeEmail = (value: string) => {
    setEmail(value);
  };

  const handleChangePassword = (value: string) => {
    setPassword(value);
  };

  const handleChangeName = (value: string) => {
    setName(value);
  };

  const handleClickToggleLogin = () => {
    navigate('/login');
  };

  return (
    <S.RegisterPageContainer>
      <S.RegisterForm variants={formDropVarients} initial="hidden" animate="visible">
        <S.RegisterFormTitle>회원가입</S.RegisterFormTitle>
        <Input id="email" type="email" label="이메일" value={email} handleChange={handleChangeEmail} />
        <Input id="password" type="password" label="비밀번호" value={password} handleChange={handleChangePassword} />
        <Input id="name" type="text" label="이름" value={name} handleChange={handleChangeName} />
        <Button styleType="secondary">회원가입</Button>
        <S.ToggleLoginButton onClick={handleClickToggleLogin}>로그인하기</S.ToggleLoginButton>
      </S.RegisterForm>
    </S.RegisterPageContainer>
  );
};

export default RegisterPage;
