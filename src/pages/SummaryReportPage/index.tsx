import { useParams } from 'react-router-dom';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { HiOutlineDownload } from 'react-icons/hi';

import * as S from './styles';
import Dropdown, { DropdownItem } from '@/components/common/Dropdown';
import Tooltip from '@/components/common/Tooltip';
import SeverityChart from './components/SeverityChart';
import FileVulnerabilityList from './components/FileVulnerabilityList';
import useGetSummaryReport from './hooks/useGetSummaryReport';
import useFilterSummaryReport from './hooks/useSummaryReportData';
import { useState } from 'react';
import { Vulnerability } from '@/types/semgrep';
import VulnerabilityList from './components/VulnerabilityList';

export type VulnerabilityFilter = 'groupBySeverity' | 'groupByType';

export const dropdownFilterList: DropdownItem<VulnerabilityFilter>[] = [
  { text: '심각도별 보기', value: 'groupBySeverity' },
  { text: '취약점 유형별 보기', value: 'groupByType' },
];

const SummaryReportPage = () => {
  const [selectedFilterItem, setSelectedFilterItem] = useState<DropdownItem<VulnerabilityFilter>>(
    dropdownFilterList[0],
  );

  const scanId = useParams().scanId;
  if (!scanId) return null;

  const { summaryReport } = useGetSummaryReport({ scanId });
  if (!summaryReport) return null;

  const { fileVulnerabilities, groupedBySeverity, groupedByType, severityChartData } = useFilterSummaryReport({
    summaryReport,
  });

  const vulnerabilityDataMap: Record<VulnerabilityFilter, Vulnerability[][]> = {
    groupBySeverity: groupedBySeverity,
    groupByType: groupedByType,
  };

  const handleSelectDropdownItem = (item: DropdownItem<VulnerabilityFilter>) => {
    setSelectedFilterItem(item);
  };

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
          <Dropdown
            items={dropdownFilterList}
            selectedItem={selectedFilterItem}
            handleSelect={handleSelectDropdownItem}
          />
          <S.ReportDownloadButton>
            <HiOutlineDownload size={20} />
            <S.ReportDownloadText>이미지로 다운로드</S.ReportDownloadText>
          </S.ReportDownloadButton>
        </S.SummaryReportHeader>
        <S.SummaryReportContent>
          <VulnerabilityList data={vulnerabilityDataMap[selectedFilterItem.value]} />
        </S.SummaryReportContent>
      </S.SummaryReportContainer>
    </S.SummaryReportPageContainer>
  );
};

export default SummaryReportPage;
