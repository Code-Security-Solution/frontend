import { CSSProperties } from 'styled-components';
import { SemgrepJsonRootObject } from './semgrepSchema';
import theme from '@/styles/theme';

export interface PostFileUploadRequest {
  files: File[];
}

export interface PostFileUploadResult {
  scan_id: string;
  uploaded_files: string[];
}

export interface PostFileUploadResponse {
  status: number;
  message: string;
  result: PostFileUploadResult | {};
}

export interface GetTotalScanResultResponse {
  status: number;
  message: string;
  result: SemgrepJsonRootObject | {};
}

export type Severity = 'critical' | 'error' | 'warning' | 'info';

export const getSeverityColors = (): Record<Severity, CSSProperties['color']> => ({
  critical: theme.colors.severity_critial,
  error: theme.colors.severity_error,
  warning: theme.colors.severity_warning,
  info: theme.colors.severity_info,
});

interface SeveritySummary {
  critical: number;
  error: number;
  warning: number;
  info: number;
}

interface Vulnerability {
  id: string;
  file: string;
  line: number;
  column: number;
  type: string;
  message: string;
  severity: Severity;
}

export interface SummaryReport {
  user_id: string | null;
  analyzed_at: Date;
  scannedFiles: string[];
  totalVulnerabilities: number;
  severitySummary: SeveritySummary;
  vulnerabilities: Vulnerability[];
}

export interface GetSummaryReportResponse {
  status: number;
  message: string;
  result: SummaryReport | {};
}
