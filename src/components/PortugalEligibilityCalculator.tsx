import { useMemo, useState } from 'react';

interface PortugalEligibilityCalculatorProps {
  onScheduleCall: () => void;
}

type IncomeSource = 'remote' | 'passive' | 'business' | 'other' | '';
type FamilyStatus = 'alone' | 'family' | '';
type Timeline = 'now' | '3to6' | '6plus' | '';
type HelpChoice = 'yes' | 'no' | '';

export default function PortugalEligibilityCalculator({
  onScheduleCall,
}: PortugalEligibilityCalculatorProps) {
  const [incomeSource, setIncomeSource] = useState<IncomeSource>('');
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [familyStatus, setFamilyStatus] = useState<FamilyStatus>('');
  const [timeline, setTimeline] = useState<Timeline>('');
  const [helpChoice, setHelpChoice] = useState<HelpChoice>('');
  const [showResult, setShowResult] = useState(false);

  const parsedIncome = useMemo(() => {
    const numeric = Number(monthlyIncome.replace(/[^0-9.]/g, ''));
    return Number.isNaN(numeric) ? 0 : numeric;
  }, [monthlyIncome]);

  const isComplete =
    incomeSource !== '' &&
    monthlyIncome.trim() !== '' &&
    familyStatus !== '' &&
    timeline !== '' &&
    helpChoice !== '';

  const result = useMemo(() => {
    if (!showResult || !isComplete) return null;

    if (incomeSource === 'passive') {
      if (parsedIncome >= 1000) {
        return {
          visa: 'D7 Visa',
          summary:
            'Based on your answers, the D7 looks like the strongest starting point.',
          details:
            'This route is usually the best fit for applicants relying on passive income such as pensions, rental income, dividends, or savings support.',
        };
      }

      return {
        visa: 'D7 Visa may be difficult right now',
        summary:
          'You may be aiming for the D7, but your stated income may be too low for a strong application.',
        details:
          'You may need to improve the financial profile, review family costs, or consider whether another route is more realistic.',
      };
    }

    if (incomeSource === 'remote') {
      if (parsedIncome >= 3000) {
        return {
          visa: 'D8 Digital Nomad Visa',
          summary:
            'Based on your answers, the D8 looks like the strongest starting point.',
          details:
            'This route is usually the best fit for remote workers, contractors, and internationally employed professionals who want to live in Portugal legally.',
        };
      }

      return {
        visa: 'D8 may be difficult right now',
        summary:
          'You may be aiming for the digital nomad route, but your stated income may not be strong enough.',
        details:
          'It would be worth reviewing your work setup, income level, and whether another route could be a better fit.',
      };
    }

    if (incomeSource === 'business') {
      return {
        visa: 'D2 Entrepreneur Visa',
        summary:
          'Based on your answers, the D2 looks like the strongest starting point.',
        details:
          'This route is often used by founders, freelancers with a business structure, and entrepreneurs planning activity in Portugal.',
      };
    }

    return {
      visa: 'More than one route may fit',
      summary:
        'Your situation may need a closer review before choosing the best route.',
      details:
        'A short strategy call would help determine whether D7, D8, or D2 makes the most sense based on your timing, income, and relocation goals.',
    };
  }, [showResult, isComplete, incomeSource, parsedIncome]);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold tracking-[0.18em] uppercase text-[#1B7A4E] mb-4">
              Portugal visa check
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              See which Portugal route may fit you
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Answer a few quick questions to get a simple starting point for
              D7, D8, or D2.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                What best describes your income source
              </label>
              <select
                value={incomeSource}
                onChange={(e) => setIncomeSource(e.target.value as IncomeSource)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1B7A4E]"
              >
                <option value="">Select one</option>
                <option value="remote">Remote work</option>
                <option value="passive">Passive income</option>
                <option value="business">Business or self employment</option>
                <option value="other">Other or not sure</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                What is your approximate monthly income in euros
              </label>
              <input
                type="text"
                inputMode="decimal"
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(e.target.value)}
                placeholder="Example 3000"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1B7A4E]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Are you moving alone or with family
              </label>
              <select
                value={familyStatus}
                onChange={(e) => setFamilyStatus(e.target.value as FamilyStatus)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1B7A4E]"
              >
                <option value="">Select one</option>
                <option value="alone">Alone</option>
                <option value="family">With family</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                When are you planning to move
              </label>
              <select
                value={timeline}
                onChange={(e) => setTimeline(e.target.value as Timeline)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1B7A4E]"
              >
                <option value="">Select one</option>
                <option value="now">As soon as possible</option>
                <option value="3to6">Within 3 to 6 months</option>
                <option value="6plus">More than 6 months from now</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Do you want professional help with the process
              </label>
              <select
                value={helpChoice}
                onChange={(e) => setHelpChoice(e.target.value as HelpChoice)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1B7A4E]"
              >
                <option value="">Select one</option>
                <option value="yes">Yes</option>
                <option value="no">Not yet</option>
              </select>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setShowResult(true)}
              disabled={!isComplete}
              className="px-8 py-4 bg-[#1B7A4E] text-white font-semibold rounded-xl hover:bg-[#156B3F] transition-all duration-200 shadow-md disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Check my options
            </button>

            <button
              onClick={() => {
                setIncomeSource('');
                setMonthlyIncome('');
                setFamilyStatus('');
                setTimeline('');
                setHelpChoice('');
                setShowResult(false);
              }}
              className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-xl border border-gray-300 hover:bg-gray-50 transition-all duration-200"
            >
              Reset
            </button>
          </div>

          {result && (
            <div className="mt-10 rounded-2xl border border-green-200 bg-green-50 p-6 sm:p-8">
              <p className="text-sm font-semibold tracking-[0.18em] uppercase text-[#1B7A4E] mb-3">
                Your result
              </p>

              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                {result.visa}
              </h3>

              <p className="text-lg text-gray-800 mb-4 leading-relaxed">
                {result.summary}
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                {result.details}
              </p>

              <div className="bg-white border border-green-200 rounded-2xl p-5">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Recommended next step
                </h4>
                <p className="text-gray-700 mb-5 leading-relaxed">
                  A strategy call can confirm the best route and help you avoid
                  wasting time on the wrong application path.
                </p>

                <button
                  onClick={onScheduleCall}
                  className="px-6 py-3 bg-[#1B7A4E] text-white font-semibold rounded-xl hover:bg-[#156B3F] transition-all duration-200 shadow-md"
                >
                  Book a strategy call
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
