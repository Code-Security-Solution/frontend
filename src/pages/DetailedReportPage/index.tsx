import { FaArrowLeft, FaFile, FaRegQuestionCircle } from 'react-icons/fa';
import * as S from './styles';
import { useNavigate, useParams } from 'react-router-dom';
import useGetDetailedReport from './hooks/useGetDetailedReport';
import DimmedLoadingPage from '../LoadingPage/DimmedLoadingPage';
import SeverityBadge from '../SummaryReportPage/components/SeverityBadge';
import { FiTarget } from 'react-icons/fi';
import Tooltip from '@/components/common/Tooltip';
import DetailedReportCode from './components/DetailedReportCode';
import Button from '@/components/common/Button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postAIReport } from '@/api/semgrep';
import MarkdownEditor from '@uiw/react-markdown-editor';

const DetailedReportPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { scanId, vulnId } = useParams();
  if (!scanId || !vulnId) return null;

  const { mutate: mutateAIReport, isPending } = useMutation({
    mutationFn: async () => {
      return await postAIReport({ scan_id: scanId, fingerprint: vulnId });
    },
    mutationKey: ['aiReport', scanId, vulnId],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['detailedReport', scanId, vulnId] });
    },
    onError: (error) => {
      console.error('ai report generation error:', error);
    },
  });

  const { data } = useGetDetailedReport({ scanId, fingerprintId: vulnId });
  if (!data) return <DimmedLoadingPage />;

  console.log('Detailed Report Data:', data);

  const handleClickGoBack = () => {
    navigate(`/summary/${scanId}`);
  };

  return (
    <S.DetailedReportPageContainer>
      <S.HeaderSection>
        <S.GoBackButton>
          <FaArrowLeft size={32} onClick={handleClickGoBack} />
        </S.GoBackButton>
        {data.ai_report || isPending ? (
          <Button styleType="disabled" isLoading={isPending}>
            이미 레포트를 생성했어요
          </Button>
        ) : (
          <Button styleType="primary" onClick={() => mutateAIReport()} isLoading={isPending}>
            AI 레포트 생성하기
          </Button>
        )}
      </S.HeaderSection>
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
          <DetailedReportCode
            code={data.code}
            filename={data.file}
            startLine={data.location.start.line}
            endLine={data.location.end.line}
          />
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
      {/* <S.SolutionSection>
        <S.SectionTitle>{'<어떻게 대처하나요?>'}</S.SectionTitle>
        <S.SolutionMessage>{data.suggestion}</S.SolutionMessage>
      </S.SolutionSection> */}
      {data.ai_report && data.ai_report_contents && (
        <S.AIReportSection data-color-mode="light">
          <S.SectionTitle>{'<AI 레포트>'}</S.SectionTitle>
          <MarkdownEditor.Markdown source={data.ai_report_contents} />
        </S.AIReportSection>
      )}
    </S.DetailedReportPageContainer>
  );
};

export default DetailedReportPage;
