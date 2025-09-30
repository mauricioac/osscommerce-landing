'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BarChart3, Workflow, Users, CheckCircle, Zap, Shield, Globe, Star, TrendingUp, Package } from "lucide-react"
import { LocaleLink } from "@/components/locale-link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLocale } from "@/components/locale-provider"
import { type Locale } from "@/lib/i18n/config"
import { appsConfig } from "@/lib/apps-config"

interface HomePageProps {
  params: Promise<{
    locale: Locale
  }>
}

export default function LandingPage({ params }: HomePageProps) {
  const { t } = useLocale()
  const featuredApps = appsConfig.filter(app => app.status === 'available').slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Floating elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-[#F6B86C]/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-32 h-32 bg-[#F6B86C]/10 rounded-full blur-xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-[#F6B86C]/15 rounded-full blur-xl animate-pulse delay-500"></div>
            
            <Badge className="bg-gradient-to-r from-[#F6B86C]/20 to-[#FF8C42]/20 text-[#F6B86C] border-[#F6B86C]/30 hover:bg-[#F6B86C]/10 mb-6 animate-fade-in">
              {t('home.hero.badge')}
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight relative animate-fade-in-up">
              Stop Juggling Apps.{" "}
              <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                Start Unifying
              </span>{" "}
              Your Store.
              
              {/* Shopify logo to show Shopify focus */}
              <Image 
                src="/shopify_white.png" 
                alt="Shopify" 
                width={192}
                height={192}
                className="absolute top-0 -right-16 md:-right-32 lg:-right-64 w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 opacity-20 -rotate-12 animate-float object-contain" 
              />
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Tired of managing a dozen disconnected apps? OS² Commerce offers a suite of powerful integrated
              applications that work together to streamline your operations, share data seamlessly, and grow your
              business. <a href="/blog/building-integrated-app-ecosystem" className="text-[#F6B86C] hover:underline">Learn why integrated ecosystems outperform standalone tools</a>.
            </p>
            
            {/* Shopify Partnership Indicator */}
            <div className="flex items-center justify-center gap-3 mb-12 animate-fade-in-up delay-300">
              <span className="text-gray-600 text-lg">Built exclusively for</span>
              <div className="flex items-center gap-2 bg-gray-100 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-300">
                <Image
                  src="/shopify_white.png"
                  alt="Shopify"
                  width={24}
                  height={24}
                  className="w-6 h-6 opacity-80 object-contain"
                />
                <span className="text-gray-900 font-semibold text-lg">Shopify</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up delay-400">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] hover:from-[#E6A05C] hover:to-[#F6B86C] text-[#1E0D43] px-10 py-6 text-xl font-semibold rounded-xl transition-all duration-200 hover:scale-105 shadow-2xl shadow-[#F6B86C]/25 hover:shadow-[#F6B86C]/40"
                asChild
              >
                <LocaleLink href="/apps">
                  Explore the Suite
                  <ArrowRight className="ml-3 h-6 w-6" />
                </LocaleLink>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent px-10 py-6 text-xl backdrop-blur-sm rounded-xl"
                asChild
              >
                <LocaleLink href="/about">Learn More</LocaleLink>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto animate-fade-in-up delay-600">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#F6B86C] mb-2">30%</div>
                <div className="text-gray-600">Average Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#F6B86C] mb-2">99.9%</div>
                <div className="text-gray-600">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              The{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-[#F6B86C] bg-clip-text text-transparent">
                Ecosystem Advantage
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Each app in the OS² Commerce suite is powerful on its own. Together, they create a seamless, unified
              system for managing and growing your e-commerce business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 backdrop-blur-sm group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#F6B86C] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#F6B86C]/25 group-hover:shadow-[#F6B86C]/40 transition-all">
                  <BarChart3 className="h-10 w-10 text-[#1E0D43]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Extended Behavior</h3>
                <p className="text-white/80 leading-relaxed text-lg">
                  Get behaviors from one app into the other without any extra work. Data flows seamlessly between applications.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 backdrop-blur-sm group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all">
                  <Workflow className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Automated Workflows</h3>
                <p className="text-white/80 leading-relaxed text-lg">
                  Actions in one app trigger actions in another. Create sophisticated automation without complex setup.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 backdrop-blur-sm group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/40 transition-all">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Unified Support</h3>
                <p className="text-white/80 leading-relaxed text-lg">
                  One team supports all your apps. No more bouncing between different vendors when issues arise.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Benefits */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Merchants Choose{" "}
                <span className="text-[#F6B86C]">Integrated</span>
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#F6B86C] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-[#1E0D43]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Save 30% on App Costs</h4>
                    <p className="text-white/80">Volume discounts automatically applied when you use multiple apps from our ecosystem.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#F6B86C] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-[#1E0D43]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Reduce Setup Time by 80%</h4>
                    <p className="text-white/80">Apps come pre-configured to work together. No complex integrations or API setup required.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#F6B86C] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-[#1E0D43]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">24/7 Expert Support</h4>
                    <p className="text-white/80">One support team handles all your apps. Get faster resolutions and no finger-pointing.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#F6B86C]/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <TrendingUp className="h-12 w-12 text-[#F6B86C] mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white">40%</div>
                    <div className="text-white/70 text-sm">Revenue Increase</div>
                  </div>
                  <div className="text-center">
                    <Shield className="h-12 w-12 text-emerald-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white">99.9%</div>
                    <div className="text-white/70 text-sm">Uptime SLA</div>
                  </div>
                  <div className="text-center">
                    <Globe className="h-12 w-12 text-purple-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white">50+</div>
                    <div className="text-white/70 text-sm">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Apps Section - Enhanced */}
      {featuredApps.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Featured{" "}
                <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                  Applications
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Discover our powerful Shopify applications designed to work together seamlessly and transform your e-commerce operations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              {featuredApps.map((app, index) => (
                <Card key={app.id} className={`bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group relative ${index === 0 ? 'md:scale-105 border-[#F6B86C]/50' : ''}`}>
                  {index === 0 && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] text-[#1E0D43] font-semibold shadow-lg">
                        <Star className="mr-1 h-3 w-3 fill-current" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <div className="mb-8">
                      <div className="relative mb-4">
                        <Image
                          src={app.icon}
                          alt={app.name}
                          width={192}
                          height={112}
                          className="object-contain"
                        />
                      </div>
                      <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">
                        Available Now
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-[#F6B86C] transition-colors mb-3">
                      {app.name}
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {app.description}
                    </p>
                    <div className="space-y-3">
                      {/* Primary CTA - Install Now for available apps */}
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
                      
                      {/* Secondary CTA - Learn More */}
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                        asChild
                      >
                        <LocaleLink href={app.landingPage || `/apps/${app.id}`}>
                          Learn More
                        </LocaleLink>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                variant="outline"
                className="border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent px-10 py-4 text-xl backdrop-blur-sm rounded-xl"
                asChild
              >
                <LocaleLink href="/apps">
                  View All Applications
                  <ArrowRight className="ml-3 h-5 w-5" />
                </LocaleLink>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Store?
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
              Join thousands of merchants who have upgraded their e-commerce operations with OS² Commerce.
              Start with any app and experience the power of an integrated ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] hover:from-[#E6A05C] hover:to-[#F6B86C] text-[#1E0D43] px-10 py-6 text-xl font-semibold shadow-2xl shadow-[#F6B86C]/25 hover:scale-105 transition-all rounded-xl"
                asChild
              >
                <LocaleLink href="/apps">
                  Get Started Now
                  <ArrowRight className="ml-3 h-6 w-6" />
                </LocaleLink>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent px-10 py-6 text-xl backdrop-blur-sm rounded-xl"
                asChild
              >
                <LocaleLink href="/contact">Talk to an Expert</LocaleLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}