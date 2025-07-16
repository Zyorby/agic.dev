import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import IntroScreen from './IntroScreen';
import MainSite from './MainSite';
import ResumePage from './ResumePage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  return (
    <>
      <Router>
        <BodyStyleUpdater />
        <Routes>
          <Route path="*" element={<IntroScreen />} />
          <Route path="/" element={<IntroScreen />} />
          <Route path="/main" element={<MainSite />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    <Analytics />
  </>
  );
};

export default App;

// Internal component to handle body styles
const BodyStyleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    document.body.style.transition = 'background 0.5s ease, color 0.5s ease';

    if (location.pathname === '/main') {
      document.body.style.background = '#f0f0f0';
      document.body.style.color = '#222';
    } else {
      document.body.style.background = '#000000';
      document.body.style.color = '#00ff00';
    }
  }, [location]);

  return null;
};
