// styles/global.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle<{ theme: any }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    font-family: ${({ theme }) => theme.fontFamily};
    transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out;
  }
`;
