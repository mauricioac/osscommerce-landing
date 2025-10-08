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
    name: 'apps.tracking.name',
    shortName: 'apps.tracking.shortName',
    description: 'apps.tracking.description',
    icon: '/oss-tracking.png',
    status: 'available',
    category: 'tracking',
    landingPage: '/apps/oss-tracking',
    shopifyUrl: 'https://apps.shopify.com/oss-tracking',
    knowledgeBaseUrl: 'https://your-kb-app.com/embed/oss-tracking',
    features: [
      'apps.tracking.features.0',
      'apps.tracking.features.1',
      'apps.tracking.features.2',
      'apps.tracking.features.3',
      'apps.tracking.features.4'
    ],
    color: {
      primary: '#F6B86C',
      secondary: '#FF8C42'
    }
  },
  {
    id: 'oss-marketing',
    name: 'apps.marketing.name',
    shortName: 'apps.marketing.shortName',
    description: 'apps.marketing.description',
    icon: '/oss-marketing.png',
    status: 'coming-soon',
    category: 'marketing',
    landingPage: '/apps/oss-marketing',
    shopifyUrl: 'https://apps.shopify.com/oss-marketing',
    knowledgeBaseUrl: 'https://your-kb-app.com/embed/oss-marketing',
    features: [
      'apps.marketing.features.0',
      'apps.marketing.features.1',
      'apps.marketing.features.2',
      'apps.marketing.features.3',
      'apps.marketing.features.4'
    ],
    color: {
      primary: '#8B5CF6',
      secondary: '#A78BFA'
    }
  },
  {
    id: 'oss-bundles',
    name: 'apps.bundles.name',
    shortName: 'apps.bundles.shortName',
    description: 'apps.bundles.description',
    icon: '/oss-bundles.png',
    status: 'beta',
    category: 'bundles',
    landingPage: '/apps/oss-bundles',
    shopifyUrl: 'https://apps.shopify.com/oss-bundles',
    knowledgeBaseUrl: 'https://your-kb-app.com/embed/oss-bundles',
    features: [
      'apps.bundles.features.0',
      'apps.bundles.features.1',
      'apps.bundles.features.2'
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