import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LOOP MARKETING | Growth Systems for Modern Brands',
  description: 'Growth systems designed for businesses that want more than impressions.',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90" font-weight="bold" fill="%233B82F6">L</text></svg>',
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
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-primary text-text-primary font-inter overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}