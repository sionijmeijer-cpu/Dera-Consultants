import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useConvexAction } from '../hooks/useConvex';
import GuideStorefront from '../components/GuideStorefront';
import GuidePurchaseModal from '../components/GuidePurchaseModal';
import DownloadModal from '../components/DownloadModal';
import { ArrowRight, Download, Check } from 'lucide-react';

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

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_zuw0jdg';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_kdvvybl';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'iwJKHyLFnEj-_NXor';

export default function GuidesStorePage() {
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
  const [checkoutError, setCheckoutError] = useState('');
  const [downloadModal, setDownloadModal] = useState<{
    isOpen: boolean;
    title: string;
    id: string;
  }>({
    isOpen: false,
    title: '',
    id: '',
  });

  const createCheckoutSession = useConvexAction('stripe:createCheckoutSession');

  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const handleBuyGuide = (guide: Guide) => {
    setSelectedGuide(guide);
    setIsModalOpen(true);
    setCheckoutError('');
  };

  const handleScheduleCall = () => {
    const event = new CustomEvent('openScheduleModal');
    window.dispatchEvent(event);
  };

  const notifyGuidePurchaseLead = async (email: string, guide: Guide) => {
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      name: 'Paid Guide Purchase Request',
      email,
      phone: 'N/A',
      country: 'N/A',
      service: `Paid Guide Checkout: ${guide.title}`,
      message:
        `New paid guide checkout started:\n\n` +
        `Guide: ${guide.title}\n` +
        `Guide ID: ${guide.id}\n` +
        `Price: €${guide.price}\n` +
        `Email: ${email}\n` +
        `Timestamp: ${new Date().toLocaleString()}\n` +
        `Page URL: ${window.location.href}`,
    });
  };

  const handleProceedToCheckout = async (email: string, guide: Guide) => {
    setIsCheckoutLoading(true);
    setCheckoutError('');

    try {
      try {
        await notifyGuidePurchaseLead(email, guide);
      } catch (emailErr) {
        console.error('EmailJS notification failed:', emailErr);
      }

      const baseUrl = window.location.origin;
      const result = await createCheckoutSession({
        guideId: guide.id,
        email,
        successUrl: `${baseUrl}/checkout/success`,
        cancelUrl: `${baseUrl}/guides`,
      });

      if (result?.url) {
        window.location.href = result.url;
      } else {
        setCheckoutError('Could not create checkout session. Please try again.');
        setIsCheckoutLoading(false);
      }
    } catch (err: any) {
      console.error('Checkout error:', err);
      setCheckoutError(err?.message || 'Something went wrong. Please try again.');
      setIsCheckoutLoading(false);
    }
  };

  const freeGuides = [
    {
      id: 1,
      title: 'Portugal Relocation Checklist',
      description:
        'A simple order of operations: NIF, bank account, housing, and the typical next steps.',
      icon: '📋',
      downloadId: 'portugal-checklist',
    },
    {
      id: 2,
      title: 'Caribbean Passport Comparison',
      description:
        'A quick guide to the three most commonly used Caribbean second-passport programs, and which one fits which situation.',
      icon: '🌴',
      downloadId: 'caribbean-comparison',
    },
  ];

  const completeGuide: Guide = {
    id: 'all-guides',
    title: 'Complete Guide Collection',
    description:
      'Get all 4 premium guides together in one complete bundle at the best overall price.',
    price: 179.99,
    currency: 'EUR',
    features: [
      'Golden Visa 2026',
      'D7 Visa Blueprint',
      'D8 Digital Nomad Visa',
      'Complete Caribbean Bundle',
    ],
    image: '📚',
    badge: 'Best Bundle',
  };

  return (
    <div className="bg-white">
      <DownloadModal
        isOpen={downloadModal.isOpen}
        onClose={() => setDownloadModal({ isOpen: false, title: '', id: '' })}
        guideTitle={downloadModal.title}
        guideId={downloadModal.id}
      />

      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f3460] via-[#1a5276] to-[#0d2540]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          <span className="inline-block bg-white/10 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6 backdrop-blur-sm border border-white/20">
            Expert Guides & Playbooks
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Stop Guessing.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-blue-300">
              Start Moving.
            </span>
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

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80V40C240 0 480 0 720 40C960 80 1200 80 1440 40V80H0Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

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

      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-5">
              Free Guides
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Get practical, step-by-step resources to help you plan with clarity, before you speak to an advisor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
            {freeGuides.map((guide) => (
              <div
                key={guide.id}
                className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg transition-all duration-300 hover:border-[#1B7A4E] flex flex-col h-full"
              >
                <div className="text-4xl mb-4">{guide.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0f3460] mb-3">
                  {guide.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-6 flex-grow leading-relaxed">
                  {guide.description}
                </p>
                <button
                  onClick={() =>
                    setDownloadModal({
                      isOpen: true,
                      title: guide.title,
                      id: guide.downloadId,
                    })
                  }
                  className="flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 px-4 bg-[#1B7A4E] text-white font-semibold rounded-lg hover:bg-[#156a3d] transition-all duration-200 hover:scale-105 hover:shadow-md text-sm sm:text-base"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  Download Free Guide
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GuideStorefront onBuyGuide={handleBuyGuide} />

      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 via-blue-50 to-emerald-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border-2 border-purple-200 p-8 sm:p-12 text-center">
            <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Complete Collection
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Complete Guide Collection
            </h2>

            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Get all four premium guides together and save compared to buying them individually.
            </p>

            <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Golden Visa 2026</p>
                  <p className="text-sm text-gray-600">€79.99 value</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">D7 Visa Blueprint</p>
                  <p className="text-sm text-gray-600">€25.99 value</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">D8 Digital Nomad Visa</p>
                  <p className="text-sm text-gray-600">€45.99 value</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Caribbean Bundle</p>
                  <p className="text-sm text-gray-600">€89.99 value</p>
                </div>
              </div>
            </div>

            <div className="mb-6 p-6 bg-purple-50 rounded-xl">
              <div className="flex items-baseline gap-2 justify-center mb-2">
                <span className="text-4xl font-extrabold text-gray-900">€179.99</span>
                <span className="text-lg text-gray-400 line-through">€241.96</span>
              </div>
              <p className="text-sm text-gray-600">All 4 guides combined</p>
              <p className="text-xs text-purple-600 font-semibold mt-2">Save €61.97 when you buy the bundle</p>
            </div>

            <button
              onClick={() => handleBuyGuide(completeGuide)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-10 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
            >
              <Download className="w-5 h-5" />
              Buy Complete Collection
            </button>
          </div>
        </div>
      </section>

      <GuidePurchaseModal
        isOpen={isModalOpen}
        guide={selectedGuide}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedGuide(null);
          setIsCheckoutLoading(false);
          setCheckoutError('');
        }}
        onProceedToCheckout={handleProceedToCheckout}
        isLoading={isCheckoutLoading}
        error={checkoutError}
      />
    </div>
  );
}
