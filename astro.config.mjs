// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import fetchMediaData from './src/integrations/fetch-media-data'
import partytown from '@astrojs/partytown'
import { remarkLinkBookmark } from '@sota1235/remark-link-bookmark'

// https://astro.build/config
export default defineConfig({
  site: 'https://sota1235.com',
  markdown: {
    remarkPlugins: [
      [
        remarkLinkBookmark,
        {
          mergeClassNames: {
            container: 'not-prose',
          },
        },
      ],
    ],
  },
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    react(),
    fetchMediaData(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
})
