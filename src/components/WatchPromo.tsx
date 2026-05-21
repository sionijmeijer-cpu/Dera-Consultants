import { Play, ArrowRight } from 'lucide-react';

const CONTAINER = 'w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10';

export default function WatchPromo() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className={CONTAINER}>
        <div
          className="bg-white border border-gray-200 p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center gap-8"
          style={{ borderTop: '4px solid #1B7A4E' }}
        >
          <div className="flex-shrink-0 w-14 h-14 bg-[#1B7A4E] flex items-center justify-center">
            <Play className="w-6 h-6 text-white" fill="white" />
          </div>

          <div className="flex-1">
            <p
              className="text-[10px] font-black uppercase tracking-[0.22em] text-[#1B7A4E] mb-2"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Video Library
            </p>
            <h2
              className="text-[26px] sm:text-[32px] font-black text-gray-900 mb-3 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Watch before you book
            </h2>
            <p
              className="text-gray-600 text-[16px] leading-relaxed max-w-2xl"
              style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}
            >
              Short videos on the programmes, the timelines, and the questions clients ask most. See me explain it before we ever get on a call.
            </p>
          </div>

          <a
            href="/watch"
            className="inline-flex items-center gap-2 bg-[#1B7A4E] text-white px-6 py-3 font-black uppercase tracking-widest text-[11px] hover:bg-[#156B3F] transition-all duration-200 whitespace-nowrap"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Watch the Videos
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
