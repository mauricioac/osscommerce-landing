import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BarChart3, Workflow, Users, CheckCircle, Zap, Shield, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E0D43] via-[#2a1458] to-[#1E0D43]">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#1E0D43]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 relative">
                <Image src="/oss-logo.png" alt="OS² Logo" width={40} height={40} className="object-contain" />
              </div>
              <span className="text-xl font-bold text-white">Commerce</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-white/70 hover:text-[#F6B86C] transition-colors">
                Our apps
              </Link>
              <Link href="#" className="text-white/70 hover:text-[#F6B86C] transition-colors">
                Blog
              </Link>
              <Link href="#" className="text-white/70 hover:text-[#F6B86C] transition-colors">
                Support
              </Link>
              <Button size="lg"
              className="bg-white text-[#1E0D43] px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-[#F6B86C]/25">
                Explore our apps
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight relative">
              Stop Juggling Apps.{" "}
              <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                Start Unifying
              </span>{" "}
              Your Store.

              <img src="/shopify_white.png" alt="Shopify" className="absolute top-0 -right-64 w-48 h-auto -rotate-12" />
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Tired of managing a dozen disconnected apps? OS² Commerce offers a suite of powerful integrated
              applications that work together to streamline your operations, share data seamlessly, and grow your
              business.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] hover:from-[#E6A05C] hover:to-[#F6B86C] text-[#1E0D43] px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-[#F6B86C]/25"
            >
              Explore the Suite
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900/50 to-[#1E0D43]/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-[#F6B86C] bg-clip-text text-transparent">
                Ecosystem Advantage
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Each app in the OSS Commerce suite is powerful on its own. Together, they create a seamless, unified
              system for managing and growing your e-commerce business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 hover:from-white/15 hover:to-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#F6B86C] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#F6B86C]/25">
                  <BarChart3 className="h-8 w-8 text-[#1E0D43]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Extended Behavior</h3>
                <p className="text-white/80 leading-relaxed">
                  Get behaviors from one app into the other without any extra work.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 hover:from-white/15 hover:to-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/25">
                  <Workflow className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Automated Workflows</h3>
                <p className="text-white/80 leading-relaxed">
                  Actions in one app trigger actions in another
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 hover:from-white/15 hover:to-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/25">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Single Support</h3>
                <p className="text-white/80 leading-relaxed">
                  No app blaming the other, just a single cohesive support experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Suite of Apps Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900/30 to-[#1E0D43]/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Suite of{" "}
              <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                Shopify Apps
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Reviews App */}
            <Card className="bg-white/10 border-white/20 hover:from-white/15 hover:to-white/10 transition-all duration-300 group backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <img src="/oss-tracking.png" alt="OS² Reviews" className="inline-block h-10 w-auto" />
                </div>
                <p className="text-white/80 mb-6 text-center leading-relaxed">
                  Avoid the "Where is my order?" panic. Update your customers about their package on every step of the way and turn every update into a sale opportunity.
                </p>
                <div className="flex items-center gap-3">
                  <Link href="/oss-tracking" className="w-full">
                    <Button className="w-full bg-transparent text-white border border-white rounded-md font-semibold">
                      Learn more
                    </Button>
                  </Link>
                  <Link href="https://apps.shopify.com/oss-tracking" target="_blank" className="w-full">
                    <Button className="w-full bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] hover:from-[#E6A05C] hover:to-[#F6B86C] text-[#1E0D43] font-semibold">
                      Install now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Analytics App */}
            <Card className="bg-white/10 border-white/20 hover:from-white/15 hover:to-white/10 transition-all duration-300 group backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <img src="/oss-marketing.png" alt="OS² Marketing" className="inline-block h-10 w-auto" />
                </div>
                <p className="text-white/80 mb-6 text-center leading-relaxed">
                  Launch email campaigns easily, track conversions and perform A/B tests.
                </p>
                <div className="flex items-center gap-3">
                  <Link href="/oss-marketing" className="w-full">
                    <Button className="w-full bg-transparent text-white border border-white rounded-md font-semibold">
                      Learn more
                    </Button>
                  </Link>
                  <Link href="https://apps.shopify.com/oss-marketing" target="_blank" className="w-full">
                    <Button className="w-full bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] hover:from-[#E6A05C] hover:to-[#F6B86C] text-[#1E0D43] font-semibold">
                      Be an early adopter
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Marketing App */}
            <Card className="bg-white/10 border-white/20 hover:from-white/15 hover:to-white/10 transition-all duration-300 group backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <img src="/oss-bundles.png" alt="OS² Bundle" className="inline-block h-10 w-auto" />
                </div>
                <p className="text-white/80 mb-6 text-center leading-relaxed">
                  Yep, another bundle app.
                </p>
                <div className="flex items-center gap-3">
                  <Link href="/oss-bundles" className="w-full">
                    <Button className="w-full bg-transparent text-white border border-white rounded-md font-semibold">
                      Learn more
                    </Button>
                  </Link>
                  <Link href="https://apps.shopify.com/oss-bundles" target="_blank" className="w-full">
                    <Button className="w-full bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] hover:from-[#E6A05C] hover:to-[#F6B86C] text-[#1E0D43] font-semibold">
                      Join the waitlist
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose OS² Commerce?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-white/5 to-white/2 rounded-lg backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-[#F6B86C] to-[#FF8C42] rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#F6B86C]/25">
                <Zap className="h-6 w-6 text-[#1E0D43]" />
              </div>
              <h3 className="text-white font-semibold mb-2">Lightning Fast</h3>
              <p className="text-white/60 text-sm">Optimized for speed and performance</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-white/5 to-white/2 rounded-lg backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/25">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-white/60 text-sm">Enterprise-grade security standards</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-white/5 to-white/2 rounded-lg backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/25">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Global Scale</h3>
              <p className="text-white/60 text-sm">Built to handle worldwide operations</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-white/5 to-white/2 rounded-lg backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Easy Setup</h3>
              <p className="text-white/60 text-sm">Get started in minutes, not hours</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-white/5 to-white/2 rounded-lg backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/25">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Internationalization</h3>
              <p className="text-white/60 text-sm">Our apps. Your language.</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-white/5 to-white/2 rounded-lg backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/25">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Support in 3 languages</h3>
              <p className="text-white/60 text-sm">We can help you in Portuguese, English and Spanish</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle & Save Section */}
      <section className="py-20 bg-gradient-to-r from-[#F6B86C]/10 to-emerald-500/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Bundle & Save <span className="text-emerald-400">Up to 30%</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              The more OS² Commerce apps you install, the more you save. Our ecosystem discount automatically applies to
              your subscription.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {/* 2 Apps */}
              <Card className="bg-white/10 border-white/20 border-white/20 text-center hover:from-white/15 hover:to-white/10 transition-all duration-300 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-transparent border border-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Starter Bundle</h3>
                  <div className="text-3xl font-bold text-emerald-400 mb-4">Save 10%</div>
                  <p className="text-white/80 text-sm">Perfect for growing stores ready to unify their first apps</p>
                </CardContent>
              </Card>

              {/* 3 Apps */}
              <Card className="bg-white/10 border-white/20 border-[#F6B86C] text-center hover:from-white/20 hover:to-white/15 transition-all duration-300 relative backdrop-blur-sm shadow-lg shadow-[#F6B86C]/25">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] text-[#1E0D43] px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-transparent border border-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Growth Bundle</h3>
                  <div className="text-3xl font-bold text-emerald-400 mb-4">Save 20%</div>
                  <p className="text-white/80 text-sm">Ideal for established stores scaling their operations</p>
                </CardContent>
              </Card>

              {/* 4+ Apps */}
              <Card className="bg-white/10 border-white/20 border-white/20 text-center hover:from-white/15 hover:to-white/10 transition-all duration-300 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-transparent border border-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">4+</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Enterprise Bundle</h3>
                  <div className="text-3xl font-bold text-emerald-400 mb-4">Save 30%</div>
                  <p className="text-white/80 text-sm">Maximum savings for stores using our complete ecosystem</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-lg p-6 max-w-2xl mx-auto backdrop-blur-sm border border-white/10">
                <h4 className="text-white font-semibold mb-2">🎯 Automatic Savings</h4>
                <p className="text-white/80 text-sm">
                  Discounts are automatically applied to your Shopify subscription. No codes needed, no hassle. Start
                  with one app and save more as you grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Unify Your E-commerce Stack?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Explore the full suite of OS² Commerce applications and see how an integrated ecosystem can transform your
            business.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] hover:from-[#E6A05C] hover:to-[#F6B86C] text-[#1E0D43] px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-[#F6B86C]/25"
          >
            Browse All Apps
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E0D43]/80 border-t border-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 relative">
                  <Image src="/oss-logo.png" alt="OS² Logo" width={32} height={32} className="object-contain" />
                </div>
                <span className="text-xl font-bold text-white">OS² Commerce</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Empowering e-commerce businesses with intelligent, accessible, and scalable solutions that streamline
                operations and drive sustainable growth.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white/60 hover:text-[#F6B86C] text-sm transition-colors">
                    OS² Tracking
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/60 hover:text-[#F6B86C] text-sm transition-colors">
                    Coming Soon
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white/60 hover:text-[#F6B86C] text-sm transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/60 hover:text-[#F6B86C] text-sm transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/60 hover:text-[#F6B86C] text-sm transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/60 hover:text-[#F6B86C] text-sm transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <p className="text-white/60 text-sm mb-4">Stay updated with our latest features and updates.</p>
              <Button
                variant="outline"
                size="sm"
                className="border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent"
              >
                Subscribe
              </Button>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-white/60 text-sm">© 2025 OS² Commerce. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
