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
import { LocaleLink } from "@/components/locale-link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Support Center | OSS Commerce - Help & Documentation",
  description: "Get help with OSS Commerce apps. Find documentation, tutorials, FAQs, and contact our support team for Shopify app assistance.",
  keywords: "Shopify app support, e-commerce help, OSS Commerce documentation, Shopify app tutorials, customer support",
  openGraph: {
    title: "Support Center | OSS Commerce",
    description: "Get help with OSS Commerce apps. Documentation, tutorials, and expert support for your Shopify store.",
    type: "website",
    images: ["/oss-logo.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Support Center | OSS Commerce",
    description: "Get help with OSS Commerce apps and documentation"
  }
}

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                We're Here to{" "}
                <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                  Help
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                Find answers, get support, and learn how to make the most of your OSS Commerce apps.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Support Options */}
        <section className="py-20 bg-[#1E0D43] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Get{" "}
                <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                  Instant Help
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Choose the support option that works best for you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#1E0D43] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#F6B86C]/25 group-hover:scale-110 transition-transform">
                    <MessageCircle className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Live Chat</h3>
                  <p className="text-gray-700 mb-6 text-sm">
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

              <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#1E0D43] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Email Support</h3>
                  <p className="text-gray-700 mb-6 text-sm">
                    Send us a detailed message
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                    asChild
                  >
                    <LocaleLink href="/contact">Contact Us</LocaleLink>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#1E0D43] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/25 group-hover:scale-110 transition-transform">
                    <Book className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Documentation</h3>
                  <p className="text-gray-700 mb-6 text-sm">
                    Detailed guides and tutorials
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                    asChild
                  >
                    <LocaleLink href="/docs">View Docs</LocaleLink>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#1E0D43] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform">
                    <Video className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Video Tutorials</h3>
                  <p className="text-gray-700 mb-6 text-sm">
                    Step-by-step video guides
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Watch Videos
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Quick answers to the most common questions about OSS Commerce.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem
                  value="item-1"
                  className="bg-gray-50 border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-gray-900 hover:text-[#F6B86C] hover:no-underline">
                    How do I install OSS Commerce apps?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Installing our apps is simple! Visit the Shopify App Store, search for any OSS Commerce app, and click "Add app."
                    Our apps integrate seamlessly with your existing Shopify store and can be set up in just a few minutes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="bg-gray-50 border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-gray-900 hover:text-[#F6B86C] hover:no-underline">
                    What makes OSS Commerce apps different?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Our apps are designed to work together as an integrated ecosystem. When you install multiple OSS Commerce apps,
                    they share data and functionality, creating automated workflows and enhanced features that standalone apps can't provide.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="bg-gray-50 border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-gray-900 hover:text-[#F6B86C] hover:no-underline">
                    Do you offer refunds?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Yes! We offer a 30-day money-back guarantee on all our apps. If you're not completely satisfied,
                    contact our support team within 30 days of purchase for a full refund.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="bg-gray-50 border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-gray-900 hover:text-[#F6B86C] hover:no-underline">
                    How does the ecosystem discount work?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    The more OSS Commerce apps you install, the more you save! Discounts are automatically applied:
                    10% off with 2 apps, 20% off with 3 apps, and 30% off with 4+ apps. No codes needed!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-5"
                  className="bg-gray-50 border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-gray-900 hover:text-[#F6B86C] hover:no-underline">
                    What support do you provide?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    We provide comprehensive support including live chat, email support, detailed documentation, and video tutorials.
                    Our support team is available Monday-Friday 9 AM - 6 PM EST.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-6"
                  className="bg-gray-50 border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-gray-900 hover:text-[#F6B86C] hover:no-underline">
                    Can I migrate data from other apps?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Absolutely! We offer free migration assistance for most popular apps. Our team will help you transfer your
                    data and settings to ensure a smooth transition to OSS Commerce apps.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Support CTA */}
        <section className="py-20 bg-purple-950/15">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Our support team is here to help you succeed. Get in touch and we'll resolve your questions quickly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-[#1E0D43] text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-[#F6B86C]/25"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Start Live Chat
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#1E0D43] text-[#1E0D43] hover:bg-[#1E0D43] hover:text-white bg-transparent px-8 py-4 text-lg"
                  asChild
                >
                  <LocaleLink href="/contact">Send Message</LocaleLink>
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
