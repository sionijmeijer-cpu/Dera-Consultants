import { X, CheckCircle } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

interface ScheduleCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Initialize EmailJS - You'll need to replace with your actual keys
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_2v0hfse';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_kdvvybl';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'iwJKHyLFnEj-_NXor';

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

  // Country code mapping by country
  const countryCodeMap: Record<string, string> = {
    'US': '+1',
    'GB': '+44',
    'CA': '+1',
    'AU': '+61',
    'NZ': '+64',
    'DE': '+49',
    'FR': '+33',
    'IT': '+39',
    'ES': '+34',
    'NL': '+31',
    'BE': '+32',
    'CH': '+41',
    'AT': '+43',
    'DK': '+45',
    'SE': '+46',
    'NO': '+47',
    'FI': '+358',
    'PL': '+48',
    'TR': '+90',
    'IN': '+91',
    'CN': '+86',
    'JP': '+81',
    'HK': '+852',
    'SG': '+65',
    'MY': '+60',
    'TH': '+66',
    'ID': '+62',
    'ZA': '+27',
    'NG': '+234',
    'AE': '+971',
    'SA': '+966',
    'BR': '+55',
    'CL': '+56',
    'CO': '+57',
    'MX': '+52',
    'PA': '+507',
    'CR': '+506',
    'JM': '+1-876',
    'BS': '+1-242',
    'BB': '+1-246',
    'BM': '+1-441',
    'GD': '+1-473',
    'KN': '+1-869',
    'LC': '+1-758',
    'VC': '+1-784',
    'TC': '+1-649',
    'TT': '+1-868',
    'KY': '+1-345',
    'PR': '+1-939',
  };

  // Initialize EmailJS and auto-detect country code on component mount
  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY !== 'public_key_placeholder') {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
    
    // Auto-detect country code based on user's location
    const detectCountryCode = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const countryCode = data.country_code;
        const code = countryCodeMap[countryCode] || '+1';
        setFormData(prev => ({
          ...prev,
          countryCode: code
        }));
      } catch (err) {
        // Default to +1 if detection fails
        console.log('Could not detect country code');
      }
    };
    
    detectCountryCode();
  }, []);

  // Handle backdrop click to close modal
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
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Send email using EmailJS
      const emailParams = {
        name: formData.name,
        email: formData.email,
        phone: `${formData.countryCode} ${formData.phone}`,
        service: formData.service,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        emailParams
      );

      // Show success message
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        countryCode: '+1',
        phone: '',
        service: '',
        preferredDate: '',
        preferredTime: '',
      });

      // Close modal after 3 seconds
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
        className="bg-white rounded-lg shadow-2xl max-w-md w-full relative cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Modal Content */}
        <div className="p-8">
          {showSuccess ? (
            // Success Message
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
                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f3460] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f3460] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <div className="flex gap-2">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="w-24 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f3460] focus:border-transparent transition-all duration-200"
                    >
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+1-242">🇧🇸 +1-242</option>
                      <option value="+1-246">🇧🇧 +1-246</option>
                      <option value="+1-441">🇧🇲 +1-441</option>
                      <option value="+1-876">🇯🇲 +1-876</option>
                      <option value="+1-473">🇬🇩 +1-473</option>
                      <option value="+1-649">🇹🇨 +1-649</option>
                      <option value="+1-869">🇰🇳 +1-869</option>
                      <option value="+1-784">🇻🇨 +1-784</option>
                      <option value="+1-758">🇱🇨 +1-758</option>
                      <option value="+1-868">🇹🇹 +1-868</option>
                      <option value="+1-939">🇵🇷 +1-939</option>
                      <option value="+1-345">🇰🇾 +1-345</option>
                      <option value="+33">🇫🇷 +33</option>
                      <option value="+49">🇩🇪 +49</option>
                      <option value="+39">🇮🇹 +39</option>
                      <option value="+34">🇪🇸 +34</option>
                      <option value="+31">🇳🇱 +31</option>
                      <option value="+32">🇧🇪 +32</option>
                      <option value="+41">🇨🇭 +41</option>
                      <option value="+43">🇦🇹 +43</option>
                      <option value="+45">🇩🇰 +45</option>
                      <option value="+46">🇸🇪 +46</option>
                      <option value="+47">🇳🇴 +47</option>
                      <option value="+358">🇫🇮 +358</option>
                      <option value="+48">🇵🇱 +48</option>
                      <option value="+90">🇹🇷 +90</option>
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+86">🇨🇳 +86</option>
                      <option value="+81">🇯🇵 +81</option>
                      <option value="+852">🇭🇰 +852</option>
                      <option value="+65">🇸🇬 +65</option>
                      <option value="+60">🇲🇾 +60</option>
                      <option value="+66">🇹🇭 +66</option>
                      <option value="+62">🇮🇩 +62</option>
                      <option value="+61">🇦🇺 +61</option>
                      <option value="+64">🇳🇿 +64</option>
                      <option value="+27">🇿🇦 +27</option>
                      <option value="+234">🇳🇬 +234</option>
                      <option value="+971">🇦🇪 +971</option>
                      <option value="+966">🇸🇦 +966</option>
                      <option value="+1-868">🇹🇹 +1-868</option>
                      <option value="+55">🇧🇷 +55</option>
                      <option value="+56">🇨🇱 +56</option>
                      <option value="+57">🇨🇴 +57</option>
                      <option value="+52">🇲🇽 +52</option>
                      <option value="+507">🇵🇦 +507</option>
                      <option value="+506">🇨🇷 +506</option>
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f3460] focus:border-transparent transition-all duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                {/* Service Dropdown */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f3460] focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a service</option>
                    {services.map((svc) => (
                      <option key={svc} value={svc}>
                        {svc}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date Picker */}
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Call Date *
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f3460] focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Preferred Time Field */}
                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Call Time *
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f3460] focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a time</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                    <option value="evening">Evening (5 PM - 8 PM)</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-[#0f3460] to-[#1a5276] text-white py-2 rounded-lg font-semibold hover:from-[#d4af37] hover:to-[#c9a02e] hover:text-[#0f3460] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 mt-6 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
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
