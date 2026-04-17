// Reusable "See other programmes" section
// Used at the bottom of Portugal, Caribbean, and Americans pages

interface Programme {
  title: string;
  description: string;
  href: string;
  emoji: string;
  color: string;
  label: string;
}

const ALL_PROGRAMMES: Record<string, Programme> = {
  portugal: {
    title: "Move to Portugal",
    description: "D7, D8, D2, and Golden Visa routes for individuals, families, and investors seeking EU residency.",
    href: "/portugal-europe-residency",
    emoji: "🇵🇹",
    color: "#1B7A4E",
    label: "Explore Portugal",
  },
  caribbean: {
    title: "Caribbean Citizenship",
    description: "Five government-run citizenship by investment programmes with visa-free access to 140 plus countries.",
    href: "/caribbean-citizenship-by-investment",
    emoji: "🏝️",
    color: "#0f3460",
    label: "Explore Caribbean",
  },
  americans: {
    title: "Portugal for Americans",
    description: "A focused route for US citizens navigating the specific tax, timeline, and visa questions that come with moving from the US.",
    href: "/americans-moving-to-portugal",
    emoji: "🇺🇸",
    color: "#B45309",
    label: "Explore US pathway",
  },
};

interface OtherProgrammesProps {
  exclude: "portugal" | "caribbean" | "americans";
}

const CONTAINER = "w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10";

export default function OtherProgrammes({ exclude }: OtherProgrammesProps) {
  const programmes = Object.entries(ALL_PROGRAMMES)
    .filter(([key]) => key !== exclude)
    .map(([, value]) => value);

  return (
    <section className="py-20 bg-white border-t border-gray-200">
      <div className={CONTAINER}>
        <p
          className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Other routes
        </p>
        <h2
          className="text-[28px] sm:text-[34px] font-black text-gray-900 mb-10 leading-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          See other programmes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {programmes.map(p => (
            <a
              key={p.href}
              href={p.href}
              className="group flex items-start gap-5 p-7 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ borderTop: `3px solid ${p.color}`, textDecoration: 'none' }}
            >
              <div className="text-4xl flex-shrink-0">{p.emoji}</div>
              <div className="flex-1 min-w-0">
                <h3
                  className="text-[19px] font-black text-gray-900 mb-2 leading-tight"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'inherit' }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-[14px] text-gray-600 leading-relaxed mb-4"
                  style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}
                >
                  {p.description}
                </p>
                <span
                  className="text-[11px] font-black uppercase tracking-widest transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif", color: p.color }}
                >
                  {p.label} →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
