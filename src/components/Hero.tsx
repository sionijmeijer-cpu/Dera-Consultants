import { ArrowRight, MapPin, Award, Globe } from 'lucide-react';
import { openBooking } from '../lib/booking';
import CounselSeal from './CounselSeal';

interface HeroProps {
  onScheduleCall: () => void;
  setCurrentPage?: (page: string) => void;
  onNavigateToGuides?: () => void;
}

export default function Hero({ onScheduleCall }: HeroProps) {
  const handleBooking = () => openBooking(onScheduleCall);
  return (
    <div className="bg-white">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .anim-1 { animation: fadeInUp 1s ease-out forwards; }
        .anim-2 { animation: fadeInUp 1s ease-out 0.2s forwards; opacity: 0; }
        .anim-3 { animation: fadeInUp 1s ease-out 0.4s forwards; opacity: 0; }
        .anim-4 { animation: fadeInUp 1s ease-out 0.6s forwards; opacity: 0; }
      `}</style>

      {/* ── VIDEO HERO — unchanged from your original ─────────────────── */}
      <section className="relative min-h-[620px] sm:min-h-[680px] lg:min-h-[740px] flex items-center justify-center overflow-hidden">
        <video
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110"
          style={{ filter: 'blur(4px)' }}
        >
          <source src="https://i.imgur.com/nD1n8ZQ.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#0f3460]/70" />

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">

          {/* Location badge */}
          <div className="anim-1 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <MapPin size={14} className="text-[#4ade80]" />
            <span
              className="text-white/90 text-sm font-semibold"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Based in Portugal · Advising globally
            </span>
          </div>

          {/* Headline */}
          <h1
            className="anim-2 text-[36px] sm:text-[48px] lg:text-[60px] font-black text-white leading-[1.08] tracking-tight mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Your Strategy for a
            <span className="block text-[#4ade80]">Second Passport or EU Residency</span>
          </h1>

          <p
            className="anim-3 text-[17px] sm:text-[19px] text-white/85 mb-10 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}
          >
            We help investors, entrepreneurs, and families navigate Portugal residency and Caribbean citizenship, with expert guidance from advisors who actually live inside these systems.
          </p>

          <div className="anim-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/portugal-europe-residency"
              className="inline-flex items-center justify-center gap-2 bg-[#1B7A4E] text-white px-8 py-4 font-black uppercase tracking-widest hover:bg-[#156B3F] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 min-w-[220px] text-[12px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Explore Portugal
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={handleBooking}
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 font-black uppercase tracking-widest hover:bg-white/20 transition-all duration-300 min-w-[220px] text-[12px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T CREDIBILITY STRIP ─────────────────────────────────────
           This sits directly BELOW the video, not on top of it.
           White background bar with Sylvia's photo, her quote, and 2 stats.
      ──────────────────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

            {/* Left: Sylvia's quote */}
            <div
              className="flex items-center gap-6 py-8 pr-0 lg:pr-12"
              style={{ borderRight: '1px solid #e5e7eb' }}
            >
              <img
                src="https://i.imgur.com/moWaeQd.jpeg"
                alt="Sylvia Awoudu, Founder of Dera Consultants"
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                style={{ border: '3px solid #1B7A4E' }}
              />
              <div className="flex-1">
                <p
                  className="text-[10px] font-black uppercase tracking-widest text-[#1B7A4E] mb-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  From the Founder
                </p>
                <p
                  className="text-gray-800 text-[15px] leading-snug"
                  style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}
                >
                  <span className="font-bold">I live in Portugal.</span> I navigate these immigration systems daily, not from a distance, but from inside them. That is the difference.
                </p>
                <p
                  className="text-gray-500 text-[12px] mt-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Sylvia Awoudu · Founder, Dera Consultants
                </p>
              </div>
              <div className="hidden sm:block flex-shrink-0">
                <CounselSeal size={96} />
              </div>
            </div>

            {/* Right: 3 trust stats */}
            <div className="grid grid-cols-3 divide-x divide-gray-200 py-8 pl-0 lg:pl-12">
              <div className="flex flex-col items-center justify-center px-4 text-center">
                <div className="flex items-center gap-1.5 mb-1">
                  <Award size={16} className="text-[#1B7A4E]" />
                  <span
                    className="text-[28px] font-black text-gray-900"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    5+
                  </span>
                </div>
                <p
                  className="text-[11px] text-gray-500 uppercase tracking-widest font-semibold"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Years in market
                </p>
              </div>
              <div className="flex flex-col items-center justify-center px-4 text-center">
                <div className="flex items-center gap-1.5 mb-1">
                  <Globe size={16} className="text-[#1B7A4E]" />
                  <span
                    className="text-[28px] font-black text-gray-900"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    6+
                  </span>
                </div>
                <p
                  className="text-[11px] text-gray-500 uppercase tracking-widest font-semibold"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Countries served
                </p>
              </div>
              <div className="flex flex-col items-center justify-center px-4 text-center">
                <div className="flex items-center gap-1.5 mb-1">
                  <MapPin size={16} className="text-[#1B7A4E]" />
                  <span
                    className="text-[28px] font-black text-gray-900"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    15+
                  </span>
                </div>
                <p
                  className="text-[11px] text-gray-500 uppercase tracking-widest font-semibold"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Programmes tracked
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
