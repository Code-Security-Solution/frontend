import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const navigate = useNavigate();

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

  return {
    email,
    password,
    emailError,
    passwordError,
    isFormValid,
    handleChangeEmail,
    handleChangePassword,
    handleClickToggleRegister,
    validateForm,
  };
};

export default useLogin;
