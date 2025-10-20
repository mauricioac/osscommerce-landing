import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OSS Commerce',
  description: 'Integrated Shopify Apps Ecosystem'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
