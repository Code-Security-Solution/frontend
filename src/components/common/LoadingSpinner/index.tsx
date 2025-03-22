import * as S from './styles';

interface LoadingSpinnerProps {
  color: 'primary' | 'white';
}

const LoadingSpinner = ({ color }: LoadingSpinnerProps) => {
  return <S.LoadingSpinnerWrapper $color={color} />;
};

export default LoadingSpinner;
