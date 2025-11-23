"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Gamepad2,
  Shield,
  Zap,
  Users,
  Palette,
  Globe,
} from "lucide-react"

const features = [
  {
    icon: Gamepad2,
    title: "创新游戏体验",
    description: "融合前沿技术与创意设计，打造令人沉浸的游戏世界",
  },
  {
    icon: Shield,
    title: "安全可靠",
    description: "多重安全保障机制，保护您的账户和数据安全",
  },
  {
    icon: Zap,
    title: "极速响应",
    description: "优化的服务架构，确保流畅的游戏体验",
  },
  {
    icon: Users,
    title: "社区互动",
    description: "活跃的玩家社区，与志同道合的朋友一起畅玩",
  },
  {
    icon: Palette,
    title: "精美画质",
    description: "高品质视觉呈现，沉浸式的视听享受",
  },
  {
    icon: Globe,
    title: "全球覆盖",
    description: "多地区服务器部署，随时随地畅享游戏",
  },
]

export function Features() {
  return (
    <section className="py-24 bg-muted/30" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            为什么选择
            <span className="text-primary"> 未森趣玩</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            我们专注于为玩家提供最优质的游戏服务，让每一次游戏都成为难忘的体验
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group hover:shadow-lg hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
