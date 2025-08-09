import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OS² Commerce',
  description: 'Integrated Shopify Apps Ecosystem'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
