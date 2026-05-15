// plugins/vite-plugin-ssg-articles.ts
// Pre-renders each blog article as a static HTML file at build time.
// Google sees full HTML without executing JavaScript → reliable SEO indexing.
// Azure Static Web Apps serves dist/blog/[slug]/index.html directly.

import type { Plugin } from 'vite';
import * as path from 'path';
import * as fs from 'fs';
import { blogPosts } from '../src/data/blogPosts';
import { articlesMeta } from '../shared/articlesMeta';

const SITE_URL = 'https://www.getsecondpassport.eu';

// ─── HTML ESCAPING ────────────────────────────────────────────────────────────
function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ─── INLINE FORMATTING ────────────────────────────────────────────────────────
// Mirrors renderInline() in BlogPostPage.tsx: ***bi*** **b** *i*
function inlineHtml(text: string): string {
  const regex = /\*\*\*(.+?)\*\*\*|\*\*(.+?)\*\*|\*(.+?)\*/g;
  let result = '';
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = regex.exec(text)) !== null) {
    result += esc(text.slice(last, m.index));
    if (m[1]) result += `<strong><em>${esc(m[1])}</em></strong>`;
    else if (m[2]) result += `<strong>${esc(m[2])}</strong>`;
    else result += `<em>${esc(m[3])}</em>`;
    last = m.index + m[0].length;
  }
  result += esc(text.slice(last));
  return result;
}

// ─── PARSING HELPERS (mirrors BlogPostPage.tsx) ───────────────────────────────
const makeId    = (t: string) => t.toLowerCase().replace(/^#+\s*/, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const stripH    = (t: string) => t.replace(/^##\s+/, '').replace(/^#\s+/, '').trim();
const isH2      = (l: string) => /^#\s+/.test(l.trim()) && !/^##\s+/.test(l.trim());
const isH3      = (l: string) => /^##\s+/.test(l.trim());
const isBullet  = (l: string) => /^[-*]\s+/.test(l.trim());
const isOL      = (l: string) => /^\d+\.\s+.+/.test(l.trim());
const isTable   = (l: string) => { const t = l.trim(); return t.startsWith('|') && t.endsWith('|') && t.includes('|'); };
const isDivider = (l: string) => { const c = l.trim().split('|').map(x => x.trim()).filter(Boolean); return c.length > 0 && c.every(x => /^:?-{3,}:?$/.test(x)); };
const parseRow  = (l: string) => l.trim().split('|').map(c => c.trim()).filter(Boolean);
const isCallout = (l: string) => l.trim().startsWith('>!');

function isPlainBullet(l: string) {
  const t = l.trim();
  if (!t || t.length > 95 || t.endsWith('.') || t.endsWith(':')) return false;
  if (isH2(t) || isH3(t) || isOL(t) || isTable(t) || isCallout(t)) return false;
  return true;
}

// ─── CONTENT → HTML ──────────────────────────────────────────────────────────
// Mirrors parseContent() + renderContent() in BlogPostPage.tsx
function contentToHtml(content: string, images: string[]): string {
  const lines = content.split('\n');
  const parts: string[] = [];
  let i = 0;
  let skipped = false;
  let h2Count = 0;

  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) { i++; continue; }
    if (!skipped) { skipped = true; i++; continue; } // first non-empty line is skipped (title)

    if (isH2(line)) {
      const title = stripH(line);
      const id = makeId(title);
      parts.push(`<h2 id="${id}">${inlineHtml(title)}</h2>`);
      h2Count++;
      if (h2Count === 3 && images[0]) parts.push(`<img src="${esc(images[0])}" alt="" loading="lazy" style="width:100%;height:auto;margin:1.5rem 0" />`);
      if (h2Count === 4 && images[1]) parts.push(`<img src="${esc(images[1])}" alt="" loading="lazy" style="width:100%;height:auto;margin:1.5rem 0" />`);
      i++; continue;
    }

    if (isH3(line)) {
      const title = stripH(line);
      parts.push(`<h3 id="${makeId(title)}">${inlineHtml(title)}</h3>`);
      i++; continue;
    }

    if (isCallout(line)) {
      parts.push(`<blockquote style="border-left:4px solid #2563eb;padding:.75rem 1rem;background:#eff6ff;margin:1rem 0">${inlineHtml(line.replace(/^>!\s*/, '').trim())}</blockquote>`);
      i++; continue;
    }

    if (isTable(line)) {
      const header = parseRow(line);
      if (isDivider(lines[i + 1]?.trim() ?? '')) {
        const rows: string[][] = [];
        let j = i + 2;
        while (j < lines.length && isTable(lines[j].trim())) { rows.push(parseRow(lines[j].trim())); j++; }
        const thead = header.map(h => `<th style="padding:.5rem;border:1px solid #e5e7eb;background:#f9fafb">${inlineHtml(h)}</th>`).join('');
        const tbody = rows.map(r => `<tr>${r.map(c => `<td style="padding:.5rem;border:1px solid #e5e7eb">${inlineHtml(c)}</td>`).join('')}</tr>`).join('');
        parts.push(`<table style="width:100%;border-collapse:collapse;margin:1rem 0"><thead><tr>${thead}</tr></thead><tbody>${tbody}</tbody></table>`);
        i = j; continue;
      }
    }

    if (isBullet(line)) {
      const items: string[] = [];
      while (i < lines.length && isBullet(lines[i])) { items.push(lines[i].trim().replace(/^[-*]\s+/, '')); i++; }
      parts.push(`<ul style="padding-left:1.5rem;margin:.75rem 0">${items.map(it => `<li style="margin:.25rem 0">${inlineHtml(it)}</li>`).join('')}</ul>`);
      continue;
    }

    if (isOL(line)) {
      const items: string[] = [];
      let j = i;
      while (j < lines.length && isOL(lines[j].trim())) { items.push(lines[j].trim().replace(/^\d+\.\s+/, '')); j++; }
      if (items.length >= 2) {
        parts.push(`<ol style="padding-left:1.5rem;margin:.75rem 0">${items.map(it => `<li style="margin:.25rem 0">${inlineHtml(it)}</li>`).join('')}</ol>`);
        i = j; continue;
      }
    }

    const prev = parts[parts.length - 1] ?? '';
    if ((prev.startsWith('<h2') || prev.startsWith('<h3')) && isPlainBullet(line)) {
      const items: string[] = [];
      let j = i;
      while (j < lines.length && lines[j].trim() && isPlainBullet(lines[j].trim())) {
        items.push(lines[j].trim().replace(/^[-*]\s+/, '')); j++;
      }
      if (items.length >= 2) {
        parts.push(`<ul style="padding-left:1.5rem;margin:.75rem 0">${items.map(it => `<li style="margin:.25rem 0">${inlineHtml(it)}</li>`).join('')}</ul>`);
        i = j; continue;
      }
    }

    let para = line;
    let j = i + 1;
    while (j < lines.length) {
      const next = lines[j].trim();
      if (!next || isH2(next) || isH3(next) || isBullet(next) || isOL(next) || isTable(next) || isCallout(next)) break;
      para += ` ${next}`; j++;
    }
    parts.push(`<p style="margin:.75rem 0;line-height:1.7">${inlineHtml(para)}</p>`);
    i = j;
  }

  return parts.join('\n');
}

// ─── PLUGIN ──────────────────────────────────────────────────────────────────
export function ssgArticlesPlugin(): Plugin {
  return {
    name: 'ssg-articles',
    apply: 'build',
    closeBundle() {
      const distDir = path.resolve(__dirname, '../dist');
      const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

      const metaBySlug = Object.fromEntries(articlesMeta.map(a => [a.slug, a]));

      let count = 0;
      for (const post of blogPosts) {
        const meta = metaBySlug[post.slug];
        if (!meta) continue;

        const pageUrl = `${SITE_URL}/blog/${post.slug}`;
        const fullTitle = `${esc(post.title)} | Dera Consultants`;
        const descEsc = esc(post.excerpt);
        const imgEsc = esc(meta.image);

        const schema = JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.excerpt,
          image: meta.image,
          datePublished: post.publishDate,
          dateModified: meta.lastmod,
          author: { '@type': 'Person', name: post.author, url: `${SITE_URL}/company` },
          publisher: { '@type': 'Organization', name: 'Dera Consultants', logo: { '@type': 'ImageObject', url: 'https://i.imgur.com/KTSBU1c.png' } },
          mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
        });

        const bodyContent = `<article style="max-width:780px;margin:0 auto;padding:2rem 1.25rem;font-family:Georgia,serif;color:#1a1a1a">
<h1 style="font-size:1.9rem;line-height:1.25;margin-bottom:.5rem">${esc(post.title)}</h1>
<p style="color:#6b7280;font-size:.875rem;margin-bottom:2rem">${esc(post.author)} · ${esc(post.publishDate)} · ${esc(post.readTime)} read</p>
<img src="${imgEsc}" alt="${esc(post.title)}" style="width:100%;height:auto;margin-bottom:2rem" loading="eager" />
${contentToHtml(post.content, post.images ?? [])}
</article>`;

        let html = indexHtml;

        // Title
        html = html.replace(/<title>[^<]*<\/title>/, `<title>${fullTitle}</title>`);

        // Canonical
        html = html.replace(
          /<link rel="canonical" href="[^"]*" \/>/,
          `<link rel="canonical" href="${pageUrl}" />`,
        );

        // Description
        html = html.replace(
          /<meta name="description" content="[^"]*" \/>/,
          `<meta name="description" content="${descEsc}" />`,
        );

        // OG tags
        html = html
          .replace(/<meta property="og:type" content="[^"]*" \/>/, `<meta property="og:type" content="article" />`)
          .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${pageUrl}" />`)
          .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${fullTitle}" />`)
          .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${descEsc}" />`)
          .replace(/<meta property="og:image" content="[^"]*" \/>/, `<meta property="og:image" content="${imgEsc}" />`);

        // Twitter tags
        html = html
          .replace(/<meta property="twitter:url" content="[^"]*" \/>/, `<meta property="twitter:url" content="${pageUrl}" />`)
          .replace(/<meta property="twitter:title" content="[^"]*" \/>/, `<meta property="twitter:title" content="${fullTitle}" />`)
          .replace(/<meta property="twitter:description" content="[^"]*" \/>/, `<meta property="twitter:description" content="${descEsc}" />`)
          .replace(/<meta property="twitter:image" content="[^"]*" \/>/, `<meta property="twitter:image" content="${imgEsc}" />`);

        // Schema.org
        html = html.replace('</head>', `  <script type="application/ld+json">${schema}</script>\n</head>`);

        // Pre-rendered body
        html = html.replace('<div id="root"></div>', `<div id="root">${bodyContent}</div>`);

        const outDir = path.join(distDir, 'blog', post.slug);
        fs.mkdirSync(outDir, { recursive: true });
        fs.writeFileSync(path.join(outDir, 'index.html'), html);
        count++;
      }

      console.log(`\x1b[32m✓\x1b[0m ssg-articles: generated ${count} pre-rendered article pages`);
    },
  };
}
