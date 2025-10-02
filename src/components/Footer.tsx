
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#054035] relative overflow-hidden">
      {/* Fondo sutil con trama */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #BF926B26 0 2px, transparent 2px 32px)'}} />
      {/* Acentos decorativos */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#BF926B] via-white/20 to-[#BF926B] opacity-60"></div>
      <div className="absolute -top-6 -left-6 w-36 h-36 bg-[#BF926B]/10 rounded-br-3xl"></div>
      <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-white/10 rounded-tl-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto py-16 px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo y descripción */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-24 h-24 flex items-center justify-center p-2">
                <Image
                  src="/logo (1).png"
                  alt="Estudio Jurídico Crnkovic - Logo"
                  width={80}
                  height={80}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl font-montserrat">
                  Estudio Jurídico Crnkovic
                </h3>
                <p className="text-[#BF926B] font-lato text-sm font-semibold">
                  Abogados en Santa Cruz y Chubut
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#BF926B] rounded-full"></div>
                <span className="text-white/80 font-lato text-sm">+10 años de experiencia combinada</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-white/60 rounded-full"></div>
                <span className="text-white/80 font-lato text-sm">Honorarios transparentes</span>
              </div>
            </div>
          </div>
          
          {/* Información de contacto */}
          <div className="space-y-6">
            <h4 className="text-white font-bold font-montserrat text-lg flex items-center gap-2">
              <div className="w-1 h-6 bg-[#BF926B] rounded-full"></div>
              Contacto
            </h4>
            <div className="w-10 h-0.5 bg-[#BF926B] rounded-full"></div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mt-0.5 group-hover:bg-white/20 transition-colors">
                  <svg className="w-4 h-4 text-[#BF926B]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-lato text-sm font-semibold">Dirección</p>
                  <a href="https://www.google.com/maps/search/?api=1&query=Galeria%20Comercial%20Local%2010%2C%20Av%2025%20de%20Mayo%2C%20Las%20Heras%20Santa%20Cruz%209017%20Argentina" target="_blank" rel="noopener noreferrer" className="text-white/80 font-lato text-sm hover:text-[#BF926B] transition-colors">Galería Comercial — Local 10, Av. 25 de Mayo, Las Heras (CP 9017)</a>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mt-0.5 group-hover:bg-white/20 transition-colors">
                  <svg className="w-4 h-4 text-[#BF926B]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-lato text-sm font-semibold">Teléfono</p>
                  <a href="tel:+5492974573242" className="text-white/80 font-lato text-sm hover:text-[#BF926B] transition-colors">297 457-3242</a>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mt-0.5 group-hover:bg-white/20 transition-colors">
                  <svg className="w-4 h-4 text-[#BF926B]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-lato text-sm font-semibold">Email</p>
                  <a href="mailto:estudiojuridicocrnk@gmail.com" className="text-white/80 font-lato text-sm hover:text-[#BF926B] transition-colors">estudiojuridicocrnk@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mt-0.5 group-hover:bg-white/20 transition-colors">
                  <svg className="w-4 h-4 text-[#BF926B]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-lato text-sm font-semibold">Horarios</p>
                  <p className="text-white/80 font-lato text-sm">Lun-Vie 9:00-18:00</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Áreas de práctica */}
          <div className="space-y-6">
            <h4 className="text-white font-bold font-montserrat text-lg flex items-center gap-2">
              <div className="w-1 h-6 bg-white/70 rounded-full"></div>
              Áreas de Práctica
            </h4>
            <div className="w-10 h-0.5 bg-[#BF926B] rounded-full"></div>
            <div className="space-y-3">
              <a href="#servicios" className="flex items-center gap-3 text-white/80 hover:text-[#BF926B] transition-colors group hover:underline underline-offset-4">
                <div className="w-2 h-2 bg-white/60 rounded-full group-hover:bg-[#BF926B] transition-colors transform group-hover:translate-x-1"></div>
                <span className="font-lato text-sm">Derecho de Familia</span>
              </a>
              <a href="#servicios" className="flex items-center gap-3 text-white/80 hover:text-[#BF926B] transition-colors group hover:underline underline-offset-4">
                <div className="w-2 h-2 bg-white/60 rounded-full group-hover:bg-[#BF926B] transition-colors transform group-hover:translate-x-1"></div>
                <span className="font-lato text-sm">Derecho Laboral</span>
              </a>
              <a href="#servicios" className="flex items-center gap-3 text-white/80 hover:text-[#BF926B] transition-colors group hover:underline underline-offset-4">
                <div className="w-2 h-2 bg-white/60 rounded-full group-hover:bg-[#BF926B] transition-colors transform group-hover:translate-x-1"></div>
                <span className="font-lato text-sm">Amparos de Salud</span>
              </a>
              <a href="#servicios" className="flex items-center gap-3 text-white/80 hover:text-[#BF926B] transition-colors group hover:underline underline-offset-4">
                <div className="w-2 h-2 bg-white/60 rounded-full group-hover:bg-[#BF926B] transition-colors transform group-hover:translate-x-1"></div>
                <span className="font-lato text-sm">Derecho Penal</span>
              </a>
              <a href="#servicios" className="flex items-center gap-3 text-white/80 hover:text-[#BF926B] transition-colors group hover:underline underline-offset-4">
                <div className="w-2 h-2 bg-white/60 rounded-full group-hover:bg-[#BF926B] transition-colors transform group-hover:translate-x-1"></div>
                <span className="font-lato text-sm">Defensa del Consumidor</span>
              </a>
            </div>
          </div>
          
          {/* Navegación */}
          <div className="space-y-6">
            <h4 className="text-white font-bold font-montserrat text-lg flex items-center gap-2">
              <div className="w-1 h-6 bg-[#BF926B] rounded-full"></div>
              Navegación
            </h4>
            <div className="w-10 h-0.5 bg-[#BF926B] rounded-full"></div>
            <div className="space-y-3">
              <a href="#inicio" className="flex items-center gap-3 text-white/80 hover:text-[#BF926B] transition-colors group hover:underline underline-offset-4">
                <div className="w-2 h-2 bg-[#BF926B] rounded-full group-hover:scale-125 transition-transform"></div>
                <span className="font-lato text-sm">Inicio</span>
              </a>
              <a href="#nosotros" className="flex items-center gap-3 text-white/80 hover:text-[#BF926B] transition-colors group hover:underline underline-offset-4">
                <div className="w-2 h-2 bg-[#BF926B] rounded-full group-hover:scale-125 transition-transform"></div>
                <span className="font-lato text-sm">Nosotros</span>
              </a>
              <a href="#servicios" className="flex items-center gap-3 text-white/80 hover:text-[#BF926B] transition-colors group hover:underline underline-offset-4">
                <div className="w-2 h-2 bg-[#BF926B] rounded-full group-hover:scale-125 transition-transform"></div>
                <span className="font-lato text-sm">Servicios</span>
              </a>
              <a href="#contacto" className="flex items-center gap-3 text-white/80 hover:text-[#BF926B] transition-colors group hover:underline underline-offset-4">
                <div className="w-2 h-2 bg-[#BF926B] rounded-full group-hover:scale-125 transition-transform"></div>
                <span className="font-lato text-sm">Contacto</span>
              </a>
            </div>
            
            {/* Redes sociales */}
            <div className="pt-4">
              <h5 className="text-white font-semibold font-montserrat text-sm mb-3">Síguenos</h5>
              <div className="flex items-center gap-3">
                <a href="https://m.facebook.com/EstudioJuridicoCrnk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors group">
                  <svg className="w-5 h-5 text-white/80 group-hover:text-[#BF926B] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://instagram.com/estudiojuridicocrnk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors group">
                  <svg className="w-5 h-5 text-white/80 group-hover:text-[#BF926B] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281H7.721c-.49 0-.875.385-.875.875v7.558c0 .49.385.875.875.875h8.558c.49 0 .875-.385.875-.875V8.582c0-.49-.385-.875-.875-.875z"/>
                  </svg>
                </a>
                <a href="https://wa.me/5492974573242" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors group">
                  <svg className="w-5 h-5 text-white/80 group-hover:text-[#BF926B] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Separador y footer inferior */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <p className="text-white/80 font-lato text-sm">
                © {new Date().getFullYear()} Estudio Jurídico Crnkovic. Todos los derechos reservados.
              </p>
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 bg-[#BF926B] rounded-full"></div>
                <span className="text-white/70 font-lato text-xs">Atención directa de abogados del estudio</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/80 hover:text-[#BF926B] transition-colors font-lato text-sm">
                Términos de Uso
              </a>
              <a href="#" className="text-white/80 hover:text-[#BF926B] transition-colors font-lato text-sm">
                Política de Privacidad
              </a>
            </div>
          </div>
          
          {/* Mensaje final */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
              <div className="w-2 h-2 bg-[#BF926B] rounded-full animate-pulse"></div>
              <span className="text-white/90 font-lato text-sm font-semibold">
                Consulta inicial. Respuesta en menos de 24 horas
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


