import * as S from './styles';
import { Severity } from '@/types/semgrep';

interface SeverityBadgeProps {
  severity: Severity;
}

const SeverityBadge = ({ severity }: SeverityBadgeProps) => {
  return <S.SeverityBadgeContainer $severity={severity}>{severity}</S.SeverityBadgeContainer>;
};

export default SeverityBadge;
