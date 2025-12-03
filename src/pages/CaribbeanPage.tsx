import { SEOHead } from '../components/SEOHead';
import CaribbeanCBI from '../components/pages/CaribbeanCBI';

interface CaribbeanPageProps {
  onScheduleCall: () => void;
}

export default function CaribbeanPage({ onScheduleCall }: CaribbeanPageProps) {
  return (
    <>
      <SEOHead
        title="Caribbean Citizenship by Investment | Second Passport Options"
        description="Explore Caribbean citizenship by investment programs offering fast second passports, visa-free travel, and family eligibility. Compare key requirements and benefits."
        keywords="caribbean citizenship, CBI programs, antigua citizenship, dominica citizenship, grenada citizenship, second passport, visa-free travel"
        image="/images/caribbean-hero.png"
        url="https://www.getsecondpassport.eu/caribbean-citizenship-by-investment"
      />
      <CaribbeanCBI onScheduleCall={onScheduleCall} />
    </>
  );
}
