import styled from 'styled-components';

export const ScanHistoryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
`;

export const EmptySection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 15rem;
  ${({ theme }) => theme.fonts.subtitle};
  border-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const ScanHistoryItem = styled.li`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  width: 100%;
  padding: 2.4rem;
  border-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray200};
  }
`;

export const ScanDate = styled.p`
  ${({ theme }) => theme.fonts.mediumBody};
`;

export const ScanFileSection = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  ${({ theme }) => theme.fonts.mediumBody};
  color: ${({ theme }) => theme.colors.gray500};
`;

export const ScanFileName = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
