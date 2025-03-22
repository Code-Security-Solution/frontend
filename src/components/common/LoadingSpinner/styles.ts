import styled, { keyframes } from 'styled-components';

const spinnerRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

type SpinnerColor = 'primary' | 'white';

export const LoadingSpinnerWrapper = styled.div<{ $color: SpinnerColor }>`
  width: 3rem;
  height: 3rem;
  border: 0.4rem solid ${({ theme, $color }) => ($color === 'primary' ? theme.colors.primary : theme.colors.gray100)};
  border-left-color: transparent;
  border-radius: 50%;

  animation: ${spinnerRotate} 1s linear infinite;
`;
