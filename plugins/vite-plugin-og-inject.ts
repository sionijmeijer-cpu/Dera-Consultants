import type { Plugin } from 'vite';
import { articlesMeta } from '../shared/articlesMeta';

export function ogInjectPlugin(): Plugin {
  return {
    name: 'og-inject',
    transformIndexHtml(html: string): string {
      const entries = articlesMeta
        .map(a => {
          const slug  = JSON.stringify(a.slug);
          const title = JSON.stringify(a.title);
          const desc  = JSON.stringify(a.description);
          const img   = JSON.stringify(a.image);
          return `          ${slug}: { title: ${title}, description: ${desc}, image: ${img} }`;
        })
        .join(',\n');

      const articlesBlock = `var ARTICLES = {\n${entries}\n        };`;
      return html.replace('/* __OG_ARTICLES__ */', articlesBlock);
    },
  };
}
