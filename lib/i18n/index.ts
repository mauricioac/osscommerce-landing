import { en } from './locales/en'
import { es } from './locales/es'
import { pt } from './locales/pt'
import { Locale, defaultLocale, countryToLocale } from './config'

// Translation dictionaries
const translations = {
  en,
  es,
  pt
} as const

// Type for translation keys (deep keyof)
type TranslationKey = {
  [K in keyof typeof en]: typeof en[K] extends object
    ? `${K}.${keyof typeof en[K] & string}`
    : K
}[keyof typeof en]

type NestedTranslationKey = any

type DeepTranslationKey = string

// Helper to get nested value from object path
function getNestedValue(obj: any, path: string): string {
  return path.split('.').reduce((current, key) => current?.[key], obj) || path
}

// Get translation function
export function getTranslations(locale: Locale = defaultLocale) {
  const dict = translations[locale] || translations[defaultLocale]
  
  return function t(key: DeepTranslationKey): string {
    return getNestedValue(dict, key)
  }
}

// Detect locale from country code
export function detectLocaleFromCountry(countryCode: string): Locale {
  return countryToLocale[countryCode.toUpperCase()] || defaultLocale
}

// Cookie/localStorage helpers
export const LOCALE_COOKIE = 'preferred-locale'
export const LOCALE_STORAGE = 'preferred-locale'

export function getStoredLocale(): Locale | null {
  if (typeof window === 'undefined') return null
  
  // Check localStorage first
  const stored = localStorage.getItem(LOCALE_STORAGE)
  if (stored && isValidLocale(stored)) {
    return stored as Locale
  }
  
  // Check cookie
  const cookieMatch = document.cookie.match(new RegExp(`${LOCALE_COOKIE}=([^;]+)`))
  if (cookieMatch && isValidLocale(cookieMatch[1])) {
    return cookieMatch[1] as Locale
  }
  
  return null
}

export function setStoredLocale(locale: Locale) {
  if (typeof window === 'undefined') return
  
  // Set in localStorage
  localStorage.setItem(LOCALE_STORAGE, locale)
  
  // Set in cookie (30 days)
  const expires = new Date()
  expires.setTime(expires.getTime() + 30 * 24 * 60 * 60 * 1000)
  document.cookie = `${LOCALE_COOKIE}=${locale}; expires=${expires.toUTCString()}; path=/`
}

function isValidLocale(locale: string): boolean {
  return ['en', 'es', 'pt'].includes(locale)
}

// Get user's country from IP (client-side)
export async function getUserCountry(): Promise<string | null> {
  try {
    const response = await fetch('https://ipapi.co/country_code/', {
      method: 'GET',
      cache: 'force-cache'
    })
    
    if (response.ok) {
      const countryCode = await response.text()
      return countryCode.trim().toUpperCase()
    }
  } catch (error) {
    console.warn('Failed to detect country:', error)
  }
  
  return null
}

// Main locale detection logic
export async function detectUserLocale(): Promise<Locale> {
  // 1. Check if user has a stored preference
  const storedLocale = getStoredLocale()
  if (storedLocale) {
    return storedLocale
  }
  
  // 2. Detect from country
  const country = await getUserCountry()
  if (country) {
    return detectLocaleFromCountry(country)
  }
  
  // 3. Fallback to default
  return defaultLocale
}