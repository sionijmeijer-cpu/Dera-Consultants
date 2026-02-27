import { useState } from 'react';
import { ArrowRight, BookOpen, Star, Shield, Download, Package, Check } from 'lucide-react';
import DownloadModal from '../components/DownloadModal';

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

interface GuidesPageProps {
  onScheduleCall?: () => void;
}

export default function GuidesPage({ onScheduleCall }: GuidesPageProps) {
  const [selectedGuide, setSelectedGuide] = useState<string | null>(null);
  const [downloadModal, setDownloadModal] = useState<{ isOpen: boolean; guideId: string; guideTitle: string }>({
    isOpen: false,
    guideId: '',
    guideTitle: '',
  });

  const handleScheduleCall = () => {
    if (onScheduleCall) {
      onScheduleCall();
    } else {
      const event = new CustomEvent('openScheduleModal');
      window.dispatchEvent(event);
    }
  };

  const handleDownloadClick = (guideId: string, guideTitle: string) => {
    setDownloadModal({ isOpen: true, guideId, guideTitle });
  };

  return (
    <div className="bg-white">
      {/* Download Modal */}
      <DownloadModal
        isOpen={downloadModal.isOpen}
        onClose={() => setDownloadModal({ isOpen: false, guideId: '', guideTitle: '' })}
        guideTitle={downloadModal.guideTitle}
        guideId={downloadModal.guideId}
      />

      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f3460] via-[#1a5276] to-[#0d2540]">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          <span className="inline-block bg-white/10 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6 backdrop-blur-sm border border-white/20">
            Expert Guides & Playbooks
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Stop Guessing.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-blue-300">Start Moving.</span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Written by immigration consultants who have guided hundreds of clients through these exact processes. No fluff, just the information that actually matters.
          </p>
          <button
            onClick={handleScheduleCall}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Schedule Free Consultation
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80V40C240 0 480 0 720 40C960 80 1200 80 1440 40V80H0Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Honest Note */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6 sm:p-8">
            <p className="text-gray-800 italic text-base sm:text-lg leading-relaxed mb-4">
              "Portugal is beautiful, but bureaucracy is maddening. Your bank will lose your documents. Twice. Your appointment will be rescheduled. Three times. Budget an extra €2,000 and 6 months beyond the official timeline. These guides show you how to minimize, not eliminate the chaos."
            </p>
            <p className="text-amber-700 font-semibold text-sm sm:text-base">— Dera Consultants Team</p>
          </div>
        </div>
      </section>

      {/* Guide Cards Grid */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Path
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each guide is tailored to a specific immigration goal. Pick the one that matches your situation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {guides.map((guide) => (
              <div
                key={guide.id}
                className={`relative flex flex-col rounded-2xl border-2 ${guide.borderColor} ${guide.bgColor} p-6 sm:p-7 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group ${
                  guide.popular ? 'lg:scale-105 lg:shadow-xl' : ''
                }`}
                onClick={() => setSelectedGuide(selectedGuide === guide.id ? null : guide.id)}
              >
                {/* Badge */}
                {guide.badge && (
                  <span className={`absolute -top-3 left-6 ${guide.badgeColor} text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md`}>
                    {guide.badge}
                  </span>
                )}

                {/* Popular indicator */}
                {guide.popular && (
                  <div className="absolute top-6 right-6 bg-gradient-to-br from-amber-400 to-amber-500 text-white rounded-full p-2 shadow-lg">
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                )}

                {/* Icon */}
                <div className={`${guide.accentColor} mb-4 mt-2 group-hover:scale-110 transition-transform duration-300`}>
                  {guide.icon}
                </div>

                {/* Title */}
                <h3 className="text-gray-900 font-bold text-lg sm:text-xl leading-snug mb-1">
                  {guide.title}
                </h3>
                <p className={`${guide.accentColor} text-sm font-semibold mb-4`}>
                  {guide.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed mb-5 flex-grow">
                  {guide.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2.5 mb-6">
                  {guide.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                      <Check className={`${guide.accentColor} w-4 h-4 flex-shrink-0 mt-0.5`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Price & CTA */}
                <div className="mt-auto pt-4 border-t border-current border-opacity-10">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl sm:text-3xl font-extrabold text-gray-900">{guide.price}</span>
                    {guide.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">{guide.originalPrice}</span>
                    )}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownloadClick(guide.id, guide.title);
                    }}
                    className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg ${
                      guide.popular
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700'
                        : `${guide.bgColor} ${guide.accentColor} border-2 ${guide.borderColor} hover:shadow-md`
                    }`}
                  >
                    <Download className="w-4 h-4" />
                    Get Guide
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof & Stats Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
            {/* Stat 1: Clients */}
            <div className="text-center">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 border-2 border-blue-200">
                  <span className="text-3xl font-bold text-[#0f3460]">32+</span>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Clients Guided</h3>
              <p className="text-gray-600 text-sm sm:text-base">Successfully navigated through immigration processes</p>
            </div>

            {/* Stat 2: Satisfaction */}
            <div className="text-center">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-50 border-2 border-emerald-200">
                  <span className="text-3xl font-bold text-[#1B7A4E]">98%</span>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Satisfaction Rate</h3>
              <p className="text-gray-600 text-sm sm:text-base">Clients report high confidence in their decisions</p>
            </div>

            {/* Stat 3: Success */}
            <div className="text-center">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-amber-50 border-2 border-amber-200">
                  <span className="text-3xl font-bold text-amber-600">100%</span>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Success Rate</h3>
              <p className="text-gray-600 text-sm sm:text-base">Applications approved with our guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle Offer Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 via-blue-50 to-emerald-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border-2 border-purple-200 p-8 sm:p-12 text-center">
            <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Complete Collection
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Get All 4 Guides
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Download all guides together and have everything you need to explore every immigration option.
            </p>
            <div className="mb-6">
              <div className="flex items-baseline gap-2 justify-center">
                <span className="text-4xl font-extrabold text-gray-900">€394</span>
                <span className="text-lg text-gray-400 line-through">€394</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">All 4 guides combined</p>
            </div>
            <button
              onClick={() => handleDownloadClick('all-guides', 'Complete Guide Collection (All 4 Guides)')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-10 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Download className="w-5 h-5" />
              Get All Guides
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Guide FAQs
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our guides and how they work.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What format are the guides in?',
                a: 'All guides are delivered as downloadable PDF files. You can read them on any device, print them, or share them with your legal advisor.'
              },
              {
                q: 'Are the guides updated regularly?',
                a: 'Yes. We update our guides quarterly to reflect changes in immigration laws, program requirements, and processing timelines.'
              },
              {
                q: 'Do the guides include templates and checklists?',
                a: 'Yes. Each guide includes practical templates, checklists, and sample documents you can use or adapt for your application.'
              },
              {
                q: 'Why are the guides free?',
                a: 'We believe in providing value upfront. These guides help you understand the process, and when you are ready for personalized support, our consulting team is here to help.'
              },
              {
                q: 'Can I download all guides at once?',
                a: 'Absolutely! Use the "Download All Guides" button to get the complete collection in one go.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">{item.q}</h3>
                <p className="text-gray-700 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0f3460] to-[#1a5276]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-10 leading-relaxed">
            Our guides are a great starting point, but personalized guidance makes all the difference. Schedule a free consultation with our team.
          </p>
          <button
            onClick={handleScheduleCall}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Schedule Your Free Consultation
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
