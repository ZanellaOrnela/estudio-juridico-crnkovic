"use client";
import Link from "next/link";
import Image from "next/image";
import PageLoadAnimation from "./PageLoadAnimation";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-white">
      {/* Formas geométricas cuadradas */}
      <div aria-hidden className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Rectángulos principales */}
        <div className="absolute -top-16 left-8 w-72 h-72 opacity-15" style={{ background: 'linear-gradient(135deg, #BF926B 0%, #A67859 100%)' }} />
        <div className="absolute -bottom-16 -right-16 w-80 h-80 opacity-12" style={{ background: 'linear-gradient(45deg, #0A594B 0%, #054035 100%)' }} />
        
        {/* Cuadrados decorativos */}
        <div className="absolute top-24 right-12 w-24 h-24 opacity-20" style={{ background: '#BF926B' }} />
        <div className="absolute bottom-40 left-16 w-20 h-20 opacity-25" style={{ background: '#0A594B' }} />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 opacity-18" style={{ background: '#BF926B' }} />
        <div className="absolute top-3/4 right-1/4 w-12 h-12 opacity-22" style={{ background: '#0A594B' }} />
        
        {/* Líneas rectas decorativas */}
        <div className="absolute top-1/3 left-0 w-40 h-1 opacity-30" style={{ background: 'linear-gradient(90deg, #BF926B, transparent)' }} />
        <div className="absolute bottom-1/4 right-0 w-32 h-1 opacity-25" style={{ background: 'linear-gradient(-90deg, #0A594B, transparent)' }} />
        <div className="absolute top-1/2 left-0 w-24 h-1 opacity-35" style={{ background: 'linear-gradient(90deg, #BF926B, transparent)' }} />
        
        {/* Patrón de cuadrados pequeños */}
        <div className="absolute top-20 left-1/2 w-3 h-3 opacity-25" style={{ background: '#BF926B' }} />
        <div className="absolute top-28 left-1/2 w-2 h-2 opacity-30" style={{ background: '#0A594B' }} />
        <div className="absolute top-36 left-1/2 w-2.5 h-2.5 opacity-28" style={{ background: '#BF926B' }} />
        <div className="absolute top-44 left-1/2 w-1.5 h-1.5 opacity-32" style={{ background: '#0A594B' }} />
        
        {/* Gradiente de fondo sutil */}
        <div className="absolute inset-0 opacity-3" style={{ background: 'linear-gradient(45deg, #BF926B 0%, transparent 50%, #0A594B 100%)' }} />
      </div>

      <div className="relative max-w-content container-px mx-auto pt-24 md:pt-28 lg:pt-32 pb-20 md:pb-24 lg:pb-28 z-10">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Columna izquierda */}
          <div className="space-y-5">
            <PageLoadAnimation delay={150} animationType="fadeInUp">
              <h1 className="font-montserrat text-[#054035] text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-shadow">
                Estudio Jurídico Crnkovic - Abogados en Santa Cruz y Chubut
              </h1>
            </PageLoadAnimation>
            <PageLoadAnimation delay={200} animationType="fadeInUp">
              <h2 className="font-montserrat text-[#BF926B] text-lg sm:text-xl lg:text-2xl font-semibold">
                Defensa estratégica y cercana.
              </h2>
            </PageLoadAnimation>
            <PageLoadAnimation delay={250} animationType="fadeInUp">
              <div className="w-16 h-1 rounded-full" style={{ background: '#BF926B' }} />
            </PageLoadAnimation>
            <PageLoadAnimation delay={350} animationType="fadeInUp">
              <p className="text-[#0A594B] font-lato text-base max-w-xl leading-relaxed">
                Más de 10 años de ejercicio profesional, atención directa de abogados y un objetivo claro: una defensa de calidad y excelencia, al alcance de cada cliente.
              </p>
            </PageLoadAnimation>
            <PageLoadAnimation delay={400} animationType="fadeInUp">
              <div className="glass-morphism border-l-4 border-[#BF926B] p-4 rounded-r-lg neon-glow">
                <p className="text-[#054035] font-lato font-semibold text-base">
                  ¿Necesitás asesoramiento ahora?
                </p>
                <p className="text-[#0A594B] font-lato text-sm mt-1">
                  Contactanos directamente para una consulta inmediata
                </p>
              </div>
            </PageLoadAnimation>
            <PageLoadAnimation delay={500} animationType="fadeInUp">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <Link
                  href="https://wa.me/5492974573242?text=Hola%20quisiera%20hacer%20una%20consulta"
                  className="creative-button hover-lift hover-glow inline-flex items-center justify-center px-4 sm:px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 text-sm sm:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Escribir por WhatsApp
                </Link>
                <Link
                  href="tel:+5492974573242"
                  className="hover-lift hover-scale inline-flex items-center justify-center px-4 sm:px-6 py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base"
                  style={{ color: '#054035', borderColor: '#BF926B', borderWidth: 2 }}
                >
                  Llamar ahora
                </Link>
                <Link
                  href="#contacto"
                  className="hover-lift hover-scale inline-flex items-center justify-center px-4 sm:px-6 py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base"
                  style={{ color: '#054035', borderColor: '#BF926B', borderWidth: 2 }}
                >
                  Enviar consulta
                </Link>
              </div>
            </PageLoadAnimation>
          </div>

          {/* Columna derecha: imagen */}
          <PageLoadAnimation delay={300} animationType="fadeInUp">
            <div className="relative w-full max-w-md mx-auto md:ml-auto">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl hover-lift group">
                <Image
                  src="/Gemini_Generated_Image_pn2wnwpn2wnwpn2w.png"
                  alt="Estudio Jurídico Crnkovic - Abogados profesionales en Santa Cruz y Chubut"
                  fill
                  className="object-cover object-center scale-140 group-hover:scale-145 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </PageLoadAnimation>
        </div>
      </div>
    </section>
  );
}