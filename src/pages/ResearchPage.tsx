import { useState, useEffect } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion';
import { CheckCircle, Send, Mail, Phone } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_zuw0jdg';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_kdvvybl';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'iwJKHyLFnEj-_NXor';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What services does Dera Consultants offer?',
    answer: 'Dera Consultants provides comprehensive immigration and citizenship advisory services. We specialize in Citizenship by Investment (CBI) programs, residency solutions, and relocation planning. Our services include program research and analysis, application guidance, document preparation support, and coordination with legal professionals and government agencies to ensure a smooth process from start to finish.'
  },
  {
    id: 'faq-2',
    question: 'How do you support clients?',
    answer: 'We support clients through every stage of their immigration journey. From the initial consultation where we assess your goals and eligibility, to program selection, document preparation, application submission, and post-approval follow-up. Our team provides personalized guidance, regular progress updates, and direct access to our consultants. We also coordinate with legal professionals, real estate agents, and government agencies on your behalf.'
  },
  {
    id: 'faq-3',
    question: 'Is Dera Consultants involved in laws and legal processing?',
    answer: 'No, we do not perform legal or legal consultancy services. Instead, we connect you with qualified legal professionals and agencies who handle the legal work. Our role is to guide you through the process, help you understand your options, and coordinate with the appropriate agencies to ensure everything runs smoothly.'
  },
  {
    id: 'faq-4',
    question: 'What is a Citizenship by Investment program?',
    answer: 'A Citizenship by Investment (CBI) program allows individuals and families to obtain citizenship in a country by making a qualifying economic contribution. This can include donations to a national development fund, investments in approved real estate, or purchases of government bonds. CBI programs are offered by several Caribbean nations including Dominica, Grenada, St. Lucia, and Antigua & Barbuda, providing benefits such as visa-free travel, tax planning opportunities, and a secure second passport.'
  },
  {
    id: 'faq-5',
    question: 'How long does the citizenship application process typically take?',
    answer: 'Processing times vary by program and jurisdiction. Caribbean CBI programs typically take 3 to 6 months from application submission to approval. Some programs offer accelerated processing options that can reduce this timeline. European residency programs generally take 6 to 12 months. During your consultation, we provide a detailed timeline specific to your chosen program and circumstances.'
  },
  {
    id: 'faq-6',
    question: 'What documents are required for a citizenship application?',
    answer: 'Required documents typically include a valid passport, birth certificate, marriage certificate (if applicable), police clearance certificates, medical examination results, proof of funds or source of wealth documentation, bank reference letters, and professional references. Some programs may require additional documents based on your specific situation. We provide a comprehensive, program-specific checklist and guide you through the entire document preparation process.'
  },
  {
    id: 'faq-7',
    question: 'Can I maintain my current citizenship when obtaining a second passport?',
    answer: 'Yes, most Citizenship by Investment programs allow you to retain your existing citizenship. The Caribbean CBI nations — Dominica, Grenada, St. Lucia, and Antigua & Barbuda — all permit dual citizenship. However, it is important to check the laws of your current country of citizenship, as some nations have restrictions on holding dual nationality. We advise you on the specific implications based on your current citizenship.'
  },
  {
    id: 'faq-8',
    question: 'What are the investment options available in Caribbean CBI programs?',
    answer: 'Caribbean CBI programs generally offer several investment routes: (1) National Development Fund donations, which are non-refundable contributions starting from approximately $100,000 for a single applicant; (2) Real estate investments in government-approved projects, typically starting from $200,000 with a holding period of 3-7 years; (3) Government bonds in select programs. Each option has different cost structures, timelines, and benefits. We help you evaluate which investment route best aligns with your financial goals and preferences.'
  },
  {
    id: 'faq-9',
    question: 'Is there a processing fee or service fee involved?',
    answer: 'Yes, there are fees associated with the citizenship application process. These include government processing fees, due diligence fees, and our professional service fees. Government fees vary by program and the number of dependents included in your application. We provide a complete, transparent breakdown of all costs during your initial consultation so there are no surprises. Our goal is to ensure you have a clear understanding of the total investment required before you commit.'
  },
  {
    id: 'faq-10',
    question: 'Can my family members be included in my application?',
    answer: 'Yes, most CBI programs allow you to include your spouse, dependent children, and in many cases, parents and grandparents in a single application. Some programs also allow siblings to be included under certain conditions. Including family members increases the investment or donation amount, but it is significantly more cost-effective than filing separate applications. We guide you through the family inclusion requirements and help you understand the additional costs involved.'
  }
];

export default function ResearchPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY !== 'public_key_placeholder') {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const emailParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        service: formData.service,
        message: formData.message
      };

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, emailParams);

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', country: '', service: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError('Failed to send message. Please try again or contact us directly.');
      console.error('Form submission error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f3460] to-[#1a5276]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => console.error('Video error:', e)}
        >
          <source src="https://i.imgur.com/aYwQ6ld.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f3460]/80 via-[#0f3460]/70 to-[#0f3460]/90" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Everything You Need<br />
            <span className="text-[#4ade80]">to Know</span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our services, citizenship programs, and the application process.
          </p>
        </div>
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80V40C240 0 480 0 720 40C960 80 1200 80 1440 40V80H0Z" fill="#f3f4f6" />
          </svg>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-100 via-gray-50 to-white relative">
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gray-200/40 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-200/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-100/50 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3460] mb-4">
              Common Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get clear, straightforward answers about Dera Consultants and our citizenship advisory services.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-200/60">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((item, index) => (
                <AccordionItem 
                  key={item.id} 
                  value={item.id}
                  className={index !== faqData.length - 1 ? 'border-b border-gray-100' : ''}
                >
                  <AccordionTrigger className="px-6 py-5 hover:bg-gray-50/80 transition-colors duration-200 text-left font-semibold text-gray-900 hover:text-[#0f3460]">
                    <span className="flex items-center gap-4">
                      <span className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1B7A4E] to-[#156B3F] text-white flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-sm">
                        {index + 1}
                      </span>
                      <span className="text-[15px] sm:text-base">{item.question}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-5 bg-gradient-to-r from-gray-50/50 to-white text-gray-700 leading-relaxed">
                    <div className="flex gap-3 pl-13">
                      <CheckCircle className="w-5 h-5 text-[#1B7A4E] flex-shrink-0 mt-0.5" />
                      <p className="text-[15px] leading-7">{item.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3460] mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Reach out to our team and we will get back to you within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
            {/* Contact Info Cards */}
            <div className="lg:col-span-2 space-y-5">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0f3460] to-[#1a5276] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Email Us</h3>
                    <a href="mailto:info@getsecondpassport.eu" className="text-[#0f3460] hover:underline text-sm font-medium">
                      info@getsecondpassport.eu
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0f3460] to-[#1a5276] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Call Us</h3>
                    <a href="tel:+351253276030" className="text-[#0f3460] hover:underline text-sm font-medium">
                      +351 253 276 030
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1B7A4E] to-[#156B3F] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">WhatsApp</h3>
                    <a href="https://wa.me/31629566895" target="_blank" rel="noopener noreferrer" className="text-[#0f3460] hover:underline text-sm font-medium">
                      +31 6 29 56 68 95
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#0f3460] to-[#1a5276] p-6 rounded-xl text-white shadow-lg">
                <h3 className="font-bold text-lg mb-2">Free Consultation</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Book a free, no-obligation consultation with our immigration experts. We will assess your situation and recommend the best path forward.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                
                {submitted ? (
                  <div className="flex items-center justify-center h-64 bg-green-50 rounded-xl">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h4>
                      <p className="text-gray-600">Thank you for reaching out. We will be in touch soon!</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                        {error}
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-gray-200 focus:border-[#0f3460] focus:ring-[#0f3460]"
                      />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-gray-200 focus:border-[#0f3460] focus:ring-[#0f3460]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-gray-200 focus:border-[#0f3460] focus:ring-[#0f3460]"
                      />
                      <Input
                        type="text"
                        name="country"
                        placeholder="Your Country"
                        value={formData.country}
                        onChange={handleChange}
                        className="border-gray-200 focus:border-[#0f3460] focus:ring-[#0f3460]"
                      />
                    </div>

                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0f3460] focus:ring-1 focus:ring-[#0f3460] text-gray-700 bg-white"
                    >
                      <option value="">Select a Service</option>
                      <option value="caribbean-cbip">Caribbean CBIP</option>
                      <option value="portugal-europe">Portugal & Europe</option>
                      <option value="residency">Residency Solutions</option>
                      <option value="citizenship">Citizenship Planning</option>
                      <option value="investment">Investment Advisory</option>
                      <option value="other">Other</option>
                    </select>

                    <Textarea
                      name="message"
                      placeholder="Tell us about your immigration goals..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="border-gray-200 focus:border-[#0f3460] focus:ring-[#0f3460]"
                    />

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-[#1B7A4E] to-[#156B3F] text-white px-6 py-3.5 rounded-xl font-semibold hover:from-[#156B3F] hover:to-[#0f5a33] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-5 h-5" />
                      {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
