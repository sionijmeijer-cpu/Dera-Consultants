import Hero from '../components/Hero';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import ComparisonSection from '../components/ComparisonSection';

export default function HomePage() {
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
