import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  Tag,
  ArrowLeft,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  User,
  BookOpen,
} from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import emailjs from '@emailjs/browser';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { SEO } from '../components/SEO';
import ReactMarkdown from 'react-markdown';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_zuw0jdg';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_kdvvybl';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'iwJKHyLFnEj-_NXor';

export default function BlogPostPage() {
  // Extract slug from URL path
  const pathname = window.location.pathname;
  const slug = pathname.replace('/blog/', '').replace(/\/$/, '');

  const [email, setEmail] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY !== 'public_key_placeholder') {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsLoading(true);
      try {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
          name: 'Blog Subscriber',
          email: email,
          phone: 'N/A',
          country: 'N/A',
          service: 'Newsletter Subscription',
          message: `New subscriber from: ${post?.title || 'Blog Listing Page'}\n\nPage URL: ${
            window.location.href
          }\n\nTimestamp: ${new Date().toLocaleString()}`,
        });
        setShowSuccessModal(true);
        setEmail('');
      } catch (error) {
        console.error('Subscription failed:', error);
        alert('Subscription failed. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post?.title || '';

    const shareUrls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(
        title
      )}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  // Navigate function for internal links
  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo(0, 0);
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-12 h-12 text-gray-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            The article you are looking for does not exist or may have been moved.
          </p>
          <button
            onClick={() => navigateTo('/blog')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f3460] text-white rounded-full font-semibold hover:bg-[#1a5276] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(
      (p) =>
        p.id !== post.id &&
        (p.category === post.category || p.tags.some((tag) => post.tags.includes(tag)))
    )
    .slice(0, 3);

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        canonical={window.location.href}
        ogTitle={post.title}
        ogDescription={post.excerpt}
        ogUrl={window.location.href}
      />

      <div className="min-h-screen bg-white">
        {/* Success Modal */}
        {showSuccessModal && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowSuccessModal(false)}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                aria-label="Close"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">You are Now Subscribed!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for subscribing. You will receive the latest updates on citizenship and
                  immigration opportunities.
                </p>
                <Button
                  onClick={() => setShowSuccessModal(false)}
                  className="w-full bg-gradient-to-r from-[#0f3460] to-[#1a5276] text-white hover:from-[#d4af37] hover:to-[#c9a02e] hover:text-[#0f3460]"
                >
                  Continue Reading
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Hero Image Header */}
        <div className="relative h-[50vh] min-h-[400px] w-full">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Back Button */}
          <button
            onClick={() => navigateTo('/blog')}
            className="absolute top-6 left-6 inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full font-medium hover:bg-white transition-colors shadow-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </button>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-16">
            <div className="max-w-4xl mx-auto">
              <Badge className="bg-[#d4af37] text-white hover:bg-[#c9a02e] text-sm px-4 py-1 mb-4">
                {post.category}
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#d4af37] rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium">Dera Consultants</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{post.publishDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Share Bar */}
            <div className="flex items-center justify-between mb-10 pb-6 border-b border-gray-200">
              <p className="text-gray-600 text-lg font-medium">Share this article:</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleShare('facebook')}
                  className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="p-3 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors shadow-md hover:shadow-lg"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors shadow-md hover:shadow-lg"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Excerpt / Lead */}
            <div className="mb-10">
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium border-l-4 border-[#d4af37] pl-6 italic">
                {post.excerpt}
              </p>
            </div>

            {/* Main Content - Markdown */}
            <div className="blog-content">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            {/* Custom Styles for Blog Content */}
            <style>{`
              .blog-content {
                font-size: 1.125rem;
                line-height: 1.8;
                color: #374151;
              }

              .blog-content h1 {
                display: none; /* Hide first h1 as we show it in hero */
              }

              .blog-content h2 {
                font-size: 1.875rem;
                font-weight: 700;
                color: #0f3460;
                margin-top: 3rem;
                margin-bottom: 1.5rem;
                padding-bottom: 0.75rem;
                border-bottom: 3px solid #d4af37;
              }

              .blog-content h3 {
                font-size: 1.5rem;
                font-weight: 600;
                color: #1a5276;
                margin-top: 2rem;
                margin-bottom: 1rem;
              }

              .blog-content h4 {
                font-size: 1.25rem;
                font-weight: 600;
                color: #0f3460;
                margin-top: 1.5rem;
                margin-bottom: 0.75rem;
              }

              .blog-content p {
                margin-bottom: 1.5rem;
                color: #4b5563;
              }

              .blog-content strong {
                color: #1f2937;
                font-weight: 600;
              }

              .blog-content ul, .blog-content ol {
                margin: 1.5rem 0;
                padding-left: 1.5rem;
              }

              .blog-content ul {
                list-style-type: disc;
              }

              .blog-content ol {
                list-style-type: decimal;
              }

              .blog-content li {
                margin-bottom: 0.75rem;
                padding-left: 0.5rem;
                color: #4b5563;
              }

              .blog-content li::marker {
                color: #d4af37;
                font-weight: bold;
              }

              .blog-content a {
                color: #0f3460;
                font-weight: 500;
                text-decoration: underline;
                text-decoration-color: #d4af37;
                text-underline-offset: 4px;
                transition: all 0.2s;
              }

              .blog-content a:hover {
                color: #d4af37;
              }

              .blog-content blockquote {
                border-left: 4px solid #d4af37;
                background: linear-gradient(to right, #fef3c7, #fffbeb);
                padding: 1.5rem;
                margin: 2rem 0;
                border-radius: 0 0.75rem 0.75rem 0;
                font-style: italic;
                color: #4b5563;
              }

              .blog-content hr {
                border: none;
                height: 2px;
                background: linear-gradient(to right, #d4af37, transparent);
                margin: 3rem 0;
              }

              .blog-content table {
                width: 100%;
                border-collapse: collapse;
                margin: 2rem 0;
                border-radius: 0.5rem;
                overflow: hidden;
                box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
              }

              .blog-content th {
                background: #0f3460;
                color: white;
                padding: 1rem;
                text-align: left;
                font-weight: 600;
              }

              .blog-content td {
                padding: 1rem;
                border-bottom: 1px solid #e5e7eb;
              }

              .blog-content tr:nth-child(even) {
                background: #f9fafb;
              }

              .blog-content img {
                border-radius: 0.75rem;
                box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
                margin: 2rem 0;
              }

              .blog-content code {
                background: #f3f4f6;
                padding: 0.25rem 0.5rem;
                border-radius: 0.375rem;
                font-size: 0.875rem;
                color: #0f3460;
              }

              .blog-content pre {
                background: #1f2937;
                color: #e5e7eb;
                padding: 1.5rem;
                border-radius: 0.75rem;
                overflow-x: auto;
                margin: 2rem 0;
              }

              .blog-content pre code {
                background: transparent;
                padding: 0;
                color: inherit;
              }
            `}</style>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Topics Covered
              </h4>
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-[#0f3460] rounded-full text-sm font-medium border border-blue-100 hover:border-[#d4af37] hover:from-amber-50 hover:to-yellow-50 transition-all cursor-pointer"
                  >
                    <Tag className="w-4 h-4" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Box */}
            <div className="mt-12 p-8 bg-gradient-to-r from-[#0f3460] to-[#1a5276] rounded-2xl text-white">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="w-20 h-20 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Dera Consultants</h4>
                  <p className="text-blue-100 leading-relaxed">
                    Expert advisors in citizenship by investment and global mobility solutions. We help
                    high-net-worth individuals and families secure second citizenship and residency in
                    the world's most desirable destinations.
                  </p>
                  <button
                    onClick={() => navigateTo('/contact')}
                    className="mt-4 inline-flex items-center gap-2 text-[#d4af37] font-semibold hover:text-white transition-colors"
                  >
                    Get in Touch →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-to-br from-amber-50 to-yellow-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-amber-100">
              <Mail className="w-16 h-16 mx-auto mb-6 text-[#d4af37]" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Stay Informed</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Subscribe to receive the latest insights on citizenship and immigration opportunities
                delivered to your inbox.
              </p>

              <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-6 py-3 rounded-full text-gray-900 border-2 border-gray-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]"
                  />
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="px-8 py-3 bg-gradient-to-r from-[#0f3460] to-[#1a5276] text-white rounded-full font-semibold hover:from-[#d4af37] hover:to-[#c9a02e] hover:text-[#0f3460] transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap disabled:opacity-50"
                  >
                    {isLoading ? 'Subscribing...' : 'Subscribe'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Related Articles</h2>
                <p className="text-gray-600 text-lg">Continue exploring our immigration insights</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <button
                    key={relatedPost.id}
                    onClick={() => navigateTo(`/blog/${relatedPost.slug}`)}
                    className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-left"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-[#d4af37] text-white hover:bg-[#c9a02e]">
                          {relatedPost.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span>{relatedPost.publishDate}</span>
                        <span>•</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0f3460] transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#0f3460] to-[#1a5276] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Book a free consultation with our expert advisors to discuss your citizenship and residency
              options.
            </p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openScheduleModal'))}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#d4af37] text-[#0f3460] rounded-full font-bold text-lg hover:bg-[#c9a02e] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book Free Consultation
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
