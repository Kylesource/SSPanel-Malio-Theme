import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "未森趣玩 - 让游戏更有趣味与创意",
  description: "未森趣玩致力于打造优质的游戏娱乐体验，为玩家带来创新、有趣、充满想象力的游戏产品",
  keywords: ["游戏", "未森趣玩", "游戏开发", "手机游戏", "休闲游戏"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
