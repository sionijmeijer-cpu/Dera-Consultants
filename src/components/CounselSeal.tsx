interface CounselSealProps {
  size?: number;
  className?: string;
}

export default function CounselSeal({ size = 180, className = '' }: CounselSealProps) {
  const color = '#1B7A4E';
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      aria-label="Backed by Licensed Portuguese Counsel"
      role="img"
    >
      <defs>
        <path
          id="seal-outer-text-path"
          d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
        />
        <path
          id="seal-inner-text-path"
          d="M 100,100 m -62,0 a 62,62 0 1,0 124,0 a 62,62 0 1,0 -124,0"
        />
      </defs>

      <circle cx="100" cy="100" r="94" fill="#ffffff" stroke={color} strokeWidth="2" />
      <circle cx="100" cy="100" r="87" fill="none" stroke={color} strokeWidth="1" />
      <circle cx="100" cy="100" r="55" fill="none" stroke={color} strokeWidth="1" />

      <text fill={color} fontFamily="Inter, sans-serif" fontWeight="900" fontSize="10.5" letterSpacing="2">
        <textPath href="#seal-outer-text-path" startOffset="0%">
          BACKED BY LICENSED PORTUGUESE COUNSEL ·
        </textPath>
      </text>

      <text fill={color} fontFamily="Inter, sans-serif" fontWeight="700" fontSize="7.5" letterSpacing="2.5">
        <textPath href="#seal-inner-text-path" startOffset="25%">
          DERA CONSULTANTS · IH SALVO
        </textPath>
      </text>

      <g transform="translate(100,100)" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <line x1="0" y1="-22" x2="0" y2="18" />
        <line x1="-16" y1="-22" x2="16" y2="-22" />
        <path d="M -16,-22 L -22,-4 a 6,6 0 0 0 12,0 Z" />
        <path d="M  16,-22 L  10,-4 a 6,6 0 0 0 12,0 Z" />
        <line x1="-10" y1="20" x2="10" y2="20" />
      </g>

      <text
        x="100"
        y="148"
        textAnchor="middle"
        fill={color}
        fontFamily="Inter, sans-serif"
        fontWeight="900"
        fontSize="7.5"
        letterSpacing="2.5"
      >
        VERIFIED PARTNERSHIP
      </text>
    </svg>
  );
}
