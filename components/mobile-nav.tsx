"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Users, ShoppingBag, Calendar, Menu } from "lucide-react"

export default function MobileNav() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)

  // 모바일 화면에서만 표시
  useEffect(() => {
    const checkIfMobile = () => {
      setIsVisible(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-white z-40 md:hidden shadow-lg">
      <div className="flex items-center justify-around h-14">
        <Link
          href="/"
          className={`flex flex-col items-center justify-center w-full h-full ${
            pathname === "/" ? "text-sky-600" : "text-gray-500"
          }`}
        >
          <Home className="h-5 w-5" />
          <span className="text-[10px] mt-0.5">홈</span>
        </Link>
        <Link
          href="/groups"
          className={`flex flex-col items-center justify-center w-full h-full ${
            pathname === "/groups" ? "text-sky-600" : "text-gray-500"
          }`}
        >
          <Users className="h-5 w-5" />
          <span className="text-[10px] mt-0.5">모임</span>
        </Link>
        <Link
          href="/street-food"
          className={`flex flex-col items-center justify-center w-full h-full ${
            pathname === "/street-food" ? "text-sky-600" : "text-gray-500"
          }`}
        >
          <ShoppingBag className="h-5 w-5" />
          <span className="text-[10px] mt-0.5">배달</span>
        </Link>
        <Link
          href="/events"
          className={`flex flex-col items-center justify-center w-full h-full ${
            pathname === "/events" ? "text-sky-600" : "text-gray-500"
          }`}
        >
          <Calendar className="h-5 w-5" />
          <span className="text-[10px] mt-0.5">이벤트</span>
        </Link>
        <Link
          href="/more"
          className={`flex flex-col items-center justify-center w-full h-full ${
            pathname === "/more" ? "text-sky-600" : "text-gray-500"
          }`}
        >
          <Menu className="h-5 w-5" />
          <span className="text-[10px] mt-0.5">더보기</span>
        </Link>
      </div>
    </div>
  )
}
