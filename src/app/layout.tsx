import type { Metadata } from 'next'
import { Inter, Ubuntu } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Radio Ads',
  description: 'With radio advertising, you get the opportunity to showcase your brand on the local radio service platform. Track And Analyze Your Radio Ad Campaign ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  )
}
