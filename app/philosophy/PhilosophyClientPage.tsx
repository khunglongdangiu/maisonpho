"use client"

import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"

export default function PhilosophyClientPage() {
  const { t } = useLanguage()

  return (
    <>
      <Navigation />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-muted py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">{t("philosophy.title")}</h1>
              <p className="text-lg text-muted-foreground mb-0">{t("philosophy.subtitle")}</p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <p className="text-lg text-muted-foreground mb-6">{t("philosophy.p1")}</p>

                <div className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-primary">{t("philosophy.authenticity.title")}</h2>
                    <p className="text-muted-foreground">{t("philosophy.authenticity.desc")}</p>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-primary">{t("philosophy.quality.title")}</h2>
                    <p className="text-muted-foreground">{t("philosophy.quality.desc")}</p>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-primary">{t("philosophy.innovation.title")}</h2>
                    <p className="text-muted-foreground">{t("philosophy.innovation.desc")}</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/5] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=800&width=640"
                    alt="Chef preparing ingredients"
                    width={640}
                    height={800}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-accent rounded-lg -z-10"></div>
                <div className="absolute -top-6 -right-6 w-48 h-48 bg-secondary rounded-lg -z-10"></div>
              </div>
            </div>

            <div className="bg-muted p-12 rounded-lg">
              <h2 className="text-3xl font-semibold text-primary mb-6 text-center">
                {t("philosophy.commitment.title")}
              </h2>
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
                {t("philosophy.commitment.desc")}
              </p>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Fresh ingredients"
                  width={600}
                  height={400}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Traditional cooking techniques"
                  width={600}
                  height={400}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Elegant presentation"
                  width={600}
                  height={400}
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
