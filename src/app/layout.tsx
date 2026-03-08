import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio - Mateti Harshan',
  description: 'Software Development Engineer portfolio showcasing projects, skills, and experience in AI, Machine Learning, and Full-Stack Development',
  keywords: ['portfolio', 'developer', 'engineer', 'AI', 'Machine Learning', 'Full-Stack', 'Next.js', 'Python'],
  authors: [{ name: 'Mateti Harshan' }],
  metadataBase: new URL('https://your-portfolio.vercel.app'),
  openGraph: {
    title: 'Portfolio - Mateti Harshan',
    description: 'Software Development Engineer portfolio showcasing projects, skills, and experience in AI, Machine Learning, and Full-Stack Development',
    type: 'website',
    url: 'https://your-portfolio.vercel.app',
    images: [
      {
        url: '/images/genai.jpg',
        width: 1200,
        height: 630,
        alt: 'Mateti Harshan Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio - Mateti Harshan',
    description: 'Software Development Engineer portfolio showcasing projects, skills, and experience',
    images: ['/images/genai.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
          {children}
        </div>
      </body>
    </html>
  )
}
