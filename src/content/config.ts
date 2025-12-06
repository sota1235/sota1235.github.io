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
    draft: z.boolean().default(false),
  }),
})

const companyBlog = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    company: z.enum(['mercari', '10X']),
    link: z.string(),
    pubDate: z.coerce.date(),
    thumbnailImageUrl: z.string().optional(),
  }),
})

const mediaSchema = z.object({
  kind: z.enum(['podcast', 'article', 'slide', 'other']),
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

const slides = defineCollection({
  type: 'data',
  schema: mediaSchema,
})

const other = defineCollection({
  type: 'data',
  schema: mediaSchema,
})

export const collections = { companyBlog, blog, podcasts, slides, other }
