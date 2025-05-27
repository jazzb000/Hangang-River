"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Heart, Users, MapPin, Filter, Search, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import MobileNav from "@/components/mobile-nav"
import LocationSelector from "@/components/location-selector"

export default function GroupsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-14 items-center">
          <Link href="/" className="mr-2">
            <ArrowLeft className="h-5 w-5 text-gray-700" />
          </Link>
          <h1 className="text-lg font-bold text-gray-800">모임</h1>

          <div className="relative flex-1 max-w-sm ml-4">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="모임 검색"
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

          {/* 메인 배너 섹션 */}
          <section className="mb-4">
            <div className="relative w-full h-48 md:h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-sky-100 to-blue-200">
              <div className="absolute inset-0 flex items-center justify-between p-6">
                <div className="flex-1">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                    한강에서 만나는
                    <br />
                    특별한 모임
                  </h1>
                  <p className="text-gray-600 text-sm md:text-base mb-4">
                    새로운 사람들과 함께하는 즐거운 시간을 만들어보세요
                  </p>
                  <Button className="bg-sky-600 hover:bg-sky-700 text-white">모임 만들기</Button>
                </div>
                <div className="hidden md:block relative w-48 h-32">
                  <Image src="/images/group-collage.png" alt="모임 사진들" fill className="object-cover rounded-xl" />
                </div>
              </div>
            </div>
          </section>

          {/* 이런 모임 어때요? 섹션 */}
          <section className="mb-4">
            <h2 className="text-xl font-bold text-gray-800 mb-3">이런 모임 어때요? 🎉</h2>
            <div className="grid grid-cols-5 gap-2">
              {[
                { name: "추천 호스트", icon: "❤️", color: "bg-gray-50 text-gray-600" },
                { name: "소규모 모임", icon: "😊", color: "bg-gray-50 text-gray-600" },
                { name: "주말 모임", icon: "📅", color: "bg-gray-50 text-gray-600" },
                { name: "당일 모임", icon: "⏰", color: "bg-gray-50 text-gray-600" },
                { name: "대규모 모임", icon: "🎭", color: "bg-gray-50 text-gray-600" },
                { name: "모임 공간", icon: "🏠", color: "bg-gray-50 text-gray-600" },
                { name: "봄과 여름", icon: "🌱", color: "bg-gray-50 text-gray-600" },
                { name: "뜻밖의 휴일", icon: "🍀", color: "bg-gray-50 text-gray-600" },
                { name: "이 봄, 우리", icon: "💕", color: "bg-gray-50 text-gray-600" },
                { name: "봄바람 타고", icon: "🎒", color: "bg-gray-50 text-gray-600" },
              ].map((category, index) => (
                <div
                  key={index}
                  className={`${category.color} p-2 rounded-xl text-center cursor-pointer hover:scale-105 transition-transform hover:bg-gray-100`}
                  onClick={() => console.log(`${category.name} 카테고리 선택`)}
                >
                  <div className="text-xl mb-1">{category.icon}</div>
                  <div className="text-[10px] font-medium">{category.name}</div>
                </div>
              ))}
            </div>
          </section>

          {/* 인기 모임 섹션 */}
          <section className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold text-gray-800">지금 인기있는 모임 🔥</h2>
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
                    <h3 className="font-medium text-sm text-gray-800 mb-1 line-clamp-2">{group.title}</h3>
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

          {/* 취향 저격 모임 섹션 */}
          <section className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold text-gray-800">나에게 딱 맞는 모임 💝</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                {
                  id: 4,
                  title: "한강에서 요가하는 20대 모임",
                  image: "/images/yoga-group.png",
                  location: "여의도",
                  time: "오전 7:00",
                  members: 8,
                  maxMembers: 12,
                  price: "무료",
                  tags: ["조용함"],
                  liked: false,
                },
                {
                  id: 5,
                  title: "대학생 한강 수다 모임",
                  image: "/images/chat-group.png",
                  location: "뚝섬",
                  time: "오후 4:00",
                  members: 15,
                  maxMembers: 20,
                  price: "무료",
                  tags: ["20대"],
                  liked: true,
                },
                {
                  id: 6,
                  title: "한강 독서 모임",
                  image: "/images/reading-group.png",
                  location: "망원",
                  time: "오후 2:00",
                  members: 6,
                  maxMembers: 10,
                  price: "무료",
                  tags: ["조용함"],
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
                        <span key={i} className="px-2 py-0.5 text-xs font-medium rounded-full bg-gray-800 text-white">
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
                    <h3 className="font-medium text-sm text-gray-800 mb-1 line-clamp-2">{group.title}</h3>
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

          {/* 추천 모임 섹션 */}
          <section>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold text-gray-800">이번 주 추천 모임 ✨</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                {
                  id: 7,
                  title: "아침 러닝 크루",
                  image: "/images/morning-run.png",
                  location: "잠실",
                  time: "오전 6:00",
                  members: 20,
                  maxMembers: 25,
                  price: "무료",
                  tags: ["운동"],
                  liked: false,
                },
                {
                  id: 8,
                  title: "한강 플로깅",
                  image: "/images/plogging.png",
                  location: "여의도",
                  time: "오전 8:00",
                  members: 10,
                  maxMembers: 15,
                  price: "무료",
                  tags: ["환경", "운동"],
                  liked: false,
                },
                {
                  id: 9,
                  title: "배드민턴 동호회",
                  image: "/images/badminton.png",
                  location: "반포",
                  time: "오후 5:00",
                  members: 14,
                  maxMembers: 16,
                  price: "2,000원",
                  tags: ["운동"],
                  liked: true,
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
                            tag === "운동" ? "bg-green-500 text-white" : "bg-gray-800 text-white"
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
                    <h3 className="font-medium text-sm text-gray-800 mb-1 line-clamp-2">{group.title}</h3>
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
        </div>
      </main>

      <MobileNav />
    </div>
  )
}
