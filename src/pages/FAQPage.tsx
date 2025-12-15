import FAQ from '../components/FAQ';

export default function FAQPage() {
  const handleScheduleCall = () => {
    const event = new CustomEvent('openScheduleModal');
    window.dispatchEvent(event);
  };

  return <FAQ onScheduleCall={handleScheduleCall} />;
}
