interface CaribbeanCBIProps {
  onScheduleCall: () => void;
}

const countries = [
  {
    name: 'Antigua and Barbuda',
    image: 'https://images.unsplash.com/photo-1580237541049-2d715a09486e?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Antigua and Barbuda clear turquoise waters and white sand beach',
    coatOfArms: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Coat_of_arms_of_Antigua_and_Barbuda.svg/80px-Coat_of_arms_of_Antigua_and_Barbuda.svg.png',
    tag: 'Great for families',
    tagColor: 'bg-blue-100 text-blue-800',
    options: [
      { label: 'National Development Fund donation', value: 'from $100,000' },
      { label: 'Real estate investment', value: 'from $200,000' },
      { label: 'Residency requirement', value: '5 days within 5 years' },
    ],
    note: 'One of the most family-friendly programs. Dependants up to age 30 can be included, and parents over 58 are eligible too.',
  },
  {
    name: 'St. Kitts and Nevis',
    image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'St Kitts and Nevis tropical coastline with lush green hills',
    coatOfArms: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Coat_of_Arms_of_Saint_Kitts_and_Nevis.svg/80px-Coat_of_Arms_of_Saint_Kitts_and_Nevis.svg.png',
    tag: 'Oldest CBI program',
    tagColor: 'bg-emerald-100 text-emerald-800',
    options: [
      { label: 'Sustainable Growth Fund donation', value: 'from $150,000' },
      { label: 'Real estate investment', value: 'from $200,000' },
      { label: 'Residency requirement', value: 'None' },
    ],
    note: 'The world\'s first citizenship by investment program, launched in 1984. That history matters: St. Kitts passports are among the most respected in this category.',
  },
  {
    name: 'Dominica',
    image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Dominica lush rainforest and volcanic island coastline',
    coatOfArms: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Coat_of_arms_of_Dominica.svg/80px-Coat_of_arms_of_Dominica.svg.png',
    tag: 'Most affordable entry',
    tagColor: 'bg-teal-100 text-teal-800',
    options: [
      { label: 'Economic Diversification Fund donation', value: 'from $100,000' },
      { label: 'Real estate investment', value: 'from $200,000' },
      { label: 'Processing time', value: 'Around 3 to 4 months' },
    ],
    note: 'Dominica consistently ranks as one of the most cost-effective programs globally. No residency requirement and a straightforward process make it a practical starting point.',
  },
  {
    name: 'Saint Lucia',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Saint Lucia Piton mountains rising from the Caribbean sea',
    coatOfArms: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Coat_of_arms_of_Saint_Lucia.svg/80px-Coat_of_arms_of_Saint_Lucia.svg.png',
    tag: 'Multiple investment routes',
    tagColor: 'bg-purple-100 text-purple-800',
    options: [
      { label: 'National Economic Fund donation', value: 'from $100,000' },
      { label: 'Real estate investment', value: 'from $300,000' },
      { label: 'Government bonds', value: 'from $500,000' },
    ],
    note: 'Saint Lucia offers more investment pathways than most programs, including a government bond option that is capital-preserving rather than a straight donation.',
  },
  {
    name: 'Grenada',
    image: 'https://images.unsplash.com/photo-1602002418082-dd4a4db7e9a0?auto=format&fit=crop&w=800&q=80',
    coatOfArms: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Coat_of_arms_of_Grenada.svg/80px-Coat_of_arms_of_Grenada.svg.png',
    imageAlt: 'Grenada spice island harbour with colourful boats',
    tag: 'E-2 Treaty access to the US',
    tagColor: 'bg-amber-100 text-amber-800',
    options: [
      { label: 'National Transformation Fund donation', value: 'from $150,000' },
      { label: 'Real estate investment', value: 'from $350,000' },
      { label: 'Processing time', value: '4 to 6 months' },
    ],
    note: 'Grenada is the only Caribbean CBI country with an E-2 Treaty with the United States, which means Grenadian citizens can apply for a US investor visa. For clients with US business interests, this changes the calculus entirely.',
  },
];

const benefits = [
  {
    icon: '🛫',
    title: 'Visa-free travel to 140 plus countries',
    body: 'Caribbean passports open doors to the Schengen Area, the UK, Singapore, and Hong Kong, among others. For many of our clients, that access is the primary driver.',
  },
  {
    icon: '💰',
    title: 'Favourable tax environments',
    body: 'Most Caribbean CBI countries have no capital gains tax, no inheritance tax, and no estate tax. Combined with no residency requirement, this can be a meaningful planning tool.',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Your whole family can be included',
    body: 'Spouses, dependent children, and in many cases parents and grandparents can be included in a single application. You are not just getting a passport, you are getting options for your family.',
  },
  {
    icon: '⏱️',
    title: 'Fast processing, no residency needed',
    body: 'Most programs process in 3 to 6 months. You do not need to live there, visit regularly, or change your day-to-day life in any way.',
  },
  {
    icon: '🔒',
    title: 'A real plan B',
    body: 'A second citizenship is not about distrust in your home country. It is about having options. Many of our clients simply want the security of knowing there is another door open.',
  },
  {
    icon: '🌐',
    title: 'Business and banking flexibility',
    body: 'A second passport can simplify international business, improve access to global banking, and in some cases open markets that are otherwise restricted.',
  },
];

const mistakes = [
  {
    icon: '🔀',
    title: 'Choosing the cheapest program, not the right one',
    body: 'Dominica may have the lowest entry point, but if your goal involves US business access, Grenada is the only option. Price is one factor. Your actual objectives matter more.',
  },
  {
    icon: '📋',
    title: 'Underestimating due diligence requirements',
    body: 'Every Caribbean CBI program runs thorough background checks. Clients with complex business histories, prior visa rejections, or dual nationals need to plan their application carefully. Issues that are not disclosed upfront cause the most problems.',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Not thinking about dependants early enough',
    body: 'Adding family members affects cost, documentation, and sometimes program eligibility. Clients who decide late that they want to include parents or adult children often end up delaying or restarting the process.',
  },
  {
    icon: '🏦',
    title: 'Confusing donation and investment routes',
    body: 'A donation is a one-way cost. A real estate or bond investment may preserve or return capital. Many clients assume all routes work the same way financially. They do not.',
  },
  {
    icon: '📰',
    title: 'Using outdated information',
    body: 'Program prices, processing times, and eligibility rules change regularly. Several programs raised minimum investment thresholds in 2023 and 2024. What you read two years ago may no longer be accurate.',
  },
  {
    icon: '🔁',
    title: 'Going through a firm with no regional accountability',
    body: 'Some advisory firms sell Caribbean programs without proper authorisation or local connections. We work directly with licensed agents and government-approved intermediaries in each jurisdiction.',
  },
];

export default function CaribbeanCBI({ onScheduleCall }: CaribbeanCBIProps) {
  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative min-h-[580px] flex items-center justify-center pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=1920&q=80"
            alt="Caribbean island turquoise waters aerial view"
            className="w-full h-full object-cover"
            loading="eager"
            width="1920"
            height="580"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/10" />
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="inline-block text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Caribbean Citizenship by Investment
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            A second passport is not just for the ultra-wealthy anymore
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Five Caribbean nations offer legitimate, government-run citizenship by investment programs. The right one depends on your goals, your family situation, and what you actually want the passport to do for you.
          </p>
          <div className="flex justify-center">
            <button
              onClick={onScheduleCall}
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-emerald-500/30 hover:scale-105"
            >
              Talk through your options
            </button>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-gray-700 leading-relaxed mb-6 font-medium">
            Caribbean citizenship by investment has been around since the 1980s. These are not obscure loopholes. They are government-run programs designed to attract foreign investment, and they come with real passports, real visa-free access, and a straightforward legal process.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            What has changed is who is applying. It used to be a niche product for very high-net-worth individuals. Today we work with entrepreneurs, remote professionals, families relocating internationally, and people who simply want more flexibility in how they live and move.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            At Dera Consultants, we advise on all five main Caribbean programs and work with licensed agents and government-approved intermediaries in each jurisdiction. Our role is to help you understand which program fits your situation, and to manage the process so nothing falls through the cracks.
          </p>
        </div>
      </section>

      {/* COUNTRIES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            The five Caribbean CBI programs
          </h2>
          <p className="text-gray-500 text-lg mb-12">
            Each program has different investment thresholds, processing times, and strategic advantages. Here is what you need to know about each one.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country) => (
              <div
                key={country.name}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={country.image}
                    alt={country.imageAlt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width="800"
                    height="208"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src={country.coatOfArms}
                      alt={`${country.name} coat of arms`}
                      className="h-10 w-auto object-contain flex-shrink-0"
                      loading="lazy"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                    <h3 className="text-xl font-bold text-gray-900">{country.name}</h3>
                  </div>
                  <span className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full mb-4 ${country.tagColor}`}>
                    {country.tag}
                  </span>
                  <div className="space-y-2 mb-4">
                    {country.options.map((opt) => (
                      <div key={opt.label} className="flex justify-between text-sm">
                        <span className="text-gray-500">{opt.label}</span>
                        <span className="font-semibold text-gray-800 ml-2 text-right">{opt.value}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {country.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT IMAGE + COPY */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-1 lg:order-1 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1580237541049-2d715a09486e?auto=format&fit=crop&w=900&q=80"
              alt="Antigua Caribbean beach at sunset with calm water"
              className="w-full h-80 lg:h-[420px] object-cover"
              loading="lazy"
              width="900"
              height="420"
            />
          </div>
          <div className="order-2 lg:order-2">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-widest">
              What clients are actually looking for
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
              Not everyone wants to live there
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              That is the part people sometimes find surprising. You do not need to relocate to the Caribbean to hold Caribbean citizenship. Most programs have minimal or no residency requirements. You get the passport, the travel access, and the tax advantages without changing where you live.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              For some clients, the goal is straightforward: a stronger passport for travel. For others, it is about tax planning, or having a backup option for the family, or access to the US E-2 visa through Grenada.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We take time at the start of every engagement to understand what you actually want the citizenship to do. That shapes which program we recommend, and how we structure the application.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            What Caribbean citizenship actually gives you
          </h2>
          <p className="text-gray-500 text-lg mb-12">
            Beyond the brochure. The practical advantages our clients care about most.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISTAKES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Where applications go wrong
          </h2>
          <p className="text-gray-500 text-lg mb-12">
            These are not rare edge cases. We see each of these regularly.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mistakes.map((m) => (
              <div
                key={m.title}
                className="border border-red-100 bg-red-50/40 rounded-xl p-6 hover:bg-red-50 transition-colors"
              >
                <div className="text-3xl mb-4">{m.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{m.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Not sure which program fits your situation?
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            A 30-minute call is usually enough to narrow it down. We will look at your goals, your family situation, and your investment budget and give you a straight answer on which program makes the most sense, and which ones to avoid.
          </p>
          <button
            onClick={onScheduleCall}
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-emerald-500/20"
          >
            Book a free strategy call
          </button>
          <p className="text-gray-500 text-sm mt-4">No commitment. No sales pitch. Just a straight conversation.</p>
        </div>
      </section>

    </div>
  );
}
