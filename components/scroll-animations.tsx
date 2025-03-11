"use client"

import { useEffect, useRef } from "react"

export default function ScrollAnimations() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Configurar el observador de intersección para las animaciones
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    // Seleccionar todos los elementos con clases de animación
    const animatedElements = document.querySelectorAll(".fade-in-up, .fade-in, .slide-in-left, .slide-in-right")

    // Observar cada elemento
    animatedElements.forEach((element) => {
      if (observerRef.current) {
        observerRef.current.observe(element)
      }
    })

    // Limpiar el observador al desmontar
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return null
}

