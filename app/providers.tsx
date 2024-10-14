'use client'

import { NextUIProvider } from '@nextui-org/react'
import Navigation from './components/Navigation'


export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <div className="flex flex-col min-h-screen bg-[#000040]">
        <Navigation />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </div>
    </NextUIProvider>
  )
}