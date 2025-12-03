import { useState } from 'react';
import { SEOHead } from '../SEOHead';

interface PortugalEuropeProps {
  onScheduleCall: () => void;
}

export default function PortugalEurope({ onScheduleCall }: PortugalEuropeProps) {
  const [expandedVisa, setExpandedVisa] = useState<string | null>(null);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Portugal & European Residency Programs",
    "description": "Explore Portugal and European residency programs including D2, D7, D8 visas and Golden Visa",
    "provider": {
      "@type": "Organization",
      "name": "Dera Consultants"
    },
    "areaServed": ["Portugal", "Europe", "EU"]
  };

  const visaTypes = [
    {
      id: 'D2',
      title: 'D2 Visa (Entrepreneur Visa)',
      details: 'Perfect for business owners and entrepreneurs looking to establish or expand a business in Portugal. Requires a solid business plan and investment in the Portuguese economy.'
    },
    {
      id: 'D7',
      title: 'D7 Visa (Passive Income Visa)',
      details: 'Ideal for individuals with passive income sources such as pensions, investments, or rental income. Requires EUR 1,000/month income with low documentation requirements.'
    },
    {
      id: 'D8',
      title: 'D8 Visa (Digital Nomad Visa)',
      details: 'Designed for remote workers and digital professionals. Requires EUR 2,700/month income and allows you to legally work for international clients while living in Portugal.'
    },
    {
      id: 'Golden',
      title: 'Portugal Golden Visa',
      details: 'The most attractive residency option with real estate investment of EUR 280,000+. Offers immediate residency, fast-track to citizenship (10 years), and family inclusion.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <SEOHead
        title="Portugal & European Residency Programs | D2, D7, D8 Visas & Golden Visa | Dera Consultants"
        description="Get Portugal and European residency through D2 (Entrepreneur), D7 (Passive Income), D8 (Digital Nomad) visas or Golden Visa. Expert immigration consulting."
        keywords="Portugal residency, European residency, D2 visa, D7 visa, D8 visa, Golden Visa, Portugal immigration"
        url="https://deraconsultants.com/portugal-residency"
        structuredData={structuredData}
      />
      {/* Hero Section with Image */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.pinimg.com/1200x/02/0a/10/020a10574717da0ffa52c256be187c22.jpg" 
            alt="Portugal Lisbon" 
            className="w-full h-full object-cover opacity-20"
            loading="lazy"
            width="1920"
            height="800"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Portugal & European Residency
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover the Gateway to Europe with Portugal's Pathways
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Portugal offers one of the most attractive routes to European residence and citizenship, combining affordable investment options, a high quality of life, and freedom of movement across the Schengen Zone. At Dera Consultants, we help you navigate these opportunities and find the best strategy tailored to your goals.
          </p>
        </div>
      </section>

      {/* Programs Section - Accordion */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Portugal's Pathways to Residency
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Supported by Dera
          </p>
          
          <div className="space-y-4">
            {visaTypes.map((visa) => (
              <div key={visa.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setExpandedVisa(expandedVisa === visa.id ? null : visa.id)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-amber-50 transition-colors duration-200"
                >
                  <h3 className="text-xl font-bold text-gray-900 text-left">
                    {visa.title}
                  </h3>
                  <span className={`text-2xl text-amber-600 transform transition-transform duration-200 ${expandedVisa === visa.id ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                
                {expandedVisa === visa.id && (
                  <div className="px-6 py-4 bg-amber-50 border-t border-amber-200">
                    <p className="text-gray-700 leading-relaxed">
                      {visa.details}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Benefits of Portugal & European Residency
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-amber-50 rounded-xl p-8 border border-amber-200">
              <h3 className="text-2xl font-bold text-amber-600 mb-4">Freedom of Movement</h3>
              <p className="text-gray-700">Travel across all Schengen countries without restrictions.</p>
            </div>
            <div className="bg-amber-50 rounded-xl p-8 border border-amber-200">
              <h3 className="text-2xl font-bold text-amber-600 mb-4">EU Rights</h3>
              <p className="text-gray-700">Access to work, study, and establish business across the EU.</p>
            </div>
            <div className="bg-amber-50 rounded-xl p-8 border border-amber-200">
              <h3 className="text-2xl font-bold text-amber-600 mb-4">Quality of Life</h3>
              <p className="text-gray-700">Excellent healthcare, safety, climate, and vibrant culture.</p>
            </div>
            <div className="bg-amber-50 rounded-xl p-8 border border-amber-200">
              <h3 className="text-2xl font-bold text-amber-600 mb-4">Tax Incentives</h3>
              <p className="text-gray-700">Favorable tax regimes, including non-habitual resident programs.</p>
            </div>
            <div className="bg-amber-50 rounded-xl p-8 border border-amber-200">
              <h3 className="text-2xl font-bold text-amber-600 mb-4">Family Inclusion</h3>
              <p className="text-gray-700">Spouses, children, and dependent relatives can often be included.</p>
            </div>
            <div className="bg-amber-50 rounded-xl p-8 border border-amber-200">
              <h3 className="text-2xl font-bold text-amber-600 mb-4">Path to EU Citizenship</h3>
              <p className="text-gray-700">Citizenship granted after 5 years, allowing full EU benefits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Europe Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Why Choose Europe?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-amber-600 mb-3">EU Freedom</h3>
              <p className="text-gray-700">Travel, live, and work freely across 27 EU countries.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold text-amber-600 mb-3">Healthcare</h3>
              <p className="text-gray-700">Access world-class healthcare systems in European countries.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-amber-600 mb-3">Education</h3>
              <p className="text-gray-700">Quality education for your family at affordable costs.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-2xl font-bold text-amber-600 mb-3">Career Growth</h3>
              <p className="text-gray-700">Unlimited job opportunities across Europe's strong economies.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🏘️</div>
              <h3 className="text-2xl font-bold text-amber-600 mb-3">Lifestyle</h3>
              <p className="text-gray-700">Enjoy rich culture, cuisine, and vibrant communities.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-amber-600 mb-3">Security</h3>
              <p className="text-gray-700">Safe, stable, and politically secure living environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Your European Journey Today
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Get personalized guidance on the best residency program for your goals and circumstances.
          </p>
          <button 
            onClick={onScheduleCall}
            className="px-8 py-4 bg-white text-amber-600 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-bold text-lg"
          >
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}