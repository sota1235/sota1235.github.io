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
            container:
              'not-prose border-[1px] border-gray-200 flex flex-col p-4 rounded-lg',
            content: 'flex flex-row',
            info: 'flex-1',
            title:
              'text-lg font-bold text-gray-900 mb-2 hover:underline hover:text-black_hover',
            titleLink: '',
            description: 'text-sm text-gray-700',
            image:
              'w-48 h-24 object-cover rounded-md border-gray-500 border-[1px]',
            footer: 'flex flex-row',
            footerLink: 'text-sm text-gray-900 hover:underline',
            favicon: 'inline pr-2',
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
