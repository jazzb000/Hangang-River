import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Heart, Users, MapPin, Share2, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import MobileNav from "@/components/mobile-nav"

// 모임 상세 데이터 (실제로는 API나 데이터베이스에서 가져옴)
const groupsData = [
  {
    id: 1,
    title: "여의도 선셋 러닝",
    image: "/images/running-sunset.png",
    location: "여의도",
    time: "오후 6:00",
    date: "매주 월, 수, 금",
    members: 25,
    maxMembers: 30,
    price: "무료",
    tags: ["추천", "마감임박"],
    liked: true,
    description:
      "여의도 한강공원에서 함께하는 선셋 러닝 모임입니다. 아름다운 석양을 배경으로 건강한 러닝을 즐겨보세요. 초보자부터 경험자까지 모두 환영합니다.",
    host: {
      name: "러닝크루 한강",
      image: "/abstract-profile.png",
      rating: 4.8,
      reviews: 56,
    },
    meetingPoint: "여의도 한강공원 이벤트광장 앞",
    schedule: "18:00 - 19:30 (약 1시간 30분)",
    requirements: "운동복, 운동화, 물, 개인 물품",
  },
  {
    id: 2,
    title: "한강 피크닉 파티",
    image: "/images/picnic-party.png",
    location: "뚝섬",
    time: "오후 2:00",
    date: "매주 토, 일",
    members: 18,
    maxMembers: 20,
    price: "5,000원",
    tags: ["인기"],
    liked: false,
    description:
      "뚝섬 한강공원에서 진행되는 피크닉 파티입니다. 맛있는 음식과 함께 즐거운 대화를 나누며 새로운 친구들을 만나보세요.",
    host: {
      name: "한강 피크닉 모임",
      image: "/abstract-profile.png",
      rating: 4.7,
      reviews: 42,
    },
    meetingPoint: "뚝섬 한강공원 안내센터 앞",
    schedule: "14:00 - 17:00 (약 3시간)",
    requirements: "참가비 5,000원 (간식 제공), 돗자리(대여 가능)",
  },
  {
    id: 3,
    title: "자전거 라이딩 투어",
    image: "/images/cycling-tour.png",
    location: "반포",
    time: "오전 9:00",
    date: "매주 토요일",
    members: 12,
    maxMembers: 15,
    price: "3,000원",
    tags: ["주말"],
    liked: false,
    description:
      "반포 한강공원에서 시작하는 자전거 라이딩 투어입니다. 한강을 따라 시원하게 달리며 서울의 아름다운 풍경을 감상해보세요.",
    host: {
      name: "한강 라이더스",
      image: "/abstract-profile.png",
      rating: 4.9,
      reviews: 38,
    },
    meetingPoint: "반포 한강공원 자전거 대여소 앞",
    schedule: "09:00 - 12:00 (약 3시간)",
    requirements: "참가비 3,000원, 자전거(대여 가능), 헬멧, 물",
  },
]

export default function GroupDetailPage({ params }: { params: { id: string } }) {
  const groupId = Number.parseInt(params.id)
  const group = groupsData.find((g) => g.id === groupId) || groupsData[0]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-14 items-center">
          <Link href="/groups" className="mr-2">
            <ArrowLeft className="h-5 w-5 text-gray-700" />
          </Link>
          <h1 className="text-lg font-bold text-gray-800">모임 상세</h1>

          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Share2 className="h-5 w-5 text-gray-700" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className={`h-5 w-5 ${group.liked ? "fill-red-500 text-red-500" : "text-gray-700"}`} />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 pb-16 md:pb-0">
        <div className="relative w-full h-64 md:h-80">
          <Image src={group.image || "/placeholder.svg"} alt={group.title} fill className="object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <div className="container">
              <div className="flex gap-1 mb-2">
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
              <h1 className="text-2xl font-bold text-white">{group.title}</h1>
            </div>
          </div>
        </div>

        <div className="container py-4">
          <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden relative">
                <Image
                  src={group.host.image || "/placeholder.svg"}
                  alt={group.host.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-sm font-medium">{group.host.name}</div>
                <div className="flex items-center text-xs text-gray-500">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span>{group.host.rating}</span>
                  <span className="mx-1">·</span>
                  <span>리뷰 {group.host.reviews}개</span>
                </div>
              </div>
            </div>
            <Button className="bg-sky-600 hover:bg-sky-700">문의하기</Button>
          </div>

          <div className="grid gap-4 md:grid-cols-3 mb-6">
            <Card className="p-4 border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="h-5 w-5 text-sky-600" />
                <div className="font-medium">장소</div>
              </div>
              <div className="text-sm text-gray-600">{group.meetingPoint}</div>
            </Card>

            <Card className="p-4 border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="h-5 w-5 text-sky-600" />
                <div className="font-medium">일정</div>
              </div>
              <div className="text-sm text-gray-600">{group.date}</div>
              <div className="text-sm text-gray-600">{group.schedule}</div>
            </Card>

            <Card className="p-4 border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <Users className="h-5 w-5 text-sky-600" />
                <div className="font-medium">참가 인원</div>
              </div>
              <div className="text-sm text-gray-600">
                {group.members}/{group.maxMembers}명 참여 중
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                <div
                  className="h-1.5 rounded-full bg-sky-600"
                  style={{ width: `${(group.members / group.maxMembers) * 100}%` }}
                ></div>
              </div>
            </Card>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3">모임 소개</h2>
            <p className="text-gray-700 whitespace-pre-line">{group.description}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3">준비물</h2>
            <p className="text-gray-700">{group.requirements}</p>
          </div>

          <div className="bg-white border-t py-3 px-4">
            <div className="container flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">참가비</div>
                <div className="text-xl font-bold text-sky-600">{group.price}</div>
              </div>
              <Button className="bg-sky-600 hover:bg-sky-700 px-8">참가 신청하기</Button>
            </div>
          </div>
        </div>
      </main>

      <MobileNav />
    </div>
  )
}
