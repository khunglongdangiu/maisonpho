"use client"

import Link from "next/link"
import { MapPin, Phone, Clock, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer id="location" className="bg-muted">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="font-playfair text-2xl font-semibold text-primary">Maison Pho</h3>
              <p className="text-muted-foreground max-w-md">{t("footer.description")}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  {t("footer.address")}
                  <br />
                  {t("footer.city")}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <p className="text-muted-foreground">(212) 555-8765</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <p className="text-muted-foreground">contact@maisonpho.com</p>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="text-muted-foreground">
                  <p>{t("footer.hours.monThu")}</p>
                  <p>{t("footer.hours.friSat")}</p>
                  <p>{t("footer.hours.sun")}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="h-10 w-10 flex items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>

                <Link
                  href="#"
                  className="h-10 w-10 flex items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>

                <Link
                  href="#"
                  className="h-10 w-10 flex items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>

                 <Link
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <Image
                    src="/tripadvisor.svg"
                    alt="TripAdvisor"
                    width={18}
                    height={18}
                  />
                  <span className="sr-only">TripAdvisor</span>
                </Link>
              </div>

              {/* payment section */}
              <div className="pt-4 border-t border-border/30">
                <p className="text-sm text-muted-foreground mb-2">{t("footer.payments")}</p>
                <div className="flex gap-3">
                  <div className="h-8 w-12 bg-white rounded flex items-center justify-center shadow-sm">
                      <Image src="/contactlesspayment.svg" alt="Apple Pay" width={28} height={20} />
                  </div>
                  <div className="h-8 w-12 bg-white rounded flex items-center justify-center shadow-sm">
                    <Image src="/visa.svg" alt="Visa" width={28} height={20} />
                  </div>
                  <div className="h-8 w-12 bg-white rounded flex items-center justify-center shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 28 20">
                      <path fill="#FF5F00" d="M10.6 6.4h6.8v7.2h-6.8z" />
                      <path
                        fill="#EB001B"
                        d="M11.5 10a4.7 4.7 0 0 1 1.8-3.6 4.7 4.7 0 0 0-2.9-.9 4.7 4.7 0 0 0 0 9.4 4.7 4.7 0 0 0 2.9-1 4.7 4.7 0 0 1-1.8-3.9z"
                      />
                      <path
                        fill="#F79E1B"
                        d="M21 10c0 2.6-2.1 4.7-4.7 4.7a4.7 4.7 0 0 1-2.9-1 4.7 4.7 0 0 0 1.8-3.7c0-1.4-.6-2.7-1.8-3.6a4.7 4.7 0 0 1 2.9-.9c2.6 0 4.7 2 4.7 4.5z"
                      />
                    </svg>
                  </div>
                  <div className="h-8 w-12 bg-white rounded flex items-center justify-center shadow-sm">
                      <Image src="/applepay.svg" alt="Apple Pay" width={28} height={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
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
        </div>
      </div>

      <div className="border-t border-border/30">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">{t("footer.copyright")}</p>

          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
