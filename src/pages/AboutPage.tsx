import { SEOHead } from '../components/SEOHead';
import AboutUs from '../components/AboutUs';

interface AboutPageProps {
  onScheduleCall: () => void;
}

export default function AboutPage({ onScheduleCall }: AboutPageProps) {
  return (
    <>
      <SEOHead
        title="About Dera Consultants | Immigration & Citizenship Advisors"
        description="Learn about Dera Consultants, an independent advisory firm helping clients secure second passports and residency by investment in the EU and Caribbean."
        keywords="about dera consultants, immigration consultants, citizenship experts, independent advisory firm"
        image="/images/team-consulting.png"
        url="https://www.getsecondpassport.eu/about-us"
      />
      <AboutUs onScheduleCall={onScheduleCall} />
    </>
  );
}
