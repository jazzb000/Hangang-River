"use client"

import Link from "next/link"
import Image from "next/image"
import {
  MapPin,
  Users,
  ShoppingBag,
  Tent,
  Share2,
  Calendar,
  Search,
  Bell,
  Heart,
  Clock,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import WeatherWidget from "@/components/weather-widget"
import PopularityMap from "@/components/popularity-map"
import MobileNav from "@/components/mobile-nav"
import LocationSelector from "@/components/location-selector"
import AICourseRecommendation from "@/components/ai-course-recommendation"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center gap-1 font-bold text-lg text-sky-600 mr-4">
            <MapPin className="h-5 w-5 text-sky-600" />
            <span className="hidden sm:inline">한강 플러스</span>
          </Link>

          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="검색"
              className="pl-8 bg-gray-50 border-gray-200 focus-visible:ring-sky-500 rounded-full"
            />
          </div>

          <nav className="ml-auto hidden md:flex items-center gap-1">
            <Link
              href="#"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-sky-600 rounded-md hover:bg-gray-100"
            >
              홈
            </Link>
            <Link
              href="/groups"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-sky-600 rounded-md hover:bg-gray-100"
            >
              모임
            </Link>
            <Link
              href="/rental"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-sky-600 rounded-md hover:bg-gray-100"
            >
              대여
            </Link>
            <Link
              href="/street-food"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-sky-600 rounded-md hover:bg-gray-100"
            >
              길거리음식
            </Link>
            <Link
              href="/events"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-sky-600 rounded-md hover:bg-gray-100"
            >
              이벤트
            </Link>
          </nav>

          <Button variant="ghost" size="icon" className="ml-2 relative">
            <Bell className="h-5 w-5 text-gray-700" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>

          <Button variant="ghost" size="icon" className="ml-1 md:ml-2 rounded-full">
            <img src="/abstract-profile.png" alt="프로필" className="rounded-full w-8 h-8" />
          </Button>
        </div>
      </header>

      <main className="flex-1 pb-16 md:pb-0">
        <div className="container py-2 px-2 md:px-4">
          <div className="grid gap-2 md:grid-cols-2 mb-3">
            <Card className="border-gray-200 shadow-sm rounded-xl overflow-hidden">
              <WeatherWidget />
            </Card>
            <Card className="border-gray-200 shadow-sm rounded-xl overflow-hidden">
              <PopularityMap />
            </Card>
          </div>

          <LocationSelector />

          {/* 빠른 서비스 섹션 */}
          <section className="mb-4">
            <h2 className="text-lg font-bold text-gray-800 mb-2">빠른 서비스</h2>
            <div className="grid grid-cols-4 gap-2">
              <Link href="/street-food" className="flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-sky-100 rounded-full mb-1">
                  <ShoppingBag className="h-6 w-6 text-sky-600" />
                </div>
                <span className="text-sm text-center text-gray-700">길거리음식</span>
              </Link>
              <Link href="/rental" className="flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-full mb-1">
                  <Tent className="h-6 w-6 text-orange-500" />
                </div>
                <span className="text-sm text-center text-gray-700">돗자리</span>
              </Link>
              <Link href="/share" className="flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full mb-1">
                  <Share2 className="h-6 w-6 text-green-600" />
                </div>
                <span className="text-sm text-center text-gray-700">물건공유</span>
              </Link>
              <Link href="/events" className="flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full mb-1">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <span className="text-sm text-center text-gray-700">이벤트</span>
              </Link>
            </div>
          </section>

          {/* AI 코스 추천 섹션 */}
          <AICourseRecommendation />

          {/* 오늘의 모임 섹션 */}
          <section className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold text-gray-800">오늘의 모임</h2>
              <Link href="/groups" className="flex items-center text-sm text-sky-600 font-medium">
                전체보기
                <ChevronRight className="h-4 w-4 ml-0.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                {
                  id: 1,
                  title: "여의도 선셋 러닝",
                  image: "/images/running-sunset.png",
                  location: "여의도",
                  time: "오후 6:00",
                  members: 25,
                  maxMembers: 30,
                  price: "무료",
                  tags: ["추천", "마감임박"],
                  liked: true,
                },
                {
                  id: 2,
                  title: "한강 피크닉 파티",
                  image: "/images/picnic-party.png",
                  location: "뚝섬",
                  time: "오후 2:00",
                  members: 18,
                  maxMembers: 20,
                  price: "5,000원",
                  tags: ["인기"],
                  liked: false,
                },
                {
                  id: 3,
                  title: "자전거 라이딩 투어",
                  image: "/images/cycling-tour.png",
                  location: "반포",
                  time: "오전 9:00",
                  members: 12,
                  maxMembers: 15,
                  price: "3,000원",
                  tags: ["주말"],
                  liked: false,
                },
              ].map((group) => (
                <Card
                  key={group.id}
                  className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl cursor-pointer"
                  onClick={() => (window.location.href = `/groups/${group.id}`)}
                >
                  <div className="relative aspect-[3/2]">
                    <Image src={group.image || "/placeholder.svg"} alt={group.title} fill className="object-cover" />
                    <div className="absolute top-2 left-2 flex gap-1">
                      {group.tags.map((tag, i) => (
                        <span
                          key={i}
                          className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                            tag === "추천"
                              ? "bg-sky-500 text-white"
                              : tag === "마감임박"
                                ? "bg-red-500 text-white"
                                : tag === "인기"
                                  ? "bg-orange-500 text-white"
                                  : "bg-gray-800 text-white"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      className="absolute top-2 right-2 w-8 h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center z-10"
                      onClick={(e) => {
                        e.stopPropagation()
                        // 좋아요 기능 구현 (예시)
                        console.log("좋아요 버튼 클릭")
                      }}
                    >
                      <Heart className={`h-4 w-4 ${group.liked ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
                    </button>
                  </div>
                  <div className="p-2">
                    <h3 className="font-medium text-sm text-gray-800 mb-1 line-clamp-1">{group.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <div className="flex items-center gap-0.5">
                        <MapPin className="h-3 w-3" />
                        <span>{group.location}</span>
                      </div>
                      <div className="flex items-center gap-0.5">
                        <Clock className="h-3 w-3" />
                        <span>{group.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3 text-gray-400" />
                        <span className="text-xs text-gray-600">
                          {group.members}/{group.maxMembers}명
                        </span>
                      </div>
                      <span className="text-sm font-bold text-sky-600">{group.price}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* 돗자리 대여 섹션 */}
          <section className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold text-gray-800">돗자리 대여</h2>
              <Link href="/rental" className="flex items-center text-sm text-sky-600 font-medium">
                전체보기
                <ChevronRight className="h-4 w-4 ml-0.5" />
              </Link>
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
          </section>

          {/* 한강 길거리 음식 섹션 */}
          <section>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold text-gray-800">한강 배달</h2>
              <Link href="/street-food" className="flex items-center text-sm text-sky-600 font-medium">
                전체보기
                <ChevronRight className="h-4 w-4 ml-0.5" />
              </Link>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {[
                {
                  name: "떡볶이",
                  price: "4,000원",
                  time: "10-15분",
                  location: "여의도",
                  image: "/images/tteokbokki-delivery.png",
                  rating: 4.5,
                  reviews: 328,
                  deliveryFee: "2,000원",
                },
                {
                  name: "붕어빵",
                  price: "3,000원",
                  time: "5-10분",
                  location: "반포",
                  image: "/images/bungeoppang-delivery.png",
                  rating: 4.6,
                  reviews: 412,
                  deliveryFee: "2,500원",
                },
                {
                  name: "호떡",
                  price: "2,000원",
                  time: "5-10분",
                  location: "뚝섬",
                  image: "/images/hotteok-delivery.png",
                  rating: 4.7,
                  reviews: 256,
                  deliveryFee: "3,000원",
                },
                {
                  name: "컵밥",
                  price: "5,000원",
                  time: "10-15분",
                  location: "잠실",
                  image: "/images/cupbap-delivery.png",
                  rating: 4.4,
                  reviews: 189,
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
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      <MobileNav />
    </div>
  )
}
