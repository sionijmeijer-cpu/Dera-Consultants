import { Star } from 'lucide-react';

export default function TrustpilotFooter() {
  return (
    <div className="flex items-center gap-3 text-sm">
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#00b67a] text-[#00b67a]" />
        ))}
      </div>

      <a
        href="https://www.trustpilot.com/review/www.getsecondpassport.eu"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900 transition-colors"
      >
        Read our Trustpilot reviews
      </a>
    </div>
  );
}
