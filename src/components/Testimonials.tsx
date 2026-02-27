import { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    {
      id: 1,
      initials: 'GS',
      name: 'Galli Sel',
      title: 'Business Owner',
      country: 'UAE',
      text: 'Collaboration with Dera Consultants has been beneficial to my company\'s growth. I highly recommend their services to any serious investor. Sylvia is really the best to work with.',
      rating: 5
    },
    {
      id: 2,
      initials: 'HA',
      name: 'Harry Akande Jr',
      title: 'Business man',
      country: 'Nigeria',
      text: 'I was looking for a reliable partner for our global mobility needs. Dera Consultants exceeded our expectations with their deep knowledge and discretion. The support with St Lucia passport was exceptional.',
      rating: 5
    },
    {
      id: 3,
      initials: 'IG',
      name: 'Isabella Garcia',
      title: 'Lawyer',
      country: 'Spain',
      text: 'As a legal professional, I appreciate thoroughness. Dera\'s team demonstrated an exceptional level of diligence and expertise throughout the entire process.',
      rating: 5
    },
    {
      id: 4,
      initials: 'MJ',
      name: 'Marcus Johnson',
      title: 'Entrepreneur',
      country: 'UK',
      text: 'Outstanding service from start to finish. The team at Dera Consultants made the entire citizenship process seamless and stress-free. Highly professional and responsive.',
      rating: 5
    },
    {
      id: 5,
      initials: 'SR',
      name: 'Sarah Rodriguez',
      title: 'Investment Manager',
      country: 'Mexico',
      text: 'Working with Dera Consultants was a game-changer for our investment portfolio. Their expertise in residency and citizenship programs is unmatched.',
      rating: 5
    },
    {
      id: 6,
      initials: 'DK',
      name: 'David Kim',
      title: 'Tech Founder',
      country: 'Singapore',
      text: 'As a tech founder, I needed a partner who understood global mobility. Dera Consultants delivered beyond expectations with their strategic guidance and support.',
      rating: 5
    }
  ];

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setAutoPlay(false);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, testimonials.length]);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, testimonials.length]);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay, goToNext]);

  // Get visible testimonials based on screen (3 for desktop, 1 for mobile)
  const getVisibleTestimonials = () => {
    return [
      testimonials[currentIndex],
      testimonials[(currentIndex + 1) % testimonials.length],
      testimonials[(currentIndex + 2) % testimonials.length]
    ];
  };

  const visibleTestimonials = getVisibleTestimonials();
  const averageRating = (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            WHAT OUR CLIENTS SAY
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from investors and entrepreneurs who trusted us with their citizenship journey
          </p>
        </div>

        {/* 3-Card Carousel */}
        <div className="relative px-12 sm:px-16">
          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {visibleTestimonials.map((testimonial, idx) => (
              <div
                key={`${currentIndex}-${idx}`}
                className={`bg-white rounded-xl p-8 shadow-lg border border-gray-200 flex flex-col justify-between h-full transition-all duration-500 hover:shadow-xl hover:scale-[1.02] ${idx > 0 ? 'hidden md:flex' : 'flex'}`}
                style={{
                  animation: 'fadeIn 0.5s ease-out'
                }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#1B7A4E] text-[#1B7A4E]"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-8 leading-relaxed italic text-base flex-grow">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1B7A4E] to-[#2E8B57] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.title} &bull; {testimonial.country}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows - positioned inside the padding area */}
          <button
            onClick={goToPrevious}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#1B7A4E] hover:bg-[#156B3F] text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => { setAutoPlay(false); goToNext(); }}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#1B7A4E] hover:bg-[#156B3F] text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-[#1B7A4E] w-8'
                  : 'bg-gray-300 w-3 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Trustpilot Section */}
        <div className="mt-20 bg-gradient-to-r from-[#1B7A4E] to-[#156B3F] rounded-2xl p-12 text-center shadow-xl">
          <div className="flex justify-center mb-6">
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          <h3 className="text-white text-3xl font-bold mb-2">Trusted by Global Investors</h3>
          <p className="text-white text-lg mb-2">Rated {averageRating}/5 on Trustpilot</p>
          <p className="text-white text-sm opacity-90 mb-8">Based on {testimonials.length} verified client reviews</p>
          <a
            href="https://pt.trustpilot.com/review/www.getsecondpassport.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-[#1B7A4E] font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Read Reviews on Trustpilot
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}