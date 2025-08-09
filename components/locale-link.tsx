'use client'

import Link from 'next/link'
import { useLocale } from '@/components/locale-provider'
import { ReactNode } from 'react'

interface LocaleLinkProps {
  href: string
  children: ReactNode
  className?: string
  [key: string]: any
}

export function LocaleLink({ href, children, ...props }: LocaleLinkProps) {
  const { locale } = useLocale()
  
  // Add locale prefix if href doesn't already have one
  const localizedHref = href.startsWith('/') && !href.startsWith(`/${locale}`) 
    ? `/${locale}${href}` 
    : href

  return (
    <Link href={localizedHref} {...props}>
      {children}
    </Link>
  )
}