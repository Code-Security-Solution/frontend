import styled, { css } from 'styled-components';

export type ButtonStyle = 'primary' | 'secondary' | 'disabled';

const generateStyle = (buttonStyle: ButtonStyle) => {
  switch (buttonStyle) {
    case 'primary':
      return css`
        border: 0.2rem solid ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.black};
        background-color: ${({ theme }) => theme.colors.white};
      `;

    case 'secondary':
      return css`
        border: 0.2rem solid ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.primary};
      `;

    case 'disabled':
      return css`
        cursor: not-allowed;
        border: 0.2rem solid ${({ theme }) => theme.colors.gray400};
        color: ${({ theme }) => theme.colors.gray600};
        background-color: ${({ theme }) => theme.colors.gray200};
      `;
  }
};

interface ButtonContainerStyleProps {
  $styleType: ButtonStyle;
  $isLoading: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerStyleProps>`
  cursor: ${({ $isLoading }) => $isLoading && 'not-allowed'};

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: fit-content;
  min-width: 12rem;
  padding: 1.2rem 1.6rem;
  border-radius: 0.8rem;

  ${({ $styleType }) => generateStyle($styleType)};
`;

export const ContentWrapper = styled.div<{ $isLoading: boolean }>`
  ${({ $isLoading }) =>
    $isLoading &&
    css`
      opacity: 0;
    `}
`;

export const SpinnerWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
