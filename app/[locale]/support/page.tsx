import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Search,
  MessageCircle,
  Book,
  Video,
  HelpCircle,
  Mail,
  Phone,
  Clock,
  CheckCircle,
  ArrowRight,
  Download
} from "lucide-react"
import { LocaleLink } from "@/components/locale-link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getTranslations } from "@/lib/i18n"
import { type Locale } from "@/lib/i18n/config"

interface SupportPageProps {
  params: Promise<{
    locale: string
  }>
}

export default async function SupportPage({ params }: SupportPageProps) {
  const { locale } = await params
  const t = getTranslations(locale as Locale)

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                {t('support.hero.title')}{" "}
                <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                  {t('support.hero.titleHighlight')}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                {t('support.hero.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Quick Support Options */}
        <section className="py-20 bg-[#1E0D43] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t('support.instantHelp.title')}{" "}
                <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                  {t('support.instantHelp.titleHighlight')}
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                {t('support.instantHelp.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#1E0D43] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#F6B86C]/25 group-hover:scale-110 transition-transform">
                    <MessageCircle className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{t('support.liveChat.title')}</h3>
                  <p className="text-gray-700 mb-6 text-sm">
                    {t('support.liveChat.description')}
                  </p>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] text-[#1E0D43] font-semibold"
                  >
                    {t('support.liveChat.cta')}
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#1E0D43] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{t('support.emailSupport.title')}</h3>
                  <p className="text-gray-700 mb-6 text-sm">
                    {t('support.emailSupport.description')}
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                    asChild
                  >
                    <LocaleLink href="/contact">{t('support.emailSupport.cta')}</LocaleLink>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#1E0D43] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/25 group-hover:scale-110 transition-transform">
                    <Book className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{t('support.documentation.title')}</h3>
                  <p className="text-gray-700 mb-6 text-sm">
                    {t('support.documentation.description')}
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                    asChild
                  >
                    <LocaleLink href="/docs">{t('support.documentation.cta')}</LocaleLink>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#1E0D43] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform">
                    <Video className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{t('support.videoTutorials.title')}</h3>
                  <p className="text-gray-700 mb-6 text-sm">
                    {t('support.videoTutorials.description')}
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    {t('support.videoTutorials.cta')}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('support.faq.title')}</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                {t('support.faq.subtitle')}
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem
                  value="item-1"
                  className="bg-gray-50 border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-gray-900 hover:text-[#F6B86C] hover:no-underline">
                    {t('support.faq.questions.install.question')}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {t('support.faq.questions.install.answer')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="bg-gray-50 border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-gray-900 hover:text-[#F6B86C] hover:no-underline">
                    {t('support.faq.questions.whatMakesDifferent.question')}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {t('support.faq.questions.whatMakesDifferent.answer')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="bg-gray-50 border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-gray-900 hover:text-[#F6B86C] hover:no-underline">
                    {t('support.faq.questions.refunds.question')}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {t('support.faq.questions.refunds.answer')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="bg-gray-50 border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-gray-900 hover:text-[#F6B86C] hover:no-underline">
                    {t('support.faq.questions.ecosystemDiscount.question')}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {t('support.faq.questions.ecosystemDiscount.answer')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-5"
                  className="bg-gray-50 border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-gray-900 hover:text-[#F6B86C] hover:no-underline">
                    {t('support.faq.questions.whatSupport.question')}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {t('support.faq.questions.whatSupport.answer')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-6"
                  className="bg-gray-50 border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-gray-900 hover:text-[#F6B86C] hover:no-underline">
                    {t('support.faq.questions.migrateData.question')}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {t('support.faq.questions.migrateData.answer')}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Support CTA */}
        <section className="py-20 bg-purple-950/15">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('support.stillNeedHelp.title')}
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {t('support.stillNeedHelp.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-[#1E0D43] text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-[#F6B86C]/25"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {t('support.stillNeedHelp.ctaChat')}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#1E0D43] text-[#1E0D43] hover:bg-[#1E0D43] hover:text-white bg-transparent px-8 py-4 text-lg"
                  asChild
                >
                  <LocaleLink href="/contact">{t('support.stillNeedHelp.ctaMessage')}</LocaleLink>
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
