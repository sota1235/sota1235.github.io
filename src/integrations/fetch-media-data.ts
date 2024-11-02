import type { AstroIntegration } from 'astro'
import { getAllPodcasts } from '../media/fetchPodcasts.ts'
import { existsSync, writeFileSync } from 'node:fs'

export default (): AstroIntegration => ({
  name: '@sota1235/fetch-media-data',
  hooks: {
    'astro:build:start': async () => {
      const podcasts = await getAllPodcasts()
      // if the file doesn't exist, it will be created under src/content/podcasts directory
      for (const podcast of podcasts) {
        const filename = `${podcast.uniqueTitle}-${podcast.uniqueItemKey}.json`
        const filePath = new URL('../../src/content/podcasts', import.meta.url)
          .pathname
        const path = `${filePath}/${filename}`
        if (existsSync(path)) {
          continue
        }

        // todo: schema check
        writeFileSync(
          path,
          JSON.stringify(
            {
              ...podcast,
              date: new Date(podcast.date).toISOString(),
            },
            null,
            2
          )
        )
      }
    },
  },
})
