import AmericansMovingToPortugal from '../components/pages/AmericansMovingToPortugalPage';

interface AmericansMovingToPortugalPageProps {
  onScheduleCall?: () => void;
}

export default function AmericansMovingToPortugalPage({ onScheduleCall }: AmericansMovingToPortugalPageProps) {
  const handleScheduleCall = () => {
    const event = new CustomEvent('openScheduleModal');
    window.dispatchEvent(event);
  };
  return <AmericansMovingToPortugal onScheduleCall={handleScheduleCall} />;
}
