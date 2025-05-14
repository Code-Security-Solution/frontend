import { getDetailedReport } from '@/api/semgrep';
import { useQuery } from '@tanstack/react-query';

interface UseGetDetailedReportProps {
  scanId: string;
  fingerprintId: string;
}

const useGetDetailedReport = ({ scanId, fingerprintId }: UseGetDetailedReportProps) => {
  const { data } = useQuery({
    queryKey: ['detailedReport', scanId, fingerprintId],
    queryFn: async () => await getDetailedReport({ scan_id: scanId, fingerprint: fingerprintId }),
    staleTime: 60 * 60 * 1000,
  });

  return {
    data,
  };
};

export default useGetDetailedReport;
