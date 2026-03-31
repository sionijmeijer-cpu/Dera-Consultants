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
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Grenada Caribbean tropical beach with clear water and palm trees',
    coatOfArms: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Coat_of_arms_of_Grenada.svg/80px-Coat_of_arms_of_Grenada.svg.png',
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
    body: 'Caribbean passports open doors to the Schengen Area, the UK, Singapore, and Hong Kong among others. For many clients, that access is the primary driver.',
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

const steps = [
  {
    num: '01',
    title: 'Understand what you want the passport to do',
    body: 'Travel access, tax planning, US E-2 visa eligibility, family inclusion, or simply having a backup option. Your goal shapes which program we recommend.',
  },
  {
    num: '02',
    title: 'Match the right program to your situation',
    body: 'We look at your investment budget, family structure, background, and timeline and give you a straight recommendation, not a menu of options to figure out yourself.',
  },
  {
    num: '03',
    title: 'Manage the process end to end',
    body: 'We work with licensed agents and government-approved intermediaries in each jurisdiction. You stay informed throughout without having to chase paperwork yourself.',
  },
];

export default function CaribbeanCBI({ onScheduleCall }: CaribbeanCBIProps) {
  return (
    <div className="min-h-screen bg-white">

      {/* 1. HERO */}
      <section className="relative min-h-[580px] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
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

        <div className="max-w-3xl mx-auto text-center relative z-10 py-24">
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

      {/* 2. FIVE CBI PROGRAMS */}
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
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
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

      {/* 3. BENEFITS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW WE HELP + CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            How we work with clients on Caribbean CBI
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Most clients come in knowing Caribbean CBI exists but not knowing which program is right for them. We sort that out quickly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {steps.map((step) => (
              <div key={step.num} className="bg-white/5 border border-white/10 rounded-xl p-8">
                <div className="text-sm font-semibold text-emerald-400 mb-3">{step.num}</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{step.body}</p>
              </div>
            ))}
          </div>
      </section>

    </div>
  );
}
