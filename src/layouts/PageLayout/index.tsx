import { PropsWithChildren } from 'react';
import * as S from './styles';
import Header from '@/components/common/Header';

const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <S.LayoutContainer>
      <Header />
      <S.MainWrapper>{children}</S.MainWrapper>
    </S.LayoutContainer>
  );
};

export default PageLayout;
