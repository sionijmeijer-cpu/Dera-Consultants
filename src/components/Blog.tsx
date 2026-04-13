import { Button } from './ui/button';
import emailjs from '@emailjs/browser';
import { Input } from './ui/input';
import { useEffect, useState, FormEvent } from 'react';
import { blogPosts } from '../data/blogPosts';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_zuw0jdg';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_kdvvybl';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'iwJKHyLFnEj-_NXor';

const entrepreneurArticles = blogPosts.filter(p => p.category === 'Entrepreneurs');
const citizenshipArticles  = blogPosts.filter(p => p.category === 'Citizenship');
const expatArticles        = blogPosts.filter(p => p.category === 'Expats');

function goTo(slug: string) {
  window.location.pathname = `/blog/${slug}`;
}

function getInitials(name: string) {
  return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
}

// ─── CATEGORY PILL ───────────────────────────────────────────────────────────
function CategoryPill({ label }: { label: string }) {
  const colors: Record<string, string> = {
    Entrepreneurs: '#1B7A4E',
    Citizenship:   '#0f3460',
    Expats:        '#7c3aed',
  };
  return (
    <span
      className="inline-block px-2.5 py-0.5 text-white text-[10px] font-black uppercase tracking-widest"
      style={{ background: colors[label] ?? '#1B7A4E', fontFamily: "'Inter', sans-serif" }}
    >
      {label}
    </span>
  );
}

// ─── SECTION RULE ────────────────────────────────────────────────────────────
function SectionRule({ label, color = '#1B7A4E' }: { label: string; color?: string }) {
  return (
    <div
      className="w-full flex items-center gap-3 px-4 sm:px-8 lg:px-14 py-4"
      style={{ borderBottom: '1px solid #e5e7eb', borderTop: '1px solid #e5e7eb' }}
    >
      <div className="w-[4px] h-6 flex-shrink-0" style={{ background: color }} />
      <span
        className="text-[11px] font-black uppercase tracking-[0.22em] text-gray-900"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {label}
      </span>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  );
}

// ─── LEAD STORY ──────────────────────────────────────────────────────────────
function LeadStory({ post }: { post: typeof blogPosts[0] }) {
  return (
    <div
      className="w-full grid grid-cols-1 lg:grid-cols-2 cursor-pointer group"
      style={{ borderBottom: '3px solid #1B7A4E' }}
      onClick={() => goTo(post.slug)}
    >
      {/* Image */}
      <div className="relative h-[260px] sm:h-[380px] lg:h-[520px] overflow-hidden bg-gray-100">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Text */}
      <div
        className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-12 lg:py-20 bg-white"
        style={{ borderLeft: '1px solid #e5e7eb' }}
      >
        <div className="flex items-center gap-3 mb-5">
          <CategoryPill label={post.category} />
          <span
            className="text-[10px] text-gray-400 uppercase tracking-widest font-bold"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Editor's Pick
          </span>
        </div>

        <h2
          className="text-[28px] sm:text-[36px] lg:text-[44px] font-black text-gray-900 leading-[1.08] mb-6 group-hover:text-[#1B7A4E] transition-colors duration-300"
          style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}
        >
          {post.title}
        </h2>

        <p
          className="text-[17px] text-gray-600 leading-[1.8] mb-8 line-clamp-4"
          style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}
        >
          {post.excerpt}
        </p>

        <div className="flex items-center gap-3 mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
          <div className="w-8 h-8 rounded-full bg-[#1B7A4E] flex items-center justify-center text-white font-black text-[11px]">
            {getInitials(post.author)}
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900">{post.author}</p>
            <p className="text-xs text-gray-400">{post.publishDate} · {post.readTime}</p>
          </div>
        </div>

        <div>
          <span
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-[11px] font-black uppercase tracking-widest group-hover:bg-[#1B7A4E] transition-colors duration-300"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Read Full Article
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── LARGE CARD ──────────────────────────────────────────────────────────────
function LargeCard({ post }: { post: typeof blogPosts[0] }) {
  return (
    <div className="group cursor-pointer flex flex-col h-full" onClick={() => goTo(post.slug)}>
      <div className="relative overflow-hidden bg-gray-100" style={{ height: '240px' }}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
        />
      </div>
      <div className="pt-5 pb-6 pr-4 flex flex-col flex-1">
        <CategoryPill label={post.category} />
        <h3
          className="mt-3 mb-3 text-[21px] font-black text-gray-900 leading-[1.15] group-hover:text-[#1B7A4E] transition-colors line-clamp-3"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {post.title}
        </h3>
        <p
          className="text-[15px] text-gray-600 leading-[1.7] line-clamp-3 mb-4 flex-1"
          style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}
        >
          {post.excerpt}
        </p>
        <p className="text-[11px] text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
          {post.author} · {post.publishDate} · {post.readTime}
        </p>
      </div>
    </div>
  );
}

// ─── SMALL STACKED CARD ──────────────────────────────────────────────────────
function SmallCard({ post, last = false }: { post: typeof blogPosts[0]; last?: boolean }) {
  return (
    <div
      className="group cursor-pointer flex gap-4 py-4"
      style={{ borderBottom: last ? 'none' : '1px solid #e5e7eb' }}
      onClick={() => goTo(post.slug)}
    >
      <div className="w-[88px] h-[72px] flex-shrink-0 overflow-hidden bg-gray-100">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-400"
        />
      </div>
      <div className="flex flex-col justify-center flex-1 min-w-0">
        <CategoryPill label={post.category} />
        <h4
          className="mt-1.5 text-[14px] font-black text-gray-900 leading-[1.25] group-hover:text-[#1B7A4E] transition-colors line-clamp-2"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {post.title}
        </h4>
        <p className="mt-1 text-[11px] text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
          {post.publishDate} · {post.readTime}
        </p>
      </div>
    </div>
  );
}

// ─── NUMBERED ITEM ───────────────────────────────────────────────────────────
function NumberedItem({ post, index }: { post: typeof blogPosts[0]; index: number }) {
  return (
    <div
      className="group cursor-pointer flex items-start gap-5 py-4"
      style={{ borderBottom: '1px solid #e5e7eb' }}
      onClick={() => goTo(post.slug)}
    >
      <span
        className="flex-shrink-0 text-[30px] font-black leading-none select-none text-gray-200"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1 }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className="flex-1 min-w-0">
        <CategoryPill label={post.category} />
        <h4
          className="mt-1.5 text-[15px] font-black text-gray-900 leading-[1.3] group-hover:text-[#1B7A4E] transition-colors line-clamp-2"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {post.title}
        </h4>
        <p className="mt-1 text-[11px] text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
          {post.publishDate} · {post.readTime}
        </p>
      </div>
    </div>
  );
}

// ─── NEWSPAPER SECTION ────────────────────────────────────────────────────────
function NewspaperSection({
  sectionId, label, color, posts, flipped = false,
}: {
  sectionId: string; label: string; color: string;
  posts: typeof blogPosts; flipped?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const main  = posts[0];
  const stack = posts.slice(1, 4);
  const extra = posts.slice(4);
  if (!main) return null;

  return (
    <div id={sectionId} className="w-full" style={{ background: flipped ? '#fafaf8' : '#fff' }}>
      <SectionRule label={label} color={color} />

      <div className="w-full px-4 sm:px-8 lg:px-14 py-8">
        {/* Main 2+1 grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0" style={{ border: '1px solid #e5e7eb' }}>
          <div className="lg:col-span-2 p-6" style={{ borderRight: '1px solid #e5e7eb' }}>
            <LargeCard post={main} />
          </div>
          <div className="p-5">
            {stack.map((post, i) => (
              <SmallCard key={post.id} post={post} last={i === stack.length - 1} />
            ))}
          </div>
        </div>

        {/* Expanded extra articles */}
        {expanded && extra.length > 0 && (
          <div className="border-x border-b border-gray-200 px-6 pb-2">
            {extra.map((post, i) => (
              <NumberedItem key={post.id} post={post} index={i} />
            ))}
          </div>
        )}

        {/* Show more toggle */}
        {extra.length > 0 && (
          <div className="mt-6">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 px-5 py-2 border border-gray-300 text-[11px] font-black uppercase tracking-widest text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-all"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {expanded ? 'Show Less' : `${extra.length} More ${label}`}
              <svg
                className={`w-3 h-3 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── MAIN EXPORT ─────────────────────────────────────────────────────────────
export default function Blog() {
  const [email, setEmail]                       = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [error, setError]                       = useState('');
  const [isLoading, setIsLoading]               = useState(false);

  const leadPost = [...blogPosts].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  )[0];

  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY !== 'public_key_placeholder') emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) { setError('Please enter a valid email address'); return; }
    setIsLoading(true);
    setError('');
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name: 'Blog Subscriber', email, phone: 'N/A', country: 'N/A',
        service: 'Newsletter Subscription',
        message: `New subscriber from: Blog Listing Page\n\nPage URL: ${window.location.href}\n\nTimestamp: ${new Date().toLocaleString()}`,
      });
      setShowSuccessModal(true);
      setEmail('');
    } catch (err) {
      console.error(err);
      setError('Subscription failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">

      {/* SUCCESS MODAL */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowSuccessModal(false)}>
          <div className="bg-white shadow-2xl p-8 max-w-md w-full relative" style={{ borderTop: '4px solid #1B7A4E' }} onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowSuccessModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#1B7A4E]/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#1B7A4E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>You're Subscribed</h3>
              <p className="text-gray-600 mb-6" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>You'll receive our latest analysis on citizenship and global mobility.</p>
              <Button onClick={() => setShowSuccessModal(false)} className="w-full bg-[#1B7A4E] text-white hover:bg-[#156B3F] rounded-none font-black uppercase tracking-widest text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                Continue Reading
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* ── MASTHEAD ───────────────────────────────────────────────────── */}
      <header className="w-full border-b border-gray-200 bg-white">

        {/* Top bar */}
        <div className="w-full px-4 sm:px-8 lg:px-14 py-2 flex items-center justify-between" style={{ borderBottom: '1px solid #e5e7eb', fontFamily: "'Inter', sans-serif" }}>
          <span className="text-[11px] text-gray-400 font-semibold uppercase tracking-widest">
            {new Date().toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
          <div className="hidden md:flex items-center gap-6">
            {['Entrepreneurs', 'Citizenship', 'Expats'].map(cat => (
              <button
                key={cat}
                onClick={() => document.getElementById(`section-${cat.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })}
                className="text-[11px] text-gray-500 hover:text-[#1B7A4E] font-bold uppercase tracking-widest transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Nameplate */}
        <div className="w-full px-4 sm:px-8 lg:px-14 py-6 text-center" style={{ borderBottom: '3px double #111' }}>
          {/* Decorative rules */}
          <div className="flex items-center mb-5">
            <div className="flex-1 h-px bg-gray-900" />
            <div className="w-24 h-[3px] bg-gray-900 mx-2" />
            <div className="flex-1 h-px bg-gray-900" />
          </div>

          <h1
            className="text-[40px] sm:text-[60px] lg:text-[80px] font-black text-gray-900 leading-none"
            style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif", letterSpacing: '-0.02em' }}
          >
            Dera Mobility Brief
          </h1>
          <p
            className="mt-3 text-[10px] text-gray-500 uppercase tracking-[0.3em] font-semibold"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Global Mobility · Second Citizenship · Portugal Residency · Advisory Intelligence
          </p>

          {/* Decorative rules */}
          <div className="flex items-center mt-5">
            <div className="flex-1 h-px bg-gray-900" />
            <div className="w-24 h-[3px] bg-gray-900 mx-2" />
            <div className="flex-1 h-px bg-gray-900" />
          </div>
        </div>

        {/* Category nav */}
        <nav className="w-full px-4 sm:px-8 lg:px-14 flex items-center gap-0 overflow-x-auto" style={{ borderBottom: '1px solid #e5e7eb' }}>
          {[
            { label: 'All Articles',  id: 'top' },
            { label: 'Entrepreneurs', id: 'section-entrepreneurs' },
            { label: 'Citizenship',   id: 'section-citizenship' },
            { label: 'Expats',        id: 'section-expats' },
            { label: 'Newsletter',    id: 'section-newsletter' },
          ].map((item, i) => (
            <button
              key={item.label}
              onClick={() => item.id === 'top' ? window.scrollTo({ top: 0, behavior: 'smooth' }) : document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
              className={`px-5 py-3.5 text-[11px] font-black uppercase tracking-widest whitespace-nowrap transition-all border-b-[3px] ${i === 0 ? 'border-[#1B7A4E] text-[#1B7A4E]' : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-400'}`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </header>

      {/* ── LEAD STORY ────────────────────────────────────────────────── */}
      {leadPost && <LeadStory post={leadPost} />}

      {/* ── SECTIONS ──────────────────────────────────────────────────── */}
      <NewspaperSection sectionId="section-entrepreneurs" label="For Entrepreneurs" color="#1B7A4E" posts={entrepreneurArticles} />
      <div className="w-full h-px bg-gray-200" />
      <NewspaperSection sectionId="section-citizenship" label="Citizenship & Passports" color="#0f3460" posts={citizenshipArticles} flipped />
      <div className="w-full h-px bg-gray-200" />
      <NewspaperSection sectionId="section-expats" label="Expat Guides" color="#7c3aed" posts={expatArticles} />

      {/* ── NEWSLETTER ────────────────────────────────────────────────── */}
      <section id="section-newsletter" className="w-full py-24 relative overflow-hidden" style={{ background: '#0f3460' }}>
        {/* Newspaper rule texture */}
        <div className="absolute inset-0 overflow-hidden opacity-[0.04]">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="h-px w-full bg-white" style={{ marginTop: `${i * 38}px` }} />
          ))}
        </div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#1B7A4E]" />

        <div className="relative z-10 w-full px-4 sm:px-8 lg:px-14">
          <div className="max-w-2xl">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1B7A4E] block mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              Intelligence Delivered Free
            </span>
            <h2
              className="text-[34px] sm:text-[50px] font-black text-white leading-[1.05] mb-5"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Stay Ahead of Every Policy Change.
            </h2>
            <p
              className="text-[17px] text-white/60 mb-10 leading-[1.7]"
              style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}
            >
              Subscribe to the Dera Mobility Brief — expert analysis on citizenship, residency, and global mobility delivered to your inbox.
            </p>

            <form onSubmit={handleSubscribe}>
              <div className="flex flex-col sm:flex-row gap-0 max-w-lg">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="flex-1 px-5 py-4 rounded-none text-gray-900 bg-white border-0 focus:ring-0 placeholder:text-gray-400 text-base h-auto"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-4 bg-[#1B7A4E] text-white rounded-none font-black uppercase tracking-widest hover:bg-[#156B3F] transition-colors disabled:opacity-50 text-[11px] whitespace-nowrap h-auto"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {isLoading ? 'Sending...' : 'Subscribe Free'}
                </Button>
              </div>
              {error && <p className="mt-3 text-red-300 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>{error}</p>}
              <p className="mt-4 text-[11px] text-white/30 uppercase tracking-widest" style={{ fontFamily: "'Inter', sans-serif" }}>
                No spam · Unsubscribe anytime · Free forever
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom accent bar */}
      <div className="w-full h-1" style={{ background: 'linear-gradient(to right, #1B7A4E 50%, #0f3460 50%)' }} />
    </div>
  );
}
