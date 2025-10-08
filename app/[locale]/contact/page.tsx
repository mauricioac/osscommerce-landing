import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MessageSquare, MapPin, Phone, Clock, Send } from "lucide-react"
import { LocaleLink } from "@/components/locale-link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getTranslations } from "@/lib/i18n"
import { type Locale } from "@/lib/i18n/config"

interface ContactPageProps {
  params: Promise<{
    locale: string
  }>
}

export default async function ContactPage({ params }: ContactPageProps) {
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
                {t('contact.hero.title')}{" "}
                <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                  {t('contact.hero.titleHighlight')}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                {t('contact.hero.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardHeader className="p-8">
                  <CardTitle className="text-2xl text-gray-900 mb-2">{t('contact.form.title')}</CardTitle>
                  <p className="text-gray-700">
                    {t('contact.form.subtitle')}
                  </p>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-gray-900 font-medium">
                          {t('contact.form.firstName')}
                        </Label>
                        <Input
                          id="firstName"
                          type="text"
                          placeholder={t('contact.form.firstNamePlaceholder')}
                          className="bg-white border-gray-300 focus:border-[#F6B86C] text-gray-900 placeholder:text-gray-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-gray-900 font-medium">
                          {t('contact.form.lastName')}
                        </Label>
                        <Input
                          id="lastName"
                          type="text"
                          placeholder={t('contact.form.lastNamePlaceholder')}
                          className="bg-white border-gray-300 focus:border-[#F6B86C] text-gray-900 placeholder:text-gray-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-900 font-medium">
                        {t('contact.form.email')}
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={t('contact.form.emailPlaceholder')}
                        className="bg-white border-gray-300 focus:border-[#F6B86C] text-gray-900 placeholder:text-gray-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-900 font-medium">
                        {t('contact.form.subject')}
                      </Label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder={t('contact.form.subjectPlaceholder')}
                        className="bg-white border-gray-300 focus:border-[#F6B86C] text-gray-900 placeholder:text-gray-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-900 font-medium">
                        {t('contact.form.message')}
                      </Label>
                      <Textarea
                        id="message"
                        placeholder={t('contact.form.messagePlaceholder')}
                        rows={5}
                        className="bg-white border-gray-300 focus:border-[#F6B86C] text-gray-900 placeholder:text-gray-500 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] hover:from-[#E6A05C] hover:to-[#F6B86C] text-[#1E0D43] font-semibold shadow-lg shadow-[#F6B86C]/25"
                    >
                      {t('contact.form.send')}
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="bg-white border-gray-200 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-[#1E0D43] text-white rounded-lg flex items-center justify-center shadow-lg shadow-[#F6B86C]/25">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{t('contact.info.email.title')}</h3>
                        <p className="text-gray-600">{t('contact.info.email.subtitle')}</p>
                      </div>
                    </div>
                    <p className="text-gray-900 font-medium">{t('contact.info.email.address')}</p>
                    <p className="text-gray-700 text-sm mt-1">{t('contact.info.email.response')}</p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-gray-200 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-[#1E0D43] text-white rounded-lg flex items-center justify-center shadow-lg shadow-[#F6B86C]/25">
                        <MessageSquare className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{t('contact.info.chat.title')}</h3>
                        <p className="text-gray-600">{t('contact.info.chat.subtitle')}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">
                      {t('contact.info.chat.availability')}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-3 border-gray-300 text-gray-700 hover:bg-gray-50"
                    >
                      {t('contact.info.chat.cta')}
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white border-gray-200 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-[#1E0D43] text-white rounded-lg flex items-center justify-center shadow-lg shadow-[#F6B86C]/25">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{t('contact.info.hours.title')}</h3>
                        <p className="text-gray-600">{t('contact.info.hours.subtitle')}</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-700">{t('contact.info.hours.weekdays')}</span>
                        <span className="text-gray-900">{t('contact.info.hours.weekdays_hours')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">{t('contact.info.hours.saturday')}</span>
                        <span className="text-gray-900">{t('contact.info.hours.saturday_hours')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">{t('contact.info.hours.sunday')}</span>
                        <span className="text-gray-600">{t('contact.info.hours.sunday_hours')}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Quick Links */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('contact.quickAnswers.title')}{" "}
                <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                  {t('contact.quickAnswers.titleHighlight')}
                </span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                {t('contact.quickAnswers.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#1E0D43] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#F6B86C]/25 group-hover:scale-110 transition-transform">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{t('contact.supportCenter.title')}</h3>
                  <p className="text-gray-700 mb-6">
                    {t('contact.supportCenter.description')}
                  </p>
                  <Button
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                    asChild
                  >
                    <LocaleLink href="/support">{t('contact.supportCenter.cta')}</LocaleLink>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#1E0D43] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#F6B86C]/25 group-hover:scale-110 transition-transform">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{t('contact.documentation.title')}</h3>
                  <p className="text-gray-700 mb-6">
                    {t('contact.documentation.description')}
                  </p>
                  <Button
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    {t('contact.documentation.cta')}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
