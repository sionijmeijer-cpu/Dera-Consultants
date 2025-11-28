import { CheckCircle, Target, Eye, Heart } from 'lucide-react';

interface AboutUsProps {
  onScheduleCall: () => void;
}

export default function AboutUs({ onScheduleCall }: AboutUsProps) {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative bg-gradient-to-r from-[#0f3460] to-[#1a5276] text-white py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://i.pinimg.com/736x/b7/d0/18/b7d0181b4e7c2709ee29b7bd83839452.jpg" alt="Our Team" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f3460] via-[#1a5276]/90 to-[#1a5276]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to Dera Consultants</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Your Trusted Partner in Citizenship and Residency Solutions
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-4xl mx-auto text-gray-600 space-y-6">
            <p>
              At Dera Consultants, we are passionate about empowering individuals and families to expand their horizons through second passports, residency, and citizenship-by-investment programs. Our mission is to simplify the complex process of global mobility, providing clarity, personalized guidance, and peace of mind every step of the way.
            </p>
            <p>
              Founded on the principles of integrity, professionalism, and excellence, Dera Consultants operates as an independent advisory firm dedicated to connecting clients with the most suitable citizenship and residency options available worldwide. We do not perform legal or legal consultancy services ourselves; instead, we leverage our extensive network and expertise to connect you with trusted legal agencies and investment programs, ensuring you receive the best advice tailored to your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Global Mobility Advantage Stats */}
      <section className="py-16 bg-gradient-to-br from-[#0f3460] to-[#1a5276] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">The Global Mobility Advantage</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="text-4xl sm:text-5xl font-bold text-[#d4af37] mb-2">$25B</div>
              <p className="text-blue-100">Global CBI Market Size (Est.)</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="text-4xl sm:text-5xl font-bold text-[#d4af37] mb-2">150+</div>
              <p className="text-blue-100">Countries accessible visa-free</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="text-4xl sm:text-5xl font-bold text-[#d4af37] mb-2">3-6</div>
              <p className="text-blue-100">Months average processing time</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="text-4xl sm:text-5xl font-bold text-[#d4af37] mb-2">95%</div>
              <p className="text-blue-100">Client satisfaction rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Dera Consultants?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-[#d4af37] transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="bg-[#d4af37] w-12 h-12 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-[#0f3460]" />
                </div>
                Trusted Expertise
              </h3>
              <p className="text-gray-600">
                With in-depth knowledge of Caribbean Citizenship by Investment programs and Portuguese pathways, we offer comprehensive insights that enable informed decisions.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-[#0f3460] transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="bg-[#dce7f0] w-12 h-12 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-[#0f3460]" />
                </div>
                Personalized Support
              </h3>
              <p className="text-gray-600">
                We believe every client is unique. We take the time to understand your goals, preferences, and concerns, guiding you to the solutions that best fit your lifestyle and financial plans.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-[#d4af37] transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="bg-[#d4af37] w-12 h-12 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-[#0f3460]" />
                </div>
                End-to-End Guidance
              </h3>
              <p className="text-gray-600">
                From initial consultation to final approval, we hold your hand, managing communications and coordinating with the right agencies to make your journey smooth and stress-free.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-[#0f3460] transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="bg-[#dce7f0] w-12 h-12 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-[#0f3460]" />
                </div>
                Transparent & Honest
              </h3>
              <p className="text-gray-600">
                Our recommendations are based solely on your best interests. We prioritize transparency, providing clear information on costs, benefits, timelines, and legal requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to help you achieve your immigration goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#d4af37] h-full flex flex-col">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-[#0f3460] to-[#1a5276] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  1
                </div>
                <div className="pt-4 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Initial Consultation</h3>
                  <p className="text-gray-600 flex-1">
                    We act as your trusted middleman and translator, helping you navigate the often complicated landscape of citizenship and residency routes. We'll explain the benefits and differences of each option tailored to your unique goals.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#0f3460] h-full flex flex-col">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-[#d4af37] to-[#c9a02e] text-[#0f3460] w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  2
                </div>
                <div className="pt-4 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Choose the Right Program</h3>
                  <p className="text-gray-600 flex-1">
                    Based on your objectives, we'll assist you in selecting the most suitable program. Our expertise ensures you make an informed decision that aligns with your aspirations for the future.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#d4af37] h-full flex flex-col">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-[#0f3460] to-[#1a5276] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  3
                </div>
                <div className="pt-4 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Connect with Reputable Agencies</h3>
                  <p className="text-gray-600 flex-1">
                    We connect you with reputable agencies that specialize in your chosen path. Our network is built on reliability and trust, ensuring you're in capable hands throughout the process.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#0f3460] h-full flex flex-col">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-[#d4af37] to-[#c9a02e] text-[#0f3460] w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  4
                </div>
                <div className="pt-4 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Navigate the Application Process</h3>
                  <p className="text-gray-600 flex-1">
                    We guide you through the application procedures, keeping you informed every step of the way. From submission to approval, we are dedicated to helping you attain your new passport or residency with ease.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-gradient-to-br from-[#0f3460] to-[#1a5276] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://i.pinimg.com/1200x/38/27/0d/38270dbb283efecad6914223963a7e0d.jpg" alt="Success" className="w-full h-full object-cover opacity-15" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f3460]/95 to-[#1a5276]/95"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's Start Your Immigration Journey
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a free consultation with our experts today and explore your options
          </p>
          <button onClick={onScheduleCall} className="bg-gradient-to-r from-[#d4af37] to-[#e0c158] text-[#0f3460] px-8 py-4 rounded-lg font-semibold hover:from-[#c9a02e] hover:to-[#d4a832] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Schedule Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
