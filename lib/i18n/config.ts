export const locales = ['en', 'es', 'pt'] as const
export type Locale = typeof locales[number]

export const defaultLocale: Locale = 'en'

export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español', 
  pt: 'Português'
}

export const localeFlags: Record<Locale, string> = {
  en: '🇺🇸',
  es: '🇪🇸',
  pt: '🇧🇷'
}

// Country code to locale mapping for auto-detection
export const countryToLocale: Record<string, Locale> = {
  // English speaking countries
  'US': 'en',
  'CA': 'en', 
  'GB': 'en',
  'AU': 'en',
  'NZ': 'en',
  'IE': 'en',
  'ZA': 'en',
  
  // Spanish speaking countries
  'ES': 'es',
  'MX': 'es',
  'AR': 'es',
  'CO': 'es',
  'CL': 'es',
  'PE': 'es',
  'VE': 'es',
  'EC': 'es',
  'GT': 'es',
  'CU': 'es',
  'BO': 'es',
  'DO': 'es',
  'HN': 'es',
  'PY': 'es',
  'SV': 'es',
  'NI': 'es',
  'CR': 'es',
  'PA': 'es',
  'UY': 'es',
  
  // Portuguese speaking countries
  'BR': 'pt',
  'PT': 'pt',
  'AO': 'pt',
  'MZ': 'pt'
}