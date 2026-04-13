import { useEffect, useState, useCallback, useMemo } from 'react';
import { ChevronRight, ArrowRight, Calendar, Clock, BookOpen, ChevronUp, Share2, Twitter, Linkedin, Link2 } from 'lucide-react';
import { blogPosts, BlogPost } from '../data/blogPosts';

interface BlogPostPageProps {
  onScheduleCall?: () => void;
}

type ParsedBlock =
  | { type: 'h2'; id: string; title: string }
  | { type: 'h3'; id: string; title: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'callout'; text: string };

// ─── DESKTOP TABLE OF CONTENTS ───────────────────────────────────────────────
function DesktopTOC({
  sections,
  activeSection,
  onSectionClick,
}: {
  sections: Array<{ id: string; title: string; level: number; numberLabel: string }>;
  activeSection: string;
  onSectionClick: (id: string) => void;
}) {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-none p-6 shadow-sm" style={{borderTop: '3px solid #1B7A4E'}}>
      <h4
        className="text-xs font-bold text-gray-900 dark:text-white mb-5 uppercase tracking-[0.2em]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        In This Article
      </h4>
      <nav className="space-y-0.5">
        {sections.map((section) => {
          const isH2 = section.level === 2;
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => onSectionClick(section.id)}
              className={`w-full text-left py-2 transition-all duration-200 flex items-start gap-3 border-l-2 ${
                isH2 ? 'pl-3' : 'pl-7'
              } ${
                isActive
                  ? 'border-[#1B7A4E] text-[#1B7A4E] dark:text-[#4a9d7d]'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300'
              }`}
            >
              <span
                className={`flex-1 leading-snug text-left ${
                  isH2 ? 'text-[13px] font-semibold' : 'text-[12px] font-normal'
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {section.title}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

// ─── MOBILE TABLE OF CONTENTS ────────────────────────────────────────────────
function MobileTOC({
  sections,
  activeSection,
  onSectionClick,
}: {
  sections: Array<{ id: string; title: string; level: number; numberLabel: string }>;
  activeSection: string;
  onSectionClick: (id: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const current = sections.find((s) => s.id === activeSection);

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40">
      {isOpen && (
        <div className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-2xl max-h-[60vh] overflow-y-auto">
          <div className="p-4 space-y-0.5">
            {sections.map((section) => {
              const isH2 = section.level === 2;
              return (
                <button
                  key={section.id}
                  onClick={() => {
                    onSectionClick(section.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left text-sm py-2.5 transition-all flex items-start gap-3 border-l-2 ${
                    isH2 ? 'pl-4' : 'pl-10'
                  } ${
                    activeSection === section.id
                      ? 'border-[#1B7A4E] text-[#1B7A4E] font-semibold'
                      : 'border-transparent text-gray-600 dark:text-gray-400'
                  }`}
                >
                  <span>{section.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white dark:bg-gray-900 border-t-2 border-[#1B7A4E] shadow-lg px-4 py-3 flex items-center justify-between"
      >
        <div className="flex items-center gap-2 text-sm">
          <BookOpen size={16} className="text-[#1B7A4E]" />
          <span className="text-gray-700 dark:text-gray-300 truncate max-w-[250px] font-semibold" style={{fontFamily:"'Inter',sans-serif"}}>
            {current?.title || 'In This Article'}
          </span>
        </div>
        <ChevronUp size={18} className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
}

// ─── SHARE BUTTONS ────────────────────────────────────────────────────────────
function ShareButtons({ title }: { title: string }) {
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mr-1" style={{fontFamily:"'Inter',sans-serif"}}>Share</span>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-3 py-1.5 bg-black text-white text-xs font-semibold rounded hover:bg-gray-800 transition-colors"
        style={{fontFamily:"'Inter',sans-serif"}}
      >
        <Twitter size={13} /> X
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0077b5] text-white text-xs font-semibold rounded hover:bg-[#006097] transition-colors"
        style={{fontFamily:"'Inter',sans-serif"}}
      >
        <Linkedin size={13} /> LinkedIn
      </a>
      <button
        onClick={copyLink}
        className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        style={{fontFamily:"'Inter',sans-serif"}}
      >
        <Link2 size={13} />
        {copied ? 'Copied!' : 'Copy link'}
      </button>
    </div>
  );
}

// ─── INLINE FORMATTING ───────────────────────────────────────────────────────
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

// ─── CONTENT PARSING HELPERS ─────────────────────────────────────────────────
function makeId(text: string): string {
  return text
    .toLowerCase()
    .replace(/^#+\s*/, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function stripHeadingPrefix(text: string): string {
  return text.replace(/^##\s+/, '').replace(/^#\s+/, '').trim();
}

function isMarkdownH2(line: string): boolean {
  return /^#\s+/.test(line.trim()) && !/^##\s+/.test(line.trim());
}

function isMarkdownH3(line: string): boolean {
  return /^##\s+/.test(line.trim());
}

function isMarkdownBullet(line: string): boolean {
  return /^[-*]\s+/.test(line.trim());
}

function isOrderedListItem(line: string): boolean {
  return /^\d+\.\s+.+/.test(line.trim());
}

function isTableRow(line: string): boolean {
  const trimmed = line.trim();
  return trimmed.startsWith('|') && trimmed.endsWith('|') && trimmed.includes('|');
}

function isTableDivider(line: string): boolean {
  const cells = line
    .trim()
    .split('|')
    .map((c) => c.trim())
    .filter(Boolean);
  if (cells.length === 0) return false;
  return cells.every((cell) => /^:?-{3,}:?$/.test(cell));
}

function parseTableRow(line: string): string[] {
  return line
    .trim()
    .split('|')
    .map((cell) => cell.trim())
    .filter(Boolean);
}

function isCallout(line: string): boolean {
  return line.trim().startsWith('>!');
}

function isPlainBulletCandidate(line: string): boolean {
  const trimmed = line.trim();
  if (!trimmed) return false;
  if (trimmed.length > 95) return false;
  if (trimmed.endsWith('.')) return false;
  if (trimmed.endsWith(':')) return false;
  if (isMarkdownH2(trimmed) || isMarkdownH3(trimmed)) return false;
  if (isOrderedListItem(trimmed)) return false;
  if (isTableRow(trimmed)) return false;
  if (isCallout(trimmed)) return false;
  if (isMarkdownBullet(trimmed)) return true;
  return true;
}

// ─── CONTENT PARSER ──────────────────────────────────────────────────────────
function parseContent(content: string): ParsedBlock[] {
  const lines = content.split('\n');
  const blocks: ParsedBlock[] = [];
  let i = 0;
  let skippedTitle = false;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (!line) { i++; continue; }

    if (!skippedTitle) { skippedTitle = true; i++; continue; }

    if (isMarkdownH2(line)) {
      const title = stripHeadingPrefix(line);
      blocks.push({ type: 'h2', id: makeId(title), title });
      i++;
      continue;
    }

    if (isMarkdownH3(line)) {
      const title = stripHeadingPrefix(line);
      blocks.push({ type: 'h3', id: makeId(title), title });
      i++;
      continue;
    }

    if (isCallout(line)) {
      const text = line.replace(/^>!\s*/, '').trim();
      blocks.push({ type: 'callout', text });
      i++;
      continue;
    }

    if (isTableRow(line)) {
      const header = parseTableRow(line);
      const divider = lines[i + 1]?.trim() || '';
      if (isTableDivider(divider)) {
        const rows: string[][] = [];
        let j = i + 2;
        while (j < lines.length && isTableRow(lines[j].trim())) {
          rows.push(parseTableRow(lines[j].trim()));
          j++;
        }
        blocks.push({ type: 'table', headers: header, rows });
        i = j;
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
    if ((prevBlock?.type === 'h2' || prevBlock?.type === 'h3') && isPlainBulletCandidate(line)) {
      const items: string[] = [];
      let j = i;
      while (j < lines.length) {
        const candidate = lines[j].trim();
        if (!candidate) break;
        if (!isPlainBulletCandidate(candidate)) break;
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
      if (isMarkdownH2(next) || isMarkdownH3(next)) break;
      if (isMarkdownBullet(next)) break;
      if (isOrderedListItem(next)) break;
      if (isTableRow(next)) break;
      if (isCallout(next)) break;
      paragraph += ` ${next}`;
      j++;
    }

    blocks.push({ type: 'p', text: paragraph });
    i = j;
  }

  return blocks;
}

// ─── AUTHOR INITIALS ─────────────────────────────────────────────────────────
function getInitials(name: string): string {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
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
    let h2Counter = 0;
    let h3Counter = 0;
    return parsedBlocks
      .filter(
        (block): block is Extract<ParsedBlock, { type: 'h2' | 'h3' }> =>
          block.type === 'h2' || block.type === 'h3'
      )
      .map((block) => {
        if (block.type === 'h2') {
          h2Counter += 1;
          h3Counter = 0;
          return { id: block.id, title: block.title, level: 2, numberLabel: `${h2Counter}` };
        }
        h3Counter += 1;
        return { id: block.id, title: block.title, level: 3, numberLabel: `${h2Counter}.${h3Counter}` };
      });
  }, [parsedBlocks]);

  useEffect(() => {
    if (!article) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActiveSection(visible[0].target.id);
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );
    const timer = setTimeout(() => {
      document.querySelectorAll('[data-section-id]').forEach((el) => observer.observe(el));
    }, 100);
    return () => { clearTimeout(timer); observer.disconnect(); };
  }, [article, parsedBlocks]);

  const scrollToSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleScheduleCall = () => {
    const event = new CustomEvent('openScheduleModal');
    window.dispatchEvent(event);
  };

  // ─── RENDER CONTENT ────────────────────────────────────────────────────────
  const renderContent = () => {
    let paragraphCount = 0;

    return parsedBlocks.map((block, idx) => {

      // H2 — newspaper section heading
      if (block.type === 'h2') {
        return (
          <h2
            key={`h2-${idx}`}
            id={block.id}
            data-section-id={block.id}
            className="text-[26px] sm:text-[30px] font-black text-gray-900 dark:text-white mt-14 mb-5 leading-tight scroll-mt-24"
            style={{
              fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
              borderBottom: '2px solid #e5e7eb',
              paddingBottom: '0.6rem',
            }}
          >
            {renderInlineFormatting(block.title)}
          </h2>
        );
      }

      // H3 — newspaper sub-heading
      if (block.type === 'h3') {
        return (
          <h3
            key={`h3-${idx}`}
            id={block.id}
            data-section-id={block.id}
            className="text-[20px] sm:text-[22px] font-bold text-[#1B7A4E] dark:text-[#4a9d7d] mt-10 mb-4 scroll-mt-24 leading-snug uppercase tracking-wide"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', letterSpacing: '0.12em' }}
          >
            {renderInlineFormatting(block.title)}
          </h3>
        );
      }

      // CALLOUT — editorial pull quote style
      if (block.type === 'callout') {
        return (
          <blockquote
            key={`callout-${idx}`}
            className="my-10 relative"
            style={{
              borderLeft: '4px solid #1B7A4E',
              paddingLeft: '1.5rem',
              paddingTop: '0.25rem',
              paddingBottom: '0.25rem',
            }}
          >
            <p
              className="text-[19px] leading-[1.75] text-gray-700 dark:text-gray-200 italic"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic' }}
            >
              {renderInlineFormatting(block.text)}
            </p>
          </blockquote>
        );
      }

      // UNORDERED LIST
      if (block.type === 'ul') {
        return (
          <ul key={`ul-${idx}`} className="mb-8 space-y-3 pl-0">
            {block.items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 leading-[1.8] text-gray-700 dark:text-gray-300"
                style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '18px' }}
              >
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#1B7A4E] mt-[11px]" />
                <span>{renderInlineFormatting(item)}</span>
              </li>
            ))}
          </ul>
        );
      }

      // ORDERED LIST
      if (block.type === 'ol') {
        return (
          <ol key={`ol-${idx}`} className="mb-8 space-y-3 pl-0">
            {block.items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-4 leading-[1.8] text-gray-700 dark:text-gray-300"
                style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '18px' }}
              >
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1B7A4E]/10 text-[#1B7A4E] dark:text-[#4a9d7d] flex items-center justify-center text-sm font-bold mt-[3px]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {i + 1}
                </span>
                <span className="flex-1">{renderInlineFormatting(item)}</span>
              </li>
            ))}
          </ol>
        );
      }

      // TABLE — editorial data table
      if (block.type === 'table') {
        return (
          <div
            key={`table-${idx}`}
            className="mb-10 overflow-x-auto"
            style={{ borderTop: '3px solid #1B7A4E', borderBottom: '1px solid #e5e7eb' }}
          >
            <table className="min-w-full border-collapse bg-white dark:bg-gray-900 text-sm">
              <thead>
                <tr style={{ background: '#f8f8f6' }}>
                  {block.headers.map((header, i) => (
                    <th
                      key={i}
                      className="px-5 py-3 text-left text-gray-900 dark:text-white whitespace-nowrap border-b border-gray-200 dark:border-gray-700"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    {row.map((cell, cIdx) => (
                      <td
                        key={cIdx}
                        className="px-5 py-3.5 align-top text-gray-700 dark:text-gray-300"
                        style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '16px' }}
                      >
                        {renderInlineFormatting(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }

      // PARAGRAPH — serif body text, NYT-style
      paragraphCount++;
      const isFirstParagraph = paragraphCount === 1;

      return (
        <p
          key={`p-${idx}`}
          className={`mb-7 text-gray-800 dark:text-gray-200 leading-[1.9] ${
            isFirstParagraph
              ? 'first-letter:text-[64px] first-letter:font-black first-letter:text-[#1B7A4E] first-letter:float-left first-letter:mr-3 first-letter:mt-0 first-letter:leading-[0.85]'
              : ''
          }`}
          style={{
            fontFamily: "'Source Serif 4', Georgia, 'Times New Roman', serif",
            fontSize: '18.5px',
            lineHeight: '1.85',
          }}
        >
          {renderInlineFormatting(block.text)}
        </p>
      );
    });
  };

  // ─── LOADING STATE ────────────────────────────────────────────────────────
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-[#1B7A4E] border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-500 dark:text-gray-400" style={{fontFamily:"'Inter',sans-serif"}}>Loading article...</p>
        </div>
      </div>
    );
  }

  // ─── NOT FOUND STATE ──────────────────────────────────────────────────────
  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-10 h-10 text-gray-400" />
          </div>
          <h1
            className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
            style={{fontFamily:"'Playfair Display', Georgia, serif"}}
          >
            Article Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6" style={{fontFamily:"'Inter',sans-serif"}}>
            The article you are looking for does not exist or may have been moved.
          </p>
          <a
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B7A4E] text-white rounded font-semibold hover:bg-[#156B3F] transition-colors"
            style={{fontFamily:"'Inter',sans-serif"}}
          >
            ← Back to Articles
          </a>
        </div>
      </div>
    );
  }

  // ─── MAIN RENDER ──────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">

      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-gray-200/50 dark:bg-gray-800/50">
        <div
          className="h-full bg-[#1B7A4E] transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* ── HERO IMAGE (with image) ─────────────────────────────────────── */}
      {article.image && (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[460px] overflow-hidden">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10" />

          {/* Breadcrumb */}
          <div className="absolute top-0 left-0 right-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
              <div className="flex items-center flex-wrap gap-1 text-sm text-white/70" style={{fontFamily:"'Inter',sans-serif"}}>
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <ChevronRight size={14} className="text-white/40" />
                <a href="/blog" className="hover:text-white transition-colors">Articles</a>
                <ChevronRight size={14} className="text-white/40" />
                <span className="text-white/90">{article.category}</span>
              </div>
            </div>
          </div>

          {/* Title block on image */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
              <div className="max-w-4xl">
                {/* Category label */}
                <div className="mb-4">
                  <span
                    className="inline-block px-3 py-1 bg-[#1B7A4E] text-white text-xs font-bold uppercase tracking-widest"
                    style={{fontFamily:"'Inter',sans-serif"}}
                  >
                    {article.category}
                  </span>
                </div>

                {/* Headline */}
                <h1
                  className="text-3xl sm:text-4xl lg:text-[48px] font-black text-white leading-[1.08] tracking-tight mb-5"
                  style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}
                >
                  {article.title}
                </h1>

                {/* Author + meta row */}
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1B7A4E] to-[#2E8B57] flex items-center justify-center text-white font-bold text-[13px] flex-shrink-0" style={{fontFamily:"'Inter',sans-serif"}}>
                    {getInitials(article.author)}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm leading-none" style={{fontFamily:"'Inter',sans-serif"}}>{article.author}</p>
                    <p className="text-white/60 text-xs mt-1" style={{fontFamily:"'Inter',sans-serif"}}>
                      {article.publishDate} &nbsp;·&nbsp; {article.readTime}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── HERO (no image) ────────────────────────────────────────────── */}
      {!article.image && (
        <div
          className="border-b border-gray-200 dark:border-gray-800"
          style={{ background: '#fafaf8' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Breadcrumb */}
            <div className="flex items-center flex-wrap gap-1 text-sm text-gray-500 dark:text-gray-400 mb-6" style={{fontFamily:"'Inter',sans-serif"}}>
              <a href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">Home</a>
              <ChevronRight size={14} />
              <a href="/blog" className="hover:text-gray-900 dark:hover:text-white transition-colors">Articles</a>
              <ChevronRight size={14} />
              <span className="text-gray-900 dark:text-white font-medium">{article.category}</span>
            </div>

            {/* Category label */}
            <div className="mb-4">
              <span
                className="inline-block px-3 py-1 bg-[#1B7A4E] text-white text-xs font-bold uppercase tracking-widest"
                style={{fontFamily:"'Inter',sans-serif"}}
              >
                {article.category}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-3xl sm:text-4xl lg:text-[52px] font-black text-gray-900 dark:text-white leading-[1.08] tracking-tight max-w-4xl mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}
            >
              {article.title}
            </h1>

            {/* Author + meta row */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1B7A4E] to-[#2E8B57] flex items-center justify-center text-white font-bold text-[13px] flex-shrink-0" style={{fontFamily:"'Inter',sans-serif"}}>
                {getInitials(article.author)}
              </div>
              <div>
                <p className="text-gray-900 dark:text-white font-semibold text-sm leading-none" style={{fontFamily:"'Inter',sans-serif"}}>{article.author}</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-1" style={{fontFamily:"'Inter',sans-serif"}}>
                  {article.publishDate} &nbsp;·&nbsp; {article.readTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── EXCERPT / STANDFIRST ───────────────────────────────────────── */}
      <div className="border-b border-gray-200 dark:border-gray-800" style={{background:'#fff'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-3xl flex flex-col sm:flex-row sm:items-start gap-6">
            <p
              className="flex-1 text-[19px] text-gray-700 dark:text-gray-300 leading-relaxed italic"
              style={{
                fontFamily: "'Source Serif 4', Georgia, serif",
                borderLeft: '4px solid #1B7A4E',
                paddingLeft: '1.25rem',
              }}
            >
              {article.excerpt}
            </p>
            {/* Share buttons */}
            <div className="flex-shrink-0 pt-1">
              <ShareButtons title={article.title} />
            </div>
          </div>
        </div>
      </div>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="flex gap-12 lg:gap-16">

          {/* Main article column */}
          <article className="flex-1 min-w-0 max-w-[720px]">
            <div className="article-content">
              {renderContent()}
            </div>

            {/* Share row after article */}
            <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800">
              <ShareButtons title={article.title} />
            </div>

            {/* CTA block */}
            <div
              className="mt-12 p-8 sm:p-10 text-center"
              style={{
                background: 'linear-gradient(135deg, #0f3460 0%, #1a4a8a 100%)',
                borderTop: '4px solid #1B7A4E',
              }}
            >
              <h3
                className="text-2xl sm:text-3xl font-black text-white mb-3"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Ready to Take the Next Step?
              </h3>
              <p
                className="text-white/80 text-lg mb-6 max-w-lg mx-auto"
                style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}
              >
                Schedule a free consultation with our expert team and start your journey today.
              </p>
              <button
                onClick={handleScheduleCall}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0f3460] font-bold hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg text-base"
                style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.05em' }}
              >
                SCHEDULE A FREE CALL
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Author bio */}
            <div className="mt-10 flex items-center gap-5 p-6 border border-gray-200 dark:border-gray-800" style={{borderTop:'3px solid #1B7A4E'}}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1B7A4E] to-[#2E8B57] flex items-center justify-center text-white font-bold text-xl flex-shrink-0" style={{fontFamily:"'Inter',sans-serif"}}>
                {getInitials(article.author)}
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1" style={{fontFamily:"'Inter',sans-serif"}}>Written by</p>
                <h4 className="font-black text-gray-900 dark:text-white text-lg" style={{fontFamily:"'Playfair Display',Georgia,serif"}}>{article.author}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1" style={{fontFamily:"'Source Serif 4',Georgia,serif"}}>
                  Expert insights on global mobility, residency, and citizenship planning.
                </p>
              </div>
            </div>

            {/* Related articles */}
            {relatedArticles.length > 0 && (
              <div className="mt-14 pt-10 border-t border-gray-200 dark:border-gray-800">
                <h3
                  className="text-2xl font-black text-gray-900 dark:text-white mb-8"
                  style={{fontFamily:"'Playfair Display',Georgia,serif"}}
                >
                  Continue Reading
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedArticles.map((ra) => (
                    <a
                      key={ra.id}
                      href={`/blog/${ra.slug}`}
                      className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      style={{borderTop:'3px solid transparent'}}
                      onMouseEnter={e => (e.currentTarget.style.borderTopColor='#1B7A4E')}
                      onMouseLeave={e => (e.currentTarget.style.borderTopColor='transparent')}
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
                          <span
                            className="text-[11px] font-bold text-[#1B7A4E] uppercase tracking-widest"
                            style={{fontFamily:"'Inter',sans-serif"}}
                          >
                            {ra.category}
                          </span>
                          <span className="text-gray-300 dark:text-gray-600">·</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400" style={{fontFamily:"'Inter',sans-serif"}}>{ra.readTime}</span>
                        </div>
                        <h4
                          className="font-black text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-[#1B7A4E] transition-colors leading-tight"
                          style={{fontFamily:"'Playfair Display',Georgia,serif", fontSize:'17px'}}
                        >
                          {ra.title}
                        </h4>
                        <p
                          className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2"
                          style={{fontFamily:"'Source Serif 4',Georgia,serif"}}
                        >
                          {ra.excerpt}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block w-[280px] flex-shrink-0">
            <div className="sticky top-8 space-y-5">

              {/* Become a client */}
              <div
                className="p-6 border border-gray-200 dark:border-gray-800"
                style={{borderTop:'3px solid #1B7A4E'}}
              >
                <h4
                  className="text-xs font-black uppercase tracking-widest text-gray-900 dark:text-white mb-3"
                  style={{fontFamily:"'Inter',sans-serif"}}
                >
                  Work With Us
                </h4>
                <p
                  className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed"
                  style={{fontFamily:"'Source Serif 4',Georgia,serif"}}
                >
                  Speak with our team about residency and citizenship options tailored to your situation.
                </p>
                <button
                  onClick={handleScheduleCall}
                  className="w-full px-4 py-3 bg-[#1B7A4E] text-white text-xs font-black uppercase tracking-widest hover:bg-[#156B3F] transition-colors"
                  style={{fontFamily:"'Inter',sans-serif"}}
                >
                  Book a Free Call
                </button>
              </div>

              {/* Table of contents */}
              {tocSections.length > 0 && (
                <DesktopTOC
                  sections={tocSections}
                  activeSection={activeSection}
                  onSectionClick={scrollToSection}
                />
              )}

              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div
                  className="p-6 border border-gray-200 dark:border-gray-800"
                  style={{borderTop:'3px solid #e5e7eb'}}
                >
                  <h4
                    className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3"
                    style={{fontFamily:"'Inter',sans-serif"}}
                  >
                    Topics
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium"
                        style={{fontFamily:"'Inter',sans-serif"}}
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

      {/* Mobile TOC */}
      {tocSections.length > 0 && (
        <MobileTOC sections={tocSections} activeSection={activeSection} onSectionClick={scrollToSection} />
      )}

      {/* Back to top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 lg:bottom-6 right-6 z-40 w-10 h-10 bg-[#1B7A4E] text-white shadow-lg hover:bg-[#156B3F] transition-all duration-200 hover:scale-110 flex items-center justify-center"
          aria-label="Back to top"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </div>
  );
}
