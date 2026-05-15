import { useState } from 'react';
import { useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';

interface Props {
  slug: string;
}

export default function ArticleSubscribe({ slug }: Props) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'duplicate' | 'error'>('idle');
  const subscribe = useMutation(api.mutations.subscribeFromArticle);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('loading');
    try {
      const result = await subscribe({ email: email.trim().toLowerCase(), slug });
      setStatus(result.status === 'already_subscribed' ? 'duplicate' : 'success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div
      className="my-10 p-6 sm:p-8 border border-gray-200 bg-gray-50"
      style={{ borderTop: '3px solid #1B7A4E' }}
    >
      {status === 'success' ? (
        <div className="text-center py-2">
          <p className="text-[#1B7A4E] font-bold text-lg mb-1" style={{ fontFamily: "'Playfair Display',Georgia,serif" }}>
            You're subscribed
          </p>
          <p className="text-gray-600 text-sm" style={{ fontFamily: "'Inter',sans-serif" }}>
            We'll send you updates on residency and citizenship news.
          </p>
        </div>
      ) : status === 'duplicate' ? (
        <div className="text-center py-2">
          <p className="text-gray-800 font-semibold text-base mb-1" style={{ fontFamily: "'Inter',sans-serif" }}>
            You're already on the list
          </p>
          <p className="text-gray-500 text-sm" style={{ fontFamily: "'Inter',sans-serif" }}>
            We have your email and will keep you updated.
          </p>
        </div>
      ) : (
        <>
          <div className="mb-5">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1B7A4E] mb-2"
              style={{ fontFamily: "'Inter',sans-serif" }}>
              Stay informed
            </p>
            <h3 className="text-xl font-black text-gray-900 mb-2"
              style={{ fontFamily: "'Playfair Display',Georgia,serif" }}>
              Get updates on residency &amp; citizenship
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed"
              style={{ fontFamily: "'Inter',sans-serif" }}>
              Join readers who receive practical guidance on global mobility, visa programs, and second passport strategies.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-3 border border-gray-300 bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#1B7A4E] transition-colors"
              style={{ fontFamily: "'Inter',sans-serif" }}
              disabled={status === 'loading'}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3 bg-[#1B7A4E] text-white text-[10px] font-black uppercase tracking-widest hover:bg-[#156B3F] transition-colors disabled:opacity-60 whitespace-nowrap"
              style={{ fontFamily: "'Inter',sans-serif" }}
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          {status === 'error' && (
            <p className="mt-2 text-red-600 text-xs" style={{ fontFamily: "'Inter',sans-serif" }}>
              Something went wrong. Please try again.
            </p>
          )}
          <p className="mt-3 text-[11px] text-gray-400" style={{ fontFamily: "'Inter',sans-serif" }}>
            No spam. Unsubscribe at any time.
          </p>
        </>
      )}
    </div>
  );
}
