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
import { useRef, useState } from 'react';
import { Vulnerability } from '@/types/semgrep';
import VulnerabilityList from './components/VulnerabilityList';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

export type VulnerabilityFilter = 'groupBySeverity' | 'groupByType';

export const dropdownFilterList: DropdownItem<VulnerabilityFilter>[] = [
  { text: '심각도별 보기', value: 'groupBySeverity' },
  { text: '취약점 유형별 보기', value: 'groupByType' },
];

const SummaryReportPage = () => {
  const reportRef = useRef<HTMLDivElement>(null);
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

  const handleDownloadReportImage = async () => {
    const original = reportRef.current;
    if (!original) return;

    try {
      // 원본 div 클론
      const clone = original.cloneNode(true) as HTMLElement;

      // 화면에 보이지 않는 곳에 잠시 붙이기
      clone.style.position = 'absolute';
      clone.style.top = '-9999px';
      clone.style.left = '-9999px';
      clone.style.width = `${original.scrollWidth}px`;
      clone.style.height = 'auto';
      clone.style.overflow = 'visible';

      // 페이지 body에 붙이기
      document.body.appendChild(clone);

      // 클론 캡쳐
      const canvas = await html2canvas(clone, { scale: 2 });

      // Blob 생성 및 다운로드
      canvas.toBlob((blob) => {
        if (blob) saveAs(blob, `${scanId}_summary_report.png`);
      });

      // 클론 제거
      document.body.removeChild(clone);
    } catch (error) {
      console.error('Error downloading full report image:', error);
    }
  };

  return (
    <S.SummaryReportPageContainer ref={reportRef}>
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
          <S.ReportDownloadButton onClick={handleDownloadReportImage}>
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
