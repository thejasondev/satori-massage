import Link from "next/link"

const pricingOptions = [
  {
    name: "Sesión Individual",
    price: "$25",
    duration: "60 minutos",
    features: ["Consulta previa", "Técnica a elección", "Aromaterapia básica", "Música relajante"],
    cta: "Reservar sesión",
    popular: false,
  },
  {
    name: "Sesión Premium",
    price: "$60",
    duration: "90 minutos",
    features: [
      "Consulta personalizada",
      "Combinación de técnicas",
      "Aromaterapia premium",
      "Música a elección",
      "Ritual de bienvenida",
    ],
    cta: "Reservar sesión premium",
    popular: true,
  },
  {
    name: "Pack 5 Sesiones",
    price: "$110",
    duration: "60 minutos/sesión",
    features: [
      "Ahorra un 8%",
      "Programa personalizado",
      "Seguimiento entre sesiones",
      "Flexibilidad de horarios",
      "Técnicas variadas",
    ],
    cta: "Reservar pack",
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="precios" className="py-24 bg-muted/30">
      <div className="container">
        <h2 className="section-title fade-in-up">Nuestras Tarifas</h2>
        <p className="section-subtitle text-gray-500 fade-in-up">
          Precios transparentes y competitivos para todos nuestros servicios de masaje a domicilio.
        </p>

        <div className="grid max-w-4xl gap-8 mx-auto mt-16 stagger-container sm:grid-cols-2 lg:grid-cols-3">
          {pricingOptions.map((option) => (
            <div
              key={option.name}
              className={`flex flex-col p-6 rounded-xl stagger-item ${
                option.popular ? "bg-primary/5 border border-primary/20 relative" : "bg-card"
              }`}
            >
              {option.popular && (
                <div className="absolute px-4 py-1.5 text-sm font-medium -translate-x-1/2 rounded-full -top-3 left-1/2 bg-white border border-primary/20 text-primary shadow-sm">
                  Más popular
                </div>
              )}
              <h3 className="mb-2 text-xl font-medium">{option.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">{option.price}</span>
                <span className="text-sm text-muted-foreground"> / {option.duration}</span>
              </div>
              <ul className="mb-8 space-y-3">
                {option.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Link
                  href={`https://wa.me/+5355396424?text=Hola,%20me%20interesa%20reservar%20el%20servicio%20de%20${option.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={option.popular ? "btn-primary w-full text-center" : "btn-secondary w-full text-center"}
                >
                  {option.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
