import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
        background-color: #1A1D1F;
        color: #FFFFFF;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    input, button {
        font-family: 'Inter', sans-serif;
    }

    @media (max-width: 768px) {
        html {
            font-size: 93.75%;
        }
    }

    @media (max-width: 480px) {
        html {
            font-size: 87.5%;
        }
    }
`;

export const Color = {
    background: '#1A1D1F',
    input: '#2E343D',
    border: '#373D48',
    accent: '#ADDE34',
    text: '#FFFFFF',
    textSecondary: '#9FA8B6',
    error: '#C73232',
    quote: '#999B92'
};

export const FontSize = {
    small: '13px',
    regular: '16px',
    medium: '18px',
    large: '25px'
};

export const Spacing = {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '2.5rem'
};
