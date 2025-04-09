import { useParams } from 'react-router-dom';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { HiOutlineDownload } from 'react-icons/hi';

import * as S from './styles';
import Dropdown from '@/components/common/Dropdown';
import Tooltip from '@/components/common/Tooltip';
import { SummaryReport } from '@/types/semgrep';
import VulnerabilityItem from './components/VulnerabilityItem';

const DUMMY_DATA: SummaryReport = {
  user_id: 'user123',
  analyzed_at: new Date(),
  scannedFiles: ['file1', 'file2'],
  totalVulnerabilities: 5,
  severitySummary: {
    critical: 1,
    error: 2,
    warning: 1,
    info: 1,
  },
  vulnerabilities: [
    {
      id: 'vuln1',
      file: 'example1.cpp',
      line: 10,
      column: 5,
      type: 'type1',
      message: 'message1message1message1message1message1message1',
      severity: 'critical',
    },
    {
      id: 'vuln2',
      file: 'example2.cpp',
      line: 20,
      column: 10,
      type: 'type2',
      message: 'message2',
      severity: 'error',
    },
    {
      id: 'vuln3',
      file: 'example3.cpp',
      line: 30,
      column: 15,
      type: 'type3',
      message:
        'message3message3message3message3message3message3message3message3message3message3message3message3message3message3message3message3message3',
      severity: 'warning',
    },
    {
      id: 'vuln4',
      file: 'example4.cpp',
      line: 40,
      column: 20,
      type: 'type4',
      message: 'message4message4message4message4message4message4message4message4',
      severity: 'info',
    },
    {
      id: 'vuln5',
      file: 'example5.cpp',
      line: 50,
      column: 25,
      type: 'type5',
      message: 'message5message5message5message5message5message5',
      severity: 'error',
    },
    {
      id: 'vuln6',
      file: 'example6.cpp',
      line: 50,
      column: 25,
      type: 'type6',
      message: 'message6message6message6message6message6',
      severity: 'error',
    },
    {
      id: 'vuln7',
      file: 'example7.cpp',
      line: 50,
      column: 25,
      type: 'type7',
      message: 'message7',
      severity: 'critical',
    },
    {
      id: 'vuln8',
      file: 'example8.cpp',
      line: 50,
      column: 25,
      type: 'type8',
      message: 'message8',
      severity: 'critical',
    },
    {
      id: 'vuln9',
      file: 'example9.cpp',
      line: 50,
      column: 25,
      type: 'type9',
      message: 'message9',
      severity: 'warning',
    },
    {
      id: 'vuln10',
      file: 'example10.cpp',
      line: 50,
      column: 25,
      type: 'type10',
      message: 'message10',
      severity: 'warning',
    },
    {
      id: 'vuln11',
      file: 'example11.cpp',
      line: 50,
      column: 25,
      type: 'type11',
      message: 'message11',
      severity: 'info',
    },
    {
      id: 'vuln12',
      file: 'example12.cpp',
      line: 50,
      column: 25,
      type: 'type12',
      message: 'message12',
      severity: 'info',
    },
  ],
};

const severityOrder = ['critical', 'error', 'warning', 'info'];
const groupedBySeverity = DUMMY_DATA.vulnerabilities.reduce<Record<string, SummaryReport['vulnerabilities']>>(
  (acc, vuln) => {
    if (!acc[vuln.severity]) {
      acc[vuln.severity] = [];
    }
    acc[vuln.severity].push(vuln);
    return acc;
  },
  {},
);

const SummaryReportPage = () => {
  // TODO: scanId로 API 호출하여 데이터 가져오기
  const scanId = useParams().scanId;
  console.log('scanId', scanId);

  return (
    <S.SummaryReportPageContainer>
      <S.SummaryReportSideBar>사이드바</S.SummaryReportSideBar>
      <S.SummaryReportContainer>
        <S.SummaryReportHeader>
          <S.HeaderTitleContainer>
            <S.HeaderTitle>{DUMMY_DATA.vulnerabilities.length}개의 취약점 발견</S.HeaderTitle>
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
