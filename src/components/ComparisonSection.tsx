import { CheckCircle, AlertCircle } from 'lucide-react';

export default function ComparisonSection() {
  const beforePoints = [
    {
      title: 'Too much conflicting information',
      description:
        'You are trying to compare residency and citizenship options on your own and everything starts to sound the same.',
    },
    {
      title: 'No clear fit',
      description:
        'It is not obvious which route matches your goals, timeline, family situation, or investment capacity.',
    },
    {
      title: 'Fear of making the wrong move',
      description:
        'A poor decision can cost time, money, and momentum, especially when requirements and processes are misunderstood.',
    },
    {
      title: 'No real plan',
      description:
        'You may know you want more mobility or a second option, but not what to do first or how to move forward properly.',
    },
  ];

  const afterPoints = [
    {
      title: 'A clearer starting point',
      description:
        'You understand which route makes sense for your situation and which ones are a waste of time.',
    },
    {
      title: 'Better decision making',
      description:
        'You get structured guidance around Portugal residency and second citizenship options based on your real priorities.',
    },
    {
      title: 'More confidence in the process',
      description:
        'You move forward with a clearer view of what is needed, what matters most, and where professional support is useful.',
    },
    {
      title: 'A practical plan forward',
      description:
        'You leave with a stronger sense of direction, a realistic next step, and support that stays organized from start to finish.',
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-[0.18em] uppercase text-[#1B7A4E] mb-4">
            What changes
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5">
            From uncertainty to a clearer path
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The goal is simple. Help you stop guessing, understand your options properly, and move forward with more clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-10 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Before working with us
              </h3>
            </div>

            <div className="space-y-6">
              {beforePoints.map((point, index) => (
                <div
                  key={index}
                  className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0"
                >
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                    {point.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1B7A4E]/10 to-[#1B7A4E]/5 rounded-3xl p-8 lg:p-10 border border-[#1B7A4E]/30 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#1B7A4E]/20 w-12 h-12 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-[#1B7A4E]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                After working with us
              </h3>
            </div>

            <div className="space-y-6">
              {afterPoints.map((point, index) => (
                <div
                  key={index}
                  className="pb-6 border-b border-[#1B7A4E]/20 last:border-b-0 last:pb-0"
                >
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg flex items-center gap-2">
                    <span className="text-[#1B7A4E]">✓</span>
                    {point.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 text-center">
          <button
            onClick={() => {
              const event = new CustomEvent('openScheduleModal');
              window.dispatchEvent(event);
            }}
            className="px-8 py-4 bg-[#1B7A4E] text-white font-semibold rounded-xl hover:bg-[#156B3F] hover:shadow-xl hover:scale-105 transition-all duration-200 shadow-md"
          >
            Book a strategy call
          </button>
        </div>
      </div>
    </section>
  );
}
