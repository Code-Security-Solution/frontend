import { getSummaryReport } from '@/api/semgrep';
import { useQuery } from '@tanstack/react-query';

interface UseGetSummaryReportProps {
  scanId: string;
}

const useGetSummaryReport = ({ scanId }: UseGetSummaryReportProps) => {
  const { data: summaryReport } = useQuery({
    queryKey: ['summaryReport', scanId],
    queryFn: async () => await getSummaryReport({ scan_id: scanId }),
    staleTime: 60 * 60 * 1000,
  });

  return {
    summaryReport,
  };
};

export default useGetSummaryReport;
