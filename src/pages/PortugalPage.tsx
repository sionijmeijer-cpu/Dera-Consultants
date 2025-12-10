import PortugalEurope from '../components/pages/PortugalEurope';

function PortugalPage() {
  const handleScheduleCall = () => {
    const event = new CustomEvent('openScheduleModal');
    window.dispatchEvent(event);
  };

  return (
    <PortugalEurope onScheduleCall={handleScheduleCall} />
  );
}

export default PortugalPage;
