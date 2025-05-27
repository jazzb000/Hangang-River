"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin, Clock, Star, ShoppingCart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import MobileNav from "@/components/mobile-nav"

// 음식 상세 데이터 (실제로는 API나 데이터베이스에서 가져옴)
const foodsData = [
  {
    id: 1,
    name: "매콤 떡볶이",
    slug: "매콤-떡볶이",
    price: "4,000원",
    time: "10-15분",
    image: "/images/tteokbokki-delivery.png",
    rating: 4.5,
    reviews: 328,
    location: "여의도",
    deliveryFee: "2,000원",
    description:
      "매콤한 고추장 소스로 맛을 낸 쫄깃한 떡볶이입니다. 한강에서 즐기는 대표적인 길거리 음식으로, 특제 소스로 맛을 더했습니다.",
    ingredients: "떡, 어묵, 고추장, 설탕, 간장, 마늘, 양파",
    seller: {
      name: "한강 떡볶이",
      image: "/abstract-profile.png",
      rating: 4.7,
      reviews: 512,
    },
    options: [
      { name: "기본", price: "4,000원" },
      { name: "치즈 추가", price: "5,000원" },
      { name: "라면 추가", price: "5,500원" },
    ],
  },
  {
    id: 2,
    name: "슈크림 붕어빵",
    slug: "슈크림-붕어빵",
    price: "3,000원",
    time: "5-10분",
    image: "/images/bungeoppang-delivery.png",
    rating: 4.6,
    reviews: 412,
    location: "반포",
    deliveryFee: "2,500원",
    description:
      "겉은 바삭하고 속은 부드러운 슈크림이 가득한 붕어빵입니다. 한강에서 즐기는 달콤한 간식으로 인기가 많습니다.",
    ingredients: "밀가루, 설탕, 달걀, 버터, 슈크림",
    seller: {
      name: "달콤 붕어빵",
      image: "/abstract-profile.png",
      rating: 4.8,
      reviews: 387,
    },
    options: [
      { name: "슈크림 3개", price: "3,000원" },
      { name: "슈크림 5개", price: "5,000원" },
      { name: "슈크림 10개", price: "9,000원" },
    ],
  },
]

export default function FoodDetailPage({ params }: { params: { slug: string } }) {
  // slug를 기반으로 음식 데이터 찾기
  const slug = params.slug
  const food = foodsData.find((f) => f.slug === slug) || foodsData[0]

  const handleShareLocation = () => {
    // 실제로는 위치 공유 API를 사용하게 됩니다
    toast({
      title: "위치 공유됨",
      description: `${food.location} 위치가 공유되었습니다.`,
    })
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-14 items-center">
          <Link href="/street-food" className="mr-2">
            <ArrowLeft className="h-5 w-5 text-gray-700" />
          </Link>
          <h1 className="text-lg font-bold text-gray-800">배달 상세</h1>

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
          <Image src={food.image || "/placeholder.svg"} alt={food.name} fill className="object-cover" />
        </div>

        <div className="container py-4">
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{food.name}</h1>
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center text-yellow-500">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <span className="ml-1 text-gray-700">{food.rating}</span>
                <span className="ml-1 text-gray-500">({food.reviews})</span>
              </div>
              <div className="flex items-center text-gray-500">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{food.location}</span>
              </div>
              <div className="flex items-center text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                <span>{food.time}</span>
              </div>
            </div>
            <p className="text-gray-700">{food.description}</p>

            <div className="mt-3 p-3 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-700">배달비</div>
                <div className="font-medium text-gray-900">{food.deliveryFee}</div>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-2" onClick={handleShareLocation}>
                <Share2 className="h-4 w-4 mr-2" />
                위치 공유하기
              </Button>
              <p className="text-xs text-gray-500 mt-2">위치를 공유하면 판매자가 귀하의 위치로 배달을 시작합니다.</p>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden relative">
                <Image
                  src={food.seller.image || "/placeholder.svg"}
                  alt={food.seller.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-sm font-medium">{food.seller.name}</div>
                <div className="flex items-center text-xs text-gray-500">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span>{food.seller.rating}</span>
                  <span className="mx-1">·</span>
                  <span>리뷰 {food.seller.reviews}개</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3">옵션 선택</h2>
            <div className="space-y-3">
              {food.options.map((option, index) => (
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
            <h2 className="text-xl font-bold text-gray-800 mb-3">재료</h2>
            <p className="text-gray-700">{food.ingredients}</p>
          </div>

          <div className="sticky bottom-16 md:bottom-4 bg-white border-t py-3 px-4">
            <div className="container flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">가격</div>
                <div className="text-xl font-bold text-sky-600">{food.price}</div>
              </div>
              <Button className="bg-sky-600 hover:bg-sky-700 px-8">주문하기</Button>
            </div>
          </div>
        </div>
      </main>

      <MobileNav />
    </div>
  )
}
