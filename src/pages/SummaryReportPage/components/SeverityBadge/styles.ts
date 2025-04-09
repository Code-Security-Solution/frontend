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
      case 'critical':
        return theme.colors.white;
      case 'error':
        return theme.colors.white;
      case 'warning':
        return theme.colors.black;
      case 'info':
        return theme.colors.black;
      default:
        return theme.colors.white;
    }
  }};

  background-color: ${({ theme, $severity }) => {
    switch ($severity) {
      case 'critical':
        return theme.colors.severity_critial;
      case 'error':
        return theme.colors.severity_error;
      case 'warning':
        return theme.colors.severity_warning;
      case 'info':
        return theme.colors.severity_info;
      default:
        return theme.colors.black;
    }
  }};

  ${({ theme }) => theme.fonts.mediumBody};
`;
