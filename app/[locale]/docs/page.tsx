'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Book, ExternalLink, ArrowRight, Search, Filter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { appsConfig, AppConfig } from "@/lib/apps-config"
import { useLocale } from "@/components/locale-provider"

const statusColors = {
  available: "bg-emerald-100 text-emerald-800 border-emerald-200",
  'coming-soon': "bg-yellow-100 text-yellow-800 border-yellow-200",
  beta: "bg-blue-100 text-blue-800 border-blue-200"
}

function AppDocumentationCard({ app }: { app: AppConfig }) {
  const { t } = useLocale()
  return (
    <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
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
        </div>

        <CardTitle className="text-xl text-gray-900 group-hover:text-[#F6B86C] transition-colors">
          {app.name} {t('docs.card.documentation')}
        </CardTitle>

        <p className="text-gray-700 text-sm leading-relaxed">
          {app.description}
        </p>
      </CardHeader>

      <CardContent className="p-6 pt-0">
        <div className="space-y-4">
          {/* Features Preview */}
          <div>
            <h4 className="text-sm font-medium text-white/90 mb-2">{t('docs.card.coveredTopics')}</h4>
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
                  +{app.features.length - 3} {t('docs.card.more')}
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
                {t('docs.card.viewDocumentation')}
              </Link>
            </Button>

            <div className="flex gap-2">
              {app.landingPage && (
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
                  asChild
                >
                  <Link href={app.landingPage}>
                    {t('docs.card.appInfo')}
                  </Link>
                </Button>
              )}

              {app.shopifyUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
                  asChild
                >
                  <Link href={app.shopifyUrl} target="_blank">
                    <ExternalLink className="mr-1 h-3 w-3" />
                    {t('docs.card.shopify')}
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
  const { t } = useLocale()
  const availableApps = appsConfig.filter(app => app.status === 'available')
  const upcomingApps = appsConfig.filter(app => app.status !== 'available')

  const statusLabels = {
    available: t('docs.status.available'),
    'coming-soon': t('docs.status.comingSoon'),
    beta: t('docs.status.beta')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                {t('docs.hero.title')}{" "}
                <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                  {t('docs.hero.titleHighlight')}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                {t('docs.hero.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Available Apps Documentation */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t('docs.available.title')}{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-[#F6B86C] bg-clip-text text-transparent">
                  {t('docs.available.titleHighlight')}
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                {t('docs.available.subtitle')}
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
                <h3 className="text-2xl font-bold text-white mb-4">{t('docs.empty.title')}</h3>
                <p className="text-white/80 mb-8 max-w-md mx-auto">
                  {t('docs.empty.subtitle')}
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
                  {t('docs.upcoming.title')}{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-[#F6B86C] bg-clip-text text-transparent">
                    {t('docs.upcoming.titleHighlight')}
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  {t('docs.upcoming.subtitle')}
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
      </main>

      <Footer />
    </div>
  )
}
