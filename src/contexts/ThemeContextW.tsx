import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { lightTheme, darkTheme } from '../styles/tokens';
import { DefaultTheme } from 'styled-components';

interface ThemeContextType {
  themeMode: 'light' | 'dark';
  currentTheme: DefaultTheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const getPreferredTheme = () => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return 'dark';
    }
    return 'light';
  };

  const [themeMode, setThemeMode] = useState<'light' | 'dark'>(
    getPreferredTheme
  );

  const toggleTheme = () => {
    setThemeMode((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const currentTheme = themeMode === 'light' ? lightTheme : darkTheme;

  useEffect(() => {
    const themeColorMetaTag = document.querySelector('meta[name="theme-color"]');
    if (themeColorMetaTag) {
      const newColor = themeMode === 'light' ? lightTheme.tokens.baseBackgroundColor : darkTheme.tokens.baseBackgroundColor;
      themeColorMetaTag.setAttribute('content', newColor);
    }
  }, [themeMode]);


  useEffect(() => {
    const themeColorMetaTag = document.querySelector('meta[name="theme-color"]');
    
    if (themeColorMetaTag) {

      themeColorMetaTag.setAttribute(
        'content',
        themeMode === 'light' ? lightTheme.tokens.baseBackgroundColor : darkTheme.tokens.baseBackgroundColor
      );
    }
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
