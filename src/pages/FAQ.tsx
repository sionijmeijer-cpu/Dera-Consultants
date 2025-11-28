import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  // About Dera Consultants
  {
    id: "about-1",
    category: "About Dera Consultants",
    question: "What services does Dera Consultants offer?",
    answer:
      "We provide expert guidance in choosing the right citizenship and residency programs, connecting you with trusted legal and investment agencies, and supporting you throughout the application process. We do not perform legal work ourselves but act as your trusted navigator.",
  },
  {
    id: "about-2",
    category: "About Dera Consultants",
    question: "How do you support clients?",
    answer:
      "We understand your goals, recommend suitable programs, connect you with reputable partners, and manage the coordination and documentation process until you secure your passport or residency. You relax—we handle the heavy lifting!",
  },
  {
    id: "about-3",
    category: "About Dera Consultants",
    question: "Is Dera Consultants involved in laws and legal processing?",
    answer:
      "No, we do not perform legal or legal consultancy services. Instead, we connect you with qualified legal professionals and agencies who handle the legal work.",
  },

  // Caribbean CBI
  {
    id: "cbi-1",
    category: "Caribbean Citizenship by Investment (CBI)",
    question: "What countries in the Caribbean offer CBI programs?",
    answer:
      "Popular Caribbean CBI programs include Dominica, St. Kitts and Nevis, Antigua and Barbuda, St. Lucia, and Grenada. Each program has unique investment requirements, processing timelines, and benefits. We can help you identify which program best suits your needs and budget.",
  },
  {
    id: "cbi-2",
    category: "Caribbean Citizenship by Investment (CBI)",
    question: "How long does it take to get Caribbean citizenship?",
    answer:
      "Processing times vary by country but typically range from 3 to 6 months. Some programs offer expedited options that can reduce this to 2-3 months with additional fees. We'll provide you with a realistic timeline based on your chosen program and application complexity.",
  },
  {
    id: "cbi-3",
    category: "Caribbean Citizenship by Investment (CBI)",
    question: "Do I need to visit the country?",
    answer:
      "This depends on the specific program. Many Caribbean CBI programs allow you to complete the process without visiting, though some may require a brief visit for final verification or citizenship ceremonies. We'll clarify the requirements for your chosen program during the initial consultation.",
  },
  {
    id: "cbi-4",
    category: "Caribbean Citizenship by Investment (CBI)",
    question: "Can my family also obtain citizenship?",
    answer:
      "Yes, most Caribbean CBI programs allow qualified family members to be included in the application. This typically includes spouses, dependent children, and sometimes parents or siblings. Each program has specific requirements and age limits. We'll help you determine your family's eligibility.",
  },

  // Portugal & European Residency & Citizenship
  {
    id: "portugal-1",
    category: "Portugal & European Residency & Citizenship",
    question: "What are the main ways to obtain residency and citizenship in Portugal?",
    answer:
      "Main pathways include the D7 Passive Income Visa, Golden Visa (investment-based), and employment-based residency. After 5-10 years of residency, you can apply for Portuguese citizenship. Each pathway has different financial requirements and processing times.",
  },
  {
    id: "portugal-2",
    category: "Portugal & European Residency & Citizenship",
    question: "How long does it take to get Portuguese citizenship?",
    answer:
      "The timeline typically consists of obtaining residency first (1-3 months), maintaining residency for 5-10 years depending on the pathway, and then citizenship processing (3-6 months). Total time ranges from 5-10+ years. We can outline the complete timeline based on your chosen pathway.",
  },
  {
    id: "portugal-3",
    category: "Portugal & European Residency & Citizenship",
    question: "What are the benefits of European citizenship?",
    answer:
      "European citizenship provides visa-free travel to 190+ countries, freedom of movement within the EU/Schengen area, access to European healthcare and social services, employment opportunities across Europe, and enhanced global mobility. It also provides security and stability through EU legal protections.",
  },
  {
    id: "portugal-4",
    category: "Portugal & European Residency & Citizenship",
    question: "Do I need to live in Portugal full-time during the process?",
    answer:
      "No, most residency programs (especially D7 and Golden Visa) don't require full-time residence. You only need to maintain your residency status through periodic visits or renewals. Requirements vary by program, and we'll explain the minimum residency obligations for your chosen pathway.",
  },

  // General Questions
  {
    id: "general-1",
    category: "General Questions",
    question: "How much do the investment programs typically cost?",
    answer:
      "Investment costs vary significantly by country and program. Caribbean CBI programs range from $100,000 to $500,000+, while Portugal residency programs start from €280,000 (Golden Visa). We provide transparent cost breakdowns including government fees, processing fees, and investment amounts during initial consultations.",
  },
  {
    id: "general-2",
    category: "General Questions",
    question: "How do I start the process?",
    answer:
      "Reach out to us via our website or schedule a call. We'll analyze your goals, recommend the best options, and guide you through every step.",
  },
  {
    id: "general-3",
    category: "General Questions",
    question: "Is this process safe and legal?",
    answer:
      "Yes, citizenship and residency by investment are legal pathways established and regulated by governments. We operate with full transparency and ensure all processes comply with local and international laws. We work with licensed professionals and maintain the highest standards of compliance and client protection.",
  },
];

interface FAQProps {
  onScheduleCall: () => void;
}

export default function FAQ({ onScheduleCall }: FAQProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Simulate loading on component mount
  useState(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  });

  // Group FAQs by category
  const groupedFAQs = faqData.reduce(
    (acc, faq) => {
      const category = faq.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(faq);
      return acc;
    },
    {} as Record<string, FAQItem[]>
  );

  const categories = Object.keys(groupedFAQs);

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-red-800">
            <h3 className="font-semibold mb-2">Error Loading FAQ</h3>
            <p>{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-32 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our citizenship and residency programs
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-16 bg-gray-200 rounded-lg animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="space-y-12">
            {/* FAQ Categories */}
            {categories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-xl shadow-lg p-8">
                {/* Category Title */}
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span
                    className="inline-block w-1 h-8 bg-gradient-to-b from-blue-900 to-blue-700 mr-4"
                  />
                  {category}
                </h2>

                {/* Accordion */}
                <Accordion type="single" collapsible className="w-full space-y-3">
                  {groupedFAQs[category].map((faq, index) => (
                    <AccordionItem key={faq.id} value={faq.id}>
                      <AccordionTrigger className="text-left hover:text-blue-900 transition-colors duration-200 py-4 px-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg hover:from-gray-100 hover:to-gray-150">
                        <div className="flex items-start gap-3">
                          <span className="text-gold font-bold text-sm bg-blue-900 text-white w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0 mt-0.5">
                            {index + 1}
                          </span>
                          <span className="font-semibold text-gray-900">
                            {faq.question}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-4 px-4 pb-4 text-gray-700 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl shadow-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
          <p className="text-blue-100 mb-6">
            Schedule a consultation with our experts to discuss your specific needs
          </p>
          <button onClick={onScheduleCall} className="px-8 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
