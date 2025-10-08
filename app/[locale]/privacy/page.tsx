'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Mail, Eye, Lock, Users, FileText } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLocale } from "@/components/locale-provider"

export default function PrivacyPage() {
  const { t } = useLocale()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                {t('privacy.hero.title')}{" "}
                <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                  {t('privacy.hero.titleHighlight')}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                {t('privacy.hero.subtitle')}
              </p>
              <p className="text-gray-600">
                {t('privacy.hero.lastUpdated')}
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">

              {/* Information We Collect */}
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardHeader className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-[#1E0D43] text-white rounded-lg flex items-center justify-center shadow-lg shadow-[#F6B86C]/25">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900">{t('privacy.collect.title')}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="space-y-6 text-gray-700">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('privacy.collect.provide.title')}</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li dangerouslySetInnerHTML={{ __html: t('privacy.collect.provide.contact') }}></li>
                        <li dangerouslySetInnerHTML={{ __html: t('privacy.collect.provide.account') }}></li>
                        <li dangerouslySetInnerHTML={{ __html: t('privacy.collect.provide.communication') }}></li>
                        <li dangerouslySetInnerHTML={{ __html: t('privacy.collect.provide.marketing') }}></li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('privacy.collect.auto.title')}</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li dangerouslySetInnerHTML={{ __html: t('privacy.collect.auto.usage') }}></li>
                        <li dangerouslySetInnerHTML={{ __html: t('privacy.collect.auto.device') }}></li>
                        <li dangerouslySetInnerHTML={{ __html: t('privacy.collect.auto.cookies') }}></li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* How We Use Information */}
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardHeader className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-[#1E0D43] text-white rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/25">
                      <Users className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900">{t('privacy.howWeUse.title')}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="space-y-4 text-gray-700">
                    <p className="text-gray-700">{t('privacy.howWeUse.intro')}</p>
                    <ul className="space-y-2 text-gray-700">
                      <li dangerouslySetInnerHTML={{ __html: t('privacy.howWeUse.provide') }}></li>
                      <li dangerouslySetInnerHTML={{ __html: t('privacy.howWeUse.communication') }}></li>
                      <li dangerouslySetInnerHTML={{ __html: t('privacy.howWeUse.marketing') }}></li>
                      <li dangerouslySetInnerHTML={{ __html: t('privacy.howWeUse.analytics') }}></li>
                      <li dangerouslySetInnerHTML={{ __html: t('privacy.howWeUse.legal') }}></li>
                      <li dangerouslySetInnerHTML={{ __html: t('privacy.howWeUse.security') }}></li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Information Sharing */}
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardHeader className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-[#1E0D43] text-white rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/25">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900">{t('privacy.sharing.title')}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="space-y-6 text-gray-700">
                    <p className="text-gray-700">
                      {t('privacy.sharing.intro')}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('privacy.sharing.providers.title')}</h3>
                        <p className="text-gray-700">
                          {t('privacy.sharing.providers.intro')}
                        </p>
                        <ul className="mt-2 space-y-1 text-gray-700">
                          <li>• {t('privacy.sharing.providers.email')}</li>
                          <li>• {t('privacy.sharing.providers.hosting')}</li>
                          <li>• {t('privacy.sharing.providers.analytics')}</li>
                          <li>• {t('privacy.sharing.providers.support')}</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('privacy.sharing.legal.title')}</h3>
                        <p className="text-gray-700">
                          {t('privacy.sharing.legal.p1')}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Data Security */}
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardHeader className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-[#1E0D43] text-white rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/25">
                      <Lock className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900">{t('privacy.security.title')}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="space-y-6 text-gray-700">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('privacy.security.measures.title')}</h3>
                      <p className="text-gray-700 mb-4">
                        {t('privacy.security.measures.intro')}
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• {t('privacy.security.measures.encryption')}</li>
                        <li>• {t('privacy.security.measures.assessments')}</li>
                        <li>• {t('privacy.security.measures.access')}</li>
                        <li>• {t('privacy.security.measures.hosting')}</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('privacy.security.retention.title')}</h3>
                      <p className="text-gray-700">
                        {t('privacy.security.retention.p1')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Your Rights */}
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardHeader className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-[#1E0D43] text-white rounded-lg flex items-center justify-center shadow-lg shadow-rose-500/25">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900">{t('privacy.rights.title')}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="space-y-4 text-gray-700">
                    <p className="text-gray-700">{t('privacy.rights.intro')}</p>
                    <ul className="space-y-2 text-gray-700">
                      <li dangerouslySetInnerHTML={{ __html: t('privacy.rights.access') }}></li>
                      <li dangerouslySetInnerHTML={{ __html: t('privacy.rights.correction') }}></li>
                      <li dangerouslySetInnerHTML={{ __html: t('privacy.rights.deletion') }}></li>
                      <li dangerouslySetInnerHTML={{ __html: t('privacy.rights.portability') }}></li>
                      <li dangerouslySetInnerHTML={{ __html: t('privacy.rights.optOut') }}></li>
                      <li dangerouslySetInnerHTML={{ __html: t('privacy.rights.objection') }}></li>
                    </ul>
                    <p className="text-gray-700 mt-4" dangerouslySetInnerHTML={{ __html: t('privacy.rights.outro') }}></p>
                  </div>
                </CardContent>
              </Card>

              {/* Cookies */}
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardHeader className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-[#1E0D43] text-white rounded-lg flex items-center justify-center shadow-lg shadow-yellow-500/25">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900">{t('privacy.cookies.title')}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="space-y-4 text-gray-700">
                    <p className="text-gray-700">
                      {t('privacy.cookies.intro')}
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li dangerouslySetInnerHTML={{ __html: t('privacy.cookies.essential') }}></li>
                      <li dangerouslySetInnerHTML={{ __html: t('privacy.cookies.analytics') }}></li>
                      <li dangerouslySetInnerHTML={{ __html: t('privacy.cookies.marketing') }}></li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      {t('privacy.cookies.outro')}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardHeader className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-[#1E0D43] text-white rounded-lg flex items-center justify-center shadow-lg shadow-[#F6B86C]/25">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900">{t('privacy.contact.title')}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="space-y-4 text-gray-700">
                    <p className="text-gray-700">
                      {t('privacy.contact.intro')}
                    </p>
                    <div className="space-y-2 text-gray-700">
                      <p dangerouslySetInnerHTML={{ __html: t('privacy.contact.email') }}></p>
                      <p dangerouslySetInnerHTML={{ __html: t('privacy.contact.general') }}></p>
                    </div>
                    <p className="text-gray-600 text-sm mt-6">
                      {t('privacy.contact.response')}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Updates */}
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('privacy.updates.title')}</h3>
                  <p className="text-gray-700">
                    {t('privacy.updates.p1')}
                  </p>
                  <p className="text-gray-700 mt-4">
                    {t('privacy.updates.p2')}
                  </p>
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
