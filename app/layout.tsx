import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TechMaster',
  icons: {
    icon: '/public/favicon.png', // Ruta relativa al archivo en public/
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}