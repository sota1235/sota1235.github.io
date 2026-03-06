import RssParser from 'rss-parser'

export type CompanyBlogItem = {
  title: string
  company: '10X'
  link: string
  pubDate: string
  uniqueKey: string
}

const tenXBlogRss = 'https://product.10x.co.jp/rss'

export function extractDateKeyFromUrl(url: string): string | null {
  const match = url.match(/\/entry\/(\d{4})\/(\d{2})\/(\d{2})\/(\d{6})/)
  if (!match) return null
  return `${match[1]}-${match[2]}-${match[3]}-${match[4]}`
}

export async function isAuthoredBySota1235(
  articleUrl: string
): Promise<boolean> {
  try {
    const res = await fetch(articleUrl)
    if (!res.ok) return false
    const html = await res.text()
    return html.includes('blog.hatena.ne.jp/sota1235/')
  } catch (e) {
    console.warn(`Failed to fetch article page: ${articleUrl}`, e)
    return false
  }
}

export async function fetchTenXCompanyBlogs(): Promise<CompanyBlogItem[]> {
  try {
    const parser = new RssParser()
    const feed = await parser.parseURL(tenXBlogRss)
    const results: CompanyBlogItem[] = []

    for (const item of feed.items) {
      const link = item.link
      if (!link) continue

      const uniqueKey = extractDateKeyFromUrl(link)
      if (!uniqueKey) continue

      const authored = await isAuthoredBySota1235(link)
      if (!authored) continue

      const dateMatch = link.match(/\/entry\/(\d{4})\/(\d{2})\/(\d{2})\//)
      const pubDate = dateMatch
        ? `${dateMatch[1]}-${dateMatch[2]}-${dateMatch[3]}`
        : ''
      if (!pubDate) continue

      results.push({
        title: item.title ?? '',
        company: '10X',
        link,
        pubDate,
        uniqueKey,
      })
    }

    return results
  } catch (e) {
    console.warn('Failed to fetch 10X Product Blog RSS:', e)
    return []
  }
}
