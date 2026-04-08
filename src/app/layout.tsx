import type { Metadata, Viewport } from 'next'

import type { ReactNode } from 'react'

import '@/styles/global.css'

export const metadata: Metadata = {
  description: 'Snowball technical test application',
  title: 'Snowball Tech Test',
}

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
}

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html className="font-family-normal" lang="fr">
    <body className="bg-brand-primary" suppressHydrationWarning>
      {children}
    </body>
  </html>
)

export default RootLayout
