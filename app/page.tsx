"use client"

import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function Home() {
  const { t } = useLanguage()

  return (
    <>
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/banner_home.png?height=1080&width=1920"
              alt="Elegant Pho dish"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="container relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{t("hero.title")}</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">{t("hero.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Link href="/#menu">{t("hero.exploreMenu")}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-primary/90 hover:bg-white hover:text-primary"
              >
                <Link href="#">{t("hero.reservation")}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">{t("about.title")}</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>{t("about.p1")}</p>
                  <p>{t("about.p2")}</p>
                  <p>{t("about.p3")}</p>
                </div>
                <div className="mt-8 flex gap-4">
                  <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                    <Link href="/philosophy">{t("about.philosophy")}</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    <Link href="/chef">{t("about.meetChef")}</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/5] rounded-lg overflow-hidden">
                  <Image
                    src="/chef_ava.png?height=800&width=640"
                    alt="Chef preparing Pho"
                    width={640}
                    height={800}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-accent rounded-lg -z-10"></div>
                <div className="absolute -top-6 -right-6 w-48 h-48 bg-secondary rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Menu Section */}
        <section id="menu" className="py-20 bg-muted">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t("menu.title")}</h2>
              <p className="text-muted-foreground">{t("menu.subtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Menu Item 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/pho_royal.png?height=300&width=400"
                    alt={t("menu.phoRoyal.title")}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">{t("menu.phoRoyal.title")}</h3>
                    <span className="text-lg font-medium text-primary">$24</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{t("menu.phoRoyal.desc")}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full mr-2">
                      {t("menu.phoRoyal.tag1")}
                    </span>
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">{t("menu.phoRoyal.tag2")}</span>
                  </div>
                </div>
              </div>

              {/* Menu Item 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/pho_seafood.png?height=300&width=400"
                    alt={t("menu.phoSeafood.title")}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">{t("menu.phoSeafood.title")}</h3>
                    <span className="text-lg font-medium text-primary">$28</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{t("menu.phoSeafood.desc")}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full mr-2">
                      {t("menu.phoSeafood.tag1")}
                    </span>
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">
                      {t("menu.phoSeafood.tag2")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Menu Item 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/pho_veget.png?height=300&width=400"
                    alt={t("menu.phoVegetable.title")}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">{t("menu.phoVegetable.title")}</h3>
                    <span className="text-lg font-medium text-primary">$22</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{t("menu.phoVegetable.desc")}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full mr-2">
                      {t("menu.phoVegetable.tag1")}
                    </span>
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">
                      {t("menu.phoVegetable.tag2")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Link href="/menu">{t("menu.viewFull")}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t("testimonials.title")}</h2>
              <p className="text-muted-foreground">{t("testimonials.subtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-muted p-8 rounded-lg relative">
                <svg
                  className="absolute top-4 left-4 h-12 w-12 text-accent/20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.032-.52.112-1.01.24-.496.128-.94.216-1.33.216-.384 0-.762-.095-1.14-.285-.377-.19-.69-.53-.93-1.02-.24-.49-.36-1.08-.36-1.77 0-.657.13-1.31.38-1.97.26-.658.62-1.24 1.09-1.76.46-.518 1.01-.935 1.64-1.25.63-.318 1.32-.477 2.07-.477.73 0 1.42.16 2.07.477.64.319 1.2.736 1.66 1.25.46.525.82 1.11 1.08 1.76.25.66.38 1.31.38 1.97 0 .67-.13 1.32-.38 1.97-.26.65-.62 1.24-1.08 1.76-.46.52-1.02.936-1.66 1.25-.65.32-1.34.48-2.07.48-.4 0-.74-.03-1.01-.09zm-3.99.03c.34.09.64.13.91.13.42 0 .83-.09 1.22-.27.4-.18.74-.43 1.03-.76.29-.33.53-.71.7-1.14.18-.43.27-.88.27-1.36 0-.46-.08-.89-.23-1.29-.15-.39-.38-.73-.67-1.01-.3-.27-.65-.48-1.05-.63-.4-.14-.83-.21-1.28-.21-.42 0-.83.09-1.22.27-.39.18-.74.43-1.03.76-.29.33-.53.71-.7 1.14-.17.43-.26.88-.26 1.36 0 .46.08.89.23 1.29.15.39.38.73.67 1.01.3.27.65.48 1.05.63.4.14.83.21-1.28.21.26 0 .56-.04.91-.13z" />
                </svg>
                <div className="relative z-10">
                  <p className="text-muted-foreground mb-6">{t("testimonials.1.text")}</p>
                  <div className="flex items-center">
                    <Image
                      src="/p1.png?height=50&width=50"
                      alt="Customer"
                      width={50}
                      height={50}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-primary">{t("testimonials.1.name")}</h4>
                      <p className="text-sm text-muted-foreground">{t("testimonials.1.role")}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-muted p-8 rounded-lg relative">
                <svg
                  className="absolute top-4 left-4 h-12 w-12 text-accent/20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.032-.52.112-1.01.24-.496.128-.94.216-1.33.216-.384 0-.762-.095-1.14-.285-.377-.19-.69-.53-.93-1.02-.24-.49-.36-1.08-.36-1.77 0-.657.13-1.31.38-1.97.26-.658.62-1.24 1.09-1.76.46-.518 1.01-.935 1.64-1.25.63-.318 1.32-.477 2.07-.477.73 0 1.42.16 2.07.477.64.319 1.2.736 1.66 1.25.46.525.82 1.11 1.08 1.76.25.66.38 1.31.38 1.97 0 .67-.13 1.32-.38 1.97-.26.65-.62 1.24-1.08 1.76-.46.52-1.02.936-1.66 1.25-.65.32-1.34.48-2.07.48-.4 0-.74-.03-1.01-.09zm-3.99.03c.34.09.64.13.91.13.42 0 .83-.09 1.22-.27.4-.18.74-.43 1.03-.76.29-.33.53-.71.7-1.14.18-.43.27-.88.27-1.36 0 .46.08.89.23 1.29.15.39.38.73.67-1.01-.3-.27-.65-.48-1.05-.63-.4-.14-.83-.21-1.28-.21-.42 0-.83.09-1.22.27-.39.18-.74.43-1.03.76-.29.33-.53.71-.7 1.14-.17.43-.26.88-.26 1.36 0 .46.08.89.23 1.29.15.39.38.73.67 1.01.3.27.65.48-1.05-.63-.4-.14-.83-.21-1.28-.21.26 0 .56-.04.91-.13z" />
                </svg>
                <div className="relative z-10">
                  <p className="text-muted-foreground mb-6">{t("testimonials.2.text")}</p>
                  <div className="flex items-center">
                    <Image
                      src="/p2.png?height=50&width=50"
                      alt="Customer"
                      width={50}
                      height={50}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-primary">{t("testimonials.2.name")}</h4>
                      <p className="text-sm text-muted-foreground">{t("testimonials.2.role")}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-muted p-8 rounded-lg relative">
                <svg
                  className="absolute top-4 left-4 h-12 w-12 text-accent/20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.032-.52.112-1.01.24-.496.128-.94.216-1.33.216-.384 0-.762-.095-1.14-.285-.377-.19-.69-.53-.93-1.02-.24-.49-.36-1.08-.36-1.77 0-.657.13-1.31.38-1.97.26-.658.62-1.24 1.09-1.76.46-.518 1.01-.935 1.64-1.25.63-.318 1.32-.477 2.07-.477.73 0 1.42.16 2.07.477.64.319 1.2.736 1.66 1.25.46.525.82 1.11 1.08 1.76.25.66.38 1.31.38 1.97 0 .67-.13 1.32-.38 1.97-.26.65-.62 1.24-1.08 1.76-.46.52-1.02.936-1.66 1.25-.65.32-1.34.48-2.07.48-.4 0-.74-.03-1.01-.09zm-3.99.03c.34.09.64.13.91.13.42 0 .83-.09 1.22-.27.4-.18.74-.43 1.03-.76.29-.33.53-.71.7-1.14.18-.43.27-.88.27-1.36 0 .46.08.89.23 1.29.15.39.38.73.67-1.01-.3-.27-.65-.48-1.05-.63-.4-.14-.83-.21-1.28-.21-.42 0-.83.09-1.22.27-.39.18-.74.43-1.03.76-.29.33-.53.71-.7 1.14-.17.43-.26.88-.26 1.36 0 .46.08.89.23 1.29.15.39.38.73.67-1.01.3.27.65.48-1.05.63-.4-.14-.83-.21-1.28.21.26 0 .56-.04.91-.13z" />
                </svg>
                <div className="relative z-10">
                  <p className="text-muted-foreground mb-6">{t("testimonials.3.text")}</p>
                  <div className="flex items-center">
                    <Image
                      src="/p3.png?height=50&width=50"
                      alt="Customer"
                      width={50}
                      height={50}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-primary">{t("testimonials.3.name")}</h4>
                      <p className="text-sm text-muted-foreground">{t("testimonials.3.role")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("cta.title")}</h2>
              <p className="text-lg mb-8 text-white/90">{t("cta.subtitle")}</p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/reservations">{t("cta.button")}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
