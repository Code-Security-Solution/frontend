import styled from 'styled-components';

export const TooltipContainer = styled.div`
  position: relative;
  display: flex;

  &:hover > .tooltip,
  &:active > .tooltip {
    display: block;
  }
`;

export interface TooltipStyleProps {
  $position: 'top' | 'bottom' | 'left' | 'right';
}

export const TooltipContent = styled.div<TooltipStyleProps>`
  position: absolute;
  z-index: 998;

  display: none;

  width: max-content;
  max-width: 40rem;
  padding: 0.8rem;
  border-radius: 0.8rem;

  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme }) => theme.colors.gray700};

  ${({ theme }) => theme.fonts.description};

  ${({ $position }) => {
    switch ($position) {
      case 'top':
        return `
          bottom: 100%;
          left: 50%;
          transform: translate(-50%, -0.5rem);
        `;
      case 'right':
        return `
          left: 100%;
          top: 50%;
          transform: translate(0.5rem, -50%);
        `;
      case 'bottom':
        return `
          top: 100%;
          left: 50%;
          transform: translate(-50%, 0.5rem);
        `;
      case 'left':
        return `
          right: 100%;
          top: 50%;
          transform: translate(-0.5rem, -50%);
        `;
      default:
        return '';
    }
  }}
`;
