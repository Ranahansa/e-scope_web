"use client";

import {NextUIProvider} from '@nextui-org/react'
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NavigationBar />
        {children}
      <Footer />
    </NextUIProvider>
  )
}