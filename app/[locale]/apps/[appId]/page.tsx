import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowLeft, ExternalLink, Book, Star, CheckCircle, BarChart3, Shield, Users, Globe } from "lucide-react"
import { LocaleLink } from "@/components/locale-link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getAppById, appsConfig } from "@/lib/apps-config"
import { notFound } from "next/navigation"
import { type Locale } from "@/lib/i18n/config"

interface AppPageProps {
  params: {
    locale: Locale
    appId: string
  }
}

export default async function AppPage({ params }: AppPageProps) {
  const { locale, appId } = await params
  const app = getAppById(appId)
  
  if (!app) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E0D43] via-[#2a1458] to-[#1E0D43]">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <LocaleLink 
                  href="/apps" 
                  className="inline-flex items-center text-[#F6B86C] hover:text-[#FF8C42] transition-colors mb-6"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Apps
                </LocaleLink>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 relative">
                    <Image
                      src={app.icon}
                      alt={`${app.name} - ${app.category} app for Shopify`}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                      {app.name}
                    </h1>
                    <Badge className={`
                      ${app.status === 'available' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' : ''}
                      ${app.status === 'coming-soon' ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' : ''}
                      ${app.status === 'beta' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' : ''}
                    `}>
                      {app.status === 'available' ? 'Available Now' : 
                       app.status === 'coming-soon' ? 'Coming Soon' : 'Beta Version'}
                    </Badge>
                  </div>
                </div>

                <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
                  {app.description}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  {app.status === 'available' && app.shopifyUrl ? (
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] hover:from-[#E6A05C] hover:to-[#F6B86C] text-[#1E0D43] px-8 py-4 text-lg font-semibold shadow-lg shadow-[#F6B86C]/25"
                      asChild
                    >
                      <a href={app.shopifyUrl} target="_blank" rel="noopener noreferrer">
                        Install from Shopify App Store
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  ) : app.status === 'coming-soon' ? (
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 text-lg font-semibold"
                      disabled
                    >
                      Coming Soon
                    </Button>
                  ) : (
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white px-8 py-4 text-lg font-semibold"
                      asChild
                    >
                      <a href={app.shopifyUrl || '#'} target="_blank" rel="noopener noreferrer">
                        Join Beta Program
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  )}
                  
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent px-8 py-4 text-lg"
                    asChild
                  >
                    <LocaleLink href={`/docs/${app.id}`}>
                      <Book className="mr-2 h-5 w-5" />
                      Documentation
                    </LocaleLink>
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                    <BarChart3 className="h-8 w-8 text-[#F6B86C] mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">99.9%</div>
                    <div className="text-white/70 text-xs">Uptime</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                    <Users className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">10K+</div>
                    <div className="text-white/70 text-xs">Active Users</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                    <Shield className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">5★</div>
                    <div className="text-white/70 text-xs">App Rating</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                    <Globe className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">24/7</div>
                    <div className="text-white/70 text-xs">Support</div>
                  </div>
                </div>
              </div>

              {/* Right Content - App Preview */}
              <div className="relative">
                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                  <div className="aspect-video bg-gradient-to-br from-[#F6B86C]/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 relative">
                        <Image
                          src={app.icon}
                          alt={app.name}
                          width={96}
                          height={96}
                          className="object-contain"
                        />
                      </div>
                      <p className="text-white/70">App Preview Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900/50 to-[#1E0D43]/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Key{" "}
                <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                  Features
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Everything you need to enhance your {app.category} operations with {app.name}.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {app.features.map((feature, index) => (
                <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#F6B86C] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-[#1E0D43]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                        <p className="text-white/80 text-sm">
                          Advanced {feature.toLowerCase()} capabilities designed for modern e-commerce businesses.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Works Better with{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-[#F6B86C] bg-clip-text text-transparent">
                  OS² Ecosystem
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                {app.name} is designed to work seamlessly with other OS² Commerce apps, creating a powerful integrated solution.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F6B86C] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-[#1E0D43]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Shared Analytics</h3>
                  <p className="text-white/80">Cross-app insights and unified reporting dashboard.</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Unified Support</h3>
                  <p className="text-white/80">One support team for all your OS² Commerce apps.</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Volume Savings</h3>
                  <p className="text-white/80">Save up to 30% with multiple app installations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#F6B86C]/10 to-purple-500/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started with {app.name}?
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Join thousands of merchants who are already using {app.name} to enhance their {app.category} operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {app.status === 'available' && app.shopifyUrl ? (
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] hover:from-[#E6A05C] hover:to-[#F6B86C] text-[#1E0D43] px-10 py-6 text-xl font-semibold shadow-lg shadow-[#F6B86C]/25"
                  asChild
                >
                  <a href={app.shopifyUrl} target="_blank" rel="noopener noreferrer">
                    Install {app.name}
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </a>
                </Button>
              ) : (
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-10 py-6 text-xl font-semibold"
                  disabled
                >
                  {app.status === 'coming-soon' ? 'Coming Soon' : 'Join Beta'}
                </Button>
              )}
              <Button
                size="lg"
                variant="outline"
                className="border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent px-10 py-6 text-xl"
                asChild
              >
                <LocaleLink href="/apps">View All Apps</LocaleLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// Generate static params for all apps
export async function generateStaticParams() {
  return appsConfig.map((app) => ({
    appId: app.id,
  }))
}