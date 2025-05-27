"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Filter, Search, ShoppingCart, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import MobileNav from "@/components/mobile-nav"
import LocationSelector from "@/components/location-selector"

export default function StreetFoodPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-14 items-center">
          <Link href="/" className="mr-2">
            <ArrowLeft className="h-5 w-5 text-gray-700" />
          </Link>
          <h1 className="text-lg font-bold text-gray-800">한강 배달</h1>

          <div className="relative flex-1 max-w-sm ml-4">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="메뉴 검색"
              className="pl-8 bg-gray-50 border-gray-200 focus-visible:ring-sky-500 rounded-full"
            />
          </div>

          <Button variant="ghost" size="icon" className="ml-2">
            <Filter className="h-5 w-5 text-gray-700" />
          </Button>

          <Button variant="ghost" size="icon" className="ml-2 relative">
            <ShoppingCart className="h-5 w-5 text-gray-700" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>
        </div>
      </header>

      <main className="flex-1 pb-16 md:pb-0">
        <div className="container py-2 px-2 md:px-4">
          <LocationSelector />

          <div className="mb-3">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold text-gray-800">인기 메뉴</h2>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {[
                {
                  name: "매콤 떡볶이",
                  price: "4,000원",
                  time: "10-15분",
                  image: "/images/tteokbokki-delivery.png",
                  rating: 4.5,
                  reviews: 328,
                  location: "여의도",
                  deliveryFee: "2,000원",
                },
                {
                  name: "슈크림 붕어빵",
                  price: "3,000원",
                  time: "5-10분",
                  image: "/images/bungeoppang-delivery.png",
                  rating: 4.6,
                  reviews: 412,
                  location: "반포",
                  deliveryFee: "2,500원",
                },
                {
                  name: "꿀 호떡",
                  price: "2,000원",
                  time: "5-10분",
                  image: "/images/hotteok-delivery.png",
                  rating: 4.7,
                  reviews: 256,
                  location: "뚝섬",
                  deliveryFee: "3,000원",
                },
                {
                  name: "불고기 컵밥",
                  price: "5,000원",
                  time: "10-15분",
                  image: "/images/cupbap-delivery.png",
                  rating: 4.4,
                  reviews: 189,
                  location: "잠실",
                  deliveryFee: "2,500원",
                },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl cursor-pointer"
                  onClick={() =>
                    (window.location.href = `/street-food/${item.name.replace(/\s+/g, "-").toLowerCase()}`)
                  }
                >
                  <div className="relative aspect-[4/3]">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    <div className="absolute top-2 right-2 px-2 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-bold text-sky-600">
                      {item.price}
                    </div>
                  </div>
                  <div className="p-2">
                    <h3 className="font-medium text-sm text-gray-800 mb-1">{item.name}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-gray-500">
                        <MapPin className="h-3 w-3 inline mr-0.5" />
                        {item.location}
                      </div>
                      <div className="flex items-center text-xs">
                        <span className="text-yellow-500">★</span>
                        <span className="ml-1 text-gray-700">{item.rating}</span>
                        <span className="ml-1 text-gray-500">({item.reviews})</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <div className="text-xs text-gray-500">
                        <Clock className="h-3 w-3 inline mr-0.5" />
                        {item.time}
                      </div>
                      <div className="text-xs text-gray-500">배달비 {item.deliveryFee}</div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full mt-1 text-xs h-7"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.location.href = `/street-food/${item.name.replace(/\s+/g, "-").toLowerCase()}`
                      }}
                    >
                      <ShoppingCart className="h-3 w-3 mr-1" />
                      주문하기
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-3">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold text-gray-800">떡볶이</h2>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {[
                {
                  name: "매콤 떡볶이",
                  price: "4,000원",
                  time: "10-15분",
                  image: "/images/tteokbokki-delivery.png",
                  rating: 4.5,
                  reviews: 328,
                  location: "여의도",
                  deliveryFee: "2,000원",
                },
                {
                  name: "치즈 떡볶이",
                  price: "5,000원",
                  time: "10-15분",
                  image: "/images/tteokbokki-delivery.png",
                  rating: 4.7,
                  reviews: 521,
                  location: "여의도",
                  deliveryFee: "2,000원",
                },
                {
                  name: "로제 떡볶이",
                  price: "5,500원",
                  time: "10-15분",
                  image: "/images/tteokbokki-delivery.png",
                  rating: 4.6,
                  reviews: 245,
                  location: "반포",
                  deliveryFee: "2,500원",
                },
                {
                  name: "국물 떡볶이",
                  price: "4,500원",
                  time: "10-15분",
                  image: "/images/tteokbokki-delivery.png",
                  rating: 4.4,
                  reviews: 187,
                  location: "뚝섬",
                  deliveryFee: "3,000원",
                },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl cursor-pointer"
                  onClick={() =>
                    (window.location.href = `/street-food/${item.name.replace(/\s+/g, "-").toLowerCase()}`)
                  }
                >
                  <div className="relative aspect-[4/3]">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    <div className="absolute top-2 right-2 px-2 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-bold text-sky-600">
                      {item.price}
                    </div>
                  </div>
                  <div className="p-2">
                    <h3 className="font-medium text-sm text-gray-800 mb-1">{item.name}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-gray-500">
                        <MapPin className="h-3 w-3 inline mr-0.5" />
                        {item.location}
                      </div>
                      <div className="flex items-center text-xs">
                        <span className="text-yellow-500">★</span>
                        <span className="ml-1 text-gray-700">{item.rating}</span>
                        <span className="ml-1 text-gray-500">({item.reviews})</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <div className="text-xs text-gray-500">
                        <Clock className="h-3 w-3 inline mr-0.5" />
                        {item.time}
                      </div>
                      <div className="text-xs text-gray-500">배달비 {item.deliveryFee}</div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full mt-1 text-xs h-7"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.location.href = `/street-food/${item.name.replace(/\s+/g, "-").toLowerCase()}`
                      }}
                    >
                      <ShoppingCart className="h-3 w-3 mr-1" />
                      주문하기
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold text-gray-800">붕어빵</h2>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {[
                {
                  name: "슈크림 붕어빵",
                  price: "3,000원",
                  time: "5-10분",
                  image: "/images/bungeoppang-delivery.png",
                  rating: 4.6,
                  reviews: 412,
                  location: "반포",
                  deliveryFee: "2,500원",
                },
                {
                  name: "팥 붕어빵",
                  price: "2,500원",
                  time: "5-10분",
                  image: "/images/bungeoppang-delivery.png",
                  rating: 4.5,
                  reviews: 312,
                  location: "여의도",
                  deliveryFee: "2,000원",
                },
                {
                  name: "크림치즈 붕어빵",
                  price: "3,500원",
                  time: "5-10분",
                  image: "/images/bungeoppang-delivery.png",
                  rating: 4.7,
                  reviews: 156,
                  location: "뚝섬",
                  deliveryFee: "3,000원",
                },
                {
                  name: "초코 붕어빵",
                  price: "3,000원",
                  time: "5-10분",
                  image: "/images/bungeoppang-delivery.png",
                  rating: 4.4,
                  reviews: 98,
                  location: "잠실",
                  deliveryFee: "2,500원",
                },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl cursor-pointer"
                  onClick={() =>
                    (window.location.href = `/street-food/${item.name.replace(/\s+/g, "-").toLowerCase()}`)
                  }
                >
                  <div className="relative aspect-[4/3]">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    <div className="absolute top-2 right-2 px-2 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-bold text-sky-600">
                      {item.price}
                    </div>
                  </div>
                  <div className="p-2">
                    <h3 className="font-medium text-sm text-gray-800 mb-1">{item.name}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-gray-500">
                        <MapPin className="h-3 w-3 inline mr-0.5" />
                        {item.location}
                      </div>
                      <div className="flex items-center text-xs">
                        <span className="text-yellow-500">★</span>
                        <span className="ml-1 text-gray-700">{item.rating}</span>
                        <span className="ml-1 text-gray-500">({item.reviews})</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <div className="text-xs text-gray-500">
                        <Clock className="h-3 w-3 inline mr-0.5" />
                        {item.time}
                      </div>
                      <div className="text-xs text-gray-500">배달비 {item.deliveryFee}</div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full mt-1 text-xs h-7"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.location.href = `/street-food/${item.name.replace(/\s+/g, "-").toLowerCase()}`
                      }}
                    >
                      <ShoppingCart className="h-3 w-3 mr-1" />
                      주문하기
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <MobileNav />
    </div>
  )
}
