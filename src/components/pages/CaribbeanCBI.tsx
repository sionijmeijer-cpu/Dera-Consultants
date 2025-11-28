export default function CaribbeanCBI() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section with Image */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/caribbean-hero.png" 
            alt="Caribbean Islands" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Caribbean Citizenship by Investment
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Obtain Caribbean citizenship and a second passport through trusted investment programs in prestigious Caribbean nations.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Second Citizenship and Passport by Investment
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            The Caribbean offers some of the most attractive and accessible citizenship by investment programs globally. These programs provide you with a second passport, opening doors to increased travel freedom, security, and investment opportunities. At Dera Consultants, we simplify this process for you, guiding you through every step of choosing the right program and connecting you with trusted officials.
          </p>
        </div>
      </section>

      {/* Countries Section - 3 Column Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Explore the Caribbean CBI Countries
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Antigua and Barbuda */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/antigua_barbuda.png" 
                  alt="Antigua and Barbuda" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">Antigua and Barbuda</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 mt-1">●</span>
                    <p className="text-gray-700 text-sm">Non-refundable donation to the National Development Fund (NDF) starting at <span className="font-semibold">$100,000</span>.</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 mt-1">●</span>
                    <p className="text-gray-700 text-sm">Real estate investment from <span className="font-semibold">$200,000</span>.</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 mt-1">●</span>
                    <p className="text-gray-700 text-sm">Residency: <span className="font-semibold">5 days within 5 years</span>.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* St. Kitts and Nevis */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/st_kitts_nevis.png" 
                  alt="St. Kitts and Nevis" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">St. Kitts and Nevis</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 mt-1">●</span>
                    <p className="text-gray-700 text-sm">Donation to the Sustainable Growth Fund (SGF) from <span className="font-semibold">$150,000</span>.</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 mt-1">●</span>
                    <p className="text-gray-700 text-sm">Real estate investment from <span className="font-semibold">$200,000</span>.</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 mt-1">●</span>
                    <p className="text-gray-700 text-sm">Residency: <span className="font-semibold">None; citizenship granted within 4-6 months</span>.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dominica */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/dominica.png" 
                  alt="Dominica" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">Dominica</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 mt-1">●</span>
                    <p className="text-gray-700 text-sm">Donation to the Economic Diversification Fund from <span className="font-semibold">$100,000</span>.</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 mt-1">●</span>
                    <p className="text-gray-700 text-sm">Real estate from <span className="font-semibold">$200,000</span>.</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 mt-1">●</span>
                    <p className="text-gray-700 text-sm">Residency: <span className="font-semibold">None; fast processing time of about 3-4 months</span>.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Saint Lucia */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/saint_lucia.png" 
                  alt="Saint Lucia" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">Saint Lucia</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 mt-1">●</span>
                    <p className="text-gray-700 text-sm">Donation from <span className="font-semibold">$100,000</span>.</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 mt-1">●</span>
                    <p className="text-gray-700 text-sm">Real estate from <span className="font-semibold">$300,000</span>.</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 mt-1">●</span>
                    <p className="text-gray-700 text-sm">Government bonds from <span className="font-semibold">$500,000</span>.</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 mt-1">●</span>
                    <p className="text-gray-700 text-sm">Residency: <span className="font-semibold">5 days within 5 years</span>.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Grenada */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/grenada.png" 
                  alt="Grenada" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">Grenada</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 mt-1">●</span>
                    <p className="text-gray-700 text-sm">Donation from <span className="font-semibold">$150,000</span>.</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 mt-1">●</span>
                    <p className="text-gray-700 text-sm">Real estate from <span className="font-semibold">$350,000</span>.</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 mt-1">●</span>
                    <p className="text-gray-700 text-sm">National Transformation Fund (NTF).</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 mt-1">●</span>
                    <p className="text-gray-700 text-sm">Residency: <span className="font-semibold">None; citizenship within 4-6 months</span>.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Benefits of Caribbean CBI Programs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Visa-Free Travel */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Visa-Free Travel</h3>
              <p className="text-gray-700">Access to over 140 countries, including the Schengen Area, UK, and Hong Kong.</p>
            </div>

            {/* Tax Advantages */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Tax Advantages</h3>
              <p className="text-gray-700">Favorable tax regimes with no capital gains, inheritance, or estate taxes in most countries.</p>
            </div>

            {/* Family Inclusion */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">Family Inclusion</h3>
              <p className="text-gray-700">Immediate family members (spouses, children, parents) can usually be included.</p>
            </div>

            {/* Economic Freedom */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">Economic Freedom</h3>
              <p className="text-gray-700">Investment options that generate income and potential returns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Explore Caribbean Citizenship?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our experts will guide you through the entire process to find the best program for your needs.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-bold text-lg">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}