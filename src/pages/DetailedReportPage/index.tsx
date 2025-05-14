import { FaArrowLeft, FaFile, FaRegQuestionCircle } from 'react-icons/fa';
import * as S from './styles';
import { useNavigate, useParams } from 'react-router-dom';
import useGetDetailedReport from './hooks/useGetDetailedReport';
import DimmedLoadingPage from '../LoadingPage/DimmedLoadingPage';
import SeverityBadge from '../SummaryReportPage/components/SeverityBadge';
import { FiTarget } from 'react-icons/fi';
import Tooltip from '@/components/common/Tooltip';

const DetailedReportPage = () => {
  const navigate = useNavigate();
  const { scanId, vulnId } = useParams();
  if (!scanId || !vulnId) return null;

  const { data } = useGetDetailedReport({ scanId, fingerprintId: vulnId });
  if (!data) return <DimmedLoadingPage />;

  const handleClickGoBack = () => {
    navigate(`/summary/${scanId}`);
  };

  return (
    <S.DetailedReportPageContainer>
      <S.GoBackButton>
        <FaArrowLeft size={32} onClick={handleClickGoBack} />
      </S.GoBackButton>
      <S.PatternSection>
        <S.SemgrepPatternSection>
          <S.SectionHeader>
            <S.SectionTitle>{'<발견된 취약점 패턴>'}</S.SectionTitle>
            <Tooltip message="Semgrep에서 발견한 보안 취약점 패턴 설명이에요." position="right">
              <FaRegQuestionCircle size={20} />
            </Tooltip>
          </S.SectionHeader>
          <S.PatternTitle>{data.type}</S.PatternTitle>
          <S.ScanResultSection>
            <SeverityBadge severity={data.severity} />
            <S.ScannedFile>
              <FaFile size={24} />
              <S.ScannedFileName>{data.file}</S.ScannedFileName>
            </S.ScannedFile>
            <S.VulnerabilityOrigin>
              <FiTarget size={24} />
              <S.VulnerabilityPosition>
                {`line ${data.location.start.line}, col ${data.location.start.column} ~ line ${data.location.end.line}, col ${data.location.end.column}`}
              </S.VulnerabilityPosition>
            </S.VulnerabilityOrigin>
          </S.ScanResultSection>
          <S.PatternMessage>{data.message}</S.PatternMessage>
        </S.SemgrepPatternSection>
        <S.AdditionalInfoSection>
          <S.SectionHeader>
            <S.SectionTitle>{'<패턴 부가 정보>'}</S.SectionTitle>
            <Tooltip message="CWE 지침서 기반의 보안 취약점 정보를 확인해 보세요." position="right">
              <FaRegQuestionCircle size={20} />
            </Tooltip>
          </S.SectionHeader>
          <S.PatternTitle>{data.metadata.cwe}</S.PatternTitle>
          {data.references && (
            <>
              <S.ReferenceTitle>참고 자료</S.ReferenceTitle>
              {data.references.map((reference) => (
                <S.ReferenceLink key={reference}>
                  <a href={reference}>{reference}</a>
                </S.ReferenceLink>
              ))}
            </>
          )}
        </S.AdditionalInfoSection>
      </S.PatternSection>
      <S.SolutionSection>
        <S.SectionTitle>{'<어떻게 대처하나요?>'}</S.SectionTitle>
        <S.SolutionMessage>{data.suggestion}</S.SolutionMessage>
      </S.SolutionSection>
    </S.DetailedReportPageContainer>
  );
};

export default DetailedReportPage;
