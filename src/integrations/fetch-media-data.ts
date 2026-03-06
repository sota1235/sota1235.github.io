import type { AstroIntegration } from 'astro'
import { getAllPodcasts } from '../media/fetchPodcasts.ts'
import { fetchTenXCompanyBlogs } from '../media/fetchCompanyBlogs.ts'
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'

function collectExistingCompanyBlogLinks(dirPath: string): Set<string> {
  const links = new Set<string>()
  if (!existsSync(dirPath)) return links

  for (const file of readdirSync(dirPath)) {
    if (!file.endsWith('.json')) continue
    try {
      const content = JSON.parse(readFileSync(`${dirPath}/${file}`, 'utf-8'))
      if (content.link) links.add(content.link)
    } catch {
      // skip invalid files
    }
  }
  return links
}

export default (): AstroIntegration => ({
  name: '@sota1235/fetch-media-data',
  hooks: {
    'astro:build:start': async () => {
      // Fetch podcasts
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

      // Fetch 10X company blogs
      const companyBlogDir = new URL(
        '../../src/content/companyBlog',
        import.meta.url
      ).pathname
      const existingLinks = collectExistingCompanyBlogLinks(companyBlogDir)
      const blogs = await fetchTenXCompanyBlogs()

      for (const blog of blogs) {
        if (existingLinks.has(blog.link)) continue

        const filename = `10x-${blog.uniqueKey}.json`
        const path = `${companyBlogDir}/${filename}`
        if (existsSync(path)) continue

        writeFileSync(
          path,
          JSON.stringify(
            {
              title: blog.title,
              company: blog.company,
              link: blog.link,
              pubDate: blog.pubDate,
            },
            null,
            2
          )
        )
      }
    },
  },
})
