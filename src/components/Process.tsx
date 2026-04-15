import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

// ─── LATEST ARTICLES FEED ─────────────────────────────────────────────────────
function LatestArticles() {
  // Pull 3 most recent articles sorted by date
  const recent = [...blogPosts]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, 3);

  const categoryColor: Record<string, string> = {
    Entrepreneurs: '#1B7A4E',
    Citizenship: '#0f3460',
    Expats: '#7c3aed',
  };

  return (
    <section className="py-16 bg-gray-50" style={{ borderTop: '3px solid #1B7A4E' }}>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Section header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-[#1B7A4E]" />
            <div>
              <p
                className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1B7A4E]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Latest Intelligence
              </p>
              <h2
                className="text-[26px] sm:text-[32px] font-black text-gray-900 leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                From the Dera Mobility Brief
              </h2>
            </div>
          </div>
          <a
            href="/blog"
            className="hidden sm:inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#1B7A4E] hover:text-[#156B3F] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            All Articles <ArrowRight size={14} />
          </a>
        </div>

        {/* Article cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recent.map((post, i) => (
            <a
              key={post.id}
              href={`/blog/${post.slug}`}
              onClick={e => { e.preventDefault(); window.location.assign(`/blog/${post.slug}`); }}
              className="group bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ borderTop: i === 0 ? '3px solid #1B7A4E' : '3px solid transparent' }}
              onMouseEnter={e => (e.currentTarget.style.borderTopColor = '#1B7A4E')}
              onMouseLeave={e => (e.currentTarget.style.borderTopColor = i === 0 ? '#1B7A4E' : 'transparent')}
            >
              {post.image && (
                <div className="relative h-44 overflow-hidden bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {i === 0 && (
                    <div className="absolute top-3 left-3">
                      <span
                        className="px-2 py-0.5 text-white text-[10px] font-black uppercase tracking-widest"
                        style={{ background: '#1B7A4E', fontFamily: "'Inter', sans-serif" }}
                      >
                        Latest
                      </span>
                    </div>
                  )}
                </div>
              )}
              <div className="p-5">
                <span
                  className="inline-block px-2 py-0.5 text-white text-[10px] font-black uppercase tracking-widest mb-3"
                  style={{ background: categoryColor[post.category] ?? '#1B7A4E', fontFamily: "'Inter', sans-serif" }}
                >
                  {post.category}
                </span>
                <h3
                  className="font-black text-gray-900 mb-2 line-clamp-2 group-hover:text-[#1B7A4E] transition-colors leading-tight"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '17px' }}
                >
                  {post.title}
                </h3>
                <p
                  className="text-[13px] text-gray-600 line-clamp-2 mb-3"
                  style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}
                >
                  {post.excerpt}
                </p>
                <p className="text-[11px] text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {post.publishDate} · {post.readTime}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile see all link */}
        <div className="mt-8 text-center sm:hidden">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#1B7A4E]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            All Articles <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── THREE ROUTES ─────────────────────────────────────────────────────────────
export default function Process() {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-14">
            <p
              className="text-[10px] font-black tracking-[0.2em] uppercase text-[#1B7A4E] mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Choose your path
            </p>
            <h2
              className="text-[32px] sm:text-[42px] font-black text-gray-900 mb-5 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Three Clear Routes to Greater Mobility
            </h2>
            <p
              className="text-[17px] text-gray-600 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}
            >
              Whether you are planning a move to Portugal, exploring second citizenship, or looking for a route designed specifically for Americans, choose the path that fits your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Portugal */}
            <a
              href="/portugal-europe-residency"
              className="group block border border-gray-200 bg-white p-8 sm:p-10 transition-all duration-300 hover:border-[#1B7A4E]/40 hover:shadow-lg hover:-translate-y-1"
              style={{ borderTop: '3px solid #1B7A4E' }}
            >
              <div className="flex items-start justify-between mb-8">
                <div className="text-4xl">🇵🇹</div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1B7A4E] group-hover:translate-x-1 transition-all duration-300" />
              </div>
              <h3
                className="text-[22px] font-black text-gray-900 mb-3"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Move to Portugal
              </h3>
              <p
                className="text-gray-600 leading-relaxed mb-6 text-[15px]"
                style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}
              >
                For individuals and families exploring Portugal residency through structured, legally sound pathways.
              </p>
              <div className="space-y-2 mb-8">
                {['D7, D8, and D2 routes', 'Relocation and planning', 'Path to EU citizenship'].map(item => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1B7A4E] flex-shrink-0" />
                    <p className="text-[14px] text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>{item}</p>
                  </div>
                ))}
              </div>
              <div
                className="inline-flex items-center gap-2 text-[#1B7A4E] font-black text-[12px] uppercase tracking-widest"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Explore Portugal <ArrowRight className="w-4 h-4" />
              </div>
            </a>

            {/* Caribbean */}
            <a
              href="/caribbean-citizenship-by-investment"
              className="group block border border-gray-200 bg-white p-8 sm:p-10 transition-all duration-300 hover:border-[#0f3460]/40 hover:shadow-lg hover:-translate-y-1"
              style={{ borderTop: '3px solid #0f3460' }}
            >
              <div className="flex items-start justify-between mb-8">
                <div className="text-4xl">🏝️</div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#0f3460] group-hover:translate-x-1 transition-all duration-300" />
              </div>
              <h3
                className="text-[22px] font-black text-gray-900 mb-3"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Obtain a Second Citizenship
              </h3>
              <p
                className="text-gray-600 leading-relaxed mb-6 text-[15px]"
                style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}
              >
                For investors seeking Caribbean citizenship by investment — a real second passport with global visa-free access.
              </p>
              <div className="space-y-2 mb-8">
                {['Compare programmes', 'Investment thresholds', 'Plan B strategy'].map(item => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0f3460] flex-shrink-0" />
                    <p className="text-[14px] text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>{item}</p>
                  </div>
                ))}
              </div>
              <div
                className="inline-flex items-center gap-2 text-[#0f3460] font-black text-[12px] uppercase tracking-widest"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Explore Caribbean <ArrowRight className="w-4 h-4" />
              </div>
            </a>

            {/* USA */}
            <a
              href="/americans-moving-to-portugal"
              className="group block border border-gray-200 bg-white p-8 sm:p-10 transition-all duration-300 hover:border-[#B45309]/40 hover:shadow-lg hover:-translate-y-1"
              style={{ borderTop: '3px solid #B45309' }}
            >
              <div className="flex items-start justify-between mb-8">
                <div className="text-4xl">🇺🇸</div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#B45309] group-hover:translate-x-1 transition-all duration-300" />
              </div>
              <p
                className="text-[10px] font-black tracking-[0.2em] uppercase text-[#B45309] mb-3"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Especially for Americans
              </p>
              <h3
                className="text-[22px] font-black text-gray-900 mb-3"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Portugal for Americans
              </h3>
              <p
                className="text-gray-600 leading-relaxed mb-6 text-[15px]"
                style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}
              >
                A focused route for US citizens who want clarity before choosing the wrong visa or making an expensive mistake.
              </p>
              <div className="space-y-2 mb-8">
                {['D7 vs D8 clarity', 'US-specific tax factors', 'Avoid common mistakes'].map(item => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B45309] flex-shrink-0" />
                    <p className="text-[14px] text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>{item}</p>
                  </div>
                ))}
              </div>
              <div
                className="inline-flex items-center gap-2 text-[#B45309] font-black text-[12px] uppercase tracking-widest"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Explore US pathway <ArrowRight className="w-4 h-4" />
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* Latest articles feed */}
      <LatestArticles />
    </>
  );
}
