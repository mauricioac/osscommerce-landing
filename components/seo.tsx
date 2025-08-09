import { Metadata } from "next"

export interface SEOProps {
  title: string
  description: string
  keywords?: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article' | 'product'
  structuredData?: object
  noIndex?: boolean
}

export function generateMetadata({
  title,
  description,
  keywords,
  canonical,
  ogImage = "/oss-logo.png",
  ogType = "website",
  noIndex = false
}: SEOProps): Metadata {
  const fullTitle = title.includes("OS² Commerce") ? title : `${title} | OS² Commerce`
  
  return {
    title: fullTitle,
    description,
    keywords,
    robots: noIndex ? "noindex,nofollow" : "index,follow",
    authors: [{ name: "OS² Commerce Team" }],
    creator: "OS² Commerce",
    publisher: "OS² Commerce",
    alternates: {
      canonical: canonical
    },
    openGraph: {
      title: fullTitle,
      description,
      type: ogType,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      siteName: "OS² Commerce",
      locale: "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
      creator: "@osscommerce"
    },
    other: {
      "application-name": "OS² Commerce",
      "apple-mobile-web-app-title": "OS² Commerce",
      "msapplication-TileColor": "#1E0D43",
      "theme-color": "#1E0D43"
    }
  }
}

// Structured Data Schemas for LLM SEO
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "OS² Commerce",
  "alternateName": "OSS Commerce",
  "description": "Integrated Shopify applications that work better together. Powerful e-commerce tools for tracking, marketing, and growth.",
  "url": "https://osscommerce.com",
  "logo": "https://osscommerce.com/oss-logo.png",
  "sameAs": [
    "https://apps.shopify.com/partners/oss-commerce"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-XXX-XXX-XXXX",
    "contactType": "customer service",
    "email": "hello@osscommerce.com",
    "availableLanguage": ["English", "Spanish", "Portuguese"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "foundingDate": "2024",
  "numberOfEmployees": "1-10",
  "industry": "Software Development",
  "keywords": "Shopify apps, e-commerce software, order tracking, email marketing, integrated ecosystem"
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "OS² Commerce",
  "url": "https://osscommerce.com",
  "description": "Integrated Shopify applications designed to work together seamlessly for enhanced e-commerce operations.",
  "publisher": {
    "@type": "Organization",
    "name": "OS² Commerce"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://osscommerce.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

export const softwareApplicationSchema = (app: {
  name: string
  description: string
  category: string
  features: string[]
  shopifyUrl?: string
}) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": app.name,
  "description": app.description,
  "applicationCategory": "BusinessApplication",
  "applicationSubCategory": "E-commerce",
  "operatingSystem": "Web-based",
  "offers": {
    "@type": "Offer",
    "price": "Contact for pricing",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "provider": {
    "@type": "Organization",
    "name": "OS² Commerce"
  },
  "downloadUrl": app.shopifyUrl,
  "featureList": app.features,
  "keywords": `${app.category}, Shopify app, e-commerce, ${app.features.join(", ")}`,
  "screenshot": `https://osscommerce.com${app.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}.png`
})

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
})

export const articleSchema = (article: {
  title: string
  description: string
  author: string
  publishDate: string
  image?: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "author": {
    "@type": "Person",
    "name": article.author
  },
  "publisher": {
    "@type": "Organization",
    "name": "OS² Commerce",
    "logo": {
      "@type": "ImageObject",
      "url": "https://osscommerce.com/oss-logo.png"
    }
  },
  "datePublished": article.publishDate,
  "dateModified": article.publishDate,
  "image": article.image ? `https://osscommerce.com${article.image}` : "https://osscommerce.com/oss-logo.png",
  "mainEntityOfPage": {
    "@type": "WebPage"
  }
})

// Enhanced LLM-specific schemas
export const knowledgeGraphSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "about": {
    "@type": "SoftwareApplication",
    "name": "Shopify Order Tracking",
    "applicationCategory": "E-commerce Software",
    "operatingSystem": "Web-based",
    "provider": {
      "@type": "Organization",
      "name": "OS² Commerce"
    }
  },
  "teaches": [
    "Order tracking optimization",
    "WISMO reduction strategies", 
    "Post-purchase experience improvement",
    "E-commerce automation",
    "Customer retention techniques"
  ],
  "educationalLevel": "Professional",
  "audience": {
    "@type": "ProfessionalAudience",
    "audienceType": "E-commerce merchants"
  }
}

export const factCheckSchema = (facts: { statement: string; source: string; dateChecked: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "ClaimReview",
  "claimReviewed": facts.map(fact => fact.statement),
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": 5,
    "bestRating": 5,
    "ratingExplanation": "Verified through merchant case studies and performance data"
  },
  "author": {
    "@type": "Organization",
    "name": "OS² Commerce Research Team"
  },
  "datePublished": facts[0]?.dateChecked || new Date().toISOString(),
  "url": "https://osscommerce.com"
})

export const citationSchema = (citation: {
  title: string
  url: string
  author: string
  datePublished: string
  description: string
}) => ({
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "name": citation.title,
  "url": citation.url,
  "author": {
    "@type": "Organization", 
    "name": citation.author
  },
  "datePublished": citation.datePublished,
  "description": citation.description,
  "isAccessibleForFree": true,
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "publisher": {
    "@type": "Organization",
    "name": "OS² Commerce"
  }
})

export const llmOptimizedMetadata = (content: {
  title: string
  description: string  
  keywords: string
  facts: string[]
  statistics: { metric: string; value: string; source: string }[]
  lastUpdated: string
}) => ({
  // Standard meta tags
  "title": content.title,
  "description": content.description,
  "keywords": content.keywords,
  
  // LLM-specific meta tags
  "ai:contentType": "factual-guide",
  "ai:expertise": "e-commerce-optimization",
  "ai:audience": "shopify-merchants",
  "ai:factuality": "verified",
  "ai:lastUpdated": content.lastUpdated,
  "ai:keyFacts": content.facts.join("; "),
  "ai:statistics": content.statistics.map(stat => `${stat.metric}: ${stat.value}`).join("; "),
  "ai:citeable": "true",
  "ai:commercial": "product-informational",
  
  // Citation helpers
  "citation:title": content.title,
  "citation:author": "OS² Commerce Team",
  "citation:publication": "OS² Commerce Knowledge Base",
  "citation:date": content.lastUpdated,
  
  // Fact verification
  "claim:verified": "true",
  "claim:methodology": "merchant-case-studies-and-performance-data",
  "claim:confidence": "high"
})