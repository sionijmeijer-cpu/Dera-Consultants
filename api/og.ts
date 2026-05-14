// api/og.ts
// Serves pre-rendered HTML with correct Open Graph meta tags for each article.
// LinkedIn, Facebook, and WhatsApp scrapers hit this endpoint and get the
// correct image, title, and description without needing JavaScript.
//
// How it works:
// 1. staticwebapp.config.json routes /blog/* to this function ONLY for bots
// 2. Real users still get the normal React SPA
// 3. Scrapers get a minimal HTML page with correct og: tags

import { articlesMeta } from '../shared/articlesMeta';

const ARTICLES = Object.fromEntries(
  articlesMeta.map(a => [a.slug, { title: a.title, description: a.description, image: a.image }])
);

const SITE_URL = "https://www.getsecondpassport.eu";
const DEFAULT_IMAGE = "https://i.imgur.com/KTSBU1c.png";
const DEFAULT_TITLE = "Dera Consultants | Portugal Residency & Caribbean Citizenship Advisory";
const DEFAULT_DESC = "Expert guidance on Portugal residency routes and Caribbean citizenship by investment programs.";

const BOT_AGENTS = [
  "linkedinbot",
  "facebookexternalhit",
  "twitterbot",
  "whatsapp",
  "telegrambot",
  "slackbot",
  "discordbot",
  "googlebot",
  "bingbot",
  "applebot",
  "embedly",
  "outbrain",
  "pinterest",
  "vkshare",
  "w3c_validator",
  "curl",
  "wget",
];

function isBot(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();
  return BOT_AGENTS.some(bot => ua.includes(bot));
}

function buildHtml(slug: string, pageUrl: string): string {
  const article = ARTICLES[slug];
  const title       = article ? `${article.title} | Dera Consultants` : DEFAULT_TITLE;
  const description = article ? article.description : DEFAULT_DESC;
  const image       = article ? article.image : DEFAULT_IMAGE;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${description}" />

  <!-- Open Graph -->
  <meta property="og:type" content="article" />
  <meta property="og:url" content="${pageUrl}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="${image}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:site_name" content="Dera Consultants" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="${pageUrl}" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${image}" />

  <link rel="canonical" href="${pageUrl}" />

  <!-- Redirect real users to the React app immediately -->
  <script>window.location.replace("${pageUrl}");</script>
</head>
<body>
  <p><a href="${pageUrl}">${title}</a></p>
</body>
</html>`;
}

export default async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const userAgent = req.headers.get("user-agent") || "";

  const slug = url.searchParams.get("slug") || "";
  const pageUrl = slug
    ? `${SITE_URL}/blog/${slug}`
    : SITE_URL;

  if (!isBot(userAgent)) {
    return new Response(null, {
      status: 302,
      headers: { Location: pageUrl },
    });
  }

  const html = buildHtml(slug, pageUrl);

  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
