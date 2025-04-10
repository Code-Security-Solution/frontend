import styled from 'styled-components';

export const DimmedContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  opacity: 0.5;
  background-color: ${({ theme }) => theme.colors.black};
`;
