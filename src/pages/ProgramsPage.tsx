import { useEffect } from 'react';

export default function ProgramsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f3460] mb-6">
            Our Programs
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Explore our comprehensive citizenship and residency programs designed to open doors to new opportunities around the world.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Caribbean CBI Card */}
            <div className="group">
              <a
                href="/caribbean-citizenship-by-investment"
                className="block h-full"
              >
                <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full hover:scale-105 transform">
                  <div className="relative h-64 md:h-72 overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700">
                    <img
                      src="https://i.imgur.com/KTSBU1c.png"
                      alt="Caribbean"
                      className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                          Caribbean CBI
                        </h2>
                        <p className="text-blue-100 text-lg">
                          Citizenship by Investment
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="text-gray-600 mb-6 text-base md:text-lg">
                      Obtain citizenship in prestigious Caribbean nations through investment. Fast-track your global mobility and access world-class benefits.
                    </p>
                    <div className="flex items-center text-[#0f3460] font-semibold group-hover:text-blue-600 transition-colors">
                      <span>Explore Program</span>
                      <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Portugal & Europe Card */}
            <div className="group">
              <a
                href="/portugal-europe-residency"
                className="block h-full"
              >
                <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full hover:scale-105 transform">
                  <div className="relative h-64 md:h-72 overflow-hidden bg-gradient-to-br from-amber-500 to-amber-700">
                    <img
                      src="https://i.imgur.com/KTSBU1c.png"
                      alt="Portugal & Europe"
                      className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                          Portugal & Europe
                        </h2>
                        <p className="text-amber-100 text-lg">
                          Residency & Golden Visa
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="text-gray-600 mb-6 text-base md:text-lg">
                      Secure residency in Portugal and access to the entire European Union. Build your European lifestyle with our expert guidance.
                    </p>
                    <div className="flex items-center text-[#0f3460] font-semibold group-hover:text-amber-600 transition-colors">
                      <span>Explore Program</span>
                      <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Our expert consultants are ready to help you choose the perfect program for your goals.
          </p>
          <button
            onClick={() => {
              const event = new CustomEvent('openScheduleModal');
              window.dispatchEvent(event);
            }}
            className="bg-[#d4af37] text-[#0f3460] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#c9a02e] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.6)] hover:shadow-[0_0_30px_rgba(212,175,55,0.8)]"
          >
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
