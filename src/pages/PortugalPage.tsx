import { SEOHead } from '../components/SEOHead';
import PortugalEurope from '../components/pages/PortugalEurope';

interface PortugalPageProps {
  onScheduleCall: () => void;
}

export default function PortugalPage({ onScheduleCall }: PortugalPageProps) {
  return (
    <>
      <SEOHead
        title="Portugal & Europe Residency by Investment | EU Plan B"
        description="Discover Portugal and European residency by investment routes that can lead to an EU passport. Learn timelines, investment options and how Dera Consultants can help."
        keywords="portugal golden visa, EU residency, european residency, spain digital nomad visa, EU citizenship, residency by investment"
        image="/images/portugal-hero.png"
        url="https://www.getsecondpassport.eu/portugal-europe-residency"
      />
      <PortugalEurope onScheduleCall={onScheduleCall} />
    </>
  );
}
