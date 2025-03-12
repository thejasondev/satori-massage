"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Phone } from "lucide-react"

const navigation = [
  { name: "Inicio", href: "#inicio" },
  { name: "Servicios", href: "#servicios" },
  { name: "Precios", href: "#precios" },
  { name: "Sobre Mí", href: "#sobre-mi" },
  { name: "FAQ", href: "#faq" },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 bg-muted">
      <div className="container">
        {/* Logo y descripción siempre en la parte superior */}
        <div className="mb-8">
            <Link href="#inicio" className="relative z-40 flex items-center">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center">
                <Image src="/lotus.svg" alt="Logo Satori Massage" width={40} height={40} />
                </div>
                <div className="ml-2 flex flex-col">
                  <p className="font-brand text-4xl leading-none">Satori</p>
                  <p className="text-sm ml-2">Massage</p>
                </div>
              </div>
            </Link>
          <p className="text-sm mt-2 text-gray-500">
            Servicio profesional de masajes a domicilio. Relájate y rejuvenece en la comodidad de tu hogar.
          </p>
        </div>

        {/* Grid modificado para móviles */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase">Enlaces</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <a href="tel:+34123456789" className="text-sm text-muted-foreground hover:text-primary">
                  +53 55396424
                </a>
              </li>
              <li className="flex items-center">
                <Instagram className="w-4 h-4 mr-2 text-primary" />
                <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                  @satori_massage
                </a>
              </li>
              <li className="flex items-center">
                <Facebook className="w-4 h-4 mr-2 text-primary" />
                <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Satori Massage
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 text-sm text-center border-t border-muted-foreground/20 text-gray-500">
          <p> {currentYear} Satori Massage. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
