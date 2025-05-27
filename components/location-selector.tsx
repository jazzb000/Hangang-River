"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"

export default function LocationSelector() {
  const [selectedLocation, setSelectedLocation] = useState("여의도")

  const locations = ["여의도", "반포", "뚝섬", "잠실", "망원", "광나루", "이촌", "양화"]

  return (
    <div className="mb-3">
      <div className="flex items-center mb-1">
        <MapPin className="h-4 w-4 text-sky-600 mr-1" />
        <h2 className="text-base font-bold text-gray-800">지역 선택</h2>
      </div>

      <div className="flex overflow-x-auto pb-2 -mx-2 px-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex gap-2">
          {locations.map((location) => (
            <button
              key={location}
              onClick={() => setSelectedLocation(location)}
              className={`px-3 py-1 rounded-full text-xs whitespace-nowrap ${
                selectedLocation === location
                  ? "bg-sky-600 text-white font-medium"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {location}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
