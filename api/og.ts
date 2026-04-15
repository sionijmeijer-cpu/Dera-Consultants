// api/og.ts
// Serves pre-rendered HTML with correct Open Graph meta tags for each article.
// LinkedIn, Facebook, and WhatsApp scrapers hit this endpoint and get the
// correct image, title, and description without needing JavaScript.
//
// How it works:
// 1. staticwebapp.config.json routes /blog/* to this function ONLY for bots
// 2. Real users still get the normal React SPA
// 3. Scrapers get a minimal HTML page with correct og: tags

const ARTICLES: Record<string, { title: string; description: string; image: string }> = {
  "global-entrepreneur-visa-international-business-2026": {
    title: "The Rise of the Global Entrepreneur Visa: Your Path to International Business Expansion",
    description: "In 2026, more countries than ever are actively competing to attract ambitious founders. Here is how Global Entrepreneur Visas work, what the best programmes look for, and how to position your application for success.",
    image: "https://i.imgur.com/CYT10dF.png"
  },
  "second-passport-business-expansion-market-access-2026": {
    title: "How to Leverage a Second Passport for Business Expansion and Market Access",
    description: "For global entrepreneurs, a second passport is not just a travel document. It is a strategic business tool that unlocks markets, accelerates deal-making, diversifies risk, and opens operational options that single-passport holders simply do not have.",
    image: "https://i.imgur.com/eO2A6Z0.png"
  },
  "global-capital-funding-entrepreneurs-international-mobility-2026": {
    title: "Accessing Global Capital: Funding Opportunities for Entrepreneurs with International Mobility",
    description: "Local funding markets limit what is possible. In 2026, entrepreneurs with second passports and strategic residency are accessing venture capital, angel networks, and government incentives that are simply not available to those without international mobility.",
    image: "https://i.imgur.com/kyjpjYX.png"
  },
  "tax-strategies-digital-nomads-global-entrepreneurs-2026": {
    title: "Tax Strategies for Digital Nomads and Global Entrepreneurs: Navigating the 2026 Landscape",
    description: "International tax planning in 2026 is not optional for digital nomads and global entrepreneurs. Understanding tax residency, double taxation treaties, and business incorporation choices is the difference between optimising your finances and paying far more than you should.",
    image: "https://i.imgur.com/ALdbrZr.png"
  },
  "protecting-business-assets-legal-structures-global-entrepreneurs-2026": {
    title: "Protecting Your Business Assets: Legal Structures for Global Entrepreneurs",
    description: "As you expand your business across borders, choosing the right legal structure is not a formality. It is a strategic decision that determines how well your assets, intellectual property, and operational integrity are protected.",
    image: "https://i.imgur.com/bjaGM5D.png"
  },
  "portugal-citizenship-5-to-10-year-rule-presidential-decision-2026": {
    title: "Breaking News: Portugal's 5-to-10 Year Citizenship Rule: Countdown to Presidential Decision",
    description: "A legislative proposal to double Portugal's naturalisation period from 5 to 10 years has passed Parliament and now sits on the President's desk. The decision is expected by April 21st, 2026. Here is what it means for every D7, D8, and Golden Visa holder.",
    image: "https://i.imgur.com/zV7KRA2.png"
  },
  "caribbean-cbi-enhanced-due-diligence-2026": {
    title: "Caribbean CBI: The New Era of Enhanced Due Diligence",
    description: "Caribbean citizenship by investment has entered a new era. Enhanced due diligence, deeper background checks, and international cooperation mean that only well-prepared, transparent applicants succeed in 2026.",
    image: "https://i.imgur.com/fImh7Mk.png"
  },
  "st-lucia-vs-dominica-cbi-families-2026": {
    title: "St. Lucia vs. Dominica CBI: Which is the Smarter Choice for Families in 2026?",
    description: "St. Lucia and Dominica both offer strong Caribbean citizenship by investment programmes for families. But the right choice depends on your financial strategy, timeline, and whether a refundable investment matters to you.",
    image: "https://i.imgur.com/f62mJXO.png"
  },
  "portugal-golden-visa-2026-investment-landscape": {
    title: "Portugal Golden Visa 2026: Navigating the New Investment Landscape",
    description: "Portugal's Golden Visa no longer includes direct real estate investment, but the programme remains one of the strongest routes to EU residency and citizenship. Here is what the 2026 investment landscape actually looks like and how to navigate it.",
    image: "https://i.imgur.com/doO30uw.png"
  },
  "geopolitical-shifts-2026-second-passport-demand": {
    title: "Geopolitical Shifts 2026: How Global Events Are Reshaping Second Passport Demand",
    description: "In 2026, a second passport is less about escaping and more about enabling. Regional conflicts, economic uncertainty, and shifting visa regimes are driving a new wave of demand for Caribbean CBI and European residency programmes.",
    image: "https://i.imgur.com/n534dxb.png"
  },
  "eu-pressure-caribbean-cbi-2026": {
    title: "EU Pressure on CBI: What Applicants Need to Know in 2026",
    description: "The European Union has placed Caribbean citizenship by investment programmes under unprecedented scrutiny. Here is what the pressure means in practice, how Caribbean nations are responding, and what it means for your application.",
    image: "https://i.imgur.com/LTa1ulf.png"
  },
  "portugal-d7-visa-constitutional-court-ruling-2026": {
    title: "Portugal D7 Visa: What the Constitutional Court Ruling Means for Your Residency Plans",
    description: "Portugal's Constitutional Court has blocked a proposal to double the naturalisation wait from 5 to 10 years. Here is what it means for D7 visa holders in 2026, and why the path to EU citizenship remains intact.",
    image: "https://i.imgur.com/QFdzrwq.png"
  },
  "portugal-d8-digital-nomad-visa-2026": {
    title: "Portugal D8 Digital Nomad Visa: Navigating the New Remote Work Residency",
    description: "Portugal's D8 Digital Nomad Visa opened the door for remote workers and freelancers to live legally in one of Europe's most sought-after destinations. Here is what you genuinely need to know to get it right in 2026.",
    image: "https://i.imgur.com/K6jLppt.png"
  },
  "digital-nomad-passports-global-perspective-2026": {
    title: "The Rise of Digital Nomad Passports: Beyond the D8",
    description: "Over 50 countries now offer digital nomad visas, but a temporary visa and a second passport solve very different problems. Here is how location-independent professionals in 2026 are combining both tools into a complete global mobility strategy.",
    image: "https://i.imgur.com/pvc80cf.png"
  },
  "ai-revolution-cbi-due-diligence-2026": {
    title: "The AI Revolution in CBI: How Technology is Reshaping Due Diligence in 2026",
    description: "Artificial intelligence is now an active participant in Caribbean citizenship by investment due diligence. Here is what AI can and cannot do, and what it means for applicants who want to succeed in 2026.",
    image: "https://i.imgur.com/rjTGidm.png"
  },
  "true-cost-second-passport-cbi-2026": {
    title: "The True Cost of a Second Passport: Beyond the Investment",
    description: "The headline investment figure is just the beginning. The true cost of a Caribbean second passport in 2026 includes government fees, due diligence, legal fees, and ancillary costs that add up fast. Here is the full picture.",
    image: "https://i.imgur.com/OPf3UXS.png"
  }
};

const SITE_URL = "https://www.getsecondpassport.eu";
const DEFAULT_IMAGE = "https://i.imgur.com/KTSBU1c.png";
const DEFAULT_TITLE = "Dera Consultants | Portugal Residency & Caribbean Citizenship Advisory";
const DEFAULT_DESC = "Expert guidance on Portugal residency routes and Caribbean citizenship by investment programs.";

// Bot user agents that need server-side meta tags
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

  // Extract slug from path: /api/og?slug=my-article-slug
  const slug = url.searchParams.get("slug") || "";
  const pageUrl = slug
    ? `${SITE_URL}/blog/${slug}`
    : SITE_URL;

  // Only serve the meta HTML to bots — real users get redirected instantly
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
