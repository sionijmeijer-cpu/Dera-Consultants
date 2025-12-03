import { ArrowRight, Globe, Users, Award, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';

interface HomePageProps {
  onScheduleCall: () => void;
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

export default function HomePage({ onScheduleCall }: HomePageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const displayedTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length]
  ];

  return (
    <>
      <SEOHead
        title="Second Passport & Residency by Investment | Dera Consultants"
        description="Get a second passport or EU residency through trusted citizenship and residency by investment programs in Europe and the Caribbean. Book a consultation with Dera Consultants."
        keywords="second passport, citizenship by investment, EU residency, caribbean citizenship, golden visa, residency programs"
        image="/images/hero-office.png"
        url="https://www.getsecondpassport.eu/"
      />
      <div className="bg-white">
        {/* Hero Section */}
        <section className="min-h-[600px] bg-gradient-to-br from-[#0f3460] via-[#1a5276] to-[#16324f] text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-72 h-72 bg-[#d4af37] rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                    Your Gateway to <span className="text-[#d4af37]">Global Citizenship</span>
                  </h1>
                  <p className="text-xl text-blue-100 max-w-lg">
                    Secure a second passport or EU residency through proven investment programs. Expert guidance for Caribbean CBI and European residency pathways.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={onScheduleCall}
                    className="px-8 py-4 bg-[#d4af37] text-[#0f3460] rounded-lg font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>Schedule Free Consultation</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <Link
                    to="/about-us"
                    className="px-8 py-4 border-2 border-[#d4af37] text-[#d4af37] rounded-lg font-bold text-lg hover:bg-[#d4af37] hover:text-[#0f3460] transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              <div className="hidden lg:flex items-center justify-center">
                <img
                  src="https://i.imgur.com/Il3v1K2.png"
                  alt="Global citizenship gateway"
                  className="w-full h-full object-cover rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Services Overview */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Citizenship & Residency Programs</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore tailored pathways to achieve your global mobility goals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Caribbean CBI Card */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className="h-48 bg-gradient-to-br from-[#0f3460] to-[#1a5276] relative overflow-hidden">
                  <img
                    src="https://i.imgur.com/A4Ln0WE.jpeg"
                    alt="Caribbean citizenship programs"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Caribbean Citizenship by Investment</h3>
                  <p className="text-gray-600 mb-6">
                    Fast-track second passports through trusted Caribbean programs with visa-free access to 170+ countries.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#d4af37] rounded-full"></span>
                      Antigua & Barbuda
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#d4af37] rounded-full"></span>
                      Dominica
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#d4af37] rounded-full"></span>
                      Grenada & St. Lucia
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#d4af37] rounded-full"></span>
                      St. Kitts & Nevis
                    </li>
                  </ul>
                  <Link
                    to="/caribbean-citizenship-by-investment"
                    className="inline-flex items-center gap-2 text-[#0f3460] font-bold hover:text-[#d4af37] transition-colors"
                  >
                    Explore Programs <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Europe & Portugal Card */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className="h-48 bg-gradient-to-br from-[#0f3460] to-[#1a5276] relative overflow-hidden">
                  <img
                    src="https://i.imgur.com/P4Bwc2B.jpeg"
                    alt="Portugal and European residency"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Portugal & European Residency</h3>
                  <p className="text-gray-600 mb-6">
                    Build your path to EU citizenship through Portugal&apos;s Golden Visa and other European investment residency programs.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#d4af37] rounded-full"></span>
                      Portugal Golden Visa
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#d4af37] rounded-full"></span>
                      Spain Digital Nomad
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#d4af37] rounded-full"></span>
                      Germany Residence
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#d4af37] rounded-full"></span>
                      EU Citizenship Pathways
                    </li>
                  </ul>
                  <Link
                    to="/portugal-europe-residency"
                    className="inline-flex items-center gap-2 text-[#0f3460] font-bold hover:text-[#d4af37] transition-colors"
                  >
                    Explore Programs <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Successful journeys to second passports and residency
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {displayedTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-[#d4af37]"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0f3460] to-[#1a5276] text-white rounded-full flex items-center justify-center font-bold">
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">{testimonial.quote}</p>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={prevTestimonial}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex ? 'bg-[#0f3460] w-8' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0f3460] to-[#1a5276] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our experts to explore the best citizenship or residency program for your needs.
            </p>
            <button
              onClick={onScheduleCall}
              className="px-8 py-4 bg-[#d4af37] text-[#0f3460] rounded-lg font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-200 shadow-lg inline-flex items-center gap-2"
            >
              <span>Book Your Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
