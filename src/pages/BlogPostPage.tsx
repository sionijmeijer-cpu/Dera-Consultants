import { useEffect, useState, useCallback, useMemo } from 'react';
import { ChevronRight, ArrowRight, Calendar, Clock, BookOpen, ChevronUp } from 'lucide-react';
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
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm">
      <h4 className="text-xs font-bold text-gray-900 dark:text-white mb-5 uppercase tracking-[0.15em]">
        TABLE OF CONTENTS
      </h4>

      <nav className="space-y-1">
        {sections.map((section) => {
          const isH2 = section.level === 2;
          const isActive = activeSection === section.id;

          return (
            <button
              key={section.id}
              onClick={() => onSectionClick(section.id)}
              className={`w-full text-left py-2.5 rounded-lg transition-all duration-200 flex items-start gap-3 ${
                isH2 ? 'px-2' : 'pl-10 pr-2'
              } ${
                isActive
                  ? 'text-[#1B7A4E] dark:text-[#4a9d7d] font-semibold'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              <span
                className={`flex-shrink-0 min-w-[2rem] h-7 rounded-full border flex items-center justify-center text-xs font-bold transition-colors px-2 ${
                  isActive
                    ? 'border-[#1B7A4E] text-[#1B7A4E] bg-[#1B7A4E]/5'
                    : 'border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500'
                } ${isH2 ? '' : 'text-[11px]'}`}
              >
                {section.numberLabel}
              </span>

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
          <div className="p-4 space-y-1">
            {sections.map((section) => {
              const isH2 = section.level === 2;

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
                  <span className="flex-shrink-0 min-w-[2rem] h-6 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center text-[11px] font-bold px-2">
                    {section.numberLabel}
                  </span>

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

function parseContent(content: string): ParsedBlock[] {
  const lines = content.split('\n');
  const blocks: ParsedBlock[] = [];

  let i = 0;
  let skippedTitle = false;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (!line) {
      i++;
      continue;
    }

    if (!skippedTitle) {
      skippedTitle = true;
      i++;
      continue;
    }

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

        blocks.push({
          type: 'table',
          headers: header,
          rows,
        });

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
          return {
            id: block.id,
            title: block.title,
            level: 2,
            numberLabel: `${h2Counter}`,
          };
        }

        h3Counter += 1;
        return {
          id: block.id,
          title: block.title,
          level: 3,
          numberLabel: `${h2Counter}.${h3Counter}`,
        };
      });
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

      if (block.type === 'callout') {
        return (
          <div
            key={`callout-${idx}`}
            className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 shadow-sm dark:border-amber-900/40 dark:bg-amber-950/20"
          >
            <p className="text-[16px] leading-[1.8] text-amber-900 dark:text-amber-100 italic font-medium">
              {renderInlineFormatting(block.text)}
            </p>
          </div>
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

      if (block.type === 'table') {
        return (
          <div
            key={`table-${idx}`}
            className="mb-10 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm"
          >
            <table className="min-w-full border-collapse bg-white dark:bg-gray-900 text-sm">
              <thead className="bg-[#0f3460] text-white">
                <tr>
                  {block.headers.map((header, i) => (
                    <th key={i} className="px-4 py-3 text-left font-semibold whitespace-nowrap">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    className="border-t border-gray-200 dark:border-gray-800 odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-950/40"
                  >
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-4 py-3 align-top text-gray-700 dark:text-gray-300">
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
          <div clas
