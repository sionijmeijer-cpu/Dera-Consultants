import { useState } from 'react';
import { Calendar, Clock, Tag, ArrowRight, Search } from 'lucide-react';
import { blogPosts, blogCategories } from '../data/blogPosts';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Citizenship & Residency Insights
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Expert guides, comparisons, and analysis on global citizenship programs, 
              European residency, and international mobility
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles by keyword, topic, or country..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:bg-white/20 focus:border-white/40"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {blogCategories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={`rounded-full transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No articles found matching your criteria.</p>
              <Button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                variant="outline"
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
                >
                  {/* Featured Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-amber-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-blue-600 text-white">
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.publishDate).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <div
                          key={tag}
                          className="flex items-center gap-1 text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </div>
                      ))}
                    </div>

                    {/* Read More Link */}
                    <a
                      href={`/blog/${post.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        window.history.pushState({}, '', `/blog/${post.slug}`);
                        window.dispatchEvent(new PopStateEvent('popstate'));
                      }}
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 cursor-pointer"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* SEO Text Section */}
          <div className="mt-16 bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Your Guide to Global Citizenship and Residency
            </h2>
            <div className="prose prose-blue max-w-none text-gray-600">
              <p className="mb-4">
                Welcome to the Dera Consultants blog, your comprehensive resource for everything 
                related to Citizenship by Investment (CBI) and European residency programs. Our 
                expert team regularly publishes in-depth guides, program comparisons, and practical 
                advice to help you navigate your journey to global citizenship.
              </p>
              <p className="mb-4">
                Whether you're exploring Caribbean CBI programs like St. Kitts and Nevis, Grenada, 
                or Dominica, or considering European residency options such as Portugal's Golden 
                Visa or D7 Visa, our articles provide the detailed information you need to make 
                informed decisions.
              </p>
              <p>
                We cover critical topics including tax implications of second citizenship, 
                visa-free travel benefits, investment requirements, application processes, and 
                strategic planning for families seeking enhanced global mobility and security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated on Citizenship & Residency News
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get expert insights, program updates, and exclusive guides delivered to your inbox
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-6 text-lg bg-white text-gray-900 border-0 focus:ring-2 focus:ring-amber-500"
              />
              <Button 
                size="lg" 
                className="bg-amber-500 text-white hover:bg-amber-600 px-8 py-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 whitespace-nowrap"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-3">
              Join 5,000+ subscribers. Unsubscribe anytime. No spam, guaranteed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
