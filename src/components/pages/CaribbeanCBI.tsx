import { blogPosts } from '../../data/blogPosts';

interface CaribbeanCBIProps {
  onScheduleCall: () => void;
}

const countries = [
  {
    name: 'Antigua and Barbuda',
    image: 'https://images.unsplash.com/photo-1580237541049-2d715a09486e?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Antigua and Barbuda clear turquoise waters and white sand beach',
    tag: 'Great for families',
    options: [
      { label: 'National Development Fund', value: 'from $100,000' },
      { label: 'Real estate investment', value: 'from $200,000' },
      { label: 'Residency requirement', value: '5 days within 5 years' },
    ],
    note: 'One of the most family-friendly programmes. Dependants up to age 30 can be included, and parents over 58 are eligible too.',
  },
  {
    name: 'St. Kitts and Nevis',
    image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'St Kitts and Nevis tropical coastline with lush green hills',
    tag: 'Oldest CBI programme',
    options: [
      { label: 'Sustainable Growth Fund', value: 'from $150,000' },
      { label: 'Real estate investment', value: 'from $200,000' },
      { label: 'Residency requirement', value: 'None' },
    ],
    note: "The world's first citizenship by investment programme, launched in 1984. That history matters. St. Kitts passports are among the most respected in this category.",
  },
  {
    name: 'Dominica',
    image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Dominica lush rainforest and volcanic island coastline',
    tag: 'Most affordable entry',
    options: [
      { label: 'Economic Diversification Fund', value: 'from $100,000' },
      { label: 'Real estate investment', value: 'from $200,000' },
      { label: 'Processing time', value: 'Around 3 to 4 months' },
    ],
    note: 'Dominica consistently ranks as one of the most cost-effective programmes globally. No residency requirement and a straightforward process make it a practical starting point.',
  },
  {
    name: 'Saint Lucia',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Saint Lucia Piton mountains rising from the Caribbean sea',
    tag: 'Multiple investment routes',
    options: [
      { label: 'National Economic Fund', value: 'from $100,000' },
      { label: 'Real estate investment', value: 'from $300,000' },
      { label: 'Government bonds', value: 'from $500,000' },
    ],
    note: 'Saint Lucia offers more investment pathways than most programmes, including a government bond option that preserves capital rather than being a straight donation.',
  },
  {
    name: 'Grenada',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Grenada Caribbean tropical beach with clear water and palm trees',
    tag: 'E-2 Treaty access to the US',
    options: [
      { label: 'National Transformation Fund', value: 'from $150,000' },
      { label: 'Real estate investment', value: 'from $350,000' },
      { label: 'Processing time', value: '4 to 6 months' },
    ],
    note: 'Grenada is the only Caribbean CBI country with an E-2 Treaty with the United States. Grenadian citizens can apply for a US investor visa. For clients with US business interests, this changes the calculation entirely.',
  },
];

const benefits = [
  {
    title: 'Visa-free travel to 140 plus countries',
    body: 'Caribbean passports open doors to the Schengen Area, the UK, Singapore, and Hong Kong among others. For many clients, that access is the primary driver.',
  },
  {
    title: 'Favourable tax environments',
    body: 'Most Caribbean CBI countries have no capital gains tax, no inheritance tax, and no estate tax. Combined with no residency requirement, this can be a meaningful planning tool.',
  },
  {
    title: 'Your whole family included',
    body: 'Spouses, dependent children, and in many cases parents and grandparents can be included in a single application. You are not just getting a passport, you are getting options for your family.',
  },
  {
    title: 'Fast processing, no relocation needed',
    body: 'Most programmes process in 3 to 6 months. You do not need to live there, visit regularly, or change your day-to-day life in any way.',
  },
  {
    title: 'A real Plan B',
    body: 'A second citizenship is not about distrust in your home country. It is about having options. Many of our clients simply want the security of knowing there is another door open.',
  },
  {
    title: 'Business and banking flexibility',
    body: 'A second passport can simplify international business, improve access to global banking, and in some cases open markets that are otherwise restricted.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Understand what you want the passport to do',
    body: 'Travel access, tax planning, US E-2 visa eligibility, family inclusion, or simply having a backup option. Your goal shapes which programme we recommend.',
  },
  {
    num: '02',
    title: 'Match the right programme to your situation',
    body: 'We look at your investment budget, family structure, background, and timeline and give you a straight recommendation, not a menu of options to figure out yourself.',
  },
  {
    num: '03',
    title: 'Manage the process end to end',
    body: 'We work with licensed agents and government-approved intermediaries in each jurisdiction. You stay informed throughout without having to chase paperwork yourself.',
  },
];

const CONTAINER = "w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10";

export default function CaribbeanCBI({ onScheduleCall }: CaribbeanCBIProps) {
  const caribbeanArticles = blogPosts
    .filter(p => p.category === 'Citizenship')
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative min-h-[580px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=1920&q=80"
            alt="Caribbean island turquoise waters aerial view"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/10" />
        </div>

        <div className={`${CONTAINER} relative z-10 py-24`}>
          <div className="max-w-3xl">
            <p className="text-[11px] font-black uppercase tracking-[0.25em] text-[#4ade80] mb-5"
              style={{ fontFamily: "'Inter', sans-serif" }}>
              Caribbean Citizenship by Investment
            </p>
            <h1 className="text-[36px] sm:text-[48px] lg:text-[58px] font-black text-white leading-[1.08] tracking-tight mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              A second passport is not just for the ultra-wealthy anymore
            </h1>
            <p className="text-[17px] text-white/80 mb-10 max-w-2xl leading-relaxed"
              style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              Five Caribbean nations offer legitimate, government-run citizenship by investment programmes. The right one depends on your goals, your family situation, and what you actually want the passport to do for you.
            </p>
            <button
              onClick={onScheduleCall}
              className="inline-flex items-center gap-2 bg-[#1B7A4E] text-white px-8 py-4 font-black uppercase tracking-widest text-[12px] hover:bg-[#156B3F] transition-all duration-200 shadow-lg hover:scale-105"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Talk through your options
            </button>
          </div>
        </div>
      </section>

      {/* FIVE PROGRAMMES */}
      <section className="py-20 bg-gray-50">
        <div className={CONTAINER}>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1B7A4E] mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}>
            The programmes
          </p>
          <h2 className="text-[30px] sm:text-[38px] font-black text-gray-900 mb-3 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Five Caribbean CBI programmes
          </h2>
          <p className="text-gray-500 text-[16px] mb-12 max-w-2xl"
            style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
            Each programme has different investment thresholds, processing times, and strategic advantages. Here is what you need to know about each one.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map(country => (
              <div key={country.name}
                className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ borderTop: '3px solid #1B7A4E' }}>
                <div className="h-48 overflow-hidden bg-gray-100">
                  <img
                    src={country.image}
                    alt={country.imageAlt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-[19px] font-black text-gray-900 mb-1"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {country.name}
                  </h3>
                  <p className="text-[11px] font-black uppercase tracking-widest text-[#1B7A4E] mb-4"
                    style={{ fontFamily: "'Inter', sans-serif" }}>
                    {country.tag}
                  </p>
                  <div className="space-y-2.5 mb-5 border-t border-gray-100 pt-4">
                    {country.options.map(opt => (
                      <div key={opt.label} className="flex justify-between items-start gap-2">
                        <span className="text-[13px] text-gray-500"
                          style={{ fontFamily: "'Inter', sans-serif" }}>
                          {opt.label}
                        </span>
                        <span className="text-[13px] font-black text-gray-900 text-right flex-shrink-0"
                          style={{ fontFamily: "'Inter', sans-serif" }}>
                          {opt.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[13px] text-gray-600 leading-relaxed border-t border-gray-100 pt-4"
                    style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                    {country.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-white">
        <div className={CONTAINER}>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1B7A4E] mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}>
            What you get
          </p>
          <h2 className="text-[30px] sm:text-[38px] font-black text-gray-900 mb-3 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            What Caribbean citizenship actually gives you
          </h2>
          <p className="text-gray-500 text-[16px] mb-12 max-w-2xl"
            style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
            Beyond the brochure. The practical advantages our clients care about most.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={b.title}
                className="p-6 border border-gray-200 bg-white"
                style={{ borderTop: '3px solid #1B7A4E' }}>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}>
                  0{i + 1}
                </p>
                <h3 className="text-[17px] font-black text-gray-900 mb-3"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {b.title}
                </h3>
                <p className="text-gray-600 text-[14px] leading-relaxed"
                  style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-20 bg-gray-900 text-white">
        <div className={CONTAINER}>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4ade80] mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}>
            How we work
          </p>
          <h2 className="text-[30px] sm:text-[38px] font-black text-white mb-3 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            How we work with clients on Caribbean CBI
          </h2>
          <p className="text-gray-400 text-[16px] mb-12 max-w-2xl"
            style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
            Most clients come in knowing Caribbean CBI exists but not knowing which programme is right for them. We sort that out quickly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {steps.map(step => (
              <div key={step.num}
                className="border border-white/10 p-8"
                style={{ borderTop: '3px solid #1B7A4E' }}>
                <p className="text-[11px] font-black text-[#4ade80] mb-4 uppercase tracking-widest"
                  style={{ fontFamily: "'Inter', sans-serif" }}>
                  {step.num}
                </p>
                <h3 className="text-[19px] font-black text-white mb-3"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-[14px]"
                  style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      {caribbeanArticles.length > 0 && (
        <section className="py-20 bg-white" style={{ borderTop: '3px solid #1B7A4E' }}>
          <div className={CONTAINER}>
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-[#1B7A4E]" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1B7A4E]"
                    style={{ fontFamily: "'Inter', sans-serif" }}>
                    From the Brief
                  </p>
                  <h2 className="text-[24px] font-black text-gray-900"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    Latest on Caribbean CBI
                  </h2>
                </div>
              </div>
              <a href="/blog"
                className="text-[11px] font-black uppercase tracking-widest text-[#1B7A4E] hover:text-[#156B3F] transition-colors hidden sm:block"
                style={{ fontFamily: "'Inter', sans-serif" }}>
                All Articles
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {caribbeanArticles.map(post => (
                <a key={post.id}
                  href={`/blog/${post.slug}`}
                  onClick={e => { e.preventDefault(); window.location.assign(`/blog/${post.slug}`); }}
                  className="group border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ borderTop: '3px solid transparent', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.borderTopColor = '#1B7A4E')}
                  onMouseLeave={e => (e.currentTarget.style.borderTopColor = 'transparent')}>
                  {post.image && (
                    <div className="h-40 overflow-hidden bg-gray-100">
                      <img src={post.image} alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy" />
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="font-black text-gray-900 mb-2 line-clamp-2 group-hover:text-[#1B7A4E] transition-colors leading-tight text-[15px]"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                      {post.title}
                    </h3>
                    <p className="text-[11px] text-gray-400"
                      style={{ fontFamily: "'Inter', sans-serif" }}>
                      {post.publishDate} · {post.readTime}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BOTTOM CTA */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className={CONTAINER}>
          <div className="max-w-2xl">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1B7A4E] mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}>
              Ready to start
            </p>
            <h2 className="text-[30px] sm:text-[38px] font-black text-gray-900 mb-5 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Not sure which programme fits your situation?
            </h2>
            <p className="text-gray-600 text-[16px] mb-8 leading-relaxed"
              style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              We look at your budget, family structure, and goals and give you a straight answer on which programme makes sense. No pressure, no upselling.
            </p>
            <button
              onClick={onScheduleCall}
              className="inline-flex items-center gap-2 bg-[#1B7A4E] text-white px-8 py-4 font-black uppercase tracking-widest text-[12px] hover:bg-[#156B3F] transition-all duration-200 shadow-lg hover:scale-105"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Book a free call
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
