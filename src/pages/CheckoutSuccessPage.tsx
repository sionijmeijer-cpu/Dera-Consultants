import { useState, useEffect } from 'react';
import { CheckCircle, Download, AlertCircle, Loader2, ArrowLeft, Mail } from 'lucide-react';
import { useConvexAction } from '../hooks/useConvex';

const GUIDE_NAMES: Record<string, string> = {
  'golden-visa': 'Golden Visa 2026',
  'd7-visa': 'D7 Visa Blueprint',
  'd8-visa': 'D8 Digital Nomad Visa',
  'caribbean-bundle': 'Complete Caribbean Bundle',
  'all-guides': 'Complete Guide Collection',
};

const GUIDE_DOWNLOAD_URLS: Record<string, string> = {
  'golden-visa': '',
  'd7-visa': 'https://dera-consultants-paid-guides.s3.us-east-1.amazonaws.com/D7+Visa+Blueprint.pdf',
  'd8-visa': '',
  'caribbean-bundle': '',
  'all-guides': '',
};

type VerifyStatus = 'loading' | 'success' | 'failed';

export default function CheckoutSuccessPage() {
  const [status, setStatus] = useState<VerifyStatus>('loading');
  const [guideId, setGuideId] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);

  const verifyCheckoutSession = useConvexAction('stripe:verifyCheckoutSession');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const checkoutSessionId = params.get('session_id');
    const guide = params.get('guide') || '';

    if (guide) setGuideId(guide);

    if (!checkoutSessionId) {
      setStatus('failed');
      setError('No checkout session found. Please try purchasing again.');
      return;
    }

    verifyPayment(checkoutSessionId);
  }, []);

  const verifyPayment = async (checkoutSessionId: string) => {
    try {
      const result = await verifyCheckoutSession({
        sessionId: checkoutSessionId,
      });

      if (result?.success) {
        setStatus('success');
        setEmail(result.email || '');
        if (result.guideId) setGuideId(result.guideId);
      } else {
        setStatus('failed');
        setError('Payment could not be verified. If you were charged, please contact support.');
      }
    } catch (err: any) {
      console.error('Verification error:', err);
      setStatus('failed');
      setError(err?.message || 'Payment verification failed.');
    }
  };

  const handleDownload = () => {
    const url = GUIDE_DOWNLOAD_URLS[guideId];
    if (!url) {
      setError('No download file is configured for this guide yet.');
      return;
    }

    try {
      setIsDownloading(true);
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch (err: any) {
      console.error('Download error:', err);
      setError('Could not start download. Please contact support.');
    } finally {
      setIsDownloading(false);
    }
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-[#0f3460] animate-spin mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Verifying your payment...</h2>
          <p className="text-gray-500">This will only take a moment.</p>
        </div>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Payment Verification Failed</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <div className="space-y-3">
            <a
              href="/guides"
              className="block w-full py-3 px-4 bg-[#0f3460] text-white font-semibold rounded-lg hover:bg-[#0d2540] transition-colors text-center"
            >
              Try Again
            </a>
            <a
              href="/contact"
              className="block w-full py-3 px-4 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors text-center"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    );
  }

  const guideName = GUIDE_NAMES[guideId] || 'Your Guide';
  const hasDownload = Boolean(GUIDE_DOWNLOAD_URLS[guideId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 py-16">
      <div className="max-w-lg w-full">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-8 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-1">Payment Successful!</h1>
            <p className="text-emerald-100">Thank you for your purchase</p>
          </div>

          <div className="p-8">
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Guide purchased</p>
                  <p className="font-semibold text-gray-900">{guideName}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Format</p>
                  <p className="font-semibold text-gray-900">PDF</p>
                </div>
              </div>
            </div>

            <button
              onClick={handleDownload}
              disabled={isDownloading || !hasDownload}
              className="w-full py-4 px-6 bg-[#0f3460] text-white font-semibold rounded-lg hover:bg-[#0d2540] transition-all duration-200 flex items-center justify-center gap-3 mb-4 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isDownloading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Opening download...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  {hasDownload ? 'Download Guide' : 'Download not available yet'}
                </>
              )}
            </button>

            {email && (
              <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg mb-6">
                <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-blue-900">Purchase confirmed</p>
                  <p className="text-sm text-blue-700">
                    Payment completed for <strong>{email}</strong>.
                  </p>
                </div>
              </div>
            )}

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-6">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            <div className="text-center text-sm text-gray-500 space-y-2">
              <p>
                Having trouble downloading?{' '}
                <a href="/contact" className="text-[#0f3460] font-medium hover:underline">
                  Contact our support team
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <a
            href="/guides"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#0f3460] transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Browse More Guides
          </a>
        </div>
      </div>
    </div>
  );
}
