import styled, { keyframes } from 'styled-components';
import { ButtonStyle } from '../Button/styles';

const spinnerRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinnerWrapper = styled.div<{ $color: ButtonStyle }>`
  width: 3rem;
  height: 3rem;
  border: 0.4rem solid
    ${({ theme, $color }) => {
      switch ($color) {
        case 'primary':
          return theme.colors.primary;

        case 'secondary':
          return theme.colors.white;

        case 'disabled':
          return theme.colors.gray500;
      }
    }};
  border-left-color: transparent;
  border-radius: 50%;

  animation: ${spinnerRotate} 1s linear infinite;
`;
