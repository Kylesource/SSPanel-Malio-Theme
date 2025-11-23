"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"

const highlights = [
  "专业的游戏开发团队",
  "多年行业经验积累",
  "持续的技术创新",
  "完善的售后服务",
]

export function About() {
  return (
    <section className="py-24 bg-muted/30" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              关于
              <span className="text-primary"> 未森趣玩</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              未森趣玩是一家专注于游戏开发与运营的科技公司，我们的使命是为全球玩家创造充满乐趣和创意的游戏体验。
            </p>
            <p className="text-muted-foreground mb-8">
              自成立以来，我们始终坚持以玩家为中心的理念，不断探索游戏设计的边界，
              将最新的技术与独特的创意相结合，打造出一款又一款深受玩家喜爱的游戏作品。
            </p>

            <ul className="space-y-4 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" className="group">
              了解更多
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-emerald-400/20 to-teal-400/20 p-8">
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl font-bold mb-4">5+</div>
                  <div className="text-lg font-medium">年行业深耕</div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-card rounded-lg shadow-lg p-4 border">
              <div className="text-2xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">团队成员</div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-card rounded-lg shadow-lg p-4 border">
              <div className="text-2xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">行业奖项</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
