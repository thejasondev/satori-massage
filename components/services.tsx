import Link from "next/link"
import { Feather, Leaf, Droplets, Sparkles } from "lucide-react"

const services = [
  {
    name: "Masaje Relajante",
    description:
      "Alivia el estrés y la tensión con movimientos suaves que promueven la relajación profunda y el bienestar general.",
    icon: Feather,
  },
  {
    name: "Masaje Terapéutico",
    description:
      "Enfocado en aliviar dolores musculares específicos y mejorar la movilidad con técnicas de presión moderada a profunda.",
    icon: Leaf,
  },
  {
    name: "Aromaterapia",
    description:
      "Combina los beneficios del masaje con aceites esenciales seleccionados para potenciar los efectos terapéuticos y relajantes.",
    icon: Droplets,
  },
  {
    name: "Masaje Deportivo",
    description:
      "Diseñado para atletas y personas activas, ayuda en la recuperación muscular y prevención de lesiones.",
    icon: Sparkles,
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="container">
        <h2 className="section-title fade-in-up">Nuestros Servicios</h2>
        <p className="section-subtitle text-gray-500 fade-in-up">
          Ofrecemos una variedad de técnicas de masaje personalizadas para satisfacer tus necesidades específicas.
        </p>

        <div className="grid gap-8 mt-16 stagger-container sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.name} className="card flex flex-col stagger-item">
              <div className="p-3 mb-4 rounded-full w-fit bg-primary/10">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mb-2 text-4xl font-medium font-brand">{service.name}</h3>
              <p className="mb-6 text-gray-500">{service.description}</p>
              <div className="mt-auto">
                <Link
                  href={`https://wa.me/1234567890?text=Hola,%20me%20interesa%20el%20servicio%20de%20${service.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors text-primary hover:text-primary/80 font-semibold"
                >
                  Reservar →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

