import { useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface FAQProps {
  onScheduleCall: () => void;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 'about-1',
    question: 'What services does Dera Consultants offer?',
    answer: 'Dera Consultants specializes in citizenship by investment and residency programs across the Caribbean and Europe. We provide comprehensive guidance on program selection, investment options, document preparation, and coordination with government agencies. Our team connects you with legal professionals and qualified agencies to ensure a smooth and transparent application process.'
  },
  {
    id: 'about-2',
    question: 'How do you support clients?',
    answer: 'We provide personalized support throughout your entire journey. This includes one-on-one consultations, detailed program analysis, investment option evaluation, document checklist preparation, coordination with relevant agencies, regular progress updates, and access to our network of trusted legal and financial professionals. We are committed to making the process seamless and transparent.'
  },
  {
    id: 'about-3',
    question: 'Is Dera Consultants involved in laws and legal processing?',
    answer: 'No, we do not perform legal or legal consultancy services. Instead, we connect you with qualified legal professionals and agencies who handle the legal work. Our role is to guide you through the process, help you understand your options, and coordinate with the appropriate agencies to ensure everything runs smoothly.'
  },
  {
    id: 'faq-1',
    question: 'What is a Citizenship by Investment program?',
    answer: 'Citizenship by Investment (CBI) programs allow individuals to obtain citizenship in a country by making a financial contribution to the national economy. This can be through real estate investment, government bonds, or direct donations. Our team helps you navigate these programs to find the best fit for your needs and financial situation.'
  },
  {
    id: 'faq-2',
    question: 'How long does the citizenship application process typically take?',
    answer: 'The processing time varies depending on the specific program and country. Most Caribbean CBI programs take 3-6 months on average, while some European residency programs may take 6-12 months. We coordinate with all relevant agencies to ensure your application moves smoothly through each stage of the process.'
  },
  {
    id: 'faq-3',
    question: 'What documents are required for a citizenship application?',
    answer: 'Required documents typically include a valid passport, birth certificate, marriage certificate (if applicable), police clearance certificate, medical examination results, and financial documents proving the source of funds. The exact requirements depend on the specific program. We provide a comprehensive checklist tailored to your chosen program.'
  },
  {
    id: 'faq-4',
    question: 'Can I maintain my current citizenship when obtaining a second passport?',
    answer: 'Most countries allow dual citizenship. However, some countries do not recognize dual citizenship, and certain nations may require you to renounce your previous citizenship. We advise you to consult with legal professionals regarding your specific situation, and we connect you with trusted agencies who can provide legal guidance.'
  },
  {
    id: 'faq-5',
    question: 'What are the investment options available in Caribbean CBI programs?',
    answer: 'Caribbean CBI programs typically offer multiple investment options: real estate investment (usually $200,000-$400,000), government bonds ($150,000-$250,000), or direct donations ($100,000-$250,000). Each option has different benefits and timelines. We help you evaluate which option aligns best with your financial goals and lifestyle preferences.'
  },
  {
    id: 'faq-6',
    question: 'Is there a processing fee or service fee involved?',
    answer: 'Yes, there are government processing fees and program-specific costs in addition to the investment amount. We provide transparent, detailed breakdowns of all costs before you proceed. Our advisory fee covers consultation, guidance, and coordination with relevant agencies throughout your journey.'
  }
];

export default function FAQ({ onScheduleCall }: FAQProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Simulate loading state (in real scenario, you would fetch FAQ data from an API)
  const handleLoadFAQ = async () => {
    setLoading(true);
    setError(null);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      setLoading(false);
    } catch (err) {
      setError('Failed to load FAQ. Please try again.');
      setLoading(false);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f3460] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about citizenship by investment, residency programs, and our services
          </p>
        </div>

        {/* Error State */}
        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-red-800">Error Loading FAQ</h3>
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-16 bg-gray-200 rounded-lg animate-pulse"></div>
            ))}
          </div>
        )}

        {/* FAQ Accordion */}
        {!loading && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((item, index) => (
                <AccordionItem 
                  key={item.id} 
                  value={item.id}
                  className={index !== faqData.length - 1 ? 'border-b' : ''}
                >
                  <AccordionTrigger className="px-6 py-5 hover:bg-gray-50 transition-colors duration-200 text-left font-semibold text-gray-900 hover:text-[#0f3460]">
                    <span className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-[#d4af37] text-[#0f3460] flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-5 bg-gray-50 text-gray-700 leading-relaxed">
                    <div className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                      <p>{item.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Didn't find your answer? Our team is ready to help.
          </p>
          <button 
            onClick={onScheduleCall}
            className="inline-block bg-gradient-to-r from-[#d4af37] to-[#e0c158] text-[#0f3460] px-8 py-3 rounded-lg font-semibold hover:from-[#c9a02e] hover:to-[#d4a832] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
