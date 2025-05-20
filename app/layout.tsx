import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display as PlayfairDisplay, Lato } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { LanguageProvider } from "@/contexts/language-context"
import { translations } from "@/translations"
import { ChatButton } from "@/components/chat/chat-button"

const playfair = PlayfairDisplay({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Maison Pho | Luxury Vietnamese Cuisine",
  description:
    "Experience the finest Vietnamese Pho in an elegant setting. Our premium ingredients and traditional recipes create an unforgettable dining experience.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn("min-h-screen bg-white font-sans antialiased", playfair.variable, lato.variable)}>
        <LanguageProvider translations={translations}>
          {children}
          <ChatButton />
        </LanguageProvider>
      </body>
    </html>
  )
}
