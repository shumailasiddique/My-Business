import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'; 
export const GlobalStyles = createGlobalStyle`
   body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  // Ensure responsive layout with mobile adjustments
  @media (max-width: 768px) {
    body {
      font-size: 0.875rem;
    }

    .container {
      padding: 0 20px; // Adjust padding for mobile
    }

    h1, h2, h3, h4 {
      font-size: 1.5rem; // Responsive typography
    }
  }

  // Further mobile optimizations
  @media (max-width: 480px) {
    h1, h2, h3, h4 {
      font-size: 1.25rem;
    }

    .container {
      padding: 0 15px;
    }

    input, button {
      font-size: 0.875rem; // Adjust form elements for small screens
    }
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


/* fonts */
export const FontFamily = {
  regular: "Inter-Regular",
  miniItalic: "Inter-Light",
};
/* font sizes */
export const FontSize = {
  regular_size: 16,
  miniItalic_size: 13,
};
/* Colors */
export const Color = {
  label: "#9fa8b6",
  red: "#c73232",
  text: "#fff",
  backgroundA: "#2e343d",
  lime: "#adde34",
};
/* Style Variables */
export const StyleVariable = {
  tight: 4,
};