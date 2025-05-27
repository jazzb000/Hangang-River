"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin, Filter, Search, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import MobileNav from "@/components/mobile-nav"
import LocationSelector from "@/components/location-selector"

export default function RentalPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-14 items-center">
          <Link href="/" className="mr-2">
            <ArrowLeft className="h-5 w-5 text-gray-700" />
          </Link>
          <h1 className="text-lg font-bold text-gray-800">돗자리 대여</h1>

          <div className="relative flex-1 max-w-sm ml-4">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="검색"
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
              <h2 className="text-lg font-bold text-gray-800">인기 대여 상품</h2>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {[
                {
                  name: "기본 돗자리",
                  price: "3,000원",
                  location: "여의도",
                  image: "/images/mat-rental.png",
                  rating: 4.5,
                  reviews: 128,
                },
                {
                  name: "대형 돗자리",
                  price: "5,000원",
                  location: "반포",
                  image: "/images/mat-rental.png",
                  rating: 4.3,
                  reviews: 95,
                },
                {
                  name: "미니 텐트",
                  price: "10,000원",
                  location: "뚝섬",
                  image: "/images/tent-rental.png",
                  rating: 4.7,
                  reviews: 210,
                },
                {
                  name: "피크닉 세트",
                  price: "15,000원",
                  location: "잠실",
                  image: "/images/picnic-set.png",
                  rating: 4.8,
                  reviews: 64,
                },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl cursor-pointer"
                  onClick={() => (window.location.href = `/rental/${item.name.replace(/\s+/g, "-").toLowerCase()}`)}
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
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-3">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold text-gray-800">돗자리</h2>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {[
                {
                  name: "기본 돗자리",
                  price: "3,000원",
                  location: "여의도",
                  image: "/images/mat-rental.png",
                  rating: 4.5,
                  reviews: 128,
                },
                {
                  name: "대형 돗자리",
                  price: "5,000원",
                  location: "반포",
                  image: "/images/mat-rental.png",
                  rating: 4.3,
                  reviews: 95,
                },
                {
                  name: "방수 돗자리",
                  price: "4,000원",
                  location: "뚝섬",
                  image: "/images/mat-rental.png",
                  rating: 4.7,
                  reviews: 210,
                },
                {
                  name: "패턴 돗자리",
                  price: "4,500원",
                  location: "잠실",
                  image: "/images/mat-rental.png",
                  rating: 4.4,
                  reviews: 87,
                },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl cursor-pointer"
                  onClick={() => (window.location.href = `/rental/${item.name.replace(/\s+/g, "-").toLowerCase()}`)}
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
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold text-gray-800">텐트</h2>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {[
                {
                  name: "미니 텐트",
                  price: "10,000원",
                  location: "뚝섬",
                  image: "/images/tent-rental.png",
                  rating: 4.7,
                  reviews: 210,
                },
                {
                  name: "그늘막 텐트",
                  price: "12,000원",
                  location: "여의도",
                  image: "/images/tent-rental.png",
                  rating: 4.4,
                  reviews: 152,
                },
                {
                  name: "대형 텐트",
                  price: "15,000원",
                  location: "반포",
                  image: "/images/tent-rental.png",
                  rating: 4.6,
                  reviews: 89,
                },
                {
                  name: "방수 텐트",
                  price: "13,000원",
                  location: "잠실",
                  image: "/images/tent-rental.png",
                  rating: 4.5,
                  reviews: 112,
                },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl cursor-pointer"
                  onClick={() => (window.location.href = `/rental/${item.name.replace(/\s+/g, "-").toLowerCase()}`)}
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
