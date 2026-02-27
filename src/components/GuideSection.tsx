import { ArrowRight, BookOpen, Star, Shield, Download, Package } from 'lucide-react';

interface Guide {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  badgeColor?: string;
  description: string;
  highlights: string[];
  icon: React.ReactNode;
  accentColor: string;
  bgColor: string;
  borderColor: string;
  popular?: boolean;
}

const guides: Guide[] = [
  {
    id: 'golden-visa',
    title: 'Golden Visa 2026',
    subtitle: "The Investor's Playbook",
    price: '€125',
    badge: 'Most Comprehensive',
    badgeColor: 'bg-amber-500',
    description: 'The definitive guide for investors navigating Portugal\'s Golden Visa program. From fund selection to NHR tax status — everything you need to make a confident, informed investment decision.',
    highlights: [
      'Updated 2026 fund & real estate rules',
      'Step-by-step application timeline',
      'NHR tax optimization strategies',
      'Bank account opening checklist',
      'Common rejection reasons & how to avoid them',
    ],
    icon: <Shield className="w-7 h-7" />,
    accentColor: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    popular: true,
  },
  {
    id: 'd7-visa',
    title: 'D7 Visa Blueprint',
    subtitle: 'The Retiree & Passive Income Route',
    price: '€67',
    badge: 'Best for Retirees',
    badgeColor: 'bg-[#1B7A4E]',
    description: 'Retire or live in Portugal on passive income. This blueprint walks you through income requirements, the SEF process, and how to structure your finances to qualify — without the guesswork.',
    highlights: [
      'Minimum income thresholds explained',
      'Proof of income documentation guide',
      'Rental vs. pension income strategies',
      'Healthcare & NHR tax benefits',
      'Family reunification process',
    ],
    icon: <BookOpen className="w-7 h-7" />,
    accentColor: 'text-[#1B7A4E]',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
  },
  {
    id: 'd8-visa',
    title: 'D8 Digital Nomad Visa',
    subtitle: "The Remote Worker's Manual",
    price: '€77',
    badge: 'For Remote Workers',
    badgeColor: 'bg-[#0f3460]',
    description: 'Work remotely from Portugal legally. This manual covers everything from proving your remote income to finding housing, registering with the tax authority, and building a life in Lisbon or Porto.',
    highlights: [
      'Income proof for freelancers & employees',
      'Contract & employer letter templates',
      'NIF & NISS registration walkthrough',
      'Best cities for digital nomads',
      'Renewal & path to residency',
    ],
    icon: <Star className="w-7 h-7" />,
    accentColor: 'text-[#0f3460]',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    id: 'caribbean-bundle',
    title: 'Complete Caribbean Bundle',
    subtitle: 'All 5 CBI Programs Covered',
    price: '€125',
    originalPrice: '€220',
    badge: 'Best Value',
    badgeColor: 'bg-purple-600',
    description: 'Five Caribbean citizenship-by-investment programs in one comprehensive bundle. Compare St. Kitts, Dominica, Grenada, Antigua, and St. Lucia — and choose the passport that fits your goals.',
    highlights: [
      'Side-by-side program comparison',
      'Processing times & approval rates',
      'Real estate vs. donation route analysis',
      'Visa-free travel comparison (180+ countries)',
      'Due diligence & background check guide',
    ],
    icon: <Package className="w-7 h-7" />,
    accentColor: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
];

interface GuideSectionProps {
  onScheduleCall?: () => void;
}

export default function GuideSection({ onScheduleCall }: GuideSectionProps) {
  return (
    <section id="guides" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <span className="inline-block bg-[#0f3460]/10 text-[#0f3460] text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 rounded-full uppercase tracking-wide mb-3 sm:mb-4">
            Expert Guides & Playbooks
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-5 leading-tight">
            Stop Guessing. Start Moving.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            Written by immigration consultants who have guided hundreds of clients through these exact processes. No fluff, just the information that actually matters.
          </p>
        </div>

        {/* Honest Note */}
        <div className="max-w-3xl mx-auto mb-10 sm:mb-14 px-2 sm:px-0">
          <div className="bg-[#0f3460]/5 border-l-4 border-[#0f3460] rounded-r-xl p-4 sm:p-5">
            <p className="text-gray-700 italic text-xs sm:text-sm md:text-base leading-relaxed">
              "Portugal is beautiful, but bureaucracy is maddening. Your bank will lose your documents. Twice. Your appointment will be rescheduled. Three times. Budget an extra €2,000 and 6 months beyond the official timeline. These guides show you how to minimize, not eliminate the chaos."
            </p>
            <p className="text-[#0f3460] font-semibold text-xs sm:text-sm mt-3">— Dera Consultants Team</p>
          </div>
        </div>

        {/* Guide Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-10 sm:mb-14">
          {guides.map((guide) => (
            <div
              key={guide.id}
              className={`relative flex flex-col rounded-2xl border-2 ${guide.borderColor} ${guide.bgColor} p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Badge */}
              {guide.badge && (
                <span className={`absolute -top-3 left-5 ${guide.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow`}>
                  {guide.badge}
                </span>
              )}

              {/* Icon */}
              <div className={`${guide.accentColor} mb-3 sm:mb-4 mt-2`}>
                {guide.icon}
              </div>

              {/* Title */}
              <h3 className="text-gray-900 font-bold text-base sm:text-lg leading-snug mb-1">
                {guide.title}
              </h3>
              <p className={`${guide.accentColor} text-xs sm:text-sm font-semibold mb-2 sm:mb-3`}>
                {guide.subtitle}
              </p>

              {/* Description */}
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-grow">
                {guide.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1 sm:space-y-1.5 mb-4 sm:mb-5">
                {guide.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                    <span className={`${guide.accentColor} mt-0.5 flex-shrink-0`}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Price & CTA */}
              <div className="mt-auto">
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-xl sm:text-2xl font-extrabold text-gray-900">{guide.price}</span>
                  {guide.originalPrice && (
                    <span className="text-xs sm:text-sm text-gray-400 line-through">{guide.originalPrice}</span>
                  )}
                </div>
                <button className={`w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 hover:scale-105 hover:shadow-md ${
                  guide.popular
                    ? 'bg-amber-500 hover:bg-amber-600 text-white'
                    : guide.id === 'caribbean-bundle'
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : guide.id === 'd7-visa'
                    ? 'bg-[#1B7A4E] hover:bg-[#156B3F] text-white'
                    : 'bg-[#0f3460] hover:bg-[#0a2545] text-white'
                }`}>
                  <Download className="w-4 h-4" />
                  Get Guide
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col gap-4 sm:gap-6">
          <div className="text-center">
            <h4 className="text-gray-900 font-bold text-base sm:text-lg mb-1">Still have questions?</h4>
            <p className="text-gray-600 text-xs sm:text-sm px-2 sm:px-0">Our consultants are available to walk you through the right program for your situation.</p>
          </div>
          <button
            onClick={onScheduleCall}
            className="bg-[#1B7A4E] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm hover:bg-[#156B3F] transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 w-full"
          >
            Book a Free Call
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
