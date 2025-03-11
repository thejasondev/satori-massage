import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, Ingrid_Darling } from "next/font/google"
import "./globals.css"

// Fuentes
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const ingridDarling = Ingrid_Darling({
  weight: "400", 
  subsets: ["latin"],
  variable: "--font-ingrid-darling",
})

export const metadata: Metadata = {
  title: "Satori Massage | Masajes a domicilio",
  description: "Servicios profesionales de masajes terapéuticos y relajantes a domicilio. Reserva tu sesión hoy mismo.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} ${ingridDarling.variable}`} suppressHydrationWarning>
      <body className="min-h-dvh bg-background text-foreground">{children}</body>
    </html>
  )
}
