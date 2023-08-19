import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavHeader from '@/components/NavHeader'
import MainLayout from '@/components/MainLayout'

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
      <div className=" min-h-screen">
        <NavHeader />
        <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
            <div className="blur-[106px] h-56 bg-gradient-to-br from-violet-800 to-violet-400 dark:from-blue-700"></div>
            <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>
        <MainLayout>
          {children}
        </MainLayout>
      </div>
    </body>
  </html>
  )
}
