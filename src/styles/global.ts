import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    height: 100%; 
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.base}; ;
    font-size: 16px;
    background-color: ${({ theme }) => theme.colors.background}; 
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media (max-width: 768px) {
      font-size: 14px; 
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0; 
    font-weight: normal; 
  }

  p {
    margin: 0; 
  }

  ul, ol {
    padding: 0; 
    list-style: none; 
  }

  a {
    text-decoration: none;
    color: inherit; 
  }

  form {
    width: 100%;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
  }



`;
