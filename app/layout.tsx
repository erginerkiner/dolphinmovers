"use client"

import './globals.css'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

/* export const metadata = {
  title: 'Dolphin Movers',
  description: 'Dolphin Movers Development Site',
} */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <head />
      <body>
        <CacheProvider>
          <ChakraProvider>
            <Navbar />
            {children}
            <Footer />
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}