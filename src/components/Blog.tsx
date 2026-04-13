import { Mail } from 'lucide-react';
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

// ─── NAVIGATE HELPER ─────────────────────────────────────────────────────────
function goTo(slug: string) {
  window.location.pathname = `/blog/${slug}`;
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

// ─── FEATURED LEAD ARTICLE (hero, full-width) ─────────────────────────────────
function LeadArticle({ post }: { post: typeof blogPosts[0] }) {
  return (
    <div
      className="group cursor-pointer relative overflow-hidden"
      style={{ borderBottom: '1px solid #e5e7eb' }}
      onClick={() => goTo(post.slug)}
    >
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Image */}
        <div className="relative h-[280px] sm:h-[360px] lg:h-[480px] overflow-hidden bg-gray-100">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
            style={{ transition: 'transform 0.7s ease' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
        </div>

        {/* Text */}
        <div
          className="flex flex-col justify-center px-8 sm:px-12 py-10 lg:py-16 bg-white"
          style={{ borderLeft: '1px solid #e5e7eb' }}
        >
          <CategoryPill label={post.category} />

          <h2
            className="mt-4 mb-5 text-[28px] sm:text-[34px] lg:text-[40px] font-black text-gray-900 leading-[1.1] group-hover:text-[#1B7A4E] transition-colors duration-200"
            style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}
          >
            {post.title}
          </h2>

          <p
            className="text-[17px] text-gray-600 leading-[1.75] mb-6 line-clamp-4"
            style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}
          >
            {post.excerpt}
          </p>

          <div
            className="flex items-center gap-3 text-sm text-gray-400 mt-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <div className="w-7 h-7 rounded-full bg-[#1B7A4E] flex items-center justify-center text-white font-bold text-[11px]">
              {post.author.split(' ').map(w => w[0]).join('').slice(0, 2)}
            </div>
            <span className="font-semibold text-gray-700">{post.author}</span>
            <span>·</span>
            <span>{post.publishDate}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <div className="mt-6">
            <span
              className="inline-flex items-center gap-2 text-[#1B7A4E] text-sm font-black uppercase tracking-widest group-hover:gap-3 transition-all duration-200"
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
    </div>
  );
}

// ─── LARGE CARD (left column of section grid) ────────────────────────────────
function LargeCard({ post }: { post: typeof blogPosts[0] }) {
  return (
    <div
      className="group cursor-pointer flex flex-col h-full"
      style={{ borderRight: '1px solid #e5e7eb' }}
      onClick={() => goTo(post.slug)}
    >
      <div className="relative h-[220px] sm:h-[260px] overflow-hidden bg-gray-100 flex-shrink-0">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
        />
      </div>
      <div className="flex flex-col flex-1 pt-5 pr-6">
        <CategoryPill label={post.category} />
        <h3
          className="mt-3 mb-3 text-[22px] sm:text-[24px] font-black text-gray-900 leading-[1.15] group-hover:text-[#1B7A4E] transition-colors line-clamp-3"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {post.title}
        </h3>
        <p
          className="text-[15px] text-gray-600 leading-[1.7] line-clamp-3 mb-4"
          style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}
        >
          {post.excerpt}
        </p>
        <div
          className="mt-auto flex items-center gap-2 text-xs text-gray-400"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <span className="font-semibold text-gray-600">{post.author}</span>
          <span>·</span>
          <span>{post.publishDate}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </div>
  );
}

// ─── SMALL STACKED CARD (right column list items) ────────────────────────────
function SmallCard({ post, showBorder = true }: { post: typeof blogPosts[0]; showBorder?: boolean }) {
  return (
    <div
      className="group cursor-pointer flex gap-4 py-5"
      style={{ borderBottom: showBorder ? '1px solid #e5e7eb' : 'none' }}
      onClick={() => goTo(post.slug)}
    >
      {/* Thumbnail */}
      <div className="w-24 h-20 flex-shrink-0 overflow-hidden bg-gray-100">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
        />
      </div>
      {/* Text */}
      <div className="flex flex-col justify-center flex-1 min-w-0">
        <CategoryPill label={post.category} />
        <h4
          className="mt-1.5 text-[15px] font-black text-gray-900 leading-[1.25] group-hover:text-[#1B7A4E] transition-colors line-clamp-2"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {post.title}
        </h4>
        <p
          className="mt-1 text-xs text-gray-400"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {post.publishDate} · {post.readTime}
        </p>
      </div>
    </div>
  );
}

// ─── MINIMAL LIST ITEM (compact, text-only) ───────────────────────────────────
function ListItem({ post, index }: { post: typeof blogPosts[0]; index: number }) {
  return (
    <div
      className="group cursor-pointer flex items-start gap-4 py-4"
      style={{ borderBottom: '1px solid #e5e7eb' }}
      onClick={() => goTo(post.slug)}
    >
      <span
        className="flex-shrink-0 text-[28px] font-black text-gray-200 leading-none select-none"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1 }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className="flex-1 min-w-0">
        <h4
          className="text-[15px] font-black text-gray-900 leading-[1.3] group-hover:text-[#1B7A4E] transition-colors line-clamp-2 mb-1"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {post.title}
        </h4>
        <p className="text-xs text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
          {post.publishDate} · {post.readTime}
        </p>
      </div>
    </div>
  );
}

// ─── SECTION DIVIDER WITH LABEL ───────────────────────────────────────────────
function SectionDivider({ label, color = '#1B7A4E' }: { label: string; color?: string }) {
  return (
    <div className="flex items-center gap-0 mb-8">
      <div className="w-1 h-6 mr-3" style={{ background: color }} />
      <span
        className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-900"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {label}
      </span>
      <div className="flex-1 h-px ml-4" style={{ background: '#e5e7eb' }} />
    </div>
  );
}

// ─── NEWSPAPER SECTION ────────────────────────────────────────────────────────
// Layout: 1 large card on left + 2–3 small stacked cards on right
function NewspaperSection({
  label,
  color,
  posts,
  bgClass = 'bg-white',
}: {
  label: string;
  color: string;
  posts: typeof blogPosts;
  bgClass?: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const mainPost   = posts[0];
  const sideStack  = posts.slice(1, 4);
  const extraPosts = posts.slice(4);

  if (!mainPost) return null;

  return (
    <section className={`py-12 sm:py-16 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionDivider label={label} color={color} />

        {/* Main grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-0"
          style={{ border: '1px solid #e5e7eb' }}
        >
          {/* Left: large card */}
          <div className="lg:col-span-2 p-0">
            <LargeCard post={mainPost} />
          </div>

          {/* Right: stacked small cards */}
          <div className="border-t lg:border-t-0 border-gray-200 px-6 py-0">
            {sideStack.map((post, i) => (
              <SmallCard key={post.id} post={post} showBorder={i < sideStack.length - 1} />
            ))}
          </div>
        </div>

        {/* Expanded: numbered list of extra posts */}
        {expanded && extraPosts.length > 0 && (
          <div
            className="mt-0 border-x border-b border-gray-200 px-6 pt-2 pb-2"
            style={{ borderTop: '1px solid #e5e7eb' }}
          >
            {extraPosts.map((post, i) => (
              <ListItem key={post.id} post={post} index={i} />
            ))}
          </div>
        )}

        {/* Show more / less */}
        {extraPosts.length > 0 && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-gray-300 text-gray-700 text-xs font-black uppercase tracking-widest hover:border-gray-900 hover:text-gray-900 transition-all duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {expanded ? 'Show Less' : `${extraPosts.length} More ${label} Articles`}
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// ─── MAIN EXPORT ─────────────────────────────────────────────────────────────
export default function Blog() {
  const [email, setEmail]                   = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [error, setError]                   = useState('');
  const [isLoading, setIsLoading]           = useState(false);

  // Pick the single most recent article across all categories as the lead
  const allSorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
  const leadPost = allSorted[0];

  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY !== 'public_key_placeholder') {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    setIsLoading(true);
    setError('');
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name: 'Blog Subscriber',
        email,
        phone: 'N/A',
        country: 'N/A',
        service: 'Newsletter Subscription',
        message: `New subscriber from: Blog Listing Page\n\nPage URL: ${window.location.href}\n\nTimestamp: ${new Date().toLocaleString()}`,
      });
      setShowSuccessModal(true);
      setEmail('');
    } catch (err) {
      console.error('Subscription failed:', err);
      setError('Subscription failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">

      {/* ── SUCCESS MODAL ──────────────────────────────────────────────── */}
      {showSuccessModal && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowSuccessModal(false)}
        >
          <div
            className="bg-white rounded-none shadow-2xl p-8 max-w-md w-full relative"
            style={{ borderTop: '4px solid #1B7A4E' }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-center">
              <div className="w-14 h-14 bg-[#1B7A4E]/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#1B7A4E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3
                className="text-2xl font-black text-gray-900 mb-2"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                You're Now Subscribed!
              </h3>
              <p className="text-gray-600 mb-6" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                Thank you. You'll receive our latest updates on citizenship and immigration opportunities.
              </p>
              <Button
                onClick={() => setShowSuccessModal(false)}
                className="w-full bg-[#1B7A4E] text-white hover:bg-[#156B3F] rounded-none font-black uppercase tracking-widest text-xs"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Continue Reading
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* ── MASTHEAD ───────────────────────────────────────────────────── */}
      <div
        className="border-b border-gray-200"
        style={{ background: '#fff' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top bar */}
          <div
            className="flex items-center justify-between py-2 border-b border-gray-100"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span className="text-[11px] text-gray-400 font-medium uppercase tracking-widest">
              Dera Consultants · Intelligence Briefing
            </span>
            <span className="text-[11px] text-gray-400 hidden sm:block">
              {new Date().toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <div className="flex items-center gap-3">
              {['Entrepreneurs', 'Citizenship', 'Expats'].map(cat => (
                <button
                  key={cat}
                  className="text-[11px] text-gray-500 hover:text-gray-900 font-semibold uppercase tracking-widest transition-colors hidden sm:block"
                  onClick={() => {
                    const el = document.getElementById(`section-${cat.toLowerCase()}`);
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Newspaper name */}
          <div className="py-6 text-center border-b border-gray-200">
            <h1
              className="text-[36px] sm:text-[52px] lg:text-[64px] font-black text-gray-900 leading-none tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}
            >
              The Passport Review
            </h1>
            <p
              className="mt-2 text-[12px] text-gray-400 uppercase tracking-[0.25em] font-semibold"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Global Mobility · Second Citizenship · Portugal Residency
            </p>
          </div>

          {/* Category nav */}
          <nav className="flex items-center gap-0 overflow-x-auto py-0">
            {[
              { label: 'All Articles',  id: 'top' },
              { label: 'Entrepreneurs', id: 'section-entrepreneurs' },
              { label: 'Citizenship',   id: 'section-citizenship' },
              { label: 'Expats',        id: 'section-expats' },
            ].map((item, i) => (
              <button
                key={item.label}
                onClick={() => {
                  if (item.id === 'top') window.scrollTo({ top: 0, behavior: 'smooth' });
                  else document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-5 py-3 text-[12px] font-black uppercase tracking-widest whitespace-nowrap transition-colors border-b-2 ${
                  i === 0
                    ? 'border-[#1B7A4E] text-[#1B7A4E]'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-400'
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* ── LEAD ARTICLE ──────────────────────────────────────────────── */}
      {leadPost && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-0">
          <SectionDivider label="Editor's Pick" color="#1B7A4E" />
          <LeadArticle post={leadPost} />
        </div>
      )}

      {/* ── ENTREPRENEURS SECTION ─────────────────────────────────────── */}
      <div id="section-entrepreneurs">
        <NewspaperSection
          label="For Entrepreneurs"
          color="#1B7A4E"
          posts={entrepreneurArticles}
          bgClass="bg-white"
        />
      </div>

      {/* ── DIVIDER ───────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gray-200" />
      </div>

      {/* ── CITIZENSHIP SECTION ───────────────────────────────────────── */}
      <div id="section-citizenship">
        <NewspaperSection
          label="Citizenship & Passports"
          color="#0f3460"
          posts={citizenshipArticles}
          bgClass="bg-gray-50"
        />
      </div>

      {/* ── DIVIDER ───────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gray-200" />
      </div>

      {/* ── EXPATS SECTION ────────────────────────────────────────────── */}
      <div id="section-expats">
        <NewspaperSection
          label="Expat Guides"
          color="#7c3aed"
          posts={expatArticles}
          bgClass="bg-white"
        />
      </div>

      {/* ── NEWSLETTER ────────────────────────────────────────────────── */}
      <section
        className="py-20 text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0f3460 0%, #1a4a7a 60%, #1B7A4E 100%)' }}
      >
        {/* Decorative newspaper rule lines */}
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="h-px bg-white" style={{ marginTop: `${i * 40}px` }} />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-2">
            <span
              className="text-[11px] font-black uppercase tracking-[0.25em] text-white/50"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Intelligence Delivered
            </span>
          </div>
          <h2
            className="text-3xl sm:text-5xl font-black text-white mb-4 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Stay Ahead of the World
          </h2>
          <p
            className="text-lg text-white/70 max-w-2xl mx-auto mb-10"
            style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}
          >
            Subscribe for expert analysis on citizenship, residency, and global mobility — delivered to your inbox.
          </p>
          <form onSubmit={handleSubscribe} className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-0">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="flex-1 px-5 py-4 rounded-none text-gray-900 bg-white border-0 focus:ring-0 placeholder:text-gray-400 text-base"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="px-8 py-4 bg-[#1B7A4E] text-white rounded-none font-black uppercase tracking-widest hover:bg-[#156B3F] transition-colors disabled:opacity-50 text-xs whitespace-nowrap border-0"
                style={{ fontFamily: "'Inter', sans-serif", minWidth: '140px' }}
              >
                {isLoading ? 'Sending...' : 'Subscribe'}
              </Button>
            </div>
            {error && (
              <p className="mt-3 text-red-300 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                {error}
              </p>
            )}
            <p
              className="mt-4 text-xs text-white/40 uppercase tracking-widest"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              No spam · Unsubscribe anytime
            </p>
          </form>
        </div>
      </section>

      {/* ── FOOTER RULE ───────────────────────────────────────────────── */}
      <div className="h-1 w-full" style={{ background: 'linear-gradient(to right, #1B7A4E, #0f3460)' }} />
    </div>
  );
}
