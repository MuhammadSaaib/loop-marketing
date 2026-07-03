import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'LOOP MARKETING | Growth Systems for Modern Brands',
  description: 'Growth systems designed for businesses that want more than impressions.',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><line x1="20" y1="30" x2="20" y2="70" stroke="%23FFD700" stroke-width="2.5" stroke-linecap="round"/><circle cx="40" cy="50" r="15" fill="none" stroke="%23FFFFFF" stroke-width="2.5"/><circle cx="50" cy="50" r="15" fill="none" stroke="%23FFFFFF" stroke-width="2.5"/><circle cx="60" cy="50" r="15" fill="none" stroke="%23FFFFFF" stroke-width="2.5"/><line x1="80" y1="30" x2="80" y2="70" stroke="%23FFD700" stroke-width="2.5" stroke-linecap="round"/></svg>',
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
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@100;300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-primary text-text-primary font-inter overflow-x-hidden">
        <Header />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}