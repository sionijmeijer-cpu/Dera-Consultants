import { ArrowRight, Shield, Globe, Award } from 'lucide-react';
import { useEffect, useState } from 'react';

interface HeroProps {
  onScheduleCall: () => void;
  onNavigateToGuides: () => void;
}

export default function Hero({ onScheduleCall, onNavigateToGuides }: HeroProps) {
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadVideo = async () => {
      try {
        const response = await fetch('/hero-background.mp4', { method: 'HEAD' });
        if (response.ok) {
          setVideoUrl('/hero-background.mp4');
        } else {
          setVideoUrl('https://videos.pexels.com/video-files/3571937/3571937-sd_640_360_30fps.mp4');
        }
      } catch {
        setVideoUrl('https://videos.pexels.com/video-files/3571937/3571937-sd_640_360_30fps.mp4');
      } finally {
        setIsLoading(false);
      }
    };
    loadVideo();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f3460] via-[#1a4a8a] to-[#0f3460]">
      {/* Video Background */}
      {videoUrl && !isLoading && (
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={videoUrl}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          loading="lazy"
        />
      )}

      {/* Overlay gradient for text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#0f3460]/90 via-[#1a4a8a]/85 to-[#0f3460]/90" />

      {/* Decorative circles - behind video */}
      <div className="absolute top-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#1B7A4E]/15 rounded-full blur-3xl pointer-events-none z-5" />
      <div className="absolute bottom-1/4 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/15 rounded-full blur-3xl pointer-events-none z-5" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 w-full z-20 flex items-center justify-center min-h-screen">
        <div className="max-w-3xl w-full text-center sm:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#1B7A4E]/40 backdrop-blur-md border border-[#1B7A4E]/60 rounded-full text-[#4ade80] text-xs sm:text-sm font-semibold mb-6 sm:mb-8 hover:bg-[#1B7A4E]/50 transition-all duration-300">
            <Shield size={14} />
            Trusted Global Mobility Consultants
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.15] tracking-tight mb-6 sm:mb-8 drop-shadow-lg">
            Your Second Passport
            <span className="block text-[#4ade80] mt-2">Starts Here</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg lg:text-xl text-white/95 leading-relaxed mb-8 sm:mb-12 max-w-2xl drop-shadow-md">
            Expert guidance on Caribbean citizenship, European residency, and global mobility programmes. 
            We help entrepreneurs and families secure their future with a second passport or residency.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16 sm:justify-start">
            <button
              onClick={onScheduleCall}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 sm:py-5 bg-[#1B7A4E] text-white font-bold rounded-xl hover:bg-[#156B3F] active:scale-95 transition-all duration-200 hover:scale-105 shadow-xl hover:shadow-2xl text-base sm:text-lg touch-manipulation"
            >
              Book Free Consultation
              <ArrowRight size={20} />
            </button>
            <button
              onClick={onNavigateToGuides}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 sm:py-5 bg-white/20 backdrop-blur-md text-white font-bold rounded-xl hover:bg-white/30 active:scale-95 transition-all duration-200 border border-white/40 hover:border-white/60 text-base sm:text-lg shadow-lg touch-manipulation"
            >
              Browse Guides
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-start gap-6 sm:gap-8">
            <div className="flex items-center gap-2 text-white/90">
              <Globe size={18} className="text-[#4ade80] flex-shrink-0" />
              <span className="text-sm sm:text-base font-medium">5 Caribbean Programmes</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Shield size={18} className="text-[#4ade80] flex-shrink-0" />
              <span className="text-sm sm:text-base font-medium">100% Confidential</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Award size={18} className="text-[#4ade80] flex-shrink-0" />
              <span className="text-sm sm:text-base font-medium">Expert Advisors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
