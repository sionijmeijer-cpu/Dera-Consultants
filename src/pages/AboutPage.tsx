import AboutUs from '../components/AboutUs';

function AboutPage() {
  const handleScheduleCall = () => {
    const event = new CustomEvent('openScheduleModal');
    window.dispatchEvent(event);
  };

  return (
    <AboutUs onScheduleCall={handleScheduleCall} />
  );
}

export default AboutPage;
