import { InputHTMLAttributes } from 'react';
import * as S from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  label?: string;
  placeholder?: string;
  value?: string;
  errorMessage?: string;
  handleChange: (value: string) => void;
}

const Input = ({ id, label, type, placeholder, value, errorMessage, handleChange, ...props }: InputProps) => {
  return (
    <S.InputContainer id={id}>
      <S.InputLabel>{label}</S.InputLabel>
      <S.Input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
        {...props}
      />
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.InputContainer>
  );
};

export default Input;
