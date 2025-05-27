import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin, Star, ShoppingCart, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import MobileNav from "@/components/mobile-nav"

// 대여 상품 상세 데이터 (실제로는 API나 데이터베이스에서 가져옴)
const rentalData = [
  {
    id: 1,
    name: "기본 돗자리",
    slug: "기본-돗자리",
    price: "3,000원",
    location: "여의도",
    image: "/images/mat-rental.png",
    rating: 4.5,
    reviews: 128,
    description:
      "한강에서 편안하게 사용할 수 있는 기본 돗자리입니다. 방수 처리가 되어 있어 젖은 잔디밭에서도 사용 가능합니다.",
    size: "150cm x 200cm",
    material: "폴리에스터, 방수 코팅",
    seller: {
      name: "한강 대여점",
      image: "/abstract-profile.png",
      rating: 4.6,
      reviews: 312,
    },
    options: [
      { name: "2시간", price: "3,000원" },
      { name: "4시간", price: "5,000원" },
      { name: "종일", price: "8,000원" },
    ],
  },
  {
    id: 2,
    name: "대형 돗자리",
    slug: "대형-돗자리",
    price: "5,000원",
    location: "반포",
    image: "/images/mat-rental.png",
    rating: 4.3,
    reviews: 95,
    description:
      "4-6인이 편안하게 사용할 수 있는 대형 돗자리입니다. 넓은 공간이 필요한 가족이나 친구들과의 모임에 적합합니다.",
    size: "200cm x 250cm",
    material: "폴리에스터, 방수 코팅, 두꺼운 패딩",
    seller: {
      name: "반포 대여샵",
      image: "/abstract-profile.png",
      rating: 4.4,
      reviews: 187,
    },
    options: [
      { name: "2시간", price: "5,000원" },
      { name: "4시간", price: "8,000원" },
      { name: "종일", price: "12,000원" },
    ],
  },
]

export default function RentalDetailPage({ params }: { params: { slug: string } }) {
  // slug를 기반으로 대여 상품 데이터 찾기
  const slug = params.slug
  const rental = rentalData.find((r) => r.slug === slug) || rentalData[0]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-14 items-center">
          <Link href="/rental" className="mr-2">
            <ArrowLeft className="h-5 w-5 text-gray-700" />
          </Link>
          <h1 className="text-lg font-bold text-gray-800">대여 상세</h1>

          <div className="ml-auto">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5 text-gray-700" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 pb-16 md:pb-0">
        <div className="relative w-full h-64 md:h-80">
          <Image src={rental.image || "/placeholder.svg"} alt={rental.name} fill className="object-cover" />
        </div>

        <div className="container py-4">
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{rental.name}</h1>
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center text-yellow-500">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <span className="ml-1 text-gray-700">{rental.rating}</span>
                <span className="ml-1 text-gray-500">({rental.reviews})</span>
              </div>
              <div className="flex items-center text-gray-500">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{rental.location}</span>
              </div>
            </div>
            <p className="text-gray-700">{rental.description}</p>
          </div>

          <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden relative">
                <Image
                  src={rental.seller.image || "/placeholder.svg"}
                  alt={rental.seller.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-sm font-medium">{rental.seller.name}</div>
                <div className="flex items-center text-xs text-gray-500">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span>{rental.seller.rating}</span>
                  <span className="mx-1">·</span>
                  <span>리뷰 {rental.seller.reviews}개</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3">대여 시간 선택</h2>
            <div className="space-y-3">
              {rental.options.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-lg hover:border-sky-500 cursor-pointer"
                >
                  <div>
                    <div className="font-medium">{option.name}</div>
                  </div>
                  <div className="font-bold text-sky-600">{option.price}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3">대여 날짜 선택</h2>
            <div className="p-3 border rounded-lg flex items-center justify-between">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                <span>날짜 선택하기</span>
              </div>
              <Button variant="outline" size="sm">
                선택
              </Button>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3">상품 정보</h2>
            <div className="space-y-2">
              <div className="flex">
                <span className="w-24 text-gray-500">크기</span>
                <span className="text-gray-700">{rental.size}</span>
              </div>
              <div className="flex">
                <span className="w-24 text-gray-500">소재</span>
                <span className="text-gray-700">{rental.material}</span>
              </div>
            </div>
          </div>

          <div className="sticky bottom-16 md:bottom-4 bg-white border-t py-3 px-4">
            <div className="container flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">기본 가격</div>
                <div className="text-xl font-bold text-sky-600">{rental.price}</div>
              </div>
              <Button className="bg-sky-600 hover:bg-sky-700 px-8">대여하기</Button>
            </div>
          </div>
        </div>
      </main>

      <MobileNav />
    </div>
  )
}
