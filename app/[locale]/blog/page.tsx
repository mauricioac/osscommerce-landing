import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import { LocaleLink } from "@/components/locale-link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsletterForm } from "@/components/newsletter-form"
import { getAllPosts, paginatePosts } from "@/lib/blog"
import { getTranslations } from "@/lib/i18n"
import { type Locale } from "@/lib/i18n/config"

interface BlogPageProps {
  params: Promise<{
    locale: string
  }>
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params
  const t = getTranslations(locale as Locale)
  const allPosts = getAllPosts(locale)
  const { posts, totalPages, currentPage } = paginatePosts(allPosts, 1, 6)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <Badge className="bg-gradient-to-r from-[#F6B86C]/20 to-[#FF8C42]/20 text-[#F6B86C] border-[#F6B86C]/30 hover:bg-[#F6B86C]/10 mb-6">
                {t('blog.hero.badge')}
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                {t('blog.hero.title')}{" "}
                <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                  {t('blog.hero.titleHighlight')}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                {t('blog.hero.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            {posts.length === 0 ? (
              // Empty State
              <div className="text-center py-20">
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#F6B86C] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#F6B86C]/25">
                    <Calendar className="h-12 w-12 text-[#1E0D43]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('blog.empty.title')}</h3>
                  <p className="text-gray-700 mb-8">
                    {t('blog.empty.description')}
                  </p>
                  <Button
                    variant="outline"
                    className="border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent"
                    asChild
                  >
                    <LocaleLink href="/">{t('blog.empty.backHome')}</LocaleLink>
                  </Button>
                </div>
              </div>
            ) : (
              <>
                {/* Posts Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
                  {posts.map((post) => (
                    <Card key={post.slug} className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                      <CardHeader className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          {post.featured && (
                            <Badge className="bg-gradient-to-r from-[#F6B86C]/20 to-[#FF8C42]/20 text-[#F6B86C] border-[#F6B86C]/30">
                              {t('blog.featured')}
                            </Badge>
                          )}
                          {post.tags.slice(0, 2).map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="border-gray-300 text-gray-600 text-xs"
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
                          <LocaleLink href={`/blog/${post.slug}`}>
                            {t('blog.readMore')}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </LocaleLink>
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
                      className="border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                    >
                      {t('blog.pagination.previous')}
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
                              : "border-gray-300 text-gray-700 hover:bg-gray-100"
                          }
                        >
                          {page}
                        </Button>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      disabled={currentPage === totalPages}
                      className="border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                    >
                      {t('blog.pagination.next')}
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
                {t('blog.newsletter.title')}
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                {t('blog.newsletter.subtitle')}
              </p>
              <NewsletterForm
                size="lg"
                placeholder={t('blog.newsletter.placeholder')}
                buttonText={t('blog.newsletter.subscribe')}
                showIcon={true}
                variant="light"
                source="blog"
                groups={process.env.NEXT_PUBLIC_NEWSLETTER_MARKETING_GROUP_ID ? [process.env.NEXT_PUBLIC_NEWSLETTER_MARKETING_GROUP_ID] : []}
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}