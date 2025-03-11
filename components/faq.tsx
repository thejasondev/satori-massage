"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

type FAQItem = {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "¿Cómo funciona el servicio a domicilio?",
    answer:
      "Nos desplazamos a tu domicilio con todo el equipo necesario: camilla, toallas, aceites y música relajante. Solo necesitamos un espacio de aproximadamente 2x2 metros para instalar la camilla.",
  },
  {
    question: "¿Cuál es la duración de cada sesión?",
    answer:
      "Las sesiones estándar duran 60 minutos, mientras que las sesiones premium se extienden a 90 minutos. El tiempo incluye la instalación y recogida del equipo.",
  },
  {
    question: "¿Qué debo preparar antes de la sesión?",
    answer:
      "Simplemente asegúrate de tener un espacio despejado y, si es posible, mantén una temperatura agradable en la habitación. Todo lo demás lo proporcionamos nosotros.",
  },
  {
    question: "¿Cómo puedo reservar una cita?",
    answer:
      "Puedes reservar directamente a través de WhatsApp, llamando por teléfono o enviando un correo electrónico. Recomendamos reservar con al menos 24 horas de antelación.",
  },
  {
    question: "¿Cuáles son las formas de pago aceptadas?",
    answer:
      "Aceptamos efectivo, transferencia bancaria y pagos a través de Bizum. El pago se realiza al finalizar la sesión.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 bg-muted/20">
      <div className="container max-w-3xl">
        <h2 className="section-title fade-in-up">Preguntas Frecuentes</h2>
        <p className="section-subtitle text-gray-500 fade-in-up">
          Resolvemos tus dudas sobre nuestros servicios de masaje a domicilio
        </p>

        <div className="mt-12 space-y-4 stagger-container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden transition-all duration-200 bg-card rounded-lg shadow-sm stagger-item"
            >
              <button
                className="flex items-center justify-between w-full p-4 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
              <div
                className={`px-4 transition-all duration-200 ease-in-out ${
                  openIndex === index ? "max-h-40 pb-4" : "max-h-0 overflow-hidden"
                }`}
              >
                <p className="text-muted-foreground text-gray-500">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

