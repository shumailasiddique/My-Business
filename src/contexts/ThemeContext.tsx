import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { lightTheme, darkTheme } from '../styles/tokens'; // Use styled-components tokens
import { DefaultTheme } from 'styled-components';

// Define context type with DefaultTheme for currentTheme
interface ThemeContextType {
  themeMode: 'light' | 'dark';
  currentTheme: DefaultTheme; 
  toggleTheme: () => void;
}

// Create the context with the ThemeContextType interface
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  
  // Get the preferred theme based on user's OS settings
  const getPreferredTheme = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  };

  const [themeMode, setThemeMode] = useState<'light' | 'dark'>(getPreferredTheme);

  // Toggle between light and dark theme
  const toggleTheme = () => {
    setThemeMode((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Select the current theme based on the themeMode
  const currentTheme = themeMode === 'light' ? lightTheme : darkTheme;

  // Effect to update meta theme-color tag based on the theme
  useEffect(() => {
    const themeColorMetaTag = document.querySelector('meta[name="theme-color"]');
    if (themeColorMetaTag) {
      const newColor = themeMode === 'light' ? lightTheme.tokens.baseBackgroundColor : darkTheme.tokens.baseBackgroundColor;
      themeColorMetaTag.setAttribute('content', newColor);
    }
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook to use the theme in components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
