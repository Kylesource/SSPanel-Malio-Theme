"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

const products = [
  {
    title: "冒险之旅",
    category: "角色扮演",
    description: "踏上神秘的冒险旅程，探索未知的奇幻世界",
    rating: 4.9,
    players: "50万+",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    title: "星际征途",
    category: "策略游戏",
    description: "指挥星际舰队，征服浩瀚宇宙",
    rating: 4.8,
    players: "30万+",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "梦幻庄园",
    category: "模拟经营",
    description: "打造专属庄园，体验田园生活的惬意",
    rating: 4.9,
    players: "80万+",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "竞速传奇",
    category: "竞速游戏",
    description: "极速狂飙，在赛道上书写传奇",
    rating: 4.7,
    players: "25万+",
    gradient: "from-orange-500 to-red-500",
  },
]

export function Products() {
  return (
    <section className="py-24" id="products">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            热门
            <span className="text-primary"> 游戏产品</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            精心打造的游戏作品，为您带来不一样的精彩体验
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.title}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`h-40 bg-gradient-to-br ${product.gradient} relative`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-white text-xs font-medium">
                    {product.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {product.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{product.rating}</span>
                  </div>
                  <span className="text-muted-foreground">
                    {product.players} 玩家
                  </span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="ghost" className="w-full group/btn">
                  了解更多
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            查看全部游戏
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
