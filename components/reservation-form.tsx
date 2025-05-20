"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { format } from "date-fns"
import { CalendarIcon, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

export function ReservationForm() {
  const { t } = useLanguage()
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    date: null as Date | null,
    time: "",
    specialRequests: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const timeSlots = [
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }))

    // Clear error when user selects
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleDateChange = (date: Date | null) => {
    setFormState((prev) => ({ ...prev, date }))

    // Clear error when user selects date
    if (errors.date) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors.date
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formState.name.trim()) {
      newErrors.name = t("reservation.form.required")
    }

    if (!formState.email.trim()) {
      newErrors.email = t("reservation.form.required")
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formState.phone.trim()) {
      newErrors.phone = t("reservation.form.required")
    }

    if (!formState.guests) {
      newErrors.guests = t("reservation.form.required")
    }

    if (!formState.date) {
      newErrors.date = t("reservation.form.required")
    }

    if (!formState.time) {
      newErrors.time = t("reservation.form.required")
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // In a real application, you would send this data to your backend
      console.log("Form submitted:", formState)
      setIsSubmitted(true)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-primary mb-4">{t("reservation.success.title")}</h3>
        <p className="text-muted-foreground mb-6">{t("reservation.success.message")}</p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-white"
        >
          {t("reservation.success.return")}
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-foreground">
            {t("reservation.form.name")} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            value={formState.name}
            onChange={handleInputChange}
            className={cn("border-input bg-background", errors.name && "border-red-500 focus-visible:ring-red-500")}
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground">
            {t("reservation.form.email")} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleInputChange}
            className={cn("border-input bg-background", errors.email && "border-red-500 focus-visible:ring-red-500")}
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-foreground">
            {t("reservation.form.phone")} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formState.phone}
            onChange={handleInputChange}
            className={cn("border-input bg-background", errors.phone && "border-red-500 focus-visible:ring-red-500")}
          />
          {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="guests" className="text-foreground">
            {t("reservation.form.guests")} <span className="text-red-500">*</span>
          </Label>
          <Select value={formState.guests} onValueChange={(value) => handleSelectChange("guests", value)}>
            <SelectTrigger
              id="guests"
              className={cn("border-input bg-background", errors.guests && "border-red-500 focus-visible:ring-red-500")}
            >
              <SelectValue placeholder="Select number of guests" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num} {num === 1 ? "guest" : "guests"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.guests && <p className="text-sm text-red-500">{errors.guests}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="date" className="text-foreground">
            {t("reservation.form.date")} <span className="text-red-500">*</span>
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal border-input",
                  !formState.date && "text-muted-foreground",
                  errors.date && "border-red-500 focus-visible:ring-red-500",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {formState.date ? format(formState.date, "PPP") : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={formState.date || undefined}
                onSelect={handleDateChange}
                initialFocus
                disabled={(date) => date < new Date()}
              />
            </PopoverContent>
          </Popover>
          {errors.date && <p className="text-sm text-red-500">{errors.date}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="time" className="text-foreground">
            {t("reservation.form.time")} <span className="text-red-500">*</span>
          </Label>
          <Select value={formState.time} onValueChange={(value) => handleSelectChange("time", value)}>
            <SelectTrigger
              id="time"
              className={cn("border-input bg-background", errors.time && "border-red-500 focus-visible:ring-red-500")}
            >
              <SelectValue placeholder="Select time">
                {formState.time ? (
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    {formState.time}
                  </div>
                ) : (
                  "Select time"
                )}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((time) => (
                <SelectItem key={time} value={time}>
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.time && <p className="text-sm text-red-500">{errors.time}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="specialRequests" className="text-foreground">
          {t("reservation.form.specialRequests")}
        </Label>
        <Textarea
          id="specialRequests"
          name="specialRequests"
          value={formState.specialRequests}
          onChange={handleInputChange}
          className="border-input bg-background min-h-[100px]"
        />
      </div>

      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
        {t("reservation.form.submit")}
      </Button>
    </form>
  )
}
