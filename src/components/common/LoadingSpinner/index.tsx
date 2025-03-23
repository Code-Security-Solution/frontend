import { ButtonStyle } from '../Button/styles';
import * as S from './styles';

interface LoadingSpinnerProps {
  color: ButtonStyle;
}

const LoadingSpinner = ({ color }: LoadingSpinnerProps) => {
  return <S.LoadingSpinnerWrapper $color={color} />;
};

export default LoadingSpinner;
