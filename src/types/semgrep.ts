import { SemgrepJsonRootObject } from './semgrepSchema';

export interface PostFileUploadRequest {
  files: string[];
}

export interface PostFileUploadResult {
  file_id: string;
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

type Severity = 'critical' | 'error' | 'warning' | 'info';

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
