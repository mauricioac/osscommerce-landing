import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowLeft, ArrowRight, Share2, Tag } from "lucide-react"
import Link from "next/link"
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
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = params
  const post = getPostBySlug(slug)
  
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
  const { slug } = params
  const post = getPostBySlug(slug)
  
  if (!post) {
    notFound()
  }

  const allPosts = getAllPosts()
  const currentIndex = allPosts.findIndex(p => p.slug === slug)
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null
  const relatedPosts = allPosts
    .filter(p => p.slug !== slug && p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E0D43] via-[#2a1458] to-[#1E0D43]">
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
                className="border-white/30 text-white hover:bg-white/10 mb-8"
                asChild
              >
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
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
                    className="border-white/30 text-white/70"
                  >
                    <Tag className="mr-1 h-3 w-3" />
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              {post.excerpt && (
                <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
                  {post.excerpt}
                </p>
              )}

              {/* Author and Date */}
              <div className="flex items-center justify-between mb-8 pb-8 border-b border-white/10">
                <div className="flex items-center gap-6 text-white/60">
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

              {/* Featured Image */}
              {post.image && (
                <div className="aspect-video overflow-hidden rounded-lg mb-12">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-20 bg-gradient-to-r from-slate-900/50 to-[#1E0D43]/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-8 md:p-12">
                  <div 
                    className="prose prose-invert prose-lg max-w-none
                      prose-headings:text-white prose-headings:font-bold
                      prose-p:text-white/90 prose-p:leading-relaxed
                      prose-a:text-[#F6B86C] prose-a:no-underline hover:prose-a:underline
                      prose-strong:text-white prose-strong:font-semibold
                      prose-code:text-[#F6B86C] prose-code:bg-white/10 prose-code:px-2 prose-code:py-1 prose-code:rounded
                      prose-blockquote:border-l-[#F6B86C] prose-blockquote:text-white/80
                      prose-ul:text-white/90 prose-ol:text-white/90
                      prose-li:text-white/90"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Navigation */}
        {(prevPost || nextPost) && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Previous Post */}
                  <div>
                    {prevPost ? (
                      <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:from-white/15 hover:to-white/10 transition-all duration-300 group h-full">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
                            <ArrowLeft className="h-4 w-4" />
                            <span>Previous Article</span>
                          </div>
                          <Link href={`/blog/${prevPost.slug}`} className="block">
                            <h3 className="text-lg font-semibold text-white group-hover:text-[#F6B86C] transition-colors line-clamp-2">
                              {prevPost.title}
                            </h3>
                            <p className="text-white/80 text-sm mt-2 line-clamp-2">
                              {prevPost.excerpt}
                            </p>
                          </Link>
                        </CardContent>
                      </Card>
                    ) : (
                      <div></div>
                    )}
                  </div>

                  {/* Next Post */}
                  <div>
                    {nextPost ? (
                      <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:from-white/15 hover:to-white/10 transition-all duration-300 group h-full">
                        <CardContent className="p-6 text-right">
                          <div className="flex items-center justify-end gap-2 text-white/60 text-sm mb-3">
                            <span>Next Article</span>
                            <ArrowRight className="h-4 w-4" />
                          </div>
                          <Link href={`/blog/${nextPost.slug}`} className="block">
                            <h3 className="text-lg font-semibold text-white group-hover:text-[#F6B86C] transition-colors line-clamp-2">
                              {nextPost.title}
                            </h3>
                            <p className="text-white/80 text-sm mt-2 line-clamp-2">
                              {nextPost.excerpt}
                            </p>
                          </Link>
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
          <section className="py-20 bg-gradient-to-r from-slate-900/30 to-[#1E0D43]/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                  Related{" "}
                  <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                    Articles
                  </span>
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <Card key={relatedPost.slug} className="bg-white/10 border-white/20 backdrop-blur-sm hover:from-white/15 hover:to-white/10 transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          {relatedPost.tags.slice(0, 2).map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="border-white/30 text-white/70 text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-[#F6B86C] transition-colors line-clamp-2 mb-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-white/80 text-sm line-clamp-3 mb-4">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-white/60 mb-4">
                          <span>{relatedPost.author}</span>
                          <span>{new Date(relatedPost.date).toLocaleDateString()}</span>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent"
                          asChild
                        >
                          <Link href={`/blog/${relatedPost.slug}`}>
                            Read Article
                          </Link>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Store?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Discover how OS² Commerce can help you implement the strategies discussed in this article.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] hover:from-[#E6A05C] hover:to-[#F6B86C] text-[#1E0D43] px-8 py-4 text-lg font-semibold shadow-lg shadow-[#F6B86C]/25"
                  asChild
                >
                  <Link href="/">
                    Explore Our Apps
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent px-8 py-4 text-lg"
                  asChild
                >
                  <Link href="/contact">Get in Touch</Link>
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