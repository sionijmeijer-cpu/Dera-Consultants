import { useEffect, useState, useCallback, useMemo } from 'react';
import { ChevronRight, ArrowRight, Calendar, Clock, Star, BookOpen, ChevronUp } from 'lucide-react';
import { blogPosts, BlogPost } from '../data/blogPosts';

interface BlogPostPageProps {
  onScheduleCall?: () => void;
}

type ParsedBlock =
  | { type: 'h2'; id: string; title: string }
  | { type: 'h3'; id: string; title: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] };

function DesktopTOC({
  sections,
  activeSection,
  onSectionClick,
}: {
  sections: Array<{ id: string; title: string; level: number }>;
  activeSection: string;
  onSectionClick: (id: string) => void;
}) {
  let h2Index = 0;

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm">
      <h4 className="text-xs font-bold text-gray-900 dark:text-white mb-5 uppercase tracking-[0.15em]">
        TABLE OF CONTENTS
      </h4>

      <nav className="space-y-1">
        {sections.map((section) => {
          const isH2 = section.level === 2;
          if (isH2) h2Index++;
          const isActive = activeSection === section.id;

          return (
            <button
              key={section.id}
              onClick={() => onSectionClick(section.id)}
              className={`w-full text-left py-2.5 rounded-lg transition-all duration-200 flex items-start gap-3 ${
                isH2 ? 'px-2' : 'pl-12 pr-2'
              } ${
                isActive
                  ? 'text-[#1B7A4E] dark:text-[#4a9d7d] font-semibold'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              {isH2 ? (
                <span
                  className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-colors ${
                    isActive
                      ? 'border-[#1B7A4E] text-[#1B7A4E] bg-[#1B7A4E]/5'
                      : 'border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500'
                  }`}
                >
                  {h2Index}
                </span>
              ) : (
                <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center text-gray-300 dark:text-gray-600 text-xs">
                  •
                </span>
              )}

              <span className={`flex-1 leading-snug ${isH2 ? 'text-sm font-medium' : 'text-sm'}`}>
                {section.title}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

function MobileTOC({
  sections,
  activeSection,
  onSectionClick,
}: {
  sections: Array<{ id: string; title: string; level: number }>;
  activeSection: string;
  onSectionClick: (id: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const current = sections.find((s) => s.id === activeSection);

  let h2Index = 0;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40">
      {isOpen && (
        <div className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-2xl max-h-[60vh] overflow-y-auto">
          <div className="p-4 space-y-1">
            {sections.map((section) => {
              const isH2 = section.level === 2;
              if (isH2) h2Index++;

              return (
                <button
                  key={section.id}
                  onClick={() => {
                    onSectionClick(section.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left text-sm py-2.5 rounded-lg transition-all flex items-start gap-3 ${
                    isH2 ? 'px-4' : 'pl-10 pr-4'
                  } ${
                    activeSection === section.id
                      ? 'bg-[#1B7A4E]/10 text-[#1B7A4E] font-semibold'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {isH2 ? (
                    <span className="flex-shrink-0 w-6 h-6 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center text-xs font-bold">
                      {h2Index}
                    </span>
                  ) : (
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-gray-300 dark:text-gray-600 text-xs">
                      •
                    </span>
                  )}

                  <span>{section.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg px-4 py-3 flex items-center justify-between"
      >
        <div className="flex items-center gap-2 text-sm">
          <BookOpen size={16} className="text-[#1B7A4E]" />
          <span className="text-gray-600 dark:text-gray-400 truncate max-w-[250px] font-medium">
            {current?.title || 'Table of Contents'}
          </span>
        </div>
        <ChevronUp size={18} className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
}

function renderInlineFormatting(text: string): React.ReactNode[] {
  const regex = /(\*\*\*(.+?)\*\*\*|\*\*(.+?)\*\*|\*(.+?)\*)/g;
  const result: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      result.push(<span key={`t-${lastIndex}`}>{text.slice(lastIndex, match.index)}</span>);
    }
    if (match[2]) {
      result.push(
        <strong key={`bi-${match.index}`} className="font-bold italic text-gray-900 dark:text-white">
          {match[2]}
        </strong>
      );
    } else if (match[3]) {
      result.push(
        <strong key={`b-${match.index}`} className="font-bold text-gray-900 dark:text-white">
          {match[3]}
        </strong>
      );
    } else if (match[4]) {
      result.push(
        <em key={`i-${match.index}`} className="italic text-gray-700 dark:text-gray-200">
          {match[4]}
        </em>
      );
    }
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    result.push(<span key={`t-${lastIndex}`}>{text.slice(lastIndex)}</span>);
  }

  return result.length > 0 ? result : [<span key="full">{text}</span>];
}

function makeId(text: string): string {
  return text
    .toLowerCase()
    .replace(/^\d+\.\s*/, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function stripHeadingPrefix(text: string): string {
  return text
    .replace(/^###\s+/, '')
    .replace(/^##\s+/, '')
    .replace(/^#\s+/, '')
    .replace(/^\d+\.\s+/, '')
    .trim();
}

function isNumberedHeading(line: string): boolean {
  return /^\d+\.\s+.+/.test(line.trim());
}

function isMarkdownBullet(line: string): boolean {
  return /^[-*]\s+/.test(line.trim());
}

function isOrderedListItem(line: string): boolean {
  return /^\d+\.\s+.+/.test(line.trim());
}

function isLikelySubheading(line: string): boolean {
  const trimmed = line.trim();
  if (!trimmed) return false;
  if (trimmed.length > 70) return false;
  if (trimmed.endsWith('.')) return false;
  if (trimmed.endsWith(':')) return true;
  if (/^(What|Why|How|Key|Common|Important|Final)\b/i.test(trimmed)) return true;
  return /^[A-Z][A-Za-z0-9\s&\-?]+$/.test(trimmed);
}

function isPlainBulletCandidate(line: string): boolean {
  const trimmed = line.trim();
  if (!trimmed) return false;
  if (trimmed.length > 95) return false;
  if (trimmed.endsWith('.')) return false;
  if (trimmed.endsWith(':')) return false;
  if (isNumberedHeading(trimmed)) return false;
  if (isMarkdownBullet(trimmed)) return true;
  return true;
}

function parseContent(content: string): ParsedBlock[] {
  const lines = content.split('\n');
  const blocks: ParsedBlock[] = [];

  let i = 0;
  let skippedTitle = false;

  while (i < lines.length) {
    const raw = lines[i];
    const line = raw.trim();

    if (!line) {
      i++;
      continue;
    }

    if (!skippedTitle) {
      skippedTitle = true;
      i++;
      continue;
    }

    if (/^##\s+/.test(line) || /^#\s+/.test(line)) {
      const title = stripHeadingPrefix(line);
      blocks.push({ type: 'h2', id: makeId(title), title });
      i++;
      continue;
    }

    if (/^###\s+/.test(line)) {
      const title = stripHeadingPrefix(line);
      blocks.push({ type: 'h3', id: makeId(title), title });
      i++;
      continue;
    }

    if (isNumberedHeading(line) && line.length < 80) {
      const title = stripHeadingPrefix(line);
      blocks.push({ type: 'h2', id: makeId(title), title });
      i++;
      continue;
    }

    if (isLikelySubheading(line)) {
      const next = lines[i + 1]?.trim() || '';
      if (next) {
        blocks.push({ type: 'h3', id: makeId(line), title: line.replace(/:$/, '') });
        i++;
        continue;
      }
    }

    if (isMarkdownBullet(line)) {
      const items: string[] = [];
      while (i < lines.length && isMarkdownBullet(lines[i])) {
        items.push(lines[i].trim().replace(/^[-*]\s+/, ''));
        i++;
      }
      blocks.push({ type: 'ul', items });
      continue;
    }

    if (isOrderedListItem(line)) {
      const items: string[] = [];
      let j = i;
      while (j < lines.length && isOrderedListItem(lines[j].trim())) {
        items.push(lines[j].trim().replace(/^\d+\.\s+/, ''));
        j++;
      }
      if (items.length >= 2) {
        blocks.push({ type: 'ol', items });
        i = j;
        continue;
      }
    }

    const prevBlock = blocks[blocks.length - 1];
    if (
      (prevBlock?.type === 'h3' || prevBlock?.type === 'h2' || lines[i - 1]?.trim().endsWith(':')) &&
      isPlainBulletCandidate(line)
    ) {
      const items: string[] = [];
      let j = i;
      while (j < lines.length) {
        const candidate = lines[j].trim();
        if (!candidate) break;
        if (!isPlainBulletCandidate(candidate)) break;
        if (isLikelySubheading(candidate) && j !== i) break;
        if (isNumberedHeading(candidate)) break;
        items.push(candidate.replace(/^[-*]\s+/, ''));
        j++;
      }

      if (items.length >= 2) {
        blocks.push({ type: 'ul', items });
        i = j;
        continue;
      }
    }

    let paragraph = line;
    let j = i + 1;
    while (j < lines.length) {
      const next = lines[j].trim();
      if (!next) break;
      if (/^#{1,3}\s+/.test(next)) break;
      if (isNumberedHeading(next) && next.length < 80) break;
      if (isMarkdownBullet(next)) break;
      if (isLikelySubheading(next)) break;
      if (isOrderedListItem(next)) break;
      paragraph += ` ${next}`;
      j++;
    }

    blocks.push({ type: 'p', text: paragraph });
    i = j;
  }

  return blocks;
}

export default function BlogPostPage({ onScheduleCall }: BlogPostPageProps) {
  const [article, setArticle] = useState<BlogPost | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<BlogPost[]>([]);
  const [activeSection, setActiveSection] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [readingProgress, setReadingProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    const slug = path.split('/blog/')[1];
    const foundArticle = blogPosts.find((post) => post.slug === slug);
    if (foundArticle) {
      setArticle(foundArticle);
      const related = blogPosts
        .filter((post) => post.category === foundArticle.category && post.id !== foundArticle.id)
        .slice(0, 3);
      setRelatedArticles(related);
    }
    setIsLoading(false);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parsedBlocks = useMemo(() => {
    if (!article) return [];
    return parseContent(article.content);
  }, [article]);

  const tocSections = useMemo(() => {
    return parsedBlocks
      .filter(
        (block): block is Extract<ParsedBlock, { type: 'h2' | 'h3' }> =>
          block.type === 'h2' || block.type === 'h3'
      )
      .map((block) => ({
        id: block.id,
        title: block.title,
        level: block.type === 'h2' ? 2 : 3,
      }));
  }, [parsedBlocks]);

  useEffect(() => {
    if (!article) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    const timer = setTimeout(() => {
      document.querySelectorAll('[data-section-id]').forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [article, parsedBlocks]);

  const handleScheduleCall = () => {
    const event = new CustomEvent('openScheduleModal');
    window.dispatchEvent(event);
  };

  const scrollToSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const renderContent = () => {
    let paragraphCount = 0;

    return parsedBlocks.map((block, idx) => {
      if (block.type === 'h2') {
        return (
          <h2
            key={`h2-${idx}`}
            id={block.id}
            data-section-id={block.id}
            className="text-2xl sm:text-[28px] font-extrabold text-gray-900 dark:text-white mt-14 mb-5 pb-3 border-b-2 border-[#1B7A4E]/20 dark:border-[#1B7A4E]/30 scroll-mt-24 leading-tight"
          >
            {renderInlineFormatting(block.title)}
          </h2>
        );
      }

      if (block.type === 'h3') {
        return (
          <h3
            key={`h3-${idx}`}
            id={block.id}
            data-section-id={block.id}
            className="text-xl sm:text-[22px] font-bold text-[#1B7A4E] dark:text-[#4a9d7d] mt-10 mb-4 scroll-mt-24 leading-snug"
          >
            {renderInlineFormatting(block.title)}
          </h3>
        );
      }

      if (block.type === 'ul') {
        return (
          <ul key={`ul-${idx}`} className="mb-8 space-y-3 pl-1">
            {block.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[17px] leading-[1.8] text-gray-700 dark:text-gray-300">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#1B7A4E] mt-[10px]" />
                <span>{renderInlineFormatting(item)}</span>
              </li>
            ))}
          </ul>
        );
      }

      if (block.type === 'ol') {
        return (
          <ol key={`ol-${idx}`} className="mb-8 space-y-3 pl-1">
            {block.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[17px] leading-[1.8] text-gray-700 dark:text-gray-300">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1B7A4E]/10 text-[#1B7A4E] dark:text-[#4a9d7d] flex items-center justify-center text-sm font-bold mt-[3px]">
                  {i + 1}
                </span>
                <span className="flex-1">{renderInlineFormatting(item)}</span>
              </li>
            ))}
          </ol>
        );
      }

      paragraphCount++;
      const isFirstParagraph = paragraphCount === 1;

      return (
        <p
          key={`p-${idx}`}
          className={`mb-6 text-gray-700 dark:text-gray-300 leading-[1.9] text-[17px] ${
            isFirstParagraph
              ? 'first-letter:text-5xl first-letter:font-bold first-letter:text-[#1B7A4E] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:leading-none'
              : ''
          }`}
        >
          {renderInlineFormatting(block.text)}
        </p>
      );
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-3 border-[#1B7A4E] border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-500 dark:text-gray-400">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-10 h-10 text-gray-400" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Article Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The article you are looking for does not exist or may have been moved.
          </p>
          <a
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B7A4E] text-white rounded-lg font-semibold hover:bg-[#156B3F] transition-colors"
          >
            &larr; Back to Articles
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200/50 dark:bg-gray-800/50">
        <div
          className="h-full bg-gradient-to-r from-[#1B7A4E] to-[#2E8B57] transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <div className="relative">
        {article.image && (
          <div className="relative h-[320px] sm:h-[420px] lg:h-[480px] overflow-hidden">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

            <div className="absolute top-0 left-0 right-0">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <div className="flex items-center flex-wrap gap-1 text-sm text-white/80">
                  <a href="/" className="hover:text-white transition-colors">Home</a>
                  <ChevronRight size={14} className="text-white/50" />
                  <a href="/blog" className="hover:text-white transition-colors">Articles</a>
                  <ChevronRight size={14} className="text-white/50" />
                  <span className="text-white font-medium">{article.category}</span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
                <div className="max-w-3xl">
                  <div className="flex items-center flex-wrap gap-3 mb-4">
                    <span className="px-3 py-1 bg-[#1B7A4E] text-white text-sm font-semibold rounded-full">
                      {article.category}
                    </span>
                    <span className="flex items-center text-white/80 text-sm">
                      <Calendar size={14} className="mr-1.5" />
                      {article.publishDate}
                    </span>
                    <span className="flex items-center text-white/80 text-sm">
                      <Clock size={14} className="mr-1.5" />
                      {article.readTime}
                    </span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    {article.title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        )}

        {!article.image && (
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex items-center flex-wrap gap-1 text-sm text-gray-500 dark:text-gray-400 mb-6">
                <a href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">Home</a>
                <ChevronRight size={14} />
                <a href="/blog" className="hover:text-gray-900 dark:hover:text-white transition-colors">Articles</a>
                <ChevronRight size={14} />
                <span className="text-gray-900 dark:text-white font-medium">{article.category}</span>
              </div>
              <div className="flex items-center flex-wrap gap-3 mb-4">
                <span className="px-3 py-1 bg-[#1B7A4E]/10 text-[#1B7A4E] text-sm font-semibold rounded-full">
                  {article.category}
                </span>
                <span className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                  <Calendar size={14} className="mr-1.5" />
                  {article.publishDate}
                </span>
                <span className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                  <Clock size={14} className="mr-1.5" />
                  {article.readTime}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight max-w-3xl">
                {article.title}
              </h1>
            </div>
          </div>
        )}
      </div>

      <div className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed italic">
            {article.excerpt}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="flex gap-10 lg:gap-14">
          <article className="flex-1 min-w-0 max-w-3xl">
            <div className="article-content">{renderContent()}</div>

            <div className="mt-14 bg-gradient-to-br from-[#0f3460] to-[#1a4a8a] dark:from-[#1B7A4E] dark:to-[#156B3F] rounded-2xl p-8 sm:p-10 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to Take the Next Step?</h3>
              <p className="text-white/80 text-lg mb-6 max-w-lg mx-auto">
                Schedule a free consultation with our expert team and start your journey today.
              </p>
              <button
                onClick={handleScheduleCall}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0f3460] dark:text-[#1B7A4E] font-bold rounded-xl hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg text-lg"
              >
                Schedule a Free Call
                <ArrowRight size={20} />
              </button>
            </div>

            <div className="mt-10 flex items-center gap-5 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1B7A4E] to-[#2E8B57] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                DC
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Written by</p>
                <h4 className="font-bold text-gray-900 dark:text-white text-lg">{article.author}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Expert insights on global mobility, residency, and citizenship planning.
                </p>
              </div>
            </div>

            {relatedArticles.length > 0 && (
              <div className="mt-14 pt-10 border-t border-gray-200 dark:border-gray-800">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Continue Reading</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedArticles.map((ra) => (
                    <a
                      key={ra.id}
                      href={`/blog/${ra.slug}`}
                      className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      {ra.image && (
                        <div className="relative h-40 overflow-hidden">
                          <img
                            src={ra.image}
                            alt={ra.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-semibold text-[#1B7A4E] uppercase tracking-wide">
                            {ra.category}
                          </span>
                          <span className="text-gray-300 dark:text-gray-600">|</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{ra.readTime}</span>
                        </div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-[#1B7A4E] transition-colors">
                          {ra.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{ra.excerpt}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </article>

          <aside className="hidden lg:block w-[300px] flex-shrink-0">
            <div className="sticky top-8 space-y-6">
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                    <span className="font-bold text-gray-900 dark:text-white text-sm">Trustpilot</span>
                  </div>
                  <button
                    onClick={handleScheduleCall}
                    className="px-4 py-2 bg-[#1B7A4E] text-white text-xs font-bold rounded-lg hover:bg-[#156B3F] transition-colors uppercase tracking-wide"
                  >
                    Become a Client
                  </button>
                </div>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-6 h-6 bg-[#00b67a] flex items-center justify-center">
                      <Star className="w-3.5 h-3.5 fill-white text-white" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  TrustScore <span className="font-bold">4.8</span>{' '}
                  <a
                    href="https://pt.trustpilot.com/review/www.getsecondpassport.eu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-gray-900 dark:text-white hover:underline"
                  >
                    190 reviews
                  </a>
                </p>
              </div>

              {tocSections.length > 0 && (
                <DesktopTOC sections={tocSections} activeSection={activeSection} onSectionClick={scrollToSection} />
              )}

              {article.tags && article.tags.length > 0 && (
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm">
                  <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-widest">
                    Topics
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>

      {tocSections.length > 0 && (
        <MobileTOC sections={tocSections} activeSection={activeSection} onSectionClick={scrollToSection} />
      )}

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-[#1B7A4E] text-white rounded-full shadow-lg hover:bg-[#156B3F] transition-all duration-200 hover:scale-110 flex items-center justify-center"
          aria-label="Back to top"
        >
          <ChevronUp size={22} />
        </button>
      )}
    </div>
  );
}
