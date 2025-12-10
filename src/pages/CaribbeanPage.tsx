import CaribbeanCBI from '../components/pages/CaribbeanCBI';

function CaribbeanPage() {
  const handleScheduleCall = () => {
    const event = new CustomEvent('openScheduleModal');
    window.dispatchEvent(event);
  };

  return (
    <CaribbeanCBI onScheduleCall={handleScheduleCall} />
  );
}

export default CaribbeanPage;
