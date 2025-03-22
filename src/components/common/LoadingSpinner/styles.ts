import styled, { keyframes } from 'styled-components';

const spinnerRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinnerWrapper = styled.div`
  width: 3.6rem;
  height: 3.6rem;
  border: 0.4rem solid ${({ theme }) => theme.colors.primary};
  border-left-color: transparent;

  animation: ${spinnerRotate} 1s linear infinite;
`;
