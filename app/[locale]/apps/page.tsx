import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Book, Star, Users, Zap, BarChart3, Bell } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LocaleLink } from "@/components/locale-link"
import { WaitlistDialog } from "@/components/waitlist-dialog"
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
  available: "bg-emerald-100 text-emerald-800 border-emerald-200",
  'coming-soon': "bg-yellow-100 text-yellow-800 border-yellow-200",
  beta: "bg-blue-100 text-blue-800 border-blue-200"
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
    <Card className={`bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group h-full ${featured ? 'ring-2 ring-[#F6B86C]/50' : ''}`}>
      {featured && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <Badge className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] text-[#1E0D43] font-semibold shadow-lg">
            <Star className="mr-1 h-3 w-3 fill-current" />
            Most Popular
          </Badge>
        </div>
      )}

      <CardHeader className="p-6">
        <div className="mb-6">
          <div className="relative mb-4">
            <Image
              src={app.icon}
              alt={`${app.name} - ${app.category} app for Shopify`}
              width={192}
              height={112}
              className="object-contain"
            />
          </div>
          <Badge className={statusColors[app.status]}>
            {statusLabels[app.status]}
          </Badge>
        </div>
        
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg">{categoryIcons[app.category]}</span>
          <CardTitle className="text-xl text-gray-900 group-hover:text-[#F6B86C] transition-colors">
            {app.name}
          </CardTitle>
        </div>
        
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          {app.description}
        </p>

        {/* Features */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-800">Key Features:</h4>
          <div className="flex flex-wrap gap-1">
            {app.features.slice(0, 3).map((feature) => (
              <Badge
                key={feature}
                variant="outline"
                className="border-gray-300 text-gray-700 text-xs"
              >
                {feature}
              </Badge>
            ))}
            {app.features.length > 3 && (
              <Badge
                variant="outline"
                className="border-gray-300 text-gray-700 text-xs"
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
            <WaitlistDialog
              appName={app.name}
              appId={app.id}
              buttonVariant="default"
              buttonText="Join Waitlist"
            />
          ) : (
            <>
              <Button
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white font-semibold"
                asChild
              >
                <a href={app.shopifyUrl || '#'} target="_blank" rel="noopener noreferrer">
                  Join Beta
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <WaitlistDialog
                appName={app.name}
                appId={app.id}
                buttonVariant="outline"
                buttonText="Waitlist for Final Release"
              />
            </>
          )}

          {/* Secondary Actions */}
          <div className="flex gap-2">
            {app.landingPage && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
                asChild
              >
                <LocaleLink href={app.landingPage}>Learn More</LocaleLink>
              </Button>
            )}
            
            <Button
              variant="outline"
              size="sm"
              className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <Badge className="bg-gradient-to-r from-[#F6B86C]/20 to-[#FF8C42]/20 text-[#F6B86C] border-[#F6B86C]/30 hover:bg-[#F6B86C]/10 mb-6">
                🚀 Our Shopify Apps
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Integrated{" "}
                <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                  Ecosystem
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                Powerful Shopify applications designed to work together seamlessly, unlocking features across apps that work together in ways not possible otherwise.
              </p>

              {/* Key Benefits */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Cross-App Features</h3>
                  <p className="text-gray-600 text-sm">Unlock powerful integrations when using multiple OS² apps together</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F6B86C] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-3">
                    <BarChart3 className="h-6 w-6 text-[#1E0D43]" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Shared Analytics</h3>
                  <p className="text-gray-600 text-sm">Cross-app insights and unified reporting dashboard</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Unified Support</h3>
                  <p className="text-gray-600 text-sm">One support team for all your OS² Commerce apps</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Volume Savings</h3>
                  <p className="text-gray-600 text-sm">Save up to 30% with multiple app installations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Available Apps */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Available{" "}
                <span className="bg-gradient-to-r from-emerald-300 to-[#FFB886] bg-clip-text text-transparent">
                  Applications
                </span>
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
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
                <p className="text-gray-700 mb-8 max-w-md mx-auto">
                  We're putting the finishing touches on our first applications. Check back soon!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Upcoming Apps */}
        {upcomingApps.length > 0 && (
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Coming{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-[#F6B86C] bg-clip-text text-transparent">
                    Soon
                  </span>
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
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
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ecosystem{" "}
                <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                  Advantages
                </span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                The more OS² Commerce apps you use, the more powerful and cost-effective your setup becomes.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                {/* 2 Apps */}
                <Card className="bg-white border-gray-200 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-transparent border-2 border-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-gray-900">2</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Starter Ecosystem</h3>
                    <div className="text-3xl font-bold text-emerald-600 mb-4">Save 10%</div>
                    <p className="text-gray-700 text-sm">Perfect for growing stores ready to unify their operations</p>
                  </CardContent>
                </Card>

                {/* 3 Apps - Most Popular */}
                <Card className="bg-white border-[#F6B86C] text-center shadow-xl hover:shadow-2xl transition-all duration-300 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] text-[#1E0D43] font-semibold shadow-lg">
                      Most Popular
                    </Badge>
                  </div>
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-transparent border-2 border-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-gray-900">3</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Growth Ecosystem</h3>
                    <div className="text-3xl font-bold text-emerald-600 mb-4">Save 20%</div>
                    <p className="text-gray-700 text-sm">Ideal for established stores scaling their operations</p>
                  </CardContent>
                </Card>

                {/* 4+ Apps */}
                <Card className="bg-white border-gray-200 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-transparent border-2 border-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-gray-900">4+</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Ecosystem</h3>
                    <div className="text-3xl font-bold text-emerald-600 mb-4">Save 30%</div>
                    <p className="text-gray-700 text-sm">Maximum efficiency and savings for serious merchants</p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-12">
                <div className="bg-white rounded-lg p-6 max-w-2xl mx-auto shadow-lg border border-gray-200">
                  <h4 className="text-gray-900 font-semibold mb-2">🎯 Automatic Discounts</h4>
                  <p className="text-gray-700 text-sm">
                    Volume discounts are automatically applied to your Shopify subscription.
                    Start with one app and save more as your ecosystem grows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Transform Your Store?
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
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