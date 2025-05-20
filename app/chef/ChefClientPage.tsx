"use client"

import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"

export default function ChefClientPage() {
  const { t } = useLanguage()

  return (
    <>
      <Navigation />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-muted py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">{t("chef.title")}</h1>
              <p className="text-lg text-muted-foreground mb-0">{t("chef.subtitle")}</p>
            </div>
          </div>
        </section>

        {/* Chef Bio */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative order-2 lg:order-1">
                <div className="aspect-[4/5] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=800&width=640"
                    alt="Chef Minh Nguyen"
                    width={640}
                    height={800}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-accent rounded-lg -z-10"></div>
                <div className="absolute -top-6 -right-6 w-48 h-48 bg-secondary rounded-lg -z-10"></div>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-2xl font-semibold text-primary mb-6">{t("chef.bio.title")}</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>{t("chef.bio.p1")}</p>
                  <p>{t("chef.bio.p2")}</p>
                  <p>{t("chef.bio.p3")}</p>
                </div>

                <div className="mt-8 p-6 bg-muted rounded-lg">
                  <h3 className="text-xl font-semibold text-primary mb-4">{t("chef.philosophy.title")}</h3>
                  <p className="text-muted-foreground italic">{t("chef.philosophy.desc")}</p>
                </div>
              </div>
            </div>

            {/* Signature Techniques */}
            <div className="bg-muted p-12 rounded-lg">
              <h2 className="text-3xl font-semibold text-primary mb-8 text-center">{t("chef.signature.title")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
                      <line x1="6" x2="18" y1="17" y2="17" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{t("chef.signature.broth")}</h3>
                  <p className="text-muted-foreground">
                    Our signature broths are simmered for over 24 hours to develop complex flavors and depth.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                      <path d="M12 6a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{t("chef.signature.herbs")}</h3>
                  <p className="text-muted-foreground">
                    Each dish features a unique combination of fresh herbs, carefully selected to complement the
                    flavors.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                      <line x1="3" x2="21" y1="9" y2="9" />
                      <line x1="3" x2="21" y1="15" y2="15" />
                      <line x1="9" x2="9" y1="3" y2="21" />
                      <line x1="15" x2="15" y1="3" y2="21" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{t("chef.signature.presentation")}</h3>
                  <p className="text-muted-foreground">
                    Every dish is presented with artistic flair, elevating the dining experience to new heights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-semibold text-primary mb-8 text-center">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Chef in action"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Chef preparing dish"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Chef with team"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Chef's signature dish"
                  width={400}
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
