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
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ScheduleCallModal from './components/ScheduleCallModal';

function App() {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  
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

  // Handle navigation with smooth page transitions and instant scroll to top
  useEffect(() => {
    // Scroll to top when path changes
    window.scrollTo(0, 0);
  }, [currentPath]);
  
  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };
    
    window.addEventListener('popstate', handlePopState);
    
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Listen for custom event to open modal
  useEffect(() => {
    const handleOpenModal = () => setIsScheduleModalOpen(true);
    window.addEventListener('openScheduleModal', handleOpenModal);
    return () => window.removeEventListener('openScheduleModal', handleOpenModal);
  }, []);

  // Determine which page to display based on path
  const getPageComponent = () => {
    const path = currentPath;
    
    if (path === '/' || path === '') {
      return <HomePage />;
    } else if (path === '/about-us') {
      return <AboutPage />;
    } else if (path === '/caribbean-citizenship-by-investment') {
      return <CaribbeanPage />;
    } else if (path === '/portugal-europe-residency') {
      return <PortugalPage />;
    } else if (path === '/faq') {
      return <FAQPage />;
    } else if (path === '/contact') {
      return <ContactPage />;
    } else if (path === '/blog') {
      return <BlogPage />;
    } else if (path.startsWith('/blog/')) {
      return <BlogPostPage />;
    }
    
    // Default to home page
    return <HomePage />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header onScheduleCall={() => setIsScheduleModalOpen(true)} />
      <main className="flex-1">
        {getPageComponent()}
      </main>
      <Footer />
      <ScheduleCallModal isOpen={isScheduleModalOpen} onClose={() => setIsScheduleModalOpen(false)} />
    </div>
  );
}

export default App;
