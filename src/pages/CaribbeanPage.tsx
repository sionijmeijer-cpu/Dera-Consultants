import CaribbeanCBI from '../components/pages/CaribbeanCBI';

interface CaribbeanPageProps {
  onScheduleCall?: () => void;
}

export default function CaribbeanPage({ onScheduleCall }: CaribbeanPageProps) {
  const handleScheduleCall = () => {
    const event = new CustomEvent('openScheduleModal');
    window.dispatchEvent(event);
  };

  return <CaribbeanCBI onScheduleCall={handleScheduleCall} />;
}
