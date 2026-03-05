{/* Complete Guide Package Section */}
<section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 via-blue-50 to-emerald-50">
  <div className="max-w-4xl mx-auto">
    <div className="bg-white rounded-2xl shadow-xl border-2 border-purple-200 p-8 sm:p-12 text-center">
      <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
        Complete Collection
      </span>

      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Get All 4 Guides
      </h2>

      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Get the full collection at a discounted price.
      </p>

      <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
        <div className="flex items-start gap-3">
          <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-gray-900">Golden Visa 2026</p>
            <p className="text-sm text-gray-600">€79.99 value</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-gray-900">D7 Visa Blueprint</p>
            <p className="text-sm text-gray-600">€25.99 value</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-gray-900">D8 Digital Nomad Visa</p>
            <p className="text-sm text-gray-600">€29.99 value</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-gray-900">Caribbean Bundle</p>
            <p className="text-sm text-gray-600">€89.99 value</p>
          </div>
        </div>
      </div>

      <div className="mb-6 p-6 bg-purple-50 rounded-xl">
        <div className="flex items-baseline gap-2 justify-center mb-2">
          <span className="text-4xl font-extrabold text-gray-900">€179.99</span>
          <span className="text-lg text-gray-400 line-through">€225.96</span>
        </div>
        <p className="text-sm text-gray-600">All 4 guides combined</p>
        <p className="text-xs text-purple-600 font-semibold mt-2">Save €45.97 when you buy the bundle</p>
      </div>

      <button
        onClick={() =>
          handleBuyGuide({
            id: 'all-guides',
            title: 'Complete Guide Collection',
            description: 'All 4 guides combined',
            price: 179.99,
            currency: 'EUR',
            features: ['Golden Visa 2026', 'D7 Visa Blueprint', 'D8 Digital Nomad Visa', 'Caribbean Bundle'],
            image: '📦',
            badge: 'Best Value',
          })
        }
        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-10 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
      >
        <Download className="w-5 h-5" />
        Get All Guides
      </button>
    </div>
  </div>
</section>
