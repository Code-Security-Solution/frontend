import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import * as S from './styles';
import LoadingSpinner from '../LoadingSpinner';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleType: 'primary' | 'secondary' | 'disabled';
  isLoading?: boolean;
}

const Button = ({ styleType, isLoading = false, children, ...props }: PropsWithChildren<ButtonProps>) => {
  return (
    <S.ButtonContainer $styleType={styleType} {...props}>
      <S.ContentWrapper $isLoading={isLoading}>{children}</S.ContentWrapper>
      {isLoading && (
        <S.SpinnerWrapper>
          <LoadingSpinner color={styleType} />
        </S.SpinnerWrapper>
      )}
    </S.ButtonContainer>
  );
};

export default Button;
