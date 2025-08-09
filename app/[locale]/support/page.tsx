import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { 
  Search, 
  MessageCircle, 
  Book, 
  Video, 
  HelpCircle, 
  Mail, 
  Phone, 
  Clock,
  CheckCircle,
  ArrowRight,
  Download
} from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Support Center | OS² Commerce - Help & Documentation",
  description: "Get help with OS² Commerce apps. Find documentation, tutorials, FAQs, and contact our support team for Shopify app assistance.",
  keywords: "Shopify app support, e-commerce help, OS² Commerce documentation, Shopify app tutorials, customer support",
  openGraph: {
    title: "Support Center | OS² Commerce",
    description: "Get help with OS² Commerce apps. Documentation, tutorials, and expert support for your Shopify store.",
    type: "website",
    images: ["/oss-logo.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Support Center | OS² Commerce",
    description: "Get help with OS² Commerce apps and documentation"
  }
}

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E0D43] via-[#2a1458] to-[#1E0D43]">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <Badge className="bg-gradient-to-r from-[#F6B86C]/20 to-[#FF8C42]/20 text-[#F6B86C] border-[#F6B86C]/30 hover:bg-[#F6B86C]/10 mb-6">
                🚀 Support Center
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                We're Here to{" "}
                <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                  Help
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                Find answers, get support, and learn how to make the most of your OS² Commerce apps.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
                <Input
                  placeholder="Search for help articles, guides, or FAQs..."
                  className="pl-12 pr-4 py-4 text-lg bg-white/10 border-white/20 focus:border-[#F6B86C] text-white placeholder:text-white/60 rounded-lg"
                />
                <Button 
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] text-[#1E0D43]"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Support Options */}
        <section className="py-20 bg-gradient-to-r from-slate-900/50 to-[#1E0D43]/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Get{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-[#F6B86C] bg-clip-text text-transparent">
                  Instant Help
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Choose the support option that works best for you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:from-white/15 hover:to-white/10 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F6B86C] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#F6B86C]/25 group-hover:scale-110 transition-transform">
                    <MessageCircle className="h-8 w-8 text-[#1E0D43]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Live Chat</h3>
                  <p className="text-white/80 mb-6 text-sm">
                    Get instant answers from our support team
                  </p>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] text-[#1E0D43] font-semibold"
                  >
                    Start Chat
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:from-white/15 hover:to-white/10 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Email Support</h3>
                  <p className="text-white/80 mb-6 text-sm">
                    Send us a detailed message
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent"
                    asChild
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:from-white/15 hover:to-white/10 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/25 group-hover:scale-110 transition-transform">
                    <Book className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Documentation</h3>
                  <p className="text-white/80 mb-6 text-sm">
                    Detailed guides and tutorials
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent"
                    asChild
                  >
                    <Link href="/docs">View Docs</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:from-white/15 hover:to-white/10 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform">
                    <Video className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Video Tutorials</h3>
                  <p className="text-white/80 mb-6 text-sm">
                    Step-by-step video guides
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent"
                  >
                    Watch Videos
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Quick answers to the most common questions about OS² Commerce.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem
                  value="item-1"
                  className="bg-white/10 border-white/20 backdrop-blur-sm rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-white hover:text-[#F6B86C] hover:no-underline">
                    How do I install OS² Commerce apps?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Installing our apps is simple! Visit the Shopify App Store, search for any OS² Commerce app, and click "Add app." 
                    Our apps integrate seamlessly with your existing Shopify store and can be set up in just a few minutes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="bg-white/10 border-white/20 backdrop-blur-sm rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-white hover:text-[#F6B86C] hover:no-underline">
                    What makes OS² Commerce apps different?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Our apps are designed to work together as an integrated ecosystem. When you install multiple OS² Commerce apps, 
                    they share data and functionality, creating automated workflows and enhanced features that standalone apps can't provide.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="bg-white/10 border-white/20 backdrop-blur-sm rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-white hover:text-[#F6B86C] hover:no-underline">
                    Do you offer refunds?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Yes! We offer a 30-day money-back guarantee on all our apps. If you're not completely satisfied, 
                    contact our support team within 30 days of purchase for a full refund.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="bg-white/10 border-white/20 backdrop-blur-sm rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-white hover:text-[#F6B86C] hover:no-underline">
                    How does the ecosystem discount work?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    The more OS² Commerce apps you install, the more you save! Discounts are automatically applied: 
                    10% off with 2 apps, 20% off with 3 apps, and 30% off with 4+ apps. No codes needed!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-5"
                  className="bg-white/10 border-white/20 backdrop-blur-sm rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-white hover:text-[#F6B86C] hover:no-underline">
                    What support do you provide?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    We provide comprehensive support including live chat, email support, detailed documentation, video tutorials, 
                    and a community forum. Our support team is available Monday-Friday 9 AM - 6 PM EST.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-6"
                  className="bg-white/10 border-white/20 backdrop-blur-sm rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-white hover:text-[#F6B86C] hover:no-underline">
                    Can I migrate data from other apps?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Absolutely! We offer free migration assistance for most popular apps. Our team will help you transfer your 
                    data and settings to ensure a smooth transition to OS² Commerce apps.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Support Resources */}
        <section className="py-20 bg-gradient-to-r from-slate-900/30 to-[#1E0D43]/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Support{" "}
                <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                  Resources
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Everything you need to succeed with OS² Commerce.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F6B86C] to-[#FF8C42] rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-[#F6B86C]/25">
                    <Book className="h-6 w-6 text-[#1E0D43]" />
                  </div>
                  <CardTitle className="text-white text-lg">Getting Started Guide</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-white/80 text-sm mb-4">
                    Step-by-step instructions to set up and configure your first OS² Commerce app.
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Guide
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-purple-500/25">
                    <Video className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-lg">Video Library</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-white/80 text-sm mb-4">
                    Watch detailed tutorials covering all features and advanced configurations.
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent"
                  >
                    <Video className="mr-2 h-4 w-4" />
                    Watch Videos
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/25">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-lg">Community Forum</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-white/80 text-sm mb-4">
                    Connect with other merchants, share tips, and get community support.
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent"
                  >
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Join Forum
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Support CTA */}
        <section className="py-20 bg-gradient-to-r from-[#F6B86C]/10 to-purple-500/10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Our support team is here to help you succeed. Get in touch and we'll resolve your questions quickly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] hover:from-[#E6A05C] hover:to-[#F6B86C] text-[#1E0D43] px-8 py-4 text-lg font-semibold shadow-lg shadow-[#F6B86C]/25"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Start Live Chat
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent px-8 py-4 text-lg"
                  asChild
                >
                  <Link href="/contact">Send Message</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}