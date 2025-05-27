import type React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface CategorySectionProps {
  title: string
  description?: string
  viewAllLink?: string
  children: React.ReactNode
  className?: string
}

export default function CategorySection({
  title,
  description,
  viewAllLink,
  children,
  className = "",
}: CategorySectionProps) {
  return (
    <section className={`${className}`}>
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2 className="text-lg font-bold text-gray-800">{title}</h2>
          {description && <p className="text-xs text-gray-500">{description}</p>}
        </div>
        {viewAllLink && (
          <Link href={viewAllLink} className="flex items-center text-xs text-sky-600 font-medium">
            전체보기
            <ChevronRight className="h-3 w-3 ml-0.5" />
          </Link>
        )}
      </div>
      {children}
    </section>
  )
}
