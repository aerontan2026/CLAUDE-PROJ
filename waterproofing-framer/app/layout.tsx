import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AquaShield Waterproofing — Stop Water Seepage at the Source',
  description: 'Specialist waterproofing contractor. We diagnose, rectify, and prevent recurring leak issues.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
