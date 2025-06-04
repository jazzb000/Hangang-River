"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { useRouter } from "next/navigation"

interface SurveyState {
  location: string
  purpose: string[]
  activity: string
  time: string
  distance: number
  atmosphere: string[]
}

export default function AICourseSurvey() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [survey, setSurvey] = useState<SurveyState>({
    location: "",
    purpose: [],
    activity: "",
    time: "",
    distance: 3,
    atmosphere: [],
  })

  const handleSubmit = () => {
    // AI 추천 로직 (실제로는 API 호출)
    console.log("설문 결과:", survey)
    // 임시로 첫 번째 코스로 이동
    router.push("/courses/1")
  }

  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">AI 맞춤 코스 추천</h2>
      
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-3">어느 지역을 선호하시나요?</h3>
            <RadioGroup
              value={survey.location}
              onValueChange={(value) => setSurvey({ ...survey, location: value })}
              className="grid grid-cols-2 gap-3"
            >
              <div>
                <RadioGroupItem value="yeouido" id="yeouido" className="peer sr-only" />
                <Label
                  htmlFor="yeouido"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <div className="w-full aspect-[4/3] bg-[url('/images/running-sunset.png')] bg-cover bg-center rounded-md mb-2" />
                  <span>여의도</span>
                </Label>
              </div>
              <div>
                <RadioGroupItem value="banpo" id="banpo" className="peer sr-only" />
                <Label
                  htmlFor="banpo"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <div className="w-full aspect-[4/3] bg-[url('/images/hangang-view.png')] bg-cover bg-center rounded-md mb-2" />
                  <span>반포</span>
                </Label>
              </div>
              <div>
                <RadioGroupItem value="ttukseom" id="ttukseom" className="peer sr-only" />
                <Label
                  htmlFor="ttukseom"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <div className="w-full aspect-[4/3] bg-[url('/images/cycling-tour.png')] bg-cover bg-center rounded-md mb-2" />
                  <span>뚝섬</span>
                </Label>
              </div>
              <div>
                <RadioGroupItem value="jamsil" id="jamsil" className="peer sr-only" />
                <Label
                  htmlFor="jamsil"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <div className="w-full aspect-[4/3] bg-[url('/images/hangang-view.png')] bg-cover bg-center rounded-md mb-2" />
                  <span>잠실</span>
                </Label>
              </div>
            </RadioGroup>
          </div>
          <Button className="w-full" onClick={() => setStep(2)}>
            다음
          </Button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-3">어떤 목적으로 방문하시나요?</h3>
            <div className="grid grid-cols-2 gap-3">
              {["데이트", "운동", "휴식", "사진촬영", "친목", "관광"].map((purpose) => (
                <div key={purpose} className="flex items-center space-x-2">
                  <Checkbox
                    id={purpose}
                    checked={survey.purpose.includes(purpose)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSurvey({ ...survey, purpose: [...survey.purpose, purpose] })
                      } else {
                        setSurvey({
                          ...survey,
                          purpose: survey.purpose.filter((p) => p !== purpose),
                        })
                      }
                    }}
                  />
                  <Label htmlFor={purpose}>{purpose}</Label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1" onClick={() => setStep(1)}>
              이전
            </Button>
            <Button className="flex-1" onClick={() => setStep(3)}>
              다음
            </Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-3">어떤 활동을 선호하시나요?</h3>
            <RadioGroup
              value={survey.activity}
              onValueChange={(value) => setSurvey({ ...survey, activity: value })}
              className="grid grid-cols-2 gap-3"
            >
              {["산책", "달리기", "자전거", "피크닉"].map((activity) => (
                <div key={activity}>
                  <RadioGroupItem value={activity} id={activity} className="peer sr-only" />
                  <Label
                    htmlFor={activity}
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    {activity}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1" onClick={() => setStep(2)}>
              이전
            </Button>
            <Button className="flex-1" onClick={() => setStep(4)}>
              다음
            </Button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-3">선호하는 시간대는?</h3>
            <RadioGroup
              value={survey.time}
              onValueChange={(value) => setSurvey({ ...survey, time: value })}
              className="grid grid-cols-2 gap-3"
            >
              {["아침", "오후", "석양", "야경"].map((time) => (
                <div key={time}>
                  <RadioGroupItem value={time} id={time} className="peer sr-only" />
                  <Label
                    htmlFor={time}
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    {time}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-3">선호하는 거리는?</h3>
            <div className="px-2">
              <Slider
                value={[survey.distance]}
                onValueChange={(value) => setSurvey({ ...survey, distance: value[0] })}
                max={10}
                step={1}
                className="mb-2"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>1km</span>
                <span>{survey.distance}km</span>
                <span>10km</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1" onClick={() => setStep(3)}>
              이전
            </Button>
            <Button className="flex-1" onClick={() => setStep(5)}>
              다음
            </Button>
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-3">선호하는 분위기는?</h3>
            <div className="grid grid-cols-2 gap-3">
              {["도시적", "자연적", "조용한", "활기찬", "로맨틱", "가족적"].map((atmosphere) => (
                <div key={atmosphere} className="flex items-center space-x-2">
                  <Checkbox
                    id={atmosphere}
                    checked={survey.atmosphere.includes(atmosphere)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSurvey({ ...survey, atmosphere: [...survey.atmosphere, atmosphere] })
                      } else {
                        setSurvey({
                          ...survey,
                          atmosphere: survey.atmosphere.filter((a) => a !== atmosphere),
                        })
                      }
                    }}
                  />
                  <Label htmlFor={atmosphere}>{atmosphere}</Label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1" onClick={() => setStep(4)}>
              이전
            </Button>
            <Button className="flex-1" onClick={handleSubmit}>
              추천받기
            </Button>
          </div>
        </div>
      )}
    </Card>
  )
} 