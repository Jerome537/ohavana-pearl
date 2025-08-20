import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ohavana Pearl - Bijoux Perles de Tahiti Authentiques',
  description: 'Découvrez notre collection exclusive de bijoux en perles de Tahiti. Authenticité garantie, création artisanale.',
  keywords: 'perles tahiti, bijoux perles, collier perles, boucles oreilles perles, authenticité',
  applicationName: 'Ohavana Pearl',
  authors: [{ name: 'Ohavana Pearl' }],
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  themeColor: '#0B6E8A',
  colorScheme: 'light',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Ohavana Pearl - Bijoux Perles de Tahiti',
    description: 'Collection exclusive de bijoux en perles de Tahiti authentiques',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Ohavana Pearl',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ohavana Pearl - Bijoux Perles de Tahiti',
    description: 'Collection exclusive de bijoux en perles de Tahiti authentiques',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}