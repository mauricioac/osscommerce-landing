import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, ExternalLink, Book, Star, CheckCircle, BarChart3, Shield, Users, Globe, TrendingUp, Mail, Package, AlertTriangle, DollarSign, Zap, Clock, Target, Award, MessageSquare, Smartphone, Eye, RefreshCw, Bell, MessageCircle, Palette } from "lucide-react";
import { LocaleLink } from "@/components/locale-link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { VideoModal } from "@/components/video-modal";
import { type Locale } from "@/lib/i18n/config";
import { Input } from "@/components/ui/input"
import { getTranslations } from "@/lib/i18n"


interface TrackingPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default async function OSTrackingPage({ params }: TrackingPageProps) {
  const { locale } = await params;
  const t = getTranslations(locale);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />

      {/* Hero Section - Distinguished with embellishments */}
      <section className="py-20 lg:py-32 relative overflow-hidden bg-gray-50">
        {/* Background embellishments */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-brand-primary/20 to-brand-primary-dark/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-20 -left-40 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl animate-pulse delay-500"></div>

          {/* Geometric patterns */}
          <div className="absolute top-10 left-1/4 w-4 h-4 bg-brand-primary/30 rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-40 right-1/3 w-6 h-6 bg-brand-primary/20 rounded-full animate-bounce delay-700"></div>
          <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-brand-primary/20 rounded-full animate-bounce delay-1000"></div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23F6B86C&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;1&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="relative z-10">
                <LocaleLink
                  href="/apps"
                  className="inline-flex text-[#1E0D43] transition-colors mb-8 font-medium"
                >
                  <ArrowLeft className="mr-2 h-4 w-4 relative top-1" />
                  {t('tracking.hero.back')}
                </LocaleLink>

                {/* Large Logo Section */}
                <div className="mb-4">
                  <div className="w-80 h-32 mx-auto lg:mx-0 mb-3 relative">
                    <Image
                      src="/oss-tracking.png"
                      alt="OS² Tracking - Advanced Order Tracking for Shopify"
                      width={320}
                      height={128}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight text-center lg:text-left">
                  {t('tracking.hero.title')}{" "}
                  <span className="bg-gradient-to-r from-brand-primary to-brand-primary-dark bg-clip-text text-transparent">
                    {t('tracking.hero.titleHighlight')}
                  </span>{" "}
                  {t('tracking.hero.titleEnd')}
                </h1>

                <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed text-center lg:text-left">
                  {t('tracking.hero.subtitle')}
                </p>

                {/* Problem Stats */}
                <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 mb-8 border border-gray-200 shadow-sm">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="h-6 w-6 text-red-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">{t('tracking.hero.hiddenCost.title')}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-red-600">73%</div>
                      <div className="text-gray-600 text-sm">{t('tracking.hero.hiddenCost.customersContact')}</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-600">$2-40k</div>
                      <div className="text-gray-600 text-sm">{t('tracking.hero.hiddenCost.monthlyLoss')}</div>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-brand-primary to-brand-primary-dark hover:from-brand-primary hover:to-brand-primary-dark text-white px-8 py-6 text-xl font-semibold shadow-xl shadow-brand-primary/25 hover:scale-105 transition-all"
                    asChild
                  >
                    <a href="https://apps.shopify.com/oss-tracking" target="_blank" rel="noopener noreferrer">
                      {t('tracking.hero.cta.getStarted')}
                      <ArrowRight className="ml-2 h-6 w-6" />
                    </a>
                  </Button>
                  <VideoModal
                    videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    buttonText={t('tracking.hero.cta.howItWorks')}
                    buttonSize="lg"
                    buttonVariant="outline"
                    buttonClassName="border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white bg-white px-8 py-6 text-xl shadow-md"
                  />
                </div>

                {/* Key Benefits */}
                <div className="flex items-center gap-6 text-center lg:text-left">
                  <div>
                    <div className="text-2xl font-bold text-brand-primary">5 min</div>
                    <div className="text-gray-600 text-sm">{t('tracking.hero.benefits.setup')}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-primary">1-Click</div>
                    <div className="text-gray-600 text-sm">{t('tracking.hero.benefits.install')}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-primary">24/7</div>
                    <div className="text-gray-600 text-sm">{t('tracking.hero.benefits.support')}</div>
                  </div>
                </div>
              </div>

              {/* Right Content - Better spaced preview */}
              <div className="relative lg:ml-8 z-10">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 shadow-2xl">
                  {/* Tracking Page Mockup */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100">
                    <div className="h-3 bg-gradient-to-r from-gray-300 to-gray-400 rounded-t-xl"></div>
                    <div className="p-6">
                      <div className="h-8 bg-gradient-to-r from-brand-primary to-brand-primary-dark rounded mb-4"></div>
                      <div className="space-y-3">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                          <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                        </div>
                        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg mt-4 border border-purple-200">
                          <div className="h-3 bg-purple-300 rounded w-2/3 mb-2"></div>
                          <div className="h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-brand-primary">{t('tracking.hero.brandedPage.title')}</p>
                    <p className="text-gray-600 text-sm">{t('tracking.hero.brandedPage.subtitle')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - The Pain */}
      <section className="py-20 bg-[#1E0D43]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              {t('tracking.problem.title')}{" "}
              <span className="text-orange-300">{t('tracking.problem.titleHighlight')}</span>
            </h2>
            <p className="text-xl text-slate-300 mb-16 max-w-4xl mx-auto">
              {t('tracking.problem.subtitle')}
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardContent className="p-8 text-center">
                  <MessageSquare className="h-16 w-16 text-red-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('tracking.problem.supportHell.title')}</h3>
                  <div className="text-3xl font-bold text-red-600 mb-2">73%</div>
                  <p className="text-gray-700">{t('tracking.problem.supportHell.description')}</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 shadow-lg">
                <CardContent className="p-8 text-center">
                  <DollarSign className="h-16 w-16 text-orange-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('tracking.problem.lostRevenue.title')}</h3>
                  <div className="text-3xl font-bold text-orange-600 mb-2">$2-40k</div>
                  <p className="text-gray-700">{t('tracking.problem.lostRevenue.description')}</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 shadow-lg">
                <CardContent className="p-8 text-center">
                  <TrendingUp className="h-16 w-16 text-red-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('tracking.problem.customerChurn.title')}</h3>
                  <div className="text-3xl font-bold text-red-600 mb-2">34%</div>
                  <p className="text-gray-700">{t('tracking.problem.customerChurn.description')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - The Transformation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                {t('tracking.solution.title')}{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                  {t('tracking.solution.titleHighlight')}
                </span>
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                {t('tracking.solution.subtitle')}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">{t('tracking.solution.before.title')}</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✗</span>
                    </div>
                    <p className="text-gray-700">{t('tracking.solution.before.generic')}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✗</span>
                    </div>
                    <p className="text-gray-700">{t('tracking.solution.before.calls')}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✗</span>
                    </div>
                    <p className="text-gray-700">{t('tracking.solution.before.zeroRevenue')}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✗</span>
                    </div>
                    <p className="text-gray-700">{t('tracking.solution.before.delays')}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">{t('tracking.solution.after.title')}</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-gray-700">{t('tracking.solution.after.branded')}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-gray-700">{t('tracking.solution.after.proactive')}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-gray-700">{t('tracking.solution.after.repeat')}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-gray-700">{t('tracking.solution.after.opportunities')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-[#1E0D43]">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                {t('tracking.features.title')}{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-[#F6B86C] bg-clip-text text-transparent">
                  {t('tracking.features.titleHighlight')}
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-4xl mx-auto" dangerouslySetInnerHTML={{ __html: t('tracking.features.subtitle') }}></p>
            </div>

            <div className="space-y-16">
              {/* Feature 1 - Proactive Problem Solving */}
              <Card className="bg-white/10 border-white/20 border-white/20 backdrop-blur-sm overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8">
                  <CardHeader className="space-y-6 p-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#F6B86C] to-[#FF8C42] rounded-lg flex items-center justify-center shadow-lg shadow-[#F6B86C]/25">
                        <Bell className="h-6 w-6 text-[#1E0D43]" />
                      </div>
                      <Badge className="bg-gradient-to-r from-[#F6B86C]/20 to-[#FF8C42]/20 text-[#F6B86C] border-[#F6B86C]/30">
                        {t('tracking.features.proactive.badge')}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl text-white">
                      {t('tracking.features.proactive.title')}
                    </CardTitle>
                    <CardDescription className="text-lg text-white/80">
                      {t('tracking.features.proactive.description')}
                    </CardDescription>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-400" />
                        <span className="text-white/90" dangerouslySetInnerHTML={{ __html: t('tracking.features.proactive.benefit1') }}></span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-400" />
                        <span className="text-white/90">{t('tracking.features.proactive.benefit2')}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-400" />
                        <span className="text-white/90">{t('tracking.features.proactive.benefit3')}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-[#F6B86C]/10 to-[#FF8C42]/10 h-full flex items-center justify-center p-8">
                      <div className="w-full max-w-sm bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                          <span className="text-sm font-medium text-white">{t('tracking.features.proactive.detected')}</span>
                        </div>
                        <p className="text-sm text-white/80">{t('tracking.features.proactive.package')}</p>
                        <Button
                          size="sm"
                          className="w-full bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] text-[#1E0D43]"
                        >
                          {t('tracking.features.proactive.notify')}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>

              {/* Feature 2 - Branded Tracking Page */}
              <Card className="bg-white/10 border-white/20 border-white/20 backdrop-blur-sm overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8">
                  <CardContent className="p-0 order-2 lg:order-1">
                    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 h-full flex items-center justify-center p-8">
                      <div className="w-full max-w-sm bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 space-y-4">
                        <div className="text-center space-y-2">
                          <h4 className="font-semibold text-white">{t('tracking.features.branded.orderOnWay')}</h4>
                          <div className="w-full bg-white/20 rounded-full h-2">
                            <div className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] h-2 rounded-full w-3/4"></div>
                          </div>
                        </div>
                        <div className="border-t border-white/20 pt-4">
                          <h5 className="font-medium mb-2 text-white">{t('tracking.features.branded.mightLike')}</h5>
                          <div className="flex space-x-2">
                            <div className="w-16 h-16 bg-white/10 rounded"></div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-white">{t('tracking.features.branded.premiumCase')}</p>
                              <p className="text-sm text-[#F6B86C]">$29.99</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardHeader className="space-y-6 p-8 order-1 lg:order-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/25">
                        <Palette className="h-6 w-6 text-white" />
                      </div>
                      <Badge className="bg-gradient-to-r from-purple-500/20 to-violet-600/20 text-purple-300 border-purple-500/30">
                        {t('tracking.features.branded.badge')}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl text-white">
                      {t('tracking.features.branded.title')}
                    </CardTitle>
                    <CardDescription className="text-lg text-white/80">
                      {t('tracking.features.branded.description')}
                    </CardDescription>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-400" />
                        <span className="text-white/90">{t('tracking.features.branded.benefit1')}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-400" />
                        <span className="text-white/90">{t('tracking.features.branded.benefit2')}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-400" />
                        <span className="text-white/90">{t('tracking.features.branded.benefit3')}</span>
                      </div>
                    </div>
                  </CardHeader>
                </div>
              </Card>

              {/* Feature 3 - Real-Time Chat */}
              <Card className="bg-white/10 border-white/20 border-white/20 backdrop-blur-sm overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8">
                  <CardHeader className="space-y-6 p-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/25">
                        <MessageCircle className="h-6 w-6 text-white" />
                      </div>
                      <Badge className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border-blue-500/30">
                        {t('tracking.features.chat.badge')}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl text-white">
                      {t('tracking.features.chat.title')}
                    </CardTitle>
                    <CardDescription className="text-lg text-white/80">
                      {t('tracking.features.chat.description')}
                    </CardDescription>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-400" />
                        <span className="text-white/90">{t('tracking.features.chat.benefit1')}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-400" />
                        <span className="text-white/90">{t('tracking.features.chat.benefit2')}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-400" />
                        <span className="text-white/90">{t('tracking.features.chat.benefit3')}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 h-full flex items-center justify-center p-8">
                      <div className="w-full max-w-sm bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-4 space-y-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-[#F6B86C]/20 rounded-full flex items-center justify-center">
                            <span className="text-xs font-medium text-[#F6B86C]">{t('tracking.features.chat.cs')}</span>
                          </div>
                          <div className="flex-1 bg-white/10 rounded-lg p-2">
                            <p className="text-sm text-white">{t('tracking.features.chat.help')}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 justify-end">
                          <div className="flex-1 bg-[#F6B86C]/20 rounded-lg p-2 text-right">
                            <p className="text-sm text-white">{t('tracking.features.chat.whenArrive')}</p>
                          </div>
                          <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MessageCircle className="h-4 w-4 text-white/60" />
                          <Input
                            placeholder={t('tracking.features.chat.placeholder')}
                            className="text-sm bg-white/10 border-white/20 text-white placeholder:text-white/60"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>

              {/* Additional Features Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white/10 border-white/20 border-white/20 backdrop-blur-sm">
                  <CardHeader className="p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/25">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-white">{t('tracking.features.email.title')}</CardTitle>
                    </div>
                    <CardDescription className="text-white/80">
                      {t('tracking.features.email.description')}
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-white/10 border-white/20 border-white/20 backdrop-blur-sm">
                  <CardHeader className="p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#F6B86C] to-[#FF8C42] rounded-lg flex items-center justify-center shadow-lg shadow-[#F6B86C]/25">
                        <Zap className="h-6 w-6 text-[#1E0D43]" />
                      </div>
                      <CardTitle className="text-white">{t('tracking.features.klaviyo.title')}</CardTitle>
                    </div>
                    <CardDescription className="text-white/80">
                      {t('tracking.features.klaviyo.description')}
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-white/10 border-white/20 border-white/20 backdrop-blur-sm">
                  <CardHeader className="p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg shadow-rose-500/25">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-white">{t('tracking.features.multiProvider.title')}</CardTitle>
                    </div>
                    <CardDescription className="text-white/80">
                      {t('tracking.features.multiProvider.description')}
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-white/10 border-white/20 border-white/20 backdrop-blur-sm">
                  <CardHeader className="p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/25">
                        <BarChart3 className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-white">{t('tracking.features.analytics.title')}</CardTitle>
                    </div>
                    <CardDescription className="text-white/80">
                      {t('tracking.features.analytics.description')}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

      {/* Screenshots Section - How It Works */}
      <section className="py-20 bg-purple-950/15">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                {t('tracking.screenshots.title')}
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                {t('tracking.screenshots.subtitle')}
              </p>
            </div>

            {/* Screenshots Grid */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Email Notification Screenshot */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                  <div className="aspect-[4/3] bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <div className="text-center">
                      <Mail className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 font-medium">{t('tracking.screenshots.email.placeholder')}</p>
                      <p className="text-gray-400 text-sm">{t('tracking.screenshots.email.dnd')}</p>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('tracking.screenshots.email.title')}</h3>
                  <p className="text-gray-600">{t('tracking.screenshots.email.description')}</p>
                </div>
              </div>

              {/* Tracking Page Screenshot */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                  <div className="aspect-[4/3] bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <div className="text-center">
                      <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 font-medium">{t('tracking.screenshots.tracking.placeholder')}</p>
                      <p className="text-gray-400 text-sm">{t('tracking.screenshots.tracking.dnd')}</p>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('tracking.screenshots.tracking.title')}</h3>
                  <p className="text-gray-600">{t('tracking.screenshots.tracking.description')}</p>
                </div>
              </div>
            </div>

            {/* Mobile Screenshot */}
            <div className="max-w-md mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <div className="aspect-[2/3] bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <Smartphone className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 font-medium">{t('tracking.screenshots.mobile.placeholder')}</p>
                    <p className="text-gray-400 text-sm">{t('tracking.screenshots.mobile.dnd')}</p>
                  </div>
                </div>
              </div>
              <div className="text-center mt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('tracking.screenshots.mobile.title')}</h3>
                <p className="text-gray-600">{t('tracking.screenshots.mobile.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Success Stories - Hidden for now */}
      {false && (
      <section id="features" className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                {t('tracking.results.title')}{" "}
                <span className="bg-gradient-to-r from-brand-primary to-brand-primary-dark bg-clip-text text-transparent">
                  {t('tracking.results.titleHighlight')}
                </span>
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                {t('tracking.results.subtitle')}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Case Study 1 */}
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t('tracking.results.case1.store')}</h3>
                    <div className="text-brand-primary font-bold text-2xl">{t('tracking.results.case1.revenue')}</div>
                  </div>
                  <p className="text-gray-700 text-center mb-4">
                    {t('tracking.results.case1.quote')}
                  </p>
                  <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                    <div className="text-emerald-700 font-bold text-sm">{t('tracking.results.case1.win')}</div>
                    <div className="text-gray-700 text-sm">{t('tracking.results.case1.win_desc')}</div>
                  </div>
                </CardContent>
              </Card>

              {/* Case Study 2 */}
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t('tracking.results.case2.store')}</h3>
                    <div className="text-brand-primary font-bold text-2xl">{t('tracking.results.case2.revenue')}</div>
                  </div>
                  <p className="text-gray-700 text-center mb-4">
                    {t('tracking.results.case2.quote')}
                  </p>
                  <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                    <div className="text-purple-700 font-bold text-sm">{t('tracking.results.case2.win')}</div>
                    <div className="text-gray-700 text-sm">{t('tracking.results.case2.win_desc')}</div>
                  </div>
                </CardContent>
              </Card>

              {/* Case Study 3 */}
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                      <RefreshCw className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t('tracking.results.case3.store')}</h3>
                    <div className="text-brand-primary font-bold text-2xl">{t('tracking.results.case3.revenue')}</div>
                  </div>
                  <p className="text-gray-700 text-center mb-4">
                    {t('tracking.results.case3.quote')}
                  </p>
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <div className="text-brand-primary font-bold text-sm">{t('tracking.results.case3.win')}</div>
                    <div className="text-gray-700 text-sm">{t('tracking.results.case3.win_desc')}</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 shadow-lg mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t('tracking.results.average.title')}</h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-brand-primary">47%</div>
                  <div className="text-gray-600">{t('tracking.results.average.repeat')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-primary">$24k</div>
                  <div className="text-gray-600">{t('tracking.results.average.revenue')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600">73%</div>
                  <div className="text-gray-600">{t('tracking.results.average.tickets')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-primary">15 days</div>
                  <div className="text-gray-600">{t('tracking.results.average.roi')}</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-brand-primary to-brand-primary-dark hover:from-blue-700 hover:to-blue-800 text-white px-12 py-6 text-xl font-semibold shadow-2xl shadow-brand-primary/25 hover:scale-105 transition-all"
                asChild
              >
                <a href="https://apps.shopify.com/oss-tracking" target="_blank" rel="noopener noreferrer">
                  {t('tracking.results.cta')}
                  <ArrowRight className="ml-2 h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('tracking.ecosystem.title')}{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-[#F6B86C] bg-clip-text text-transparent">
                  {t('tracking.ecosystem.titleHighlight')}
                </span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                {t('tracking.ecosystem.subtitle')}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="w-16 h-16 bg-[#1E0D43] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('tracking.ecosystem.crossApp.title')}</h3>
                  <p className="text-gray-700">{t('tracking.ecosystem.crossApp.description')}</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-[#1E0D43] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('tracking.ecosystem.analytics.title')}</h3>
                  <p className="text-gray-700">{t('tracking.ecosystem.analytics.description')}</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-[#1E0D43] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('tracking.ecosystem.support.title')}</h3>
                  <p className="text-gray-700">{t('tracking.ecosystem.support.description')}</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-[#1E0D43] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('tracking.ecosystem.savings.title')}</h3>
                  <p className="text-gray-700">{t('tracking.ecosystem.savings.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-purple-950/15 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-brand-primary/20 to-orange-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-400/20 to-brand-primary/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('tracking.finalCta.title')}{" "}
              <span className="bg-gradient-to-r from-brand-primary to-brand-primary-dark bg-clip-text text-transparent">
                {t('tracking.finalCta.titleHighlight')}
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto">
              {t('tracking.finalCta.subtitle')}
            </p>

            <div className="flex justify-center mb-8">
              <Button
                size="lg"
                className="bg-[#1E0D43] text-white px-16 py-8 text-2xl font-semibold shadow-2xl shadow-brand-primary/25 hover:scale-105 transition-all"
                asChild
              >
                <a href="https://apps.shopify.com/oss-tracking" target="_blank" rel="noopener noreferrer">
                  {t('tracking.finalCta.cta')}
                  <ArrowRight className="ml-3 h-7 w-7" />
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-emerald-500" />
                <span className="text-sm font-medium">{t('tracking.finalCta.badges.setup')}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-emerald-500" />
                <span className="text-sm font-medium">{t('tracking.finalCta.badges.support')}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-emerald-500" />
                <span className="text-sm font-medium">{t('tracking.finalCta.badges.cancel')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
