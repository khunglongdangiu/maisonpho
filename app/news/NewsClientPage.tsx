"use client"

import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"

export default function NewsClientPage() {
  const { t } = useLanguage()

  return (
    <>
      <Navigation />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-muted py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">{t("news.title")}</h1>
              <p className="text-lg text-muted-foreground mb-0">{t("news.subtitle")}</p>
            </div>
          </div>
        </section>

        {/* News Articles */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 gap-12">
              {/* Article 1 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Michelin Star Award"
                    width={600}
                    height={400}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="md:col-span-2">
                  <div className="text-sm text-muted-foreground mb-2">{t("news.1.date")}</div>
                  <h2 className="text-2xl font-semibold text-primary mb-4">
                    <Link href="/news/michelin-star" className="hover:text-primary/80 transition-colors">
                      {t("news.1.title")}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground mb-4">{t("news.1.excerpt")}</p>
                  <Link
                    href="/news/michelin-star"
                    className="text-primary font-medium hover:text-primary/80 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>

              {/* Article 2 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Seasonal Menu"
                    width={600}
                    height={400}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="md:col-span-2">
                  <div className="text-sm text-muted-foreground mb-2">{t("news.2.date")}</div>
                  <h2 className="text-2xl font-semibold text-primary mb-4">
                    <Link href="/news/seasonal-menu" className="hover:text-primary/80 transition-colors">
                      {t("news.2.title")}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground mb-4">{t("news.2.excerpt")}</p>
                  <Link
                    href="/news/seasonal-menu"
                    className="text-primary font-medium hover:text-primary/80 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>

              {/* Article 3 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Cooking Masterclass"
                    width={600}
                    height={400}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="md:col-span-2">
                  <div className="text-sm text-muted-foreground mb-2">{t("news.3.date")}</div>
                  <h2 className="text-2xl font-semibold text-primary mb-4">
                    <Link href="/news/cooking-masterclass" className="hover:text-primary/80 transition-colors">
                      {t("news.3.title")}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground mb-4">{t("news.3.excerpt")}</p>
                  <Link
                    href="/news/cooking-masterclass"
                    className="text-primary font-medium hover:text-primary/80 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
