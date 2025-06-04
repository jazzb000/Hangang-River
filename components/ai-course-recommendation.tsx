"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Clock, Heart, ChevronRight, Sparkles } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Course {
  id: number
  title: string
  description: string
  image: string
  location: string
  duration: string
  distance: string
  difficulty: "쉬움" | "보통" | "어려움"
  tags: string[]
  liked: boolean
}

export default function AICourseRecommendation() {
  const [courses] = useState<Course[]>([
    {
      id: 1,
      title: "여의도 석양 산책로",
      description: "한강의 아름다운 석양을 감상할 수 있는 코스",
      image: "/images/running-sunset.png",
      location: "여의도",
      duration: "1시간 30분",
      distance: "3.2km",
      difficulty: "쉬움",
      tags: ["추천", "석양"],
      liked: false,
    },
    {
      id: 2,
      title: "반포 야경 트레킹",
      description: "반포대교의 화려한 야경을 감상하는 코스",
      image: "/images/hangang-view.png",
      location: "반포",
      duration: "2시간",
      distance: "4.5km",
      difficulty: "보통",
      tags: ["야경", "인기"],
      liked: true,
    },
    {
      id: 3,
      title: "뚝섬 자전거 코스",
      description: "한강의 자연을 만끽할 수 있는 자전거 코스",
      image: "/images/cycling-tour.png",
      location: "뚝섬",
      duration: "1시간",
      distance: "5.8km",
      difficulty: "보통",
      tags: ["자전거", "주말"],
      liked: false,
    },
  ])

  return (
    <section className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold text-gray-800">AI 맞춤 코스</h2>
          <Link href="/courses/survey">
            <Button variant="ghost" size="sm" className="h-7 gap-1">
              <Sparkles className="h-4 w-4" />
              <span>맞춤 추천받기</span>
            </Button>
          </Link>
        </div>
        <Link href="/courses" className="flex items-center text-sm text-sky-600 font-medium">
          전체보기
          <ChevronRight className="h-4 w-4 ml-0.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {courses.map((course) => (
          <Card
            key={course.id}
            className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl cursor-pointer"
            onClick={() => (window.location.href = `/courses/${course.id}`)}
          >
            <div className="relative aspect-[16/9]">
              <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
              <div className="absolute top-2 left-2 flex gap-1">
                {course.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                      tag === "추천"
                        ? "bg-sky-500 text-white"
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
                  console.log("좋아요 버튼 클릭")
                }}
              >
                <Heart className={`h-4 w-4 ${course.liked ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
              </button>
            </div>
            <div className="p-3">
              <h3 className="font-medium text-base text-gray-800 mb-1">{course.title}</h3>
              <p className="text-sm text-gray-600 mb-2 line-clamp-2">{course.description}</p>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <div className="flex items-center gap-0.5">
                  <MapPin className="h-3 w-3" />
                  <span>{course.location}</span>
                </div>
                <div className="flex items-center gap-0.5">
                  <Clock className="h-3 w-3" />
                  <span>{course.duration}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-600">{course.distance}</span>
                  <span className="text-xs px-2 py-0.5 bg-gray-100 rounded-full text-gray-600">
                    {course.difficulty}
                  </span>
                </div>
                <Link href={`/courses/${course.id}`}>
                  <Button variant="outline" size="sm" className="text-xs h-7">
                    상세보기
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
} 