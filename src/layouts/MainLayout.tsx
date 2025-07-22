import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

interface MainLayoutProps {
  children: React.ReactNode
  onToggleTheme?: () => void
  onSystemTheme?: () => void
  theme?: string
  headerClassName?: string // new prop for custom header bg
}

export function MainLayout({ children, headerClassName }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-primary-light">
      <Header className={headerClassName} />
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer />
    </div>
  )
} 