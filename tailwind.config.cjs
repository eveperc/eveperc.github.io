/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch',
            color: 'var(--tw-prose-body)',
            lineHeight: '1.75',
            'h1': {
              fontSize: '2.5rem',
              marginBottom: '1rem',
              fontWeight: '700',
            },
            'h2': {
              fontSize: '2rem',
              marginTop: '2rem',
              marginBottom: '1rem',
              fontWeight: '600',
            },
            'h3': {
              fontSize: '1.5rem',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
              fontWeight: '600',
            },
            'p': {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
            },
            'a': {
              color: 'var(--primary)',
              textDecoration: 'underline',
              '&:hover': {
                color: 'var(--primary-focus)',
              },
            },
            'pre': {
              backgroundColor: 'var(--base-200)',
              padding: '1rem',
              borderRadius: '0.5rem',
              overflow: 'auto',
            },
            'code': {
              color: 'var(--base-content)',
              backgroundColor: 'var(--base-200)',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
  daisyui: {
    themes: ["light", "dark"],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
  }
}
