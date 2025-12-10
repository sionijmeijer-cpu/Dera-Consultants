import { useSEO } from '../hooks/useSEO';
import CaribbeanCBI from '../components/pages/CaribbeanCBI';

function CaribbeanPage() {
  useSEO({
    title: 'Caribbean Citizenship by Investment | Fast Second Passport Options',
    description: 'Explore Caribbean citizenship by investment programs offering fast second passports, visa-free travel and family inclusion. Compare requirements, timelines and benefits.',
    canonicalUrl: 'https://www.getsecondpassport.eu/caribbean-citizenship-by-investment',
    ogTitle: 'Caribbean Citizenship by Investment | Fast Second Passport Options',
    ogDescription: 'Compare second passport programs in the Caribbean and learn how to apply.',
  });

  const handleScheduleCall = () => {
    const event = new CustomEvent('openScheduleModal');
    window.dispatchEvent(event);
  };

  return (
    <CaribbeanCBI onScheduleCall={handleScheduleCall} />
  );
}

export default CaribbeanPage;
