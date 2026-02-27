import { useEffect, useState, useRef } from 'react';
import { ChevronRight, ArrowRight, Calendar } from 'lucide-react';
import { Button } from '../components/ui/button';
import { blogPosts, BlogPost } from '../data/blogPosts';

interface BlogPostPageProps {
  onScheduleCall?: () => void;
}

export default function BlogPostPage({ onScheduleCall }: BlogPostPageProps) {
  const [article, setArticle] = useState<BlogPost | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<BlogPost[]>([]);
  const [activeSection, setActiveSection] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    // Get slug from URL
    const path = window.location.pathname;
    const slug = path.split('/blog/')[1];

    // Find article by slug
    const foundArticle = blogPosts.find(post => post.slug === slug);
    
    if (foundArticle) {
      setArticle(foundArticle);
      
      // Get related articles from same category (excluding current article)
      const related = blogPosts
        .filter(post => post.category === foundArticle.category && post.id !== foundArticle.id)
        .slice(0, 2);
      setRelatedArticles(related);
    }
    
    setIsLoading(false);
    window.scrollTo(0, 0);
  }, []);

  // Setup IntersectionObserver for TOC highlighting
  useEffect(() => {
    if (!article) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all section headings
    const headings = document.querySelectorAll('[data-section-id]');
    headings.forEach((heading) => {
      observer.observe(heading);
    });

    return () => observer.disconnect();
  }, [article]);

  const handleScheduleCall = () => {
    const event = new CustomEvent('openScheduleModal');
    window.dispatchEvent(event);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
        <div className="text-gray-500 dark:text-gray-400">Loading article...</div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Article Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">The article you're looking for doesn't exist.</p>
          <a href="/blog" className="text-[#0f3460] dark:text-[#4a9d7d] hover:underline font-semibold">
            ← Back to Blog
          </a>
        </div>
      </div>
    );
  }

  // Parse article content to extract sections
  const contentLines = article.content.split('\n');
  const sections: Array<{ id: string; title: string; level: number }> = [];
  
  contentLines.forEach((line) => {
    if (line.startsWith('## ')) {
      const title = line.replace('## ', '').trim();
      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      sections.push({ id, title, level: 2 });
    } else if (line.startsWith('### ')) {
      const title = line.replace('### ', '').trim();
      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      sections.push({ id, title, level: 3 });
    }
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Breadcrumb */}
      <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <a href="/" className="hover:text-gray-900 dark:hover:text-white">Home</a>
            <ChevronRight size={16} />
            <a href="/blog" className="hover:text-gray-900 dark:hover:text-white">Articles</a>
            <ChevronRight size={16} />
            <span className="text-gray-900 dark:text-white font-medium">{article.category}</span>
            <ChevronRight size={16} />
            <span className="text-gray-900 dark:text-white font-medium">{article.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Article Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full">
                  {article.category}
                </span>
                <span className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                  <Calendar size={16} className="mr-2" />
                  {article.publishDate}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{article.title}</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">{article.excerpt}</p>
            </div>

            {/* Article Image */}
            {article.image && (
              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-96 object-cover"
                />
              </div>
            )}

            {/* Article Content */}
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
              {article.content.split('\n').map((line, idx) => {
                if (line.startsWith('# ')) {
                  return (
                    <h1 key={idx} className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                      {line.replace('# ', '')}
                    </h1>
                  );
                } else if (line.startsWith('## ')) {
                  const title = line.replace('## ', '').trim();
                  const sectionId = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                  return (
                    <h2 
                      key={idx}
                      id={sectionId}
                      data-section-id={sectionId}
                      className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4"
                    >
                      {title}
                    </h2>
                  );
                } else if (line.startsWith('### ')) {
                  const title = line.replace('### ', '').trim();
                  const sectionId = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                  return (
                    <h3 
                      key={idx}
                      id={sectionId}
                      data-section-id={sectionId}
                      className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3"
                    >
                      {title}
                    </h3>
                  );
                } else if (line.startsWith('- ')) {
                  return (
                    <li key={idx} className="ml-6 mb-2">
                      {line.replace('- ', '')}
                    </li>
                  );
                } else if (line.startsWith('1. ') || line.match(/^\d+\. /)) {
                  return (
                    <li key={idx} className="ml-6 mb-2 list-decimal">
                      {line.replace(/^\d+\. /, '')}
                    </li>
                  );
                } else if (line.trim() === '') {
                  return <div key={idx} className="h-4" />;
                } else if (line.includes('**')) {
                  // Remove ** markers and render as bold
                  const cleanedLine = line.replace(/\*\*(.*?)\*\*/g, '$1');
                  return (
                    <p key={idx} className="mb-4 font-semibold text-gray-900 dark:text-white">
                      {cleanedLine}
                    </p>
                  );
                } else if (line.trim()) {
                  return (
                    <p key={idx} className="mb-4">
                      {line}
                    </p>
                  );
                }
                return null;
              })}
            </div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedArticles.map((relatedArticle) => (
                    <div 
                      key={relatedArticle.id}
                      className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:shadow-lg dark:hover:shadow-xl transition-shadow cursor-pointer"
                      onClick={() => {
                        window.location.href = `/blog/${relatedArticle.slug}`;
                      }}
                    >
                      {relatedArticle.image && (
                        <img 
                          src={relatedArticle.image} 
                          alt={relatedArticle.title}
                          className="w-full h-48 object-cover"
                        />
                      )}
                      <div className="p-6">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{relatedArticle.category}</p>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{relatedArticle.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{relatedArticle.excerpt}</p>
                        <button className="text-[#0f3460] dark:text-[#4a9d7d] font-semibold flex items-center hover:gap-2 transition-all">
                          Read More <ArrowRight size={16} className="ml-2" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Trustpilot Widget */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 mb-8 sticky top-8">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                <strong className="text-gray-900 dark:text-white">Trustpilot</strong>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mb-4">4.8 | 6 reviews</p>
              <button
                onClick={handleScheduleCall}
                className="w-full px-4 py-3 bg-[#0f3460] dark:bg-[#1B7A4E] text-white rounded-lg font-semibold hover:bg-[#0d2540] dark:hover:bg-[#156B3F] transition-colors"
              >
                BECOME A CLIENT
              </button>
            </div>

            {/* Table of Contents */}
            {sections.length > 0 && (
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 sticky top-80">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wide">
                  TABLE OF CONTENTS
                </h3>
                <div className="space-y-3">
                  {sections.map((section, idx) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`flex items-start text-left text-sm transition-all ${
                        activeSection === section.id
                          ? 'text-[#0f3460] dark:text-[#4a9d7d] font-bold'
                          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                      }`}
                    >
                      <span className={`mr-3 font-semibold ${
                        activeSection === section.id ? 'text-[#0f3460] dark:text-[#4a9d7d]' : 'text-gray-400 dark:text-gray-600'
                      }`}>
                        {idx + 1}
                      </span>
                      <span className="flex-1">{section.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}