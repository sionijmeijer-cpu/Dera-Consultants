import { ArrowRight } from 'lucide-react';

export default function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#1B7A4E] mb-4">
            Choose your path
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Three Routes to Greater Mobility
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Whether you are exploring Portugal residency, second citizenship,
            or a pathway tailored for Americans, start with the route that fits your situation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Portugal */}
          <a href="/portugal-europe-residency" className="group">
            <div className="mb-6 text-3xl">🇵🇹</div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Move to Portugal
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              Residency options for individuals and families planning a long-term move.
            </p>

            <div className="space-y-2 mb-6 text-gray-700">
              <p>• D7, D8, and D2 routes</p>
              <p>• Relocation and planning</p>
              <p>• Clear next steps</p>
            </div>

            <div className="inline-flex items-center gap-2 text-[#1B7A4E] font-semibold">
              Explore Portugal
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </div>
          </a>

          {/* Caribbean */}
          <a href="/caribbean-citizenship-by-investment" className="group">
            <div className="mb-6 text-3xl">🏝️</div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Second Citizenship
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              Citizenship by investment options for global mobility and long-term flexibility.
            </p>

            <div className="space-y-2 mb-6 text-gray-700">
              <p>• Compare programs</p>
              <p>• Review investments</p>
              <p>• Build a plan B</p>
            </div>

            <div className="inline-flex items-center gap-2 text-[#0f3460] font-semibold">
              Explore Caribbean
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </div>
          </a>

          {/* USA SPECIALIZED */}
          <a href="/americans-moving-to-portugal" className="group">
            <div className="mb-6 text-3xl">🇺🇸</div>

            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B45309] mb-2">
              Designed for US citizens
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Portugal Relocation for Americans
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              A focused pathway that helps Americans understand which Portugal visa actually fits before making the wrong move.
            </p>

            <div className="space-y-2 mb-6 text-gray-700">
              <p>• US-specific relocation considerations</p>
              <p>• D7 vs D8 clarity</p>
              <p>• Avoid common mistakes</p>
            </div>

            <div className="inline-flex items-center gap-2 text-[#B45309] font-semibold">
              Explore US pathway
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
