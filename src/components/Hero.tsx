import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeroProps {
  onScheduleCall: () => void;
  setCurrentPage?: (page: string) => void;
}

const testimonials = [
  {
    initials: 'IO',
    name: 'Irene Omuchi',
    title: 'Oil and Gas Entrepreneur, Nigeria',
    quote: '"The team at Dera Consultants provided exceptional guidance for my move to Portugal. Their professionalism and personalized approach were instrumental in my journey."'
  },
  {
    initials: 'OS',
    name: 'Oliver Smith',
    title: 'Retired Executive, UK',
    quote: '"Their understanding of the European residency programs is impressive. They handled every detail with precision and care."'
  },
  {
    initials: 'IG',
    name: 'Isabella Garcia',
    title: 'Lawyer, Spain',
    quote: '"As a legal professional, I appreciate thoroughness. Dera\'s team demonstrated an exceptional level of diligence and expertise throughout the entire process."'
  },
  {
    initials: 'GS',
    name: 'Galli Sel',
    title: 'Business Owner, UAE',
    quote: '"Collaboration with Dera Consultants has been beneficial to my company\'s growth. I highly recommend their services to any serious investor. Sylvia is really the best to work with"'
  },
  {
    initials: 'HA',
    name: 'Harry Akande Jr',
    title: 'Business man, Nigeria',
    quote: '"I was looking for a reliable partner for our global mobility needs. Dera Consultants exceeded our expectations with their deep knowledge and discretion. The support with St Lucia passport was exceptional"'
  },
  {
    initials: 'IG',
    name: 'Isabella Garcia',
    title: 'Lawyer, Spain',
    quote: '"As a legal professional, I appreciate thoroughness. Dera\'s team demonstrated an exceptional level of diligence and expertise throughout the entire process."'
  }
];

export default function Hero({ onScheduleCall, setCurrentPage }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (testimonials.length - 2)) % (testimonials.length - 2));
  };

  // Auto-swipe every 4 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handleManualNavigation = (direction: 'prev' | 'next') => {
    setIsAutoPlaying(false);
    if (direction === 'next') {
      nextSlide();
    } else {
      prevSlide();
    }
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[currentIndex + 1],
    testimonials[currentIndex + 2]
  ];

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
      `}</style>
      {/* Hero Section - Responsive Layout */}
      <section className="relative bg-gradient-to-br from-[#0f3460] via-[#1a5276] to-[#0d2540] text-white">
        <div className="flex flex-col lg:flex-row items-center lg:min-h-[550px]">
          {/* Left Content Container */}
          <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
              Your Gateway to Global Citizenship & Residency
            </h1>
            <p className="text-base sm:text-lg lg:text-xl mb-8 text-blue-100">
              Expert immigration consultants specializing in Caribbean CBI and European residency programs
            </p>
            <button 
              onClick={onScheduleCall}
              className="flash-button bg-gradient-to-r from-[#d4af37] to-[#e0c158] text-[#0f3460] px-8 sm:px-10 py-4 sm:py-5 rounded-lg font-bold text-lg hover:from-[#c9a02e] hover:to-[#d4a832] transition-all duration-200 hover:shadow-2xl transform hover:scale-110 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Get Consultation Now
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>

          {/* Right Content - Hero Image */}
          <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-8 py-8 lg:py-20 flex items-center justify-center">
            <div className="w-full max-w-xs sm:max-w-sm lg:max-w-none aspect-square lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl hover:shadow-2xl transition-all duration-300 border-4 border-[#d4af37]">
              <img 
                src="https://i.imgur.com/dnxqUvo.png" 
                alt="Global citizenship and residency consultation" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from satisfied clients who have successfully navigated their journey to global citizenship with our expert guidance.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ease-in-out">
              {visibleTestimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-700 transform animate-fade-in">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#0f3460] text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {testimonial.initials}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                      <p className="text-xs sm:text-sm text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mb-4">
                    <span className="text-[#d4af37] text-lg">★★★★★</span>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">
                    {testimonial.quote}
                  </p>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => handleManualNavigation('prev')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-[#0f3460] text-white p-2 rounded-full hover:bg-[#0d2540] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 hidden lg:block"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => handleManualNavigation('next')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-[#0f3460] text-white p-2 rounded-full hover:bg-[#0d2540] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 hidden lg:block"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: testimonials.length - 2 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                    setTimeout(() => setIsAutoPlaying(true), 10000);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-[#0f3460] w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={onScheduleCall}
              className="bg-gradient-to-r from-[#d4af37] to-[#e0c158] text-[#0f3460] px-8 py-4 rounded-lg font-semibold hover:from-[#c9a02e] hover:to-[#d4a832] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start Your Journey Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}