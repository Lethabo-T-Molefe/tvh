import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import ThemeAwareHeader from "@/components/layout/theme-aware-header"
import ThemeAwareFooter from "@/components/layout/theme-aware-footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "TVH - The Varsity Hackathon",
  description: "South Africa's premier inter-university hackathon competition",
}

export default function ThemeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ThemeAwareHeader />
          {children}
          <ThemeAwareFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
