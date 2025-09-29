import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, ExternalLink, Book, Star, CheckCircle, BarChart3, Shield, Users, Globe, TrendingUp, Mail, Package, AlertTriangle, DollarSign, Zap, Clock, Target, Award, MessageSquare, Smartphone, Eye, RefreshCw, Bell } from "lucide-react";
import { LocaleLink } from "@/components/locale-link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { type Locale } from "@/lib/i18n/config";

interface TrackingPageProps {
  params: {
    locale: Locale;
  };
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
                  className="inline-flex text-brand-primary transition-colors mb-8 font-medium"
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
                    <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-4 shadow-sm">
                      <Star className="mr-1 h-3 w-3 fill-current" />
                      Available Now
                    </Badge>
                  </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight text-center lg:text-left">
                  Stop Losing{" "}
                  <span className="bg-gradient-to-r from-brand-primary to-brand-primary-dark bg-clip-text text-transparent">
                    $47,000
                  </span>{" "}
                  Per Month
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
                      <div className="text-2xl font-bold text-red-600">$47k</div>
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
                      Install Now - Start Earning in 24h
                      <TrendingUp className="ml-2 h-6 w-6" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white bg-white px-8 py-6 text-xl shadow-md"
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
                    <div className="text-2xl font-bold text-brand-primary">12,000+</div>
                    <div className="text-gray-600 text-sm">Active Stores</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-primary">$847M</div>
                    <div className="text-gray-600 text-sm">Orders Tracked</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-primary">156%</div>
                    <div className="text-gray-600 text-sm">Avg Revenue Increase</div>
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
      <section className="py-20 bg-slate-800">
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
                  <div className="text-3xl font-bold text-orange-600 mb-2">$47k</div>
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

            {/* Revenue Growth Stats */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Average Results After 30 Days</h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-brand-primary">156%</div>
                  <div className="text-gray-600">Revenue Growth</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-primary">89%</div>
                  <div className="text-gray-600">Fewer Support Tickets</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-primary">47%</div>
                  <div className="text-gray-600">More Repeat Orders</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-primary">$24k</div>
                  <div className="text-gray-600">Additional Monthly Revenue</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
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

      <Footer />
    </div>
  );
}