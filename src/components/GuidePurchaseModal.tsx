import { useState } from 'react';
import { X, Mail, AlertCircle, Lock, CreditCard } from 'lucide-react';

interface Guide {
  id: string;
  title: string;
  price: number;
  currency: string;
}

interface GuidePurchaseModalProps {
  isOpen: boolean;
  guide: Guide | null;
  onClose: () => void;
  onProceedToCheckout: (email: string, guide: Guide) => void;
  isLoading?: boolean;
  error?: string;
}

export default function GuidePurchaseModal({
  isOpen,
  guide,
  onClose,
  onProceedToCheckout,
  isLoading = false,
  error: externalError = '',
}: GuidePurchaseModalProps) {
  const [email, setEmail] = useState('');
  const [localError, setLocalError] = useState('');

  const error = externalError || localError;

  if (!isOpen || !guide) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError('');

    if (!email.trim()) {
      setLocalError('Please enter your email address');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setLocalError('Please enter a valid email address');
      return;
    }

    onProceedToCheckout(email, guide);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0f3460] to-[#1a4a8a] px-6 py-6 text-white flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold">{guide.title}</h2>
            <p className="text-blue-200 mt-1 text-sm">Digital Guide — Instant Download</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            disabled={isLoading}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Price Banner */}
        <div className="bg-gradient-to-r from-amber-50 to-amber-100 border-b border-amber-200 px-6 py-3 flex items-center justify-between">
          <span className="text-sm font-medium text-amber-900">One-time purchase</span>
          <span className="text-2xl font-bold text-amber-900">€{guide.price}</span>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Your Email Address
            </label>
            <p className="text-xs text-gray-500 mb-2">
              Your download link will be sent to this email after purchase.
            </p>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setLocalError('');
                }}
                placeholder="you@example.com"
                disabled={isLoading}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0f3460] focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="flex items-start gap-3 p-3 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          {/* Security Info */}
          <div className="flex items-center gap-2 p-3 bg-gray-50 border border-gray-200 rounded-lg">
            <Lock className="w-4 h-4 text-gray-500 flex-shrink-0" />
            <p className="text-xs text-gray-600">
              Secure payment powered by Stripe. Your card details are never stored on our servers.
            </p>
          </div>

          {/* CTA Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 px-4 bg-[#0f3460] text-white font-semibold rounded-lg hover:bg-[#0d2540] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Redirecting to Stripe...
              </>
            ) : (
              <>
                <CreditCard className="w-5 h-5" />
                Proceed to Secure Checkout
              </>
            )}
          </button>

          {/* Cancel */}
          <button
            type="button"
            onClick={onClose}
            disabled={isLoading}
            className="w-full py-2 px-4 text-gray-500 font-medium rounded-lg hover:bg-gray-50 transition-colors text-sm disabled:opacity-50"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
