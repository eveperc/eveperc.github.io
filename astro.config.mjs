import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import daisyui from 'daisyui';
import path from 'path';

export default defineConfig({
  site: 'https://eveperc.github.io',
  experimental: {
    svg: true,
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
        '@components': path.resolve('./src/components'),
        '@layouts': path.resolve('./src/layouts'),
        '@features': path.resolve('./src/features'),
        '@types': path.resolve('./src/types'),
        '@public': path.resolve('./public'),
      },
    },
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
      config: {
        content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
        theme: {
          extend: {},
        },
        plugins: [daisyui],
        daisyui: {
          themes: ["light", "dark"],
          darkTheme: "dark",
          base: true,
          styled: true,
          utils: true,
        }
      }
    }),
    react()
  ]
});
