import { useEffect, useState, ReactNode } from 'react';
import { blogPosts } from '../data/blogPosts';
import { DesktopTOC, MobileTOC } from '../components/TableOfContents';
import { ChevronLeft } from 'lucide-react';

interface BlogPostPageProps {
  slug?: string;
  onScheduleCall?: () => void;
}

interface TOCSection {
  id: string;
  title: string;
  level: number;
}

const extractTableOfContents = (content: string): TOCSection[] => {
  const sections: TOCSection[] = [];
  const lines = content.split('\n');
  let headingCount = 0;

  lines.forEach((line) => {
    if (line.startsWith('##') && !line.startsWith('###')) {
      headingCount++;
      const title = line.replace(/^#+\s*/, '').trim();
      sections.push({
        id: `section-${headingCount}`,
        title,
        level: 2,
      });
    } else if (line.startsWith('###') && !line.startsWith('####')) {
      const title = line.replace(/^#+\s*/, '').trim();
      sections.push({
        id: `section-${headingCount}-${sections.length}`,
        title,
        level: 3,
      });
    }
  });

  return sections;
};

const renderMarkdown = (content: string): ReactNode[] => {
  const lines = content.split('\n');
  const elements: ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    // Table detection and rendering
    if (line.startsWith('|')) {
      const tableRows: string[] = [];
      let j = i;
      while (j < lines.length && lines[j].trim().startsWith('|')) {
        tableRows.push(lines[j].trim());
        j++;
      }

      if (tableRows.length > 0) {
        const headerRow = tableRows[0]
          .split('|')
          .map((cell) => cell.trim())
          .filter((cell) => cell && !cell.match(/^-+$/));

        const bodyRows = tableRows
          .slice(2)
          .filter((row) => !row.match(/^\|\s*-+\s*\|/))
          .map((row) =>
            row
              .split('|')
              .map((cell) => cell.trim())
              .filter((cell) => cell && !cell.match(/^-+$/))
          );

        elements.push(
          <div key={`table-${i}`} className="overflow-x-auto my-8 rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  {headerRow.map((header, idx) => (
                    <th
                      key={idx}
                      className="px-4 py-4 text-left font-bold text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-600 text-sm md:text-base"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bodyRows.map((row, rowIdx) => (
                  <tr
                    key={rowIdx}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors border-b border-gray-200 dark:border-gray-700"
                  >
                    {row.map((cell, cellIdx) => (
                      <td
                        key={cellIdx}
                        className="px-4 py-4 text-gray-700 dark:text-gray-300 text-sm md:text-base"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      i = j;
      continue;
    }

    // Headings
    if (line.startsWith('######')) {
      elements.push(
        <h6 key={i} className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">
          {line.replace(/^#+\s*/, '')}
        </h6>
      );
    } else if (line.startsWith('#####')) {
      elements.push(
        <h5 key={i} className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mt-6 mb-3">
          {line.replace(/^#+\s*/, '')}
        </h5>
      );
    } else if (line.startsWith('####')) {
      elements.push(
        <h4 key={i} className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
          {line.replace(/^#+\s*/, '')}
        </h4>
      );
    } else if (line.startsWith('###')) {
      elements.push(
        <h3 key={i} className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-10 mb-5">
          {line.replace(/^#+\s*/, '')}
        </h3>
      );
    } else if (line.startsWith('##')) {
      elements.push(
        <h2 key={i} className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
          {line.replace(/^#+\s*/, '')}
        </h2>
      );
    } else if (line.startsWith('#')) {
      elements.push(
        <h1 key={i} className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mt-14 mb-8">
          {line.replace(/^#+\s*/, '')}
        </h1>
      );
    } else if (line.startsWith('-') || line.startsWith('*')) {
      // Bullet list
      const listItems: string[] = [];
      let j = i;
      while (j < lines.length && (lines[j].trim().startsWith('-') || lines[j].trim().startsWith('*'))) {
        listItems.push(lines[j].trim().replace(/^[-*]\s*/, ''));
        j++;
      }
      elements.push(
        <ul key={i} className="list-disc list-inside space-y-2 my-4 text-gray-700 dark:text-gray-300 text-base md:text-lg">
          {listItems.map((item, idx) => (
            <li key={idx} className="ml-4">
              {renderInlineMarkdown(item)}
            </li>
          ))}
        </ul>
      );
      i = j;
      continue;
    } else if (line.match(/^\d+\./)) {
      // Numbered list
      const listItems: string[] = [];
      let j = i;
      while (j < lines.length && lines[j].trim().match(/^\d+\./)) {
        listItems.push(lines[j].trim().replace(/^\d+\.\s*/, ''));
        j++;
      }
      elements.push(
        <ol key={i} className="list-decimal list-inside space-y-2 my-4 text-gray-700 dark:text-gray-300 text-base md:text-lg">
          {listItems.map((item, idx) => (
            <li key={idx} className="ml-4">
              {renderInlineMarkdown(item)}
            </li>
          ))}
        </ol>
      );
      i = j;
      continue;
    } else if (line.startsWith('```')) {
      // Code block
      const codeLines: string[] = [];
      let j = i + 1;
      while (j < lines.length && !lines[j].trim().startsWith('```')) {
        codeLines.push(lines[j]);
        j++;
      }
      elements.push(
        <pre key={i} className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto my-6 text-sm md:text-base">
          <code>{codeLines.join('\n')}</code>
        </pre>
      );
      i = j + 1;
      continue;
    } else if (line.startsWith('>')) {
      // Blockquote
      elements.push(
        <blockquote key={i} className="border-l-4 border-[#1B7A4E] pl-4 italic text-gray-600 dark:text-gray-400 my-4 text-base md:text-lg">
          {line.replace(/^>\s*/, '')}
        </blockquote>
      );
    } else if (line === '') {
      // Empty line
      elements.push(<div key={i} className="h-2" />);
    } else if (line) {
      // Paragraph
      elements.push(
        <p key={i} className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-base md:text-lg">
          {renderInlineMarkdown(line)}
        </p>
      );
    }
    i++;
  }

  return elements;
};

const renderInlineMarkdown = (text: string): ReactNode => {
  const parts: (ReactNode)[] = [];
  let lastIndex = 0;

  // Bold
  const boldRegex = /\*\*(.*?)\*\*/g;
  let match;
  const boldMatches: Array<{ start: number; end: number; text: string }> = [];
  while ((match = boldRegex.exec(text)) !== null) {
    boldMatches.push({ start: match.index, end: match.index + match[0].length, text: match[1] });
  }

  // Italic
  const italicRegex = /\*(.*?)\*/g;
  const italicMatches: Array<{ start: number; end: number; text: string }> = [];
  while ((match = italicRegex.exec(text)) !== null) {
    if (!boldMatches.some((b) => match.index >= b.start && match.index < b.end)) {
      italicMatches.push({ start: match.index, end: match.index + match[0].length, text: match[1] });
    }
  }

  // Code
  const codeRegex = /`(.*?)`/g;
  const codeMatches: Array<{ start: number; end: number; text: string }> = [];
  while ((match = codeRegex.exec(text)) !== null) {
    codeMatches.push({ start: match.index, end: match.index + match[0].length, text: match[1] });
  }

  const allMatches = [...boldMatches, ...italicMatches, ...codeMatches].sort((a, b) => a.start - b.start);

  allMatches.forEach((m, idx) => {
    if (m.start > lastIndex) {
      parts.push(text.substring(lastIndex, m.start));
    }

    if (boldMatches.includes(m)) {
      parts.push(
        <strong key={idx} className="font-bold text-gray-900 dark:text-white">
          {m.text}
        </strong>
      );
    } else if (italicMatches.includes(m)) {
      parts.push(
        <em key={idx} className="italic text-gray-700 dark:text-gray-300">
          {m.text}
        </em>
      );
    } else if (codeMatches.includes(m)) {
      parts.push(
        <code key={idx} className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono text-gray-900 dark:text-white">
          {m.text}
        </code>
      );
    }

    lastIndex = m.end;
  });

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length === 0 ? text : <>{parts}</>;
};

export default function BlogPostPage({ slug, onScheduleCall }: BlogPostPageProps) {
  const [post, setPost] = useState<(typeof blogPosts)[0] | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<string>('');
  const [sections, setSections] = useState<TOCSection[]>([]);

  useEffect(() => {
    const foundPost = blogPosts.find((p) => p.slug === slug);
    setPost(foundPost || null);
    if (foundPost) {
      const toc = extractTableOfContents(foundPost.content);
      setSections(toc);
      if (toc.length > 0) {
        setActiveSection(toc[0].id);
      }
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
        <div className="text-gray-600 dark:text-gray-400">Loading...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Post not found</h1>
          <a href="/blog" className="text-[#1B7A4E] hover:underline">
            Back to blog
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <a
          href="/blog"
          className="inline-flex items-center gap-2 text-[#1B7A4E] hover:text-[#156B3F] transition-colors"
        >
          <ChevronLeft size={20} />
          Back to Blog
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main content */}
          <div className="lg:col-span-3">
            {/* Header */}
            <div className="mb-12">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="inline-block px-3 py-1 bg-[#1B7A4E]/10 text-[#1B7A4E] rounded-full text-sm font-semibold">
                  {post.category}
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">{post.readTime}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 text-sm md:text-base">
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.publishDate}</span>
              </div>
            </div>

            {/* Featured image */}
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg mb-12"
                loading="lazy"
              />
            )}

            {/* Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {renderMarkdown(post.content)}
            </div>
          </div>

          {/* Sidebar - Table of Contents */}
          <div className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-24">
              {sections.length > 0 && (
                <DesktopTOC
                  sections={sections}
                  activeSection={activeSection}
                  onSectionClick={setActiveSection}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile TOC */}
      {sections.length > 0 && (
        <MobileTOC
          sections={sections}
          activeSection={activeSection}
          onSectionClick={setActiveSection}
        />
      )}
    </div>
  );
}