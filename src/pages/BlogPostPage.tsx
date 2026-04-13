import { useEffect, useState, useCallback, useMemo } from 'react';
import { ChevronRight, ArrowRight, BookOpen, ChevronUp, Twitter, Linkedin, Link2 } from 'lucide-react';
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

function getInitials(name: string) {
  return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
}

// ─── DESKTOP TOC ─────────────────────────────────────────────────────────────
function DesktopTOC({
  sections, activeSection, onSectionClick,
}: {
  sections: Array<{ id: string; title: string; level: number }>;
  activeSection: string;
  onSectionClick: (id: string) => void;
}) {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-5" style={{ borderTop: '3px solid #1B7A4E' }}>
      <h4 className="text-[10px] font-black text-gray-900 dark:text-white mb-4 uppercase tracking-[0.2em]" style={{ fontFamily: "'Inter', sans-serif" }}>
        In This Article
      </h4>
      <nav className="space-y-0">
        {sections.map((s) => {
          const isH2     = s.level === 2;
          const isActive = activeSection === s.id;
          return (
            <button
              key={s.id}
              onClick={() => onSectionClick(s.id)}
              className={`w-full text-left py-2 transition-all flex items-start border-l-2 ${isH2 ? 'pl-3' : 'pl-7'} ${
                isActive
                  ? 'border-[#1B7A4E] text-[#1B7A4E]'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 hover:border-gray-300'
              }`}
            >
              <span className={`flex-1 leading-snug text-left ${isH2 ? 'text-[12px] font-bold' : 'text-[11px]'}`} style={{ fontFamily: "'Inter', sans-serif" }}>
                {s.title}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

// ─── MOBILE TOC ──────────────────────────────────────────────────────────────
function MobileTOC({
  sections, activeSection, onSectionClick,
}: {
  sections: Array<{ id: string; title: string; level: number }>;
  activeSection: string;
  onSectionClick: (id: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const current = sections.find(s => s.id === activeSection);
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40">
      {isOpen && (
        <div className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-2xl max-h-[60vh] overflow-y-auto">
          <div className="p-4 space-y-0">
            {sections.map(s => (
              <button
                key={s.id}
                onClick={() => { onSectionClick(s.id); setIsOpen(false); }}
                className={`w-full text-left text-sm py-2.5 transition-all flex items-start border-l-2 ${s.level === 2 ? 'pl-4' : 'pl-10'} ${activeSection === s.id ? 'border-[#1B7A4E] text-[#1B7A4E] font-bold' : 'border-transparent text-gray-600'}`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white dark:bg-gray-900 border-t-2 border-[#1B7A4E] shadow-lg px-4 py-3 flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <BookOpen size={15} className="text-[#1B7A4E]" />
          <span className="text-gray-700 text-sm font-bold truncate max-w-[250px]" style={{ fontFamily: "'Inter', sans-serif" }}>
            {current?.title || 'In This Article'}
          </span>
        </div>
        <ChevronUp size={16} className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
}

// ─── SHARE BUTTONS ────────────────────────────────────────────────────────────
function ShareButtons({ title }: { title: string }) {
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>Share</span>
      <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-3 py-1.5 bg-black text-white text-[11px] font-bold hover:bg-gray-800 transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
        <Twitter size={12} /> X
      </a>
      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0077b5] text-white text-[11px] font-bold hover:bg-[#006097] transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
        <Linkedin size={12} /> LinkedIn
      </a>
      <button onClick={copy}
        className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-[11px] font-bold hover:bg-gray-200 transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
        <Link2 size={12} /> {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
}

// ─── INLINE FORMATTING ───────────────────────────────────────────────────────
function renderInline(text: string): React.ReactNode[] {
  const regex = /(\*\*\*(.+?)\*\*\*|\*\*(.+?)\*\*|\*(.+?)\*)/g;
  const result: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) result.push(<span key={`t-${lastIndex}`}>{text.slice(lastIndex, match.index)}</span>);
    if (match[2]) result.push(<strong key={`bi-${match.index}`} className="font-bold italic">{match[2]}</strong>);
    else if (match[3]) result.push(<strong key={`b-${match.index}`} className="font-bold text-gray-900 dark:text-white">{match[3]}</strong>);
    else if (match[4]) result.push(<em key={`i-${match.index}`} className="italic">{match[4]}</em>);
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) result.push(<span key={`t-${lastIndex}`}>{text.slice(lastIndex)}</span>);
  return result.length > 0 ? result : [<span key="full">{text}</span>];
}

// ─── PARSING HELPERS ─────────────────────────────────────────────────────────
const makeId = (t: string) => t.toLowerCase().replace(/^#+\s*/,'').replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
const stripH  = (t: string) => t.replace(/^##\s+/,'').replace(/^#\s+/,'').trim();
const isH2    = (l: string) => /^#\s+/.test(l.trim()) && !/^##\s+/.test(l.trim());
const isH3    = (l: string) => /^##\s+/.test(l.trim());
const isBullet= (l: string) => /^[-*]\s+/.test(l.trim());
const isOL    = (l: string) => /^\d+\.\s+.+/.test(l.trim());
const isTable = (l: string) => { const t = l.trim(); return t.startsWith('|') && t.endsWith('|') && t.includes('|'); };
const isDivider=(l: string) => { const c = l.trim().split('|').map(x=>x.trim()).filter(Boolean); return c.length>0 && c.every(x=>/^:?-{3,}:?$/.test(x)); };
const parseRow = (l: string) => l.trim().split('|').map(c=>c.trim()).filter(Boolean);
const isCallout=(l: string) => l.trim().startsWith('>!');

function isPlainBullet(l: string) {
  const t = l.trim();
  if (!t || t.length>95 || t.endsWith('.') || t.endsWith(':')) return false;
  if (isH2(t) || isH3(t) || isOL(t) || isTable(t) || isCallout(t)) return false;
  return true;
}

function parseContent(content: string): ParsedBlock[] {
  const lines = content.split('\n');
  const blocks: ParsedBlock[] = [];
  let i = 0;
  let skippedTitle = false;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) { i++; continue; }
    if (!skippedTitle) { skippedTitle = true; i++; continue; }
    if (isH2(line))      { blocks.push({ type:'h2', id:makeId(stripH(line)), title:stripH(line) }); i++; continue; }
    if (isH3(line))      { blocks.push({ type:'h3', id:makeId(stripH(line)), title:stripH(line) }); i++; continue; }
    if (isCallout(line)) { blocks.push({ type:'callout', text:line.replace(/^>!\s*/,'').trim() }); i++; continue; }
    if (isTable(line)) {
      const header = parseRow(line);
      if (isDivider(lines[i+1]?.trim()||'')) {
        const rows: string[][] = [];
        let j = i+2;
        while (j < lines.length && isTable(lines[j].trim())) { rows.push(parseRow(lines[j].trim())); j++; }
        blocks.push({ type:'table', headers:header, rows });
        i = j; continue;
      }
    }
    if (isBullet(line)) {
      const items: string[] = [];
      while (i < lines.length && isBullet(lines[i])) { items.push(lines[i].trim().replace(/^[-*]\s+/,'')); i++; }
      blocks.push({ type:'ul', items }); continue;
    }
    if (isOL(line)) {
      const items: string[] = [];
      let j = i;
      while (j < lines.length && isOL(lines[j].trim())) { items.push(lines[j].trim().replace(/^\d+\.\s+/,'')); j++; }
      if (items.length >= 2) { blocks.push({ type:'ol', items }); i = j; continue; }
    }
    const prev = blocks[blocks.length-1];
    if ((prev?.type==='h2'||prev?.type==='h3') && isPlainBullet(line)) {
      const items: string[] = [];
      let j = i;
      while (j < lines.length && lines[j].trim() && isPlainBullet(lines[j].trim())) {
        items.push(lines[j].trim().replace(/^[-*]\s+/,'')); j++;
      }
      if (items.length >= 2) { blocks.push({ type:'ul', items }); i = j; continue; }
    }
    let para = line;
    let j = i+1;
    while (j < lines.length) {
      const next = lines[j].trim();
      if (!next || isH2(next) || isH3(next) || isBullet(next) || isOL(next) || isTable(next) || isCallout(next)) break;
      para += ` ${next}`; j++;
    }
    blocks.push({ type:'p', text:para }); i = j;
  }
  return blocks;
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function BlogPostPage({ onScheduleCall }: BlogPostPageProps) {
  const [article, setArticle]           = useState<BlogPost | null>(null);
  const [relatedArticles, setRelated]   = useState<BlogPost[]>([]);
  const [activeSection, setActive]      = useState('');
  const [isLoading, setLoading]         = useState(true);
  const [readingProgress, setProgress]  = useState(0);
  const [showBackToTop, setShowBTT]     = useState(false);

  useEffect(() => {
    const slug = window.location.pathname.split('/blog/')[1];
    const found = blogPosts.find(p => p.slug === slug);
    if (found) {
      setArticle(found);
      setRelated(blogPosts.filter(p => p.category === found.category && p.id !== found.id).slice(0, 3));
    }
    setLoading(false);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(Math.min((window.scrollY / total) * 100, 100));
      setShowBTT(window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const parsedBlocks = useMemo(() => article ? parseContent(article.content) : [], [article]);

  const tocSections = useMemo(() => {
    let h2c = 0, h3c = 0;
    return parsedBlocks
      .filter((b): b is Extract<ParsedBlock,{type:'h2'|'h3'}> => b.type==='h2'||b.type==='h3')
      .map(b => {
        if (b.type==='h2') { h2c++; h3c=0; return { id:b.id, title:b.title, level:2, numberLabel:`${h2c}` }; }
        h3c++; return { id:b.id, title:b.title, level:3, numberLabel:`${h2c}.${h3c}` };
      });
  }, [parsedBlocks]);

  useEffect(() => {
    if (!article) return;
    const obs = new IntersectionObserver(
      entries => { const v = entries.filter(e=>e.isIntersecting); if (v.length>0) setActive(v[0].target.id); },
      { rootMargin:'-80px 0px -60% 0px', threshold:0 }
    );
    const t = setTimeout(() => { document.querySelectorAll('[data-section-id]').forEach(el=>obs.observe(el)); }, 100);
    return () => { clearTimeout(t); obs.disconnect(); };
  }, [article, parsedBlocks]);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior:'smooth' });
  }, []);

  const handleScheduleCall = () => window.dispatchEvent(new CustomEvent('openScheduleModal'));

  // ─── RENDER CONTENT ────────────────────────────────────────────────────────
  const renderContent = () => {
    let pCount = 0;
    return parsedBlocks.map((block, idx) => {

      if (block.type === 'h2') return (
        <h2
          key={`h2-${idx}`} id={block.id} data-section-id={block.id}
          className="text-[26px] sm:text-[30px] font-black text-gray-900 dark:text-white mt-14 mb-5 leading-tight scroll-mt-24"
          style={{ fontFamily:"'Playfair Display',Georgia,'Times New Roman',serif", borderBottom:'2px solid #e5e7eb', paddingBottom:'0.6rem' }}
        >
          {renderInline(block.title)}
        </h2>
      );

      if (block.type === 'h3') return (
        <h3
          key={`h3-${idx}`} id={block.id} data-section-id={block.id}
          className="text-[11px] font-black text-gray-500 dark:text-gray-400 mt-10 mb-3 scroll-mt-24 uppercase tracking-[0.18em]"
          style={{ fontFamily:"'Inter',sans-serif" }}
        >
          {renderInline(block.title)}
        </h3>
      );

      if (block.type === 'callout') return (
        <blockquote
          key={`callout-${idx}`}
          className="my-10"
          style={{ borderLeft:'4px solid #1B7A4E', paddingLeft:'1.5rem', paddingTop:'0.25rem', paddingBottom:'0.25rem' }}
        >
          <p
            className="text-[19px] leading-[1.75] text-gray-700 dark:text-gray-200 italic"
            style={{ fontFamily:"'Playfair Display',Georgia,serif" }}
          >
            {renderInline(block.text)}
          </p>
        </blockquote>
      );

      if (block.type === 'ul') return (
        <ul key={`ul-${idx}`} className="mb-8 space-y-3 pl-0">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 leading-[1.8] text-gray-700 dark:text-gray-300"
              style={{ fontFamily:"'Source Serif 4',Georgia,serif", fontSize:'18px' }}>
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#1B7A4E] mt-[12px]" />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );

      if (block.type === 'ol') return (
        <ol key={`ol-${idx}`} className="mb-8 space-y-3 pl-0">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-4 leading-[1.8] text-gray-700 dark:text-gray-300"
              style={{ fontFamily:"'Source Serif 4',Georgia,serif", fontSize:'18px' }}>
              <span className="flex-shrink-0 w-7 h-7 bg-[#1B7A4E]/10 text-[#1B7A4E] flex items-center justify-center text-sm font-black mt-[2px]"
                style={{ fontFamily:"'Inter',sans-serif" }}>{i+1}</span>
              <span className="flex-1">{renderInline(item)}</span>
            </li>
          ))}
        </ol>
      );

      if (block.type === 'table') return (
        <div key={`table-${idx}`} className="mb-10 overflow-x-auto" style={{ borderTop:'3px solid #1B7A4E', borderBottom:'1px solid #e5e7eb' }}>
          <table className="min-w-full border-collapse bg-white dark:bg-gray-900 text-sm">
            <thead>
              <tr style={{ background:'#f8f8f6' }}>
                {block.headers.map((h,i) => (
                  <th key={i} className="px-5 py-3 text-left text-gray-900 dark:text-white whitespace-nowrap border-b border-gray-200"
                    style={{ fontFamily:"'Inter',sans-serif", fontSize:'11px', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row,rIdx) => (
                <tr key={rIdx} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors">
                  {row.map((cell,cIdx) => (
                    <td key={cIdx} className="px-5 py-3.5 align-top text-gray-700 dark:text-gray-300"
                      style={{ fontFamily:"'Source Serif 4',Georgia,serif", fontSize:'16px' }}>
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

      // PARAGRAPH
      pCount++;
      const isFirst = pCount === 1;
      return (
        <p
          key={`p-${idx}`}
          className={`mb-7 text-gray-800 dark:text-gray-200 ${isFirst ? 'first-letter:text-[64px] first-letter:font-black first-letter:text-[#1B7A4E] first-letter:float-left first-letter:mr-3 first-letter:mt-0 first-letter:leading-[0.85]' : ''}`}
          style={{ fontFamily:"'Source Serif 4',Georgia,'Times New Roman',serif", fontSize:'18.5px', lineHeight:'1.85' }}
        >
          {renderInline(block.text)}
        </p>
      );
    });
  };

  // ─── LOADING / NOT FOUND ──────────────────────────────────────────────────
  if (isLoading) return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-[#1B7A4E] border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-500 text-sm" style={{ fontFamily:"'Inter',sans-serif" }}>Loading article...</p>
      </div>
    </div>
  );

  if (!article) return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <BookOpen className="w-10 h-10 text-gray-400" />
        </div>
        <h1 className="text-2xl font-black text-gray-900 dark:text-white mb-4" style={{ fontFamily:"'Playfair Display',Georgia,serif" }}>Article Not Found</h1>
        <p className="text-gray-600 mb-6" style={{ fontFamily:"'Inter',sans-serif" }}>This article may have been moved or does not exist.</p>
        <a href="/blog" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B7A4E] text-white font-bold hover:bg-[#156B3F] transition-colors" style={{ fontFamily:"'Inter',sans-serif" }}>
          ← Back to Articles
        </a>
      </div>
    </div>
  );

  // ─── MAIN RENDER ──────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">

      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-gray-200/50">
        <div className="h-full bg-[#1B7A4E] transition-all duration-150" style={{ width:`${readingProgress}%` }} />
      </div>

      {/* ── HERO WITH IMAGE ──────────────────────────────────────────── */}
      {article.image && (
        <div className="relative h-[280px] sm:h-[400px] lg:h-[500px] overflow-hidden w-full">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />

          {/* Breadcrumb */}
          <div className="absolute top-0 left-0 right-0 px-4 sm:px-8 lg:px-14 pt-6">
            <div className="flex items-center gap-1 text-sm text-white/70 flex-wrap" style={{ fontFamily:"'Inter',sans-serif" }}>
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <ChevronRight size={13} className="text-white/40" />
              <a href="/blog" className="hover:text-white transition-colors">Articles</a>
              <ChevronRight size={13} className="text-white/40" />
              <span className="text-white/90">{article.category}</span>
            </div>
          </div>

          {/* Title block */}
          <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 lg:px-14 pb-8">
            <div className="max-w-4xl">
              <span className="inline-block px-2.5 py-0.5 text-white text-[10px] font-black uppercase tracking-widest mb-4"
                style={{ background: article.category === 'Entrepreneurs' ? '#1B7A4E' : article.category === 'Citizenship' ? '#0f3460' : '#7c3aed', fontFamily:"'Inter',sans-serif" }}>
                {article.category}
              </span>
              <h1
                className="text-[28px] sm:text-[38px] lg:text-[50px] font-black text-white leading-[1.08] tracking-tight mb-5"
                style={{ fontFamily:"'Playfair Display',Georgia,'Times New Roman',serif" }}
              >
                {article.title}
              </h1>
              <div className="flex items-center gap-3" style={{ fontFamily:"'Inter',sans-serif" }}>
                <div className="w-8 h-8 rounded-full bg-[#1B7A4E] flex items-center justify-center text-white font-black text-[11px]">
                  {getInitials(article.author)}
                </div>
                <div>
                  <p className="text-white font-bold text-sm leading-none">{article.author}</p>
                  <p className="text-white/60 text-xs mt-1">{article.publishDate} · {article.readTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── HERO WITHOUT IMAGE ───────────────────────────────────────── */}
      {!article.image && (
        <div className="w-full border-b border-gray-200 dark:border-gray-800" style={{ background:'#fafaf8' }}>
          <div className="w-full px-4 sm:px-8 lg:px-14 py-10">
            <div className="flex items-center gap-1 text-sm text-gray-500 mb-6 flex-wrap" style={{ fontFamily:"'Inter',sans-serif" }}>
              <a href="/" className="hover:text-gray-900 transition-colors">Home</a>
              <ChevronRight size={13} />
              <a href="/blog" className="hover:text-gray-900 transition-colors">Articles</a>
              <ChevronRight size={13} />
              <span className="text-gray-900 font-medium">{article.category}</span>
            </div>
            <span className="inline-block px-2.5 py-0.5 text-white text-[10px] font-black uppercase tracking-widest mb-5"
              style={{ background:'#1B7A4E', fontFamily:"'Inter',sans-serif" }}>
              {article.category}
            </span>
            <h1
              className="text-[28px] sm:text-[40px] lg:text-[52px] font-black text-gray-900 dark:text-white leading-[1.08] tracking-tight max-w-4xl mb-6"
              style={{ fontFamily:"'Playfair Display',Georgia,'Times New Roman',serif" }}
            >
              {article.title}
            </h1>
            <div className="flex items-center gap-3" style={{ fontFamily:"'Inter',sans-serif" }}>
              <div className="w-8 h-8 rounded-full bg-[#1B7A4E] flex items-center justify-center text-white font-black text-[11px]">
                {getInitials(article.author)}
              </div>
              <div>
                <p className="text-gray-900 dark:text-white font-bold text-sm leading-none">{article.author}</p>
                <p className="text-gray-500 text-xs mt-1">{article.publishDate} · {article.readTime}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── STANDFIRST + SHARE ───────────────────────────────────────── */}
      <div className="w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="w-full px-4 sm:px-8 lg:px-14 py-5">
          <div className="flex flex-col sm:flex-row sm:items-start gap-5 max-w-5xl">
            <p
              className="flex-1 text-[18px] text-gray-700 dark:text-gray-300 leading-relaxed italic"
              style={{ fontFamily:"'Source Serif 4',Georgia,serif", borderLeft:'4px solid #1B7A4E', paddingLeft:'1.25rem' }}
            >
              {article.excerpt}
            </p>
            <div className="flex-shrink-0 pt-1">
              <ShareButtons title={article.title} />
            </div>
          </div>
        </div>
      </div>

      {/* ── ARTICLE BODY ─────────────────────────────────────────────── */}
      <div className="w-full px-4 sm:px-8 lg:px-14 py-10 lg:py-14">
        <div className="flex gap-14 xl:gap-20">

          {/* Article text — constrained for readability */}
          <article className="flex-1 min-w-0" style={{ maxWidth:'720px' }}>
            {renderContent()}

            {/* Share row */}
            <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800">
              <ShareButtons title={article.title} />
            </div>

            {/* CTA */}
            <div
              className="mt-12 w-full p-8 sm:p-10 text-center"
              style={{ background:'linear-gradient(135deg, #0f3460 0%, #1a4a8a 100%)', borderTop:'4px solid #1B7A4E' }}
            >
              <h3
                className="text-2xl sm:text-[28px] font-black text-white mb-3"
                style={{ fontFamily:"'Playfair Display',Georgia,serif" }}
              >
                Ready to Take the Next Step?
              </h3>
              <p
                className="text-white/70 text-[17px] mb-7 max-w-lg mx-auto"
                style={{ fontFamily:"'Source Serif 4',Georgia,serif" }}
              >
                Schedule a free consultation and we'll map out your best path to residency or citizenship.
              </p>
              <button
                onClick={handleScheduleCall}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0f3460] font-black uppercase tracking-widest hover:bg-gray-100 transition-all hover:scale-105 shadow-lg text-[11px]"
                style={{ fontFamily:"'Inter',sans-serif" }}
              >
                Book a Free Call <ArrowRight size={16} />
              </button>
            </div>

            {/* Author */}
            <div className="mt-10 flex items-center gap-5 p-6 border border-gray-200 dark:border-gray-800" style={{ borderTop:'3px solid #1B7A4E' }}>
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1B7A4E] to-[#2E8B57] flex items-center justify-center text-white font-black text-lg flex-shrink-0" style={{ fontFamily:"'Inter',sans-serif" }}>
                {getInitials(article.author)}
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1" style={{ fontFamily:"'Inter',sans-serif" }}>Written by</p>
                <h4 className="font-black text-gray-900 dark:text-white text-lg" style={{ fontFamily:"'Playfair Display',Georgia,serif" }}>{article.author}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1" style={{ fontFamily:"'Source Serif 4',Georgia,serif" }}>
                  Expert insights on global mobility, residency, and citizenship planning.
                </p>
              </div>
            </div>

            {/* Related */}
            {relatedArticles.length > 0 && (
              <div className="mt-14 pt-10 border-t border-gray-200 dark:border-gray-800">
                <h3
                  className="text-2xl font-black text-gray-900 dark:text-white mb-8"
                  style={{ fontFamily:"'Playfair Display',Georgia,serif" }}
                >
                  Continue Reading
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedArticles.map(ra => (
                    <a
                      key={ra.id}
                      href={`/blog/${ra.slug}`}
                      className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      style={{ borderTop:'3px solid transparent' }}
                      onMouseEnter={e => (e.currentTarget.style.borderTopColor='#1B7A4E')}
                      onMouseLeave={e => (e.currentTarget.style.borderTopColor='transparent')}
                    >
                      {ra.image && (
                        <div className="relative h-40 overflow-hidden">
                          <img src={ra.image} alt={ra.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                      )}
                      <div className="p-5">
                        <span className="inline-block px-2 py-0.5 text-[9px] font-black uppercase tracking-widest text-white mb-2"
                          style={{ background:'#1B7A4E', fontFamily:"'Inter',sans-serif" }}>{ra.category}</span>
                        <h4
                          className="font-black text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-[#1B7A4E] transition-colors leading-tight"
                          style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:'16px' }}
                        >
                          {ra.title}
                        </h4>
                        <p className="text-xs text-gray-400" style={{ fontFamily:"'Inter',sans-serif" }}>{ra.publishDate} · {ra.readTime}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block w-[260px] xl:w-[300px] flex-shrink-0">
            <div className="sticky top-8 space-y-5">

              {/* CTA */}
              <div className="p-5 border border-gray-200 dark:border-gray-800" style={{ borderTop:'3px solid #1B7A4E' }}>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-900 dark:text-white mb-2" style={{ fontFamily:"'Inter',sans-serif" }}>Work With Us</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed" style={{ fontFamily:"'Source Serif 4',Georgia,serif" }}>
                  Get expert guidance on residency and citizenship tailored to your goals.
                </p>
                <button
                  onClick={handleScheduleCall}
                  className="w-full px-4 py-3 bg-[#1B7A4E] text-white text-[10px] font-black uppercase tracking-widest hover:bg-[#156B3F] transition-colors"
                  style={{ fontFamily:"'Inter',sans-serif" }}
                >
                  Book a Free Call
                </button>
              </div>

              {/* TOC */}
              {tocSections.length > 0 && (
                <DesktopTOC sections={tocSections} activeSection={activeSection} onSectionClick={scrollToSection} />
              )}

              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="p-5 border border-gray-200 dark:border-gray-800">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3" style={{ fontFamily:"'Inter',sans-serif" }}>Topics</h4>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-[11px] font-semibold" style={{ fontFamily:"'Inter',sans-serif" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Back to articles */}
              <a
                href="/blog"
                className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-gray-500 hover:text-[#1B7A4E] transition-colors"
                style={{ fontFamily:"'Inter',sans-serif" }}
              >
                ← Back to Dera Mobility Brief
              </a>
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
          onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
          className="fixed bottom-20 lg:bottom-6 right-6 z-40 w-10 h-10 bg-[#1B7A4E] text-white shadow-lg hover:bg-[#156B3F] transition-all hover:scale-110 flex items-center justify-center"
          aria-label="Back to top"
        >
          <ChevronUp size={18} />
        </button>
      )}
    </div>
  );
}
