export interface AppConfig {
  id: string
  name: string
  shortName: string
  description: string
  icon: string
  status: 'available' | 'coming-soon' | 'beta'
  category: 'tracking' | 'marketing' | 'analytics' | 'bundles' | 'other'
  knowledgeBaseUrl?: string // URL to embed your knowledge base app
  landingPage?: string
  shopifyUrl?: string
  features: string[]
  color: {
    primary: string
    secondary: string
  }
}

export const appsConfig: AppConfig[] = [
  {
    id: 'oss-tracking',
    name: 'OS² Tracking',
    shortName: 'Tracking',
    description: 'Advanced order tracking with proactive notifications and branded tracking pages.',
    icon: '/oss-tracking.png',
    status: 'available',
    category: 'tracking',
    landingPage: '/apps/oss-tracking',
    shopifyUrl: 'https://apps.shopify.com/oss-tracking',
    knowledgeBaseUrl: 'https://your-kb-app.com/embed/oss-tracking',
    features: [
      'Proactive anomaly detection',
      'Branded tracking pages',
      'Real-time notifications',
      'Analytics dashboard',
      'Multi-carrier support'
    ],
    color: {
      primary: '#F6B86C',
      secondary: '#FF8C42'
    }
  },
  {
    id: 'oss-marketing',
    name: 'OS² Marketing',
    shortName: 'Marketing',
    description: 'Powerful email marketing with automation and A/B testing capabilities.',
    icon: '/oss-marketing.png',
    status: 'coming-soon',
    category: 'marketing',
    landingPage: '/apps/oss-marketing',
    shopifyUrl: 'https://apps.shopify.com/oss-marketing',
    knowledgeBaseUrl: 'https://your-kb-app.com/embed/oss-marketing',
    features: [
      'Email campaign builder',
      'Marketing automation',
      'A/B testing',
      'Conversion tracking',
      'Segmentation tools'
    ],
    color: {
      primary: '#8B5CF6',
      secondary: '#A78BFA'
    }
  },
  {
    id: 'oss-bundles',
    name: 'OS² Bundles',
    shortName: 'Bundles',
    description: 'Create compelling product bundles to increase average order value.',
    icon: '/oss-bundles.png',
    status: 'beta',
    category: 'bundles',
    landingPage: '/apps/oss-bundles',
    shopifyUrl: 'https://apps.shopify.com/oss-bundles',
    knowledgeBaseUrl: 'https://your-kb-app.com/embed/oss-bundles',
    features: [
      'Bundle builder',
      'Discount management',
      'Inventory sync',
      'Performance analytics',
      'Mobile optimized'
    ],
    color: {
      primary: '#10B981',
      secondary: '#34D399'
    }
  }
]

export function getAppById(id: string): AppConfig | undefined {
  return appsConfig.find(app => app.id === id)
}

export function getAppsByCategory(category: AppConfig['category']): AppConfig[] {
  return appsConfig.filter(app => app.category === category)
}

export function getAppsByStatus(status: AppConfig['status']): AppConfig[] {
  return appsConfig.filter(app => app.status === status)
}

export function getAllAppIds(): string[] {
  return appsConfig.map(app => app.id)
}