import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useWebVitals } from './hooks/useWebVitals';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CaribbeanPage from './pages/CaribbeanPage';
import PortugalPage from './pages/PortugalPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import ScheduleCallModal from './components/ScheduleCallModal';

function App() {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  
  // Monitor Core Web Vitals in development
  useWebVitals();
  
  // Optimize font loading
  useEffect(() => {
    if (document.fonts) {
      document.fonts.ready.then(() => {
        document.body.classList.add('fonts-loaded');
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header onScheduleCall={() => setIsScheduleModalOpen(true)} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onScheduleCall={() => setIsScheduleModalOpen(true)} />} />
          <Route path="/about-us" element={<AboutPage onScheduleCall={() => setIsScheduleModalOpen(true)} />} />
          <Route path="/caribbean-citizenship-by-investment" element={<CaribbeanPage onScheduleCall={() => setIsScheduleModalOpen(true)} />} />
          <Route path="/portugal-europe-residency" element={<PortugalPage onScheduleCall={() => setIsScheduleModalOpen(true)} />} />
          <Route path="/faq" element={<FAQPage onScheduleCall={() => setIsScheduleModalOpen(true)} />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <ScheduleCallModal isOpen={isScheduleModalOpen} onClose={() => setIsScheduleModalOpen(false)} />
    </div>
  );
}

export default App;
