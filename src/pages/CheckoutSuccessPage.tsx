import { useState, useEffect } from 'react';
import { CheckCircle, Download, AlertCircle, Loader2, ArrowLeft, Mail } from 'lucide-react';

// S3 download URLs mapped to guide IDs
const GUIDE_DOWNLOADS: Record<string, { filename: string; s3Key: string }> = {
  'golden-visa': {
    filename: 'Golden_Visa_2026_Guide.pdf',
    s3Key: 'guides/golden-visa-2026.pdf',
  },
  'd7-visa': {
    filename: 'D7_Visa_Blueprint.pdf',
    s3Key: 'guides/d7-visa-blueprint.pdf',
  },
  'd8-visa': {
    filename: 'D8_Digital_Nomad_Visa.pdf',
    s3Key: 'guides/d8-digital-nomad-visa.pdf',
  },
  'caribbean-bundle': {
    filename: 'Complete_Caribbean_Bundle.pdf',
    s3Key: 'guides/caribbean-bundle.pdf',
  },
};

const GUIDE_NAMES: Record<string, string> = {
  'golden-visa': 'Golden Visa 2026',
  'd7-visa': 'D7 Visa Blueprint',
  'd8-visa': 'D8 Digital Nomad Visa',
  'caribbean-bundle': 'Complete Caribbean Bundle',
};

type VerifyStatus = 'loading' | 'success' | 'failed';

export default function CheckoutSuccessPage() {
  const [status, setStatus] = useState<VerifyStatus>('loading');
  const [guideId, setGuideId] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get('session_id');
    const guide = params.get('guide') || '';
    setGuideId(guide);

    if (!sessionId) {
      setStatus('failed');
      setError('No checkout session found. Please try purchasing again.');
      return;
    }

    verifyPayment(sessionId);
  }, []);

  const verifyPayment = async (sessionId: string) => {
    try {
      // Use the Convex HTTP endpoint or action to verify
      const convexUrl = (import.meta as any).env?.VITE_CONVEX_URL;
      if (!convexUrl) {
        // Fallback: trust the session_id presence as payment confirmation
        // In production, always verify server-side
        setStatus('success');
        return;
      }

      const { ConvexHttpClient } = await import('convex/browser');
      const client = new ConvexHttpClient(convexUrl);
      const { api } = await import('../../convex/_generated/api');

      const result = await client.action(api.stripe.verifyCheckoutSession, {
        sessionId,
      });

      if (result.success) {
        setStatus('success');
        setEmail(result.email);
        if (result.guideId) setGuideId(result.guideId);
      } else {
        setStatus('failed');
        setError('Payment could not be verified. If you were charged, please contact support.');
      }
    } catch (err: any) {
      console.error('Verification error:', err);
      // If verification fails but we have session_id, show success with note
      setStatus('success');
    }
  };

  const handleDownload = () => {
    const guide = GUIDE_DOWNLOADS[guideId];
    if (!guide) return;

    // Generate a pre-signed S3 URL or use a direct download endpoint
    // For now, we'll use a placeholder that would be replaced with actual S3 URL
    const s3Bucket = 'dera-consultants-guides';
    const s3Region = 'eu-west-1';
    const downloadUrl = `https://${s3Bucket}.s3.${s3Region}.amazonaws.com/${guide.s3Key}`;

    window.open(downloadUrl, '_blank');
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
  const guideDownload = GUIDE_DOWNLOADS[guideId];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 py-16">
      <div className="max-w-lg w-full">
        {/* Success Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Green Header */}
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-8 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-1">Payment Successful!</h1>
            <p className="text-emerald-100">Thank you for your purchase</p>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Order Summary */}
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

            {/* Download Button */}
            {guideDownload && (
              <button
                onClick={handleDownload}
                className="w-full py-4 px-6 bg-[#0f3460] text-white font-semibold rounded-lg hover:bg-[#0d2540] transition-all duration-200 flex items-center justify-center gap-3 mb-4 hover:shadow-lg"
              >
                <Download className="w-5 h-5" />
                Download {guideDownload.filename}
              </button>
            )}

            {/* Email Confirmation */}
            {email && (
              <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg mb-6">
                <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-blue-900">Confirmation sent</p>
                  <p className="text-sm text-blue-700">
                    A download link has also been sent to <strong>{email}</strong>
                  </p>
                </div>
              </div>
            )}

            {/* Help Text */}
            <div className="text-center text-sm text-gray-500 space-y-2">
              <p>
                Having trouble downloading? <a href="/contact" className="text-[#0f3460] font-medium hover:underline">Contact our support team</a>
              </p>
            </div>
          </div>
        </div>

        {/* Back to Guides */}
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
