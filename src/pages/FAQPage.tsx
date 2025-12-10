import FAQ from '../components/FAQ';

function FAQPage() {
  const handleScheduleCall = () => {
    const event = new CustomEvent('openScheduleModal');
    window.dispatchEvent(event);
  };

  return (
    <FAQ onScheduleCall={handleScheduleCall} />
  );
}

export default FAQPage;
