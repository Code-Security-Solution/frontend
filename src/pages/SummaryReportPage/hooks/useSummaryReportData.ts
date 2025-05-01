import { getSeverityColors, Severity, SummaryReport, Vulnerability } from '@/types/semgrep';

interface UseFilterSummaryReport {
  summaryReport: SummaryReport;
}

const useFilterSummaryReport = ({ summaryReport }: UseFilterSummaryReport) => {
  // 파일별 취약점 개수
  const fileVulnerabilities = summaryReport.scannedFiles.map((file) => {
    return {
      filename: file,
      count: summaryReport.vulnerabilities.filter((vuln) => vuln.file === file).length,
    };
  });

  // 심각도별 보기 정렬
  const severityOrder: Severity[] = ['critical', 'error', 'warning', 'info'];
  const groupedBySeverity = severityOrder.map((severity) =>
    summaryReport.vulnerabilities.filter((vuln) => vuln.severity === severity),
  );

  // 취약점 유형별 보기 정렬
  const groupedByTypeRecord = summaryReport.vulnerabilities.reduce<Record<string, Vulnerability[]>>((acc, vuln) => {
    if (!acc[vuln.type]) {
      acc[vuln.type] = [];
    }
    acc[vuln.type].push(vuln);
    return acc;
  }, {});

  const sortedTypeKeys = Object.keys(groupedByTypeRecord).sort((a, b) => a.localeCompare(b));
  const groupedByType = sortedTypeKeys.map((type) => groupedByTypeRecord[type]);

  // 심각도별 취약점 개수
  const severityChartData = Object.entries(summaryReport.severitySummary).map(([severity, count]) => ({
    severity: severity as Severity,
    count,
    color: getSeverityColors()[severity as Severity],
  }));

  return {
    fileVulnerabilities,
    groupedBySeverity,
    groupedByType,
    severityChartData,
  };
};

export default useFilterSummaryReport;
