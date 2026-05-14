// api/sitemap.ts
// Serves sitemap.xml dynamically via Azure Functions API
// This bypasses the Azure CDN/SPA routing issue that prevents
// static sitemap.xml files from being fetched by Google Search Console

import { articlesMeta } from '../shared/articlesMeta';

const SITE_URL = "https://www.getsecondpassport.eu";

const staticPages = [
  { url: "/",                                  priority: "1.0", changefreq: "weekly",  lastmod: "2026-05-11" },
  { url: "/portugal-europe-residency",          priority: "0.9", changefreq: "monthly", lastmod: "2026-04-17" },
  { url: "/caribbean-citizenship-by-investment",priority: "0.9", changefreq: "monthly", lastmod: "2026-04-17" },
  { url: "/americans-moving-to-portugal",       priority: "0.8", changefreq: "monthly", lastmod: "2026-04-17" },
  { url: "/blog",                               priority: "0.9", changefreq: "weekly",  lastmod: "2026-05-11" },
  { url: "/contact",                            priority: "0.6", changefreq: "monthly", lastmod: "2026-04-17" },
  { url: "/company",                            priority: "0.6", changefreq: "monthly", lastmod: "2026-04-17" },
  { url: "/research",                           priority: "0.7", changefreq: "monthly", lastmod: "2026-04-17" },
  { url: "/faq",                                priority: "0.6", changefreq: "monthly", lastmod: "2026-04-17" },
];

export default async function handler(req: Request): Promise<Response> {
  const urls = [
    ...staticPages.map(p => `
  <url>
    <loc>${SITE_URL}${p.url}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`),
    ...articlesMeta.map(a => `
  <url>
    <loc>${SITE_URL}/blog/${a.slug}</loc>
    <lastmod>${a.lastmod}</lastmod>
    <changefreq>${a.changefreq}</changefreq>
    <priority>${a.priority}</priority>
  </url>`),
  ].join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
      "X-Robots-Tag": "noindex",
    },
  });
}
