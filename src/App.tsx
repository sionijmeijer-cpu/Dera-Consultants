import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import CaribbeanCBI from './components/pages/CaribbeanCBI';
import PortugalEurope from './components/pages/PortugalEurope';
import ScheduleCallModal from './components/ScheduleCallModal';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero onScheduleCall={() => setIsScheduleModalOpen(true)} setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutUs />;
      case 'caribbean':
        return <CaribbeanCBI />;
      case 'portugal':
        return <PortugalEurope />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onScheduleCall={() => setIsScheduleModalOpen(true)} setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} onScheduleCall={() => setIsScheduleModalOpen(true)} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
      <ScheduleCallModal isOpen={isScheduleModalOpen} onClose={() => setIsScheduleModalOpen(false)} />
    </div>
  );
}

export default App;
