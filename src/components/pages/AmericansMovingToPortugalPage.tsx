import { useState } from 'react';

interface AmericansMovingToPortugalPageProps {
  onScheduleCall?: () => void;
}

const US_GREAT_SEAL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Great_Seal_of_the_United_States_%28obverse%29.svg/80px-Great_Seal_of_the_United_States_%28obverse%29.svg.png';

const visaTypes = [
  {
    id: 'D7',
    title: 'D7 Visa: Passive Income and Retirees',
    tag: 'Most popular for US retirees',
    tagColor: 'bg-emerald-100 text-emerald-800',
    details:
      'If your income comes from a pension, Social Security, rental property, dividends, or savings, the D7 is usually where Americans start. Portugal sets a minimum monthly income threshold, roughly €820 per month for a single applicant as of 2024, and you need to show you can sustain yourself without working locally. You do need to spend meaningful time in Portugal each year, so this is not a leave and forget visa. For US retirees specifically, coordinating Social Security with Portuguese tax residency needs early attention.',
  },
  {
    id: 'D8',
    title: 'D8 Visa: Remote Workers and Freelancers',
    tag: 'Best for Americans earning remotely',
    tagColor: 'bg-blue-100 text-blue-800',
    details:
      'Built for people working remotely for companies or clients outside Portugal. If you are a freelancer, contractor, or remote employee earning in USD, this is the route most Americans explore first. Your income threshold, typically 4x the Portuguese minimum wage, and your contract arrangement both need to hold up under consulate review. One thing that trips people up: not all remote employment structures are equal in the eyes of the consulate. We always review this carefully with US clients before they apply.',
  },
  {
    id: 'Golden',
    title: 'Portugal Golden Visa: Investment Route',
    tag: 'Residency without relocating',
    tagColor: 'bg-amber-100 text-amber-800',
    details:
      'Suits Americans who want a path to Portuguese residency and eventual citizenship without relocating right away. The real estate route closed in most areas in 2023, so qualifying investments now focus on funds and specific economic contributions. You only need to spend 7 days per year in Portugal to maintain it, and after 5 years you can apply for citizenship. For Americans specifically, the PFIC rules around Portuguese investment funds can create US tax complications worth reviewing with an expat tax advisor before committing.',
  },
];

const reasons = [
  {
    icon: '🛂',
    title: 'Schengen access from day one',
    body: 'A Portuguese residence permit gives you the right to travel across 27 Schengen countries without a visa. For Americans who travel to Europe frequently for business or personal reasons, this changes the picture considerably.',
  },
  {
    icon: '💵',
    title: 'Your dollar goes further',
    body: 'Groceries, restaurants, healthcare, and day-to-day living cost significantly less than in major US cities. Many of our American clients are genuinely surprised by how far their income stretches once they are here.',
  },
  {
    icon: '🏥',
    title: 'Healthcare without the complexity',
    body: 'Private health insurance in Portugal costs a fraction of US premiums and covers a high standard of care. This is one of the most common things Americans mention in the first year after making the move.',
  },
  {
    icon: '🇵🇹',
    title: 'A realistic path to a second passport',
    body: 'After 5 years of legal residency, you can apply for Portuguese citizenship and one of the strongest passports in the world. Many Americans treat Portugal residency as step one of a longer plan rather than just a lifestyle move.',
  },
  {
    icon: '🏫',
    title: 'Established expat infrastructure',
    body: 'Lisbon, Porto, and the Algarve have well-developed international school networks, English-speaking professional communities, and services built around relocating families.',
  },
  {
    icon: '☀️',
    title: 'Quality of life that holds up long term',
    body: 'Safety, climate, walkability, food, and a slower pace. People who visit on holiday and people who have lived there for years tend to say the same thing. Portugal keeps people.',
  },
];

const mistakes = [
  {
    icon: '💸',
    title: 'Missing the US tax dimension',
    body: 'Americans are taxed on worldwide income regardless of where they live. The NHR and IFICI regimes in Portugal interact with your US obligations in ways that need coordinating between a Portuguese and a US expat tax advisor. Most people find out about this too late.',
  },
  {
    icon: '📆',
    title: 'Underestimating consulate wait times',
    body: 'US consulate appointments for Portuguese visas are booked out months in advance in New York, San Francisco, and Boston. Factor this into your timeline from the start, not after you have already committed to a move date.',
  },
  {
    icon: '📰',
    title: 'Relying on Facebook groups and Reddit threads',
    body: 'Portugal immigration rules changed significantly in 2022, 2023, and 2024. These communities are full of well-meaning people sharing experiences that may no longer be accurate. Outdated advice is genuinely common and genuinely costly.',
  },
];

export default function AmericansMovingToPortugalPage({ onScheduleCall }: AmericansMovingToPortugalPageProps) {
  const [expandedVisa, setExpandedVisa] = useState<string | null>('D7');

  const handleScheduleCall = () => {
    if (onScheduleCall) {
      onScheduleCall();
    } else {
      const event = new CustomEvent('openScheduleModal');
      window.dispatchEvent(event);
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* 1. HERO */}
      <section className="relative min-h-[580px] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?auto=format&fit=crop&w=1920&q=80"
            alt="Lisbon Portugal rooftop view with red rooftops and the Tagus river"
            className="w-full h-full object-cover"
            loading="eager"
            width="1920"
            height="580"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/10" />
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10 py-24">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img
              src={US_GREAT_SEAL}
              alt="Great Seal of the United States"
              className="h-8 w-8 object-contain opacity-90"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase">
              For US Citizens
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Moving to Portugal from the US starts with choosing the right route
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Portugal is one of the best options for Americans who want a life in Europe. The hard part is understanding which visa fits your income, your family, and your timeline, and avoiding the mistakes that are specific to moving from the US.
          </p>
          <div className="flex justify-center">
            <button
              onClick={handleScheduleCall}
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-emerald-500/30 hover:scale-105"
            >
              Talk through your options
            </button>
          </div>
        </div>
      </section>

      {/* 2. VISA ROUTES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            The three routes most Americans explore
          </h2>
          <p className="text-gray-500 mb-10 text-lg">
            The right one depends on how you earn and what you want the move to look like in practice.
          </p>

          <div className="space-y-3">
            {visaTypes.map((visa) => (
              <div
                key={visa.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-shadow hover:shadow-md"
              >
                <button
                  onClick={() => setExpandedVisa(expandedVisa === visa.id ? null : visa.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{visa.title}</h3>
                    <span className={`mt-1 inline-block text-xs font-medium px-2.5 py-0.5 rounded-full ${visa.tagColor}`}>
                      {visa.tag}
                    </span>
                  </div>
                  <span className={`ml-4 flex-shrink-0 text-emerald-600 text-xl transition-transform duration-200 ${expandedVisa === visa.id ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>

                {expandedVisa === visa.id && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100 bg-emerald-50/50">
                    <p className="text-gray-700 leading-relaxed text-base">{visa.details}</p>
                    <button
                      onClick={handleScheduleCall}
                      className="mt-4 text-sm font-semibold text-emerald-700 hover:text-emerald-900 underline underline-offset-2"
                    >
                      Ask us about this route
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY PORTUGAL FOR AMERICANS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Why Americans specifically choose Portugal
          </h2>
          <p className="text-gray-500 text-lg mb-12">
            Not just lifestyle. The practical reasons our US clients mention most.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-4">{r.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{r.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MISTAKES + CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Where Americans specifically run into trouble
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            These are patterns we see regularly with US clients. None of them are unavoidable with the right preparation.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {mistakes.map((m) => (
              <div
                key={m.title}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <div className="text-3xl mb-4">{m.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{m.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>


        </div>
      </section>

    </div>
  );
}
