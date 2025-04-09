import styled from 'styled-components';

export const SummaryReportPageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const SummaryReportSideBar = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 35rem;
  padding: 3.2rem 1.6rem;
  border-right: 0.1rem solid ${({ theme }) => theme.colors.gray200};
`;

export const SummaryReportContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  width: calc(100% - 35rem);
  padding: 1.6rem;
`;

export const SummaryReportHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const HeaderTitleContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
`;

export const HeaderTitle = styled.p`
  ${({ theme }) => theme.fonts.subtitle};
`;

export const ReportDownloadButton = styled.div`
  cursor: pointer;
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;

export const ReportDownloadText = styled.p`
  ${({ theme }) => theme.fonts.description};
`;

export const SummaryReportContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
`;

export const VulnerabilityItemContainer = styled.ul`
  overflow: hidden;
  display: flex;
  flex-direction: column;

  width: 100%;
  border: 0.1rem solid ${({ theme }) => theme.colors.gray200};
  border-radius: 1rem;

  & > :last-child > * {
    border-bottom: none;
  }
`;
