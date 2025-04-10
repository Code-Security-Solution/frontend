import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useRegister = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nameError, setNameError] = useState('');

  const isFormValid = email.trim().length > 0 && password.trim().length > 0 && name.trim().length > 0;

  const validateForm = () => {
    if (!email.trim()) setEmailError('이메일을 입력해주세요.');
    if (!password.trim()) setPasswordError('비밀번호를 입력해주세요.');
    if (!name.trim()) setNameError('이름을 입력해주세요.');
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

  const handleChangeName = (value: string) => {
    setName(value);

    if (value.trim().length > 0) setNameError('');
    else setNameError('이름을 입력해주세요.');
  };

  const handleClickToggleLogin = () => {
    navigate('/login');
  };

  const handleClickRegister = () => {
    if (!isFormValid) return validateForm();

    console.log('회원가입: ', { email, password, name });
  };

  return {
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
  };
};

export default useRegister;
