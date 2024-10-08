import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'; 
export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
  }

  h1, h2, p {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 36px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text}; // Make sure this matches your design
  }

  p {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.textSecondary}; // Adjust text colors if needed
  }
`;
const StyledPage = styled.div<StyledPageProps>`
  height: 100vh;
  display: flex;
  flex-direction: column;

  #left {
    display: none;
  }

  #right {
    background-color: ${({ theme }) => theme.colors.background}; // Apply background color for the form side
    max-width: ${(props) => (props.$isMobile ? '100%' : '700px')};
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
  }

  @media (min-width: 769px) {
    flex-direction: row;

    #left {
      display: block;
      width: 50%; // Adjust image size to match design
    }

    #right {
      width: 50%;
      padding-left: 50px;
      padding-right: 50px;
      align-items: flex-start;
      text-align: left;
      justify-content: center;
    }
  }
`;

