interface CounselSealProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SIZES = {
  sm: { width: 200, padding: 'p-3', iconSize: 22, headlineSize: 'text-[9px]', bodySize: 'text-[11px]', footSize: 'text-[8px]' },
  md: { width: 240, padding: 'p-4', iconSize: 28, headlineSize: 'text-[10px]', bodySize: 'text-[13px]', footSize: 'text-[9px]' },
  lg: { width: 320, padding: 'p-6', iconSize: 40, headlineSize: 'text-[11px]', bodySize: 'text-[18px]', footSize: 'text-[10px]' },
};

export default function CounselSeal({ size = 'md', className = '' }: CounselSealProps) {
  const s = SIZES[size];
  return (
    <div
      className={`inline-flex flex-col bg-white border border-gray-300 shadow-sm ${className}`}
      style={{ width: s.width, borderTop: '3px solid #1B7A4E' }}
    >
      {/* Icon row */}
      <div className={`flex items-center justify-center bg-[#1B7A4E] ${s.padding}`}>
        <svg
          width={s.iconSize}
          height={s.iconSize}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
          <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
          <path d="M7 21h10" />
          <path d="M12 3v18" />
          <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
        </svg>
      </div>

      {/* Text block */}
      <div className={`${s.padding} text-center`}>
        <p
          className={`${s.headlineSize} font-black uppercase tracking-[0.22em] text-[#1B7A4E] mb-1.5`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Backed by
        </p>
        <p
          className={`${s.bodySize} font-black uppercase tracking-[0.08em] text-gray-900 leading-tight`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Licensed
          <br />
          Portuguese
          <br />
          Counsel
        </p>
        <div className="my-3 mx-auto h-px w-8 bg-gray-300" />
        <p
          className={`${s.footSize} font-bold uppercase tracking-[0.18em] text-gray-500`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          IH Salvo Partnership
        </p>
      </div>
    </div>
  );
}
