'use client'

import { NextUIProvider } from '@nextui-org/react'
import NavigationBar from './components/NavigationBar'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            <NavigationBar />
            {children}
        </NextUIProvider>
    )
}