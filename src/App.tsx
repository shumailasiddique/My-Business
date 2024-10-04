import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { useTheme } from './contexts/ThemeContext';

function App() {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();
  const { themeMode, currentTheme, toggleTheme } = useTheme();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <div style={{ backgroundColor: currentTheme.tokens.background, color: currentTheme.tokens.text }}>
        <h1>{themeMode === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>

      <nav>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/about">About</Link>    
      </nav>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <h1>{t('welcome')}</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>{t('description')}</p>
        </div>

        <button onClick={() => changeLanguage('ur')}>Switch to Urdu</button>
        <button onClick={() => changeLanguage('en')}>Switch to English</button>

        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </Router>
  );
}

export default App;
