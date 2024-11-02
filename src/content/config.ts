import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
})

const mediaSchema = z.object({
  kind: z.enum(['podcast', 'article', 'slide']),
  mediaTitle: z.string(),
  title: z.string(),
  date: z.string(),
  link: z.string(),
  ogpImageUrl: z.string(),
})

const podcasts = defineCollection({
  type: 'data',
  schema: mediaSchema,
})

export const collections = { blog, podcasts }
