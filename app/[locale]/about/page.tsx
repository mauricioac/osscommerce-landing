import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Lightbulb, Heart, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getTranslations } from "@/lib/i18n"
import { type Locale } from "@/lib/i18n/config"

interface AboutPageProps {
  params: Promise<{
    locale: string
  }>
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params
  const t = getTranslations(locale as Locale)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                {t('about.hero.title')}{" "}
                <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                  {t('about.hero.titleHighlight')}
                </span>{" "}
                {t('about.hero.titleEnd')}
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                {t('about.hero.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-[#1E0D43]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardHeader className="p-8">
                  <div className="w-16 h-16 bg-[#1E0D43] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#F6B86C]/25">
                    <Target className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900 text-center mb-4">{t('about.mission.title')}</CardTitle>
                  <p className="text-gray-700 text-center leading-relaxed">
                    {t('about.mission.description')}
                  </p>
                </CardHeader>
              </Card>

              <Card className="bg-white border-gray-200 shadow-lg">
                <CardHeader className="p-8">
                  <div className="w-16 h-16 bg-[#1E0D43] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#F6B86C]/25">
                    <Lightbulb className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900 text-center mb-4">{t('about.vision.title')}</CardTitle>
                  <p className="text-gray-700 text-center leading-relaxed">
                    {t('about.vision.description')}
                  </p>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('about.story.title')}</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                {t('about.story.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="bg-white border-gray-200 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#1E0D43] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/25">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{t('about.story.problem.title')}</h3>
                  <p className="text-gray-700">
                    {t('about.story.problem.description')}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#1E0D43] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#F6B86C]/25">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{t('about.story.insight.title')}</h3>
                  <p className="text-gray-700">
                    {t('about.story.insight.description')}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#1E0D43] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#F6B86C]/25">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{t('about.story.solution.title')}</h3>
                  <p className="text-gray-700">
                    {t('about.story.solution.description')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('about.values.title')}</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                {t('about.values.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-[#1E0D43] text-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#F6B86C]/25">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-gray-900 font-semibold mb-2">{t('about.values.customerCentric.title')}</h3>
                <p className="text-gray-600 text-sm">{t('about.values.customerCentric.description')}</p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-[#1E0D43] text-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#F6B86C]/25">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <h3 className="text-gray-900 font-semibold mb-2">{t('about.values.innovation.title')}</h3>
                <p className="text-gray-600 text-sm">{t('about.values.innovation.description')}</p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-[#1E0D43] text-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#F6B86C]/25">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-gray-900 font-semibold mb-2">{t('about.values.excellence.title')}</h3>
                <p className="text-gray-600 text-sm">{t('about.values.excellence.description')}</p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-[#1E0D43] text-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#F6B86C]/25">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-gray-900 font-semibold mb-2">{t('about.values.empathy.title')}</h3>
                <p className="text-gray-600 text-sm">{t('about.values.empathy.description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('about.cta.title')}
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {t('about.cta.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-[#1E0D43] text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-[#F6B86C]/25"
                >
                  {t('about.cta.explore')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#1E0D43]/50 text-[#1E0D43] hover:bg-[#1E0D43]/10 bg-transparent px-8 py-4 text-lg"
                  asChild
                >
                  <Link href="/contact">{t('about.cta.contact')}</Link>
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
