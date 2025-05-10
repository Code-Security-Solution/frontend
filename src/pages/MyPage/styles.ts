import styled from 'styled-components';

export const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  width: 100%;
  height: 100%;
  padding: 6.4rem 19.2rem;
`;

export const MyPageTitle = styled.p`
  ${({ theme }) => theme.fonts.title1};
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  padding: 1.6rem;
  border-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const Username = styled.p`
  ${({ theme }) => theme.fonts.title1};
`;

export const UserEmail = styled.p`
  ${({ theme }) => theme.fonts.subtitle};
`;

export const ScanHistorySection = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
`;

export const ScanHistoryTitle = styled.p`
  ${({ theme }) => theme.fonts.subtitle};
`;
