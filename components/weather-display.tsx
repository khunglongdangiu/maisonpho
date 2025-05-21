"use client"

import { useState, useEffect } from "react"
import { Cloud, CloudRain, CloudSnow, Sun, CloudSun, CloudFog, Wind, Thermometer } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

// Default coordinates for District 1, Ho Chi Minh City
const DEFAULT_LATITUDE = 10.7769
const DEFAULT_LONGITUDE = 106.7009

interface WeatherData {
  temperature: number
  weatherCode: number
  windSpeed: number
  humidity: number
}

export function WeatherDisplay() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [locationName, setLocationName] = useState<string | null>(null)
  const { t, language } = useLanguage()

  useEffect(() => {
    async function fetchWeather(latitude: number, longitude: number) {
      try {
        setLoading(true)
        setError(null)

        // Fetch weather data from Open-Meteo API
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto`,
        )

        if (!response.ok) {
          throw new Error("Failed to fetch weather data")
        }

        const data = await response.json()

        setWeatherData({
          temperature: data.current.temperature_2m,
          weatherCode: data.current.weather_code,
          windSpeed: data.current.wind_speed_10m,
          humidity: data.current.relative_humidity_2m,
        })

        // Try to get location name using reverse geocoding
        try {
          const geoResponse = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10&accept-language=${language}`,
          )
          if (geoResponse.ok) {
            const geoData = await geoResponse.json()
            setLocationName(geoData.address.city || geoData.address.town || geoData.address.state)
          }
        } catch (geoError) {
          console.error("Error fetching location name:", geoError)
          setLocationName(language === "en" ? "Current Location" : "Vị Trí Hiện Tại")
        }
      } catch (err) {
        console.error("Error fetching weather:", err)
        setError(language === "en" ? "Failed to load weather data" : "Không thể tải dữ liệu thời tiết")
      } finally {
        setLoading(false)
      }
    }

    function getUserLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            fetchWeather(position.coords.latitude, position.coords.longitude)
          },
          (error) => {
            console.log("Geolocation permission denied or error:", error)
            // Use default location (District 1, HCMC)
            fetchWeather(DEFAULT_LATITUDE, DEFAULT_LONGITUDE)
            setLocationName(language === "en" ? "Ho Chi Minh City" : "Thành phố Hồ Chí Minh")
          },
        )
      } else {
        // Geolocation not supported
        fetchWeather(DEFAULT_LATITUDE, DEFAULT_LONGITUDE)
        setLocationName(language === "en" ? "Ho Chi Minh City" : "Thành phố Hồ Chí Minh")
        setError(
          language === "en" ? "Geolocation is not supported by your browser" : "Trình duyệt không hỗ trợ định vị",
        )
      }
    }

    getUserLocation()
  }, [language])

  // Function to get weather icon based on weather code
  function getWeatherIcon(code: number) {
    // WMO Weather interpretation codes (https://open-meteo.com/en/docs)
    if (code === 0) return <Sun className="h-6 w-6 text-yellow-500" />
    if (code === 1) return <CloudSun className="h-6 w-6 text-yellow-500" />
    if (code >= 2 && code <= 3) return <Cloud className="h-6 w-6 text-gray-500" />
    if (code >= 45 && code <= 48) return <CloudFog className="h-6 w-6 text-gray-500" />
    if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return <CloudRain className="h-6 w-6 text-blue-500" />
    if (code >= 71 && code <= 77) return <CloudSnow className="h-6 w-6 text-blue-200" />
    if (code >= 85 && code <= 86) return <CloudSnow className="h-6 w-6 text-blue-200" />
    if (code >= 95 && code <= 99) return <CloudRain className="h-6 w-6 text-blue-700" />
    return <Cloud className="h-6 w-6 text-gray-500" />
  }

  // Function to get weather description based on weather code
  function getWeatherDescription(code: number) {
    if (language === "en") {
      if (code === 0) return "Clear sky"
      if (code === 1) return "Mainly clear"
      if (code === 2) return "Partly cloudy"
      if (code === 3) return "Overcast"
      if (code >= 45 && code <= 48) return "Fog"
      if (code >= 51 && code <= 55) return "Drizzle"
      if (code >= 56 && code <= 57) return "Freezing Drizzle"
      if (code >= 61 && code <= 65) return "Rain"
      if (code >= 66 && code <= 67) return "Freezing Rain"
      if (code >= 71 && code <= 77) return "Snow"
      if (code >= 80 && code <= 82) return "Rain showers"
      if (code >= 85 && code <= 86) return "Snow showers"
      if (code >= 95 && code <= 99) return "Thunderstorm"
      return "Unknown"
    } else {
      if (code === 0) return "Trời quang"
      if (code === 1) return "Chủ yếu quang"
      if (code === 2) return "Có mây rải rác"
      if (code === 3) return "Nhiều mây"
      if (code >= 45 && code <= 48) return "Sương mù"
      if (code >= 51 && code <= 55) return "Mưa phùn"
      if (code >= 56 && code <= 57) return "Mưa phùn đóng băng"
      if (code >= 61 && code <= 65) return "Mưa"
      if (code >= 66 && code <= 67) return "Mưa đóng băng"
      if (code >= 71 && code <= 77) return "Tuyết"
      if (code >= 80 && code <= 82) return "Mưa rào"
      if (code >= 85 && code <= 86) return "Tuyết rơi"
      if (code >= 95 && code <= 99) return "Giông bão"
      return "Không xác định"
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-2 bg-muted/50 rounded-lg">
        <div className="animate-spin h-5 w-5 border-2 border-primary border-t-transparent rounded-full mr-2"></div>
        <span className="text-sm text-muted-foreground">
          {language === "en" ? "Loading weather..." : "Đang tải..."}
        </span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-2 bg-muted/50 rounded-lg">
        <p className="text-sm text-muted-foreground">{error}</p>
      </div>
    )
  }

  if (!weatherData) return null

  return (
    <div className="bg-muted/50 rounded-lg p-3 text-center">
      <div className="flex items-center justify-center gap-2 mb-1">
        {locationName && <span className="text-sm font-medium">{locationName}</span>}
        <span className="text-xs text-muted-foreground">•</span>
        <span className="text-sm">{new Date().toLocaleDateString(language === "en" ? "en-US" : "vi-VN")}</span>
      </div>

      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center">
          {getWeatherIcon(weatherData.weatherCode)}
          <span className="ml-1 text-sm">{getWeatherDescription(weatherData.weatherCode)}</span>
        </div>

        <div className="flex items-center">
          <Thermometer className="h-4 w-4 text-red-500" />
          <span className="ml-1 text-sm">{weatherData.temperature}°C</span>
        </div>

        <div className="flex items-center">
          <Wind className="h-4 w-4 text-blue-500" />
          <span className="ml-1 text-sm">{weatherData.windSpeed} km/h</span>
        </div>
      </div>
    </div>
  )
}
