import Button from '@/components/common/Button';
import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  width: 100%;
  height: 100%;
`;

export const Content = styled.p`
  ${({ theme }) => theme.fonts.mediumBody};
`;

export const ConfirmButton = styled(Button)`
  width: 100%;
`;
