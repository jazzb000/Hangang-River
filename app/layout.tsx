import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { StagewiseToolbar } from '@stagewise/toolbar-next'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "한강 플러스 - 한강에서의 모든 것",
  description: "한강에서의 모임, 서비스, 이벤트를 한 곳에서. 한강을 더 편리하고 즐겁게 이용하세요.",
    generator: 'dolphinincali'
}

const stagewiseConfig = {
  plugins: []
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          {process.env.NODE_ENV === 'development' && (
            <StagewiseToolbar config={stagewiseConfig} />
          )}
        </ThemeProvider>
      </body>
    </html>
  )
}
