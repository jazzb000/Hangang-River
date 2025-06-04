"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import AICourseSurvey from "@/components/ai-course-survey"

export default function CourseSurveyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-14 items-center">
          <Link href="/" className="mr-2">
            <ArrowLeft className="h-5 w-5 text-gray-700" />
          </Link>
          <h1 className="text-lg font-bold text-gray-800">AI 맞춤 코스 추천</h1>
        </div>
      </header>

      <main className="flex-1 container py-6">
        <AICourseSurvey />
      </main>
    </div>
  )
} 