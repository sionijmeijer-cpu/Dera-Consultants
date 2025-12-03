import { ArrowRight, Globe, Users, Award, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (testimonials.length - 2)) % (testimonials.length - 2));
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[currentIndex + 1],
    testimonials[currentIndex + 2]
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0f3460] via-[#1a5276] to-[#0d2540] text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://i.imgur.com/2gJVups.png" alt="Immigration Consulting Office" className="w-full h-full object-cover opacity-30" loading="eager" fetchPriority="high" width="1920" height="1080" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f3460] via-[#1a5276]/90 to-[#0d2540]/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Your Gateway to Global Citizenship & Residency
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-blue-100">
              Expert immigration consultants specializing in Caribbean CBI and European residency programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onScheduleCall}
                className="bg-gradient-to-r from-[#d4af37] to-[#e0c158] text-[#0f3460] px-8 py-4 rounded-lg font-semibold hover:from-[#c9a02e] hover:to-[#d4a832] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <a 
                href="/about-us"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0f3460] transition-all duration-200 flex items-center justify-center gap-2 inline-flex"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#d4af37]">
              <div className="bg-[#e8dcc4] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-7 h-7 text-[#0f3460]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Global Reach</h3>
              <p className="text-gray-600">
                Access to citizenship and residency programs across the Caribbean, Portugal, and Europe
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#0f3460]">
              <div className="bg-[#dce7f0] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-[#0f3460]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Expert Guidance</h3>
              <p className="text-gray-600">
                Experienced consultants dedicated to navigating complex immigration processes
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#d4af37]">
              <div className="bg-[#e8dcc4] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-[#0f3460]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Trusted Partner</h3>
              <p className="text-gray-600">
                Proven track record of successful applications and satisfied clients worldwide
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#0f3460]">
              <div className="bg-[#dce7f0] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-[#0f3460]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Fast Processing</h3>
              <p className="text-gray-600">
                Streamlined application process ensuring efficient and timely results
              </p>
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from satisfied clients who have successfully navigated their journey to global citizenship with our expert guidance.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleTestimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#0f3460] text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {testimonial.initials}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mb-4">
                    <span className="text-[#d4af37] text-lg">★★★★★</span>
                  </div>
                  <p className="text-gray-700">
                    {testimonial.quote}
                  </p>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-[#0f3460] text-white p-2 rounded-full hover:bg-[#0d2540] transition-colors duration-200 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-[#0f3460] text-white p-2 rounded-full hover:bg-[#0d2540] transition-colors duration-200 shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
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