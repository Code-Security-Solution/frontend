import styled from 'styled-components';

export const ProfileInfoSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileInfoContainer = styled.div`
  cursor: pointer;
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;

export const ProfileEmail = styled.p`
  ${({ theme }) => theme.fonts.mediumBody};
`;
