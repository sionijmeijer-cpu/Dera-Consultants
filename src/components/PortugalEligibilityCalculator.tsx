import { useMemo, useState } from 'react';

interface PortugalEligibilityCalculatorProps {
  onScheduleCall: () => void;
}

type IncomeSource = 'remote' | 'passive' | 'business' | 'other' | '';
type IncomeRange = 'under500' | '500to1000' | '1000to2500' | '2500to4000' | '4000plus' | '';
type FamilyStatus = 'alone' | 'family' | '';
type Timeline = 'now' | '3to6' | '6plus' | '';
type HelpChoice = 'yes' | 'no' | '';

export default function PortugalEligibilityCalculator({
  onScheduleCall,
}: PortugalEligibilityCalculatorProps) {
  const [incomeSource, setIncomeSource] = useState<IncomeSource>('');
  const [incomeRange, setIncomeRange] = useState<IncomeRange>('');
  const [familyStatus, setFamilyStatus] = useState<FamilyStatus>('');
  const [timeline, setTimeline] = useState<Timeline>('');
  const [helpChoice, setHelpChoice] = useState<HelpChoice>('');
  const [showResult, setShowResult] = useState(false);

  const isComplete =
    incomeSource !== '' &&
    incomeRange !== '' &&
    familyStatus !== '' &&
    timeline !== '' &&
    helpChoice !== '';

  const resetResultIfOpen = () => {
    if (showResult) {
      setShowResult(false);
    }
  };

  const result = useMemo(() => {
    if (!showResult || !isComplete) return null;

    if (incomeSource === 'passive') {
      if (incomeRange === '1000to2500' || incomeRange === '2500to4000' || incomeRange === '4000plus') {
        return {
          title: 'You may be looking at the D7 visa',
          summary:
            'From what you selected, the D7 looks like the most likely place to start.',
          details:
            'This route is usually considered by people with passive income such as pensions, rental income, dividends, or savings support. The next step would be checking whether the income level and overall profile make sense for your case.',
        };
      }

      return {
        title: 'The D7 may not be strong yet',
        summary:
          'You may be leaning toward the D7, but your current income range may make things harder.',
        details:
          'That does not always mean no, but it usually means the case needs a closer look before moving forward. It may be better to review your finances, timing, and whether another route fits better.',
      };
    }

    if (incomeSource === 'remote') {
      if (incomeRange === '2500to4000' || incomeRange === '4000plus') {
        return {
          title: 'You may be looking at the D8 visa',
          summary:
            'From what you selected, the digital nomad route looks like the most likely fit.',
          details:
            'This route is often used by remote workers and independent professionals earning from outside Portugal. The next step would be checking whether your work setup and income profile support a strong application.',
        };
      }

      return {
        title: 'The D8 may not be the best fit yet',
        summary:
          'You may want the digital nomad route, but your current income range may be too low for comfort.',
        details:
          'In cases like this, it is worth checking whether another route makes more sense or whether the plan needs more preparation before moving ahead.',
      };
    }

    if (incomeSource === 'business') {
      return {
        title: 'You may be looking at the D2 visa',
        summary:
          'From what you selected, the D2 looks like the most natural place to start.',
        details:
          'This route is often considered by founders, business owners, and people planning to build or continue economic activity in Portugal. The real question is whether the business case is credible and well prepared.',
        };
    }

    return {
      title: 'You may have more than one possible route',
      summary:
        'Your answers do not point to just one obvious visa, which is normal.',
      details:
        'This usually means the best option depends on the full picture, including your income setup, your timing, and what you actually want your move to look like. A proper review would help narrow it down.',
    };
  }, [showResult, isComplete, incomeSource, incomeRange]);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold tracking-[0.18em] uppercase text-[#1B7A4E] mb-4">
              Portugal visa check
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              See which Portugal route may suit you
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Answer a few simple questions and get a clearer idea of where you may fit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                What best describes your income
              </label>
              <select
                value={incomeSource}
                onChange={(e) => {
                  setIncomeSource(e.target.value as IncomeSource);
                  resetResultIfOpen();
                }}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1B7A4E]"
              >
                <option value="">Select one</option>
                <option value="remote">I work remotely</option>
                <option value="passive">I live from passive income</option>
                <option value="business">I own a business or work for myself</option>
                <option value="other">My situation is mixed or not listed</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                What is your approximate monthly income
              </label>
              <select
                value={incomeRange}
                onChange={(e) => {
                  setIncomeRange(e.target.value as IncomeRange);
                  resetResultIfOpen();
                }}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1B7A4E]"
              >
                <option value="">Select one</option>
                <option value="under500">Under €500</option>
                <option value="500to1000">€500 to €1,000</option>
                <option value="1000to2500">€1,000 to €2,500</option>
                <option value="2500to4000">€2,500 to €4,000</option>
                <option value="4000plus">More than €4,000</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Are you moving alone or with family
              </label>
              <select
                value={familyStatus}
                onChange={(e) => {
                  setFamilyStatus(e.target.value as FamilyStatus);
                  resetResultIfOpen();
                }}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1B7A4E]"
              >
                <option value="">Select one</option>
                <option value="alone">I am moving alone</option>
                <option value="family">I am moving with family</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                When are you hoping to move
              </label>
              <select
                value={timeline}
                onChange={(e) => {
                  setTimeline(e.target.value as Timeline);
                  resetResultIfOpen();
                }}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1B7A4E]"
              >
                <option value="">Select one</option>
                <option value="now">As soon as possible</option>
                <option value="3to6">Within the next 3 to 6 months</option>
                <option value="6plus">Later than 6 months from now</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Do you want professional help with the process
              </label>
              <select
                value={helpChoice}
                onChange={(e) => {
                  setHelpChoice(e.target.value as HelpChoice);
                  resetResultIfOpen();
                }}
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
              See my result
            </button>

            <button
              onClick={() => {
                setIncomeSource('');
                setIncomeRange('');
                setFamilyStatus('');
                setTimeline('');
                setHelpChoice('');
                setShowResult(false);
              }}
              className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-xl border border-gray-300 hover:bg-gray-50 transition-all duration-200"
            >
              Start again
            </button>
          </div>

          {!showResult && (
            <div className="mt-6">
              <p className="text-sm text-gray-500 leading-relaxed">
                Your result will appear after you complete the questions and click “See my result”.
              </p>
            </div>
          )}

          {result && (
            <div className="mt-10 rounded-2xl border border-green-200 bg-green-50 p-6 sm:p-8">
              <p className="text-sm font-semibold tracking-[0.18em] uppercase text-[#1B7A4E] mb-3">
                Result
              </p>

              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                {result.title}
              </h3>

              <p className="text-lg text-gray-800 mb-4 leading-relaxed">
                {result.summary}
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                {result.details}
              </p>

              <div className="bg-white border border-green-200 rounded-2xl p-5">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Next step
                </h4>

                <p className="text-gray-700 mb-5 leading-relaxed">
                  If you want clarity on the best route for your case, book a strategy call and we can look at it properly.
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
