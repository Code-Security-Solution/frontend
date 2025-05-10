import { useQuery } from '@tanstack/react-query';
import * as S from './styles';
import { getMyFiles } from '@/api/users';
import { useAuthTokenStore } from '@/stores/useAuthTokenStore';
import { FaFile } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import UndraggableWrapper from '@/components/common/UndraggableWrapper';

const ScanHistoryList = () => {
  const navigate = useNavigate();
  const { accessToken } = useAuthTokenStore();

  const { data } = useQuery({
    queryKey: ['myFiles', accessToken],
    queryFn: getMyFiles,
    enabled: !!accessToken,
    staleTime: 10 * 60 * 1000,
  });

  if (!data) return null;

  const handleHistoryItemClick = (scanId: string) => {
    navigate(`/summary/${scanId}`);
  };

  if (data.files.length === 0) return <S.EmptySection>스캔 기록이 없어요.</S.EmptySection>;

  return (
    <S.ScanHistoryList>
      {data.files.map((scan) => {
        const parsedFilePath = scan.file_path.map((path) => path.split('/'));
        const fileNames = parsedFilePath.map((path) => path[path.length - 1]).join(', ');

        return (
          <UndraggableWrapper key={scan.file_id}>
            <S.ScanHistoryItem onClick={() => handleHistoryItemClick(scan.file_id)}>
              <S.ScanDate>{new Date(scan.created_at).toLocaleDateString()}</S.ScanDate>
              <S.ScanFileSection>
                <FaFile size={24} />
                <S.ScanFileName>{fileNames}</S.ScanFileName>
              </S.ScanFileSection>
            </S.ScanHistoryItem>
          </UndraggableWrapper>
        );
      })}
    </S.ScanHistoryList>
  );
};

export default ScanHistoryList;
