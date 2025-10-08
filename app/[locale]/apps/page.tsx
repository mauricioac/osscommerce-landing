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
import { getTranslations } from "@/lib/i18n"
import { type Locale } from "@/lib/i18n/config"

const statusColors = {
  available: "bg-emerald-100 text-emerald-800 border-emerald-200",
  'coming-soon': "bg-yellow-100 text-yellow-800 border-yellow-200",
  beta: "bg-blue-100 text-blue-800 border-blue-200"
}

const categoryIcons = {
  tracking: "📦",
  marketing: "📧",
  analytics: "📊",
  bundles: "🎁",
  other: "⚡"
}

function AppCard({ app, featured = false, t }: { app: AppConfig, featured?: boolean, t: (key: string) => string }) {
  const statusLabels = {
    available: t('apps.status.available'),
    'coming-soon': t('apps.status.comingSoon'),
    beta: t('apps.status.beta')
  }

  return (
    <Card className={`bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group h-full ${featured ? 'ring-2 ring-[#F6B86C]/50' : ''}`}>
      {featured && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <Badge className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] text-[#1E0D43] font-semibold shadow-lg">
            <Star className="mr-1 h-3 w-3 fill-current" />
            {t('apps.card.popular')}
          </Badge>
        </div>
      )}

      <CardHeader className="p-6">
        <div className="mb-3">
          <div className="relative mb-4">
            <Image
              src={app.icon}
              alt={`${t(app.name)} - ${app.category} app for Shopify`}
              width={192}
              height={112}
              className="object-contain"
            />
          </div>
        </div>

        <p className="text-gray-700 text-sm leading-relaxed mb-6">
          {t(app.description)}
        </p>

        {/* Features */}
        <div className="space-y-2 mt-4">
          <h4 className="text-sm font-medium text-gray-800 mt-4">{t('apps.card.features')}</h4>
          <div className="flex flex-wrap gap-1">
            {app.features.slice(0, 3).map((feature, index) => (
              <Badge
                key={index}
                variant="outline"
                className="border-gray-300 text-gray-700 text-xs"
              >
                {t(feature)}
              </Badge>
            ))}
            {app.features.length > 3 && (
              <Badge
                variant="outline"
                className="border-gray-300 text-gray-700 text-xs"
              >
                +{app.features.length - 3} {t('apps.card.more')}
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
              className="w-full bg-[#1E0D43] text-white font-semibold group-hover:scale-105 transition-transform"
              asChild
            >
              <a href={app.shopifyUrl} target="_blank" rel="noopener noreferrer">
                {t('apps.card.install')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          ) : app.status === 'coming-soon' ? (
            <WaitlistDialog
              appName={t(app.name)}
              appId={app.id}
              buttonVariant="default"
              buttonText={t('apps.card.waitlist')}
            />
          ) : (
            <>
              <Button
                className="w-full bg-[#1E0D43] text-white font-semibold"
                asChild
              >
                <a href={app.shopifyUrl || '#'} target="_blank" rel="noopener noreferrer">
                  {t('apps.card.beta')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <WaitlistDialog
                appName={t(app.name)}
                appId={app.id}
                buttonVariant="outline"
                buttonText={t('apps.card.launchWaitlist')}
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
                <LocaleLink href={app.landingPage}>{t('apps.card.learnMore')}</LocaleLink>
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
                {t('apps.card.docs')}
              </LocaleLink>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

interface AppsPageProps {
  params: Promise<{
    locale: string
  }>
}

export default async function AppsPage({ params }: AppsPageProps) {
  const { locale } = await params
  const t = getTranslations(locale as Locale)
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
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                {t('apps.hero.title')}{" "}
                <span className="bg-gradient-to-r from-emerald-300 to-[#FFB886] bg-clip-text text-transparent">
                  {t('apps.hero.titleHighlight')}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                {t('apps.hero.subtitle')}
              </p>

              {/* Key Benefits */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#1E0D43] text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t('apps.hero.benefits.crossApp.title')}</h3>
                  <p className="text-gray-600 text-sm">{t('apps.hero.benefits.crossApp.description')}</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-[#1E0D43] text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t('apps.hero.benefits.analytics.title')}</h3>
                  <p className="text-gray-600 text-sm">{t('apps.hero.benefits.analytics.description')}</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-[#1E0D43] text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t('apps.hero.benefits.support.title')}</h3>
                  <p className="text-gray-600 text-sm">{t('apps.hero.benefits.support.description')}</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-[#1E0D43] text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t('apps.hero.benefits.savings.title')}</h3>
                  <p className="text-gray-600 text-sm">{t('apps.hero.benefits.savings.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Available Apps */}
        <section className="py-20 bg-[#1E0D43]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t('apps.available.title')}{" "}
                <span className="bg-gradient-to-r from-emerald-300 to-[#FFB886] bg-clip-text text-transparent">
                  {t('apps.available.titleHighlight')}
                </span>
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                {t('apps.available.subtitle')}
              </p>
            </div>

            {availableApps.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {availableApps.map((app, index) => (
                  <AppCard key={app.id} app={app} featured={index === 0} t={t} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gradient-to-br from-[#F6B86C] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#F6B86C]/25">
                  <Zap className="h-12 w-12 text-[#1E0D43]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{t('apps.available.empty.title')}</h3>
                <p className="text-gray-700 mb-8 max-w-md mx-auto">
                  {t('apps.available.empty.subtitle')}
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
                  <span className="bg-gradient-to-r from-emerald-300 to-[#FFB886] bg-clip-text text-transparent">
                    {t('apps.upcoming.title')}
                  </span>
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  {t('apps.upcoming.subtitle')}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {upcomingApps.map((app) => (
                  <AppCard key={app.id} app={app} t={t} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Ecosystem Benefits */}
        <section className="py-20 bg-purple-950/15">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('apps.ecosystem.title')}{" "}
                <span className="bg-gradient-to-r from-emerald-300 to-[#FFB886] bg-clip-text text-transparent">
                  {t('apps.ecosystem.titleHighlight')}
                </span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                {t('apps.ecosystem.subtitle')}
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t('apps.ecosystem.tiers.starter.title')}</h3>
                    <div className="text-3xl font-bold text-emerald-600 mb-4">{t('apps.ecosystem.tiers.starter.save')}</div>
                    <p className="text-gray-700 text-sm">{t('apps.ecosystem.tiers.starter.description')}</p>
                  </CardContent>
                </Card>

                {/* 3 Apps - Most Popular */}
                <Card className="bg-white border-[#F6B86C] text-center shadow-xl hover:shadow-2xl transition-all duration-300 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] text-[#1E0D43] font-semibold shadow-lg">
                      {t('apps.ecosystem.tiers.growth.popular')}
                    </Badge>
                  </div>
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-transparent border-2 border-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-gray-900">3</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t('apps.ecosystem.tiers.growth.title')}</h3>
                    <div className="text-3xl font-bold text-emerald-600 mb-4">{t('apps.ecosystem.tiers.growth.save')}</div>
                    <p className="text-gray-700 text-sm">{t('apps.ecosystem.tiers.growth.description')}</p>
                  </CardContent>
                </Card>

                {/* 4+ Apps */}
                <Card className="bg-white border-gray-200 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-transparent border-2 border-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-gray-900">4+</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t('apps.ecosystem.tiers.complete.title')}</h3>
                    <div className="text-3xl font-bold text-emerald-600 mb-4">{t('apps.ecosystem.tiers.complete.save')}</div>
                    <p className="text-gray-700 text-sm">{t('apps.ecosystem.tiers.complete.description')}</p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-12">
                <div className="bg-white rounded-lg p-6 max-w-2xl mx-auto shadow-lg border border-gray-200">
                  <h4 className="text-gray-900 font-semibold mb-2">{t('apps.ecosystem.automatic.title')}</h4>
                  <p className="text-gray-700 text-sm">
                    {t('apps.ecosystem.automatic.description')}
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
                {t('apps.cta.title')}
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {t('apps.cta.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-[#1E0D43] text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-[#F6B86C]/25"
                  asChild
                >
                  <Link href="/docs/getting-started">
                    {t('apps.cta.getStarted')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#1E0D43]/50 text-[#1E0D43] hover:bg-[#1E0D43]/10 bg-transparent px-8 py-4 text-lg"
                  asChild
                >
                  <Link href="/contact">{t('apps.cta.talkToExpert')}</Link>
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
