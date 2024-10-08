import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/SignIn';
import About from './pages/About';
import NotFound from './pages/NotFound';

const AppRouter: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/processing" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default AppRouter;
