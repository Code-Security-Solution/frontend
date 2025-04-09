import styled from 'styled-components';

export const LayoutContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
`;

export const MainWrapper = styled.main`
  display: flex;
  width: 100%;
  height: calc(100vh - 6rem);
  margin-top: 6rem;
`;
