import { CheckCircle, Target, Eye, Heart } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#0f3460] to-[#1a5276] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Dera Consultants</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Your trusted partner in global immigration and citizenship solutions
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Dera Consultants was founded with a singular mission: to make global mobility accessible to individuals and families seeking better opportunities worldwide. With years of experience in immigration law and international relations, our team has helped thousands of clients achieve their dreams of citizenship and residency in premier destinations.
                </p>
                <p>
                  We specialize in Caribbean Citizenship by Investment Programs (CBIP) and European residency solutions, particularly in Portugal and other EU countries. Our expertise spans across complex immigration frameworks, ensuring that our clients receive the most current and accurate guidance available.
                </p>
                <p>
                  What sets us apart is our commitment to personalized service. We understand that each client has unique circumstances, goals, and concerns. That is why we take the time to understand your specific needs and craft a tailored strategy that maximizes your chances of success.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#e8dcc4] to-[#dce7f0] p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#d4af37]">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-gradient-to-br from-[#0f3460] to-[#1a5276] text-white w-12 h-12 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">10+ Years</h3>
                  </div>
                  <p className="text-gray-600">Of excellence in immigration consulting</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#0f3460]">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-gradient-to-br from-[#0f3460] to-[#1a5276] text-white w-12 h-12 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">5000+</h3>
                  </div>
                  <p className="text-gray-600">Successful applications processed</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#d4af37]">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-gradient-to-br from-[#0f3460] to-[#1a5276] text-white w-12 h-12 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">95%</h3>
                  </div>
                  <p className="text-gray-600">Client satisfaction rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#d4af37]">
              <div className="bg-[#e8dcc4] w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-[#0f3460]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide exceptional immigration consulting services that empower individuals and families to achieve global mobility, security, and prosperity through citizenship and residency programs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#0f3460]">
              <div className="bg-[#dce7f0] w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-8 h-8 text-[#0f3460]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the world's most trusted and innovative immigration consulting firm, recognized for our integrity, expertise, and commitment to client success in achieving their global dreams.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#d4af37]">
              <div className="bg-[#e8dcc4] w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-[#0f3460]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600">
                Integrity, Excellence, Client-Focus, Innovation, and Transparency. We conduct business with the highest ethical standards and are dedicated to exceeding client expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 bg-white">
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
              <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#d4af37]">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-[#0f3460] to-[#1a5276] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  1
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Initial Consultation</h3>
                  <p className="text-gray-600 text-center">
                    Free assessment of your eligibility and goals
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#0f3460]">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-[#d4af37] to-[#c9a02e] text-[#0f3460] w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  2
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Document Preparation</h3>
                  <p className="text-gray-600 text-center">
                    Comprehensive gathering and verification of documents
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#d4af37]">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-[#0f3460] to-[#1a5276] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  3
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Application Submission</h3>
                  <p className="text-gray-600 text-center">
                    Professional filing with government authorities
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#0f3460]">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-[#d4af37] to-[#c9a02e] text-[#0f3460] w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  4
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Approval & Follow-up</h3>
                  <p className="text-gray-600 text-center">
                    Ongoing support until final approval
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Dera Consultants?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4 p-6 bg-white rounded-lg shadow-sm">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#e8dcc4]">
                  <CheckCircle className="h-6 w-6 text-[#0f3460]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Deep Expertise</h3>
                <p className="mt-2 text-gray-600">
                  In-depth knowledge of immigration frameworks across Caribbean and European jurisdictions.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white rounded-lg shadow-sm">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#dce7f0]">
                  <CheckCircle className="h-6 w-6 text-[#0f3460]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Personalized Approach</h3>
                <p className="mt-2 text-gray-600">
                  Tailored solutions designed specifically for your unique circumstances and goals.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white rounded-lg shadow-sm">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#e8dcc4]">
                  <CheckCircle className="h-6 w-6 text-[#0f3460]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">High Success Rate</h3>
                <p className="mt-2 text-gray-600">
                  95% client satisfaction with proven track record of successful approvals.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white rounded-lg shadow-sm">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#dce7f0]">
                  <CheckCircle className="h-6 w-6 text-[#0f3460]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">24/7 Support</h3>
                <p className="mt-2 text-gray-600">
                  Dedicated support throughout your journey with multiple contact channels.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white rounded-lg shadow-sm">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#e8dcc4]">
                  <CheckCircle className="h-6 w-6 text-[#0f3460]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Transparent Pricing</h3>
                <p className="mt-2 text-gray-600">
                  Clear, upfront costs with no hidden fees or surprise charges.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white rounded-lg shadow-sm">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#dce7f0]">
                  <CheckCircle className="h-6 w-6 text-[#0f3460]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Global Network</h3>
                <p className="mt-2 text-gray-600">
                  Extensive partnerships with government agencies and processing centers worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#0f3460] to-[#1a5276] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's Start Your Immigration Journey
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a free consultation with our experts today and explore your options
          </p>
          <button className="bg-gradient-to-r from-[#d4af37] to-[#e0c158] text-[#0f3460] px-8 py-4 rounded-lg font-semibold hover:from-[#c9a02e] hover:to-[#d4a832] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Schedule Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
