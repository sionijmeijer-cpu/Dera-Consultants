import { useState, useEffect, Component, ReactNode, lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import ComparisonSection from './components/ComparisonSection';

const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProgramsPage = lazy(() => import('./pages/ProgramsPage'));
const CaribbeanPage = lazy(() => import('./pages/CaribbeanPage'));
const PortugalPage = lazy(() => import('./pages/PortugalPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const ScheduleCallModal = lazy(() => import('./components/ScheduleCallModal'));

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean; error: string }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: '' };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error.message };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white p-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">{this.state.error}</p>
            <button 
              onClick={() => { this.setState({ hasError: false, error: '' }); window.location.reload(); }}
              className="px-6 py-3 bg-[#0f3460] text-white rounded-lg hover:bg-[#0d2540]"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function HomePage() {
  const handleScheduleCall = () => {
    const event = new CustomEvent('openScheduleModal');
    window.dispatchEvent(event);
  };

  return (
    <div>
      <Hero onScheduleCall={handleScheduleCall} />
      <Process />
      <Testimonials />
      <ComparisonSection />
    </div>
  );
}

function App() {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);
  
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const handleOpenModal = () => setIsScheduleModalOpen(true);
    window.addEventListener('openScheduleModal', handleOpenModal);
    return () => window.removeEventListener('openScheduleModal', handleOpenModal);
  }, []);

  const getPageComponent = () => {
    const path = currentPath;
    
    if (path === '/' || path === '') {
      return <HomePage />;
    } else if (path === '/about-us') {
      return <AboutPage />;
    } else if (path === '/programs') {
      return <ProgramsPage />;
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
    
    return <HomePage />;
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col bg-white">
        <Header onScheduleCall={() => setIsScheduleModalOpen(true)} />
        <main className="flex-1">
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-gray-500">Loading...</div>
            </div>
          }>
            {getPageComponent()}
          </Suspense>
        </main>
        <Footer />
        <Suspense fallback={null}>
          {isScheduleModalOpen && (
            <ScheduleCallModal isOpen={isScheduleModalOpen} onClose={() => setIsScheduleModalOpen(false)} />
          )}
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;
