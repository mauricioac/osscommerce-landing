import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Book, Star, Users, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LocaleLink } from "@/components/locale-link"
import { appsConfig, AppConfig } from "@/lib/apps-config"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Shopify Apps | OS² Commerce - Integrated E-commerce Solutions",
  description: "Discover the complete suite of OS² Commerce Shopify apps. From order tracking to marketing automation, our integrated ecosystem helps e-commerce businesses grow efficiently.",
  keywords: "Shopify apps, e-commerce tools, order tracking, email marketing, product bundles, Shopify ecosystem, integrated apps",
  openGraph: {
    title: "Our Shopify Apps | OS² Commerce",
    description: "Discover the complete suite of OS² Commerce Shopify apps designed to work together seamlessly.",
    type: "website",
    images: ["/oss-logo.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Shopify Apps | OS² Commerce", 
    description: "Integrated Shopify apps that work better together"
  }
}

const statusColors = {
  available: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  'coming-soon': "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  beta: "bg-blue-500/20 text-blue-300 border-blue-500/30"
}

const statusLabels = {
  available: "Available Now",
  'coming-soon': "Coming Soon",
  beta: "Beta Version"
}

const categoryIcons = {
  tracking: "📦",
  marketing: "📧", 
  analytics: "📊",
  bundles: "🎁",
  other: "⚡"
}

function AppCard({ app, featured = false }: { app: AppConfig, featured?: boolean }) {
  return (
    <Card className={`bg-white/10 border-white/20 backdrop-blur-sm hover:from-white/15 hover:to-white/10 transition-all duration-300 group h-full ${featured ? 'ring-2 ring-[#F6B86C]/50' : ''}`}>
      {featured && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <Badge className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] text-[#1E0D43] font-semibold shadow-lg">
            <Star className="mr-1 h-3 w-3 fill-current" />
            Most Popular
          </Badge>
        </div>
      )}

      <CardHeader className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-16 h-16 relative">
            <Image
              src={app.icon}
              alt={`${app.name} - ${app.category} app for Shopify`}
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
          <Badge className={statusColors[app.status]}>
            {statusLabels[app.status]}
          </Badge>
        </div>
        
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg">{categoryIcons[app.category]}</span>
          <CardTitle className="text-xl text-white group-hover:text-[#F6B86C] transition-colors">
            {app.name}
          </CardTitle>
        </div>
        
        <p className="text-white/80 text-sm leading-relaxed mb-4">
          {app.description}
        </p>

        {/* Features */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white/90">Key Features:</h4>
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
      </CardHeader>

      <CardContent className="p-6 pt-0">
        <div className="space-y-3">
          {/* Primary CTA */}
          {app.status === 'available' && app.shopifyUrl ? (
            <Button
              className="w-full bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] hover:from-[#E6A05C] hover:to-[#F6B86C] text-[#1E0D43] font-semibold group-hover:scale-105 transition-transform"
              asChild
            >
              <a href={app.shopifyUrl} target="_blank" rel="noopener noreferrer">
                Install Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          ) : app.status === 'coming-soon' ? (
            <Button
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white font-semibold"
              disabled
            >
              Coming Soon
            </Button>
          ) : (
            <Button
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white font-semibold"
              asChild
            >
              <a href={app.shopifyUrl || '#'} target="_blank" rel="noopener noreferrer">
                Join Beta
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          )}

          {/* Secondary Actions */}
          <div className="flex gap-2">
            {app.landingPage && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <LocaleLink href={app.landingPage}>Learn More</LocaleLink>
              </Button>
            )}
            
            <Button
              variant="outline"
              size="sm"
              className="flex-1 border-white/30 text-white hover:bg-white/10"
              asChild
            >
              <LocaleLink href={`/docs/${app.id}`}>
                <Book className="mr-1 h-3 w-3" />
                Docs
              </LocaleLink>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function AppsPage() {
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
                🚀 Our Shopify Apps
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Integrated{" "}
                <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                  Ecosystem
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                Powerful Shopify applications designed to work together seamlessly. Each app excels individually, 
                but together they create an integrated ecosystem that transforms your e-commerce operations.
              </p>
              
              {/* Key Benefits */}
              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F6B86C] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="h-6 w-6 text-[#1E0D43]" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">Better Together</h3>
                  <p className="text-white/70 text-sm">Apps share data and enhance each other's capabilities</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">Single Support</h3>
                  <p className="text-white/70 text-sm">One team, one experience, no finger-pointing</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">Volume Savings</h3>
                  <p className="text-white/70 text-sm">Save up to 30% with multiple app installations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Available Apps */}
        <section className="py-20 bg-gradient-to-r from-slate-900/50 to-[#1E0D43]/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Available{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-[#F6B86C] bg-clip-text text-transparent">
                  Applications
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Ready-to-install Shopify applications that are transforming e-commerce businesses worldwide.
              </p>
            </div>

            {availableApps.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {availableApps.map((app, index) => (
                  <AppCard key={app.id} app={app} featured={index === 0} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gradient-to-br from-[#F6B86C] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#F6B86C]/25">
                  <Zap className="h-12 w-12 text-[#1E0D43]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Apps Coming Soon</h3>
                <p className="text-white/80 mb-8 max-w-md mx-auto">
                  We're putting the finishing touches on our first applications. Check back soon!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Upcoming Apps */}
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
                  Exciting new applications in development. Be the first to know when they launch.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {upcomingApps.map((app) => (
                  <AppCard key={app.id} app={app} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Ecosystem Benefits */}
        <section className="py-20 bg-gradient-to-r from-[#F6B86C]/10 to-purple-500/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ecosystem{" "}
                <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                  Advantages
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                The more OS² Commerce apps you use, the more powerful and cost-effective your setup becomes.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                {/* 2 Apps */}
                <Card className="bg-white/10 border-white/20 text-center hover:from-white/15 hover:to-white/10 transition-all duration-300 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-transparent border-2 border-white rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-white">2</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Starter Ecosystem</h3>
                    <div className="text-3xl font-bold text-emerald-400 mb-4">Save 10%</div>
                    <p className="text-white/80 text-sm">Perfect for growing stores ready to unify their operations</p>
                  </CardContent>
                </Card>

                {/* 3 Apps - Most Popular */}
                <Card className="bg-white/10 border-[#F6B86C] text-center hover:from-white/20 hover:to-white/15 transition-all duration-300 relative backdrop-blur-sm shadow-lg shadow-[#F6B86C]/25">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] text-[#1E0D43] font-semibold shadow-lg">
                      Most Popular
                    </Badge>
                  </div>
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-transparent border-2 border-white rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-white">3</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Growth Ecosystem</h3>
                    <div className="text-3xl font-bold text-emerald-400 mb-4">Save 20%</div>
                    <p className="text-white/80 text-sm">Ideal for established stores scaling their operations</p>
                  </CardContent>
                </Card>

                {/* 4+ Apps */}
                <Card className="bg-white/10 border-white/20 text-center hover:from-white/15 hover:to-white/10 transition-all duration-300 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-transparent border-2 border-white rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-white">4+</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Complete Ecosystem</h3>
                    <div className="text-3xl font-bold text-emerald-400 mb-4">Save 30%</div>
                    <p className="text-white/80 text-sm">Maximum efficiency and savings for serious merchants</p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-12">
                <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-lg p-6 max-w-2xl mx-auto backdrop-blur-sm border border-white/10">
                  <h4 className="text-white font-semibold mb-2">🎯 Automatic Discounts</h4>
                  <p className="text-white/80 text-sm">
                    Volume discounts are automatically applied to your Shopify subscription. 
                    Start with one app and save more as your ecosystem grows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Store?
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Start with any OS² Commerce app and experience the power of integrated e-commerce tools. 
                Join thousands of merchants who have already upgraded their operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] hover:from-[#E6A05C] hover:to-[#F6B86C] text-[#1E0D43] px-8 py-4 text-lg font-semibold shadow-lg shadow-[#F6B86C]/25"
                  asChild
                >
                  <Link href="/docs/getting-started">
                    Get Started Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent px-8 py-4 text-lg"
                  asChild
                >
                  <Link href="/contact">Talk to an Expert</Link>
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