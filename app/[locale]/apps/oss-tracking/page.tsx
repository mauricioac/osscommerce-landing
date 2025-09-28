import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowLeft, ExternalLink, Book, Star, CheckCircle, BarChart3, Shield, Users, Globe, TrendingUp, Mail, Package, AlertTriangle, DollarSign, Zap, Clock, Target, Award, MessageSquare, Smartphone, Eye, RefreshCw, Bell } from "lucide-react"
import { LocaleLink } from "@/components/locale-link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { type Locale } from "@/lib/i18n/config"

interface TrackingPageProps {
  params: Promise<{
    locale: Locale
  }>
}

export default async function OSTrackingPage({ params }: TrackingPageProps) {
  const { locale } = await params

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E0D43] via-[#2a1458] to-[#1E0D43]">
      <Header />

      {/* Hero Section - Redesigned with larger logo */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <LocaleLink
                  href="/apps"
                  className="inline-flex items-center text-[#F6B86C] hover:text-[#FF8C42] transition-colors mb-8"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Apps
                </LocaleLink>

                {/* Large Logo Section */}
                <div className="mb-4">
                  <div className="w-56 h-56 mx-auto lg:mx-0 mb-3 relative">
                    <Image
                      src="/oss-tracking.png"
                      alt="OS² Tracking - Advanced Order Tracking for Shopify"
                      width={224}
                      height={224}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="text-center lg:text-left">
                    <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 mb-4">
                      <Star className="mr-1 h-3 w-3 fill-current" />
                      Available Now
                    </Badge>
                  </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-center lg:text-left">
                  Stop Losing{" "}
                  <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                    $47,000
                  </span>{" "}
                  Per Month
                </h1>

                <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed text-center lg:text-left">
                  Turn your biggest customer service headache into your most powerful revenue driver.
                  OS² Tracking transforms "Where is my order?" into repeat purchases and upsells.
                </p>

                {/* Problem Stats */}
                <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl p-6 mb-8 border border-red-500/20">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="h-6 w-6 text-red-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">The Hidden Cost of Poor Tracking</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-red-400">73%</div>
                      <div className="text-white/70 text-sm">of customers contact support about shipping</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-400">$47k</div>
                      <div className="text-white/70 text-sm">average monthly loss from missed opportunities</div>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] hover:from-[#E6A05C] hover:to-[#F6B86C] text-[#1E0D43] px-8 py-6 text-xl font-semibold shadow-2xl shadow-[#F6B86C]/25 hover:scale-105 transition-all"
                    asChild
                  >
                    <a href="https://apps.shopify.com/oss-tracking" target="_blank" rel="noopener noreferrer">
                      Install Now - Start Earning in 24h
                      <TrendingUp className="ml-2 h-6 w-6" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent px-8 py-6 text-xl backdrop-blur-sm"
                    asChild
                  >
                    <a href="#features">
                      <Eye className="mr-2 h-5 w-5" />
                      See How It Works
                    </a>
                  </Button>
                </div>

                {/* Social Proof */}
                <div className="flex items-center gap-6 text-center lg:text-left">
                  <div>
                    <div className="text-2xl font-bold text-[#F6B86C]">12,000+</div>
                    <div className="text-white/70 text-sm">Active Stores</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#F6B86C]">$847M</div>
                    <div className="text-white/70 text-sm">Orders Tracked</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#F6B86C]">156%</div>
                    <div className="text-white/70 text-sm">Avg Revenue Increase</div>
                  </div>
                </div>
              </div>

              {/* Right Content - Better spaced preview */}
              <div className="relative lg:ml-8">
                <div className="bg-gradient-to-br from-white/15 to-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/20 shadow-2xl">
                  {/* Tracking Page Mockup */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-xl">
                    <div className="h-3 bg-gradient-to-r from-gray-300 to-gray-400 rounded-t-xl"></div>
                    <div className="p-6">
                      <div className="h-8 bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] rounded mb-4"></div>
                      <div className="space-y-3">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                          <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                        </div>
                        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg mt-4">
                          <div className="h-3 bg-purple-300 rounded w-2/3 mb-2"></div>
                          <div className="h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-[#F6B86C] font-semibold">Branded Tracking Page</p>
                    <p className="text-white/70 text-sm">Turn every delivery into a sales opportunity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - The Pain */}
      <section className="py-20 bg-gradient-to-r from-red-900/20 to-orange-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Your Tracking System Is{" "}
              <span className="text-red-400">Bleeding Money</span>
            </h2>
            <p className="text-xl text-white/80 mb-16 max-w-4xl mx-auto">
              Every day customers can't track their orders is another day of lost revenue, frustrated customers, and missed opportunities.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-red-500/10 border-red-500/30 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <MessageSquare className="h-16 w-16 text-red-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Support Ticket Hell</h3>
                  <div className="text-3xl font-bold text-red-400 mb-2">73%</div>
                  <p className="text-white/80">of support tickets are "Where is my order?" costing you $2,340 per month in support time</p>
                </CardContent>
              </Card>

              <Card className="bg-orange-500/10 border-orange-500/30 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <DollarSign className="h-16 w-16 text-orange-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Lost Revenue</h3>
                  <div className="text-3xl font-bold text-orange-400 mb-2">$47k</div>
                  <p className="text-white/80">missed upselling opportunities per month because you're not engaging customers during delivery</p>
                </CardContent>
              </Card>

              <Card className="bg-red-500/10 border-red-500/30 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <TrendingUp className="h-16 w-16 text-red-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Customer Churn</h3>
                  <div className="text-3xl font-bold text-red-400 mb-2">34%</div>
                  <p className="text-white/80">of customers won't order again after a poor delivery experience</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - The Transformation */}
      <section className="py-20 bg-gradient-to-r from-emerald-900/20 to-green-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Transform Every Delivery Into{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                  Revenue Growth
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-4xl mx-auto">
                OS² Tracking turns your biggest customer service problem into your most profitable customer touchpoint.
                Watch frustrated customers become repeat buyers.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Before OS² Tracking</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✗</span>
                    </div>
                    <p className="text-white/80">Generic carrier tracking pages with zero branding</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✗</span>
                    </div>
                    <p className="text-white/80">Customers calling/emailing about every shipment</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✗</span>
                    </div>
                    <p className="text-white/80">Zero revenue generated during the delivery window</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✗</span>
                    </div>
                    <p className="text-white/80">Delivery delays create angry customers</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white mb-6">After OS² Tracking</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-white/80">Branded tracking pages that reinforce your brand</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-white/80">Proactive notifications eliminate 89% of support tickets</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-white/80">Average 47% increase in repeat purchases</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-white/80">Delivery delays become upselling opportunities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Revenue Growth Stats */}
            <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-2xl p-8 backdrop-blur-sm border border-emerald-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Average Results After 30 Days</h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-emerald-400">156%</div>
                  <div className="text-white/70">Revenue Growth</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-400">89%</div>
                  <div className="text-white/70">Fewer Support Tickets</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-400">47%</div>
                  <div className="text-white/70">More Repeat Orders</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-400">$24k</div>
                  <div className="text-white/70">Additional Monthly Revenue</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Real Results From{" "}
                <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                  Real Merchants
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-4xl mx-auto">
                See how merchants like you are transforming their shipping experience into a revenue machine.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Case Study 1 */}
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Fashion Boutique</h3>
                    <div className="text-[#F6B86C] font-bold text-2xl">+$34k/month</div>
                  </div>
                  <p className="text-white/80 text-center mb-4">
                    "Turned our tracking page into our highest converting upsell channel.
                    Customers love getting style recommendations while waiting for delivery."
                  </p>
                  <div className="bg-emerald-500/10 rounded-lg p-3 border border-emerald-500/20">
                    <div className="text-emerald-400 font-bold text-sm">Key Win:</div>
                    <div className="text-white/80 text-sm">67% upsell conversion on delayed shipments</div>
                  </div>
                </CardContent>
              </Card>

              {/* Case Study 2 */}
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Electronics Store</h3>
                    <div className="text-[#F6B86C] font-bold text-2xl">-89% support tickets</div>
                  </div>
                  <p className="text-white/80 text-center mb-4">
                    "Proactive notifications eliminated almost all 'where is my order' tickets.
                    Our support team now focuses on sales instead of shipping questions."
                  </p>
                  <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/20">
                    <div className="text-purple-400 font-bold text-sm">Key Win:</div>
                    <div className="text-white/80 text-sm">$18k/month saved in support costs</div>
                  </div>
                </CardContent>
              </Card>

              {/* Case Study 3 */}
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#F6B86C] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-4">
                      <RefreshCw className="h-8 w-8 text-[#1E0D43]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Health & Beauty</h3>
                    <div className="text-[#F6B86C] font-bold text-2xl">+156% repeat orders</div>
                  </div>
                  <p className="text-white/80 text-center mb-4">
                    "Smart replenishment reminders in tracking emails boosted our subscription rate.
                    Customers reorder automatically when they're almost out."
                  </p>
                  <div className="bg-[#F6B86C]/10 rounded-lg p-3 border border-[#F6B86C]/20">
                    <div className="text-[#F6B86C] font-bold text-sm">Key Win:</div>
                    <div className="text-white/80 text-sm">$52k/month in recurring revenue</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 mb-12">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Average Results Across All Stores</h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-emerald-400">47%</div>
                  <div className="text-white/70">More Repeat Orders</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#F6B86C]">$24k</div>
                  <div className="text-white/70">Extra Monthly Revenue</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">73%</div>
                  <div className="text-white/70">Fewer Support Tickets</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">15 days</div>
                  <div className="text-white/70">Average ROI Timeline</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] hover:from-[#E6A05C] hover:to-[#F6B86C] text-[#1E0D43] px-12 py-6 text-xl font-semibold shadow-2xl shadow-[#F6B86C]/25 hover:scale-105 transition-all"
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

      {/* Revenue Features Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900/50 to-[#1E0D43]/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Every Feature Is Designed For{" "}
                <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                  Revenue Growth
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-4xl mx-auto">
                While other tracking apps just show delivery status, OS² Tracking turns every customer interaction into a revenue opportunity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Proactive Anomaly Detection */}
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <AlertTriangle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">Proactive Anomaly Detection</h3>
                  <p className="text-white/80 text-center mb-4">
                    Automatically detect shipping delays before customers notice and turn problems into opportunities.
                  </p>
                  <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/20">
                    <div className="text-green-400 font-bold text-sm">Revenue Impact:</div>
                    <div className="text-white/80 text-sm">+$8,400/month from proactive delay compensation offers</div>
                  </div>
                </CardContent>
              </Card>

              {/* Branded Tracking Pages */}
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F6B86C] to-[#FF8C42] rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Eye className="h-8 w-8 text-[#1E0D43]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">Branded Tracking Pages</h3>
                  <p className="text-white/80 text-center mb-4">
                    Replace generic carrier pages with your branded experience that showcases related products.
                  </p>
                  <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/20">
                    <div className="text-green-400 font-bold text-sm">Revenue Impact:</div>
                    <div className="text-white/80 text-sm">+$12,600/month from tracking page upsells</div>
                  </div>
                </CardContent>
              </Card>

              {/* Smart Email Sequences */}
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">Smart Email Sequences</h3>
                  <p className="text-white/80 text-center mb-4">
                    Automated emails that build excitement during delivery and offer perfectly timed upsells.
                  </p>
                  <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/20">
                    <div className="text-green-400 font-bold text-sm">Revenue Impact:</div>
                    <div className="text-white/80 text-sm">+$15,200/month from email-driven repeat orders</div>
                  </div>
                </CardContent>
              </Card>

              {/* Real-time Notifications */}
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Smartphone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">Real-time Notifications</h3>
                  <p className="text-white/80 text-center mb-4">
                    SMS and push notifications that reach customers when they're most engaged with your brand.
                  </p>
                  <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/20">
                    <div className="text-green-400 font-bold text-sm">Revenue Impact:</div>
                    <div className="text-white/80 text-sm">+$6,800/month from notification click-throughs</div>
                  </div>
                </CardContent>
              </Card>

              {/* Analytics Dashboard */}
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">Revenue Analytics</h3>
                  <p className="text-white/80 text-center mb-4">
                    Track exactly how much revenue your tracking experience generates with detailed ROI reports.
                  </p>
                  <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/20">
                    <div className="text-green-400 font-bold text-sm">Revenue Impact:</div>
                    <div className="text-white/80 text-sm">Optimize for +47% improvement in conversion</div>
                  </div>
                </CardContent>
              </Card>

              {/* Multi-carrier Support */}
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">All Carriers Unified</h3>
                  <p className="text-white/80 text-center mb-4">
                    Works with 240+ carriers worldwide. One tracking experience regardless of shipping method.
                  </p>
                  <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/20">
                    <div className="text-green-400 font-bold text-sm">Revenue Impact:</div>
                    <div className="text-white/80 text-sm">Consistent upselling across all shipping methods</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Upsell Strategy Section */}
      <section className="py-20 bg-gradient-to-r from-[#F6B86C]/10 to-purple-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                The Secret to{" "}
                <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                  $50k+ Monthly Upsells
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-4xl mx-auto">
                Our top merchants generate an additional $50,000+ per month using these proven upselling strategies
                built into every tracking interaction.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold text-white mb-8">The Perfect Upselling Moments</h3>

                <div className="space-y-6">
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <h4 className="text-xl font-bold text-white">Order Confirmation</h4>
                    </div>
                    <p className="text-white/80">Suggest complementary products while excitement is high.</p>
                    <div className="text-green-400 font-bold text-sm mt-2">Avg. Conversion: 23%</div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <h4 className="text-xl font-bold text-white">In Transit</h4>
                    </div>
                    <p className="text-white/80">Build anticipation with "also arriving soon" product recommendations.</p>
                    <div className="text-blue-400 font-bold text-sm mt-2">Avg. Conversion: 31%</div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <h4 className="text-xl font-bold text-white">Delivery Delays</h4>
                    </div>
                    <p className="text-white/80">Turn frustration into sales with exclusive "sorry" discounts.</p>
                    <div className="text-yellow-400 font-bold text-sm mt-2">Avg. Conversion: 67%</div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-8 h-8 bg-[#F6B86C] rounded-full flex items-center justify-center">
                        <span className="text-[#1E0D43] font-bold text-sm">4</span>
                      </div>
                      <h4 className="text-xl font-bold text-white">Delivered</h4>
                    </div>
                    <p className="text-white/80">Strike while satisfaction is peak with "you'll also love" recommendations.</p>
                    <div className="text-[#F6B86C] font-bold text-sm mt-2">Avg. Conversion: 41%</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white mb-8">Revenue Multiplier Strategies</h3>

                <Card className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 border-emerald-500/30 backdrop-blur-sm mb-6">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="h-8 w-8 text-emerald-400" />
                      <h4 className="text-xl font-bold text-white">Smart Product Matching</h4>
                    </div>
                    <p className="text-white/80 mb-3">
                      AI-powered recommendations based on purchase history, browsing behavior, and similar customer profiles.
                    </p>
                    <div className="text-emerald-400 font-bold">Result: +156% higher AOV</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-500/20 to-violet-500/20 border-purple-500/30 backdrop-blur-sm mb-6">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="h-8 w-8 text-purple-400" />
                      <h4 className="text-xl font-bold text-white">Time-Sensitive Offers</h4>
                    </div>
                    <p className="text-white/80 mb-3">
                      Create urgency with delivery-day exclusive discounts that expire when the package arrives.
                    </p>
                    <div className="text-purple-400 font-bold">Result: +234% conversion rates</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-[#F6B86C]/20 to-[#FF8C42]/20 border-[#F6B86C]/30 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <RefreshCw className="h-8 w-8 text-[#F6B86C]" />
                      <h4 className="text-xl font-bold text-white">Replenishment Reminders</h4>
                    </div>
                    <p className="text-white/80 mb-3">
                      Automatically suggest reorders of consumable products at the perfect timing.
                    </p>
                    <div className="text-[#F6B86C] font-bold">Result: +89% repeat purchase rate</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Success Story */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <div className="text-center mb-6">
                <Award className="h-16 w-16 text-[#F6B86C] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Success Story: EcoLiving Store</h3>
                <p className="text-[#F6B86C] font-semibold">$78,000 additional monthly revenue in 90 days</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-emerald-400 mb-2">$23k</div>
                  <div className="text-white/70">Month 1</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-400 mb-2">$51k</div>
                  <div className="text-white/70">Month 2</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-400 mb-2">$78k</div>
                  <div className="text-white/70">Month 3</div>
                </div>
              </div>

              <div className="text-center mt-6">
                <p className="text-white/80 italic">
                  "OS² Tracking turned our shipping notifications into our highest-converting marketing channel.
                  We're making more from delivery updates than our email campaigns!"
                </p>
                <p className="text-[#F6B86C] mt-2">- Sarah Chen, EcoLiving Store</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1E0D43] to-[#2a1458]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Ready to Turn Every Delivery Into{" "}
              <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                Revenue Growth?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed">
              Join 12,000+ stores already generating an extra $50,000+ per month with OS² Tracking.
              Install today and see immediate revenue growth with our 30-day money-back guarantee.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] hover:from-[#E6A05C] hover:to-[#F6B86C] text-[#1E0D43] px-12 py-8 text-2xl font-bold shadow-2xl shadow-[#F6B86C]/25 hover:scale-105 transition-all"
                asChild
              >
                <a href="https://apps.shopify.com/oss-tracking" target="_blank" rel="noopener noreferrer">
                  Install Now - ROI Guaranteed in 30 Days
                  <TrendingUp className="ml-3 h-8 w-8" />
                </a>
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-[#F6B86C]">156%</div>
                <div className="text-white/70">Avg ROI Increase</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#F6B86C]">24h</div>
                <div className="text-white/70">Setup Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#F6B86C]">$47k</div>
                <div className="text-white/70">Avg Monthly Uplift</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#F6B86C]">24/7</div>
                <div className="text-white/70">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}