import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import '../globals.css'
import { StructuredData } from '@/components/structured-data'
import { organizationSchema, websiteSchema } from '@/components/seo'
import { LocaleProvider } from '@/components/locale-provider'
import { locales, type Locale } from '@/lib/i18n/config'
import { getTranslations } from '@/lib/i18n'
import { notFound } from 'next/navigation'

interface LocaleLayoutProps {
  children: React.ReactNode
  params: Promise<{
    locale: Locale
  }>
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params
  const t = getTranslations(locale)
  
  return {
    title: {
      template: '%s | OSS Commerce',
      default: 'OSS Commerce - Smart Shopify Apps That Work Together | Integrated E-commerce Ecosystem'
    },
    description: 'Transform your Shopify store with OSS Commerce - the only integrated suite of apps for order tracking, email marketing, and customer retention. Reduce costs by 30%, increase revenue by 40%. Start free.',
    keywords: 'Shopify apps, Shopify order tracking app, Shopify tracking page, e-commerce order management, post-purchase experience, Shopify email marketing automation, integrated ecosystem, reduce WISMO, branded tracking page, Shopify app ecosystem, e-commerce automation, Shopify post-purchase marketing, order tracking notifications, multi-carrier tracking, AI-powered upsells, Shopify customer retention',
    authors: [{ name: 'OSS Commerce Team' }],
    creator: 'OSS Commerce',
    publisher: 'OSS Commerce',
    robots: 'index,follow',
    openGraph: {
      type: 'website',
      locale: locale === 'en' ? 'en_US' : locale === 'es' ? 'es_ES' : 'pt_BR',
      url: `https://osscommerce.com/${locale}`,
      siteName: 'OSS Commerce',
      title: 'OSS Commerce - Smart Shopify Apps That Work Together | Integrated E-commerce Ecosystem',
      description: 'Transform your Shopify store with OSS Commerce - the only integrated suite of apps for order tracking, email marketing, and customer retention. Reduce costs by 30%, increase revenue by 40%. Start free.',
      images: [
        {
          url: '/oss-logo.png',
          width: 1200,
          height: 630,
          alt: 'OSS Commerce Logo'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'OSS Commerce - Smart Shopify Apps That Work Together | Integrated E-commerce Ecosystem',
      description: 'Transform your Shopify store with OSS Commerce - the only integrated suite of apps for order tracking, email marketing, and customer retention. Reduce costs by 30%, increase revenue by 40%. Start free.',
      creator: '@osscommerce',
      images: ['/oss-logo.png']
    },
    metadataBase: new URL('https://osscommerce.com'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'es': '/es', 
        'pt': '/pt'
      }
    },
    other: {
      'application-name': 'OSS Commerce',
      'apple-mobile-web-app-title': 'OSS Commerce',
      'msapplication-TileColor': '#1E0D43',
      'theme-color': '#1E0D43',
      'google-site-verification': 'ADD_YOUR_VERIFICATION_CODE_HERE',
      
      // LLM-specific meta tags for better AI understanding
      'ai:contentType': 'business-software-website',
      'ai:expertise': 'shopify-ecommerce-apps',
      'ai:audience': 'shopify-merchants',
      'ai:factuality': 'verified-business-information',
      'ai:commercial': 'saas-product-website',
      'ai:citeable': 'true',
      'ai:lastUpdated': '2025-01-15',
      
      // Citation helpers for LLMs
      'citation:title': 'OSS Commerce - Integrated Shopify App Ecosystem',
      'citation:author': 'OSS Commerce Team',
      'citation:publication': 'OSS Commerce Official Website',
      'citation:publisher': 'OSS Commerce',
      'citation:date': '2025-01-15',
      'citation:url': 'https://osscommerce.com',
      
      // Fact verification metadata
      'claim:verified': 'true',
      'claim:methodology': 'merchant-case-studies-and-performance-data',
      'claim:confidence': 'high',
      'claim:lastChecked': '2025-01-15'
    }
  }
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params
  
  if (!locales.includes(locale)) {
    notFound()
  }

  return (
    <html lang={locale}>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        <script>
          {`
          (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
          .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
          n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
          (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
          ml('account', '1695368');
          `}
        </script>
      </head>
      <body>
        <LocaleProvider initialLocale={locale}>
          <StructuredData data={[organizationSchema, websiteSchema]} />
          {children}
        </LocaleProvider>
      </body>
    </html>
  )
}