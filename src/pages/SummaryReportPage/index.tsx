import { useParams } from 'react-router-dom';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { HiOutlineDownload } from 'react-icons/hi';

import * as S from './styles';
import Dropdown from '@/components/common/Dropdown';
import Tooltip from '@/components/common/Tooltip';
import VulnerabilityItem from './components/VulnerabilityItem';
import SeverityChart from './components/SeverityChart';
import FileVulnerabilityList from './components/FileVulnerabilityList';
import useGetSummaryReport from './hooks/useGetSummaryReport';
import useFilterSummaryReport from './hooks/useSummaryReportData';
import useSummaryReportFilter from './hooks/useSummaryReportFilter';

const SummaryReportPage = () => {
  const scanId = useParams().scanId;
  if (!scanId) return null;

  const { summaryReport } = useGetSummaryReport({ scanId });
  if (!summaryReport) return null;

  const { fileVulnerabilities, groupedBySeverity, severityChartData } = useFilterSummaryReport({ summaryReport });
  const { dropdownFilterList, selectedFilter, handleSelectDropdownItem } = useSummaryReportFilter();

  return (
    <S.SummaryReportPageContainer>
      <S.SummaryReportSideBar>
        <S.SeverityChartContainer>
          <S.SeverityChartTitle>심각도별 취약점 현황</S.SeverityChartTitle>
          <SeverityChart contents={severityChartData} />
        </S.SeverityChartContainer>
        <S.ScannedFileInfoContainer>
          <S.ScannedFileInfoTitle>분석한 파일별 취약점 현황</S.ScannedFileInfoTitle>
          <FileVulnerabilityList content={fileVulnerabilities} />
        </S.ScannedFileInfoContainer>
      </S.SummaryReportSideBar>
      <S.SummaryReportContainer>
        <S.SummaryReportHeader>
          <S.HeaderTitleContainer>
            <S.HeaderTitle>{summaryReport.totalVulnerabilities}개의 취약점 발견</S.HeaderTitle>
            <Tooltip message="각 취약점 항목을 클릭하면 상세 정보를 볼 수 있어요." position="bottom">
              <FaRegQuestionCircle size={20} />
            </Tooltip>
          </S.HeaderTitleContainer>
          <Dropdown items={dropdownFilterList} selectedItem={selectedFilter} handleSelect={handleSelectDropdownItem} />
          <S.ReportDownloadButton>
            <HiOutlineDownload size={20} />
            <S.ReportDownloadText>JSON 형식으로 다운로드</S.ReportDownloadText>
          </S.ReportDownloadButton>
        </S.SummaryReportHeader>
        <S.SummaryReportContent>
          {groupedBySeverity.map((group, idx) => {
            return (
              <S.VulnerabilityItemContainer key={`severity_${idx}`}>
                {group.map((vuln) => (
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
