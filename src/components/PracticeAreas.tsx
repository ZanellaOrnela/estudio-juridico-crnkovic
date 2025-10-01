import SectionTransition from "./SectionTransition";

const SERVICES = [
  { 
    title: "Derecho Civil", 
    desc: "Contratos, daños y perjuicios, sucesiones y responsabilidad civil.",
    category: "Civil"
  },
  { 
    title: "Derecho Laboral", 
    desc: "Reclamos, despidos, conciliaciones y relaciones laborales.",
    category: "Laboral"
  },
  { 
    title: "Derecho Comercial", 
    desc: "Sociedades, concursos, quiebras y asesoría empresarial.",
    category: "Comercial"
  },
  { 
    title: "Derecho de Familia", 
    desc: "Divorcios, alimentos, guarda, adopciones y mediación familiar.",
    category: "Familia"
  },
  { 
    title: "Accidentes y Seguros", 
    desc: "Tránsito, ART, responsabilidad profesional y reclamos.",
    category: "Seguros"
  },
  { 
    title: "Derecho Inmobiliario", 
    desc: "Usucapión, desalojos, contratos de alquiler y compraventa.",
    category: "Inmobiliario"
  },
];

export default function PracticeAreas() {
  return (
    <section id="servicios" className="bg-[#333333] py-16 md:py-20 lg:py-24 pb-32 md:pb-40 lg:pb-48 px-4 sm:px-5 md:px-4">
      <div className="max-w-content container-px mx-auto">
        <SectionTransition>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-montserrat mb-6">
              Nuestros <span className="text-[#D96E48]">Servicios</span>
            </h2>
            <div className="w-20 h-1 bg-[#D96E48] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-[#cccccc] font-lato max-w-3xl mx-auto leading-relaxed">
              Abarcamos las principales ramas del derecho para brindarte soluciones
              integrales y oportunas con la experiencia de más de cuatro décadas.
            </p>
          </div>
        </SectionTransition>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <SectionTransition key={service.title} delay={100 + (index * 100)}>
              <div className="group bg-gradient-to-br from-white to-[#f8f8f8] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#333333]/5 hover:border-[#D96E48]/20 hover:-translate-y-2">
                {/* Indicador de categoría */}
                <div className="inline-block bg-[#D96E48]/10 text-[#D96E48] px-4 py-2 rounded-full text-sm font-semibold font-lato mb-6 uppercase tracking-wide">
                  {service.category}
                </div>
                
                <h3 className="font-bold text-xl lg:text-2xl text-[#333333] font-montserrat mb-4 group-hover:text-[#D96E48] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-base text-[#666666] font-lato leading-relaxed mb-6">
                  {service.desc}
                </p>
                
                <div className="flex items-center justify-between">
                  <button suppressHydrationWarning className="bg-[#D96E48] text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#c85a3a] transition-all font-lato hover:shadow-lg transform hover:scale-105">
                    Consultar
                  </button>
                  <div className="w-12 h-12 bg-[#D96E48]/10 rounded-full flex items-center justify-center group-hover:bg-[#D96E48]/20 transition-colors">
                    <svg className="w-5 h-5 text-[#D96E48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </SectionTransition>
          ))}
        </div>
      </div>
    </section>
  );
}
