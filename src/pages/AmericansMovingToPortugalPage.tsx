import { ArrowRight, CheckCircle, CircleDollarSign, Laptop, Home } from 'lucide-react';

export default function AmericansMovingToPortugalPage() {
  const visaOptions = [
    {
      title: 'D7 Visa',
      icon: <Home className="w-6 h-6 text-[#1B7A4E]" />,
      description:
        'Often considered by retirees and individuals with passive income who want to establish residency in Portugal.',
      bullets: [
        'Passive income route',
        'Popular with retirees',
        'Good for long-term relocation',
      ],
    },
    {
      title: 'D8 Visa',
      icon: <Laptop className="w-6 h-6 text-[#1B7A4E]" />,
      description:
        'Commonly used by remote workers and independent professionals earning from outside Portugal.',
      bullets: [
        'For remote income',
        'Designed for location flexibility',
        'Strong option for digital professionals',
      ],
    },
    {
      title: 'Golden Visa',
      icon: <CircleDollarSign className="w-6 h-6 text-[#1B7A4E]" />,
      description:
        'A route considered by higher-net-worth individuals who want residency through qualifying investment structures.',
      bullets: [
        'Investment-based pathway',
        'Often used by global investors',
        'Requires careful case review',
      ],
    },
  ];

  return (
    <div className="bg-white">
      <section className="bg-[#0f3460] text-white py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-white/75 mb-5">
            For US Citizens
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Moving to Portugal from the US starts with choosing the right route
          </h1>

          <p className="text-lg sm:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-10">
            We help Americans understand which Portugal residency pathway may fit
            their income, goals, and timeline so they can move forward with more
            clarity and fewer costly mistakes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                const event = new CustomEvent('openScheduleModal');
                window.dispatchEvent(event);
              }}
              className="inline-flex items-center justify-center gap-2 bg-[#1B7A4E] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#156B3F] transition-all duration-200 min-w-[240px]"
            >
              Book a strategy call
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="#visa-options"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-200 min-w-[240px]"
            >
              Explore visa options
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#1B7A4E] mb-4">
              Why Portugal
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
              Portugal is appealing, but the process is not always simple
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Many Americans are drawn to Portugal for lifestyle, safety, healthcare,
              and long-term flexibility. The difficulty is not the dream. It is
              understanding which route actually fits your case.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl border border-gray-200 p-8 bg-gray-50">
              <h3 className="text-xl font-bold text-gray-900 mb-3">More clarity</h3>
              <p className="text-gray-600 leading-relaxed">
                Understand which route makes sense instead of wasting time on the wrong one.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-8 bg-gray-50">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Better planning</h3>
              <p className="text-gray-600 leading-relaxed">
                Think through income, timing, family structure, and long-term goals properly.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-8 bg-gray-50">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fewer mistakes</h3>
              <p className="text-gray-600 leading-relaxed">
                Move forward with clearer expectations around the process and next steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="visa-options" className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#1B7A4E] mb-4">
              Main Pathways
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
              Common Portugal routes Americans explore
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The best path depends on your income structure, personal goals, and how
              you want your move to work in practice.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {visaOptions.map((option) => (
              <div
                key={option.title}
                className="rounded-3xl border border-gray-200 bg-white p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1B7A4E]/10 flex items-center justify-center mb-6">
                  {option.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {option.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {option.description}
                </p>

                <div className="space-y-3">
                  {option.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#1B7A4E] mt-0.5 shrink-0" />
                      <p className="text-gray-700 leading-relaxed">{bullet}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#1B7A4E] mb-4">
              How We Help
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
              Support built around clarity and fit
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Not every American considering Portugal should follow the same path.
              The goal is to help you understand what makes sense before you commit time and money.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl border border-gray-200 p-8">
              <div className="text-sm font-semibold text-[#1B7A4E] mb-3">01</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Review your situation</h3>
              <p className="text-gray-600 leading-relaxed">
                We look at your income type, family structure, and relocation goals.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-8">
              <div className="text-sm font-semibold text-[#1B7A4E] mb-3">02</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Identify the right route</h3>
              <p className="text-gray-600 leading-relaxed">
                We help you narrow down which pathway deserves serious attention.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-8">
              <div className="text-sm font-semibold text-[#1B7A4E] mb-3">03</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Move forward with structure</h3>
              <p className="text-gray-600 leading-relaxed">
                You get a clearer next step and guidance that reduces confusion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0f3460] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-white/75 mb-4">
            Next Step
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold mb-5">
            Want clarity on your best Portugal option?
          </h2>

          <p className="text-lg text-white/85 leading-relaxed mb-8 max-w-2xl mx-auto">
            Book a strategy call if you want a clearer view of which Portugal route
            may suit your case and what to think about before moving forward.
          </p>

          <button
            onClick={() => {
              const event = new CustomEvent('openScheduleModal');
              window.dispatchEvent(event);
            }}
            className="inline-flex items-center justify-center gap-2 bg-[#1B7A4E] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#156B3F] transition-all duration-200"
          >
            Book a strategy call
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
