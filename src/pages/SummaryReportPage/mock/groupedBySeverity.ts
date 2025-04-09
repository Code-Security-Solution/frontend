import { SummaryReport } from '@/types/semgrep';
import { DUMMY_DATA } from './mockdata';

export const groupedBySeverity = DUMMY_DATA.vulnerabilities.reduce<Record<string, SummaryReport['vulnerabilities']>>(
  (acc, vuln) => {
    if (!acc[vuln.severity]) {
      acc[vuln.severity] = [];
    }
    acc[vuln.severity].push(vuln);
    return acc;
  },
  {},
);
