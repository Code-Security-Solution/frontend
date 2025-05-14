import styled from 'styled-components';

export const DetailedReportPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  width: 100%;
  height: 100%;
  padding: 3.2rem;
`;

export const GoBackButton = styled.div`
  display: flex;
  width: 100%;

  & > * {
    cursor: pointer;
  }
`;

export const PatternSection = styled.div`
  display: flex;
  gap: 1.6rem;
  width: 100%;
  height: max-content;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    padding: 3.2rem;
    border: 0.1rem solid ${({ theme }) => theme.colors.gray200};
    border-radius: 1rem;

    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const SemgrepPatternSection = styled.div`
  width: 100%;
`;

export const AdditionalInfoSection = styled.div`
  width: 100%;
`;

export const SectionHeader = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray500};
`;

export const SectionTitle = styled.p`
  ${({ theme }) => theme.fonts.mediumBody};
  color: ${({ theme }) => theme.colors.gray500};
`;

export const PatternTitle = styled.p`
  ${({ theme }) => theme.fonts.subtitle};
`;

export const ScanResultSection = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  width: 100%;
`;

export const ScannedFile = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray500};
`;

export const ScannedFileName = styled.p`
  ${({ theme }) => theme.fonts.mediumBody};
  color: ${({ theme }) => theme.colors.black};
`;

export const VulnerabilityOrigin = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  ${({ theme }) => theme.fonts.mediumBody};
  color: ${({ theme }) => theme.colors.gray500};
`;

export const VulnerabilityPosition = styled.p`
  color: ${({ theme }) => theme.colors.black};
`;

export const PatternMessage = styled.p`
  ${({ theme }) => theme.fonts.mediumBody};
`;

export const ReferenceTitle = styled.p`
  ${({ theme }) => theme.fonts.subtitle};
  color: ${({ theme }) => theme.colors.gray500};
`;

export const ReferenceLink = styled.li`
  ${({ theme }) => theme.fonts.mediumBody};
  text-decoration: none;
  list-style-type: disc;
`;

export const SolutionSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  width: 100%;
  padding: 3.2rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.gray200};
  border-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const SolutionMessage = styled.p`
  ${({ theme }) => theme.fonts.mediumBody};
`;
