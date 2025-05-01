import { TbX } from 'react-icons/tb';
import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.overlay};
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.modalBackground};
`;

export const ModalContainer = styled.div`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.modal};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;

  min-width: 40rem;
  max-width: 80vw;
  max-height: 50vh;
  padding: 3.2rem;
  border-radius: 1rem;

  color: ${({ theme }) => theme.colors.black};

  background-color: ${({ theme }) => theme.colors.white};

  svg {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const CloseButton = styled.div`
  display: flex;
  justify-content: end;
`;

export const CloseIcon = styled(TbX)`
  cursor: pointer;
`;
