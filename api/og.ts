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
  "dominica-citizenship-by-investment-complete-guide-2026": {
    title: "Dominica Citizenship by Investment 2026: The Complete Guide",
    description: "Dominica's citizenship by investment programme has been running since 1993 and remains the most affordable entry point in the Caribbean at $200,000. This is the complete, honest guide to how it works in 2026, what it costs in full, what the passport actually gets you, and what changed this year.",
    image: "https://www.getsecondpassport.eu/images/articles/dominica-cbi-complete-guide-2026.png",
  },
  "golden-visa-investors-lawsuit-portugal-citizenship-law-2026": {
    title: "500 Golden Visa Investors Are Preparing to Sue Portugal. Here Is What It Means for You.",
    description: "More than 500 Golden Visa holders, most of them American, are preparing a collective lawsuit against the Portuguese government after the citizenship timeline was extended from five years to ten. Here is what their legal argument is, what protection exists for people already in the process, and what this means for anyone considering Portugal right now.",
    image: "https://www.getsecondpassport.eu/images/articles/golden-visa-investors-lawsuit-portugal-10-year-citizenship-2026.png",
  },
  "portugal-civic-knowledge-test-citizenship-2026": {
    title: "Portugal's New Civic Knowledge Test: What It Is, What It Covers, and What It Means for You",
    description: "Portugal's new nationality law introduces a civic knowledge test for anyone applying for citizenship. Here is what it covers, what is still unknown, how it compares to the UK, Germany, and the Netherlands, and what it means if you are planning to move to Portugal.",
    image: "https://www.getsecondpassport.eu/images/articles/portugal-civic-knowledge-test-citizenship-2026.png",
  },
  "portugal-10-year-citizenship-law-signed-may-2026": {
    title: "Portugal Just Signed the 10-Year Citizenship Law. Here Is What It Actually Means.",
    description: "Yesterday, President António José Seguro signed Portugal's revised Nationality Law into effect. After months of uncertainty, the decision has been made. Here is what actually changed, what did not, and what the right move is depending on where you stand right now.",
    image: "https://i.imgur.com/PzjIHvC.png",
  },
  "nigerian-south-african-ghanaian-passport-visa-free-access-2026": {
    title: "What Your Nigerian, South African or Ghanaian Passport Actually Gets You in 2026, And What to Do About It",
    description: "A Nigerian, South African, or Ghanaian passport is not a weak document. But in 2026, the gap between what it offers and what a second passport unlocks is significant enough to matter for anyone building an international career, business, or family plan.",
    image: "https://i.imgur.com/JkP7ioA.png",
  },
  "why-investors-still-choosing-portugal-citizenship-decision-pending-2026": {
    title: "Why Investors Are Still Choosing Portugal Even While The Decision Is Pending",
    description: "Since April 21st came and went without a presidential signature, the speculation has been loud. And yet serious investors are still moving forward with Portugal. Not despite the uncertainty. In some cases, because of it. Here is the thinking behind that decision.",
    image: "https://i.imgur.com/PEMUbd9.png",
  },
  "portugal-golden-visa-vs-d7-visa-2026": {
    title: "Portugal Golden Visa vs D7 Visa: Which One Actually Fits Your Situation in 2026",
    description: "Both the Golden Visa and the D7 lead to a Portuguese passport in five years. But the paths are completely different. One is an investment route that lets you stay home. The other is a residency route that requires you to move. Here is how to know which one fits your life.",
    image: "https://i.imgur.com/bGZGuIO.png",
  },
  "second-citizenship-consultants-what-to-look-for-avoid": {
    title: "Second Citizenship Consultants: What to Look for and What to Avoid",
    description: "Not all second citizenship consultants are equal. Some will save you years of stress and tens of thousands of dollars. Others will cost you both. Here is exactly what separates a good advisor from a bad one, and the questions to ask before you sign anything.",
    image: "https://i.imgur.com/JjKPEXE.png",
  },
  "portugal-citizenship-presidential-decision-final-24-hours-april-2026": {
    title: "Final 24 Hours: The President's Decision on Portugal's 5-to-10 Year Citizenship Rule",
    description: "Tomorrow, April 21st, 2026, is the deadline for the President of Portugal to make his final decision on the proposed 10-year citizenship rule. Here is what the three possible outcomes mean for your residency plans and what to do right now.",
    image: "https://i.imgur.com/LJVcDAf.png",
  },
  "portugal-golden-visa-2026-property-route-fund-investment": {
    title: "Portugal Golden Visa 2026: What Happened to the Property Route and What Investors Are Doing Instead",
    description: "The Portugal Golden Visa still exists in 2026 but the property route is closed. Serious investors have moved to the fund route. Here is exactly what changed, what it costs, who it suits, and why many clients are finding the new route better than the old one.",
    image: "https://i.imgur.com/fHBRYx2.png",
  },
  "ai-revolution-cbi-due-diligence-2026": {
    title: "The AI Revolution in CBI: How Technology is Reshaping Due Diligence in 2026",
    description: "Artificial intelligence is now an active participant in Caribbean citizenship by investment due diligence. Here is what AI can and cannot do, and what it means for applicants who want to succeed in 2026.",
    image: "https://i.imgur.com/rjTGidm.png",
  },
  "portugal-citizenship-5-to-10-year-rule-presidential-decision-2026": {
    title: "Breaking News: Portugal's 5-to-10 Year Citizenship Rule: Countdown to Presidential Decision",
    description: "A legislative proposal to double Portugal's naturalisation period from 5 to 10 years has passed Parliament and now sits on the President's desk. The decision is expected by April 21st, 2026. Here is what it means for every D7, D8, and Golden Visa holder.",
    image: "https://www.getsecondpassport.eu/images/articles/portugal-citizenship-5-to-10-year-rule-presidential-decision-april-2026.png",
  },
  "digital-nomad-passports-global-perspective-2026": {
    title: "The Rise of Digital Nomad Passports: Beyond the D8",
    description: "Over 50 countries now offer digital nomad visas, but a temporary visa and a second passport solve very different problems. Here is how location-independent professionals in 2026 are combining both tools into a complete global mobility strategy.",
    image: "https://i.imgur.com/pvc80cf.png",
  },
  "st-lucia-vs-dominica-cbi-families-2026": {
    title: "St. Lucia vs. Dominica CBI: Which is the Smarter Choice for Families in 2026?",
    description: "St. Lucia and Dominica both offer strong Caribbean citizenship by investment programmes for families. But the right choice depends on your financial strategy, timeline, and whether a refundable investment matters to you.",
    image: "https://i.imgur.com/f62mJXO.png",
  },
  "eu-pressure-caribbean-cbi-2026": {
    title: "EU Pressure on CBI: What Applicants Need to Know in 2026",
    description: "The European Union has placed Caribbean citizenship by investment programmes under unprecedented scrutiny. Here is what the pressure means in practice, how Caribbean nations are responding, and what it means for your application.",
    image: "https://i.imgur.com/LTa1ulf.png",
  },
  "portugal-d7-visa-constitutional-court-ruling-2026": {
    title: "Portugal D7 Visa: What the Constitutional Court Ruling Means for Your Residency Plans",
    description: "Portugal's Constitutional Court has blocked a proposal to double the naturalisation wait from 5 to 10 years. Here is what it means for D7 visa holders in 2026, and why the path to EU citizenship remains intact.",
    image: "https://i.imgur.com/QFdzrwq.png",
  },
  "geopolitical-shifts-2026-second-passport-demand": {
    title: "Geopolitical Shifts 2026: How Global Events Are Reshaping Second Passport Demand",
    description: "In 2026, a second passport is less about escaping and more about enabling. Regional conflicts, economic uncertainty, and shifting visa regimes are driving a new wave of demand for Caribbean CBI and European residency programmes.",
    image: "https://i.imgur.com/n534dxb.png",
  },
  "portugal-d8-digital-nomad-visa-2026": {
    title: "Portugal D8 Digital Nomad Visa: Navigating the New Remote Work Residency",
    description: "Portugal's D8 Digital Nomad Visa opened the door for remote workers and freelancers to live legally in one of Europe's most sought-after destinations. Here is what you need to know to get it right in 2026.",
    image: "https://i.imgur.com/K6jLppt.png",
  },
  "second-passport-business-expansion-market-access-2026": {
    title: "How to Leverage a Second Passport for Business Expansion and Market Access",
    description: "For global entrepreneurs, a second passport is not just a travel document. It is a strategic business tool that unlocks markets, accelerates deal-making, diversifies risk, and opens operational options that single-passport holders simply do not have.",
    image: "https://i.imgur.com/eO2A6Z0.png",
  },
  "true-cost-second-passport-cbi-2026": {
    title: "The True Cost of a Second Passport: Beyond the Investment",
    description: "The headline investment figure is just the beginning. The true cost of a Caribbean second passport in 2026 includes government fees, due diligence, legal fees, and ancillary costs that add up fast. Here is the full picture.",
    image: "https://i.imgur.com/OPf3UXS.png",
  },
  "global-entrepreneur-visa-international-business-2026": {
    title: "The Rise of the Global Entrepreneur Visa: Your Path to International Business Expansion",
    description: "In 2026, more countries than ever are actively competing to attract ambitious founders. Here is how Global Entrepreneur Visas work, what the best programmes look for, and how to position your application for success.",
    image: "https://i.imgur.com/CYT10dF.png",
  },
  "global-capital-funding-entrepreneurs-international-mobility-2026": {
    title: "Accessing Global Capital: Funding Opportunities for Entrepreneurs with International Mobility",
    description: "Local funding markets limit what is possible. In 2026, entrepreneurs with second passports and strategic residency are accessing venture capital, angel networks, and government incentives that are simply not available to those without international mobility.",
    image: "https://i.imgur.com/kyjpjYX.png",
  },
  "tax-strategies-digital-nomads-global-entrepreneurs-2026": {
    title: "Tax Strategies for Digital Nomads and Global Entrepreneurs: Navigating the 2026 Landscape",
    description: "International tax planning in 2026 is not optional for digital nomads and global entrepreneurs. Understanding tax residency, double taxation treaties, and business incorporation choices is the difference between optimising your finances and paying far more than you should.",
    image: "https://i.imgur.com/ALdbrZr.png",
  },
  "protecting-business-assets-legal-structures-global-entrepreneurs-2026": {
    title: "Protecting Your Business Assets: Legal Structures for Global Entrepreneurs",
    description: "As you expand your business across borders, choosing the right legal structure is not a formality. It is a strategic decision that determines how well your assets, intellectual property, and operational integrity are protected.",
    image: "https://i.imgur.com/bjaGM5D.png",
  },
  "caribbean-cbi-enhanced-due-diligence-2026": {
    title: "Caribbean CBI: The New Era of Enhanced Due Diligence",
    description: "Caribbean citizenship by investment has entered a new era. Enhanced due diligence, deeper background checks, and international cooperation mean that only well-prepared, transparent applicants succeed in 2026.",
    image: "https://i.imgur.com/fImh7Mk.png",
  },
};

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
