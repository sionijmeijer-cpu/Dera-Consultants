import { useState } from 'react';
import { ChevronRight, MapPin, Building2, Plane, FileText, Users, Clock } from 'lucide-react';

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: 'caribbean-cbip',
      title: 'Caribbean CBIP',
      icon: MapPin,
      description: 'Fast-track citizenship through investment in beautiful Caribbean nations',
      countries: ['Antigua & Barbuda', 'Dominica', 'Grenada', 'St. Kitts & Nevis', 'St. Lucia'],
      benefits: [
        'Visa-free travel to 140+ countries',
        'Fast processing (3-6 months)',
        'No residency requirements',
        'Family inclusion options',
        'Tax advantages',
        'Dual citizenship allowed'
      ],
      requirements: [
        'Clean criminal record',
        'Proof of funds',
        'Valid passport',
        'Health certificate',
        'Investment in approved project or donation'
      ],
      investmentRange: '$100,000 - $400,000'
    },
    {
      id: 'portugal-europe',
      title: 'Portugal & Europe Programs',
      icon: Building2,
      description: 'Golden visa and residency programs across Portugal and EU countries',
      countries: ['Portugal', 'Spain', 'Greece', 'Malta', 'Cyprus'],
      benefits: [
        'EU residency rights',
        'Schengen area access',
        'Path to citizenship',
        'Excellent quality of life',
        'World-class education',
        'Healthcare access'
      ],
      requirements: [
        'Investment in real estate or funds',
        'Clean criminal background',
        'Health insurance',
        'Proof of accommodation',
        'Financial sustainability proof'
      ],
      investmentRange: '€280,000 - €500,000'
    },
    {
      id: 'residency-solutions',
      title: 'Residency Solutions',
      icon: Plane,
      description: 'Customized residency programs for long-term settlement',
      benefits: [
        'Long-term residency permits',
        'Work authorization',
        'Family reunification',
        'Education access',
        'Healthcare benefits',
        'Path to permanent residency'
      ],
      requirements: [
        'Valid passport',
        'Proof of income or employment',
        'Clean criminal record',
        'Health insurance',
        'Accommodation proof'
      ],
      investmentRange: 'Varies by country'
    },
    {
      id: 'citizenship-planning',
      title: 'Citizenship Planning',
      icon: FileText,
      description: 'Strategic planning for second citizenship and passport programs',
      benefits: [
        'Comprehensive assessment',
        'Multi-jurisdiction options',
        'Tax optimization strategies',
        'Succession planning',
        'Wealth protection',
        'Global mobility enhancement'
      ],
      requirements: [
        'Financial disclosure',
        'Background documentation',
        'Family information',
        'Investment capacity proof'
      ],
      investmentRange: 'Custom solutions'
    },
    {
      id: 'investment-advisory',
      title: 'Investment Advisory',
      icon: Users,
      description: 'Expert guidance on immigration-linked investment opportunities',
      benefits: [
        'Due diligence on projects',
        'ROI analysis',
        'Risk assessment',
        'Portfolio diversification',
        'Developer vetting',
        'Exit strategy planning'
      ],
      requirements: [
        'Investment goals definition',
        'Risk tolerance assessment',
        'Financial capacity proof'
      ],
      investmentRange: 'Based on program'
    }
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#0f3460] to-[#1a5276] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Comprehensive immigration solutions tailored to your unique needs and goals
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 hover:border-[#1B7A4E]"
                  onClick={() => setSelectedService(service.id === selectedService ? null : service.id)}
                >
                  <div className="bg-[#e8f5ee] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-[#0f3460]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button className="text-[#0f3460] font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-200">
                    Learn More
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Details */}
      {selectedService && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {services
              .filter((s) => s.id === selectedService)
              .map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.id} className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="bg-[#e8f5ee] w-16 h-16 rounded-lg flex items-center justify-center">
                        <Icon className="w-8 h-8 text-[#0f3460]" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Left Column */}
                      <div className="space-y-6">
                        {service.countries && (
                          <div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900 flex items-center gap-2">
                              <MapPin className="w-5 h-5 text-[#0f3460]" />
                              Available Countries
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {service.countries.map((country) => (
                                <span
                                  key={country}
                                  className="bg-[#e8f5ee] text-[#0f3460] px-3 py-1 rounded-full text-sm font-medium"
                                >
                                  {country}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-gray-900">Key Benefits</h3>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start gap-2 text-gray-600">
                                <ChevronRight className="w-5 h-5 text-[#0f3460] flex-shrink-0 mt-0.5" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-gray-900">Requirements</h3>
                          <ul className="space-y-2">
                            {service.requirements.map((requirement, index) => (
                              <li key={index} className="flex items-start gap-2 text-gray-600">
                                <ChevronRight className="w-5 h-5 text-[#0f3460] flex-shrink-0 mt-0.5" />
                                {requirement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-[#e8f5ee] p-6 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Clock className="w-5 h-5 text-[#0f3460]" />
                            <h3 className="text-lg font-semibold text-gray-900">Investment Range</h3>
                          </div>
                          <p className="text-2xl font-bold text-[#0f3460]">{service.investmentRange}</p>
                          <p className="text-sm text-gray-600 mt-2">
                            *Exact costs vary by country and program specifics
                          </p>
                        </div>

                        <button onClick={() => {
                          const event = new CustomEvent('openScheduleModal');
                          window.dispatchEvent(event);
                        }} className="w-full bg-[#1B7A4E] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#156B3F] transition-all duration-300 shadow-md hover:shadow-lg">
                          Request Consultation
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
      )}
    </div>
  );
}