"use client"

import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function LocationClientPage() {
  const { t } = useLanguage()

  return (
    <>
      <Navigation />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-muted py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">{t("location.title")}</h1>
              <p className="text-lg text-muted-foreground mb-0">{t("location.subtitle")}</p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 h-[500px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215175515263!2d-73.98784492404045!3d40.75784623440235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1716034210000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Restaurant Location"
                  aria-label="Google Maps showing our restaurant location"
                />
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary">{t("location.address.title")}</h2>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      123 Elegance Avenue, Luxury District
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary">{t("location.hours.title")}</h2>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div className="text-muted-foreground">
                      <p>Monday - Thursday: 11:30 AM - 10:00 PM</p>
                      <p>Friday - Saturday: 11:30 AM - 11:00 PM</p>
                      <p>Sunday: 12:00 PM - 9:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary">{t("location.parking.title")}</h2>
                  <p className="text-muted-foreground">{t("location.parking.desc")}</p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary">{t("location.reservations.title")}</h2>
                  <p className="text-muted-foreground">{t("location.reservations.desc")}</p>
                  <Button className="bg-primary hover:bg-primary/90 text-white">{t("nav.reservations")}</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Restaurant Images */}
        <section className="py-16 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-semibold text-primary mb-8 text-center">Our Space</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Restaurant exterior"
                  width={600}
                  height={400}
                  className="object-cover h-full w-full"
                />
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
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Private dining room"
                  width={600}
                  height={400}
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Private Events */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-semibold text-primary mb-6">{t("location.privateEvents.title")}</h2>
                <p className="text-muted-foreground mb-6">{t("location.privateEvents.desc")}</p>
                <Button className="bg-primary hover:bg-primary/90 text-white">Inquire About Private Events</Button>
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Private event setup"
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
