import LoadingSpinner from '@/components/common/LoadingSpinner';
import * as S from './styles';

const DimmedLoadingPage = () => {
  return (
    <S.DimmedContainer>
      <LoadingSpinner color="primary" />
    </S.DimmedContainer>
  );
};

export default DimmedLoadingPage;
