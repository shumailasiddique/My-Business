// src/styles/tokens.ts

export const tokens = {
  colors: {
    light: {
      primary: '#0070f3',
      background: '#ffffff',
      text: '#000000',
      baseBackgroundColor: '#ffffff', // For meta tag background color in light mode
    },
    dark: {
      primary: '#79ffe1',
      background: '#000000',
      text: '#ffffff',
      baseBackgroundColor: '#000000', // For meta tag background color in dark mode
    },
  },
};

// Define the lightTheme and darkTheme using tokens
export const lightTheme = {
  tokens: tokens.colors.light,
};

export const darkTheme = {
  tokens: tokens.colors.dark,
};
