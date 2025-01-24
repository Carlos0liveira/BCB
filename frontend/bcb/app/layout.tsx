import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BCB - Big Chat Brasil",
  description: "Plataforma de comunicação empresarial",
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <html lang="pt-BR" className="h-full">
      <body className={`${inter.className} antialiased bg-background text-foreground flex flex-col min-h-screen`}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <MainNav />
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </ThemeProvider>
      </body>
      </html>
  )
}