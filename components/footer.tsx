'use client'

import { Button } from "@/components/ui/button"
import { LocaleLink } from "@/components/locale-link"
import Image from "next/image"
import { NewsletterForm } from "@/components/newsletter-form"
import { LocaleSwitcher } from "@/components/locale-switcher"
import { useLocale } from "@/components/locale-provider"

export function Footer() {
  const { t } = useLocale()
  return (
    <footer className="bg-[#1E0D43] border-t border-white/10 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 relative">
                <Image src="/oss-logo.png" alt="OSS Logo" width={32} height={32} className="object-contain" />
              </div>
              <span className="text-xl font-bold text-white">OSS Commerce</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.products')}</h3>
            <ul className="space-y-2">
              <li>
                <LocaleLink href="/apps/oss-tracking" className="text-white/60 hover:text-[#F6B86C] text-sm transition-colors">
                  OSS Tracking
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/apps" className="text-white/60 hover:text-[#F6B86C] text-sm transition-colors">
                  {t('nav.ourApps')}
                </LocaleLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              <li>
                <LocaleLink href="/about" className="text-white/60 hover:text-[#F6B86C] text-sm transition-colors">
                  {t('nav.about')}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/contact" className="text-white/60 hover:text-[#F6B86C] text-sm transition-colors">
                  {t('common.contact')}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/privacy" className="text-white/60 hover:text-[#F6B86C] text-sm transition-colors">
                  {t('common.privacy')}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/blog" className="text-white/60 hover:text-[#F6B86C] text-sm transition-colors">
                  {t('nav.blog')}
                </LocaleLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.newsletter.title')}</h3>
            <p className="text-white/60 text-sm mb-4">{t('footer.newsletter.subtitle')}</p>
            <NewsletterForm
              size="sm"
              placeholder={t('footer.newsletter.placeholder')}
              buttonText={t('footer.newsletter.subscribe')}
              className="max-w-none"
              source="footer"
            />
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">{t('footer.copyright')}</p>
          <LocaleSwitcher />
        </div>
      </div>
    </footer>
  )
}
