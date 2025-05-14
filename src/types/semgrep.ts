import { CSSProperties } from 'styled-components';
import { SemgrepJsonRootObject } from './semgrepSchema';
import theme from '@/styles/theme';
import { ApiResponse } from './common';

export interface PostFileUploadRequest {
  files: Blob[];
}

export interface PostFileUploadResult {
  file_id: string;
  uploaded_files: string[];
}

export type PostFileUploadResponse = ApiResponse<PostFileUploadResult>;

export type GetTotalScanResultResponse = ApiResponse<SemgrepJsonRootObject>;

export type Severity = 'CRITICAL' | 'ERROR' | 'WARNING' | 'INFO';

export const getSeverityColors = (): Record<Severity, CSSProperties['color']> => ({
  CRITICAL: theme.colors.severity_critial,
  ERROR: theme.colors.severity_error,
  WARNING: theme.colors.severity_warning,
  INFO: theme.colors.severity_info,
});

interface SeveritySummary {
  critical: number;
  error: number;
  warning: number;
  info: number;
}

export interface Vulnerability {
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

export type GetSummaryReportResponse = ApiResponse<SummaryReport>;

export interface DetailedReport {
  user_id: string | null;
  id: string;
  file: string;
  location: {
    start: { line: number; column: number };
    end: { line: number; column: number };
  };
  type: string;
  message: string;
  severity: Severity;
  suggestion: string;
  code_snippet: string;
  metadata: {
    cwe: string[];
    category: string;
    technology: string[];
    subcategory: string[];
    likelihood: string;
    impact: string;
    vulnerability_class: string[];
  };
  references: string[];
}

export type GetDetailedReportResponse = ApiResponse<DetailedReport>;
