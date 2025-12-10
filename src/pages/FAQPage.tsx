import { useSEO } from '../hooks/useSEO';
import FAQ from '../components/FAQ';

function FAQPage() {
  useSEO({
    title: 'FAQ - Dera Consultants',
    description: 'Frequently asked questions about citizenship by investment, residency programs, and immigration services with Dera Consultants.',
    canonicalUrl: 'https://www.getsecondpassport.eu/faq',
    ogTitle: 'FAQ - Dera Consultants',
    ogDescription: 'Frequently asked questions about citizenship and residency programs.',
  });

  const handleScheduleCall = () => {
    const event = new CustomEvent('openScheduleModal');
    window.dispatchEvent(event);
  };

  return (
    <FAQ onScheduleCall={handleScheduleCall} />
  );
}

export default FAQPage;
