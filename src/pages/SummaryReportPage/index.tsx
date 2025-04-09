import { useParams } from 'react-router-dom';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { HiOutlineDownload } from 'react-icons/hi';

import * as S from './styles';
import Dropdown from '@/components/common/Dropdown';
import Tooltip from '@/components/common/Tooltip';
import VulnerabilityItem from './components/VulnerabilityItem';
import { groupedBySeverity } from './mock/groupedBySeverity';
import { totalDataCount } from './mock/mockdata';
import SeverityChart from './components/SeverityChart';
import { getSeverityColors, Severity } from '@/types/semgrep';

const severityOrder: Severity[] = ['critical', 'error', 'warning', 'info'];

const severityChartData = Object.keys(groupedBySeverity).map((severity) => {
  return {
    severity: severity as Severity,
    count: groupedBySeverity[severity as Severity].length,
    color: getSeverityColors()[severity as keyof typeof getSeverityColors],
  };
});

const SummaryReportPage = () => {
  // TODO: scanId로 API 호출하여 데이터 가져오기
  const scanId = useParams().scanId;
  console.log('scanId', scanId);

  return (
    <S.SummaryReportPageContainer>
      <S.SummaryReportSideBar>
        <S.SeverityChartContainer>
          <S.SeverityChartTitle>심각도별 취약점 현황</S.SeverityChartTitle>
          <SeverityChart contents={severityChartData} />
        </S.SeverityChartContainer>
      </S.SummaryReportSideBar>
      <S.SummaryReportContainer>
        <S.SummaryReportHeader>
          <S.HeaderTitleContainer>
            <S.HeaderTitle>{totalDataCount}개의 취약점 발견</S.HeaderTitle>
            <Tooltip message="각 취약점 항목을 클릭하면 상세 정보를 볼 수 있어요." position="bottom">
              <FaRegQuestionCircle size={20} />
            </Tooltip>
          </S.HeaderTitleContainer>
          <Dropdown
            items={[
              { text: '심각도별 보기', value: '심각도별 보기' },
              { text: '취약점 패턴별 보기', value: '취약점 패턴별 보기' },
            ]}
            selectedItem={{ text: '심각도별 보기', value: '심각도별 보기' }}
            handleSelect={(item) => console.log(item)}
          />
          <S.ReportDownloadButton>
            <HiOutlineDownload size={20} />
            <S.ReportDownloadText>JSON 형식으로 다운로드</S.ReportDownloadText>
          </S.ReportDownloadButton>
        </S.SummaryReportHeader>
        <S.SummaryReportContent>
          {severityOrder.map((severity) => {
            const vulns = groupedBySeverity[severity];
            if (!vulns) return null;

            return (
              <S.VulnerabilityItemContainer key={severity}>
                {vulns.map((vuln) => (
                  <VulnerabilityItem
                    key={vuln.id}
                    file={vuln.file}
                    line={vuln.line}
                    column={vuln.column}
                    message={vuln.message}
                    severity={vuln.severity}
                  />
                ))}
              </S.VulnerabilityItemContainer>
            );
          })}
        </S.SummaryReportContent>
      </S.SummaryReportContainer>
    </S.SummaryReportPageContainer>
  );
};

export default SummaryReportPage;
