/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  // DaisyUIのテーマ設定
  daisyui: {
    themes: ["light", "dark"], // 必要なテーマを指定
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
  }
}
