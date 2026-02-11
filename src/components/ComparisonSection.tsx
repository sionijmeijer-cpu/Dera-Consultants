import { CheckCircle, AlertCircle } from 'lucide-react';

export default function ComparisonSection() {
  const beforePoints = [
    'Unclear Direction',
    'Uncertainty about which country or program fits your goals and lifestyle.',
    'Limited Visibility',
    'Lack of clear information about legitimate residency and citizenship options.',
    'Single-Jurisdiction Risk',
    'Reliance on one country for residence, mobility, and long-term security.',
    'No Structured Plan',
    'No clear roadmap for obtaining a second residency or citizenship.',
    'Complex Process',
    'Confusion around requirements, timelines, and documentation.'
  ];

  const afterPoints = [
    'Clear Strategy',
    'A defined path based on your mobility goals, family needs, and long-term plans.',
    'Informed Decisions',
    'Clear guidance on suitable residency and citizenship programs.',
    'Greater Global Mobility',
    'Access to additional jurisdictions for travel, lifestyle, and opportunity.',
    'A Structured Plan B',
    'A second residency or citizenship that supports your international flexibility.',
    'Single Point of Contact',
    'Hands-on guidance from start to finish, with coordination of licensed professionals and relocation support when needed.'
  ];

  return (
    <div className="bg-white dark:bg-gray-900 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            How We Simplify Your Second Citizenship Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transform uncertainty into clarity. See the difference working with Dera Consultants makes.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Before Card */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 lg:p-10 border-2 border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-red-100 dark:bg-red-900/30 w-12 h-12 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Before Working With Us
              </h3>
            </div>

            <div className="space-y-6">
              {/* Group points in pairs */}
              {[0, 2, 4, 6, 8].map((index) => (
                <div key={index} className="pb-6 border-b border-gray-200 dark:border-gray-700 last:border-b-0 last:pb-0">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">
                    {beforePoints[index]}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {beforePoints[index + 1]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* After Card */}
          <div className="bg-gradient-to-br from-[#1B7A4E]/10 to-[#1B7A4E]/5 dark:from-[#1B7A4E]/20 dark:to-[#1B7A4E]/10 rounded-2xl p-8 lg:p-10 border-2 border-[#1B7A4E]">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#1B7A4E]/20 dark:bg-[#1B7A4E]/30 w-12 h-12 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-[#1B7A4E]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Working With Us
              </h3>
            </div>

            <div className="space-y-6">
              {/* Group points in pairs */}
              {[0, 2, 4, 6, 8].map((index) => (
                <div key={index} className="pb-6 border-b border-[#1B7A4E]/30 dark:border-[#1B7A4E]/40 last:border-b-0 last:pb-0">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg flex items-center gap-2">
                    <span className="text-[#1B7A4E]">✓</span>
                    {afterPoints[index]}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {afterPoints[index + 1]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <button
            onClick={() => {
              const event = new CustomEvent('openScheduleModal');
              window.dispatchEvent(event);
            }}
            className="px-8 py-4 bg-[#1B7A4E] text-white font-semibold rounded-lg
                       hover:bg-[#156B3F] hover:shadow-xl hover:scale-105
                       transition-all duration-200 shadow-md"
          >
            Become a client today
          </button>
        </div>
      </div>
    </div>
  );
}
