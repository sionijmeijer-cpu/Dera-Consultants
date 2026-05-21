import { useMemo } from 'react';
import { Play } from 'lucide-react';
import { videos, toInstagramEmbedUrl, VideoEntry } from '../data/videos';

const CONTAINER = 'w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10';

function aspectStyle(aspect?: string): React.CSSProperties {
  if (aspect === '9/16') return { aspectRatio: '9 / 16', maxWidth: '420px' };
  if (aspect === '1/1') return { aspectRatio: '1 / 1' };
  return { aspectRatio: '16 / 9' };
}

function VideoEmbed({ entry }: { entry: VideoEntry }) {
  if (entry.source.type === 'github') {
    return (
      <video
        controls
        preload="metadata"
        poster={entry.source.poster}
        className="w-full h-full object-cover bg-black"
      >
        <source src={entry.source.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }
  const embedUrl = toInstagramEmbedUrl(entry.source.url);
  return (
    <iframe
      src={embedUrl}
      title={entry.title}
      loading="lazy"
      allow="encrypted-media"
      allowFullScreen
      scrolling="no"
      className="w-full h-full bg-white"
      style={{ border: 0 }}
    />
  );
}

function VideoCard({ entry }: { entry: VideoEntry }) {
  const isInstagram = entry.source.type === 'instagram';
  return (
    <article
      className="bg-white border border-gray-200 overflow-hidden flex flex-col"
      style={{ borderTop: '3px solid #1B7A4E' }}
    >
      <div
        className="w-full bg-gray-100"
        style={isInstagram ? { minHeight: '560px' } : aspectStyle(entry.source.aspect)}
      >
        <VideoEmbed entry={entry} />
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
            Short videos on Portugal residency, Caribbean citizenship, and the questions clients ask most. Watch the ones that match your situation before you book a consultation.
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
