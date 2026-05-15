import { useState, useEffect } from 'react';

const FB_PIXEL_ID = '1407670310681921';

function loadFacebookPixel() {
  if ((window as any).fbq) return;
  const f = window as any;
  f.fbq = function () {
    f.fbq.callMethod ? f.fbq.callMethod.apply(f.fbq, arguments) : f.fbq.queue.push(arguments);
  };
  f._fbq = f.fbq;
  f.fbq.push = f.fbq;
  f.fbq.loaded = true;
  f.fbq.version = '2.0';
  f.fbq.queue = [];
  const t = document.createElement('script');
  t.async = true;
  t.src = 'https://connect.facebook.net/en_US/fbevents.js';
  document.head.appendChild(t);
  f.fbq('init', FB_PIXEL_ID);
  f.fbq('track', 'PageView');
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (consent === 'accepted') {
      loadFacebookPixel();
    } else if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    loadFacebookPixel();
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 text-sm text-gray-600 leading-relaxed">
          <span className="font-semibold text-gray-800">We use cookies</span> to improve your experience and show you relevant content.
          By clicking "Accept", you consent to our use of analytics and marketing cookies.{' '}
          <a href="/company" className="underline text-[#1B7A4E] hover:text-[#156B3F] transition-colors">
            Learn more
          </a>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm font-semibold text-gray-600 border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-sm font-semibold text-white bg-[#1B7A4E] hover:bg-[#156B3F] transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
