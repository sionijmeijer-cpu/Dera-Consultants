import { X, CheckCircle } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

interface ScheduleCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Country {
  code: string;
  name: string;
  flag: string;
  dialCode: string;
}

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_zuw0jdg';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_kdvvybl';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'iwJKHyLFnEj-_NXor';

const COUNTRIES: Country[] = [
  { code: 'US', name: 'United States', flag: '\u{1F1FA}\u{1F1F8}', dialCode: '+1' },
  { code: 'GB', name: 'United Kingdom', flag: '\u{1F1EC}\u{1F1E7}', dialCode: '+44' },
  { code: 'CA', name: 'Canada', flag: '\u{1F1E8}\u{1F1E6}', dialCode: '+1' },
  { code: 'AU', name: 'Australia', flag: '\u{1F1E6}\u{1F1FA}', dialCode: '+61' },
  { code: 'NZ', name: 'New Zealand', flag: '\u{1F1F3}\u{1F1FF}', dialCode: '+64' },
  { code: 'DE', name: 'Germany', flag: '\u{1F1E9}\u{1F1EA}', dialCode: '+49' },
  { code: 'FR', name: 'France', flag: '\u{1F1EB}\u{1F1F7}', dialCode: '+33' },
  { code: 'IT', name: 'Italy', flag: '\u{1F1EE}\u{1F1F9}', dialCode: '+39' },
  { code: 'ES', name: 'Spain', flag: '\u{1F1EA}\u{1F1F8}', dialCode: '+34' },
  { code: 'NL', name: 'Netherlands', flag: '\u{1F1F3}\u{1F1F1}', dialCode: '+31' },
  { code: 'BE', name: 'Belgium', flag: '\u{1F1E7}\u{1F1EA}', dialCode: '+32' },
  { code: 'CH', name: 'Switzerland', flag: '\u{1F1E8}\u{1F1ED}', dialCode: '+41' },
  { code: 'AT', name: 'Austria', flag: '\u{1F1E6}\u{1F1F9}', dialCode: '+43' },
  { code: 'DK', name: 'Denmark', flag: '\u{1F1E9}\u{1F1F0}', dialCode: '+45' },
  { code: 'SE', name: 'Sweden', flag: '\u{1F1F8}\u{1F1EA}', dialCode: '+46' },
  { code: 'NO', name: 'Norway', flag: '\u{1F1F3}\u{1F1F4}', dialCode: '+47' },
  { code: 'FI', name: 'Finland', flag: '\u{1F1EB}\u{1F1EE}', dialCode: '+358' },
  { code: 'PL', name: 'Poland', flag: '\u{1F1F5}\u{1F1F1}', dialCode: '+48' },
  { code: 'PT', name: 'Portugal', flag: '\u{1F1F5}\u{1F1F9}', dialCode: '+351' },
  { code: 'IE', name: 'Ireland', flag: '\u{1F1EE}\u{1F1EA}', dialCode: '+353' },
  { code: 'GR', name: 'Greece', flag: '\u{1F1EC}\u{1F1F7}', dialCode: '+30' },
  { code: 'TR', name: 'Turkey', flag: '\u{1F1F9}\u{1F1F7}', dialCode: '+90' },
  { code: 'AE', name: 'United Arab Emirates', flag: '\u{1F1E6}\u{1F1EA}', dialCode: '+971' },
  { code: 'SA', name: 'Saudi Arabia', flag: '\u{1F1F8}\u{1F1E6}', dialCode: '+966' },
  { code: 'QA', name: 'Qatar', flag: '\u{1F1F6}\u{1F1E6}', dialCode: '+974' },
  { code: 'KW', name: 'Kuwait', flag: '\u{1F1F0}\u{1F1FC}', dialCode: '+965' },
  { code: 'BH', name: 'Bahrain', flag: '\u{1F1E7}\u{1F1ED}', dialCode: '+973' },
  { code: 'IN', name: 'India', flag: '\u{1F1EE}\u{1F1F3}', dialCode: '+91' },
  { code: 'PK', name: 'Pakistan', flag: '\u{1F1F5}\u{1F1F0}', dialCode: '+92' },
  { code: 'BD', name: 'Bangladesh', flag: '\u{1F1E7}\u{1F1E9}', dialCode: '+880' },
  { code: 'CN', name: 'China', flag: '\u{1F1E8}\u{1F1F3}', dialCode: '+86' },
  { code: 'JP', name: 'Japan', flag: '\u{1F1EF}\u{1F1F5}', dialCode: '+81' },
  { code: 'KR', name: 'South Korea', flag: '\u{1F1F0}\u{1F1F7}', dialCode: '+82' },
  { code: 'SG', name: 'Singapore', flag: '\u{1F1F8}\u{1F1EC}', dialCode: '+65' },
  { code: 'MY', name: 'Malaysia', flag: '\u{1F1F2}\u{1F1FE}', dialCode: '+60' },
  { code: 'TH', name: 'Thailand', flag: '\u{1F1F9}\u{1F1ED}', dialCode: '+66' },
  { code: 'PH', name: 'Philippines', flag: '\u{1F1F5}\u{1F1ED}', dialCode: '+63' },
  { code: 'ID', name: 'Indonesia', flag: '\u{1F1EE}\u{1F1E9}', dialCode: '+62' },
  { code: 'RU', name: 'Russia', flag: '\u{1F1F7}\u{1F1FA}', dialCode: '+7' },
  { code: 'EG', name: 'Egypt', flag: '\u{1F1EA}\u{1F1EC}', dialCode: '+20' },
  { code: 'ZA', name: 'South Africa', flag: '\u{1F1FF}\u{1F1E6}', dialCode: '+27' },
  { code: 'NG', name: 'Nigeria', flag: '\u{1F1F3}\u{1F1EC}', dialCode: '+234' },
  { code: 'KE', name: 'Kenya', flag: '\u{1F1F0}\u{1F1EA}', dialCode: '+254' },
  { code: 'GH', name: 'Ghana', flag: '\u{1F1EC}\u{1F1ED}', dialCode: '+233' },
  { code: 'BR', name: 'Brazil', flag: '\u{1F1E7}\u{1F1F7}', dialCode: '+55' },
  { code: 'AR', name: 'Argentina', flag: '\u{1F1E6}\u{1F1F7}', dialCode: '+54' },
  { code: 'MX', name: 'Mexico', flag: '\u{1F1F2}\u{1F1FD}', dialCode: '+52' },
  { code: 'CO', name: 'Colombia', flag: '\u{1F1E8}\u{1F1F4}', dialCode: '+57' },
  { code: 'CL', name: 'Chile', flag: '\u{1F1E8}\u{1F1F1}', dialCode: '+56' },
  { code: 'GD', name: 'Grenada', flag: '\u{1F1EC}\u{1F1E9}', dialCode: '+1-473' },
  { code: 'KN', name: 'Saint Kitts and Nevis', flag: '\u{1F1F0}\u{1F1F3}', dialCode: '+1-869' },
  { code: 'LC', name: 'Saint Lucia', flag: '\u{1F1F1}\u{1F1E8}', dialCode: '+1-758' },
  { code: 'AG', name: 'Antigua and Barbuda', flag: '\u{1F1E6}\u{1F1EC}', dialCode: '+1-268' },
  { code: 'DM', name: 'Dominica', flag: '\u{1F1E9}\u{1F1F2}', dialCode: '+1-767' },
  { code: 'JM', name: 'Jamaica', flag: '\u{1F1EF}\u{1F1F2}', dialCode: '+1-876' },
  { code: 'TT', name: 'Trinidad and Tobago', flag: '\u{1F1F9}\u{1F1F9}', dialCode: '+1-868' },
];

export default function ScheduleCallModal({ isOpen, onClose }: ScheduleCallModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+1',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY !== 'public_key_placeholder') {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
    
    const detectCountryCode = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const countryCode = data.country_code;
        const foundCountry = COUNTRIES.find(c => c.code === countryCode);
        const code = foundCountry?.dialCode || '+1';
        setFormData(prev => ({ ...prev, countryCode: code }));
      } catch (err) {
        console.log('Could not detect country code');
      }
    };
    
    detectCountryCode();
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && e.target === e.currentTarget) {
      onClose();
    }
  };

  const services = [
    'Citizenship by Investment',
    'Residency Programs',
    'Work Visa Assistance',
    'Family Immigration',
    'Business Immigration',
    'Investment Immigration',
    'Other'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const emailParams = {
        name: formData.name,
        email: formData.email,
        phone: `${formData.countryCode} ${formData.phone}`,
        service: formData.service,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime
      };

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, emailParams);

      setShowSuccess(true);
      setFormData({ name: '', email: '', countryCode: '+1', phone: '', service: '', preferredDate: '', preferredTime: '' });

      setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 3000);
    } catch (err) {
      setError('Failed to schedule call. Please try again or contact us directly.');
      console.error('Form submission error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-lg cursor-pointer"
      style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-2xl max-w-md w-full relative cursor-default overflow-y-auto max-h-[90vh] mx-4 sm:mx-0"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 z-10"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="p-4 sm:p-8">
          {showSuccess ? (
            <div className="flex flex-col items-center justify-center py-8">
              <CheckCircle className="w-16 h-16 text-green-500 mb-4 animate-pulse" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600 text-center">
                Your consultation has been scheduled successfully. We'll send you a confirmation email shortly and contact you at the preferred time.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Schedule a Call</h2>
              <p className="text-gray-600 mb-6">Get in touch with our immigration experts</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f3460] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f3460] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <select name="countryCode" value={formData.countryCode} onChange={handleChange}
                      className="w-full sm:w-32 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f3460] focus:border-transparent transition-all duration-200 text-sm">
                      {COUNTRIES.map((country) => (
                        <option key={country.code} value={country.dialCode}>{country.flag} {country.name}</option>
                      ))}
                    </select>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f3460] focus:border-transparent transition-all duration-200"
                      placeholder="Enter your phone number" />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Interested In *</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange} required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f3460] focus:border-transparent transition-all duration-200">
                    <option value="">Select a service</option>
                    {services.map((svc) => (<option key={svc} value={svc}>{svc}</option>))}
                  </select>
                </div>

                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">Preferred Call Date *</label>
                  <input type="date" id="preferredDate" name="preferredDate" value={formData.preferredDate} onChange={handleChange} required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f3460] focus:border-transparent transition-all duration-200" />
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">Preferred Call Time *</label>
                  <select id="preferredTime" name="preferredTime" value={formData.preferredTime} onChange={handleChange} required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f3460] focus:border-transparent transition-all duration-200">
                    <option value="">Select a time</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                    <option value="evening">Evening (5 PM - 8 PM)</option>
                  </select>
                </div>

                <button type="submit" disabled={isLoading}
                  className="w-full bg-[#1B7A4E] text-white py-2 rounded-lg font-semibold hover:bg-[#156B3F] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 mt-6 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100">
                  {isLoading ? 'Scheduling...' : 'Schedule Call'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}