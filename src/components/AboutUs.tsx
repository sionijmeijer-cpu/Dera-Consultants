import { CheckCircle } from 'lucide-react';

interface AboutUsProps {
  onScheduleCall: () => void;
}

export default function AboutUs({ onScheduleCall }: AboutUsProps) {
  return (
    <div className="bg-white">
      {/* Page Header with Video Background */}
      <section className="relative min-h-[500px] sm:min-h-[550px] md:min-h-[650px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110"
          style={{ filter: 'blur(4px)' }}
        >
          <source src="https://i.imgur.com/AVaCd1V.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-[#0f3460]/60" />

        {/* Centered Content */}
        <div className="relative z-10 text-center px-3 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Global Mobility, Structured Properly
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
            When investors, entrepreneurs, and internationally minded families seek greater mobility and optionality, they look for clear guidance and trusted coordination. We are a private immigration advisory focused on second citizenship and residency pathways. Our role is to help clients understand legitimate options, navigate complex processes, coordinate with licensed professionals, and secure additional residency or citizenship with confidence. Every case is approached individually, with discretion and clarity.
          </p>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-12 sm:py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">Our Journey</h2>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1B7A4E] mb-6 sm:mb-8">Built on Practical Experience</h3>
              
              <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed">
                <p className="text-sm sm:text-base md:text-lg">
                  Our firm was founded on a simple observation: many capable, globally active individuals struggle to navigate residency and citizenship options efficiently.
                </p>
                
                <p className="text-sm sm:text-base md:text-lg">
                  The information is fragmented, the processes are complex, and clients often deal with multiple parties without clear coordination.
                </p>
                
                <p className="text-sm sm:text-base md:text-lg">
                  We created our advisory to simplify that journey.
                </p>
                
                <p className="text-sm sm:text-base md:text-lg">
                  Today, we support clients by acting as a structured point of guidance and a reliable connector to vetted legal and tax professionals.
                </p>
                
                <p className="text-sm sm:text-base md:text-lg font-semibold text-[#0f3460]">
                  Not hype. Not shortcuts.<br />Just clear direction and proper coordination.
                </p>
              </div>
            </div>
            
            {/* Photo Placeholder */}
            <div className="flex items-center justify-center">
              <div className="w-full aspect-square bg-gray-300 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://i.imgur.com/1E2MGHD.jpeg" 
                  alt="Our Journey" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Dera Consultants?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-gray-50 rounded-lg sm:rounded-xl p-6 sm:p-8 border border-gray-200 hover:border-[#1B7A4E] transition-all duration-300">
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-3">
                <div className="bg-[#1B7A4E] w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <span>Trusted Expertise</span>
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                With in-depth knowledge of Caribbean Citizenship by Investment programs and Portuguese pathways, we offer comprehensive insights that enable informed decisions.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg sm:rounded-xl p-6 sm:p-8 border border-gray-200 hover:border-[#0f3460] transition-all duration-300">
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-3">
                <div className="bg-[#1B7A4E] w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <span>Personalized Support</span>
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                We believe every client is unique. We take the time to understand your goals, preferences, and concerns, guiding you to the solutions that best fit your lifestyle and financial plans.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg sm:rounded-xl p-6 sm:p-8 border border-gray-200 hover:border-[#1B7A4E] transition-all duration-300">
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-3">
                <div className="bg-[#1B7A4E] w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <span>End-to-End Guidance</span>
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                From initial consultation to final approval, we hold your hand, managing communications and coordinating with the right agencies to make your journey smooth and stress-free.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg sm:rounded-xl p-6 sm:p-8 border border-gray-200 hover:border-[#0f3460] transition-all duration-300">
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-3">
                <div className="bg-[#1B7A4E] w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <span>Transparent & Honest</span>
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Our recommendations are based solely on your best interests. We prioritize transparency, providing clear information on costs, benefits, timelines, and legal requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-16 bg-gradient-to-br from-[#0f3460] to-[#1a5276] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://i.pinimg.com/1200x/38/27/0d/38270dbb283efecad6914223963a7e0d.jpg" alt="Success" className="w-full h-full object-cover opacity-15" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f3460]/95 to-[#1a5276]/95"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Let's Start Your Immigration Journey
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8">
            Schedule a free consultation with our experts today and explore your options
          </p>
          <button onClick={onScheduleCall} className="bg-[#1B7A4E] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#156B3F] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base">
            Schedule Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
}