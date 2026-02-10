import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onScheduleCall: () => void;
  setCurrentPage?: (page: string) => void;
}

export default function Hero({ onScheduleCall }: HeroProps) {
  return (
    <div className="bg-white">
      <style>{`
        @keyframes flash {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(212, 175, 55, 0.6), 0 0 40px rgba(212, 175, 55, 0.3);
          }
          50% { 
            box-shadow: 0 0 40px rgba(212, 175, 55, 1), 0 0 80px rgba(212, 175, 55, 0.6);
          }
        }
        .flash-button { 
          animation: flash 2s ease-in-out infinite;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        .animate-fade-in-up-delay-1 {
          animation: fadeInUp 1s ease-out 0.3s forwards;
          opacity: 0;
        }
        .animate-fade-in-up-delay-2 {
          animation: fadeInUp 1s ease-out 0.6s forwards;
          opacity: 0;
        }
      `}</style>

      {/* Hero Section - Video Background with Centered Text */}
      <section className="relative min-h-[600px] sm:min-h-[650px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110"
          style={{ filter: 'blur(4px)' }}
        >
          <source src="https://i.imgur.com/nD1n8ZQ.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-[#0f3460]/60" />

        {/* Centered Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Your Citizenship. Your Freedom. Your Plan B.
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-1">
            We advise investors and entrepreneurs on securing second citizenship and residency through vetted, investment-based programs for greater global mobility and security.
          </p>
          <div className="animate-fade-in-up-delay-2">
            <button 
              onClick={onScheduleCall}
              className="flash-button bg-gradient-to-r from-[#d4af37] to-[#e0c158] text-[#0f3460] px-10 sm:px-12 py-4 sm:py-5 rounded-lg font-bold text-lg sm:text-xl hover:from-[#c9a02e] hover:to-[#d4a832] transition-all duration-200 hover:shadow-2xl transform hover:scale-110 inline-flex items-center gap-3"
            >
              Get Consultation Now
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
