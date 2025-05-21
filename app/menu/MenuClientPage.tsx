"use client"

import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function MenuClientPage() {
  const { t } = useLanguage()

  return (
    <>
      <Navigation />

      <main className="pt-24">
        {/* Menu Header */}
        <section className="bg-muted py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">{t("fullMenu.title")}</h1>
              <p className="text-lg text-muted-foreground mb-0">{t("fullMenu.subtitle")}</p>
            </div>
          </div>
        </section>

        {/* Signature Pho Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">{t("fullMenu.sections.signaturePho")}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Menu Item 1 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt={t("fullMenu.phoRoyal.title")}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">{t("fullMenu.phoRoyal.title")}</h3>
                    <span className="text-lg font-medium text-primary ml-4">$24</span>
                  </div>
                  <p className="text-muted-foreground mb-2">{t("fullMenu.phoRoyal.desc")}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full mr-2">
                      {t("fullMenu.phoRoyal.tag1")}
                    </span>
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">
                      {t("fullMenu.phoRoyal.tag2")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Menu Item 2 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt={t("fullMenu.phoSeafood.title")}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">{t("fullMenu.phoSeafood.title")}</h3>
                    <span className="text-lg font-medium text-primary ml-4">$28</span>
                  </div>
                  <p className="text-muted-foreground mb-2">{t("fullMenu.phoSeafood.desc")}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full mr-2">
                      {t("fullMenu.phoSeafood.tag1")}
                    </span>
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">
                      {t("fullMenu.phoSeafood.tag2")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Menu Item 3 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt={t("fullMenu.phoVegetable.title")}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">{t("fullMenu.phoVegetable.title")}</h3>
                    <span className="text-lg font-medium text-primary ml-4">$22</span>
                  </div>
                  <p className="text-muted-foreground mb-2">{t("fullMenu.phoVegetable.desc")}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full mr-2">
                      {t("fullMenu.phoVegetable.tag1")}
                    </span>
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">
                      {t("fullMenu.phoVegetable.tag2")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Menu Item 4 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt={t("fullMenu.phoFilet.title")}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">{t("fullMenu.phoFilet.title")}</h3>
                    <span className="text-lg font-medium text-primary ml-4">$26</span>
                  </div>
                  <p className="text-muted-foreground mb-2">{t("fullMenu.phoFilet.desc")}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full mr-2">
                      {t("fullMenu.phoFilet.tag1")}
                    </span>
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">
                      {t("fullMenu.phoFilet.tag2")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Appetizers Section */}
        <section className="py-16 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">{t("fullMenu.sections.appetizers")}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Appetizer 1 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt={t("fullMenu.truffleSpringRolls.title")}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">{t("fullMenu.truffleSpringRolls.title")}</h3>
                    <span className="text-lg font-medium text-primary ml-4">$16</span>
                  </div>
                  <p className="text-muted-foreground mb-2">{t("fullMenu.truffleSpringRolls.desc")}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full mr-2">
                      {t("fullMenu.truffleSpringRolls.tag1")}
                    </span>
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">
                      {t("fullMenu.truffleSpringRolls.tag2")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Appetizer 2 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt={t("fullMenu.crispyImperialRolls.title")}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">{t("fullMenu.crispyImperialRolls.title")}</h3>
                    <span className="text-lg font-medium text-primary ml-4">$14</span>
                  </div>
                  <p className="text-muted-foreground mb-2">{t("fullMenu.crispyImperialRolls.desc")}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">
                      {t("fullMenu.crispyImperialRolls.tag1")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Appetizer 3 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt={t("fullMenu.lotusRootSalad.title")}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">{t("fullMenu.lotusRootSalad.title")}</h3>
                    <span className="text-lg font-medium text-primary ml-4">$18</span>
                  </div>
                  <p className="text-muted-foreground mb-2">{t("fullMenu.lotusRootSalad.desc")}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full mr-2">
                      {t("fullMenu.lotusRootSalad.tag1")}
                    </span>
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">
                      {t("fullMenu.lotusRootSalad.tag2")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Appetizer 4 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt={t("fullMenu.beefCarpaccio.title")}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">{t("fullMenu.beefCarpaccio.title")}</h3>
                    <span className="text-lg font-medium text-primary ml-4">$20</span>
                  </div>
                  <p className="text-muted-foreground mb-2">{t("fullMenu.beefCarpaccio.desc")}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full mr-2">
                      {t("fullMenu.beefCarpaccio.tag1")}
                    </span>
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">
                      {t("fullMenu.beefCarpaccio.tag2")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Courses Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">{t("fullMenu.sections.mainCourses")}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Main Course 1 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt={t("fullMenu.caramelizedPorkBelly.title")}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">{t("fullMenu.caramelizedPorkBelly.title")}</h3>
                    <span className="text-lg font-medium text-primary ml-4">$32</span>
                  </div>
                  <p className="text-muted-foreground mb-2">{t("fullMenu.caramelizedPorkBelly.desc")}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">
                      {t("fullMenu.caramelizedPorkBelly.tag1")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Main Course 2 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt={t("fullMenu.lemongrassSeabass.title")}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">{t("fullMenu.lemongrassSeabass.title")}</h3>
                    <span className="text-lg font-medium text-primary ml-4">$36</span>
                  </div>
                  <p className="text-muted-foreground mb-2">{t("fullMenu.lemongrassSeabass.desc")}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full mr-2">
                      {t("fullMenu.lemongrassSeabass.tag1")}
                    </span>
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">
                      {t("fullMenu.lemongrassSeabass.tag2")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Main Course 3 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt={t("fullMenu.fiveSpiceDuck.title")}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">{t("fullMenu.fiveSpiceDuck.title")}</h3>
                    <span className="text-lg font-medium text-primary ml-4">$34</span>
                  </div>
                  <p className="text-muted-foreground mb-2">{t("fullMenu.fiveSpiceDuck.desc")}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">
                      {t("fullMenu.fiveSpiceDuck.tag1")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Main Course 4 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt={t("fullMenu.grilledLemongrassBeef.title")}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">{t("fullMenu.grilledLemongrassBeef.title")}</h3>
                    <span className="text-lg font-medium text-primary ml-4">$30</span>
                  </div>
                  <p className="text-muted-foreground mb-2">{t("fullMenu.grilledLemongrassBeef.desc")}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full mr-2">
                      {t("fullMenu.grilledLemongrassBeef.tag1")}
                    </span>
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">
                      {t("fullMenu.grilledLemongrassBeef.tag2")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Desserts Section */}
        <section className="py-16 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">{t("fullMenu.sections.desserts")}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Dessert 1 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt={t("fullMenu.coconutPandanCremeBrulee.title")}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">
                      {t("fullMenu.coconutPandanCremeBrulee.title")}
                    </h3>
                    <span className="text-lg font-medium text-primary ml-4">$14</span>
                  </div>
                  <p className="text-muted-foreground mb-2">{t("fullMenu.coconutPandanCremeBrulee.desc")}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">
                      {t("fullMenu.coconutPandanCremeBrulee.tag1")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Dessert 2 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt={t("fullMenu.mangoStickyRice.title")}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">{t("fullMenu.mangoStickyRice.title")}</h3>
                    <span className="text-lg font-medium text-primary ml-4">$12</span>
                  </div>
                  <p className="text-muted-foreground mb-2">{t("fullMenu.mangoStickyRice.desc")}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full mr-2">
                      {t("fullMenu.mangoStickyRice.tag1")}
                    </span>
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">
                      {t("fullMenu.mangoStickyRice.tag2")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Dessert 3 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt={t("fullMenu.vietnameseCoffeeTiramisu.title")}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">
                      {t("fullMenu.vietnameseCoffeeTiramisu.title")}
                    </h3>
                    <span className="text-lg font-medium text-primary ml-4">$15</span>
                  </div>
                  <p className="text-muted-foreground mb-2">{t("fullMenu.vietnameseCoffeeTiramisu.desc")}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">
                      {t("fullMenu.vietnameseCoffeeTiramisu.tag1")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Dessert 4 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt={t("fullMenu.lycheeSorbet.title")}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">{t("fullMenu.lycheeSorbet.title")}</h3>
                    <span className="text-lg font-medium text-primary ml-4">$10</span>
                  </div>
                  <p className="text-muted-foreground mb-2">{t("fullMenu.lycheeSorbet.desc")}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full mr-2">
                      {t("fullMenu.lycheeSorbet.tag1")}
                    </span>
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">
                      {t("fullMenu.lycheeSorbet.tag2")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beverages Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">{t("fullMenu.sections.beverages")}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Beverage 1 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt={t("fullMenu.vietnameseCoffee.title")}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">{t("fullMenu.vietnameseCoffee.title")}</h3>
                    <span className="text-lg font-medium text-primary ml-4">$6</span>
                  </div>
                  <p className="text-muted-foreground mb-2">{t("fullMenu.vietnameseCoffee.desc")}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">
                      {t("fullMenu.vietnameseCoffee.tag1")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Beverage 2 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt={t("fullMenu.lemongrassGingerTea.title")}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">{t("fullMenu.lemongrassGingerTea.title")}</h3>
                    <span className="text-lg font-medium text-primary ml-4">$5</span>
                  </div>
                  <p className="text-muted-foreground mb-2">{t("fullMenu.lemongrassGingerTea.desc")}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">
                      {t("fullMenu.lemongrassGingerTea.tag1")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Beverage 3 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt={t("fullMenu.passionFruitMojito.title")}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">{t("fullMenu.passionFruitMojito.title")}</h3>
                    <span className="text-lg font-medium text-primary ml-4">$12</span>
                  </div>
                  <p className="text-muted-foreground mb-2">{t("fullMenu.passionFruitMojito.desc")}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">
                      {t("fullMenu.passionFruitMojito.tag1")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Beverage 4 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt={t("fullMenu.freshCoconut.title")}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">{t("fullMenu.freshCoconut.title")}</h3>
                    <span className="text-lg font-medium text-primary ml-4">$8</span>
                  </div>
                  <p className="text-muted-foreground mb-2">{t("fullMenu.freshCoconut.desc")}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full mr-2">
                      {t("fullMenu.freshCoconut.tag1")}
                    </span>
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">
                      {t("fullMenu.freshCoconut.tag2")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("fullMenu.cta.title")}</h2>
              <p className="text-lg mb-8 text-white/90">{t("fullMenu.cta.subtitle")}</p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/reservations">{t("fullMenu.cta.button")}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
