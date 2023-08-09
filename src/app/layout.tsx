import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavHeader from '@/components/NavHeader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sponsor Gas',
  description: 'Empowering Users and Gas Fee Sponsors',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
        <div className=" bg-white min-h-screen bg-gradient-to-t from-gray-800 via-gray-900 to-black">
          <NavHeader />
          {children}
        </div>
    </body>
  </html>
  )
}
