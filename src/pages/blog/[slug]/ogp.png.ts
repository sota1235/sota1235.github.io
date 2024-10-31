import { getCollection, getEntry } from 'astro:content'
import type { APIRoute, GetStaticPaths } from 'astro'
import { getOgpResponse } from '../../../ogp/generateResponse.tsx'

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getCollection('blog')
  return posts.map((post) => ({ params: { slug: post.slug } }))
}

export const GET: APIRoute = async ({ params }) => {
  if (!params.slug) {
    return new Response('not found', { status: 404 })
  }

  const post = await getEntry('blog', params.slug)

  return getOgpResponse({
    title: post?.data.title ?? 'No title',
  })
}
