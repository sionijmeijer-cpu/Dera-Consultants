// ─── HOW TO ADD A VIDEO ─────────────────────────────────────────────────────
// Each entry has a topic, a title, a short description, and a source.
//
// Three source types are supported:
//
//   1) Instagram. Drop a poster image (a screenshot from the reel, saved as
//      PNG) into public/images/videos/. Paste the Instagram URL. The /watch
//      page renders a clickable card. Clicks open Instagram in a new tab.
//
//      { type: 'instagram',
//        url: 'https://www.instagram.com/p/Cxyz123/',
//        poster: '/images/videos/your-poster.png',
//        aspect: '9/16' }
//
//   2) YouTube. Paste any YouTube URL (watch, youtu.be, or shorts).
//      The thumbnail is fetched automatically from YouTube, so no poster
//      file needed. Clicks open YouTube in a new tab. Use aspect '16/9'
//      for standard videos and '9/16' for Shorts. Optionally provide a
//      custom poster to override the auto-derived thumbnail.
//
//      { type: 'youtube',
//        url: 'https://www.youtube.com/watch?v=Cxyz123',
//        aspect: '16/9' }
//
//   3) A video file you commit into this repo. Put the .mp4 in
//      public/videos/ and reference it as "/videos/your-file.mp4".
//      Use this for videos you have rights to host directly. Best for
//      short, compressed clips. GitHub web uploads are capped at 25 MB.
//
//      { type: 'github', src: '/videos/dominica-cbi-overview.mp4',
//        poster: '/videos/dominica-cbi-overview.png' }
//
// Group videos by topic. Use the same topic string on related entries
// and they will appear under one heading in the order they are listed.
// ─────────────────────────────────────────────────────────────────────────────

export type VideoSource =
  | { type: 'github'; src: string; poster?: string; aspect?: '16/9' | '9/16' | '1/1' }
  | { type: 'instagram'; url: string; poster: string; aspect?: '9/16' | '1/1' | '16/9' }
  | { type: 'youtube'; url: string; poster?: string; aspect?: '16/9' | '9/16' | '1/1' };

export interface VideoEntry {
  id: string;
  topic: string;
  title: string;
  description: string;
  source: VideoSource;
}

export const videos: VideoEntry[] = [
  {
    id: 'v1',
    topic: 'Featured',
    title: 'What I actually do',
    description: 'What I actually do as an advisor, in two minutes. The work behind the title, the partners I rely on, and what working with me looks like. Watch this first if you are trying to figure out whether an advisor is right for you.',
    source: {
      type: 'instagram',
      url: 'https://www.instagram.com/p/DYmzBJcIIOy/',
      poster: '/images/videos/What_I_exactly_do.png',
      aspect: '9/16',
    },
  },
  {
    id: 'v2',
    topic: 'Featured',
    title: 'Americans investors are not happy',
    description: 'Hundreds of American Golden Visa investors are preparing legal action against Portugal after the citizenship timeline doubled to ten years. The short version of what happened, why it matters, and where the case is heading.',
    source: {
      type: 'instagram',
      url: 'https://www.instagram.com/p/DYPppHMoiyH/',
      poster: '/images/videos/Americans_are_suing.png',
      aspect: '9/16',
    },
  },
  {
    id: 'v3',
    topic: 'Featured',
    title: 'The passport portfolio',
    description: 'Why second citizenship is best treated as a portfolio rather than a single decision. The case for combining Caribbean speed with European depth, and the framework I use with clients building long-term mobility strategies.',
    source: {
      type: 'instagram',
      url: 'https://www.instagram.com/p/DXFFni6iLdt/',
      poster: '/images/videos/Build_your_passport.png',
      aspect: '9/16',
    },
  },
  {
  id: 'v4',
  topic: 'Featured',
  title: 'Dominca VS ST Lucia',
  description: 'Two to three sentences on what it covers and who it is for.',
  source: {
    type: 'youtube',
    url: 'https://www.youtube.com/watch?v=sdrTrV6E2Ew',
    aspect: '16/9',   // use '9/16' for Shorts
  },
},
];

// Turn an Instagram post or reel URL into the embeddable iframe URL.
// Kept for backwards compatibility with any code that still embeds.
export function toInstagramEmbedUrl(url: string): string {
  const noQuery = url.split('?')[0].replace(/\/+$/, '');
  if (noQuery.endsWith('/embed')) return noQuery + '/';
  return noQuery + '/embed/';
}

// Extract an 11-character YouTube video ID from any of the standard URL forms:
// youtube.com/watch?v=ID, youtu.be/ID, youtube.com/shorts/ID, youtube.com/embed/ID.
export function getYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/|youtube\.com\/embed\/|youtube\.com\/v\/)([A-Za-z0-9_-]{11})/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}

// Return YouTube's auto-hosted thumbnail URL for a given video URL.
// hqdefault.jpg is available for every video and is 480x360.
export function getYouTubeThumbnail(url: string): string | null {
  const id = getYouTubeId(url);
  if (!id) return null;
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}
