import { PropsWithChildren } from 'react';

import * as S from './styles';
import useModalStore from '@/stores/useModalStore';

interface ModalProps {
  title?: string;
}

const AlertModal = ({ children }: PropsWithChildren<ModalProps>) => {
  const { closeModal } = useModalStore();

  return (
    <>
      <S.Overlay onClick={() => closeModal('alert')} />
      <S.ModalContainer>{children}</S.ModalContainer>
    </>
  );
};

export default AlertModal;
