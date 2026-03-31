import { useState } from 'react';
import PortugalEligibilityCalculator from '../PortugalEligibilityCalculator';

interface PortugalEuropeProps {
  onScheduleCall: () => void;
}

const visaTypes = [
  {
    id: 'D7',
    title: 'D7 Visa: Passive Income and Retirees',
    tag: 'Most popular for retirees and families',
    tagColor: 'bg-emerald-100 text-emerald-800',
    details:
      'If you live off a pension, rental income, dividends, or savings, the D7 is usually the most straightforward path. Portugal sets a minimum monthly income threshold, roughly €820 per month for a single applicant as of 2024, though this changes, and you need to show you can sustain yourself without working locally. It suits retirees and families who want a clean, stable move. One thing people often miss: you do need to spend meaningful time in Portugal each year, so this is not a leave and forget visa.',
  },
  {
    id: 'D8',
    title: 'D8 Visa: Digital Nomads and Remote Workers',
    tag: 'Best for remote professionals',
    tagColor: 'bg-blue-100 text-blue-800',
    details:
      'Launched in 2022, the D8 was built specifically for people earning remotely: freelancers, contractors, remote employees. You need to show income from outside Portugal, typically at least 4x the Portuguese minimum wage, and you can keep doing exactly what you do now, just from Lisbon or the Algarve instead. The key question we always ask clients: is your income truly remote in the eyes of the consulate? Some situations are less clear-cut than they appear.',
  },
  {
    id: 'D2',
    title: 'D2 Visa: Entrepreneurs and Business Founders',
    tag: 'For founders building in Portugal',
    tagColor: 'bg-purple-100 text-purple-800',
    details:
      'The D2 is for people who want to start or grow a business in Portugal. Unlike the D7 or D8, you are not just living there, you are creating economic activity. This means a credible business plan, demonstrated capacity to execute, and in some cases a minimum investment or job creation component. The approval process is more subjective than other visas, which is honestly where good advisory makes a real difference.',
  },
  {
    id: 'Golden',
    title: 'Portugal Golden Visa: Investment Route',
    tag: 'Residency without relocating',
    tagColor: 'bg-amber-100 text-amber-800',
    details:
      'The Golden Visa changed significantly in 2023. Real estate is no longer a qualifying investment in most areas, which surprised a lot of people. The current routes focus on fund investments, research donations, and business creation. The big appeal remains: you only need to spend 7 days per year in Portugal to maintain residency, and after 5 years you can apply for citizenship. It is the route for people who want optionality, a Portuguese passport eventually, without uprooting their life right now.',
  },
];

const reasons = [
  {
    icon: '🛂',
    title: 'Schengen travel without the hassle',
    body: 'Portuguese residency gives you freedom of movement across 27 Schengen countries. For non-EU citizens, this alone transforms how you travel and work in Europe.',
  },
  {
    icon: '☀️',
    title: 'A pace of life most places cannot match',
    body: '300 plus days of sunshine, affordable cost of living compared to Western Europe, and a genuine sense of safety. Lisbon, Porto, and the Algarve attract people who have been everywhere and still choose to stay.',
  },
  {
    icon: '💶',
    title: 'Tax planning opportunities',
    body: 'Portugal\'s NHR regime, now transitioning to IFICI, has attracted thousands of high-earning professionals and retirees. Tax planning is highly personal, but the options here are real and worth understanding.',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Family-friendly residency routes',
    body: 'Most visa routes allow you to include a spouse and dependent children. Family reunification rules in Portugal are relatively straightforward compared to many EU countries.',
  },
  {
    icon: '🇵🇹',
    title: 'A realistic path to a second passport',
    body: 'After 5 years of legal residency, you can apply for Portuguese citizenship, one of the world\'s most powerful passports with visa-free access to 190 plus countries. Many clients treat residency as step one of a longer plan.',
  },
  {
    icon: '🏥',
    title: 'Healthcare that works',
    body: 'The public SNS system is genuinely good, and private healthcare costs a fraction of what you\'d pay in the US or UK. Many expats use a mix of both.',
  },
];

const mistakes = [
  {
    icon: '🔀',
    title: 'Picking the visa you like, not the one that fits',
    body: 'The D8 sounds appealing to almost everyone. But if your income structure does not clearly qualify, you risk a rejection that complicates future applications.',
  },
  {
    icon: '📆',
    title: 'Underestimating the timeline',
    body: 'Consulate appointments can be booked out 3 to 6 months in advance. Add document apostilles, translations, and AIMA processing and you are often looking at 12 to 18 months from start to approval.',
  },
  {
    icon: '📰',
    title: 'Trusting outdated forum advice',
    body: 'Portuguese immigration rules changed significantly in 2022, 2023, and 2024. What worked for someone three years ago, including on the Golden Visa, may no longer apply.',
  },
];

export default function PortugalEurope({ onScheduleCall }: PortugalEuropeProps) {
  const [expandedVisa, setExpandedVisa] = useState<string | null>('D7');

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
          <span className="inline-block text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Portugal Residency
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            D7, D8, D2, or Golden Visa. Which one actually fits your situation?
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            There is no shortage of information about moving to Portugal. What is harder to find is someone who will tell you honestly which route makes sense for your income, your timeline, and your family, and which ones to avoid.
          </p>
          <div className="flex justify-center">
            <button
              onClick={onScheduleCall}
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-emerald-500/30 hover:scale-105"
            >
              Talk through your options
            </button>
          </div>
        </div>
      </section>

      {/* 2. RESIDENCY ROUTES + CALCULATOR */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            The four main residency routes
          </h2>
          <p className="text-gray-500 mb-10 text-lg">
            Click each one to see what it actually involves, not just the headline, but the details that matter.
          </p>

          <div className="space-y-3 mb-16">
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
                      onClick={onScheduleCall}
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

        <PortugalEligibilityCalculator onScheduleCall={onScheduleCall} />
      </section>

      {/* 3. WHY PORTUGAL */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            What actually draws people here
          </h2>
          <p className="text-gray-500 text-lg mb-12">
            Beyond the lifestyle content. The practical reasons our clients choose Portugal.
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

      {/* 4. WHAT GOES WRONG + CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Where the process tends to go wrong
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            These are not rare edge cases. We see each of these regularly.
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

          <div className="text-center border-t border-white/10 pt-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Not sure which route is right for you?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              A 30-minute call is usually enough to give you a clear answer. We will look at your income, your situation, and your timeline and tell you honestly what we think the right path is, and whether we can help.
            </p>
            <button
              onClick={onScheduleCall}
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-emerald-500/20"
            >
              Book a free strategy call
            </button>
            <p className="text-gray-500 text-sm mt-4">No commitment. No sales pitch. Just a straight conversation.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
