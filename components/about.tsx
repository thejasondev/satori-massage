import Image from "next/image"

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 bg-background">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-xl aspect-square fade-in-up">
            {/* Espacio para foto de la masajista */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-30"></div>
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Masajista profesional"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-medium slide-in-right">Sobre Mí</h2>
            <p className="mb-4 text-gray-500 slide-in-right">
              Soy Ana, fundadora de Satori Massage y masajista certificada con más de 8 años de experiencia en
              diferentes técnicas terapéuticas y de relajación. Mi pasión es ayudar a las personas a encontrar alivio y
              bienestar a través del poder del tacto terapéutico.
            </p>
            <p className="mb-4 text-gray-500 slide-in-right">
              Cuento con certificaciones en masaje terapéutico, técnicas de relajación profunda, aromaterapia y masaje
              deportivo. Mi enfoque es personalizado, adaptando cada sesión a las necesidades específicas de cada
              cliente.
            </p>
            <p className="mb-8 text-gray-500 slide-in-right">
              El nombre <span className="font-brand text-3xl text-black">"Satori"</span> proviene de la filosofía zen y significa "iluminación" o "comprensión". Mi objetivo es
              que cada cliente termine la sesión sintiéndose renovado, aliviado y en equilibrio, alcanzando su propio
              momento de claridad y bienestar.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="p-4 text-center rounded-lg bg-muted fade-in">
                <p className="text-2xl font-bold">8+</p>
                <p className="text-sm text-muted-foreground">Años de experiencia</p>
              </div>
              <div className="p-4 text-center rounded-lg bg-muted fade-in">
                <p className="text-2xl font-bold">5</p>
                <p className="text-sm text-muted-foreground">Certificaciones</p>
              </div>
              <div className="p-4 text-center rounded-lg bg-muted fade-in">
                <p className="text-2xl font-bold">500+</p>
                <p className="text-sm text-muted-foreground">Clientes satisfechos</p>
              </div>
              <div className="p-4 text-center rounded-lg bg-muted fade-in">
                <p className="text-2xl font-bold">4</p>
                <p className="text-sm text-muted-foreground">Técnicas especializadas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

