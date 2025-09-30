import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowLeft, ArrowRight, Share2, Tag } from "lucide-react"
import Link from "next/link"
import { LocaleLink } from "@/components/locale-link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getPostBySlug, getAllPosts } from "@/lib/blog"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { StructuredData } from "@/components/structured-data"
import { articleSchema } from "@/components/seo"

interface BlogPostPageProps {
  params: {
    slug: string
    locale: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug, locale } = await params
  const post = getPostBySlug(slug, locale)
  
  if (!post) {
    return {
      title: "Post Not Found | OS² Commerce"
    }
  }

  return {
    title: `${post.title} | OS² Commerce Blog`,
    description: post.excerpt || `Read ${post.title} on the OS² Commerce blog. Expert e-commerce insights and Shopify tips.`,
    keywords: `${post.tags.join(", ")}, e-commerce, Shopify, OS² Commerce, ${post.author}`,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt || `Read ${post.title} on the OS² Commerce blog`,
      type: "article",
      images: post.image ? [post.image] : ["/oss-logo.png"],
      authors: [post.author],
      publishedTime: post.date,
      tags: post.tags
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || `Read ${post.title} on the OS² Commerce blog`,
      images: post.image ? [post.image] : ["/oss-logo.png"]
    }
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug, locale } = await params
  const post = getPostBySlug(slug, locale)

  if (!post) {
    notFound()
  }

  const allPosts = getAllPosts(locale)
  const currentIndex = allPosts.findIndex(p => p.slug === slug)
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null
  const relatedPosts = allPosts
    .filter(p => p.slug !== slug && p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <StructuredData data={articleSchema({
        title: post.title,
        description: post.excerpt || post.title,
        author: post.author,
        publishDate: post.date,
        image: post.image
      })} />
      <Header />
      
      <main>
        {/* Article Header */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <Button
                variant="outline"
                size="sm"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 mb-8"
                asChild
              >
                <LocaleLink href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </LocaleLink>
              </Button>

              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                {post.featured && (
                  <Badge className="bg-gradient-to-r from-[#F6B86C]/20 to-[#FF8C42]/20 text-[#F6B86C] border-[#F6B86C]/30">
                    Featured
                  </Badge>
                )}
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-gray-300 text-gray-700"
                  >
                    <Tag className="mr-1 h-3 w-3" />
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              {post.excerpt && (
                <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                  {post.excerpt}
                </p>
              )}

              {/* Author and Date */}
              <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
                <div className="flex items-center gap-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent"
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <article
                className="blog-content prose prose-lg max-w-none
                  [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:text-gray-900 [&_h1]:mt-8 [&_h1]:mb-6 [&_h1]:leading-tight
                  [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-12 [&_h2]:mb-5 [&_h2]:pb-3 [&_h2]:border-b-2 [&_h2]:border-gray-200 [&_h2]:leading-tight
                  [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h3]:mt-10 [&_h3]:mb-4 [&_h3]:leading-snug
                  [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:text-gray-900 [&_h4]:mt-8 [&_h4]:mb-3 [&_h4]:leading-snug
                  [&_p]:text-gray-700 [&_p]:leading-relaxed [&_p]:mb-6 [&_p]:text-lg
                  [&_a]:text-[#F6B86C] [&_a]:font-medium [&_a]:no-underline hover:[&_a]:underline hover:[&_a]:text-[#FF8C42] [&_a]:transition-colors
                  [&_strong]:text-gray-900 [&_strong]:font-semibold
                  [&_em]:text-gray-600 [&_em]:italic
                  [&_code]:text-[#F6B86C] [&_code]:bg-gray-100 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded-md [&_code]:text-sm [&_code]:font-mono
                  [&_pre]:bg-gray-900 [&_pre]:text-gray-100 [&_pre]:rounded-xl [&_pre]:p-6 [&_pre]:overflow-x-auto [&_pre]:my-8
                  [&_pre_code]:bg-transparent [&_pre_code]:text-gray-100 [&_pre_code]:p-0 [&_pre_code]:text-sm
                  [&_blockquote]:border-l-4 [&_blockquote]:border-[#F6B86C] [&_blockquote]:pl-6 [&_blockquote]:py-4 [&_blockquote]:my-8 [&_blockquote]:bg-gray-50 [&_blockquote]:rounded-r-lg [&_blockquote]:italic [&_blockquote]:text-gray-700
                  [&_ul]:list-disc [&_ul]:pl-7 [&_ul]:mb-6 [&_ul]:space-y-2
                  [&_ol]:list-decimal [&_ol]:pl-7 [&_ol]:mb-6 [&_ol]:space-y-2
                  [&_li]:text-gray-700 [&_li]:leading-relaxed [&_li]:text-lg
                  [&_img]:rounded-xl [&_img]:my-8 [&_img]:shadow-lg [&_img]:border [&_img]:border-gray-200
                  [&_hr]:border-gray-300 [&_hr]:my-12 [&_hr]:border-t-2
                  [&_table]:w-full [&_table]:border-collapse [&_table]:my-8
                  [&_th]:bg-gray-100 [&_th]:p-3 [&_th]:text-left [&_th]:font-semibold [&_th]:border [&_th]:border-gray-300 [&_th]:text-gray-900
                  [&_td]:p-3 [&_td]:border [&_td]:border-gray-300 [&_td]:text-gray-700"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </section>

        {/* Navigation */}
        {(prevPost || nextPost) && (
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Previous Post */}
                  <div>
                    {prevPost ? (
                      <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                            <ArrowLeft className="h-4 w-4" />
                            <span>Previous Article</span>
                          </div>
                          <LocaleLink href={`/blog/${prevPost.slug}`} className="block">
                            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#F6B86C] transition-colors line-clamp-2">
                              {prevPost.title}
                            </h3>
                            <p className="text-gray-700 text-sm mt-2 line-clamp-2">
                              {prevPost.excerpt}
                            </p>
                          </LocaleLink>
                        </CardContent>
                      </Card>
                    ) : (
                      <div></div>
                    )}
                  </div>

                  {/* Next Post */}
                  <div>
                    {nextPost ? (
                      <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                        <CardContent className="p-6 text-right">
                          <div className="flex items-center justify-end gap-2 text-gray-600 text-sm mb-3">
                            <span>Next Article</span>
                            <ArrowRight className="h-4 w-4" />
                          </div>
                          <LocaleLink href={`/blog/${nextPost.slug}`} className="block">
                            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#F6B86C] transition-colors line-clamp-2">
                              {nextPost.title}
                            </h3>
                            <p className="text-gray-700 text-sm mt-2 line-clamp-2">
                              {nextPost.excerpt}
                            </p>
                          </LocaleLink>
                        </CardContent>
                      </Card>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                  Related{" "}
                  <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                    Articles
                  </span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <Card key={relatedPost.slug} className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          {relatedPost.tags.slice(0, 2).map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="border-gray-300 text-gray-600 text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#F6B86C] transition-colors line-clamp-2 mb-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-700 text-sm line-clamp-3 mb-4">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-600 mb-4">
                          <span>{relatedPost.author}</span>
                          <span>{new Date(relatedPost.date).toLocaleDateString()}</span>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-white"
                          asChild
                        >
                          <LocaleLink href={`/blog/${relatedPost.slug}`}>
                            Read Article
                          </LocaleLink>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#F6B86C]/10 to-purple-500/10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Transform Your Store?
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Discover how OS² Commerce can help you implement the strategies discussed in this article.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] hover:from-[#E6A05C] hover:to-[#F6B86C] text-[#1E0D43] px-8 py-4 text-lg font-semibold shadow-lg shadow-[#F6B86C]/25"
                  asChild
                >
                  <LocaleLink href="/">
                    Explore Our Apps
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </LocaleLink>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent px-8 py-4 text-lg"
                  asChild
                >
                  <LocaleLink href="/contact">Get in Touch</LocaleLink>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts()
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}