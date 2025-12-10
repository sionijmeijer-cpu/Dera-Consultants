import { useSEO } from '../hooks/useSEO';
import AboutUs from '../components/AboutUs';

function AboutPage() {
  useSEO({
    title: 'About Dera Consultants | Second Passport & Residency Advisors',
    description: 'Learn about Dera Consultants, an independent advisory firm helping entrepreneurs, families and investors secure second passports and residency by investment in the EU and Caribbean.',
    canonicalUrl: 'https://www.getsecondpassport.eu/about-us',
    ogTitle: 'About Dera Consultants | Second Passport & Residency Advisors',
    ogDescription: 'Learn about our experience helping clients secure citizenship and residency by investment.',
  });

  const handleScheduleCall = () => {
    const event = new CustomEvent('openScheduleModal');
    window.dispatchEvent(event);
  };

  return (
    <AboutUs onScheduleCall={handleScheduleCall} />
  );
}

export default AboutPage;
