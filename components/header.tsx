'use client'

import { Button } from "@/components/ui/button"
import { LocaleLink } from "@/components/locale-link"
import Image from "next/image"
import { useLocale } from "@/components/locale-provider"

export function Header() {
  const { t } = useLocale()
  return (
    <header className="border-b bg-white/80 border-white/10 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <LocaleLink href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 relative">
              <Image src="/oss-logo.png" alt="OS² Logo" width={40} height={40} className="object-contain" />
            </div>
            <span className="text-xl font-bold text-[#1E0D43]">{t('nav.commerce')}</span>
          </LocaleLink>
          <div className="hidden md:flex items-center space-x-8">
            <LocaleLink href="/apps" className="text-[#1E0D43] hover:text-[#1E0D43] transition-colors">
              {t('nav.ourApps')}
            </LocaleLink>
            <LocaleLink href="/blog" className="text-[#1E0D43] hover:text-[#1E0D43] transition-colors">
              {t('nav.blog')}
            </LocaleLink>
            <LocaleLink href="/about" className="text-[#1E0D43] hover:text-[#1E0D43] transition-colors">
              {t('nav.about')}
            </LocaleLink>
            <LocaleLink href="/support" className="text-[#1E0D43] hover:text-[#1E0D43] transition-colors">
              {t('nav.support')}
            </LocaleLink>
            <Button size="lg"
            className="bg-[#1E0D43] text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-[#F6B86C]/25"
            asChild>
              <LocaleLink href="/apps">{t('nav.exploreApps')}</LocaleLink>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
