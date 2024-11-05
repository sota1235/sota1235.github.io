import RssParser from 'rss-parser'
import type { MediaItem } from './article.ts'

const gengokaFmFeed = 'https://anchor.fm/s/8239c4c0/podcast/rss'
const replayFmFeed = 'https://anchor.fm/s/f148d194/podcast/rss'

export async function getAllPodcasts() {
  const results: MediaItem[] = []
  const parser = new RssParser()
  const gengokaFm = await parser.parseURL(gengokaFmFeed)
  for (const item of gengokaFm.items) {
    results.push({
      kind: 'podcast',
      mediaTitle: '言語化.fm',
      title: item.title!,
      date: item.pubDate!,
      link: item.link!,
      ogpImageUrl: item.itunes.image, // TODO
      uniqueTitle: 'gengokafm',
      uniqueItemKey: item.link!.split('/').pop()!,
    })
  }
  const replayFm = await parser.parseURL(replayFmFeed)
  for (const item of replayFm.items) {
    results.push({
      kind: 'podcast',
      mediaTitle: 'Replay.fm',
      title: item.title!,
      date: item.pubDate!,
      link: item.link!,
      ogpImageUrl: item.itunes.image, // TODO
      uniqueTitle: 'replayfm',
      uniqueItemKey: item.link!.split('/').pop()!,
    })
  }

  return results
}
