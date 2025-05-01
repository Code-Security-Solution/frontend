import { PropsWithChildren } from 'react';

import * as S from './styles';
import useModalStore from '@/stores/useModalStore';

interface ModalProps {
  handleClose?: () => void;
}

const AlertModal = ({ children, handleClose }: PropsWithChildren<ModalProps>) => {
  const { closeModal } = useModalStore();

  return (
    <>
      <S.Overlay
        onClick={() => {
          handleClose && handleClose();
          closeModal('alert');
        }}
      />
      <S.ModalContainer>{children}</S.ModalContainer>
    </>
  );
};

export default AlertModal;
