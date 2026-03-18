import { useState, useEffect, Component, ReactNode, lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import QuickConsult from './components/QuickConsult';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import ComparisonSection from './components/ComparisonSection';

const loadCompanyPage = () => import('./pages/CompanyPage');
const CompanyPage = lazy(loadCompanyPage);

const loadProgramsPage = () => import('./pages/ProgramsPage');
const ProgramsPage = lazy(loadProgramsPage);

const loadCaribbeanPage = () => import('./pages/CaribbeanPage');
const CaribbeanPage = lazy(loadCaribbeanPage);

const loadPortugalPage = () => import('./pages/PortugalPage');
const PortugalPage = lazy(loadPortugalPage);

const loadResearchPage = () => import('./pages/ResearchPage');
const ResearchPage = lazy(loadResearchPage);

const loadContactPage = () => import('./pages/ContactPage');
const ContactPage = lazy(loadContactPage);

const loadBlogPage = () => import('./pages/BlogPage');
const BlogPage = lazy(loadBlogPage);

const loadBlogPostPage = () => import('./pages/BlogPostPage');
const BlogPostPage = lazy(loadBlogPostPage);

const loadGuidesPage = () => import('./pages/GuidesPage');
const GuidesPage = lazy(loadGuidesPage);

const loadGuidesStorePage = () => import('./pages/GuidesStorePage');
const GuidesStorePage = lazy(loadGuidesStorePage);

const loadCheckoutSuccessPage = () => import('./pages/CheckoutSuccessPage');
const CheckoutSuccessPage = lazy(loadCheckoutSuccessPage);

const loadScheduleCallModal = () => import('./components/ScheduleCallModal');
const ScheduleCallModal = lazy(loadScheduleCallModal);

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
              onClick={() => {
                this.setState({ hasError: false, error: '' });
                window.location.reload();
              }}
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

function navigate(href: string) {
  window.history.pushState({}, '', href);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

function HomePage() {
  const handleScheduleCall = () => {
    const event = new CustomEvent('openScheduleModal');
    window.dispatchEvent(event);
  };

  return (
    <div>
      <Hero onScheduleCall={handleScheduleCall} onNavigateToGuides={() => navigate('/guides')} />
      <QuickConsult />
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
    const warm = () => {
      loadCompanyPage();
      loadProgramsPage();
      loadCaribbeanPage();
      loadPortugalPage();
      loadResearchPage();
      loadContactPage();
      loadBlogPage();
      loadBlogPostPage();
      loadGuidesStorePage();
      loadGuidesPage();
      loadCheckoutSuccessPage();
      loadScheduleCallModal();
    };

    const w = window as unknown as { requestIdleCallback?: (cb: () => void) => void };
    if (w.requestIdleCallback) w.requestIdleCallback(warm);
    else setTimeout(warm, 1000);
  }, []);

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
      if (!href) return;

      if (href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || href.startsWith('#')) {
        return;
      }

      e.preventDefault();
      navigate(href);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    const routePrefetchMap: Record<string, () => Promise<unknown>> = {
      '/company': loadCompanyPage,
      '/programs': loadProgramsPage,
      '/caribbean-citizenship-by-investment': loadCaribbeanPage,
      '/portugal-europe-residency': loadPortugalPage,
      '/research': loadResearchPage,
      '/contact': loadContactPage,
      '/blog': loadBlogPage,
      '/guides': loadGuidesStorePage,
      '/checkout/success': loadCheckoutSuccessPage,
      '/guides-old': loadGuidesPage,
    };

    const shouldIgnore = (href: string) =>
      href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || href.startsWith('#');

    const prefetch = (href: string) => {
      const loader = routePrefetchMap[href];
      if (loader) loader();
      if (href.startsWith('/blog/')) loadBlogPostPage();
    };

    const onPointerOver = (e: Event) => {
      const a = (e.target as HTMLElement)?.closest?.('a');
      const href = a?.getAttribute?.('href');
      if (!href || shouldIgnore(href)) return;
      prefetch(href);
    };

    document.addEventListener('pointerover', onPointerOver);
    return () => document.removeEventListener('pointerover', onPointerOver);
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
          <Suspense
            fallback={
              <div className="fixed top-0 left-0 right-0 z-50">
                <div className="h-1 w-full animate-pulse bg-gray-200" />
              </div>
            }
          >
            {getPageComponent()}
          </Suspense>
        </main>
        <Footer />
        <Suspense fallback={null}>
          {isScheduleModalOpen && (
            <ScheduleCallModal
              isOpen={isScheduleModalOpen}
              onClose={() => setIsScheduleModalOpen(false)}
            />
          )}
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;
