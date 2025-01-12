import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import daisyui from 'daisyui';

export default defineConfig({
  site: 'https://eveperc.github.io',
  experimental: {
    svg: true,
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
