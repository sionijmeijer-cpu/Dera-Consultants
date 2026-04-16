import { useState } from 'react';
import { blogPosts } from '../../data/blogPosts';

interface AmericansMovingToPortugalPageProps {
  onScheduleCall?: () => void;
}

const visaTypes = [
  {
    id: 'D7',
    title: 'D7 Visa',
    subtitle: 'Passive income and retirees',
    details: 'If your income comes from a pension, Social Security, rental property, dividends, or savings, the D7 is usually where Americans start. Portugal sets a minimum monthly income threshold, roughly EUR 820 per month for a single applicant, and you need to show you can sustain yourself without working locally. You do need to spend meaningful time in Portugal each year, so this is not a leave and forget visa. For US retirees specifically, coordinating Social Security with Portuguese tax residency needs early attention.',
  },
  {
    id: 'D8',
    title: 'D8 Visa',
    subtitle: 'Remote workers and freelancers',
    details: 'Built for people working remotely for companies or clients outside Portugal. If you are a freelancer, contractor, or remote employee earning in USD, this is the route most Americans explore first. Your income threshold, typically four times the Portuguese minimum wage, and your contract arrangement both need to hold up under consulate review. Not all remote employment structures are equal in the eyes of the consulate. We always review this carefully with US clients before they apply.',
  },
  {
    id: 'Golden',
    title: 'Golden Visa',
    subtitle: 'Investment route, residency without relocating',
    details: 'Suits Americans who want a path to Portuguese residency and eventual citizenship without relocating right away. The real estate route closed in most areas in 2023, so qualifying investments now focus on funds and specific economic contributions. You only need to spend 7 days per year in Portugal to maintain it, and after 5 years you can apply for citizenship. For Americans specifically, the PFIC rules around Portuguese investment funds can create US tax complications worth reviewing with an expat tax advisor before committing.',
  },
];

const reasons = [
  {
    title: 'Schengen access from day one',
    body: 'A Portuguese residence permit gives you the right to travel across 27 Schengen countries without a visa. For Americans who travel to Europe frequently for business or personal reasons, this changes the picture considerably.',
  },
  {
    title: 'Your dollar goes further',
    body: 'Groceries, restaurants, healthcare, and day-to-day living cost significantly less than in major US cities. Many of our American clients are genuinely surprised by how far their income stretches once they are here.',
  },
  {
    title: 'Healthcare without the complexity',
    body: 'Private health insurance in Portugal costs a fraction of US premiums and covers a high standard of care. This is one of the most common things Americans mention in the first year after making the move.',
  },
  {
    title: 'A realistic path to a second passport',
    body: 'After 5 years of legal residency, you can apply for Portuguese citizenship and one of the strongest passports in the world. Many Americans treat Portugal residency as step one of a longer plan rather than just a lifestyle move.',
  },
  {
    title: 'Established expat infrastructure',
    body: 'Lisbon, Porto, and the Algarve have well-developed international school networks, English-speaking professional communities, and services built around relocating families.',
  },
  {
    title: 'Quality of life that holds up long term',
    body: 'Safety, climate, walkability, food, and a slower pace. People who visit on holiday and people who have lived there for years tend to say the same thing. Portugal keeps people.',
  },
];

const mistakes = [
  {
    title: 'Missing the US tax dimension',
    body: 'Americans are taxed on worldwide income regardless of where they live. The IFICI regime in Portugal interacts with your US obligations in ways that need coordinating between a Portuguese and a US expat tax advisor. Most people find out about this too late.',
  },
  {
    title: 'Underestimating consulate wait times',
    body: 'US consulate appointments for Portuguese visas are booked out months in advance in New York, San Francisco, and Boston. Factor this into your timeline from the start, not after you have already committed to a move date.',
  },
  {
    title: 'Relying on Facebook groups and Reddit threads',
    body: 'Portugal immigration rules changed significantly in 2022, 2023, and 2024. These communities are full of well-meaning people sharing experiences that may no longer be accurate. Outdated advice is genuinely common and genuinely costly.',
  },
];

const CONTAINER = "w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10";

export default function AmericansMovingToPortugalPage({ onScheduleCall }: AmericansMovingToPortugalPageProps) {
  const [expandedVisa, setExpandedVisa] = useState<string | null>('D7');

  const handleScheduleCall = () => {
    if (onScheduleCall) {
      onScheduleCall();
    } else {
      window.dispatchEvent(new CustomEvent('openScheduleModal'));
    }
  };

  const americansArticles = blogPosts
    .filter(p => p.category === 'Expats')
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative min-h-[580px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?auto=format&fit=crop&w=1920&q=80"
            alt="Lisbon Portugal rooftop view with the Tagus river"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/10" />
        </div>

        <div className={`${CONTAINER} relative z-10 py-24`}>
          <div className="max-w-3xl">
            <p className="text-[11px] font-black uppercase tracking-[0.25em] text-[#B45309] mb-5"
              style={{ fontFamily: "'Inter', sans-serif" }}>
              For US Citizens
            </p>
            <h1 className="text-[36px] sm:text-[48px] lg:text-[58px] font-black text-white leading-[1.08] tracking-tight mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Moving to Portugal from the US starts with choosing the right route
            </h1>
            <p className="text-[17px] text-white/80 mb-10 max-w-2xl leading-relaxed"
              style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              Portugal is one of the best options for Americans who want a life in Europe. The hard part is understanding which visa fits your income, your family, and your timeline, and avoiding the mistakes that are specific to moving from the US.
            </p>
            <button
              onClick={handleScheduleCall}
              className="inline-flex items-center gap-2 bg-[#B45309] text-white px-8 py-4 font-black uppercase tracking-widest text-[12px] hover:bg-[#92400e] transition-all duration-200 shadow-lg hover:scale-105"
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
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#B45309] mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}>
            The routes
          </p>
          <h2 className="text-[30px] sm:text-[38px] font-black text-gray-900 mb-3 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            The three routes most Americans explore
          </h2>
          <p className="text-gray-500 mb-10 text-[16px] max-w-2xl"
            style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
            The right one depends on how you earn and what you want the move to look like in practice.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-0">
            {visaTypes.map(visa => (
              <div key={visa.id}
                className="bg-white border border-gray-200 overflow-hidden"
                style={{ borderTop: expandedVisa === visa.id ? '3px solid #B45309' : '3px solid #e5e7eb' }}>
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
                  <span className={`ml-4 flex-shrink-0 text-[#B45309] text-sm transition-transform duration-200 font-black ${expandedVisa === visa.id ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>

                {expandedVisa === visa.id && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100 bg-[#B45309]/5">
                    <p className="text-gray-700 leading-relaxed text-[15px]"
                      style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                      {visa.details}
                    </p>
                    <button
                      onClick={handleScheduleCall}
                      className="mt-4 text-[11px] font-black uppercase tracking-widest text-[#B45309] hover:text-[#92400e]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Ask us about this route
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PORTUGAL FOR AMERICANS */}
      <section className="py-20 bg-white">
        <div className={CONTAINER}>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#B45309] mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}>
            Why Portugal
          </p>
          <h2 className="text-[30px] sm:text-[38px] font-black text-gray-900 mb-3 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Why Americans specifically choose Portugal
          </h2>
          <p className="text-gray-500 text-[16px] mb-12 max-w-2xl"
            style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
            Not just lifestyle. The practical reasons our US clients mention most.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <div key={r.title}
                className="p-6 border border-gray-200 bg-white"
                style={{ borderTop: '3px solid #B45309' }}>
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

      {/* WHERE AMERICANS GO WRONG */}
      <section className="py-20 bg-gray-900 text-white">
        <div className={CONTAINER}>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#fbbf24] mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}>
            Common mistakes
          </p>
          <h2 className="text-[30px] sm:text-[38px] font-black text-white mb-3 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Where Americans specifically run into trouble
          </h2>
          <p className="text-gray-400 text-[16px] mb-12 max-w-2xl"
            style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
            These are patterns we see regularly with US clients. None of them are unavoidable with the right preparation.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {mistakes.map(m => (
              <div key={m.title}
                className="border border-white/10 p-8"
                style={{ borderTop: '3px solid #B45309' }}>
                <h3 className="text-[19px] font-black text-white mb-3"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {m.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-[14px]"
                  style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                  {m.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      {americansArticles.length > 0 && (
        <section className="py-20 bg-white" style={{ borderTop: '3px solid #B45309' }}>
          <div className={CONTAINER}>
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-[#B45309]" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#B45309]"
                    style={{ fontFamily: "'Inter', sans-serif" }}>
                    From the Brief
                  </p>
                  <h2 className="text-[24px] font-black text-gray-900"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    Latest for Expats
                  </h2>
                </div>
              </div>
              <a href="/blog"
                className="text-[11px] font-black uppercase tracking-widest text-[#B45309] hover:text-[#92400e] transition-colors hidden sm:block"
                style={{ fontFamily: "'Inter', sans-serif" }}>
                All Articles
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {americansArticles.map(post => (
                <a key={post.id}
                  href={`/blog/${post.slug}`}
                  onClick={e => { e.preventDefault(); window.location.assign(`/blog/${post.slug}`); }}
                  className="group border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ borderTop: '3px solid transparent', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.borderTopColor = '#B45309')}
                  onMouseLeave={e => (e.currentTarget.style.borderTopColor = 'transparent')}>
                  {post.image && (
                    <div className="h-40 overflow-hidden bg-gray-100">
                      <img src={post.image} alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy" />
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="font-black text-gray-900 mb-2 line-clamp-2 group-hover:text-[#B45309] transition-colors leading-tight text-[15px]"
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
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#B45309] mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}>
              Ready to start
            </p>
            <h2 className="text-[30px] sm:text-[38px] font-black text-gray-900 mb-5 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Not sure where to start with your move?
            </h2>
            <p className="text-gray-600 text-[16px] mb-8 leading-relaxed"
              style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              We work specifically with Americans navigating the Portuguese visa process. We know the US-specific complications and we tell you plainly what applies to your situation.
            </p>
            <button
              onClick={handleScheduleCall}
              className="inline-flex items-center gap-2 bg-[#B45309] text-white px-8 py-4 font-black uppercase tracking-widest text-[12px] hover:bg-[#92400e] transition-all duration-200 shadow-lg hover:scale-105"
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
