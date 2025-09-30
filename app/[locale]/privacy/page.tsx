import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Mail, Eye, Lock, Users, FileText } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <Badge className="bg-gradient-to-r from-[#F6B86C]/20 to-[#FF8C42]/20 text-[#F6B86C] border-[#F6B86C]/30 hover:bg-[#F6B86C]/10 mb-6">
                🔒 Privacy Policy
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Your Privacy{" "}
                <span className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] bg-clip-text text-transparent">
                  Matters
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                This Privacy Policy explains how OS² Commerce collects, uses, and protects your information
                when you visit our website and use our services.
              </p>
              <p className="text-gray-600">
                Last updated: January 15, 2025
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">

              {/* Information We Collect */}
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardHeader className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#F6B86C] to-[#FF8C42] rounded-lg flex items-center justify-center shadow-lg shadow-[#F6B86C]/25">
                      <Eye className="h-6 w-6 text-[#1E0D43]" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900">Information We Collect</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="space-y-6 text-gray-700">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Information You Provide</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Contact Information:</strong> Name, email address, phone number when you contact us or sign up for our newsletter</li>
                        <li>• <strong>Account Information:</strong> When you create an account or use our services</li>
                        <li>• <strong>Communication Data:</strong> Messages you send us through contact forms, chat, or email</li>
                        <li>• <strong>Marketing Preferences:</strong> Your choices about receiving communications from us</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Information We Collect Automatically</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Website Usage:</strong> Pages visited, time spent, click patterns, and navigation paths</li>
                        <li>• <strong>Device Information:</strong> Browser type, operating system, IP address, and device identifiers</li>
                        <li>• <strong>Cookies and Tracking:</strong> We use cookies and similar technologies to improve your experience</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* How We Use Information */}
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardHeader className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/25">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900">How We Use Your Information</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="space-y-4 text-gray-700">
                    <p className="text-gray-700">We use the information we collect to:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Provide Services:</strong> Deliver, maintain, and improve our website and services</li>
                      <li>• <strong>Communication:</strong> Respond to your inquiries and provide customer support</li>
                      <li>• <strong>Marketing:</strong> Send you newsletters, updates, and promotional materials (with your consent)</li>
                      <li>• <strong>Analytics:</strong> Understand how our website is used and improve user experience</li>
                      <li>• <strong>Legal Compliance:</strong> Comply with legal obligations and protect our rights</li>
                      <li>• <strong>Security:</strong> Detect, prevent, and address technical issues and security threats</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Information Sharing */}
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardHeader className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/25">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900">Information Sharing and Disclosure</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="space-y-6 text-gray-700">
                    <p className="text-gray-700">
                      We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Providers</h3>
                        <p className="text-gray-700">
                          We work with trusted third-party service providers who help us operate our website and services, such as:
                        </p>
                        <ul className="mt-2 space-y-1 text-gray-700">
                          <li>• Email marketing platforms (MailerLite)</li>
                          <li>• Website hosting and cloud services</li>
                          <li>• Analytics providers</li>
                          <li>• Customer support tools</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Legal Requirements</h3>
                        <p className="text-gray-700">
                          We may disclose your information if required by law, court order, or government request, or to protect our rights, property, or safety.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Data Security */}
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardHeader className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/25">
                      <Lock className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900">Data Security and Retention</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="space-y-6 text-gray-700">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Security Measures</h3>
                      <p className="text-gray-700 mb-4">
                        We implement appropriate technical and organizational security measures to protect your personal information, including:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Encryption of data in transit and at rest</li>
                        <li>• Regular security assessments and updates</li>
                        <li>• Access controls and authentication</li>
                        <li>• Secure hosting environments</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Retention</h3>
                      <p className="text-gray-700">
                        We retain your personal information only as long as necessary to provide our services and comply with legal obligations.
                        When information is no longer needed, we securely delete or anonymize it.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Your Rights */}
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardHeader className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg shadow-rose-500/25">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900">Your Rights and Choices</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="space-y-4 text-gray-700">
                    <p className="text-gray-700">You have the following rights regarding your personal information:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                      <li>• <strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                      <li>• <strong>Deletion:</strong> Request deletion of your personal information</li>
                      <li>• <strong>Portability:</strong> Request transfer of your data to another service</li>
                      <li>• <strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                      <li>• <strong>Objection:</strong> Object to certain types of processing</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      To exercise these rights, please contact us at <strong className="text-[#F6B86C]">privacy@osscommerce.com</strong>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Cookies */}
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardHeader className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg shadow-yellow-500/25">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900">Cookies and Tracking</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="space-y-4 text-gray-700">
                    <p className="text-gray-700">
                      We use cookies and similar tracking technologies to enhance your browsing experience. These include:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Essential Cookies:</strong> Required for basic website functionality</li>
                      <li>• <strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                      <li>• <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track campaign effectiveness</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      You can control cookie settings through your browser preferences. Note that disabling certain cookies may affect website functionality.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardHeader className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#F6B86C] to-[#FF8C42] rounded-lg flex items-center justify-center shadow-lg shadow-[#F6B86C]/25">
                      <Mail className="h-6 w-6 text-[#1E0D43]" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900">Contact Us</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="space-y-4 text-gray-700">
                    <p className="text-gray-700">
                      If you have any questions about this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Email:</strong> <span className="text-[#F6B86C]">privacy@osscommerce.com</span></p>
                      <p><strong>General Contact:</strong> <span className="text-[#F6B86C]">hello@osscommerce.com</span></p>
                    </div>
                    <p className="text-gray-600 text-sm mt-6">
                      We will respond to your inquiry within 30 days of receipt.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Updates */}
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h3>
                  <p className="text-gray-700">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.
                    When we make significant changes, we will notify you by posting the updated policy on this page and updating the
                    "Last updated" date at the top of this page.
                  </p>
                  <p className="text-gray-700 mt-4">
                    We encourage you to review this Privacy Policy periodically to stay informed about how we collect, use,
                    and protect your information.
                  </p>
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