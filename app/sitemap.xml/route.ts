import { MetadataRoute } from 'next'
import { appsConfig } from '@/lib/apps-config'
import { locales } from '@/lib/i18n/config'
import { readdir } from 'fs/promises'
import { join } from 'path'

export const dynamic = 'force-static'

export async function GET(): Promise<Response> {
  const baseUrl = 'https://osscommerce.com'
  
  // Get blog posts
  let blogSlugs: string[] = []
  try {
    const contentDir = join(process.cwd(), 'content', 'blog')
    const files = await readdir(contentDir)
    blogSlugs = files
      .filter(file => file.endsWith('.md'))
      .map(file => file.replace('.md', ''))
  } catch (error) {
    console.warn('Could not read blog directory:', error)
  }

  // Create static pages for each locale
  const staticPagePaths = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/apps', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/support', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/docs', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/tracking', priority: 0.6, changeFrequency: 'monthly' as const },
  ]

  const staticPages = staticPagePaths.flatMap(page => 
    locales.map(locale => ({
      url: `${baseUrl}/${locale}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    }))
  )

  // Add blog posts for each locale
  const blogPages = blogSlugs.flatMap(slug => 
    locales.map(locale => ({
      url: `${baseUrl}/${locale}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  )

  // Add app documentation pages for each locale
  const appDocPages = appsConfig.flatMap(app => 
    locales.map(locale => ({
      url: `${baseUrl}/${locale}/docs/${app.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  )

  const allPages = [...staticPages, ...blogPages, ...appDocPages]

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified.toISOString()}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`)
  .join('\n')}
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  })
}