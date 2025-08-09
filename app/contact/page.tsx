import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MessageSquare, MapPin, Phone, Clock, Send } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | OS² Commerce - Get Support & Connect",
  description: "Contact OS² Commerce for support, partnerships, or questions about our Shopify apps. Get expert help with your e-commerce needs.",
  keywords: "contact OS² Commerce, Shopify app support, e-commerce help, partnership inquiries, customer service",
  openGraph: {
    title: "Contact Us | OS² Commerce",
    description: "Contact OS² Commerce for support, partnerships, or questions about our Shopify apps. Expert e-commerce assistance available.",
    type: "website",
    images: ["/oss-logo.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | OS² Commerce",
    description: "Get support and connect with the OS² Commerce team"
  }
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E0D43] via-[#2a1458] to-[#1E0D43]">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <Badge className="bg-gradient-to-r from-[#F6B86C]/20 to-[#FF8C42]/20 text-[#F6B86C] border-[#F6B86C]/30 hover:bg-[#F6B86C]/10 mb-6">
                💬 Get in Touch
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Let's{" "}
                <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                  Connect
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                Have questions about our products? Need support? Want to partner with us? 
                We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-gradient-to-r from-slate-900/50 to-[#1E0D43]/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader className="p-8">
                  <CardTitle className="text-2xl text-white mb-2">Send us a Message</CardTitle>
                  <p className="text-white/80">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-white font-medium">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          type="text"
                          placeholder="Your first name"
                          className="bg-white/10 border-white/20 focus:border-[#F6B86C] text-white placeholder:text-white/60"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-white font-medium">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Your last name"
                          className="bg-white/10 border-white/20 focus:border-[#F6B86C] text-white placeholder:text-white/60"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white font-medium">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="bg-white/10 border-white/20 focus:border-[#F6B86C] text-white placeholder:text-white/60"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-white font-medium">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="What's this about?"
                        className="bg-white/10 border-white/20 focus:border-[#F6B86C] text-white placeholder:text-white/60"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white font-medium">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        className="bg-white/10 border-white/20 focus:border-[#F6B86C] text-white placeholder:text-white/60 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] hover:from-[#E6A05C] hover:to-[#F6B86C] text-[#1E0D43] font-semibold shadow-lg shadow-[#F6B86C]/25"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#F6B86C] to-[#FF8C42] rounded-lg flex items-center justify-center shadow-lg shadow-[#F6B86C]/25">
                        <Mail className="h-6 w-6 text-[#1E0D43]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Email Us</h3>
                        <p className="text-white/60">Get in touch via email</p>
                      </div>
                    </div>
                    <p className="text-white font-medium">hello@osscommerce.com</p>
                    <p className="text-white/80 text-sm mt-1">We typically respond within 24 hours</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/25">
                        <MessageSquare className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Live Chat</h3>
                        <p className="text-white/60">Chat with our support team</p>
                      </div>
                    </div>
                    <p className="text-white/80 text-sm">
                      Available Monday to Friday, 9 AM - 6 PM EST
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-3 border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent"
                    >
                      Start Chat
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/25">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Business Hours</h3>
                        <p className="text-white/60">When we're available</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-white/80">Monday - Friday:</span>
                        <span className="text-white">9:00 AM - 6:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/80">Saturday:</span>
                        <span className="text-white">10:00 AM - 2:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/80">Sunday:</span>
                        <span className="text-white/60">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Quick Links */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Looking for{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-[#F6B86C] bg-clip-text text-transparent">
                  Quick Answers?
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Check out these helpful resources before reaching out.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:from-white/15 hover:to-white/10 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F6B86C] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#F6B86C]/25 group-hover:scale-110 transition-transform">
                    <MessageSquare className="h-8 w-8 text-[#1E0D43]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Support Center</h3>
                  <p className="text-white/80 mb-6">
                    Find answers to common questions and troubleshooting guides.
                  </p>
                  <Button
                    variant="outline"
                    className="border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent"
                    asChild
                  >
                    <a href="/support">Visit Support</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:from-white/15 hover:to-white/10 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Documentation</h3>
                  <p className="text-white/80 mb-6">
                    Detailed guides and API documentation for developers.
                  </p>
                  <Button
                    variant="outline"
                    className="border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent"
                  >
                    View Docs
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:from-white/15 hover:to-white/10 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/25 group-hover:scale-110 transition-transform">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Community</h3>
                  <p className="text-white/80 mb-6">
                    Connect with other merchants and share experiences.
                  </p>
                  <Button
                    variant="outline"
                    className="border-[#F6B86C]/50 text-[#F6B86C] hover:bg-[#F6B86C]/10 bg-transparent"
                  >
                    Join Community
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}