import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-20 pb-24 overflow-hidden bg-muted/30"
    >
      <div className="container relative z-10 flex flex-col items-center">
        <div className="max-w-3xl mx-auto text-center mt-20">
          <h1 className="mb-6 text-4xl font-medium tracking-tight fade-in-up sm:text-5xl md:text-6xl">
            Bienestar y armonía en la comodidad de tu hogar
          </h1>
          <p className="mb-10 text-lg text-muted-foreground text-gray-500 fade-in-up">
            Experimenta la transformación a través del tacto terapéutico.{" "}
              <span className="font-brand text-4xl text-black">Satori</span>{" "}
              <span className="text-black">Massage</span> lleva la experiencia de un spa profesional directamente a tu
            puerta.
          </p>
          <Link
            href="https://wa.me/+5355396424?text=Hola,%20me%20gustaría%20reservar%20una%20sesión%20de%20masaje"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary fade-in"
          >
            Reserva tu sesión ahora
          </Link>
        </div>

        <div className="relative w-full max-w-5xl mt-16 aspect-[4/3] sm:aspect-[16/9] rounded-2xl overflow-hidden fade-in-up group">
          {/* Efecto de desvanecimiento en los bordes */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-background/50"></div>
          </div>
          
          {/* Imagen principal con efecto de escala al hover */}
          <div className="relative w-full h-full transform transition-transform duration-10000 ease-in-out group-hover:scale-105">
            <Image
              src="/masaje4.jpg?height=900&width=1600"
              alt="Masaje terapéutico profesional"
              fill
              className="object-cover filter brightness-[0.9] contrast-[1.05]"
              priority
            />
          </div>
          
          {/* Efecto de viñeta */}
          <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_100px_rgba(0,0,0,0.2)] z-10"></div>
          
          {/* Efecto de brillo suave en los bordes */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-1000 bg-gradient-to-r from-primary/10 via-white/20 to-primary/10 z-10"></div>
          
          {/* Decoración de líneas sutiles */}
          <div className="absolute inset-0 border border-white/10 rounded-2xl z-10"></div>
          
          {/* Efecto de desvanecimiento radial */}
          <div className="absolute inset-0 bg-radial-gradient z-10"></div>
        </div>
      </div>

      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
