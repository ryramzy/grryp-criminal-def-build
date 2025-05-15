import { MetadataRoute } from 'next'
import { getBlogPosts } from '@/app/blog/utils'

export const baseUrl = 'https://garrypaytonlaw.com'

export default function sitemap(): MetadataRoute.Sitemap {
  let routes = [
    '',
    '/practice-areas',
    '/staff',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  return [...routes, ...blogs]
}
