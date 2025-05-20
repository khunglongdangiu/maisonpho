"use client"

import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ReservationForm } from "@/components/reservation-form"
import { Clock, Phone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ReservationsClientPage() {
  const { t } = useLanguage()

  return (
    <>
      <Navigation />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-muted py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">{t("reservation.title")}</h1>
              <p className="text-lg text-muted-foreground mb-0">{t("reservation.subtitle")}</p>
            </div>
          </div>
        </section>

        {/* Reservation Form Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <ReservationForm />
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-muted p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold text-primary mb-4">{t("reservation.hours.title")}</h2>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div className="text-muted-foreground">
                      <p>{t("reservation.hours.monThu")}</p>
                      <p>{t("reservation.hours.friSat")}</p>
                      <p>{t("reservation.hours.sun")}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold text-primary mb-4">{t("reservation.contact.title")}</h2>
                  <div className="flex items-start gap-3 mb-4">
                    <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{t("reservation.contact.phone")}</p>
                  </div>
                  <p className="text-muted-foreground">{t("reservation.contact.largeParty")}</p>
                </div>

                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Restaurant interior"
                    width={600}
                    height={400}
                    className="object-cover h-full w-full"
                  />
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
