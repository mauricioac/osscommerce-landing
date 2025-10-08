'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BarChart3, Workflow, Users, CheckCircle, Zap, Shield, Globe, Star, TrendingUp, Package, Brain } from "lucide-react"
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
          <div className="max-w-6xl mx-auto grid grid-cols-2 gap-24">
            <div>
              <h1 className="text-6xl text-left font-bold text-gray-900 mb-6 leading-tight relative animate-fade-in-up" dangerouslySetInnerHTML={{ __html: t('home.hero.title') }}></h1>

              <p className="text-lg text-left text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                {t('home.hero.subtitle')}
              </p>

              {/* Shopify Partnership Indicator */}
              <div className="flex items-center gap-3 mb-12 animate-fade-in-up delay-300">
                <span className="text-gray-600 text-lg">{t('home.hero.builtFor')}</span>
                <div className="flex items-center gap-2 backdrop-blur-sm rounded-lg">
                  <Image
                    src="/shopify_black.png"
                    alt="Shopify"
                    width={24}
                    height={24}
                    className="w-6 h-6 opacity-80 object-contain"
                  />
                  <span className="text-gray-900 font-semibold text-lg">Shopify</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-start mb-16 animate-fade-in-up delay-400">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] hover:from-[#E6A05C] hover:to-[#F6B86C] text-[#1E0D43] px-10 py-6 text-xl font-semibold rounded-xl transition-all duration-200 hover:scale-105 shadow-2xl shadow-[#F6B86C]/25 hover:shadow-[#F6B86C]/40"
                  asChild
                >
                  <LocaleLink href="/apps">
                    {t('home.hero.explore')}
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </LocaleLink>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent px-10 py-6 text-xl backdrop-blur-sm rounded-xl"
                  asChild
                >
                  <LocaleLink href="/about">{t('home.hero.learnMore')}</LocaleLink>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-up delay-600 hidden">
                <div className="text-center">
                  <div className="w-20 h-20 border-[#F6B86C] border rounded-full flex items-center justify-center mx-auto text-xl mb-3">
                    <Brain className="text-[#F6B86C] w-10 h-10" />
                  </div>
                  <div className="text-gray-600">{t('home.hero.stats.ai')}</div>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 border-[#F6B86C] border rounded-full flex items-center justify-center mx-auto text-xl mb-3">
                    <Brain className="text-[#F6B86C] w-10 h-10" />
                  </div>
                  <div className="text-gray-600">{t('home.hero.stats.multilingual')}</div>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 border-[#F6B86C] border rounded-full flex items-center justify-center mx-auto text-xl mb-3">
                    <Brain className="text-[#F6B86C] w-10 h-10" />
                  </div>
                  <div className="text-gray-600">{t('home.hero.stats.uptime')}</div>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center">
            <Image
                src="/merchants.png"
                alt=""
                width={192}
                height={192}
                className="w-[450px] h-auto -rotate-12 animate-float object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-[#1E0D43]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-[#F6B86C] bg-clip-text text-transparent">
                {t('home.why.title')}
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              {t('home.why.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 backdrop-blur-sm group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#F6B86C]/25 group-hover:shadow-[#F6B86C]/40 transition-all">
                  <BarChart3 className="h-10 w-10 text-[#1E0D43]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{t('home.why.extended.title')}</h3>
                <p className="text-white/80 leading-relaxed text-lg">
                  {t('home.why.extended.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 backdrop-blur-sm group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all">
                  <Workflow className="h-10 w-10 text-[#1E0D43]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{t('home.why.automated.title')}</h3>
                <p className="text-white/80 leading-relaxed text-lg">
                  {t('home.why.automated.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 backdrop-blur-sm group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/40 transition-all">
                  <Users className="h-10 w-10 text-[#1E0D43]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{t('home.why.unified.title')}</h3>
                <p className="text-white/80 leading-relaxed text-lg">
                  {t('home.why.unified.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 backdrop-blur-sm group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/40 transition-all">
                  <Users className="h-10 w-10 text-[#1E0D43]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{t('home.why.multilingualHelp.title')}</h3>
                <p className="text-white/80 leading-relaxed text-lg">
                  {t('home.why.multilingualHelp.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 backdrop-blur-sm group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/40 transition-all">
                  <Users className="h-10 w-10 text-[#1E0D43]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{t('home.why.adminMultilanguage.title')}</h3>
                <p className="text-white/80 leading-relaxed text-lg">
                  {t('home.why.adminMultilanguage.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 backdrop-blur-sm group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/40 transition-all">
                  <Users className="h-10 w-10 text-[#1E0D43]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{t('home.why.ai.title')}</h3>
                <p className="text-white/80 leading-relaxed text-lg">
                  {t('home.why.ai.description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Apps Section - Enhanced */}
      {featuredApps.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                {t('home.featured.title')}{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-[#F6B86C] bg-clip-text text-transparent">
                  {t('home.featured.titleHighlight')}
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                {t('home.featured.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              {featuredApps.map((app, index) => (
                <Card key={app.id} className={`bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group relative ${index === 0 ? 'md:scale-105 border-[#F6B86C]/50' : ''}`}>
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
                        {t('home.featured.available')}
                      </Badge>
                    </div>
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
                            {t('home.featured.install')}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      ) : app.status === 'coming-soon' ? (
                        <Button
                          className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white font-semibold"
                          disabled
                        >
                          {t('home.featured.comingSoon')}
                        </Button>
                      ) : (
                        <Button
                          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white font-semibold"
                          asChild
                        >
                          <a href={app.shopifyUrl || '#'} target="_blank" rel="noopener noreferrer">
                            {t('home.featured.joinBeta')}
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
                          {t('home.featured.learnMore')}
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
                  {t('home.featured.viewAll')}
                  <ArrowRight className="ml-3 h-5 w-5" />
                </LocaleLink>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-purple-900/15 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('home.cta.title')}
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
              {t('home.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-[#1E0D43] text-white px-10 py-6 text-xl font-semibold shadow-2xl shadow-[#F6B86C]/25 hover:scale-105 transition-all rounded-xl"
                asChild
              >
                <LocaleLink href="/apps">
                  {t('home.cta.getStarted')}
                  <ArrowRight className="ml-3 h-6 w-6" />
                </LocaleLink>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#1E0D43]/50 text-[#1E0D43] hover:bg-[#1E0D43]/10 bg-transparent px-10 py-6 text-xl backdrop-blur-sm rounded-xl"
                asChild
              >
                <LocaleLink href="/contact">{t('home.cta.talkToExpert')}</LocaleLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
