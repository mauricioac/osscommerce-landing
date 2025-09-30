'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { Locale, defaultLocale } from '@/lib/i18n/config'
import { getTranslations, setStoredLocale } from '@/lib/i18n'

interface LocaleContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: any) => string
  isLoading: boolean
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

interface LocaleProviderProps {
  children: ReactNode
  initialLocale?: Locale
}

export function LocaleProvider({ children, initialLocale }: LocaleProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale || defaultLocale)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  // Simple initialization - just use the initial locale
  useEffect(() => {
    if (initialLocale) {
      setLocaleState(initialLocale)
    }
    setIsLoading(false)
  }, [initialLocale])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    setStoredLocale(newLocale)
    
    // Update URL to reflect new locale
    const currentPath = window.location.pathname
    const pathWithoutLocale = currentPath.replace(/^\/[a-z]{2}/, '') || '/'
    const newPath = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`
    
    router.push(newPath)
  }

  const t = getTranslations(locale)

  const value: LocaleContextType = {
    locale,
    setLocale,
    t,
    isLoading
  }

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider')
  }
  return context
}