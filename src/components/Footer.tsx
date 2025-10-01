
export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border-t border-[#D96E48]/20 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#D96E48] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-[#737048] rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-content container-px mx-auto py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Logo y descripción */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D96E48] to-[#E47A34] rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl font-montserrat">EJC</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl font-montserrat">
                  Estudio Jurídico Crnkovic
                </h3>
                <p className="text-[#D96E48] font-lato text-sm font-semibold">
                  Estudio Jurídico
                </p>
              </div>
            </div>
            <p className="text-[#CCCCCC] font-lato leading-relaxed text-base max-w-lg">
              Más de 40 años brindando soluciones legales con integridad, 
              experiencia y visión moderna. Protegemos tus intereses con 
              el más alto nivel profesional.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#D96E48] rounded-full"></div>
                <span className="text-[#CCCCCC] font-lato text-sm">Fundado en 1983</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#737048] rounded-full"></div>
                <span className="text-[#CCCCCC] font-lato text-sm">+1000 casos exitosos</span>
              </div>
            </div>
          </div>
          
          {/* Información de contacto */}
          <div className="space-y-6">
            <h4 className="text-white font-bold font-montserrat text-lg flex items-center gap-2">
              <div className="w-1 h-6 bg-[#D96E48] rounded-full"></div>
              Contacto
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-[#D96E48]/20 rounded-lg flex items-center justify-center mt-0.5 group-hover:bg-[#D96E48]/30 transition-colors">
                  <div className="w-3 h-3 bg-[#D96E48] rounded-full"></div>
                </div>
                <div>
                  <p className="text-white font-lato text-sm font-semibold">Dirección</p>
                  <p className="text-[#CCCCCC] font-lato text-sm">Av. Corrientes 1234, CABA</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-[#D96E48]/20 rounded-lg flex items-center justify-center mt-0.5 group-hover:bg-[#D96E48]/30 transition-colors">
                  <div className="w-3 h-3 bg-[#D96E48] rounded-full"></div>
                </div>
                <div>
                  <p className="text-white font-lato text-sm font-semibold">Teléfono</p>
                  <p className="text-[#CCCCCC] font-lato text-sm">(011) 4567-8900</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-[#D96E48]/20 rounded-lg flex items-center justify-center mt-0.5 group-hover:bg-[#D96E48]/30 transition-colors">
                  <div className="w-3 h-3 bg-[#D96E48] rounded-full"></div>
                </div>
                <div>
                  <p className="text-white font-lato text-sm font-semibold">Email</p>
                  <p className="text-[#CCCCCC] font-lato text-sm">info@perezasociados.com.ar</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-[#737048]/20 rounded-lg flex items-center justify-center mt-0.5 group-hover:bg-[#737048]/30 transition-colors">
                  <div className="w-3 h-3 bg-[#737048] rounded-full"></div>
                </div>
                <div>
                  <p className="text-white font-lato text-sm font-semibold">Horarios</p>
                  <p className="text-[#CCCCCC] font-lato text-sm">Lun-Vie 9:00-18:00</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Áreas de práctica */}
          <div className="space-y-6">
            <h4 className="text-white font-bold font-montserrat text-lg flex items-center gap-2">
              <div className="w-1 h-6 bg-[#737048] rounded-full"></div>
              Áreas de Práctica
            </h4>
            <div className="space-y-3">
              <a href="#servicios" className="flex items-center gap-3 text-[#CCCCCC] hover:text-[#D96E48] transition-colors group">
                <div className="w-2 h-2 bg-[#737048] rounded-full group-hover:bg-[#D96E48] transition-colors"></div>
                <span className="font-lato text-sm">Derecho Civil</span>
              </a>
              <a href="#servicios" className="flex items-center gap-3 text-[#CCCCCC] hover:text-[#D96E48] transition-colors group">
                <div className="w-2 h-2 bg-[#737048] rounded-full group-hover:bg-[#D96E48] transition-colors"></div>
                <span className="font-lato text-sm">Derecho Comercial</span>
              </a>
              <a href="#servicios" className="flex items-center gap-3 text-[#CCCCCC] hover:text-[#D96E48] transition-colors group">
                <div className="w-2 h-2 bg-[#737048] rounded-full group-hover:bg-[#D96E48] transition-colors"></div>
                <span className="font-lato text-sm">Derecho Laboral</span>
              </a>
              <a href="#servicios" className="flex items-center gap-3 text-[#CCCCCC] hover:text-[#D96E48] transition-colors group">
                <div className="w-2 h-2 bg-[#737048] rounded-full group-hover:bg-[#D96E48] transition-colors"></div>
                <span className="font-lato text-sm">Derecho de Familia</span>
              </a>
              <a href="#servicios" className="flex items-center gap-3 text-[#CCCCCC] hover:text-[#D96E48] transition-colors group">
                <div className="w-2 h-2 bg-[#737048] rounded-full group-hover:bg-[#D96E48] transition-colors"></div>
                <span className="font-lato text-sm">Sucesiones</span>
              </a>
            </div>
          </div>
          
          {/* Navegación */}
          <div className="space-y-6">
            <h4 className="text-white font-bold font-montserrat text-lg flex items-center gap-2">
              <div className="w-1 h-6 bg-[#D96E48] rounded-full"></div>
              Navegación
            </h4>
            <div className="space-y-3">
              <a href="#inicio" className="flex items-center gap-3 text-[#CCCCCC] hover:text-[#D96E48] transition-colors group">
                <div className="w-2 h-2 bg-[#D96E48] rounded-full group-hover:scale-125 transition-transform"></div>
                <span className="font-lato text-sm">Inicio</span>
              </a>
              <a href="#nosotros" className="flex items-center gap-3 text-[#CCCCCC] hover:text-[#D96E48] transition-colors group">
                <div className="w-2 h-2 bg-[#D96E48] rounded-full group-hover:scale-125 transition-transform"></div>
                <span className="font-lato text-sm">Nosotros</span>
              </a>
              <a href="#servicios" className="flex items-center gap-3 text-[#CCCCCC] hover:text-[#D96E48] transition-colors group">
                <div className="w-2 h-2 bg-[#D96E48] rounded-full group-hover:scale-125 transition-transform"></div>
                <span className="font-lato text-sm">Servicios</span>
              </a>
              <a href="#contacto" className="flex items-center gap-3 text-[#CCCCCC] hover:text-[#D96E48] transition-colors group">
                <div className="w-2 h-2 bg-[#D96E48] rounded-full group-hover:scale-125 transition-transform"></div>
                <span className="font-lato text-sm">Contacto</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Separador y footer inferior */}
        <div className="border-t border-[#D96E48]/20 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <p className="text-[#CCCCCC] font-lato text-sm">
                {new Date().getFullYear()} Estudio Jurídico Crnkovic. Todos los derechos reservados.
              </p>
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 bg-[#D96E48] rounded-full"></div>
                <span className="text-[#737048] font-lato text-xs">Matrícula Profesional N° 12345</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-[#CCCCCC] hover:text-[#D96E48] transition-colors font-lato text-sm">
                Términos de Uso
              </a>
              <a href="#" className="text-[#CCCCCC] hover:text-[#D96E48] transition-colors font-lato text-sm">
                Política de Privacidad
              </a>
              
              {/* Redes sociales profesionales */}
              <div className="flex items-center gap-3 ml-4">
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#D96E48]/20 transition-colors group">
                  <div className="w-3 h-3 bg-[#CCCCCC] rounded-sm group-hover:bg-[#D96E48] transition-colors"></div>
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#D96E48]/20 transition-colors group">
                  <div className="w-3 h-3 bg-[#CCCCCC] rounded-full group-hover:bg-[#D96E48] transition-colors"></div>
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#D96E48]/20 transition-colors group">
                  <div className="w-3 h-3 bg-[#CCCCCC] rounded group-hover:bg-[#D96E48] transition-colors"></div>
                </a>
              </div>
            </div>
          </div>
          
          {/* Mensaje final */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D96E48]/10 rounded-full border border-[#D96E48]/20">
              <div className="w-2 h-2 bg-[#D96E48] rounded-full animate-pulse"></div>
              <span className="text-[#D96E48] font-lato text-sm font-semibold">
                Consulta gratuita disponible las 24 horas
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

