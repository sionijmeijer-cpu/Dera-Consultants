import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onScheduleCall: () => void;
  setCurrentPage?: (page: string) => void;
  onNavigateToGuides?: () => void;
}

export default function Hero({ onScheduleCall }: HeroProps) {
  return (
    <div className="bg-white">
      <style>{`
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
          animation: fadeInUp 1s ease-out 0.25s forwards;
          opacity: 0;
        }

        .animate-fade-in-up-delay-2 {
          animation: fadeInUp 1s ease-out 0.5s forwards;
          opacity: 0;
        }

        .animate-fade-in-up-delay-3 {
          animation: fadeInUp 1s ease-out 0.75s forwards;
          opacity: 0;
        }
      `}</style>

      <section className="relative min-h-[600px] sm:min-h-[650px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
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

        <div className="absolute inset-0 bg-[#0f3460]/65" />

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <p className="text-sm sm:text-base font-semibold tracking-[0.18em] uppercase text-white/80 mb-5 animate-fade-in-up">
            Portugal Residency and Caribbean Citizenship Advisory
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up-delay-1">
            Greater mobility starts with the right path
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
            We help investors, entrepreneurs, professionals, and families explore Portugal residency and second citizenship options through structured, vetted pathways.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-delay-3">
            <a
              href="/portugal-europe-residency"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 min-w-[240px]"
            >
              Explore Portugal options
              <ArrowRight className="w-5 h-5" />
            </a>

            <button
              onClick={onScheduleCall}
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 min-w-[240px]"
            >
              Book a strategy call
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
