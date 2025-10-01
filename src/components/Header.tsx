"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 bg-[#333333] z-50 backdrop-blur-sm border-b border-white/10 transition-all duration-300">
      <div className="max-w-content container-px mx-auto flex items-center justify-between h-16 md:h-20">
        <Link href="#inicio" className="flex items-center group">
          <div className="h-10 md:h-14 relative transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/ChatGPT Image 22 sept 2025, 01_24_32 p.m..png"
              alt="Estudio Jurídico Crnkovic - Logo"
              width={280}
              height={56}
              className="object-contain h-full w-auto"
              priority
              style={{ background: 'transparent' }}
            />
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm text-white font-lato">
          <a href="#inicio" className="relative py-2 hover:text-[#D96E48] transition-all duration-300 group">
            Inicio
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D96E48] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#nosotros" className="relative py-2 hover:text-[#D96E48] transition-all duration-300 group">
            Nosotros
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D96E48] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#servicios" className="relative py-2 hover:text-[#D96E48] transition-all duration-300 group">
            Servicios
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D96E48] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contacto" className="relative py-2 hover:text-[#D96E48] transition-all duration-300 group">
            Contacto
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D96E48] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>
        <div className="hidden md:block">
          <Link
            href="#contacto"
            className="px-3 md:px-4 h-8 md:h-10 inline-flex items-center justify-center rounded-full bg-[#D96E48] text-white font-semibold hover:bg-[#c85a3a] transition-all duration-300 hover:shadow-xl hover:shadow-[#D96E48]/25 hover:scale-105 font-lato text-xs md:text-sm"
          >
            Consulta Gratuita
          </Link>
        </div>
        <button
          className="lg:hidden inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded hover:bg-white/10 text-white transition-all duration-300 hover:scale-110"
          aria-label="Abrir menú"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
            aria-hidden
          >
            <path d="M3.75 6.75h16.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5Zm16.5 4.5H3.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5Zm0 6H3.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5Z" />
          </svg>
          <span className="sr-only">Menú</span>
        </button>
      </div>
      <div className={`lg:hidden bg-[#333333] border-t border-white/10 transition-all duration-300 overflow-hidden ${
        open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="container-px py-4 flex flex-col gap-1">
          <a href="#inicio" className="py-3 px-4 text-[#cccccc] hover:text-[#D96E48] rounded-lg font-lato transition-all duration-300" onClick={() => setOpen(false)}>Inicio</a>
          <a href="#nosotros" className="py-3 px-4 text-[#cccccc] hover:text-[#D96E48] rounded-lg font-lato transition-all duration-300" onClick={() => setOpen(false)}>Nosotros</a>
          <a href="#servicios" className="py-3 px-4 text-[#cccccc] hover:text-[#D96E48] rounded-lg font-lato transition-all duration-300" onClick={() => setOpen(false)}>Servicios</a>
          <a href="#contacto" className="py-3 px-4 text-[#cccccc] hover:text-[#D96E48] rounded-lg font-lato transition-all duration-300" onClick={() => setOpen(false)}>Contacto</a>
          <a
            href="#contacto"
            className="mt-3 px-4 h-10 inline-flex items-center justify-center rounded-full bg-[#D96E48] text-white font-semibold font-lato text-sm hover:bg-[#c85a3a] transition-all duration-300 hover:scale-105"
            onClick={() => setOpen(false)}
          >
            Consulta Gratuita
          </a>
        </div>
      </div>
    </header>
  );
}
