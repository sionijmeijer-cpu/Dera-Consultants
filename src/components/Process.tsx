import { ArrowRight } from 'lucide-react';

export default function Process() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#1B7A4E] mb-4">
            Choose Your Path
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Three Clear Routes to Greater Mobility
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you are planning a move to Portugal, exploring second citizenship
            through investment, or looking for a Portugal route designed for
            Americans, choose the path that fits your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Portugal */}
          <a
            href="/portugal-europe-residency"
            className="group block rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 sm:p-10 shadow-sm hover:shadow-xl hover:border-[#1B7A4E]/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="w-16 h-16 rounded-2xl bg-[#1B7A4E]/10 flex items-center justify-center text-3xl">
                🇵🇹
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-[#1B7A4E] group-hover:translate-x-1 transition-all duration-300" />
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Move to Portugal
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              For professionals, families, retirees, and entrepreneurs exploring
              residency in Portugal through structured legal pathways.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <span className="mt-2 w-2.5 h-2.5 rounded-full bg-[#1B7A4E]" />
                <p className="text-gray-700 leading-relaxed">D7, D8, and D2 routes</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 w-2.5 h-2.5 rounded-full bg-[#1B7A4E]" />
                <p className="text-gray-700 leading-relaxed">Relocation and family planning</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 w-2.5 h-2.5 rounded-full bg-[#1B7A4E]" />
                <p className="text-gray-700 leading-relaxed">Clearer next steps</p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 text-[#1B7A4E] font-semibold text-base">
              Explore Portugal Residency
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </a>

          {/* Caribbean */}
          <a
            href="/caribbean-citizenship-by-investment"
            className="group block rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 sm:p-10 shadow-sm hover:shadow-xl hover:border-[#0f3460]/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="w-16 h-16 rounded-2xl bg-[#0f3460]/10 flex items-center justify-center">
                <span className="text-sm font-bold tracking-[0.12em] text-[#0f3460]">
                  CARIB
                </span>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-[#0f3460] group-hover:translate-x-1 transition-all duration-300" />
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Obtain a Second Citizenship
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              For investors seeking greater travel freedom, diversification, and
              long-term security through vetted citizenship by investment programs.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <span className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0f3460]" />
                <p className="text-gray-700 leading-relaxed">Compare top programs</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0f3460]" />
                <p className="text-gray-700 leading-relaxed">Review investment thresholds</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0f3460]" />
                <p className="text-gray-700 leading-relaxed">Build a stronger plan B</p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 text-[#0f3460] font-semibold text-base">
              Explore Citizenship Programs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </a>

          {/* USA to Portugal */}
          <a
            href="/americans-moving-to-portugal"
            className="group block rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 sm:p-10 shadow-sm hover:shadow-xl hover:border-[#B45309]/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="w-16 h-16 rounded-2xl bg-[#B45309]/10 flex items-center justify-center text-3xl">
                🇺🇸
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-[#B45309] group-hover:translate-x-1 transition-all duration-300" />
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Americans Moving to Portugal
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              For US citizens who want help understanding the right Portugal route
              before wasting time on the wrong one.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <span className="mt-2 w-2.5 h-2.5 rounded-full bg-[#B45309]" />
                <p className="text-gray-700 leading-relaxed">Compare D7 and D8 options</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 w-2.5 h-2.5 rounded-full bg-[#B45309]" />
                <p className="text-gray-700 leading-relaxed">Match route to your profile</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 w-2.5 h-2.5 rounded-full bg-[#B45309]" />
                <p className="text-gray-700 leading-relaxed">Plan your move with clarity</p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 text-[#B45309] font-semibold text-base">
              Explore US to Portugal
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
