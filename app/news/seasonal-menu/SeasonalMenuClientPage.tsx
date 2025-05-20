"use client"

import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"

export default function SeasonalMenuClientPage() {
  const { t } = useLanguage()

  return (
    <>
      <Navigation />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-muted py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <div className="text-sm text-muted-foreground mb-2">{t("news.2.date")}</div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">{t("news.2.title")}</h1>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="aspect-[16/9] rounded-lg overflow-hidden mb-8">
                <Image
                  src="/placeholder.svg?height=900&width=1600"
                  alt="Seasonal Menu"
                  width={1600}
                  height={900}
                  className="object-cover h-full w-full"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg">{t("news.2.content.p1")}</p>
                <p>{t("news.2.content.p2")}</p>
                <p>{t("news.2.content.p3")}</p>
                <p>{t("news.2.content.p4")}</p>
              </div>

              <div className="mt-12 pt-8 border-t border-border/30">
                <Link href="/news" className="text-primary font-medium hover:text-primary/80 transition-colors">
                  ← Back to News
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
