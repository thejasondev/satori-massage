import Image from "next/image"
import { Users2, Award, Clock, Heart } from "lucide-react"

const stats = [
  {
    icon: Clock,
    value: "1+",
    label: "Años de experiencia",
    description: "Dedicación continua al bienestar"
  },
  {
    icon: Award,
    value: "5",
    label: "Certificaciones",
    description: "Formación profesional especializada"
  },
  {
    icon: Users2,
    value: "100+",
    label: "Clientes satisfechos",
    description: "Experiencias transformadoras"
  },
  {
    icon: Heart,
    value: "4",
    label: "Técnicas especializadas",
    description: "Adaptadas a tus necesidades"
  }
]

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 bg-background">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl aspect-square fade-in-up group">
            {/* Efecto de desvanecimiento en los bordes */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-transparent to-background/50"></div>
            </div>
            
            {/* Imagen principal con efecto de escala al hover */}
            <div className="relative w-full h-full transform transition-transform duration-10000 ease-in-out group-hover:scale-105">
              <Image
                src="/profile.JPG"
                alt="Masajista profesional"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Efecto de viñeta */}
            <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] z-10"></div>
            
            {/* Decoración de líneas sutiles */}
            <div className="absolute inset-0 border border-white/10 rounded-2xl z-10"></div>
          </div>

          <div>
            <h2 className="mb-6 text-4xl font-medium slide-in-right">Sobre Mí</h2>
            <p className="mb-4 text-gray-500 slide-in-right">
              Soy Suset, fundadora de Satori Massage y masajista certificada en
              diferentes técnicas terapéuticas y de relajación. Mi pasión es ayudar a las personas a encontrar alivio y
              bienestar a través del poder del tacto terapéutico.
            </p>
            <p className="mb-4 text-gray-500 slide-in-right">
              Cuento con certificaciones en masaje terapéutico, técnicas de relajación profunda, aromaterapia y masaje
              deportivo. Mi enfoque es personalizado, adaptando cada sesión a las necesidades específicas de cada
              cliente.
            </p>
            <p className="mb-12 text-gray-500 slide-in-right">
              El nombre <span className="font-brand text-3xl text-black">&ldquo;Satori&rdquo;</span> proviene de la filosofía zen y significa &ldquo;iluminación&rdquo; o &ldquo;comprensión&rdquo;. Mi objetivo es
              que cada cliente termine la sesión sintiéndose renovado, aliviado y en equilibrio, alcanzando su propio
              momento de claridad y bienestar.
            </p>
          </div>
        </div>

        <div className="grid gap-6 mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Icono con fondo y efecto hover */}
              <div className="mb-4 inline-flex rounded-xl bg-primary/5 p-3 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <stat.icon className="h-6 w-6" />
              </div>
              
              {/* Contenido */}
              <div className="relative z-10">
                <p className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</p>
                <p className="font-medium text-gray-800 mb-2">{stat.label}</p>
                <p className="text-sm text-gray-500">{stat.description}</p>
              </div>
              
              {/* Decoración de fondo */}
              <div className="absolute right-0 bottom-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                <stat.icon className="h-20 w-20 transform translate-x-5 translate-y-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
