import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Book, ExternalLink, ArrowRight, Search, Filter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { appsConfig, AppConfig } from "@/lib/apps-config"

const statusColors = {
  available: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  'coming-soon': "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  beta: "bg-blue-500/20 text-blue-300 border-blue-500/30"
}

const statusLabels = {
  available: "Available",
  'coming-soon': "Coming Soon",
  beta: "Beta"
}

function AppDocumentationCard({ app }: { app: AppConfig }) {
  return (
    <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:from-white/15 hover:to-white/10 transition-all duration-300 group h-full">
      <CardHeader className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-16 h-16 relative">
            <Image
              src={app.icon}
              alt={`${app.name} icon`}
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
          <Badge className={statusColors[app.status]}>
            {statusLabels[app.status]}
          </Badge>
        </div>
        
        <CardTitle className="text-xl text-white group-hover:text-[#F6B86C] transition-colors">
          {app.name} Documentation
        </CardTitle>
        
        <p className="text-white/80 text-sm leading-relaxed">
          {app.description}
        </p>
      </CardHeader>

      <CardContent className="p-6 pt-0">
        <div className="space-y-4">
          {/* Features Preview */}
          <div>
            <h4 className="text-sm font-medium text-white/90 mb-2">Covered Topics:</h4>
            <div className="flex flex-wrap gap-1">
              {app.features.slice(0, 3).map((feature) => (
                <Badge
                  key={feature}
                  variant="outline"
                  className="border-white/30 text-white/70 text-xs"
                >
                  {feature}
                </Badge>
              ))}
              {app.features.length > 3 && (
                <Badge
                  variant="outline"
                  className="border-white/30 text-white/70 text-xs"
                >
                  +{app.features.length - 3} more
                </Badge>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3 pt-4">
            <Button
              className="w-full bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] hover:from-[#E6A05C] hover:to-[#F6B86C] text-[#1E0D43] font-semibold group-hover:scale-105 transition-transform"
              asChild
            >
              <Link href={`/docs/${app.id}`}>
                <Book className="mr-2 h-4 w-4" />
                View Documentation
              </Link>
            </Button>

            <div className="flex gap-2">
              {app.landingPage && (
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-white/30 text-white hover:bg-white/10"
                  asChild
                >
                  <Link href={app.landingPage}>
                    App Info
                  </Link>
                </Button>
              )}
              
              {app.shopifyUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-white/30 text-white hover:bg-white/10"
                  asChild
                >
                  <Link href={app.shopifyUrl} target="_blank">
                    <ExternalLink className="mr-1 h-3 w-3" />
                    Shopify
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function DocumentationHubPage() {
  const availableApps = appsConfig.filter(app => app.status === 'available')
  const upcomingApps = appsConfig.filter(app => app.status !== 'available')

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E0D43] via-[#2a1458] to-[#1E0D43]">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <Badge className="bg-gradient-to-r from-[#F6B86C]/20 to-[#FF8C42]/20 text-[#F6B86C] border-[#F6B86C]/30 hover:bg-[#F6B86C]/10 mb-6">
                📚 Documentation Hub
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Knowledge{" "}
                <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                  Base
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                Comprehensive guides, tutorials, and documentation for all OS² Commerce applications. 
                Find everything you need to get the most out of our ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* Available Apps Documentation */}
        <section className="py-20 bg-gradient-to-r from-slate-900/50 to-[#1E0D43]/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Available{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-[#F6B86C] bg-clip-text text-transparent">
                  Documentation
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Complete guides for our live applications with step-by-step tutorials and best practices.
              </p>
            </div>

            {availableApps.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {availableApps.map((app) => (
                  <AppDocumentationCard key={app.id} app={app} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gradient-to-br from-[#F6B86C] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#F6B86C]/25">
                  <Book className="h-12 w-12 text-[#1E0D43]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Documentation Coming Soon</h3>
                <p className="text-white/80 mb-8 max-w-md mx-auto">
                  We're working on comprehensive documentation for all our apps. Check back soon!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Upcoming Apps Preview */}
        {upcomingApps.length > 0 && (
          <section className="py-20 bg-gradient-to-r from-slate-900/30 to-[#1E0D43]/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Coming{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-[#F6B86C] bg-clip-text text-transparent">
                    Soon
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Documentation for upcoming apps will be available as they launch.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {upcomingApps.map((app) => (
                  <AppDocumentationCard key={app.id} app={app} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Quick Links */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Quick{" "}
                <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                  Access
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Additional resources to help you succeed with OS² Commerce.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:from-white/15 hover:to-white/10 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F6B86C] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#F6B86C]/25 group-hover:scale-110 transition-transform">
                    <Search className="h-8 w-8 text-[#1E0D43]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Search Knowledge Base</h3>
                  <p className="text-white/80 mb-6">
                    Find specific answers across all our documentation.
                  </p>
                  <Button
                    variant="outline"
                    className="border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent"
                  >
                    Search Docs
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:from-white/15 hover:to-white/10 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform">
                    <Book className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Getting Started</h3>
                  <p className="text-white/80 mb-6">
                    New to OS² Commerce? Start with our beginner guides.
                  </p>
                  <Button
                    variant="outline"
                    className="border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent"
                    asChild
                  >
                    <Link href="/docs/getting-started">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:from-white/15 hover:to-white/10 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/25 group-hover:scale-110 transition-transform">
                    <ArrowRight className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Need Help?</h3>
                  <p className="text-white/80 mb-6">
                    Can't find what you're looking for? Contact our support team.
                  </p>
                  <Button
                    variant="outline"
                    className="border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent"
                    asChild
                  >
                    <Link href="/support">Get Support</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}