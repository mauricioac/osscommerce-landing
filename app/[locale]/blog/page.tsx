import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, User, ArrowRight, Search, Tag } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsletterForm } from "@/components/newsletter-form"
import { getAllPosts, getAllTags, paginatePosts } from "@/lib/blog"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | OS² Commerce - E-commerce Insights & Updates",
  description: "Stay informed with the latest e-commerce trends, Shopify tips, product updates, and insights from the OS² Commerce team. Expert advice for growing your online business.",
  keywords: "e-commerce blog, Shopify tips, online business insights, e-commerce trends, digital marketing, OS² Commerce updates",
  openGraph: {
    title: "Blog | OS² Commerce - E-commerce Insights & Updates",
    description: "Expert e-commerce insights, Shopify tips, and the latest updates from OS² Commerce. Your go-to resource for growing your online business.",
    type: "website",
    images: ["/oss-logo.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | OS² Commerce",
    description: "Expert e-commerce insights and Shopify tips for growing your online business"
  }
}

export default function BlogPage() {
  const allPosts = getAllPosts()
  const { posts, totalPages, currentPage } = paginatePosts(allPosts, 1, 6)
  const tags = getAllTags()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <Badge className="bg-gradient-to-r from-[#F6B86C]/20 to-[#FF8C42]/20 text-[#F6B86C] border-[#F6B86C]/30 hover:bg-[#F6B86C]/10 mb-6">
                📖 Our Blog
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Insights &{" "}
                <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                  Updates
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                Stay informed with the latest e-commerce trends, product updates, and insights from the OS² Commerce team.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                <Input
                  placeholder="Search articles..."
                  className="pl-12 pr-4 py-3 text-lg bg-white border-gray-300 focus:border-[#F6B86C] text-gray-900 placeholder:text-gray-500 rounded-lg shadow-sm"
                />
              </div>

              {/* Tags */}
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 justify-center">
                  {tags.slice(0, 6).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent cursor-pointer"
                    >
                      <Tag className="mr-1 h-3 w-3" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            {posts.length === 0 ? (
              // Empty State
              <div className="text-center py-20">
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#F6B86C] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#F6B86C]/25">
                    <Calendar className="h-12 w-12 text-[#1E0D43]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">No Posts Yet</h3>
                  <p className="text-white/80 mb-8">
                    We're working on some amazing content for you. Check back soon for the latest insights and updates!
                  </p>
                  <Button
                    variant="outline"
                    className="border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent"
                    asChild
                  >
                    <Link href="/">Back to Home</Link>
                  </Button>
                </div>
              </div>
            ) : (
              <>
                {/* Posts Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
                  {posts.map((post) => (
                    <Card key={post.slug} className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                      {post.image && (
                        <div className="aspect-video overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            width={400}
                            height={225}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <CardHeader className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          {post.featured && (
                            <Badge className="bg-gradient-to-r from-[#F6B86C]/20 to-[#FF8C42]/20 text-[#F6B86C] border-[#F6B86C]/30">
                              Featured
                            </Badge>
                          )}
                          {post.tags.slice(0, 2).map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="border-white/30 text-white/70 text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <CardTitle className="text-xl text-gray-900 group-hover:text-[#F6B86C] transition-colors line-clamp-2">
                          {post.title}
                        </CardTitle>
                        <p className="text-gray-700 text-sm line-clamp-3 mt-2">
                          {post.excerpt}
                        </p>
                      </CardHeader>
                      <CardContent className="p-6 pt-0">
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-white group-hover:border-[#F6B86C] transition-colors"
                          asChild
                        >
                          <Link href={`/blog/${post.slug}`}>
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-4">
                    <Button
                      variant="outline"
                      disabled={currentPage === 1}
                      className="border-white/30 text-white hover:bg-white/10 disabled:opacity-50"
                    >
                      Previous
                    </Button>
                    
                    <div className="flex items-center gap-2">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <Button
                          key={page}
                          variant={currentPage === page ? "default" : "outline"}
                          size="sm"
                          className={
                            currentPage === page
                              ? "bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] text-[#1E0D43]"
                              : "border-white/30 text-white hover:bg-white/10"
                          }
                        >
                          {page}
                        </Button>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      disabled={currentPage === totalPages}
                      className="border-white/30 text-white hover:bg-white/10 disabled:opacity-50"
                    >
                      Next
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Never Miss an Update
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Subscribe to our newsletter and get the latest e-commerce insights delivered to your inbox.
              </p>
              <NewsletterForm 
                size="lg"
                placeholder="Your email address"
                buttonText="Subscribe"
                showIcon={true}
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}