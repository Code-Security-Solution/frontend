import { getSeverityColors, Severity, SummaryReport } from '@/types/semgrep';

interface UseFilterSummaryReport {
  summaryReport: SummaryReport;
}

const useFilterSummaryReport = ({ summaryReport }: UseFilterSummaryReport) => {
  const fileVulnerabilities = summaryReport.scannedFiles.map((file) => {
    return {
      filename: file,
      count: summaryReport.vulnerabilities.filter((vuln) => vuln.file === file).length,
    };
  });

  const severityOrder: Severity[] = ['critical', 'error', 'warning', 'info'];
  const groupedBySeverity = severityOrder.map((severity) =>
    summaryReport.vulnerabilities.filter((vuln) => vuln.severity === severity),
  );

  const severityChartData = Object.entries(summaryReport.severitySummary).map(([severity, count]) => ({
    severity: severity as Severity,
    count,
    color: getSeverityColors()[severity as Severity],
  }));

  return {
    fileVulnerabilities,
    groupedBySeverity,
    severityChartData,
  };
};

export default useFilterSummaryReport;
