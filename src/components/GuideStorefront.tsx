import { useState } from 'react';
import { ShoppingCart, Check } from 'lucide-react';

interface Guide {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  features: string[];
  image: string;
  badge?: string;
}

const guides: Guide[] = [
  {
    id: 'golden-visa',
    title: 'Golden Visa 2026',
    description: 'Complete guide to Portugal\'s Golden Visa program with investment options and timeline.',
    price: 125,
    currency: 'EUR',
    features: [
      'Investment options breakdown',
      'Timeline & processing steps',
      'Tax implications',
      'Family sponsorship guide',
      'Renewal requirements'
    ],
    image: '🇵🇹',
    badge: 'Most Popular'
  },
  {
    id: 'd7-visa',
    title: 'D7 Visa Blueprint',
    description: 'Passive income requirements, documentation, and step-by-step application process.',
    price: 67,
    currency: 'EUR',
    features: [
      'Income requirement calculator',
      'Document checklist',
      'Bank statement requirements',
      'Interview preparation',
      'Common rejection reasons'
    ],
    image: '🇵🇹',
  },
  {
    id: 'd8-visa',
    title: 'D8 Digital Nomad Visa',
    description: 'Everything you need to know about Portugal\'s digital nomad visa for remote workers.',
    price: 77,
    currency: 'EUR',
    features: [
      'Income requirements',
      'Remote work verification',
      'Health insurance guide',
      'Tax residency rules',
      'Renewal & extensions'
    ],
    image: '🇵🇹',
  },
  {
    id: 'caribbean-bundle',
    title: 'Complete Caribbean Bundle',
    description: 'Comprehensive guide to all Caribbean citizenship by investment programs.',
    price: 125,
    currency: 'EUR',
    features: [
      'All 5 Caribbean programs',
      'Investment comparison',
      'Processing timelines',
      'Passport benefits matrix',
      'Due diligence requirements'
    ],
    image: '🏝️',
    badge: 'Best Value'
  }
];

interface GuideCardProps {
  guide: Guide;
  onBuyClick: (guide: Guide) => void;
}

function GuideCard({ guide, onBuyClick }: GuideCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white dark:bg-slate-900 rounded-xl shadow-lg dark:shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl dark:hover:shadow-2xl flex flex-col h-full border border-gray-200 dark:border-slate-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      {guide.badge && (
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 text-sm font-semibold text-center">
          {guide.badge}
        </div>
      )}

      {/* Image/Icon */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 p-8 text-center">
        <div className="text-6xl mb-4">{guide.image}</div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{guide.title}</h3>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
          {guide.description}
        </p>

        {/* Features */}
        <div className="mb-6 flex-1">
          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
            What's Included
          </p>
          <ul className="space-y-2">
            {guide.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                <Check className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Price */}
        <div className="mb-6 pt-4 border-t border-gray-200 dark:border-slate-700">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              €{guide.price}
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">one-time</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => onBuyClick(guide)}
          className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
            isHovered
              ? 'bg-blue-600 text-white shadow-lg scale-105'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          <ShoppingCart className="w-5 h-5" />
          Buy Guide
        </button>
      </div>
    </div>
  );
}

interface GuideStorefrontProps {
  onBuyGuide: (guide: Guide) => void;
}

export default function GuideStorefront({ onBuyGuide }: GuideStorefrontProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-950 dark:to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Premium Guides & Resources
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get instant access to comprehensive guides on citizenship, residency, and investment programs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {guides.map((guide) => (
            <GuideCard
              key={guide.id}
              guide={guide}
              onBuyClick={onBuyGuide}
            />
          ))}
        </div>


      </div>
    </div>
  );
}
