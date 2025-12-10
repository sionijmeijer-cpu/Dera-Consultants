import Hero from '../components/Hero';
import Services from '../components/Services';
import { useSEO } from '../hooks/useSEO';

interface HomePageProps {
  onScheduleCall?: () => void;
}

export default function HomePage({ onScheduleCall }: HomePageProps) {
  useSEO({
    title: 'Second Passport & Residency by Investment | Dera Consultants',
    description: 'Get a second passport or EU residency through trusted citizenship and residency by investment programs in Europe and the Caribbean. Book a confidential consultation with Dera Consultants.',
    canonicalUrl: 'https://www.getsecondpassport.eu/',
    ogTitle: 'Second Passport & Residency by Investment | Dera Consultants',
    ogDescription: 'Get a second passport or EU residency through trusted programs in Europe and the Caribbean.',
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