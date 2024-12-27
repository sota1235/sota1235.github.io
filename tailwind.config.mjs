import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        black: '#154B5F',
        black_hover: '#0E789F',
      },
      typography: {
        sm: {
          css: [
            {
              h1: {
                fontSize: '1.6rem',
              },
            },
          ],
        },
        base: {
          css: [
            {
              h1: {
                fontSize: '1.7rem',
              },
            },
          ],
        },
      },
    },
  },
  plugins: [
    typography,
    ({ addVariant }) => {
      // workaround: https://github.com/tailwindlabs/tailwindcss-typography/issues/329
      addVariant(
        'prose-inline-code',
        '&.prose :where(:not(pre)>code):not(:where([class~="not-prose"] *))'
      )

      addVariant(
        'prose-code-link',
        '&.prose :where(a:has(code)):not(:where([class~="not-prose"] *))'
      )
    },
  ],
}
