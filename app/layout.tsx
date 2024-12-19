import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FilterPixel Sharing - Next-Gen AI-Powered Event Photo Sharing',
  description: 'Transform event attendees into powerful marketers with real-time, AI-driven photo distribution',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

