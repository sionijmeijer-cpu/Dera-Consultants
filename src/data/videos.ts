// ─── HOW TO ADD A VIDEO ─────────────────────────────────────────────────────
// Each entry has a topic, a title, a short description, and a source.
//
// Two source types are supported:
//
//   1) Instagram (recommended). Drop a poster image (a screenshot from the
//      reel, saved as PNG) into public/videos/. Paste the Instagram URL.
//      The /watch page renders a clickable card. Clicks open Instagram
//      in a new tab. No video file is hosted on our side.
//
//      { type: 'instagram',
//        url: 'https://www.instagram.com/p/Cxyz123/',
//        poster: '/videos/your-poster.png' }
//
//   2) A video file you commit into this repo. Put the .mp4 in
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
  | { type: 'instagram'; url: string; poster: string; aspect?: '9/16' | '1/1' | '16/9' };

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
];

// Turn an Instagram post or reel URL into the embeddable iframe URL.
// Kept for backwards compatibility with any code that still embeds.
export function toInstagramEmbedUrl(url: string): string {
  const noQuery = url.split('?')[0].replace(/\/+$/, '');
  if (noQuery.endsWith('/embed')) return noQuery + '/';
  return noQuery + '/embed/';
}
