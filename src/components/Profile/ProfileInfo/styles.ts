import styled from 'styled-components';

export const ProfileInfoSection = styled.section`
  cursor: pointer;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
`;

export const ProfileInfoContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;

export const ProfileEmail = styled.p`
  ${({ theme }) => theme.fonts.mediumBody};
`;
