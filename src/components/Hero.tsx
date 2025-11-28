import { ArrowRight, Globe, Users, Award, TrendingUp } from 'lucide-react';

interface HeroProps {
  onScheduleCall: () => void;
  setCurrentPage?: (page: string) => void;
}

export default function Hero({ onScheduleCall, setCurrentPage }: HeroProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0f3460] via-[#1a5276] to-[#0d2540] text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-office.png" alt="Immigration Consulting Office" className="w-full h-full object-cover opacity-30" />
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
              <button 
                onClick={() => setCurrentPage && setCurrentPage('about')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0f3460] transition-all duration-200 flex items-center justify-center gap-2"
              >
                Learn More
              </button>
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

      {/* Why Choose Us Section */}
      <section id="about-section" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Dera Consultants?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive immigration solutions tailored to your unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-[#0f3460] to-[#1a5276] text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Personalized Service</h3>
                  <p className="text-gray-600">
                    Every client receives tailored advice based on their specific circumstances and goals
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-[#0f3460] to-[#1a5276] text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Transparent Process</h3>
                  <p className="text-gray-600">
                    Clear communication throughout the application process with no hidden fees
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-[#0f3460] to-[#1a5276] text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Comprehensive Support</h3>
                  <p className="text-gray-600">
                    From initial consultation to final approval, we support you every step of the way
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-[#0f3460] to-[#1a5276] text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Proven Success Rate</h3>
                  <p className="text-gray-600">
                    High approval rates backed by years of experience and industry expertise
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#e8dcc4] to-[#dce7f0] p-8 rounded-2xl overflow-hidden relative">
              <img src="/images/success-story.png" alt="Success Story" className="absolute inset-0 w-full h-full object-cover opacity-20" />
              <div className="bg-white p-8 rounded-xl shadow-lg relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  Schedule a free consultation with our immigration experts today and discover the best pathway to your new future.
                </p>
                <button 
                  onClick={onScheduleCall}
                  className="w-full bg-gradient-to-r from-[#0f3460] to-[#1a5276] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#d4af37] hover:to-[#c9a02e] hover:text-[#0f3460] transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Schedule Your Free Consultation
                </button>
              </div>
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
              Real success stories from clients who achieved their immigration goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <img src="/images/portugal-destination.png" alt="Portugal" className="w-full h-40 object-cover rounded-lg mb-4" />
              <div className="flex items-center gap-1 mb-4">
                <span className="text-[#d4af37] text-lg">★★★★★</span>
              </div>
              <p className="text-gray-700 mb-6">
                "Dera Consultants made my Portugal residency application seamless. Their expert guidance and attention to detail ensured everything was perfect. I received my approval in record time!"
              </p>
              <div>
                <h4 className="font-semibold text-gray-900">Maria Silva</h4>
                <p className="text-sm text-gray-600">Portugal D7 Visa</p>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <img src="/images/caribbean-destination.png" alt="Caribbean" className="w-full h-40 object-cover rounded-lg mb-4" />
              <div className="flex items-center gap-1 mb-4">
                <span className="text-[#d4af37] text-lg">★★★★★</span>
              </div>
              <p className="text-gray-700 mb-6">
                "The team at Dera understood my specific situation and tailored the entire process. From consultation to final approval, they were professional and responsive every step of the way."
              </p>
              <div>
                <h4 className="font-semibold text-gray-900">James Thompson</h4>
                <p className="text-sm text-gray-600">Caribbean CBI Program</p>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <img src="/images/global-map.png" alt="Global" className="w-full h-40 object-cover rounded-lg mb-4" />
              <div className="flex items-center gap-1 mb-4">
                <span className="text-[#d4af37] text-lg">★★★★★</span>
              </div>
              <p className="text-gray-700 mb-6">
                "I was overwhelmed by the immigration process, but Dera Consultants broke it down step by step. Their transparency and expertise gave me confidence throughout. Highly recommended!"
              </p>
              <div>
                <h4 className="font-semibold text-gray-900">Amara Johnson</h4>
                <p className="text-sm text-gray-600">EU Residency Program</p>
              </div>
            </div>

            {/* Review 4 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <img src="/images/document-process.png" alt="Document Process" className="w-full h-40 object-cover rounded-lg mb-4" />
              <div className="flex items-center gap-1 mb-4">
                <span className="text-[#d4af37] text-lg">★★★★★</span>
              </div>
              <p className="text-gray-700 mb-6">
                "Professional, knowledgeable, and genuinely committed to helping. Dera Consultants delivered results faster than expected. They are the real deal in immigration consulting."
              </p>
              <div>
                <h4 className="font-semibold text-gray-900">Michael Chen</h4>
                <p className="text-sm text-gray-600">Golden Visa Program</p>
              </div>
            </div>

            {/* Review 5 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <img src="/images/property-portugal.png" alt="Property" className="w-full h-40 object-cover rounded-lg mb-4" />
              <div className="flex items-center gap-1 mb-4">
                <span className="text-[#d4af37] text-lg">★★★★★</span>
              </div>
              <p className="text-gray-700 mb-6">
                "From the initial consultation to visa approval, Dera Consultants handled everything with excellence. Their proactive approach eliminated stress and uncertainty. Best decision I made!"
              </p>
              <div>
                <h4 className="font-semibold text-gray-900">Sophia Rodriguez</h4>
                <p className="text-sm text-gray-600">Citizenship Application</p>
              </div>
            </div>

            {/* Review 6 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <img src="/images/team-consulting.png" alt="Team" className="w-full h-40 object-cover rounded-lg mb-4" />
              <div className="flex items-center gap-1 mb-4">
                <span className="text-[#d4af37] text-lg">★★★★★</span>
              </div>
              <p className="text-gray-700 mb-6">
                "Exceptional service! The consultants understood the nuances of international immigration law. They saved me months of research and potential mistakes. Highly valuable investment."
              </p>
              <div>
                <h4 className="font-semibold text-gray-900">David Hassan</h4>
                <p className="text-sm text-gray-600">Business Visa Program</p>
              </div>
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