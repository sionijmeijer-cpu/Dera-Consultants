import { CheckCircle, Search, Award, Headphones } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: 1,
      title: 'Discovery',
      icon: Search,
      description: 'We begin with a detailed consultation to understand your objectives, lifestyle preferences, family considerations, and global mobility goals.'
    },
    {
      number: 2,
      title: 'Program Selection',
      icon: Award,
      description: 'Based on your profile, we present suitable citizenship or residency programs and explain requirements, timelines, and investment thresholds clearly.'
    },
    {
      number: 3,
      title: 'Concierge Support',
      icon: Headphones,
      description: 'We act as your single point of contact throughout the journey, helping manage process flow, documentation guidance, and communication with partners/specialist. We also assist with relocation and settlement.'
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            HOW OUR PROCESS WORKS
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We guide investors and entrepreneurs through second citizenship and residency options with a structured, hands-on advisory approach.
            <br className="hidden sm:block" />
            From first consultation to relocation, we act as your single point of contact and coordinate with licensed professionals where required.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div key={step.number} className="flex flex-col items-center text-center">
                {/* Circle Badge with Icon */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#d4af37] to-[#e0c158] rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-10 h-10 text-[#0f3460]" />
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-gray-600 text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Connecting Line (Desktop Only) */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-24 w-4/5 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent -z-10" />
      </div>
    </section>
  );
}
