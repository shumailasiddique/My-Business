import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './i18n'; // Import the i18n configuration here
import { ThemeProvider } from './contexts/ThemeContext'; // Import the ThemeProvider

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider> {/* Wrap App in ThemeProvider */}
      <App />
    </ThemeProvider>
  </StrictMode>
);
