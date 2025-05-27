"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { MapPin } from "lucide-react"

export default function PopularityMap() {
  const [loading, setLoading] = useState(true)
  const [locations, setLocations] = useState([
    { id: 1, name: "여의도", density: "혼잡", color: "bg-red-500", percentage: "85%" },
    { id: 2, name: "반포", density: "보통", color: "bg-yellow-500", percentage: "60%" },
    { id: 3, name: "뚝섬", density: "여유", color: "bg-green-500", percentage: "30%" },
    { id: 4, name: "잠실", density: "보통", color: "bg-yellow-500", percentage: "55%" },
    { id: 5, name: "망원", density: "여유", color: "bg-green-500", percentage: "25%" },
  ])

  useEffect(() => {
    // 실제 구현에서는 API를 호출하여 데이터를 가져옵니다
    const fetchDensityData = () => {
      // 여기서는 예시 데이터를 사용합니다
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }

    fetchDensityData()
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
      <div className="flex items-center justify-between mb-2">
        <div className="text-base font-bold text-gray-800">실시간 인구 밀도</div>
        <div className="text-sm text-gray-500">
          {new Date().toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" })} 기준
        </div>
      </div>

      <div className="relative w-full h-32 mb-2 rounded-xl overflow-hidden">
        <Image src="/images/hangang-map.png" alt="한강 지도" fill className="object-cover" />
        {locations.map((location, index) => (
          <div
            key={location.id}
            className={`absolute w-5 h-5 rounded-full ${location.color} animate-pulse`}
            style={{
              top: `${20 + index * 15}%`,
              left: `${15 + index * 15}%`,
            }}
          />
        ))}
      </div>

      <div className="space-y-2">
        {locations.map((location) => (
          <div key={location.id} className="bg-gray-50 p-2 rounded-xl">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">{location.name}</span>
              </div>
              <div
                className={`text-sm font-medium ${
                  location.density === "혼잡"
                    ? "text-red-500"
                    : location.density === "보통"
                      ? "text-yellow-500"
                      : "text-green-500"
                }`}
              >
                {location.density}
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className={`h-2 rounded-full ${location.color}`} style={{ width: location.percentage }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
