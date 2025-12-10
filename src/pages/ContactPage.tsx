import { useSEO } from '../hooks/useSEO';
import Contact from '../components/Contact';

function ContactPage() {
  useSEO({
    title: 'Contact Dera Consultants | Book a Consultation',
    description: 'Contact Dera Consultants to discuss second passports, citizenship by investment and EU residency options. Book a confidential consultation today.',
    canonicalUrl: 'https://www.getsecondpassport.eu/contact',
    ogTitle: 'Contact Dera Consultants | Book a Consultation',
    ogDescription: 'Get in touch to discuss tailored second citizenship or residency solutions.',
  });

  return (
    <Contact />
  );
}

export default ContactPage;
