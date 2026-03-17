import { ArrowRight, Globe, MapPin } from 'lucide-react';

export default function Process() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#1B7A4E] mb-4">
            Choose Your Path
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Two Clear Routes to Greater Mobility
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you are planning a move to Portugal or exploring second citizenship
            through investment, choose the route that best fits your goals.
          </p>
        </div>

        {/* Pathways Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Portugal Pathway */}
          <a
            href="/portugal-europe-residency"
            className="group block rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 sm:p-10 shadow-sm hover:shadow-xl hover:border-[#1B7A4E]/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="w-16 h-16 rounded-2xl bg-[#1B7A4E]/10 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-[#1B7A4E]" />
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-[#1B7A4E] group-hover:translate-x-1 transition-all duration-300" />
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Move to Portugal
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              For professionals, families, retirees, and entrepreneurs seeking residency
              in Portugal through structured legal pathways.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="mt-2 w-2.5 h-2.5 rounded-full bg-[#1B7A4E]" />
                <p className="text-gray-700 leading-relaxed">
                  Explore D7, D8, and D2 residency routes
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 w-2.5 h-2.5 rounded-full bg-[#1B7A4E]" />
                <p className="text-gray-700 leading-relaxed">
                  Understand relocation, family planning, and settlement steps
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 w-2.5 h-2.5 rounded-full bg-[#1B7A4E]" />
                <p className="text-gray-700 leading-relaxed">
                  Get clarity on which residency path fits your situation
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 text-[#1B7A4E] font-semibold text-base">
              Explore Portugal Residency
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </a>

          {/* Citizenship Pathway */}
          <a
            href="/caribbean-citizenship-by-investment"
            className="group block rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 sm:p-10 shadow-sm hover:shadow-xl hover:border-[#0f3460]/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="w-16 h-16 rounded-2xl bg-[#0f3460]/10 flex items-center justify-center">
                <Globe className="w-8 h-8 text-[#0f3460]" />
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-[#0f3460] group-hover:translate-x-1 transition-all duration-300" />
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Obtain a Second Citizenship
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              For investors and globally minded entrepreneurs seeking greater travel
              freedom, diversification, and long-term security through vetted
              citizenship by investment programs.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0f3460]" />
                <p className="text-gray-700 leading-relaxed">
                  Compare leading Caribbean citizenship options
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0f3460]" />
                <p className="text-gray-700 leading-relaxed">
                  Understand investment thresholds and family eligibility
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0f3460]" />
                <p className="text-gray-700 leading-relaxed">
                  Explore a strategic plan B for mobility and protection
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 text-[#0f3460] font-semibold text-base">
              Explore Citizenship Programs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
