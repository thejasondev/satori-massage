"use client"

import { useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Pricing from "@/components/pricing"
import About from "@/components/about"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  // Inicializar animaciones al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")

            // Para elementos con animación escalonada
            if (entry.target.classList.contains("stagger-container")) {
              const items = entry.target.querySelectorAll(".stagger-item")
              items.forEach((item, index) => {
                setTimeout(() => {
                  item.classList.add("visible")
                }, 100 * index)
              })
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    // Observar elementos con animaciones
    const animatedElements = document.querySelectorAll(
      ".fade-in-up, .fade-in, .slide-in-left, .slide-in-right, .stagger-container",
    )

    animatedElements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <About />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

