import { Shield, BookOpen, Star, Package } from 'lucide-react';

export interface Guide {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  badgeColor?: string;
  description: string;
  highlights: string[];
  accentColor: string;
  bgColor: string;
  borderColor: string;
  popular?: boolean;
  content?: string;
}

export const guides: Guide[] = [
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
    accentColor: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
];
