import { useState, useEffect } from 'react';
import { X, Download, Mail, Loader2, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  guideTitle: string;
  guideId: string;
}

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_zuw0jdg';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_kdvvybl';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'iwJKHyLFnEj-_NXor';

// S3 download URLs for each guide
const GUIDE_DOWNLOAD_URLS: Record<string, string> = {
  'golden-visa': 'https://placeholder-s3-url.com/golden-visa-2026.pdf',
  'd7-visa': 'https://placeholder-s3-url.com/d7-visa-2026.pdf',
  'd8-visa': 'https://placeholder-s3-url.com/d8-visa-2026.pdf',
  'caribbean-bundle': 'https://placeholder-s3-url.com/caribbean-bundle-2026.pdf',
  'portugal-checklist': 'https://deraconsultants-free-guides.s3.eu-north-1.amazonaws.com/Portugal_Relocation_Guide_2026_Dera.pdf',
  'caribbean-comparison': 'https://deraconsultants-free-guides.s3.eu-north-1.amazonaws.com/Caribbean_Citizenship_Comparison_2026_Dera.pdf',
};

export default function DownloadModal({ isOpen, onClose, guideTitle, guideId }: DownloadModalProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY !== 'public_key_placeholder') {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, []);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      // Send notification email via EmailJS to info@getsecondpassport.eu
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name: 'Guide Download Request',
        email: email,
        phone: 'N/A',
        country: 'N/A',
        service: `Guide Download: ${guideTitle}`,
        message: `New guide download request:\n\nGuide: ${guideTitle}\nGuide ID: ${guideId}\nEmail: ${email}\nTimestamp: ${new Date().toLocaleString()}\nPage URL: ${window.location.href}`,
      });

      // Show success state
      setIsSuccess(true);

      // Trigger the S3 download
      const downloadUrl = GUIDE_DOWNLOAD_URLS[guideId];
      if (downloadUrl) {
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', '');
        link.setAttribute('target', '_blank');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      // Auto-close after 3 seconds
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Download error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setEmail('');
    setIsSuccess(false);
    setError(null);
    setIsSubmitting(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          /* Success State */
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Download Started!</h3>
            <p className="text-gray-600 mb-2">
              Your guide is downloading now. Check your downloads folder.
            </p>
            <p className="text-sm text-gray-500">
              We have also sent a copy to <span className="font-medium text-gray-700">{email}</span>
            </p>
          </div>
        ) : (
          /* Form State */
          <>
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0f3460] to-[#1a5276] px-8 pt-8 pb-6">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm border border-white/20">
                <Download className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Access Guide</h3>
              <p className="text-blue-200 text-sm">{guideTitle}</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8">
              <p className="text-gray-600 text-sm mb-5">
                Enter your email to access the guide. We will send you a copy for your records.
              </p>

              <div className="relative mb-4">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(null); }}
                  placeholder="your@email.com"
                  required
                  className="w-full pl-11 pr-4 py-3.5 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:border-[#0f3460] focus:ring-2 focus:ring-[#0f3460]/20 outline-none transition-all duration-200"
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm mb-4">{error}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting || !email}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-3.5 px-6 rounded-xl font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:scale-[1.02]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    Download Guide
                  </>
                )}
              </button>

              <p className="text-xs text-gray-400 text-center mt-4">
                We respect your privacy. No spam, ever.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
