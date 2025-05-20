"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSelector } from "@/components/language-selector"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="Maison Pho Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="font-playfair text-xl font-bold tracking-tight text-primary">Maison Pho</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            {t("nav.about")}
          </Link>
          <Link href="/philosophy" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            {t("about.philosophy")}
          </Link>
          <Link href="/chef" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            {t("about.meetChef")}
          </Link>
          <Link href="/menu" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            {t("nav.menu")}
          </Link>
          <Link
            href="/#testimonials"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            {t("nav.testimonials")}
          </Link>
          <Link href="/news" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            {t("nav.news")}
          </Link>
          <Link href="/location" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            {t("nav.location")}
          </Link>
          <LanguageSelector />
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            <Link href="/reservations">{t("nav.reservations")}</Link>
          </Button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSelector />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(true)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 flex flex-col p-6">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Maison Pho Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <span className="font-playfair text-xl font-bold tracking-tight text-primary">Maison Pho</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>

            <nav className="flex flex-col items-center justify-center flex-1 gap-6">
              <Link
                href="/#about"
                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.about")}
              </Link>
              <Link
                href="/philosophy"
                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("about.philosophy")}
              </Link>
              <Link
                href="/chef"
                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("about.meetChef")}
              </Link>
              <Link
                href="/menu"
                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.menu")}
              </Link>
              <Link
                href="/#testimonials"
                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.testimonials")}
              </Link>
              <Link
                href="/news"
                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.news")}
              </Link>
              <Link
                href="/location"
                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.location")}
              </Link>
              <Button
                asChild
                className="mt-4 bg-primary text-white hover:bg-primary/90"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="/reservations">{t("nav.reservations")}</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
