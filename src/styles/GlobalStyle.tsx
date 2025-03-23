import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Pretendard, -apple-system, sans-serif;
  }

  html,
  body {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;

    font-size: 62.5%; /* 1rem = 10px */
    color: black;

    background-color: ${({ theme }) => theme.colors.gray100};
  }

  ul,
  li {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
