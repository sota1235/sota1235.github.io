import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
})

const companyBlog = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/companyBlog' }),
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
  loader: glob({ pattern: '**/*.json', base: './src/content/podcasts' }),
  schema: mediaSchema,
})

const slides = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/slides' }),
  schema: mediaSchema,
})

const other = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/other' }),
  schema: mediaSchema,
})

export const collections = { companyBlog, blog, podcasts, slides, other }
