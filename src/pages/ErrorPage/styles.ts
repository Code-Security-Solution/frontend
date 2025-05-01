import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

export const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  align-items: center;
`;

export const ErrorTitleContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

export const ErrorDescription = styled.p`
  ${({ theme }) => theme.fonts.subtitle};
  white-space: pre-wrap;
`;

export const GoHomeButtonMessage = styled.p`
  ${({ theme }) => theme.fonts.mediumBody};
`;
