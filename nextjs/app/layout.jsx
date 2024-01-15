'use client'
import { Inter } from 'next/font/google'

import './globals.css'

import Nav from './components/nav';

import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  

  return (
    <html lang="en" className=''> 
      <body className={inter.className + " text-th-primary-medium bg-th-bg"}>
        <ThemeProvider>
          <Nav />
          <div className="mt-20">
            {children}
          </div>
        </ThemeProvider>
        </body>
        
    </html>
  )
}
