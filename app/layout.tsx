import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AutoDeploy — CI/CD with GitHub, Jenkins, Docker & AWS EC2',
  description:
    'A complete DevOps CI/CD pipeline that automatically deploys your website whenever code is pushed to GitHub — powered by Jenkins, Docker, and AWS EC2.',
  keywords: [
    'DevOps',
    'CI/CD',
    'GitHub',
    'Jenkins',
    'Docker',
    'AWS EC2',
    'Continuous Deployment',
    'Automation',
  ],
  authors: [{ name: 'AutoDeploy' }],
  openGraph: {
    title: 'AutoDeploy — Automatic Website Deployment',
    description:
      'Build a complete DevOps CI/CD pipeline that automatically deploys your website whenever code is pushed to GitHub.',
    type: 'website',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#060b18' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-background antialiased">
        <ThemeProvider>{children}</ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
