import { useAuthStore } from '@/stores/useAuthStore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const navigate = useNavigate();
  const { setAuthState } = useAuthStore();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const isFormValid = email.trim().length > 0 && password.trim().length > 0;

  const validateForm = () => {
    if (!email.trim()) setEmailError('이메일을 입력해주세요.');
    if (!password.trim()) setPasswordError('비밀번호를 입력해주세요.');
  };

  const handleChangeEmail = (value: string) => {
    setEmail(value);

    if (value.trim().length > 0) setEmailError('');
    else setEmailError('이메일을 입력해주세요.');
  };

  const handleChangePassword = (value: string) => {
    setPassword(value);

    if (value.trim().length > 0) setPasswordError('');
    else setPasswordError('비밀번호를 입력해주세요.');
  };

  const handleClickToggleRegister = () => {
    navigate('/register');
  };

  const handleClickLogin = () => {
    if (!isFormValid) return validateForm();

    // 테스트용 admin 로그인
    if (email === 'admin' && password === '1234') {
      alert('admin 로그인 성공');
      setAuthState({ token: 'admin_token', userInfo: { email: 'admin@email.com' } });
      navigate('/');
    }
  };

  return {
    email,
    password,
    emailError,
    passwordError,
    handleChangeEmail,
    handleChangePassword,
    handleClickToggleRegister,
    handleClickLogin,
  };
};

export default useLogin;
