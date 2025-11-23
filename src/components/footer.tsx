"use client"

import Link from "next/link"
import { Gamepad2, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  产品服务: [
    { name: "游戏中心", href: "#" },
    { name: "会员服务", href: "#" },
    { name: "开发者平台", href: "#" },
    { name: "API 接口", href: "#" },
  ],
  关于我们: [
    { name: "公司介绍", href: "#" },
    { name: "团队成员", href: "#" },
    { name: "加入我们", href: "#" },
    { name: "新闻动态", href: "#" },
  ],
  帮助支持: [
    { name: "帮助中心", href: "#" },
    { name: "用户协议", href: "#" },
    { name: "隐私政策", href: "#" },
    { name: "联系客服", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Gamepad2 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                未森趣玩
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              未森趣玩致力于为全球玩家打造优质的游戏娱乐体验，让游戏更有趣味与创意。
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>contact@weisenquwan.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>400-888-8888</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>中国 · 深圳</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} 未森趣玩. 保留所有权利.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              用户协议
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              隐私政策
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Cookie 设置
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
