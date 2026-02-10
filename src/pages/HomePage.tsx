import Hero from '../components/Hero';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Services from '../components/Services';

interface HomePageProps {
  onScheduleCall?: () => void;
}

export default function HomePage({ onScheduleCall }: HomePageProps) {
  const handleScheduleCall = () => {
    const event = new CustomEvent('openScheduleModal');
    window.dispatchEvent(event);
  };

  try {
    return (
      <div>
        <Hero onScheduleCall={handleScheduleCall} />
        <Process />
        <Testimonials />
        <Services />
      </div>
    );
  } catch (error) {
    console.error('Error rendering HomePage:', error);
    return <div className="p-8 text-center text-red-600">Error loading page</div>;
  }
}
