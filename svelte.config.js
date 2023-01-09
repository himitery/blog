import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  extensions: ['.svelte', '.md', '.svx'],
  preprocess: [
    vitePreprocess(),
    mdsvex({
      layout: './src/lib/markdown/markdown.svelte',
      extensions: ['.md', '.svx'],
    }),
  ],
  kit: {
    adapter: adapter(),
    alias: {
      '@src/*': 'src/*',
      '@lib/*': 'src/lib/*',
      '@routes/*': 'src/routes/*',
      '@components/*': 'src/lib/components/*',
    },
  },
};

export default config;
