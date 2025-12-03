import { SEOHead } from '../components/SEOHead';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <>
      <SEOHead
        title="Contact Dera Consultants | Book a Free Consultation"
        description="Book a free consultation with Dera Consultants to discuss second passports, EU residency and citizenship by investment options tailored to your situation."
        keywords="contact dera consultants, book consultation, immigration consultation, citizenship advice"
        image="/images/team-consulting.png"
        url="https://www.getsecondpassport.eu/contact"
      />
      <div className="bg-white">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-[#0f3460] to-[#1a5276] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Get in touch with our expert team to start your citizenship or residency journey
            </p>
          </div>
        </section>
        
        <Contact />
      </div>
    </>
  );
}
