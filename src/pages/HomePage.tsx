import Hero from '../components/Hero';
import Services from '../components/Services';

interface HomePageProps {
  onScheduleCall?: () => void;
}

export default function HomePage({ onScheduleCall }: HomePageProps) {
  const handleScheduleCall = () => {
    const event = new CustomEvent('openScheduleModal');
    window.dispatchEvent(event);
  };

  return (
    <div>
      <Hero onScheduleCall={handleScheduleCall} />
      <Services />
    </div>
  );
}
