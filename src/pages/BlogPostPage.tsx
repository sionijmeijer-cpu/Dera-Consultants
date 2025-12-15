import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ChevronLeft, Mail } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

interface BlogPostPageProps {}

export default function BlogPostPage({}: BlogPostPageProps) {
  // Extract article slug from URL path
  const articleSlug = window.location.pathname.split('/blog/')[1];
  const onBack = () => window.history.back();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const article = blogPosts.find((a) => a.slug === articleSlug);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Article not found</h1>
          <button
            onClick={onBack}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  const relatedArticles = blogPosts
    .filter((a) => a.slug !== articleSlug && a.category === article.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Back Button */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            <ChevronLeft size={20} />
            Back to Blog
          </button>
        </div>
      </div>

      {/* Featured Image */}
      <div className="w-full h-96 overflow-hidden bg-gray-100">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              {article.category}
            </span>
            <span className="text-gray-600 text-sm">
              {new Date(article.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="text-gray-600 text-sm">•</span>
            <span className="text-gray-600 text-sm">{article.readTime}</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {article.title}
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        {/* Markdown Content */}
        <div className="prose prose-lg max-w-none mb-16">
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => (
                <h1 className="text-3xl font-bold text-gray-900 mt-12 mb-6 leading-tight" {...props} />
              ),
              h2: ({ node, ...props }) => (
                <h2 
                  className="text-2xl font-bold text-gray-900 mt-10 mb-6 pb-4 border-l-4 border-blue-600 pl-4 leading-tight" 
                  {...props} 
                />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4 leading-tight" {...props} />
              ),
              p: ({ node, ...props }) => (
                <p className="text-lg text-gray-700 leading-relaxed mb-6" {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul className="list-none pl-0 mb-6 space-y-3" {...props} />
              ),
              li: ({ node, ...props }) => (
                <li className="flex items-start gap-4 text-lg text-gray-700 leading-relaxed">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span {...props} />
                </li>
              ),
              ol: ({ node, ...props }) => (
                <ol className="list-decimal list-inside mb-6 space-y-3" {...props} />
              ),
              blockquote: ({ node, ...props }) => (
                <blockquote 
                  className="border-l-4 border-blue-600 bg-blue-50 px-6 py-4 my-8 italic text-lg text-gray-700 rounded-r-lg shadow-sm" 
                  {...props} 
                />
              ),
              table: ({ node, ...props }) => (
                <div className="overflow-x-auto mb-8 rounded-lg shadow-md">
                  <table className="w-full border-collapse" {...props} />
                </div>
              ),
              thead: ({ node, ...props }) => (
                <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white" {...props} />
              ),
              th: ({ node, ...props }) => (
                <th className="px-6 py-4 font-bold text-left text-white border-blue-700" {...props} />
              ),
              td: ({ node, ...props }) => (
                <td className="px-6 py-4 border-b border-gray-200 text-gray-700" {...props} />
              ),
              tr: ({ node, ...props }) => (
                <tr className="hover:bg-blue-50 transition-colors" {...props} />
              ),
              a: ({ node, ...props }) => (
                <a className="text-blue-600 hover:text-blue-700 font-semibold underline transition-colors" {...props} />
              ),
              strong: ({ node, ...props }) => (
                <strong className="font-bold text-gray-900" {...props} />
              ),
            }}
          >
            {article.content}
          </ReactMarkdown>
        </div>

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-16 border border-blue-200">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              📧 Get Citizenship Insights
            </h3>
            <p className="text-gray-700 mb-6">
              Subscribe to our blog for the latest news, tips, and updates on citizenship and residency programs.
            </p>
            
            {subscribed ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-700 font-semibold">
                ✓ Thanks for subscribing! Check your email for updates.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <Mail size={18} />
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Tags */}
        <div className="mb-16 pb-16 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
            Topics
          </h3>
          <div className="flex flex-wrap gap-3">
            {['Caribbean', 'CBI', 'Investment', 'Immigration'].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <div
                  key={relatedArticle.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
                  onClick={() => window.location.hash = `#blog/${relatedArticle.id}`}
                >
                  <div className="h-40 overflow-hidden bg-gray-200">
                    <img
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-semibold text-blue-600 uppercase">
                      {relatedArticle.category}
                    </span>
                    <h4 className="text-lg font-bold text-gray-900 mt-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {relatedArticle.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                      {relatedArticle.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}