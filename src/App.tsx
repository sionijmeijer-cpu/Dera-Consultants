import { useState, useEffect, Component, ReactNode, lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import ComparisonSection from './components/ComparisonSection';

const CompanyPage = lazy(() => import('./pages/CompanyPage'));
const ProgramsPage = lazy(() => import('./pages/ProgramsPage'));
const CaribbeanPage = lazy(() => import('./pages/CaribbeanPage'));
const PortugalPage = lazy(() => import('./pages/PortugalPage'));
const ResearchPage = lazy(() => import('./pages/ResearchPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const GuidesPage = lazy(() => import('./pages/GuidesPage'));
const GuidesStorePage = lazy(() => import('./pages/GuidesStorePage'));
const CheckoutSuccessPage = lazy(() => import('./pages/CheckoutSuccessPage'));
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

function PageSkeleton() {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-[#1B7A4E] border-t-transparent rounded-full animate-spin" />
        <span className="text-sm text-gray-400 font-medium">Loading...</span>
      </div>
    </div>
  );
}

function HomePage() {
  const handleScheduleCall = () => {
    const event = new CustomEvent('openScheduleModal');
    window.dispatchEvent(event);
  };

  const handleNavigateToGuides = () => {
    window.history.pushState({}, '', '/guides');
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Hero onScheduleCall={handleScheduleCall} onNavigateToGuides={handleNavigateToGuides} />
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

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (!href || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || href.startsWith('#')) return;
      e.preventDefault();
      window.history.pushState({}, '', href);
      setCurrentPath(href);
      window.scrollTo(0, 0);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const getPageComponent = () => {
    const path = currentPath;
    if (path === '/' || path === '') return <HomePage />;
    if (path === '/company') return <CompanyPage />;
    if (path === '/programs') return <ProgramsPage />;
    if (path === '/caribbean-citizenship-by-investment') return <CaribbeanPage />;
    if (path === '/portugal-europe-residency') return <PortugalPage />;
    if (path === '/research') return <ResearchPage />;
    if (path === '/contact') return <ContactPage />;
    if (path === '/blog') return <BlogPage />;
    if (path.startsWith('/blog/')) return <BlogPostPage onScheduleCall={() => setIsScheduleModalOpen(true)} />;
    if (path === '/guides') return <GuidesStorePage />;
    if (path === '/checkout/success') return <CheckoutSuccessPage />;
    if (path === '/guides-old') return <GuidesPage onScheduleCall={() => setIsScheduleModalOpen(true)} />;
    return <HomePage />;
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col bg-white">
        <Header onScheduleCall={() => setIsScheduleModalOpen(true)} />
        <main className="flex-1">
          <Suspense fallback={<PageSkeleton />}>
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
