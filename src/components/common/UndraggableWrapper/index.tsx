import { PropsWithChildren } from 'react';
import * as S from './styles';

const UndraggableWrapper = ({ children }: PropsWithChildren) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default UndraggableWrapper;
