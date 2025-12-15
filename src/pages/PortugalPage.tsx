import PortugalEurope from '../components/pages/PortugalEurope';

interface PortugalPageProps {
  onScheduleCall?: () => void;
}

export default function PortugalPage({ onScheduleCall }: PortugalPageProps) {
  const handleScheduleCall = () => {
    const event = new CustomEvent('openScheduleModal');
    window.dispatchEvent(event);
  };

  return <PortugalEurope onScheduleCall={handleScheduleCall} />;
}
