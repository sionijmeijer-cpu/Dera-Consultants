import { useState } from 'react';
import PortugalEligibilityCalculator from '../PortugalEligibilityCalculator';

interface PortugalEuropeProps {
  onScheduleCall: () => void;
}

export default function PortugalEurope({ onScheduleCall }: PortugalEuropeProps) {
  const [expandedVisa, setExpandedVisa] = useState<string | null>(null);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Portugal Residency Services",
    "description": "Explore Portugal residency options including D2, D7, D8, and the Golden Visa",
    "provider": {
      "@type": "Organization",
      "name": "Dera Consultants"
    },
    "areaServed": ["Portugal", "Europe", "EU"]
  };

  const visaTypes = [
    {
      id: 'D2',
      title: 'D2 Visa',
      details: 'Best suited to founders, entrepreneurs, and business owners who want to build or grow a business in Portugal. This route usually requires a credible plan and a business case that makes sense in practice.'
    },
    {
      id: 'D7',
      title: 'D7 Visa',
      details: 'A strong option for people living from passive income such as pensions, rental income, dividends, or savings support. This route is often chosen by retirees and families looking for a stable move to Portugal.'
    },
    {
      id: 'D8',
      title: 'D8 Visa',
      details: 'Made for remote workers and independent professionals earning from outside Portugal. This is usually the route people look at when they want to keep working online while living in Portugal.'
    },
    {
      id: 'Golden',
      title: 'Portugal Golden Visa',
      details: 'A residency route for investors who want flexibility and a long term path linked to Portugal. It tends to appeal to people who want to keep residence options open while spending limited time in the country.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
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
            Portugal residency options
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Looking at D7, D8, D2, or the Golden Visa and not sure what fits
            your case? Start here and get a clearer view of your options.
          </p>

          <button
            onClick={onScheduleCall}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Book a Portugal strategy call
          </button>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Portugal remains one of the strongest residency options in Europe for
            people who want a better lifestyle, more mobility, and a realistic
            long term plan. The challenge is not finding information. The
            challenge is choosing the right route and avoiding costly mistakes.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            At Dera Consultants, we help you understand which path makes sense
            for your income, your timeline, and your personal goals so you can
            move forward with more confidence and less guesswork.
          </p>
        </div>
      </section>

      <PortugalEligibilityCalculator onScheduleCall={onScheduleCall} />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Main Portugal residency routes
          </h2>

          <p className="text-center text-gray-600 mb-12 text-lg">
            A simple overview of the routes most people ask us about
          </p>

          <div className="space-y-4">
            {visaTypes.map((visa) => (
              <div key={visa.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setExpandedVisa(expandedVisa === visa.id ? null : visa.id)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-green-50 transition-colors duration-200"
                >
                  <h3 className="text-xl font-bold text-gray-900 text-left">
                    {visa.title}
                  </h3>

                  <span
                    className={`text-2xl text-[#1B7A4E] transform transition-transform duration-200 ${expandedVisa === visa.id ? 'rotate-180' : ''}`}
                  >
                    ▼
                  </span>
                </button>

                {expandedVisa === visa.id && (
                  <div className="px-6 py-4 bg-green-50 border-t border-green-200">
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

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Why people choose Portugal
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-green-50 rounded-xl p-8 border border-green-200">
              <h3 className="text-2xl font-bold text-[#1B7A4E] mb-4">Freedom to move</h3>
              <p className="text-gray-700">
                Portugal gives you access to the Schengen area and makes travel
                across much of Europe far easier.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-8 border border-green-200">
              <h3 className="text-2xl font-bold text-[#1B7A4E] mb-4">A better quality of life</h3>
              <p className="text-gray-700">
                Many people choose Portugal for the safety, climate, pace of
                life, healthcare, and everyday livability.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-8 border border-green-200">
              <h3 className="text-2xl font-bold text-[#1B7A4E] mb-4">A route for families too</h3>
              <p className="text-gray-700">
                Several residency routes can work for couples and families who
                want to relocate together.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-8 border border-green-200">
              <h3 className="text-2xl font-bold text-[#1B7A4E] mb-4">Work and business opportunities</h3>
              <p className="text-gray-700">
                Portugal can be attractive for remote professionals, founders,
                and people building a base in Europe.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-8 border border-green-200">
              <h3 className="text-2xl font-bold text-[#1B7A4E] mb-4">Long term security</h3>
              <p className="text-gray-700">
                For many applicants, residency in Portugal is part of a wider
                plan for stability, mobility, and future options.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-8 border border-green-200">
              <h3 className="text-2xl font-bold text-[#1B7A4E] mb-4">A path to citizenship</h3>
              <p className="text-gray-700">
                Portugal is often considered by people who want residency first
                and a possible citizenship path later on.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            What usually goes wrong
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">📄</div>
              <h3 className="text-2xl font-bold text-[#1B7A4E] mb-3">Wrong visa choice</h3>
              <p className="text-gray-700">
                Many people start with the route they like most instead of the
                route that actually fits their case.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">💶</div>
              <h3 className="text-2xl font-bold text-[#1B7A4E] mb-3">Weak financial planning</h3>
              <p className="text-gray-700">
                Income, timing, and family costs are often underestimated early
                in the process.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">⏳</div>
              <h3 className="text-2xl font-bold text-[#1B7A4E] mb-3">Leaving things too late</h3>
              <p className="text-gray-700">
                People often wait until the last minute, then discover documents,
                planning, and logistics take longer than expected.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold text-[#1B7A4E] mb-3">Ignoring the move itself</h3>
              <p className="text-gray-700">
                Residency is one part of the picture. Housing, schools, banking,
                and settling in also matter.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🧭</div>
              <h3 className="text-2xl font-bold text-[#1B7A4E] mb-3">Too much conflicting advice</h3>
              <p className="text-gray-700">
                Online forums and random videos create confusion fast, especially
                when everyone claims their route is the best one.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-[#1B7A4E] mb-3">No clear next step</h3>
              <p className="text-gray-700">
                Many applicants stay stuck in research mode because they do not
                know how to move from interest to action.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
