"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin, Clock, Heart, Share2, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import MobileNav from "@/components/mobile-nav"

const courses = [
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
    details: {
      startPoint: "여의도 한강공원 입구",
      endPoint: "여의도 한강공원 선셋뷰 포인트",
      highlights: [
        "여의도 한강공원의 아름다운 석양",
        "여의도 윤중로의 도시 경관",
        "한강의 넓은 수면과 반영",
      ],
      facilities: ["화장실", "음수대", "주차장", "자전거 대여소"],
      bestTime: "오후 5시 ~ 7시",
      transportation: "지하철 5호선 여의나루역 2번 출구",
    },
    mapImage: "/images/course-maps/yeouido-course.png",
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
    details: {
      startPoint: "반포 한강공원 입구",
      endPoint: "반포대교 야경 포인트",
      highlights: [
        "반포대교의 화려한 야경",
        "반포 한강공원의 야간 조명",
        "한강의 야간 경관",
      ],
      facilities: ["화장실", "음수대", "주차장", "편의점"],
      bestTime: "오후 7시 ~ 9시",
      transportation: "지하철 3호선 고속터미널역 4번 출구",
    },
    mapImage: "/images/course-maps/banpo-course.png",
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
    details: {
      startPoint: "뚝섬 한강공원 자전거 대여소",
      endPoint: "뚝섬 한강공원 자전거 종점",
      highlights: [
        "뚝섬 한강공원의 자연 경관",
        "자전거 전용 도로",
        "한강의 수변 경관",
      ],
      facilities: ["자전거 대여소", "화장실", "음수대", "주차장"],
      bestTime: "오전 9시 ~ 오후 5시",
      transportation: "지하철 2호선 뚝섬역 1번 출구",
    },
    mapImage: "/images/course-maps/ttukseom-course.png",
  },
]

export default function CourseDetailPage() {
  const params = useParams()
  const courseId = Number(params.id)
  const course = courses.find((c) => c.id === courseId)

  if (!course) {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <div className="container py-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">코스를 찾을 수 없습니다</h1>
          <Link href="/">
            <Button>홈으로 돌아가기</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-14 items-center">
          <Link href="/" className="mr-2">
            <ArrowLeft className="h-5 w-5 text-gray-700" />
          </Link>
          <h1 className="text-lg font-bold text-gray-800">{course.title}</h1>
        </div>
      </header>

      <main className="flex-1 pb-16 md:pb-0">
        <div className="relative aspect-[16/9] w-full">
          <Image src={course.image} alt={course.title} fill className="object-cover" />
          <div className="absolute top-4 right-4 flex gap-2">
            <Button variant="ghost" size="icon" className="bg-white/80 backdrop-blur">
              <Share2 className="h-5 w-5 text-gray-700" />
            </Button>
            <Button variant="ghost" size="icon" className="bg-white/80 backdrop-blur">
              <Heart className={`h-5 w-5 ${course.liked ? "fill-red-500 text-red-500" : "text-gray-700"}`} />
            </Button>
          </div>
        </div>

        <div className="container py-4 px-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="h-4 w-4 mr-1" />
              {course.location}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="h-4 w-4 mr-1" />
              {course.duration}
            </div>
            <span className="text-sm px-2 py-0.5 bg-gray-100 rounded-full text-gray-600">
              {course.difficulty}
            </span>
          </div>

          <p className="text-gray-700 mb-6">{course.description}</p>

          <Card className="p-4 mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">코스 정보</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-600 mb-1">출발지</h3>
                <p className="text-gray-800">{course.details.startPoint}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-600 mb-1">도착지</h3>
                <p className="text-gray-800">{course.details.endPoint}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-600 mb-1">하이라이트</h3>
                <ul className="list-disc list-inside text-gray-800">
                  {course.details.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-600 mb-1">편의시설</h3>
                <div className="flex flex-wrap gap-2">
                  {course.details.facilities.map((facility, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                      {facility}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-600 mb-1">추천 시간대</h3>
                <p className="text-gray-800">{course.details.bestTime}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-600 mb-1">교통편</h3>
                <p className="text-gray-800">{course.details.transportation}</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">코스 지도</h2>
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={course.mapImage}
                alt={`${course.title} 코스 지도`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </Card>

          <Button className="w-full mb-4">
            <Navigation className="h-4 w-4 mr-2" />
            길찾기
          </Button>
        </div>
      </main>

      <MobileNav />
    </div>
  )
} 