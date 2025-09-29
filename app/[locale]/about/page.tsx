import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Lightbulb, Heart, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | OS² Commerce - E-commerce Innovation Team",
  description: "Learn about OS² Commerce's mission to empower online merchants with integrated Shopify applications. Meet our team and discover our vision for e-commerce.",
  keywords: "about OS² Commerce, e-commerce team, Shopify app developers, e-commerce innovation, integrated solutions",
  openGraph: {
    title: "About Us | OS² Commerce",
    description: "Learn about our mission to empower online merchants with integrated Shopify applications and innovative e-commerce solutions.",
    type: "website",
    images: ["/oss-logo.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | OS² Commerce",
    description: "Empowering online merchants with integrated e-commerce solutions"
  }
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <Badge className="bg-gradient-to-r from-[#F6B86C]/20 to-[#FF8C42]/20 text-[#F6B86C] border-[#F6B86C]/30 hover:bg-[#F6B86C]/10 mb-6">
                ✨ About OS² Commerce
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Building the{" "}
                <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                  Future
                </span>{" "}
                of E-commerce
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                We're on a mission to empower online merchants with intelligent, integrated solutions that turn 
                e-commerce complexity into competitive advantage.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardHeader className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F6B86C] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#F6B86C]/25">
                    <Target className="h-8 w-8 text-[#1E0D43]" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900 text-center mb-4">Our Mission</CardTitle>
                  <p className="text-gray-700 text-center leading-relaxed">
                    To simplify e-commerce operations by creating powerful, integrated applications that work together 
                    seamlessly, helping merchants focus on what they do best: growing their business.
                  </p>
                </CardHeader>
              </Card>

              <Card className="bg-white border-gray-200 shadow-lg">
                <CardHeader className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/25">
                    <Lightbulb className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900 text-center mb-4">Our Vision</CardTitle>
                  <p className="text-gray-700 text-center leading-relaxed">
                    A world where every e-commerce business, regardless of size, has access to enterprise-grade tools 
                    that are simple to use, affordable, and designed to scale with their growth.
                  </p>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Born from the frustration of managing dozens of disconnected apps, OS² Commerce started as a 
                simple idea: what if e-commerce tools actually worked together?
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="bg-white border-gray-200 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/25">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">The Problem</h3>
                  <p className="text-gray-700">
                    Merchants were drowning in app fatigue - managing dozens of tools that didn't communicate, 
                    leading to data silos and operational chaos.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F6B86C] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#F6B86C]/25">
                    <span className="text-2xl font-bold text-[#1E0D43]">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">The Insight</h3>
                  <p className="text-gray-700">
                    We realized that the future of e-commerce lies not in more apps, but in smarter integration - 
                    tools that enhance each other's capabilities.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/25">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">The Solution</h3>
                  <p className="text-gray-700">
                    OS² Commerce was born - a suite of applications designed from the ground up to work together, 
                    share data, and amplify each other's impact.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                These principles guide everything we do, from product development to customer support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F6B86C] to-[#FF8C42] rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#F6B86C]/25">
                  <Users className="h-6 w-6 text-[#1E0D43]" />
                </div>
                <h3 className="text-gray-900 font-semibold mb-2">Customer-Centric</h3>
                <p className="text-gray-600 text-sm">Every decision starts with our merchants' success</p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/25">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-gray-900 font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600 text-sm">We push boundaries to solve real problems</p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/25">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-gray-900 font-semibold mb-2">Excellence</h3>
                <p className="text-gray-600 text-sm">Quality and reliability in everything we build</p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-gray-900 font-semibold mb-2">Empathy</h3>
                <p className="text-gray-600 text-sm">We understand the challenges you face</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Join Our Journey?
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Discover how OS² Commerce can transform your e-commerce operations with our integrated suite of applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] hover:from-[#E6A05C] hover:to-[#F6B86C] text-[#1E0D43] px-8 py-4 text-lg font-semibold shadow-lg shadow-[#F6B86C]/25"
                >
                  Explore Our Apps
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent px-8 py-4 text-lg"
                  asChild
                >
                  <Link href="/contact">Contact Us</Link>
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