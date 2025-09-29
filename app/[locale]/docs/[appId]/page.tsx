import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Book, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getAppById, getAllAppIds } from "@/lib/apps-config"
import { notFound } from "next/navigation"

interface AppDocumentationPageProps {
  params: Promise<{
    appId: string
  }>
}

const statusColors = {
  available: "bg-emerald-100 text-emerald-800 border-emerald-200",
  'coming-soon': "bg-yellow-100 text-yellow-800 border-yellow-200",
  beta: "bg-blue-100 text-blue-800 border-blue-200"
}

const statusLabels = {
  available: "Available",
  'coming-soon': "Coming Soon",
  beta: "Beta"
}

export default async function AppDocumentationPage({ params }: AppDocumentationPageProps) {
  const { appId } = await params
  const app = getAppById(appId)
  
  if (!app) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />
      
      <main>
        {/* Header Section */}
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
                <Link href="/docs">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Documentation Hub
                </Link>
              </Button>

              {/* App Header */}
              <div className="flex items-start gap-6 mb-8">
                <div className="w-20 h-20 relative flex-shrink-0">
                  <Image
                    src={app.icon}
                    alt={`${app.name} icon`}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                      {app.name}
                    </h1>
                    <Badge className={statusColors[app.status]}>
                      {statusLabels[app.status]}
                    </Badge>
                  </div>
                  
                  <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                    {app.description}
                  </p>

                  {/* Quick Actions */}
                  <div className="flex flex-wrap gap-3">
                    {app.landingPage && (
                      <Button
                        variant="outline"
                        className="border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent"
                        asChild
                      >
                        <Link href={app.landingPage}>
                          <Book className="mr-2 h-4 w-4" />
                          App Overview
                        </Link>
                      </Button>
                    )}
                    
                    {app.shopifyUrl && (
                      <Button
                        variant="outline"
                        className="border-white/30 text-white hover:bg-white/10"
                        asChild
                      >
                        <Link href={app.shopifyUrl} target="_blank">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Install on Shopify
                        </Link>
                      </Button>
                    )}

                    <Button
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10"
                      asChild
                    >
                      <Link href="/support">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Get Support
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Knowledge Base Embed Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {app.knowledgeBaseUrl ? (
                <Card className="bg-white border-gray-200 shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    {/* Knowledge Base Embed */}
                    <div className="w-full" style={{ minHeight: '800px' }}>
                      <iframe
                        src={app.knowledgeBaseUrl}
                        width="100%"
                        height="800"
                        frameBorder="0"
                        className="w-full rounded-lg"
                        title={`${app.name} Knowledge Base`}
                        allow="fullscreen"
                      />
                    </div>
                  </CardContent>
                </Card>
              ) : (
                /* Placeholder for when knowledge base isn't ready */
                <Card className="bg-white border-gray-200 shadow-lg">
                  <CardContent className="p-12 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#F6B86C] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#F6B86C]/25">
                      <Book className="h-12 w-12 text-[#1E0D43]" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Documentation Coming Soon
                    </h3>

                    <p className="text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                      We're currently preparing comprehensive documentation for {app.name}.
                      This will include setup guides, feature tutorials, troubleshooting, and best practices.
                    </p>

                    {/* Features Preview */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Documentation will cover:
                      </h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {app.features.map((feature) => (
                          <Badge
                            key={feature}
                            variant="outline"
                            className="border-gray-300 text-gray-700"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] hover:from-[#E6A05C] hover:to-[#F6B86C] text-[#1E0D43] font-semibold"
                        asChild
                      >
                        <Link href="/support">
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Contact Support
                        </Link>
                      </Button>

                      <Button
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50"
                        asChild
                      >
                        <Link href="/blog">
                          <Book className="mr-2 h-4 w-4" />
                          Read Our Blog
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Additional{" "}
                <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                  Resources
                </span>
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Need Personal Help?</h3>
                    <p className="text-gray-700 mb-6">
                      Our support team is ready to help you get the most out of {app.name}.
                      Get personalized assistance and quick answers.
                    </p>
                    <Button
                      className="w-full bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] hover:from-[#E6A05C] hover:to-[#F6B86C] text-[#1E0D43] font-semibold"
                      asChild
                    >
                      <Link href="/contact">
                        Contact Support
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Explore More Apps</h3>
                    <p className="text-gray-700 mb-6">
                      {app.name} works even better when combined with other OS² Commerce apps.
                      Discover the full ecosystem.
                    </p>
                    <Button
                      variant="outline"
                      className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                      asChild
                    >
                      <Link href="/">
                        View All Apps
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

// Generate static params for all apps
export async function generateStaticParams() {
  const appIds = getAllAppIds()
  
  return appIds.map((appId) => ({
    appId: appId,
  }))
}