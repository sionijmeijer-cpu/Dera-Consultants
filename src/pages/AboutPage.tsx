import AboutUs from '../components/AboutUs';

interface AboutPageProps {
  onScheduleCall?: () => void;
}

export default function AboutPage({ onScheduleCall }: AboutPageProps) {
  const handleScheduleCall = () => {
    const event = new CustomEvent('openScheduleModal');
    window.dispatchEvent(event);
  };

  return <AboutUs onScheduleCall={handleScheduleCall} />;
}
