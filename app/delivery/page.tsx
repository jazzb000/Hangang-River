import Link from "next/link"
import { ArrowLeft, Filter, Search, ShoppingCart, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MobileNav from "@/components/mobile-nav"

export default function DeliveryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-14 items-center">
          <Link href="/" className="mr-2">
            <ArrowLeft className="h-5 w-5 text-gray-700" />
          </Link>
          <h1 className="text-lg font-bold text-gray-800">한강 배달</h1>

          <div className="relative flex-1 max-w-sm ml-4">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="메뉴 검색"
              className="pl-8 bg-gray-50 border-gray-200 focus-visible:ring-sky-500"
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
        <div className="container py-4">
          <Tabs defaultValue="all" className="w-full mb-4">
            <TabsList className="w-full grid grid-cols-5 bg-gray-100 p-1 rounded-lg">
              <TabsTrigger
                value="all"
                className="text-xs data-[state=active]:bg-white data-[state=active]:text-sky-700"
              >
                전체
              </TabsTrigger>
              <TabsTrigger
                value="chicken"
                className="text-xs data-[state=active]:bg-white data-[state=active]:text-sky-700"
              >
                치킨
              </TabsTrigger>
              <TabsTrigger
                value="pizza"
                className="text-xs data-[state=active]:bg-white data-[state=active]:text-sky-700"
              >
                피자
              </TabsTrigger>
              <TabsTrigger
                value="snack"
                className="text-xs data-[state=active]:bg-white data-[state=active]:text-sky-700"
              >
                분식
              </TabsTrigger>
              <TabsTrigger
                value="fruit"
                className="text-xs data-[state=active]:bg-white data-[state=active]:text-sky-700"
              >
                과일
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  {
                    name: "후라이드 치킨",
                    price: "18,000원",
                    time: "30-40분",
                    image: "한강 치킨 1",
                    rating: 4.5,
                    reviews: 328,
                  },
                  {
                    name: "양념 치킨",
                    price: "19,000원",
                    time: "30-40분",
                    image: "한강 치킨 2",
                    rating: 4.6,
                    reviews: 412,
                  },
                  {
                    name: "페퍼로니 피자",
                    price: "22,000원",
                    time: "40-50분",
                    image: "한강 피자 1",
                    rating: 4.3,
                    reviews: 256,
                  },
                  {
                    name: "콤비네이션 피자",
                    price: "25,000원",
                    time: "40-50분",
                    image: "한강 피자 2",
                    rating: 4.4,
                    reviews: 189,
                  },
                  {
                    name: "떡볶이 세트",
                    price: "15,000원",
                    time: "20-30분",
                    image: "한강 떡볶이",
                    rating: 4.7,
                    reviews: 521,
                  },
                  {
                    name: "순대 세트",
                    price: "16,000원",
                    time: "20-30분",
                    image: "한강 순대",
                    rating: 4.5,
                    reviews: 312,
                  },
                  {
                    name: "과일 세트",
                    price: "18,000원",
                    time: "30-40분",
                    image: "한강 과일 1",
                    rating: 4.8,
                    reviews: 178,
                  },
                  {
                    name: "수박 세트",
                    price: "20,000원",
                    time: "30-40분",
                    image: "한강 수박",
                    rating: 4.9,
                    reviews: 203,
                  },
                ].map((item, i) => (
                  <Card key={i} className="overflow-hidden border-gray-200 hover:shadow-md transition-shadow">
                    <div className="relative">
                      <img
                        src={`/placeholder.svg?height=150&width=200&query=${item.image}`}
                        alt={item.name}
                        className="w-full h-32 object-cover"
                      />
                    </div>
                    <CardContent className="p-2">
                      <div className="font-medium text-sm text-gray-800">{item.name}</div>
                      <div className="flex items-center mt-1">
                        <div className="text-xs text-yellow-500">★ {item.rating}</div>
                        <div className="text-xs text-gray-500 ml-1">({item.reviews})</div>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="h-3 w-3 inline mr-0.5" />
                          {item.time}
                        </div>
                        <div className="text-xs font-medium text-sky-600">{item.price}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* 다른 탭 콘텐츠는 유사한 구조로 구현 */}
            <TabsContent value="chicken" className="mt-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  {
                    name: "후라이드 치킨",
                    price: "18,000원",
                    time: "30-40분",
                    image: "한강 치킨 1",
                    rating: 4.5,
                    reviews: 328,
                  },
                  {
                    name: "양념 치킨",
                    price: "19,000원",
                    time: "30-40분",
                    image: "한강 치킨 2",
                    rating: 4.6,
                    reviews: 412,
                  },
                  {
                    name: "간장 치킨",
                    price: "19,000원",
                    time: "30-40분",
                    image: "한강 치킨 3",
                    rating: 4.4,
                    reviews: 287,
                  },
                  {
                    name: "반반 치킨",
                    price: "20,000원",
                    time: "30-40분",
                    image: "한강 치킨 4",
                    rating: 4.7,
                    reviews: 356,
                  },
                ].map((item, i) => (
                  <Card key={i} className="overflow-hidden border-gray-200 hover:shadow-md transition-shadow">
                    <div className="relative">
                      <img
                        src={`/placeholder.svg?height=150&width=200&query=${item.image}`}
                        alt={item.name}
                        className="w-full h-32 object-cover"
                      />
                    </div>
                    <CardContent className="p-2">
                      <div className="font-medium text-sm text-gray-800">{item.name}</div>
                      <div className="flex items-center mt-1">
                        <div className="text-xs text-yellow-500">★ {item.rating}</div>
                        <div className="text-xs text-gray-500 ml-1">({item.reviews})</div>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="h-3 w-3 inline mr-0.5" />
                          {item.time}
                        </div>
                        <div className="text-xs font-medium text-sky-600">{item.price}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <MobileNav />
    </div>
  )
}
