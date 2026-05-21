// ─── HOW TO ADD A VIDEO ─────────────────────────────────────────────────────
// Each entry has a topic, a title, a short description, and a source.
//
// Two source types are supported:
//
//   1) A video file you commit into this repo. Put the .mp4 in
//      public/videos/ and reference it as "/videos/your-file.mp4".
//      Optionally include a poster image.
//
//      { type: 'github', src: '/videos/dominica-cbi-overview.mp4',
//        poster: '/images/videos/dominica-cbi-overview.png' }
//
//   2) An Instagram post or reel URL. Paste the full Instagram URL,
//      e.g. https://www.instagram.com/p/Cxyz123/ or
//      https://www.instagram.com/reel/Cxyz123/. The page will turn it
//      into an embed automatically.
//
//      { type: 'instagram',
//        url: 'https://www.instagram.com/reel/Cxyz123/' }
//
// Group videos by topic. Use the same topic string on related entries
// and they will appear under one heading in the order they are listed.
// ─────────────────────────────────────────────────────────────────────────────

export type VideoSource =
  | { type: 'github'; src: string; poster?: string; aspect?: '16/9' | '9/16' | '1/1' }
  | { type: 'instagram'; url: string; aspect?: '9/16' | '1/1' };

export interface VideoEntry {
  id: string;
  topic: string;
  title: string;
  description: string;
  source: VideoSource;
}

export const videos: VideoEntry[] = [
  // Add your first entry here. Example:
  //
  // {
  //   id: 'v1',
  //   topic: 'Portugal Residency',
  //   title: 'D7 visa in five minutes',
  //   description: 'What the D7 actually requires, what the passive income threshold means in practice, and who it is the wrong fit for. For first-time applicants weighing D7 against the Golden Visa.',
  //   source: { type: 'instagram', url: 'https://www.instagram.com/reel/Cxyz123/' },
  // },
];

// Turn an Instagram post or reel URL into the embeddable iframe URL.
export function toInstagramEmbedUrl(url: string): string {
  const noQuery = url.split('?')[0].replace(/\/+$/, '');
  if (noQuery.endsWith('/embed')) return noQuery + '/';
  return noQuery + '/embed/';
}
