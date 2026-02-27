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
const citizenshipArticles = blogPosts.filter(p => p.category === 'Citizenship');
const expatArticles = blogPosts.filter(p => p.category === 'Expats');

interface Article {
  id: string;
  title: string;
  image: string;
  date: string;
  excerpt: string;
  slug: string;
}

function toArticle(post: typeof blogPosts[0]): Article {
  return {
    id: post.id,
    title: post.title,
    image: post.image,
    date: post.publishDate,
    excerpt: post.excerpt,
    slug: post.slug,
  };
}

function ArticleCard({ article }: { article: Article }) {
  const handleNavigate = () => {
    window.location.pathname = `/blog/${article.slug}`;
  };

  return (
    <div
      onClick={handleNavigate}
      className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 cursor-pointer"
    >
      <div className="relative overflow-hidden bg-gray-100">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug group-hover:text-[#0f3460] transition-colors duration-200 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-sm text-gray-500 mb-3">{article.date}</p>
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
          {article.excerpt}
        </p>
        <button
          onClick={handleNavigate}
          className="inline-flex items-center text-sm font-semibold text-[#0f3460] group-hover:text-[#1B7A4E] transition-colors duration-200 bg-none border-none p-0 cursor-pointer"
        >
          Read More
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function ArticleSection({
  title,
  subtitle,
  articles,
  buttonLabel,
  bgClass,
}: {
  title: string;
  subtitle: string;
  articles: Article[];
  buttonLabel: string;
  bgClass: string;
}) {
  const [showAll, setShowAll] = useState(false);

  const firstThree = articles.slice(0, 3);
  const remaining = articles.slice(3);

  return (
    <section className={`py-16 sm:py-20 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10">
          {/* Section Header */}
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{title}</h2>
            <p className="text-gray-500 text-base">{subtitle}</p>
          </div>

          {/* First 3 cards always visible */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {firstThree.map(article => (
              <ArticleCard key={article.id} article={toArticle(article as any)} />
            ))}
          </div>

          {/* Remaining 2 cards — shown when expanded */}
          {showAll && remaining.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 border-t border-gray-100 pt-8">
              {remaining.map(article => (
                <ArticleCard key={article.id} article={toArticle(article as any)} />
              ))}
            </div>
          )}

          {/* Toggle button */}
          {remaining.length > 0 && (
            <div className="text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 px-8 py-3 bg-gray-800 text-white text-sm font-semibold rounded-lg hover:bg-gray-900 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {showAll ? 'Show Less' : buttonLabel}
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function Blog() {
  const [email, setEmail] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
    <div className="min-h-screen bg-gray-50">
      {/* Success Modal */}
      {showSuccessModal && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowSuccessModal(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">You&apos;re Now Subscribed!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for subscribing to our newsletter. You&apos;ll receive the latest updates on citizenship and immigration opportunities.
              </p>
              <Button onClick={() => setShowSuccessModal(false)} className="w-full bg-[#1B7A4E] text-white hover:bg-[#156B3F]">
                Continue Reading
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* HERO */}
      <section className="relative min-h-[420px] sm:min-h-[480px] overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'blur(3px) brightness(0.55)' }}
        >
          <source src="https://i.imgur.com/hwdgZRR.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            Read our Articles
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
            Over the years, we&apos;ve published a comprehensive collection of articles covering citizenship and residency pathways, global mobility considerations, and international relocation insights.
          </p>
        </div>
      </section>

      {/* SECTION 1 — Entrepreneurs */}
      <ArticleSection
        title="Top Resources for Entrepreneurs"
        subtitle="Low bureaucracy, business-friendly, stable banking access — these attract founders thinking long-term."
        articles={entrepreneurArticles.map(toArticle)}
        buttonLabel="All Entrepreneur Resources"
        bgClass="bg-gray-50"
      />

      {/* SECTION 2 — Citizenship */}
      <ArticleSection
        title="Everything You Need to Know About Citizenship and Passports"
        subtitle="Build trust and reduce fear around the process — these topics demystify every step."
        articles={citizenshipArticles.map(toArticle)}
        buttonLabel="All Citizenship Resources"
        bgClass="bg-white"
      />

      {/* SECTION 3 — Expats */}
      <ArticleSection
        title="Guides for Expats"
        subtitle="Practical resources for your relocation journey — from banking to housing to family preparation."
        articles={expatArticles.map(toArticle)}
        buttonLabel="All Expat Resources"
        bgClass="bg-gray-50"
      />

      {/* NEWSLETTER */}
      <section className="py-20 bg-gradient-to-br from-[#0f3460] via-[#1a4a7a] to-[#1a5276] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
              <Mail className="w-8 h-8 text-[#1B7A4E]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest citizenship and immigration insights delivered to your inbox.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="flex-1 px-5 py-3 rounded-xl text-gray-900 bg-white border-0 focus:ring-2 focus:ring-[#1B7A4E] placeholder:text-gray-400 text-base"
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="px-8 py-3 bg-[#1B7A4E] text-white rounded-xl font-semibold hover:bg-[#156B3F] transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap disabled:opacity-50 text-base"
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </div>
            {error && <p className="mt-3 text-red-300 text-sm">{error}</p>}
            <p className="mt-4 text-sm text-blue-200/70">No spam, unsubscribe anytime. We respect your privacy.</p>
          </form>
        </div>
      </section>
    </div>
  );
}
