"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import PageLoadAnimation from "./PageLoadAnimation";

// Componente para las estrellitas animadas
function AnimatedStars() {
  const [stars, setStars] = useState<Array<{id: number, x: number, y: number, delay: number, duration: number}>>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Solo ejecutar en el cliente para evitar problemas de hidratación
    setMounted(true);
    
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 15; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100, // Posición X en porcentaje
          y: Math.random() * 100, // Posición Y en porcentaje
          delay: Math.random() * 4, // Delay de 0-4 segundos
          duration: 2 + Math.random() * 3, // Duración de 2-5 segundos
        });
      }
      setStars(newStars);
    };

    generateStars();
    // Regenerar estrellas cada 8 segundos para variedad
    const interval = setInterval(generateStars, 8000);
    return () => clearInterval(interval);
  }, []);

  // No renderizar nada hasta que esté montado en el cliente
  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute w-1 h-1 bg-yellow-200 rounded-full opacity-0 animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            boxShadow: '0 0 6px rgba(254, 240, 138, 0.8)',
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="bg-gradient-to-b from-[#333333] via-[#333333] to-[#403E28] relative overflow-visible">
      {/* Imagen de fondo de columnas */}
      <div className="absolute inset-0 w-full md:right-0 md:left-auto md:w-3/4">
        <PageLoadAnimation delay={100} animationType="fadeInRight" className="w-full h-full">
          <Image
            src="/columns.png"
            alt="Columnas de justicia"
            fill
            className="object-cover object-center"
            style={{
              opacity: 0.35,
              filter: 'grayscale(100%) contrast(1.5) brightness(0.7)',
              mixBlendMode: 'soft-light',
              maskImage: 'linear-gradient(to bottom right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.05) 20%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.8) 80%)',
              WebkitMaskImage: 'linear-gradient(to bottom right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.05) 20%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.8) 80%)',
              background: 'transparent'
            }}
          />
        </PageLoadAnimation>
      </div>
      
      {/* Elemento gráfico de fondo */}
      <PageLoadAnimation delay={200} animationType="scaleIn">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-[#403E28] to-[#D96E48] rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#D96E48] rounded-full blur-2xl opacity-30" />
        </div>
      </PageLoadAnimation>
      
      {/* Estrellitas animadas */}
      <AnimatedStars />
      
      <div className="relative max-w-content container-px mx-auto pt-8 md:pt-16 lg:pt-20 pb-28 sm:pb-36 md:pb-24 lg:pb-32 z-20 px-6 sm:px-8 md:px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid sm:grid-cols-4 md:grid-cols-1 gap-6 md:gap-0 md:space-y-6 sm:items-center">
            {/* Contenido de texto */}
            <div className="space-y-4 text-center sm:text-left md:text-left sm:col-span-3 sm:flex sm:flex-col sm:justify-center">
              <PageLoadAnimation delay={300} animationType="fadeInUp">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white font-montserrat leading-tight">
                  Soluciones Legales con{" "}
                  <span className="text-[#D96E48]">Integridad</span>{" "}
                  y Visión Moderna
                </h1>
              </PageLoadAnimation>
              <PageLoadAnimation delay={500} animationType="fadeInUp">
                <p className="text-base md:text-lg text-[#cccccc] font-lato leading-relaxed max-w-lg mx-auto sm:mx-0">
                  Asesoría confiable para un futuro seguro
                </p>
              </PageLoadAnimation>
            </div>
            
            {/* Botones */}
            <div className="flex flex-col gap-4 sm:gap-5 pt-6 pb-10 md:pb-16 sm:justify-center md:justify-start sm:col-span-1 sm:pt-0 sm:pb-0">
              <PageLoadAnimation delay={700} animationType="fadeInUp">
                <Link 
                  href="#servicios" 
                  className="w-full px-4 md:px-6 py-2.5 md:py-3 rounded-full bg-[#D96E48] text-white font-semibold hover:bg-[#c85a3a] transition-all hover:shadow-xl text-center font-lato text-sm md:text-base min-h-[44px] flex items-center justify-center"
                >
                  Nuestros Servicios
                </Link>
              </PageLoadAnimation>
              <PageLoadAnimation delay={800} animationType="fadeInUp">
                <Link 
                  href="#contacto" 
                  className="w-full px-4 md:px-6 py-2.5 md:py-3 rounded-full border-2 border-[#cccccc] text-white font-semibold hover:bg-white hover:text-[#333333] transition-all text-center font-lato text-sm md:text-base min-h-[44px] flex items-center justify-center"
                >
                  Contactar
                </Link>
              </PageLoadAnimation>
            </div>
          </div>
          
          {/* Espacio vacío donde estaba la balanza */}
          <div className="hidden md:block">
            {/* Espacio reservado para mantener el layout de 2 columnas */}
          </div>
        </div>
      </div>
      
      {/* Onda en la parte inferior */}
      <div className="absolute -bottom-2 sm:-bottom-4 md:bottom-0 left-0 right-0 z-10">
        <div className="relative">
          <svg
            viewBox="0 0 1200 200"
            preserveAspectRatio="none"
            className="w-full h-40 md:h-48"
          >
            <path
              d="M0,0 C120,160 280,160 600,80 C920,0 1080,140 1200,40 L1200,200 L0,200 Z"
              fill="#efefef"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}