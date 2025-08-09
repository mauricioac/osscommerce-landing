'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu'
import { Globe } from 'lucide-react'
import { useLocale } from '@/components/locale-provider'
import { locales, localeNames, localeFlags, type Locale } from '@/lib/i18n/config'

export function LocaleSwitcher() {
  const { locale, setLocale, t } = useLocale()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-white/80 hover:text-white hover:bg-white/10 gap-2"
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{t('footer.language')}</span>
          <span className="text-base">{localeFlags[locale]}</span>
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent 
        align="end" 
        className="bg-[#1E0D43]/95 backdrop-blur-sm border-white/20"
      >
        {locales.map((localeOption) => (
          <DropdownMenuItem
            key={localeOption}
            onClick={() => {
              setLocale(localeOption)
              setIsOpen(false)
            }}
            className={`
              text-white hover:bg-white/10 cursor-pointer gap-3
              ${locale === localeOption ? 'bg-white/5' : ''}
            `}
          >
            <span className="text-base">{localeFlags[localeOption]}</span>
            <span>{localeNames[localeOption]}</span>
            {locale === localeOption && (
              <div className="ml-auto w-2 h-2 bg-[#F6B86C] rounded-full" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}