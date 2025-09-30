export const dynamic = 'force-static'

export async function GET(): Promise<Response> {
  const robotsTxt = `User-agent: *
Allow: /

# Allow all major search engines and LLM crawlers
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

# LLM and AI crawlers - Enhanced for 2025
User-agent: ChatGPT-User
Allow: /

User-agent: OpenAI-GPT
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: YouBot
Allow: /

User-agent: Applebot
Allow: /

# Additional AI/LLM crawlers
User-agent: anthropic-ai
Allow: /

User-agent: GPTBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: CCBot
Allow: /

User-agent: ChatGPT-UserBot
Allow: /

User-agent: AI2Bot
Allow: /

User-agent: Meta-ExternalAgent
Allow: /

User-agent: Meta-ExternalFetcher
Allow: /

User-agent: OAI-SearchBot
Allow: /

# Academic and research crawlers
User-agent: ia_archiver
Allow: /

User-agent: archive.org_bot
Allow: /

# Disallow admin and private areas (if any)
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

# Sitemap location
Sitemap: https://osscommerce.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1`

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400'
    }
  })
}