import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const postsDirectory = path.join(process.cwd(), 'content/blog')

// Function to add locale prefix to internal links
function addLocaleToLinks(html: string, locale: string = 'en'): string {
  // Replace internal links (starting with /) with locale-prefixed versions
  return html.replace(/href="(\/[^"]*)"/g, (match, url) => {
    // Skip if already has locale or is external
    if (url.startsWith(`/${locale}/`) || url.startsWith('http')) {
      return match
    }
    return `href="/${locale}${url}"`
  })
}

// Configure marked for better HTML output
marked.setOptions({
  gfm: true,
  breaks: true,
})

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  tags: string[]
  featured?: boolean
  image?: string
}

export function getAllPosts(locale: string = 'en'): BlogPost[] {
  try {
    // Create posts directory if it doesn't exist
    if (!fs.existsSync(postsDirectory)) {
      fs.mkdirSync(postsDirectory, { recursive: true })
      return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        const htmlContent = marked(content)
        const localizedContent = addLocaleToLinks(htmlContent, locale)

        return {
          slug,
          content: localizedContent,
          title: data.title || 'Untitled',
          excerpt: data.excerpt || '',
          date: data.date || new Date().toISOString(),
          author: data.author || 'OS² Commerce Team',
          tags: data.tags || [],
          featured: data.featured || false,
          image: data.image || null,
        } as BlogPost
      })

    // Sort posts by date (newest first)
    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
}

export function getPostBySlug(slug: string, locale: string = 'en'): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)

    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const htmlContent = marked(content)
    const localizedContent = addLocaleToLinks(htmlContent, locale)

    return {
      slug,
      content: localizedContent,
      title: data.title || 'Untitled',
      excerpt: data.excerpt || '',
      date: data.date || new Date().toISOString(),
      author: data.author || 'OS² Commerce Team',
      tags: data.tags || [],
      featured: data.featured || false,
      image: data.image || null,
    } as BlogPost
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error)
    return null
  }
}

export function getFeaturedPosts(limit: number = 3, locale: string = 'en'): BlogPost[] {
  const allPosts = getAllPosts(locale)
  return allPosts.filter(post => post.featured).slice(0, limit)
}

export function getPostsByTag(tag: string, locale: string = 'en'): BlogPost[] {
  const allPosts = getAllPosts(locale)
  return allPosts.filter(post => post.tags.includes(tag))
}

export function getAllTags(locale: string = 'en'): string[] {
  const allPosts = getAllPosts(locale)
  const tags = new Set<string>()

  allPosts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag))
  })

  return Array.from(tags).sort()
}

export function paginatePosts(posts: BlogPost[], page: number = 1, postsPerPage: number = 6) {
  const startIndex = (page - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  
  return {
    posts: posts.slice(startIndex, endIndex),
    currentPage: page,
    totalPages: Math.ceil(posts.length / postsPerPage),
    totalPosts: posts.length,
    hasNextPage: endIndex < posts.length,
    hasPrevPage: page > 1
  }
}