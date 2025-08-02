import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Bell,
  Palette,
  MessageCircle,
  Mail,
  Zap,
  BarChart3,
  Star,
  CheckCircle,
  ArrowRight,
  Shield,
  TrendingUp,
  Users,
  X,
} from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
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

      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-5xl mx-auto space-y-8">
              <Badge className="bg-gradient-to-r from-[#F6B86C]/20 to-[#FF8C42]/20 text-[#F6B86C] border-[#F6B86C]/30 hover:bg-[#F6B86C]/10">
                🚀 Launching in September 1st
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Beyond Tracking: The{" "}
                <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                  Smartest Way
                </span>{" "}
                to Delight Customers & Drive Revenue
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                Stop losing customers to tracking anxiety and missed opportunities. OS² Tracking empowers Shopify
                merchants to deliver an unparalleled post-purchase experience, turning every order update into a moment
                of delight and a pathway to increased sales.
              </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] hover:from-[#E6A05C] hover:to-[#F6B86C] text-[#1E0D43] px-8 py-4 text-lg font-semibold shadow-lg shadow-[#F6B86C]/25"
                    >
                      Join the waitlist
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md bg-white/95 backdrop-blur-sm border-white/20">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-[#1E0D43]">Join the Waitlist</DialogTitle>
                      <DialogDescription className="text-[#1E0D43]/70">
                        Be the first to know when OS² Tracking launches. Get exclusive early access and special pricing!
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-[#1E0D43] font-medium">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email address"
                          className="bg-white/50 border-[#1E0D43]/20 focus:border-[#F6B86C] text-[#1E0D43]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="store" className="text-[#1E0D43] font-medium">
                          Store Name (Optional)
                        </Label>
                        <Input
                          id="store"
                          type="text"
                          placeholder="Your Shopify store name"
                          className="bg-white/50 border-[#1E0D43]/20 focus:border-[#F6B86C] text-[#1E0D43]"
                        />
                      </div>
                      <div className="flex gap-2 pt-4">
                        <Button
                          className="flex-1 bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] hover:from-[#E6A05C] hover:to-[#F6B86C] text-[#1E0D43] font-semibold"
                        >
                          Join Waitlist
                        </Button>
                      </div>
                      <p className="text-xs text-[#1E0D43]/60 text-center">
                        We'll never spam you. Unsubscribe at any time.
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent px-8 py-4 text-lg"
                >
                  Watch Demo
                </Button>
              </div>
              <p className="text-sm text-white/60">Special pricing for early adopters</p>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-20 bg-gradient-to-r from-slate-900/50 to-[#1E0D43]/50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold text-white">
                  The Post-Purchase Experience <span className="text-red-400">Crisis</span>
                </h2>
                <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto">
                  In today's competitive e-commerce landscape, the customer journey doesn't end at checkout. The
                  post-purchase experience, particularly package tracking, is a critical touchpoint that can make or
                  break customer loyalty.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-white/10 border-white/20 border-white/20 backdrop-blur-sm text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <MessageCircle className="h-8 w-8 text-red-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">WISMO Overload</h3>
                    <p className="text-white/80">Constant "Where Is My Order?" inquiries flooding your support team</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 border-white/20 backdrop-blur-sm text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-[#F6B86C]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <TrendingUp className="h-8 w-8 text-[#F6B86C]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Missed Revenue</h3>
                    <p className="text-white/80">Generic tracking pages that waste valuable customer touchpoints</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 border-white/20 backdrop-blur-sm text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="h-8 w-8 text-yellow-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Customer Anxiety</h3>
                    <p className="text-white/80">Worried customers with no proactive communication about delays</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Features That Drive{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-[#F6B86C] bg-clip-text text-transparent">
                  Growth & Customer Satisfaction
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-4xl mx-auto">
                Your post-purchase experience is a powerful tool for customer retention and revenue generation. OS²
                Tracking transforms every tracking update into an opportunity.
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
                        <span className="text-white/90">Eliminate WISMO inquiries</span>
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

        {/* Social Proof */}
        <section id="testimonials" className="py-20 bg-gradient-to-r from-slate-900/30 to-[#1E0D43]/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Trusted by Growing{" "}
                <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                  Shopify Merchants
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                See how OS² Tracking is transforming post-purchase experiences and driving revenue growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-white/10 border-white/20 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#F6B86C] to-[#FF8C42] rounded-full flex items-center justify-center shadow-lg shadow-[#F6B86C]/25">
                      <span className="font-semibold text-[#1E0D43]">JD</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg text-white">Jane Doe</CardTitle>
                      <CardDescription className="text-white/60">Owner of StyleCraft Boutique</CardDescription>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#F6B86C] text-[#F6B86C]" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">
                    "OS² Tracking has revolutionized our post-purchase strategy. Our WISMO tickets are down by 30%, and
                    we've seen a noticeable increase in repeat purchases thanks to the branded tracking page and
                    upsells."
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/25">
                      <span className="font-semibold text-white">MS</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg text-white">Mike Smith</CardTitle>
                      <CardDescription className="text-white/60">Operations Manager at TechGear Pro</CardDescription>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#F6B86C] text-[#F6B86C]" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">
                    "The anomaly detection feature is a game-changer. We can now address potential issues before our
                    customers even know about them, leading to happier customers and less stress for our team."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">Everything you need to know about OS² Tracking</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem
                  value="item-1"
                  className="bg-white/10 border-white/20 border-white/20 backdrop-blur-sm rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-white hover:text-[#F6B86C] hover:no-underline">
                    Do I need to be a coding expert to use OS² Tracking?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Not at all! Our app is designed for ease of use, with intuitive interfaces and powerful
                    customization options that don't require any coding knowledge. For advanced users, Liquid support in
                    our email editor offers unmatched flexibility.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="bg-white/10 border-white/20 border-white/20 backdrop-blur-sm rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-white hover:text-[#F6B86C] hover:no-underline">
                    How does the AI-driven upsell feature work?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Our AI analyzes your customer's purchase history, browsing behavior, and popular products in your
                    store to recommend relevant items directly on the tracking page, encouraging additional purchases
                    and increasing your Average Order Value.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="bg-white/10 border-white/20 border-white/20 backdrop-blur-sm rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-white hover:text-[#F6B86C] hover:no-underline">
                    What if I use multiple shipping carriers?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    No problem! OS² Tracking integrates with multiple providers, ensuring comprehensive and reliable
                    tracking information for all your orders, regardless of the carrier. We support all major shipping
                    providers and automatically aggregate data from multiple sources.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="bg-white/10 border-white/20 border-white/20 backdrop-blur-sm rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-white hover:text-[#F6B86C] hover:no-underline">
                    How quickly can I set up OS² Tracking?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Setup is incredibly fast! Most merchants are up and running within 15 minutes. Our one-click Shopify
                    installation handles the technical setup, and our intuitive dashboard guides you through customizing
                    your branded tracking pages and email templates.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-5"
                  className="bg-white/10 border-white/20 border-white/20 backdrop-blur-sm rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-white hover:text-[#F6B86C] hover:no-underline">
                    What kind of support do you provide?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    We provide comprehensive support including live chat, email support, detailed documentation, and
                    video tutorials. Our team of e-commerce experts is always ready to help you maximize your
                    post-purchase experience and drive more revenue.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-[#F6B86C]/10 to-purple-500/10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Ready to Transform Your Post-Purchase Experience?
              </h2>
              <p className="text-xl text-white/80 leading-relaxed">
                Stop leaving money on the table and start delighting your customers with every delivery. OS² Tracking is
                the ultimate solution for Shopify merchants who demand more than just basic tracking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] hover:from-[#E6A05C] hover:to-[#F6B86C] text-[#1E0D43] px-8 py-4 text-lg font-semibold shadow-lg shadow-[#F6B86C]/25"
                >
                  Start Your Free Trial Today!
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent px-8 py-4 text-lg"
                >
                  Schedule Demo
                </Button>
              </div>
              <p className="text-sm text-white/60">
                Experience the power of proactive tracking, intelligent upsells, and unparalleled customer satisfaction.
                No credit card required. Cancel anytime.
              </p>
            </div>
          </div>
        </section>
      </main>

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
