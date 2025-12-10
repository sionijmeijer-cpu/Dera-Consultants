import Hero from '../components/Hero';
import Services from '../components/Services';
import { useSEO } from '../hooks/useSEO';

interface HomePageProps {
  onScheduleCall?: () => void;
}

export default function HomePage({ onScheduleCall }: HomePageProps) {
  useSEO({
    title: 'Dera Consultants - Caribbean Citizenship & European Residency Programs',
    description: 'Expert immigration consultants specializing in Caribbean citizenship by investment and European residency programs. Fast-track your second passport with trusted guidance.',
    canonicalUrl: 'https://getsecondpassport.eu',
  });

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