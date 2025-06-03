import './globals.css'
import { Inter } from 'next/font/google'
import { SocialBar } from './components/social-bar'
import { PreloadResources } from './components/preload-resources'
import { Metadata } from 'next'
import { Header } from './components/header'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://garrypaytonlaw.com'),
  title: {
    default: 'Garry Payton Law | Criminal Defense Attorney',
    template: '%s | Garry Payton Law'
  },
  description: 'Experienced criminal defense attorney serving Sacramento and surrounding areas. Dedicated to protecting your rights and providing expert legal representation.',
  keywords: ['Garry Payton', 'Criminal Defense', 'Sacramento', 'Attorney', 'Legal Representation', 'Criminal Law'],
  authors: [{ name: 'Garry Payton' }],
  creator: 'Garry Payton',
  publisher: 'Garry Payton',
  formatDetection: {
    email: false,
    address: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://garrypaytonlaw.com',
    siteName: 'Garry Payton Law',
    title: 'Garry Payton Law | Criminal Defense Attorney',
    description: 'Experienced criminal defense attorney serving Sacramento and surrounding areas.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Garry Payton Law'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Garry Payton Law | Criminal Defense Attorney',
    description: 'Experienced criminal defense attorney serving Sacramento and surrounding areas.',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <PreloadResources />
      </head>
      <body className={`${inter.className} bg-midnight text-sandBeige min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-auto min-w-0 flex flex-col px-2 md:px-0">
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
        <SocialBar />
      </body>
    </html>
  )
}
