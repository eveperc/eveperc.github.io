import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://eveperc.github.io',
  integrations: [
    tailwind({
      // TailwindのJITモードを有効化
      applyBaseStyles: false,
      // DaisyUIの設定を含める
      config: {
        plugins: [require("daisyui")]
      }
    })
  ]
});
