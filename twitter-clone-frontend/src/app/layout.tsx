import '@/css/variables.scss'
import '@/css/globals.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Twitter (Clone)',
  description: 'Twitter Clone made by a single developer',
  themeColor: '#1D9BF0'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
