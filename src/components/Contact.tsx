import { useState, useEffect } from 'react';
import { Mail, Phone, Clock, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_zuw0jdg';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_kdvvybl';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'iwJKHyLFnEj-_NXor';

export default function Contact() {
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

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        emailParams
      );

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        country: '',
        service: '',
        message: ''
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      setError('Failed to send message. Please try again or contact us directly.');
      console.error('Form submission error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#0f3460] to-[#1a5276] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Get in touch with our immigration experts for a free consultation
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <p className="text-gray-600 mb-8">
                  Have questions about our services? Our team of experts is here to help. Reach out to us through any of the channels below or fill out the contact form.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:shadow-md transition-all duration-200 border-l-4 border-[#d4af37]">
                  <div className="bg-gradient-to-br from-[#0f3460] to-[#1a5276] text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                    <a href="mailto:info@getsecondpassport.eu" className="text-[#0f3460] hover:underline font-medium">
                      info@getsecondpassport.eu
                    </a>
                    <p className="text-sm text-gray-600 mt-1">We will respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:shadow-md transition-all duration-200 border-l-4 border-[#0f3460]">
                  <div className="bg-gradient-to-br from-[#0f3460] to-[#1a5276] text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                    <a href="tel:+351253276030" className="text-[#0f3460] hover:underline font-medium">
                      +351 253 276 030
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Mon-Fri 9am-5pm CEST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:shadow-md transition-all duration-200 border-l-4 border-[#d4af37]">
                  <div className="bg-gradient-to-br from-[#0f3460] to-[#1a5276] text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                    <a href="https://wa.me/31629566895" target="_blank" rel="noopener noreferrer" className="text-[#0f3460] hover:underline font-medium">
                      +31 6 29 56 68 95
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Quick responses via WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:shadow-md transition-all duration-200 border-l-4 border-[#0f3460]">
                  <div className="bg-gradient-to-br from-[#0f3460] to-[#1a5276] text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-[#f5f5f5] to-[#e8dcc4] p-4 sm:p-8 rounded-2xl shadow-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              {submitted ? (
                <div className="flex items-center justify-center h-64 bg-white rounded-lg">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
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
                  <div className="grid grid-cols-1 gap-4">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-gray-300 focus:border-[#0f3460] focus:ring-[#0f3460] w-full"
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-gray-300 focus:border-[#0f3460] focus:ring-[#0f3460] w-full"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-gray-300 focus:border-[#0f3460] focus:ring-[#0f3460] w-full"
                    />
                    <Input
                      type="text"
                      name="country"
                      placeholder="Your Country"
                      value={formData.country}
                      onChange={handleChange}
                      className="border-gray-300 focus:border-[#0f3460] focus:ring-[#0f3460] w-full"
                    />
                  </div>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0f3460] focus:ring-1 focus:ring-[#0f3460]"
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
                    rows={6}
                    className="border-gray-300 focus:border-[#0f3460] focus:ring-[#0f3460]"
                  />

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-[#0f3460] to-[#1a5276] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#d4af37] hover:to-[#c9a02e] hover:text-[#0f3460] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#d4af37]">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does the application process take?</h3>
              <p className="text-gray-600">
                Processing times vary by program. Caribbean CBIP programs typically take 3-6 months, while European programs may take 6-12 months. We provide detailed timelines during your consultation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#0f3460]">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What are the minimum investment requirements?</h3>
              <p className="text-gray-600">
                Investment requirements vary by country and program. Caribbean programs start from $100,000 while European programs typically range from €280,000 to €500,000. We offer various investment options to suit different financial situations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#d4af37]">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I include my family members?</h3>
              <p className="text-gray-600">
                Yes! Most programs allow family inclusion. Spouses, children, and sometimes parents can be included in your application. The cost may vary based on family size and the specific program.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#0f3460]">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do I need to visit the country during the application?</h3>
              <p className="text-gray-600">
                Most applications can be processed without travel, though some programs may require an interview or final approval visit. We will guide you through the specific requirements for your chosen program.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#d4af37]">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if my application is denied?</h3>
              <p className="text-gray-600">
                While our success rate is high, if an application doesn't meet requirements initially, we work with you to address deficiencies or explore alternative programs that better suit your situation.
              </p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
