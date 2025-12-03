import { SEOHead } from '../components/SEOHead';
import FAQ from '../components/FAQ';

interface FAQPageProps {
  onScheduleCall: () => void;
}

export default function FAQPage({ onScheduleCall }: FAQPageProps) {
  return (
    <>
      <SEOHead
        title="Second Passport & Residency FAQs | Dera Consultants"
        description="Answers to common questions about second passports, citizenship by investment, EU residency, timelines, costs, and eligibility."
        keywords="FAQ, second passport, citizenship by investment, residency FAQ, EU residency, caribbean citizenship"
        image="/images/document-process.png"
        url="https://www.getsecondpassport.eu/faq"
      />
      <div className="bg-white">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-[#0f3460] to-[#1a5276] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Find answers to common questions about citizenship and residency programs
            </p>
          </div>
        </section>
        
        <FAQ onScheduleCall={onScheduleCall} />
      </div>
    </>
  );
}
