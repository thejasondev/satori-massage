"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+5355396424?text=Hola,%20me%20gustaría%20reservar%20una%20sesión%20de%20masaje"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 flex items-center justify-center w-14 h-14 text-white rounded-full shadow-lg bottom-6 right-6 bg-gray-900 hover:bg-green-600 transition-colors"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}

