import { ArrowRight } from 'lucide-react';

export default function Process() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#1B7A4E] mb-4">
            Choose your path
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Three Clear Routes to Greater Mobility
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you are planning a move to Portugal, exploring second citizenship,
            or looking for a route designed specifically for Americans, choose the path
            that fits your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Portugal */}
          <a
            href="/portugal-europe-residency"
            className="group block rounded-3xl border border-gray-200 bg-white p-8 sm:p-10 transition-all duration-300 hover:border-[#1B7A4E]/40"
          >
            <div className="flex items-start justify-between mb-8">
              <div className="text-4xl">🇵🇹</div>

              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1B7A4E] group-hover:translate-x-1 transition-all duration-300" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Move to Portugal
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              For individuals and families exploring Portugal residency through structured legal pathways.
            </p>

            <div className="space-y-3 mb-8">
              <p>• D7, D8, and D2 routes</p>
              <p>• Relocation and planning</p>
              <p>• Clear next steps</p>
            </div>

            <div className="inline-flex items-center gap-2 text-[#1B7A4E] font-semibold">
              Explore Portugal
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>

          {/* Caribbean */}
          <a
            href="/caribbean-citizenship-by-investment"
            className="group block rounded-3xl border border-gray-200 bg-white p-8 sm:p-10 transition-all duration-300 hover:border-[#0f3460]/40"
          >
            <div className="flex items-start justify-between mb-8">
              <div className="text-4xl">🏝️</div>

              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#0f3460] group-hover:translate-x-1 transition-all duration-300" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Obtain a Second Citizenship
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              For investors seeking citizenship by investment options across the Caribbean.
            </p>

            <div className="space-y-3 mb-8">
              <p>• Compare programs</p>
              <p>• Investment thresholds</p>
              <p>• Plan B strategy</p>
            </div>

            <div className="inline-flex items-center gap-2 text-[#0f3460] font-semibold">
              Explore Caribbean
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>

          {/* USA */}
          <a
            href="/americans-moving-to-portugal"
            className="group block rounded-3xl border border-gray-200 bg-white p-8 sm:p-10 transition-all duration-300 hover:border-[#B45309]/40"
          >
            <div className="flex items-start justify-between mb-8">
              <div className="text-4xl">🇺🇸</div>

              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#B45309] group-hover:translate-x-1 transition-all duration-300" />
            </div>

            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B45309] mb-3">
              Especially for Americans
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Portugal Relocation for Americans
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              A focused route for US citizens who want clarity before choosing the wrong visa.
            </p>

            <div className="space-y-3 mb-8">
              <p>• D7 vs D8 clarity</p>
              <p>• US-specific factors</p>
              <p>• Avoid mistakes</p>
            </div>

            <div className="inline-flex items-center gap-2 text-[#B45309] font-semibold">
              Explore US pathway
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
