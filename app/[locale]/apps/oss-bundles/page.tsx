import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, Book, Star, CheckCircle, BarChart3, Shield, Users, Globe, Zap, Clock, Package, Gift } from "lucide-react";
import { LocaleLink } from "@/components/locale-link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WaitlistDialog } from "@/components/waitlist-dialog";
import { type Locale } from "@/lib/i18n/config";

interface BundlesPageProps {
  params: {
    locale: Locale;
  };
}

export default async function OSBundlesPage({ params }: BundlesPageProps) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />

      {/* Hero Section - Distinguished with embellishments */}
      <section className="py-20 lg:py-32 relative overflow-hidden bg-gray-50">
        {/* Background embellishments */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-500/20 to-green-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-20 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>

          {/* Geometric patterns */}
          <div className="absolute top-10 left-1/4 w-4 h-4 bg-emerald-500/30 rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-40 right-1/3 w-6 h-6 bg-emerald-500/20 rounded-full animate-bounce delay-700"></div>
          <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-emerald-500/20 rounded-full animate-bounce delay-1000"></div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%2310B981&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;1&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="relative z-10">
                <LocaleLink
                  href="/apps"
                  className="inline-flex text-emerald-600 hover:text-emerald-700 transition-colors mb-8 font-medium"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Apps
                </LocaleLink>

                {/* Large Logo Section */}
                <div className="mb-4">
                  <div className="w-80 h-48 mx-auto lg:mx-0 mb-3 relative">
                    <Image
                      src="/oss-bundles.png"
                      alt="OS² Bundles - Product Bundling for Shopify"
                      width={320}
                      height={192}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="text-center lg:text-left">
                    <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-4 shadow-sm">
                      <Star className="mr-1 h-3 w-3 fill-current" />
                      Beta Version
                    </Badge>
                  </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight text-center lg:text-left">
                  Boost Revenue with{" "}
                  <span className="bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent">
                    Product Bundles
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed text-center lg:text-left">
                  Create compelling product bundles that increase average order value and delight your customers.
                  Get started in minutes with OS² Bundles.
                </p>

                {/* Key Benefits */}
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 mb-8 border border-gray-200 shadow-sm">
                  <div className="flex items-center mb-4">
                    <Gift className="h-6 w-6 text-emerald-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Why Bundles?</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-emerald-600">+35%</div>
                      <div className="text-gray-600 text-sm">Average Order Value increase</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-600">Minutes</div>
                      <div className="text-gray-600 text-sm">Get started - no coding required</div>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white px-8 py-6 text-xl font-semibold shadow-xl hover:scale-105 transition-all"
                    asChild
                  >
                    <a href="https://apps.shopify.com/oss-bundles" target="_blank" rel="noopener noreferrer">
                      Join Beta Program
                      <ArrowRight className="ml-2 h-6 w-6" />
                    </a>
                  </Button>

                  <WaitlistDialog
                    appName="OS² Bundles"
                    appId="oss-bundles"
                    buttonVariant="outline"
                  />

                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 bg-white px-8 py-6 text-xl shadow-md"
                    asChild
                  >
                    <LocaleLink href="/docs/oss-bundles">
                      <Book className="mr-2 h-5 w-5" />
                      Documentation
                    </LocaleLink>
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-white/60 rounded-lg shadow-sm">
                    <CheckCircle className="h-8 w-8 text-emerald-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-gray-900">Beta</div>
                    <div className="text-gray-600 text-xs">Early Access</div>
                  </div>
                  <div className="text-center p-4 bg-white/60 rounded-lg shadow-sm">
                    <Clock className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-gray-900">Minutes</div>
                    <div className="text-gray-600 text-xs">Quick Setup</div>
                  </div>
                  <div className="text-center p-4 bg-white/60 rounded-lg shadow-sm">
                    <Users className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-gray-900">Limited</div>
                    <div className="text-gray-600 text-xs">Spots Available</div>
                  </div>
                  <div className="text-center p-4 bg-white/60 rounded-lg shadow-sm">
                    <Globe className="h-8 w-8 text-emerald-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-gray-900">24/7</div>
                    <div className="text-gray-600 text-xs">Support</div>
                  </div>
                </div>
              </div>

              {/* Right Content - App Preview */}
              <div className="relative z-10">
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                  <div className="aspect-video bg-gradient-to-br from-emerald-500/20 to-green-600/20 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <Package className="h-24 w-24 text-emerald-600 mx-auto mb-4" />
                      <p className="text-gray-600 font-medium text-lg">Bundle Builder Preview</p>
                      <p className="text-gray-500 text-sm mt-2">Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Key{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                  Features
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Everything you need to create and manage profitable product bundles.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Bundle Builder</h3>
                      <p className="text-gray-700 text-sm">
                        Intuitive drag-and-drop builder to create custom product bundles in minutes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Analytics</h3>
                      <p className="text-gray-700 text-sm">
                        Track bundle performance with detailed analytics and insights.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile Optimized</h3>
                      <p className="text-gray-700 text-sm">
                        Beautiful bundle displays that look great on all devices and screen sizes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

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
                OS² Bundles is designed to work seamlessly with other OS² Commerce apps, unlocking features across apps that work together in ways not possible otherwise.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Cross-App Features</h3>
                  <p className="text-gray-700">Unlock powerful integrations when using multiple OS² apps together.</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F6B86C] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-[#1E0D43]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Shared Analytics</h3>
                  <p className="text-gray-700">Cross-app insights and unified reporting dashboard.</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Unified Support</h3>
                  <p className="text-gray-700">One support team for all your OS² Commerce apps.</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Volume Savings</h3>
                  <p className="text-gray-700">Save up to 30% with multiple app installations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Started with OS² Bundles?
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Join our beta program and start creating profitable product bundles today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white px-10 py-6 text-xl font-semibold"
                asChild
              >
                <a href="https://apps.shopify.com/oss-bundles" target="_blank" rel="noopener noreferrer">
                  Join Beta Program
                  <ArrowRight className="ml-2 h-6 w-6" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-500/50 text-emerald-600 hover:bg-emerald-50 bg-transparent px-10 py-6 text-xl"
                asChild
              >
                <LocaleLink href="/apps">View All Apps</LocaleLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
