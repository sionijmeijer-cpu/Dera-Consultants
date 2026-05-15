// api/sitemap.ts
// Serves sitemap.xml dynamically via Azure Functions API

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

const articles = [
  { slug: "dominica-citizenship-by-investment-complete-guide-2026",              lastmod: "2026-05-15", priority: "0.9", changefreq: "monthly" },
  { slug: "golden-visa-investors-lawsuit-portugal-citizenship-law-2026",         lastmod: "2026-05-11", priority: "0.9", changefreq: "weekly"  },
  { slug: "portugal-civic-knowledge-test-citizenship-2026",                      lastmod: "2026-05-11", priority: "0.9", changefreq: "weekly"  },
  { slug: "portugal-10-year-citizenship-law-signed-may-2026",                    lastmod: "2026-05-04", priority: "0.9", changefreq: "weekly"  },
  { slug: "nigerian-south-african-ghanaian-passport-visa-free-access-2026",      lastmod: "2026-05-04", priority: "0.8", changefreq: "monthly" },
  { slug: "why-investors-still-choosing-portugal-citizenship-decision-pending-2026", lastmod: "2026-05-01", priority: "0.8", changefreq: "monthly" },
  { slug: "portugal-golden-visa-vs-d7-visa-2026",                                lastmod: "2026-04-25", priority: "0.9", changefreq: "monthly" },
  { slug: "second-citizenship-consultants-what-to-look-for-avoid",               lastmod: "2026-04-25", priority: "0.8", changefreq: "monthly" },
  { slug: "portugal-citizenship-presidential-decision-final-24-hours-april-2026",lastmod: "2026-04-20", priority: "0.9", changefreq: "monthly" },
  { slug: "portugal-golden-visa-2026-property-route-fund-investment",            lastmod: "2026-04-20", priority: "0.9", changefreq: "monthly" },
  { slug: "ai-revolution-cbi-due-diligence-2026",                                lastmod: "2026-04-14", priority: "0.7", changefreq: "monthly" },
  { slug: "portugal-citizenship-5-to-10-year-rule-presidential-decision-2026",   lastmod: "2026-04-15", priority: "0.9", changefreq: "monthly" },
  { slug: "digital-nomad-passports-global-perspective-2026",                     lastmod: "2026-04-13", priority: "0.7", changefreq: "monthly" },
  { slug: "st-lucia-vs-dominica-cbi-families-2026",                              lastmod: "2026-04-08", priority: "0.8", changefreq: "monthly" },
  { slug: "eu-pressure-caribbean-cbi-2026",                                      lastmod: "2026-04-08", priority: "0.7", changefreq: "monthly" },
  { slug: "portugal-d7-visa-constitutional-court-ruling-2026",                   lastmod: "2026-04-01", priority: "0.8", changefreq: "monthly" },
  { slug: "geopolitical-shifts-2026-second-passport-demand",                     lastmod: "2026-03-29", priority: "0.7", changefreq: "monthly" },
  { slug: "portugal-d8-digital-nomad-visa-2026",                                 lastmod: "2026-03-28", priority: "0.8", changefreq: "monthly" },
  { slug: "second-passport-business-expansion-market-access-2026",               lastmod: "2026-03-28", priority: "0.7", changefreq: "monthly" },
  { slug: "true-cost-second-passport-cbi-2026",                                  lastmod: "2026-03-25", priority: "0.7", changefreq: "monthly" },
  { slug: "global-entrepreneur-visa-international-business-2026",                lastmod: "2026-03-22", priority: "0.7", changefreq: "monthly" },
  { slug: "global-capital-funding-entrepreneurs-international-mobility-2026",    lastmod: "2026-03-22", priority: "0.7", changefreq: "monthly" },
  { slug: "tax-strategies-digital-nomads-global-entrepreneurs-2026",             lastmod: "2026-03-12", priority: "0.7", changefreq: "monthly" },
  { slug: "protecting-business-assets-legal-structures-global-entrepreneurs-2026",lastmod: "2026-03-05", priority: "0.7", changefreq: "monthly" },
  { slug: "caribbean-cbi-enhanced-due-diligence-2026",                           lastmod: "2026-02-20", priority: "0.8", changefreq: "monthly" },
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
    ...articles.map(a => `
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
