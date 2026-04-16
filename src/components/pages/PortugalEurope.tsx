import { useState } from 'react';
import PortugalEligibilityCalculator from '../PortugalEligibilityCalculator';
import { blogPosts } from '../../data/blogPosts';

interface PortugalEuropeProps {
  onScheduleCall: () => void;
}

const visaTypes = [
  {
    id: 'D7',
    title: 'D7 Visa',
    subtitle: 'Passive income and retirees',
    details: 'If you live off a pension, rental income, dividends, or savings, the D7 is usually the most straightforward path. Portugal requires you to show a minimum monthly income, roughly EUR 820 for a single applicant, and you need to demonstrate you can sustain yourself without working locally. It suits retirees and families who want a clean, stable move. One thing people often miss: you do need to spend meaningful time in Portugal each year. This is not a leave and forget visa.',
  },
  {
    id: 'D8',
    title: 'D8 Visa',
    subtitle: 'Digital nomads and remote workers',
    details: 'Launched in 2022, the D8 was built for people earning remotely. Freelancers, contractors, remote employees. You need to show income from outside Portugal, typically at least four times the Portuguese minimum wage, and you keep doing exactly what you do now, just from Lisbon or the Algarve instead. The key question we always ask: is your income truly remote in the eyes of the consulate? Some situations are less straightforward than they appear.',
  },
  {
    id: 'D2',
    title: 'D2 Visa',
    subtitle: 'Entrepreneurs and business founders',
    details: 'The D2 is for people who want to start or grow a business in Portugal. Unlike the D7 or D8, you are not just living there, you are creating economic activity. This means a credible business plan, demonstrated capacity to execute, and in some cases a minimum investment or job creation component. The approval process is more subjective than other visas, which is honestly where good advisory makes a real difference.',
  },
  {
    id: 'Golden',
    title: 'Golden Visa',
    subtitle: 'Investment route, residency without relocating',
    details: 'The Golden Visa changed significantly in 2023. Real estate is no longer a qualifying investment in most areas. The current routes focus on fund investments, research donations, and business creation. The appeal remains: you only need to spend 7 days per year in Portugal to maintain residency, and after 5 years you can apply for citizenship. It is the route for people who want optionality and a Portuguese passport eventually, without uprooting their life right now.',
  },
];

const reasons = [
  {
    title: 'Schengen access',
    body: 'Portuguese residency gives you freedom of movement across 27 Schengen countries. For non-EU citizens, this alone changes how you travel and work across Europe.',
  },
  {
    title: 'Cost of living',
    body: 'Compared to Western Europe, Portugal is still genuinely affordable. Lisbon, Porto, and the Algarve attract people who have been everywhere and still choose to stay.',
  },
  {
    title: 'Tax planning',
    body: "Portugal's IFICI regime has attracted thousands of high-earning professionals and retirees. Tax planning is personal, but the options here are real and worth understanding properly.",
  },
  {
    title: 'Family residency',
    body: 'Most visa routes allow you to include a spouse and dependent children. Family reunification rules in Portugal are relatively straightforward compared to many EU countries.',
  },
  {
    title: 'Path to citizenship',
    body: 'After 5 years of legal residency, you can apply for Portuguese citizenship. One of the strongest passports in the world with visa-free access to 190 plus countries.',
  },
  {
    title: 'Healthcare',
    body: 'The public SNS system is genuinely good, and private healthcare costs a fraction of what you would pay in the US or UK. Most expats use a combination of both.',
  },
];

const mistakes = [
  {
    title: 'Picking the visa you like, not the one that fits',
    body: 'The D8 sounds appealing to almost everyone. But if your income structure does not clearly qualify, you risk a rejection that complicates future applications.',
  },
  {
    title: 'Underestimating the timeline',
    body: 'Consulate appointments can be booked out 3 to 6 months in advance. Add document apostilles, translations, and AIMA processing and you are often looking at 12 to 18 months from start to approval.',
  },
  {
    title: 'Trusting outdated advice',
    body: 'Portuguese immigration rules changed significantly in 2022, 2023, and 2024. What worked for someone three years ago, including on the Golden Visa, may no longer apply.',
  },
];

const CONTAINER = "w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10";

export default function PortugalEurope({ onScheduleCall }: PortugalEuropeProps) {
  const [expandedVisa, setExpandedVisa] = useState<string | null>('D7');

  const portugalArticles = blogPosts
    .filter(p => p.tags?.some(t => t === 'Portugal') || p.category === 'Expats')
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative min-h-[580px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?auto=format&fit=crop&w=1920&q=80"
            alt="Lisbon rooftops with the Tagus river"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/10" />
        </div>

        <div className={`${CONTAINER} relative z-10 py-24`}>
          <div className="max-w-3xl">
            <p className="text-[11px] font-black uppercase tracking-[0.25em] text-[#4ade80] mb-5"
              style={{ fontFamily: "'Inter', sans-serif" }}>
              Portugal Residency
            </p>
            <h1 className="text-[36px] sm:text-[48px] lg:text-[58px] font-black text-white leading-[1.08] tracking-tight mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              D7, D8, D2, or Golden Visa. Which one fits your situation?
            </h1>
            <p className="text-[17px] text-white/80 mb-10 max-w-2xl leading-relaxed"
              style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              There is no shortage of information about moving to Portugal. What is harder to find is someone who will tell you honestly which route makes sense for your income, your timeline, and your family.
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

      {/* VISA ROUTES */}
      <section className="py-20 bg-gray-50">
        <div className={CONTAINER}>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1B7A4E] mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}>
            The routes
          </p>
          <h2 className="text-[30px] sm:text-[38px] font-black text-gray-900 mb-3 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Four main residency routes
          </h2>
          <p className="text-gray-500 mb-10 text-[16px] max-w-2xl"
            style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
            Click each one to see what it actually involves. Not just the headline, but the details that matter.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-16">
            {visaTypes.map(visa => (
              <div key={visa.id}
                className="bg-white border border-gray-200 overflow-hidden"
                style={{ borderTop: expandedVisa === visa.id ? '3px solid #1B7A4E' : '3px solid #e5e7eb' }}>
                <button
                  onClick={() => setExpandedVisa(expandedVisa === visa.id ? null : visa.id)}
                  className="w-full px-6 py-6 flex items-center justify-between text-left"
                >
                  <div>
                    <h3 className="text-[19px] font-black text-gray-900"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                      {visa.title}
                    </h3>
                    <p className="text-[12px] text-gray-500 mt-1"
                      style={{ fontFamily: "'Inter', sans-serif" }}>
                      {visa.subtitle}
                    </p>
                  </div>
                  <span className={`ml-4 flex-shrink-0 text-[#1B7A4E] text-sm transition-transform duration-200 font-black ${expandedVisa === visa.id ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>

                {expandedVisa === visa.id && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100 bg-[#1B7A4E]/5">
                    <p className="text-gray-700 leading-relaxed text-[15px]"
                      style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                      {visa.details}
                    </p>
                    <button
                      onClick={onScheduleCall}
                      className="mt-4 text-[11px] font-black uppercase tracking-widest text-[#1B7A4E] hover:text-[#156B3F]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Ask us about this route
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <PortugalEligibilityCalculator onScheduleCall={onScheduleCall} />
        </div>
      </section>

      {/* WHY PORTUGAL */}
      <section className="py-20 bg-white">
        <div className={CONTAINER}>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1B7A4E] mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}>
            Why Portugal
          </p>
          <h2 className="text-[30px] sm:text-[38px] font-black text-gray-900 mb-3 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            What actually draws people here
          </h2>
          <p className="text-gray-500 text-[16px] mb-12 max-w-2xl"
            style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
            Beyond the lifestyle content. The practical reasons our clients choose Portugal over other options.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <div key={r.title}
                className="p-6 border border-gray-200 bg-white"
                style={{ borderTop: '3px solid #1B7A4E' }}>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}>
                  0{i + 1}
                </p>
                <h3 className="text-[17px] font-black text-gray-900 mb-3"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {r.title}
                </h3>
                <p className="text-gray-600 text-[14px] leading-relaxed"
                  style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT GOES WRONG */}
      <section className="py-20 bg-gray-900 text-white">
        <div className={CONTAINER}>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4ade80] mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}>
            Common mistakes
          </p>
          <h2 className="text-[30px] sm:text-[38px] font-black text-white mb-3 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Where the process tends to go wrong
          </h2>
          <p className="text-gray-400 text-[16px] mb-12 max-w-2xl"
            style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
            These are not rare edge cases. We see each of these regularly.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {mistakes.map(m => (
              <div key={m.title}
                className="border border-white/10 p-6"
                style={{ borderTop: '3px solid #1B7A4E' }}>
                <h3 className="text-[17px] font-black text-white mb-3"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {m.title}
                </h3>
                <p className="text-gray-400 text-[14px] leading-relaxed"
                  style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                  {m.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      {portugalArticles.length > 0 && (
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
                    Latest on Portugal
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
              {portugalArticles.map(post => (
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
              Not sure which route is right for you?
            </h2>
            <p className="text-gray-600 text-[16px] mb-8 leading-relaxed"
              style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              We look at your income, timeline, and family situation and tell you plainly what makes sense. No upselling, no generic advice. Just a clear view of your options.
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
