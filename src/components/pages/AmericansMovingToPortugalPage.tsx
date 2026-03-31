import { ArrowRight, CheckCircle, CircleDollarSign, Laptop, Home } from 'lucide-react';

const visaOptions = [
  {
    title: 'D7 Visa',
    icon: <Home className="w-6 h-6 text-emerald-600" />,
    tag: 'Best for retirees and passive income',
    tagColor: 'bg-emerald-100 text-emerald-800',
    description:
      'If your income comes from a pension, rental property, dividends, or savings, the D7 is usually where Americans start. You need to show sustainable passive income and spend meaningful time in Portugal each year. One of the more predictable routes if your financial picture is clean.',
    bullets: [
      'Designed for passive income earners',
      'Popular choice for early retirees',
      'Requires proof of consistent, stable income',
    ],
  },
  {
    title: 'D8 Visa',
    icon: <Laptop className="w-6 h-6 text-emerald-600" />,
    tag: 'Best for remote workers',
    tagColor: 'bg-blue-100 text-blue-800',
    description:
      'Built for people working remotely for companies or clients outside Portugal. If you are a freelancer, contractor, or remote employee earning in USD, this is the route most Americans explore first. Your income threshold and contract arrangement both need to hold up under consulate review.',
    bullets: [
      'For remote employees and freelancers',
      'Income must come from outside Portugal',
      'No need to change your current work setup',
    ],
  },
  {
    title: 'Golden Visa',
    icon: <CircleDollarSign className="w-6 h-6 text-emerald-600" />,
    tag: 'Best for investors who want flexibility',
    tagColor: 'bg-amber-100 text-amber-800',
    description:
      'Suits Americans who want a path to Portuguese residency and eventual citizenship without relocating immediately. The real estate route closed in most areas in 2023, so qualifying investments now focus on funds and specific economic contributions. Only 7 days per year in Portugal required to maintain it.',
    bullets: [
      'Minimal residency requirement',
      'Investment rather than income based',
      'Leads to citizenship eligibility after 5 years',
    ],
  },
];

const whyPortugal = [
  {
    icon: '🛂',
    title: 'Schengen access from day one',
    body: 'A Portuguese residence permit gives you the right to travel across 27 Schengen countries without a visa. For Americans who travel to Europe frequently, this changes things considerably.',
  },
  {
    icon: '💵',
    title: 'Your dollar goes further',
    body: 'Compared to most Western European countries, Portugal is genuinely affordable. Groceries, restaurants, healthcare, and day-to-day living cost significantly less than in major US cities.',
  },
  {
    icon: '🏥',
    title: 'Healthcare without the complexity',
    body: 'Private health insurance in Portugal costs a fraction of US premiums and covers a high standard of care. This is one of the things Americans mention most after they make the move.',
  },
  {
    icon: '🇵🇹',
    title: 'A realistic path to a second passport',
    body: 'After 5 years of legal residency, you can apply for Portuguese citizenship and one of the strongest passports in the world. Many Americans treat residency as step one of a longer plan.',
  },
  {
    icon: '🏫',
    title: 'Established expat infrastructure',
    body: 'Lisbon, Porto, and the Algarve have well-developed international school networks, English-speaking communities, and services built around relocating families.',
  },
  {
    icon: '☀️',
    title: 'Quality of life that holds up long term',
    body: 'Safety, climate, walkability, food, and a slower pace. People who visit on holiday and people who have lived there for years tend to say the same thing. Portugal keeps people.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Understand your income and situation',
    body: 'We look at how you earn, your family structure, and what you want the move to look like. This shapes which route deserves attention and which to rule out early.',
  },
  {
    num: '02',
    title: 'Get clear on the right route',
    body: 'You get a straight assessment of which visa path fits your case, what the realistic requirements are, and where the potential complications are. Your situation specifically.',
  },
  {
    num: '03',
    title: 'Move forward with a real plan',
    body: 'You leave knowing what to do next, in what order, and what to watch out for. For clients who want ongoing support through the application, we stay involved throughout.',
  },
];

export default function AmericansMovingToPortugalPage() {
  const handleScheduleCall = () => {
    const event = new CustomEvent('openScheduleModal');
    window.dispatchEvent(event);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* 1. HERO */}
      <section className="relative min-h-[580px] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=80"
            alt="Porto Portugal colourful buildings along the Douro River"
            className="w-full h-full object-cover"
            loading="eager"
            width="1920"
            height="580"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/10" />
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10 py-24">
          <span className="inline-block text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-4">
            For US Citizens
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Moving to Portugal from the US starts with choosing the right route
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Portugal is one of the best options for Americans who want a life in Europe. The hard part is understanding which visa fits your income, your family, and your timeline, and avoiding the mistakes that slow most people down.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleScheduleCall}
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-emerald-500/30 hover:scale-105"
            >
              Book a strategy call
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="#visa-options"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-200"
            >
              Explore visa options
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. VISA OPTIONS */}
      <section id="visa-options" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            The three routes most Americans explore
          </h2>
          <p className="text-gray-500 text-lg mb-12">
            The right one depends on how you earn and what you want the move to look like in practice.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {visaOptions.map((option) => (
              <div
                key={option.title}
                className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-5">
                  {option.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{option.title}</h3>
                <span className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full mb-4 ${option.tagColor}`}>
                  {option.tag}
                </span>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">{option.description}</p>
                <div className="space-y-3 border-t border-gray-100 pt-5">
                  {option.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                      <p className="text-gray-700 text-sm leading-relaxed">{bullet}</p>
                    </div>
                  ))}
                </div>
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
            {whyPortugal.map((r) => (
              <div
                key={r.title}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-4">{r.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{r.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW WE HELP + CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            How a conversation with us works
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Most clients come in having read a lot. They leave with a clear picture of what their specific situation actually looks like.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {steps.map((step) => (
              <div key={step.num} className="bg-white/5 border border-white/10 rounded-xl p-8">
                <div className="text-sm font-semibold text-emerald-400 mb-3">{step.num}</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="text-center border-t border-white/10 pt-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to get a straight answer on your Portugal options?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              A 30-minute call is usually enough. We will look at your income, your family situation, and your timeline and tell you honestly which route makes sense and what to do next.
            </p>
            <button
              onClick={handleScheduleCall}
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-emerald-500/20"
            >
              Book a free strategy call
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-gray-500 text-sm mt-4">No commitment. No sales pitch. Just a straight conversation.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
