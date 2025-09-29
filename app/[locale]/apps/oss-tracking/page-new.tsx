import React from "react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { type Locale } from "@/lib/i18n/config";

interface TrackingPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default async function OSTrackingPage({ params }: TrackingPageProps) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
              OS² Tracking
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Advanced order tracking for Shopify stores
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] hover:from-[#E6A05C] hover:to-[#F6B86C] text-white px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a href="https://apps.shopify.com/oss-tracking" target="_blank" rel="noopener noreferrer">
                Install Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}