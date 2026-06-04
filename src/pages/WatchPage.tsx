import { useMemo } from 'react';
import { Play, Instagram } from 'lucide-react';
import { videos, VideoEntry } from '../data/videos';

const CONTAINER = 'w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10';

function aspectFor(aspect?: string): string {
  if (aspect === '9/16') return '9 / 16';
  if (aspect === '1/1') return '1 / 1';
  return '16 / 9';
}

function InstagramCard({ entry }: { entry: VideoEntry & { source: Extract<VideoEntry['source'], { type: 'instagram' }> } }) {
  const ratio = aspectFor(entry.source.aspect);
  return (
    <a
      href={entry.source.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
      style={{ borderTop: '3px solid #1B7A4E' }}
    >
      {/* Poster with overlay */}
      <div
        className="relative w-full bg-gray-900 overflow-hidden"
        style={{ aspectRatio: ratio }}
      >
        <img
          src={entry.source.poster}
          alt={entry.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Dark gradient overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/30 pointer-events-none" />
        {/* Centered play button */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
            <Play
              className="w-7 h-7 sm:w-9 sm:h-9 text-[#1B7A4E]"
              fill="#1B7A4E"
              style={{ marginLeft: '4px' }}
            />
          </div>
        </div>
        {/* Watch on Instagram badge */}
        <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 shadow-md">
          <Instagram size={12} className="text-[#1B7A4E]" />
          <span
            className="text-[9px] font-black uppercase tracking-widest text-gray-900"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Watch on Instagram
          </span>
        </div>
      </div>

      {/* Text */}
      <div className="p-5 sm:p-6">
        <h3
          className="text-[20px] font-black text-gray-900 mb-2 leading-tight group-hover:text-[#1B7A4E] transition-colors"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {entry.title}
        </h3>
        <p
          className="text-gray-600 text-[15px] leading-relaxed"
          style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}
        >
          {entry.description}
        </p>
      </div>
    </a>
  );
}

function GithubVideoCard({ entry }: { entry: VideoEntry & { source: Extract<VideoEntry['source'], { type: 'github' }> } }) {
  const ratio = aspectFor(entry.source.aspect);
  return (
    <article
      className="bg-white border border-gray-200 overflow-hidden flex flex-col"
      style={{ borderTop: '3px solid #1B7A4E' }}
    >
      <div className="w-full bg-black" style={{ aspectRatio: ratio }}>
        <video
          controls
          preload="metadata"
          poster={entry.source.poster}
          className="w-full h-full object-cover bg-black"
        >
          <source src={entry.source.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        <h3
          className="text-[20px] font-black text-gray-900 mb-2 leading-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {entry.title}
        </h3>
        <p
          className="text-gray-600 text-[15px] leading-relaxed"
          style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}
        >
          {entry.description}
        </p>
      </div>
    </article>
  );
}

function VideoCard({ entry }: { entry: VideoEntry }) {
  if (entry.source.type === 'instagram') {
    return <InstagramCard entry={entry as VideoEntry & { source: Extract<VideoEntry['source'], { type: 'instagram' }> }} />;
  }
  return <GithubVideoCard entry={entry as VideoEntry & { source: Extract<VideoEntry['source'], { type: 'github' }> }} />;
}

export default function WatchPage() {
  const grouped = useMemo(() => {
    const map = new Map<string, VideoEntry[]>();
    for (const v of videos) {
      const list = map.get(v.topic) ?? [];
      list.push(v);
      map.set(v.topic, list);
    }
    return Array.from(map.entries());
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#0f3460] to-[#1a5276] text-white py-16 sm:py-20">
        <div className={CONTAINER}>
          <p
            className="text-[11px] font-black uppercase tracking-[0.25em] text-[#4ade80] mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Video Library
          </p>
          <h1
            className="text-[36px] sm:text-[48px] lg:text-[58px] font-black leading-[1.05] tracking-tight mb-5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Watch Before You Book
          </h1>
          <p
            className="text-[17px] sm:text-[19px] text-white/85 max-w-3xl leading-relaxed"
            style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}
          >
            Short videos on Portugal residency, Caribbean citizenship, and the questions clients ask most. Tap any video to watch the full version on Instagram.
          </p>
        </div>
      </section>

      {/* Video grid */}
      <section className="py-14 sm:py-20">
        <div className={CONTAINER}>
          {grouped.length === 0 ? (
            <div
              className="text-center py-20 border border-gray-200 bg-gray-50"
              style={{ borderTop: '3px solid #1B7A4E' }}
            >
              <Play className="w-12 h-12 text-[#1B7A4E] mx-auto mb-4" />
              <h2
                className="text-[22px] font-black text-gray-900 mb-2"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Videos coming soon
              </h2>
              <p
                className="text-gray-600 text-[15px] max-w-md mx-auto"
                style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}
              >
                New videos are being added. Check back shortly or follow on Instagram for the latest.
              </p>
            </div>
          ) : (
            <div className="space-y-16">
              {grouped.map(([topic, list]) => (
                <div key={topic}>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-1 h-6 flex-shrink-0 bg-[#1B7A4E]" />
                    <h2
                      className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-900"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {topic}
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {list.map(entry => (
                      <VideoCard key={entry.id} entry={entry} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
