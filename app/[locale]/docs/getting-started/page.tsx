import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E0D43] via-[#2a1458] to-[#1E0D43]">
      <Header />
      
      <main>
        {/* Header Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <Button
                variant="outline"
                size="sm"
                className="border-white/30 text-white hover:bg-white/10 mb-8"
                asChild
              >
                <Link href="/docs">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Documentation Hub
                </Link>
              </Button>

              <Badge className="bg-gradient-to-r from-[#F6B86C]/20 to-[#FF8C42]/20 text-[#F6B86C] border-[#F6B86C]/30 hover:bg-[#F6B86C]/10 mb-6">
                🚀 Getting Started
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                  OS² Commerce
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed">
                Get started with the OS² Commerce ecosystem and learn how our integrated apps 
                can transform your e-commerce operations.
              </p>
            </div>
          </div>
        </section>

        {/* Getting Started Steps */}
        <section className="py-20 bg-gradient-to-r from-slate-900/50 to-[#1E0D43]/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                Quick{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-[#F6B86C] bg-clip-text text-transparent">
                  Start Guide
                </span>
              </h2>

              <div className="space-y-8">
                {/* Step 1 */}
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardHeader className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#F6B86C] to-[#FF8C42] rounded-full flex items-center justify-center shadow-lg shadow-[#F6B86C]/25">
                        <span className="text-xl font-bold text-[#1E0D43]">1</span>
                      </div>
                      <CardTitle className="text-2xl text-white">Choose Your First App</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <p className="text-white/80 mb-6 leading-relaxed">
                      Start with the app that addresses your most pressing need. Each OS² Commerce app is powerful on its own 
                      and becomes even more valuable when combined with others.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                        <h4 className="font-semibold text-white mb-2">📦 OS² Tracking</h4>
                        <p className="text-white/70 text-sm">Perfect if you want to reduce WISMO tickets and improve post-purchase experience.</p>
                      </div>
                      <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                        <h4 className="font-semibold text-white mb-2">📧 OS² Marketing</h4>
                        <p className="text-white/70 text-sm">Ideal for merchants looking to improve email marketing and automation.</p>
                      </div>
                      <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                        <h4 className="font-semibold text-white mb-2">🎁 OS² Bundles</h4>
                        <p className="text-white/70 text-sm">Great for increasing average order value with compelling product bundles.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Step 2 */}
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardHeader className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/25">
                        <span className="text-xl font-bold text-white">2</span>
                      </div>
                      <CardTitle className="text-2xl text-white">Install from Shopify App Store</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <p className="text-white/80 mb-6 leading-relaxed">
                      All OS² Commerce apps are available in the official Shopify App Store. Installation is quick and easy.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-emerald-400" />
                        <span className="text-white/90">Search for "OS² Commerce" or the specific app name</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-emerald-400" />
                        <span className="text-white/90">Click "Add app" and follow the installation prompts</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-emerald-400" />
                        <span className="text-white/90">Grant necessary permissions for the app to work with your store</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-emerald-400" />
                        <span className="text-white/90">Complete the setup wizard to configure your preferences</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Step 3 */}
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardHeader className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/25">
                        <span className="text-xl font-bold text-white">3</span>
                      </div>
                      <CardTitle className="text-2xl text-white">Configure & Customize</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <p className="text-white/80 mb-6 leading-relaxed">
                      Each app comes with intelligent defaults, but you can customize settings to match your brand and business needs.
                    </p>
                    <Button
                      variant="outline"
                      className="border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent"
                      asChild
                    >
                      <Link href="/docs">
                        View App-Specific Guides
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Step 4 */}
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardHeader className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/25">
                        <span className="text-xl font-bold text-white">4</span>
                      </div>
                      <CardTitle className="text-2xl text-white">Expand Your Ecosystem</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <p className="text-white/80 mb-6 leading-relaxed">
                      As you see the value of your first app, consider adding more to unlock the full ecosystem benefits. 
                      You'll also save money with our automatic volume discounts!
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                        <div className="text-2xl font-bold text-emerald-400 mb-1">10%</div>
                        <div className="text-sm text-white/80">Save with 2 apps</div>
                      </div>
                      <div className="text-center p-4 bg-[#F6B86C]/10 rounded-lg border border-[#F6B86C]/20">
                        <div className="text-2xl font-bold text-[#F6B86C] mb-1">20%</div>
                        <div className="text-sm text-white/80">Save with 3 apps</div>
                      </div>
                      <div className="text-center p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                        <div className="text-2xl font-bold text-purple-400 mb-1">30%</div>
                        <div className="text-sm text-white/80">Save with 4+ apps</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to{" "}
                <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                  Get Started?
                </span>
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Choose your path and begin transforming your e-commerce operations today.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:from-white/15 hover:to-white/10 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-bold text-white mb-4">Browse Our Apps</h3>
                    <p className="text-white/80 mb-6">
                      Explore all available OS² Commerce applications and find the perfect fit for your business.
                    </p>
                    <Button
                      className="w-full bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] hover:from-[#E6A05C] hover:to-[#F6B86C] text-[#1E0D43] font-semibold"
                      asChild
                    >
                      <Link href="/">
                        View All Apps
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:from-white/15 hover:to-white/10 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-bold text-white mb-4">Get Personal Help</h3>
                    <p className="text-white/80 mb-6">
                      Need guidance choosing the right apps? Our team is here to help you make the best decision.
                    </p>
                    <Button
                      variant="outline"
                      className="w-full border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent"
                      asChild
                    >
                      <Link href="/contact">
                        Contact Our Team
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}