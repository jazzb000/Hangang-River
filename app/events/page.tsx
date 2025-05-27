"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin, Calendar, Filter, Search, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import MobileNav from "@/components/mobile-nav"
import LocationSelector from "@/components/location-selector"

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-14 items-center">
          <Link href="/" className="mr-2">
            <ArrowLeft className="h-5 w-5 text-gray-700" />
          </Link>
          <h1 className="text-lg font-bold text-gray-800">이벤트 & 공연</h1>

          <div className="relative flex-1 max-w-sm ml-4">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="이벤트 검색"
              className="pl-8 bg-gray-50 border-gray-200 focus-visible:ring-sky-500 rounded-full"
            />
          </div>

          <Button variant="ghost" size="icon" className="ml-2">
            <Filter className="h-5 w-5 text-gray-700" />
          </Button>
        </div>
      </header>

      <main className="flex-1 pb-16 md:pb-0">
        <div className="container py-2 px-2 md:px-4">
          <LocationSelector />

          <div className="mb-3">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold text-gray-800">진행중인 이벤트</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {[
                {
                  title: "한강 예술 전시회",
                  date: "2023.07.08 - 2023.07.30",
                  time: "10:00 - 19:00",
                  location: "여의도 한강공원",
                  status: "진행중",
                  image: "/images/event-art-exhibition.png",
                  description: "다양한 예술가들의 작품을 한강에서 만나볼 수 있는 특별한 전시회입니다.",
                },
                {
                  title: "한강 버스킹 페스티벌",
                  date: "2023.07.01 - 2023.07.31",
                  time: "17:00 - 21:00",
                  location: "반포 한강공원",
                  status: "진행중",
                  image: "/images/event-busking.png",
                  description: "매주 주말 한강에서 펼쳐지는 다양한 버스킹 공연을 즐겨보세요.",
                },
              ].map((event, i) => (
                <Card
                  key={i}
                  className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl cursor-pointer"
                  onClick={() => (window.location.href = `/events/${event.title.replace(/\s+/g, "-").toLowerCase()}`)}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-32 h-36 md:h-auto relative">
                      <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                    </div>
                    <div className="p-3 flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-bold text-base text-gray-800 mb-1">{event.title}</h3>
                          <div className="flex items-center gap-1 text-sm text-gray-500 mb-1">
                            <Calendar className="h-4 w-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-500 mb-1">
                            <Clock className="h-4 w-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
                            <MapPin className="h-4 w-4" />
                            <span>{event.location}</span>
                          </div>
                          <div className="text-sm text-gray-600 mb-3 line-clamp-2">{event.description}</div>
                          <Button
                            className="bg-sky-600 hover:bg-sky-700 text-white"
                            onClick={(e) => {
                              e.stopPropagation()
                              window.location.href = `/events/${event.title.replace(/\s+/g, "-").toLowerCase()}`
                            }}
                          >
                            자세히 보기
                          </Button>
                        </div>
                        <div
                          className={`text-xs font-medium px-2 py-1 rounded-full ${
                            event.status === "진행중" ? "bg-green-100 text-green-700" : "bg-sky-100 text-sky-700"
                          }`}
                        >
                          {event.status}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold text-gray-800">예정된 이벤트</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {[
                {
                  title: "한강 불꽃축제",
                  date: "2023.07.15",
                  time: "19:30 - 21:00",
                  location: "여의도 한강공원",
                  status: "예정",
                  image: "/images/fireworks.png",
                  description: "화려한 불꽃과 함께하는 환상적인 밤을 경험하세요.",
                },
                {
                  title: "한강 재즈 페스티벌",
                  date: "2023.07.22 - 2023.07.23",
                  time: "17:00 - 22:00",
                  location: "반포 한강공원",
                  status: "예정",
                  image: "/images/event-jazz.png",
                  description: "한강에서 펼쳐지는 감미로운 재즈 공연을 즐겨보세요.",
                },
                {
                  title: "한강 영화제",
                  date: "2023.08.05 - 2023.08.06",
                  time: "19:00 - 22:00",
                  location: "뚝섬 한강공원",
                  status: "예정",
                  image: "/images/movie-festival.png",
                  description: "한강을 배경으로 특별한 영화 상영회에 참여하세요.",
                },
                {
                  title: "한강 물놀이 축제",
                  date: "2023.08.12 - 2023.08.13",
                  time: "10:00 - 18:00",
                  location: "잠실 한강공원",
                  status: "예정",
                  image: "/images/event-water.png",
                  description: "온 가족이 함께 즐길 수 있는 시원한 물놀이 축제입니다.",
                },
              ].map((event, i) => (
                <Card
                  key={i}
                  className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl cursor-pointer"
                  onClick={() => (window.location.href = `/events/${event.title.replace(/\s+/g, "-").toLowerCase()}`)}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-32 h-36 md:h-auto relative">
                      <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                    </div>
                    <div className="p-3 flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-bold text-base text-gray-800 mb-1">{event.title}</h3>
                          <div className="flex items-center gap-1 text-sm text-gray-500 mb-1">
                            <Calendar className="h-4 w-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-500 mb-1">
                            <Clock className="h-4 w-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
                            <MapPin className="h-4 w-4" />
                            <span>{event.location}</span>
                          </div>
                          <div className="text-sm text-gray-600 mb-3 line-clamp-2">{event.description}</div>
                          <Button
                            className="bg-sky-600 hover:bg-sky-700 text-white"
                            onClick={(e) => {
                              e.stopPropagation()
                              window.location.href = `/events/${event.title.replace(/\s+/g, "-").toLowerCase()}`
                            }}
                          >
                            자세히 보기
                          </Button>
                        </div>
                        <div
                          className={`text-xs font-medium px-2 py-1 rounded-full ${
                            event.status === "진행중" ? "bg-green-100 text-green-700" : "bg-sky-100 text-sky-700"
                          }`}
                        >
                          {event.status}
                        </div>
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
