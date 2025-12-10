import { useSEO } from '../hooks/useSEO';
import PortugalEurope from '../components/pages/PortugalEurope';

function PortugalPage() {
  useSEO({
    title: 'Portugal & Europe Residency by Investment | EU Plan B',
    description: 'Discover Portugal and European residency-by-investment routes that can lead to long-term residence and an EU passport. Learn about available investment options, timelines and eligibility.',
    canonicalUrl: 'https://www.getsecondpassport.eu/portugal-europe-residency',
    ogTitle: 'Portugal & Europe Residency by Investment | EU Plan B',
    ogDescription: 'Explore EU residency-by-investment options in Portugal and Europe.',
  });

  const handleScheduleCall = () => {
    const event = new CustomEvent('openScheduleModal');
    window.dispatchEvent(event);
  };

  return (
    <PortugalEurope onScheduleCall={handleScheduleCall} />
  );
}

export default PortugalPage;
