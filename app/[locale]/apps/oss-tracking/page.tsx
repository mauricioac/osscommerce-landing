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


interface TrackingPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default async function OSTrackingPage({ params }: TrackingPageProps) {
  const { locale } = await params;

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
                  Back to Apps
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
                  Stop losing{" "}
                  <span className="bg-gradient-to-r from-brand-primary to-brand-primary-dark bg-clip-text text-transparent">
                    $$$
                  </span>{" "}
                  every month
                </h1>

                <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed text-center lg:text-left">
                  Turn your biggest customer service headache into your most powerful revenue driver.
                  OS² Tracking transforms "Where is my order?" into repeat purchases and upsells.
                </p>

                {/* Problem Stats */}
                <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 mb-8 border border-gray-200 shadow-sm">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="h-6 w-6 text-red-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">The Hidden Cost of Poor Tracking</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-red-600">73%</div>
                      <div className="text-gray-600 text-sm">of customers contact support about shipping</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-600">$2-40k</div>
                      <div className="text-gray-600 text-sm">average monthly loss from missed opportunities</div>
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
                      Get started in 5 minutes
                      <ArrowRight className="ml-2 h-6 w-6" />
                    </a>
                  </Button>
                  <VideoModal
                    videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    buttonText="See How It Works"
                    buttonSize="lg"
                    buttonVariant="outline"
                    buttonClassName="border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white bg-white px-8 py-6 text-xl shadow-md"
                  />
                </div>

                {/* Key Benefits */}
                <div className="flex items-center gap-6 text-center lg:text-left">
                  <div>
                    <div className="text-2xl font-bold text-brand-primary">5 min</div>
                    <div className="text-gray-600 text-sm">Setup Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-primary">1-Click</div>
                    <div className="text-gray-600 text-sm">Installation</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-primary">24/7</div>
                    <div className="text-gray-600 text-sm">Support</div>
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
                    <p className="text-brand-primary">Branded Tracking Page</p>
                    <p className="text-gray-600 text-sm">Turn every delivery into a sales opportunity</p>
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
              Your Tracking System Is{" "}
              <span className="text-orange-300">Bleeding Money</span>
            </h2>
            <p className="text-xl text-slate-300 mb-16 max-w-4xl mx-auto">
              Every day customers can't track their orders is another day of lost revenue, frustrated customers, and missed opportunities.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardContent className="p-8 text-center">
                  <MessageSquare className="h-16 w-16 text-red-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Support Ticket Hell</h3>
                  <div className="text-3xl font-bold text-red-600 mb-2">73%</div>
                  <p className="text-gray-700">of support tickets are "Where is my order?" costing you $2,340 per month in support time</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 shadow-lg">
                <CardContent className="p-8 text-center">
                  <DollarSign className="h-16 w-16 text-orange-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Lost Revenue</h3>
                  <div className="text-3xl font-bold text-orange-600 mb-2">$2-40k</div>
                  <p className="text-gray-700">missed upselling opportunities per month because you're not engaging customers during delivery</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 shadow-lg">
                <CardContent className="p-8 text-center">
                  <TrendingUp className="h-16 w-16 text-red-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Churn</h3>
                  <div className="text-3xl font-bold text-red-600 mb-2">34%</div>
                  <p className="text-gray-700">of customers won't order again after a poor delivery experience</p>
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
                Transform Every Delivery Into{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                  Revenue Growth
                </span>
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                OS² Tracking turns your biggest customer service problem into your most profitable customer touchpoint.
                Watch frustrated customers become repeat buyers.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Before OS² Tracking</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✗</span>
                    </div>
                    <p className="text-gray-700">Generic carrier tracking pages with zero branding</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✗</span>
                    </div>
                    <p className="text-gray-700">Customers calling/emailing about every shipment</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✗</span>
                    </div>
                    <p className="text-gray-700">Zero revenue generated during the delivery window</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✗</span>
                    </div>
                    <p className="text-gray-700">Delivery delays create angry customers</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">After OS² Tracking</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-gray-700">Branded tracking pages that reinforce your brand</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-gray-700">Proactive notifications eliminate 89% of support tickets</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-gray-700">Average 47% increase in repeat purchases</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-gray-700">Delivery delays become upselling opportunities</p>
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
                Advanced Shopify Tracking Features That{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-[#F6B86C] bg-clip-text text-transparent">
                  Boost Revenue & Reduce Support
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-4xl mx-auto">
                Your post-purchase experience is a powerful tool for customer retention and revenue generation. OS²
                Tracking transforms every tracking update into an opportunity. <a href="/blog/ultimate-guide-shopify-order-tracking-2025" className="text-[#F6B86C] hover:underline">Learn advanced strategies in our comprehensive guide</a>.
              </p>
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
                        Proactive Intelligence
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl text-white">
                      Proactive Problem Solving with Anomaly Detection
                    </CardTitle>
                    <CardDescription className="text-lg text-white/80">
                      Our intelligent anomaly detection system actively monitors every order. If a package doesn't show
                      status changes within X business days, we automatically alert both you and your customer.
                    </CardDescription>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-400" />
                        <span className="text-white/90"><a href="/blog/reduce-wismo-support-tickets-80-percent" className="hover:text-[#F6B86C] transition-colors">Eliminate WISMO inquiries by 80%</a></span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-400" />
                        <span className="text-white/90">Build customer trust proactively</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-400" />
                        <span className="text-white/90">Save support team hours</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-[#F6B86C]/10 to-[#FF8C42]/10 h-full flex items-center justify-center p-8">
                      <div className="w-full max-w-sm bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                          <span className="text-sm font-medium text-white">Anomaly Detected</span>
                        </div>
                        <p className="text-sm text-white/80">Package #TF-2024-001 hasn't moved in 3 days</p>
                        <Button
                          size="sm"
                          className="w-full bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] text-[#1E0D43]"
                        >
                          Notify Customer
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
                          <h4 className="font-semibold text-white">Your Order is On Its Way!</h4>
                          <div className="w-full bg-white/20 rounded-full h-2">
                            <div className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] h-2 rounded-full w-3/4"></div>
                          </div>
                        </div>
                        <div className="border-t border-white/20 pt-4">
                          <h5 className="font-medium mb-2 text-white">You might also like:</h5>
                          <div className="flex space-x-2">
                            <div className="w-16 h-16 bg-white/10 rounded"></div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-white">Premium Case</p>
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
                        Revenue Generator
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl text-white">
                      Fully Branded Tracking Page & AI-Driven Upsells
                    </CardTitle>
                    <CardDescription className="text-lg text-white/80">
                      Create a 100% branded tracking page that seamlessly integrates with your store's aesthetic.
                      Features AI-driven product recommendations tailored to your customer's purchase history.
                    </CardDescription>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-400" />
                        <span className="text-white/90">Increase Average Order Value</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-400" />
                        <span className="text-white/90">Reinforce brand identity</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-400" />
                        <span className="text-white/90">Drive repeat purchases</span>
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
                        Real-Time Support
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl text-white">
                      Real-Time Customer Engagement with In-Page Chat
                    </CardTitle>
                    <CardDescription className="text-lg text-white/80">
                      Our tracking page includes a real-time chat feature, allowing customers to get instant answers
                      directly where they are tracking their order.
                    </CardDescription>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-400" />
                        <span className="text-white/90">Provide immediate support</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-400" />
                        <span className="text-white/90">Reduce customer frustration</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-400" />
                        <span className="text-white/90">Free up support team</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 h-full flex items-center justify-center p-8">
                      <div className="w-full max-w-sm bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-4 space-y-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-[#F6B86C]/20 rounded-full flex items-center justify-center">
                            <span className="text-xs font-medium text-[#F6B86C]">CS</span>
                          </div>
                          <div className="flex-1 bg-white/10 rounded-lg p-2">
                            <p className="text-sm text-white">Hi! How can I help with your order?</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 justify-end">
                          <div className="flex-1 bg-[#F6B86C]/20 rounded-lg p-2 text-right">
                            <p className="text-sm text-white">When will my order arrive?</p>
                          </div>
                          <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MessageCircle className="h-4 w-4 text-white/60" />
                          <Input
                            placeholder="Type your message..."
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
                      <CardTitle className="text-white">Powerful Email Editor & Liquid Support</CardTitle>
                    </div>
                    <CardDescription className="text-white/80">
                      Take complete control over customer communication with our email editor featuring full Liquid
                      support. Design stunning, personalized updates that match your brand voice perfectly.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-white/10 border-white/20 border-white/20 backdrop-blur-sm">
                  <CardHeader className="p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#F6B86C] to-[#FF8C42] rounded-lg flex items-center justify-center shadow-lg shadow-[#F6B86C]/25">
                        <Zap className="h-6 w-6 text-[#1E0D43]" />
                      </div>
                      <CardTitle className="text-white">Seamless Klaviyo Integration</CardTitle>
                    </div>
                    <CardDescription className="text-white/80">
                      Deep integration with Klaviyo allows you to leverage tracking data within your existing marketing
                      automation workflows for highly targeted campaigns.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-white/10 border-white/20 border-white/20 backdrop-blur-sm">
                  <CardHeader className="p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg shadow-rose-500/25">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-white">Multi-Provider Tracking</CardTitle>
                    </div>
                    <CardDescription className="text-white/80">
                      Aggregate tracking data from multiple shipping providers, ensuring comprehensive and reliable
                      tracking information for all your orders, regardless of carrier.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-white/10 border-white/20 border-white/20 backdrop-blur-sm">
                  <CardHeader className="p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/25">
                        <BarChart3 className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-white">Delivery Feedback & Analytics</CardTitle>
                    </div>
                    <CardDescription className="text-white/80">
                      Collect and analyze delivery feedback directly on the tracking page. Gain insights into delivery
                      performance and identify areas for improvement.
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
                See OSS Tracking In Action
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                From email notifications to branded tracking pages - see exactly how OS² Tracking transforms your customer experience.
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
                      <p className="text-gray-500 font-medium">Email Notification Screenshot</p>
                      <p className="text-gray-400 text-sm">Drag & drop your screenshot here</p>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Smart Email Notifications</h3>
                  <p className="text-gray-600">Proactive shipping updates with branded design and upsell opportunities</p>
                </div>
              </div>

              {/* Tracking Page Screenshot */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                  <div className="aspect-[4/3] bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <div className="text-center">
                      <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 font-medium">Tracking Page Screenshot</p>
                      <p className="text-gray-400 text-sm">Drag & drop your screenshot here</p>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Branded Tracking Pages</h3>
                  <p className="text-gray-600">Custom tracking experience with product recommendations and social proof</p>
                </div>
              </div>
            </div>

            {/* Mobile Screenshot */}
            <div className="max-w-md mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <div className="aspect-[2/3] bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <Smartphone className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 font-medium">Mobile Experience</p>
                    <p className="text-gray-400 text-sm">Mobile screenshot here</p>
                  </div>
                </div>
              </div>
              <div className="text-center mt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Mobile Optimized</h3>
                <p className="text-gray-600">Perfect experience on all devices with fast loading and easy navigation</p>
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
                Real Results From{" "}
                <span className="bg-gradient-to-r from-brand-primary to-brand-primary-dark bg-clip-text text-transparent">
                  Real Merchants
                </span>
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                See how merchants like you are transforming their shipping experience into a revenue machine.
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Fashion Boutique</h3>
                    <div className="text-brand-primary font-bold text-2xl">+234% revenue</div>
                  </div>
                  <p className="text-gray-700 text-center mb-4">
                    "Turned our tracking page into our highest converting upsell channel.
                    Customers love getting style recommendations while waiting for delivery."
                  </p>
                  <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                    <div className="text-emerald-700 font-bold text-sm">Key Win:</div>
                    <div className="text-gray-700 text-sm">67% upsell conversion on delayed shipments</div>
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Electronics Store</h3>
                    <div className="text-brand-primary font-bold text-2xl">-89% support tickets</div>
                  </div>
                  <p className="text-gray-700 text-center mb-4">
                    "Proactive notifications eliminated almost all 'where is my order' tickets.
                    Our support team now focuses on sales instead of shipping questions."
                  </p>
                  <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                    <div className="text-purple-700 font-bold text-sm">Key Win:</div>
                    <div className="text-gray-700 text-sm">$18k/month saved in support costs</div>
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Health & Beauty</h3>
                    <div className="text-brand-primary font-bold text-2xl">+156% repeat orders</div>
                  </div>
                  <p className="text-gray-700 text-center mb-4">
                    "Smart replenishment reminders in tracking emails boosted our subscription rate.
                    Customers reorder automatically when they're almost out."
                  </p>
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <div className="text-brand-primary font-bold text-sm">Key Win:</div>
                    <div className="text-gray-700 text-sm">$52k/month in recurring revenue</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 shadow-lg mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Average Results Across All Stores</h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-brand-primary">47%</div>
                  <div className="text-gray-600">More Repeat Orders</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-primary">$24k</div>
                  <div className="text-gray-600">Extra Monthly Revenue</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600">73%</div>
                  <div className="text-gray-600">Fewer Support Tickets</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-primary">15 days</div>
                  <div className="text-gray-600">Average ROI Timeline</div>
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
                  Join These Successful Merchants Today
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
                Works Better with{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-[#F6B86C] bg-clip-text text-transparent">
                  OS² Ecosystem
                </span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                OS² Tracking is designed to work seamlessly with other OS² Commerce apps, unlocking features across apps that work together in ways not possible otherwise.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="w-16 h-16 bg-[#1E0D43] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Cross-App Features</h3>
                  <p className="text-gray-700">Unlock powerful integrations when using multiple OS² apps together.</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-[#1E0D43] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Shared Analytics</h3>
                  <p className="text-gray-700">Cross-app insights and unified reporting dashboard.</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-[#1E0D43] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Unified Support</h3>
                  <p className="text-gray-700">One support team for all your OS² Commerce apps.</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-[#1E0D43] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Volume Savings</h3>
                  <p className="text-gray-700">Save up to 30% with multiple app installations.</p>
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
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-brand-primary to-brand-primary-dark bg-clip-text text-transparent">
                Order Tracking?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto">
              Join forward-thinking merchants who are turning shipping notifications into revenue opportunities.
              Get started in minutes.
            </p>

            <div className="flex justify-center mb-8">
              <Button
                size="lg"
                className="bg-[#1E0D43] text-white px-16 py-8 text-2xl font-semibold shadow-2xl shadow-brand-primary/25 hover:scale-105 transition-all"
                asChild
              >
                <a href="https://apps.shopify.com/oss-tracking" target="_blank" rel="noopener noreferrer">
                  Get started in 5 minutes
                  <ArrowRight className="ml-3 h-7 w-7" />
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-emerald-500" />
                <span className="text-sm font-medium">5-minute setup</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-emerald-500" />
                <span className="text-sm font-medium">24/7 support</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-emerald-500" />
                <span className="text-sm font-medium">Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
