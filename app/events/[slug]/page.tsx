import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin, Calendar, Clock, Share2, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import MobileNav from "@/components/mobile-nav"

// 이벤트 상세 데이터 (실제로는 API나 데이터베이스에서 가져옴)
const eventsData = [
  {
    id: 1,
    title: "한강 불꽃축제",
    slug: "한강-불꽃축제",
    date: "2023.07.15",
    time: "19:30 - 21:00",
    location: "여의도 한강공원",
    status: "예정",
    image: "/images/fireworks.png",
    description:
      "화려한 불꽃과 함께하는 환상적인 밤을 경험하세요. 서울의 밤하늘을 수놓는 아름다운 불꽃쇼와 다양한 부대행사가 준비되어 있습니다.",
    organizer: {
      name: "서울시 한강사업본부",
      image: "/abstract-profile.png",
    },
    details:
      "여의도 한강공원 일대에서 펼쳐지는 불꽃축제는 매년 수많은 시민들이 찾는 서울의 대표적인 행사입니다. 올해는 더욱 화려한 불꽃과 함께 다양한 문화 공연이 준비되어 있으니 많은 참여 바랍니다.",
    program: [
      { time: "17:00 - 19:00", title: "사전 공연 및 부대행사" },
      { time: "19:30 - 21:00", title: "불꽃쇼" },
      { time: "21:00 - 22:00", title: "피날레 공연" },
    ],
    liked: false,
  },
  {
    id: 2,
    title: "한강 재즈 페스티벌",
    slug: "한강-재즈-페스티벌",
    date: "2023.07.22 - 2023.07.23",
    time: "17:00 - 22:00",
    location: "반포 한강공원",
    status: "예정",
    image: "/images/concert.png",
    description:
      "한강에서 펼쳐지는 감미로운 재즈 공연을 즐겨보세요. 국내외 유명 재즈 뮤지션들의 공연과 함께 여름밤의 낭만을 느껴보세요.",
    organizer: {
      name: "서울 재즈 협회",
      image: "/abstract-profile.png",
    },
    details:
      "반포 한강공원에서 개최되는 재즈 페스티벌은 국내외 유명 재즈 뮤지션들의 공연을 한자리에서 즐길 수 있는 특별한 기회입니다. 한강의 야경과 함께하는 감미로운 재즈 선율을 경험해보세요.",
    program: [
      { time: "17:00 - 18:30", title: "오프닝 공연" },
      { time: "19:00 - 20:30", title: "메인 공연 1부" },
      { time: "21:00 - 22:00", title: "메인 공연 2부" },
    ],
    liked: true,
  },
]

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  // slug를 기반으로 이벤트 데이터 찾기
  const slug = params.slug
  const event = eventsData.find((e) => e.slug === slug) || eventsData[0]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-14 items-center">
          <Link href="/events" className="mr-2">
            <ArrowLeft className="h-5 w-5 text-gray-700" />
          </Link>
          <h1 className="text-lg font-bold text-gray-800">이벤트 상세</h1>

          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Share2 className="h-5 w-5 text-gray-700" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className={`h-5 w-5 ${event.liked ? "fill-red-500 text-red-500" : "text-gray-700"}`} />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 pb-16 md:pb-0">
        <div className="relative w-full h-64 md:h-80">
          <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <div className="container">
              <div
                className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-2 ${
                  event.status === "진행중" ? "bg-green-100 text-green-700" : "bg-sky-100 text-sky-700"
                }`}
              >
                {event.status}
              </div>
              <h1 className="text-2xl font-bold text-white">{event.title}</h1>
            </div>
          </div>
        </div>

        <div className="container py-4">
          <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden relative">
                <Image
                  src={event.organizer.image || "/placeholder.svg"}
                  alt={event.organizer.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-sm font-medium">{event.organizer.name}</div>
                <div className="text-xs text-gray-500">주최</div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3 mb-6">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="h-5 w-5 text-sky-600" />
                <div className="font-medium">날짜</div>
              </div>
              <div className="text-sm text-gray-600">{event.date}</div>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="h-5 w-5 text-sky-600" />
                <div className="font-medium">시간</div>
              </div>
              <div className="text-sm text-gray-600">{event.time}</div>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="h-5 w-5 text-sky-600" />
                <div className="font-medium">장소</div>
              </div>
              <div className="text-sm text-gray-600">{event.location}</div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3">이벤트 소개</h2>
            <p className="text-gray-700 whitespace-pre-line">{event.description}</p>
            <p className="text-gray-700 mt-3 whitespace-pre-line">{event.details}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3">프로그램</h2>
            <div className="space-y-3">
              {event.program.map((item, index) => (
                <div key={index} className="p-3 border rounded-lg">
                  <div className="font-medium">{item.title}</div>
                  <div className="text-sm text-gray-500">{item.time}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="sticky bottom-16 md:bottom-4 bg-white border-t py-3 px-4">
            <div className="container flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">참가비</div>
                <div className="text-xl font-bold text-sky-600">무료</div>
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
