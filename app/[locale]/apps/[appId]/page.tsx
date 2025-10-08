import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowLeft, ExternalLink, Book, Star, CheckCircle, BarChart3, Shield, Users, Globe, Zap } from "lucide-react"
import { LocaleLink } from "@/components/locale-link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WaitlistDialog } from "@/components/waitlist-dialog"
import { getAppById, appsConfig } from "@/lib/apps-config"
import { notFound } from "next/navigation"
import { type Locale } from "@/lib/i18n/config"
import { getTranslations } from "@/lib/i18n"

interface AppPageProps {
  params: Promise<{
    locale: Locale
    appId: string
  }>
}

export default async function AppPage({ params }: AppPageProps) {
  const { locale, appId } = await params
  const t = getTranslations(locale)
  const app = getAppById(appId)
  
  if (!app) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
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
                  {t('appPage.back')}
                </LocaleLink>
                
                <div className="mb-6">
                  <div className="w-64 h-32 relative mb-4">
                    <Image
                      src={app.icon}
                      alt={`${app.name} - ${app.category} app for Shopify`}
                      width={256}
                      height={128}
                      className="object-contain"
                    />
                  </div>
                  <Badge className={`
                    ${app.status === 'available' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' : ''}
                    ${app.status === 'coming-soon' ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' : ''}
                    ${app.status === 'beta' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' : ''}
                  `}>
                    {t(`apps.status.${app.status.replace('-','')}`)}
                  </Badge>
                </div>

                <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                  {app.description}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 mb-12">
                  {app.status === 'available' && app.shopifyUrl ? (
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] hover:from-[#E6A05C] hover:to-[#F6B86C] text-[#1E0D43] px-8 py-4 text-lg font-semibold shadow-lg shadow-[#F6B86C]/25"
                      asChild
                    >
                      <a href={app.shopifyUrl} target="_blank" rel="noopener noreferrer">
                        {t('appPage.install')}
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  ) : app.status === 'coming-soon' ? (
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 text-lg font-semibold"
                      disabled
                    >
                      {t('apps.status.comingSoon')}
                    </Button>
                  ) : (
                    <>
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white px-8 py-4 text-lg font-semibold"
                        asChild
                      >
                        <a href={app.shopifyUrl || '#'} target="_blank" rel="noopener noreferrer">
                          {t('appPage.joinBeta')}
                          <ExternalLink className="ml-2 h-5 w-5" />
                        </a>
                      </Button>
                      <WaitlistDialog
                        appName={app.name}
                        appId={app.id}
                        buttonVariant="outline"
                      />
                    </>
                  )}

                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent px-8 py-4 text-lg"
                    asChild
                  >
                    <LocaleLink href={`/docs/${app.id}`}>
                      <Book className="mr-2 h-5 w-5" />
                      {t('appPage.documentation')}
                    </LocaleLink>
                  </Button>
                </div>

                {/* Quick Stats */}
                {app.status === 'available' ? (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-white/20 rounded-lg shadow-sm">
                      <BarChart3 className="h-8 w-8 text-[#F6B86C] mx-auto mb-2" />
                      <div className="text-lg font-bold text-gray-900">99.9%</div>
                      <div className="text-gray-600 text-xs">{t('appPage.stats.uptime')}</div>
                    </div>
                    <div className="text-center p-4 bg-white/20 rounded-lg shadow-sm">
                      <Users className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                      <div className="text-lg font-bold text-gray-900">10K+</div>
                      <div className="text-gray-600 text-xs">{t('appPage.stats.users')}</div>
                    </div>
                    <div className="text-center p-4 bg-white/20 rounded-lg shadow-sm">
                      <Shield className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                      <div className="text-lg font-bold text-gray-900">5★</div>
                      <div className="text-gray-600 text-xs">{t('appPage.stats.rating')}</div>
                    </div>
                    <div className="text-center p-4 bg-white/20 rounded-lg shadow-sm">
                      <Globe className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                      <div className="text-lg font-bold text-gray-900">24/7</div>
                      <div className="text-gray-600 text-xs">{t('appPage.stats.support')}</div>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-white/20 rounded-lg shadow-sm">
                      <CheckCircle className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                      <div className="text-lg font-bold text-gray-900">Beta</div>
                      <div className="text-gray-600 text-xs">{t('appPage.stats.earlyAccess')}</div>
                    </div>
                    <div className="text-center p-4 bg-white/20 rounded-lg shadow-sm">
                      <Shield className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                      <div className="text-lg font-bold text-gray-900">100%</div>
                      <div className="text-gray-600 text-xs">{t('appPage.stats.secure')}</div>
                    </div>
                    <div className="text-center p-4 bg-white/20 rounded-lg shadow-sm">
                      <Users className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                      <div className="text-lg font-bold text-gray-900">Limited</div>
                      <div className="text-gray-600 text-xs">{t('appPage.stats.limitedSpots')}</div>
                    </div>
                    <div className="text-center p-4 bg-white/20 rounded-lg shadow-sm">
                      <Globe className="h-8 w-8 text-[#F6B86C] mx-auto mb-2" />
                      <div className="text-lg font-bold text-gray-900">24/7</div>
                      <div className="text-gray-600 text-xs">{t('appPage.stats.support')}</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Content - App Preview */}
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
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
                      <p className="text-gray-600">{t('appPage.preview')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t('appPage.features.title')}{" "}
                <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                  {t('appPage.features.titleHighlight')}
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                {t('appPage.features.subtitle').replace('{category}', app.category).replace('{appName}', app.name)}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {app.features.map((feature, index) => (
                <Card key={index} className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#F6B86C] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-[#1E0D43]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature}</h3>
                        <p className="text-gray-700 text-sm">
                          {t('appPage.features.description').replace('{feature}', feature.toLowerCase())}
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('appPage.ecosystem.title')}{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-[#F6B86C] bg-clip-text text-transparent">
                  {t('appPage.ecosystem.titleHighlight')}
                </span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                {t('appPage.ecosystem.subtitle').replace('{appName}', app.name)}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('appPage.ecosystem.crossApp.title')}</h3>
                  <p className="text-gray-700">{t('appPage.ecosystem.crossApp.description')}</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F6B86C] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-[#1E0D43]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('appPage.ecosystem.analytics.title')}</h3>
                  <p className="text-gray-700">{t('appPage.ecosystem.analytics.description')}</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('appPage.ecosystem.support.title')}</h3>
                  <p className="text-gray-700">{t('appPage.ecosystem.support.description')}</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('appPage.ecosystem.savings.title')}</h3>
                  <p className="text-gray-700">{t('appPage.ecosystem.savings.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('appPage.cta.title').replace('{appName}', app.name)}
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {t('appPage.cta.subtitle').replace('{appName}', app.name).replace('{category}', app.category)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {app.status === 'available' && app.shopifyUrl ? (
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] hover:from-[#E6A05C] hover:to-[#F6B86C] text-[#1E0D43] px-10 py-6 text-xl font-semibold shadow-lg shadow-[#F6B86C]/25"
                  asChild
                >
                  <a href={app.shopifyUrl} target="_blank" rel="noopener noreferrer">
                    {t('appPage.cta.install').replace('{appName}', app.name)}
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </a>
                </Button>
              ) : app.status === 'beta' && app.shopifyUrl ? (
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white px-10 py-6 text-xl font-semibold"
                  asChild
                >
                  <a href={app.shopifyUrl} target="_blank" rel="noopener noreferrer">
                    {t('appPage.joinBeta')}
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </a>
                </Button>
              ) : (
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-10 py-6 text-xl font-semibold"
                  disabled
                >
                  {t('apps.status.comingSoon')}
                </Button>
              )}
              <Button
                size="lg"
                variant="outline"
                className="border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent px-10 py-6 text-xl"
                asChild
              >
                <LocaleLink href="/apps">{t('appPage.cta.viewAll')}</LocaleLink>
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