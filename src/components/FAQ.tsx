import { useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';
import { AlertCircle, CheckCircle, BookOpen, TrendingUp, Globe } from 'lucide-react';

interface FAQProps {
  onScheduleCall: () => void;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'research' | 'programs' | 'process';
}

const faqData: FAQItem[] = [
  {
    id: 'research-1',
    category: 'research',
    question: 'What research and market analysis do you provide?',
    answer: 'We conduct comprehensive market research on citizenship and residency programs globally. Our analysis includes program viability, investment returns, legal frameworks, and economic trends. We provide detailed reports comparing different jurisdictions, helping you make informed decisions based on current market conditions and future projections.'
  },
  {
    id: 'research-2',
    category: 'research',
    question: 'How do you analyze investment opportunities in CBI programs?',
    answer: 'Our research team evaluates real estate markets, government bond stability, and economic growth potential in each jurisdiction. We assess historical returns, market trends, and future development plans. This allows us to identify which investment options offer the best value and growth potential for your financial goals.'
  },
  {
    id: 'research-3',
    category: 'research',
    question: 'What data sources do you use for your research?',
    answer: 'We utilize government statistics, real estate databases, financial reports, legal documentation, and direct market intelligence from our network of professionals in each jurisdiction. Our research is continuously updated to reflect the latest market conditions, regulatory changes, and economic developments.'
  },
  {
    id: 'research-4',
    category: 'research',
    question: 'Can you provide comparative analysis between different programs?',
    answer: 'Yes, we provide detailed comparative analysis across multiple programs. Our reports cover investment requirements, processing times, benefits, tax implications, and long-term value. This helps you understand the pros and cons of each option and select the program that best aligns with your objectives.'
  },
  {
    id: 'research-5',
    category: 'research',
    question: 'How often is your research updated?',
    answer: 'Our research is continuously monitored and updated quarterly to reflect market changes, regulatory updates, and economic trends. We also provide real-time alerts on significant developments that may impact your decision-making process.'
  },
  {
    id: 'programs-1',
    category: 'programs',
    question: 'What citizenship by investment programs do you specialize in?',
    answer: 'We specialize in Caribbean citizenship programs (Dominica, Grenada, St. Lucia, Antigua & Barbuda) and European residency programs (Portugal, Greece). Each program offers unique benefits, investment options, and timelines. We help you identify which program aligns best with your lifestyle and financial goals.'
  },
  {
    id: 'programs-2',
    category: 'programs',
    question: 'What are the minimum investment amounts?',
    answer: 'Caribbean CBI programs typically require investments between $100,000 and $400,000 depending on the option chosen (donation, bonds, or real estate). European residency programs vary by country but generally range from $250,000 to $500,000. We provide detailed breakdowns of all costs and investment options.'
  },
  {
    id: 'programs-3',
    category: 'programs',
    question: 'Can my family members be included in my application?',
    answer: 'Yes, most programs allow you to include dependents such as spouses and children. Some programs also allow parents and grandparents to be included. The specific family members eligible and any additional costs vary by program. We guide you through the family inclusion process.'
  },
  {
    id: 'programs-4',
    category: 'programs',
    question: 'What are the benefits of obtaining a second citizenship?',
    answer: 'Benefits include visa-free travel to numerous countries, business expansion opportunities, tax planning advantages, asset protection, and enhanced personal security. Different programs offer varying benefits, and we help you understand which benefits are most valuable for your specific situation.'
  },
  {
    id: 'programs-5',
    category: 'programs',
    question: 'How do I choose between Caribbean and European programs?',
    answer: 'Caribbean programs offer faster processing (3-6 months), lower investment requirements, and immediate citizenship. European programs provide residency leading to citizenship, better visa access to Europe, and potential tax benefits. We analyze your goals, timeline, and financial situation to recommend the best fit.'
  },
  {
    id: 'process-1',
    category: 'process',
    question: 'What is the typical timeline for citizenship approval?',
    answer: 'Caribbean CBI programs typically take 3-6 months from application to approval. European residency programs may take 6-12 months depending on the country and your specific circumstances. We manage the timeline and keep you updated at every stage of the process.'
  },
  {
    id: 'process-2',
    category: 'process',
    question: 'What documents do I need to prepare?',
    answer: 'Required documents typically include a valid passport, birth certificate, marriage certificate (if applicable), police clearance, medical examination results, and proof of funds. We provide a comprehensive, program-specific checklist and guide you through the document preparation process.'
  },
  {
    id: 'process-3',
    category: 'process',
    question: 'Do I need to visit the country during the application process?',
    answer: 'Most applications can be processed remotely. However, some programs may require a brief visit for final verification or to complete the investment. We coordinate all logistics and can arrange visits if necessary, making the process as convenient as possible.'
  },
  {
    id: 'process-4',
    category: 'process',
    question: 'What happens after my application is approved?',
    answer: 'After approval, you complete the investment, receive your citizenship certificate or residency permit, and can apply for your passport. We assist with all post-approval steps including passport application, travel document coordination, and any follow-up requirements.'
  },
  {
    id: 'process-5',
    category: 'process',
    question: 'Is the process confidential?',
    answer: 'Yes, we maintain strict confidentiality throughout the entire process. Your personal information, financial details, and application status are protected. We work with secure systems and comply with all privacy regulations in every jurisdiction.'
  }
];

export default function FAQ({ onScheduleCall }: FAQProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'research' | 'programs' | 'process'>('all');

  const categories = [
    { id: 'all', label: 'All Questions', icon: null },
    { id: 'research', label: 'Research & Analysis', icon: TrendingUp },
    { id: 'programs', label: 'Programs', icon: Globe },
    { id: 'process', label: 'Process', icon: BookOpen }
  ];

  const filteredFAQ = activeCategory === 'all' 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f3460] mb-4">
            Research & Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive answers to your questions about citizenship programs, market research, and our process
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? 'bg-[#1B7A4E] text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-[#1B7A4E] hover:text-[#1B7A4E]'
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <Accordion type="single" collapsible className="w-full">
            {filteredFAQ.map((item, index) => (
              <AccordionItem 
                key={item.id} 
                value={item.id}
                className={index !== filteredFAQ.length - 1 ? 'border-b' : ''}
              >
                <AccordionTrigger className="px-6 py-5 hover:bg-gray-50 transition-colors duration-200 text-left font-semibold text-gray-900 hover:text-[#0f3460]">
                  <span className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#1B7A4E] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </span>
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-5 bg-gray-50 text-gray-700 leading-relaxed">
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-[#1B7A4E] flex-shrink-0 mt-0.5" />
                    <p>{item.answer}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Want to dive deeper into our research? Schedule a consultation with our team.
          </p>
          <button 
            onClick={onScheduleCall}
            className="inline-block bg-[#1B7A4E] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#156B3F] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}