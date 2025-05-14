import { Severity } from '@/types/semgrep';
import styled from 'styled-components';

export const SeverityBadgeContainer = styled.div<{ $severity: Severity }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 10rem;
  height: 2.8rem;
  padding: 0.8rem 1.6rem;
  border-radius: 1.4rem;

  color: ${({ theme, $severity }) => {
    switch ($severity) {
      case 'CRITICAL':
        return theme.colors.white;
      case 'ERROR':
        return theme.colors.white;
      case 'WARNING':
        return theme.colors.black;
      case 'INFO':
        return theme.colors.black;
      default:
        return theme.colors.white;
    }
  }};

  background-color: ${({ theme, $severity }) => {
    switch ($severity) {
      case 'CRITICAL':
        return theme.colors.severity_critial;
      case 'ERROR':
        return theme.colors.severity_error;
      case 'WARNING':
        return theme.colors.severity_warning;
      case 'INFO':
        return theme.colors.severity_info;
      default:
        return theme.colors.black;
    }
  }};

  ${({ theme }) => theme.fonts.mediumBody};
`;
