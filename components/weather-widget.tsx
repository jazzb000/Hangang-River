"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Wind, Droplets } from "lucide-react"

export default function WeatherWidget() {
  const [weather, setWeather] = useState({
    temperature: 24,
    condition: "맑음",
    humidity: 45,
    windSpeed: 3.2,
  })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 실제 구현에서는 날씨 API를 호출하여 데이터를 가져옵니다
    const fetchWeather = () => {
      // 여기서는 예시 데이터를 사용합니다
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }

    fetchWeather()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-32">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-sky-600"></div>
      </div>
    )
  }

  return (
    <div className="p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-sky-50 p-2 rounded-full relative w-12 h-12 overflow-hidden">
            <Image src="/images/weather-sunny.png" alt="맑음" fill className="object-cover rounded-full" />
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-800">{weather.temperature}°C</div>
            <div className="text-sm text-gray-500">한강 여의도 지역</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xl font-medium text-gray-700">{weather.condition}</div>
          <div className="text-sm text-gray-500">
            {new Date().toLocaleDateString("ko-KR", { month: "long", day: "numeric" })}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-2">
        <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
          <Droplets className="h-5 w-5 text-sky-500" />
          <div>
            <div className="text-gray-500 text-sm">습도</div>
            <div className="font-medium text-gray-700">{weather.humidity}%</div>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
          <Wind className="h-5 w-5 text-sky-500" />
          <div>
            <div className="text-gray-500 text-sm">풍속</div>
            <div className="font-medium text-gray-700">{weather.windSpeed}m/s</div>
          </div>
        </div>
      </div>
    </div>
  )
}
