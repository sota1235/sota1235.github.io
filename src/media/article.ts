export type MediaItem = {
  kind: 'podcast' | 'article' | 'slide'
  mediaTitle: string
  title: string
  date: string
  link: string
  ogpImageUrl: string
  uniqueTitle: string
  uniqueItemKey: string
}
