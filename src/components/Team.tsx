import SectionTransition from "./SectionTransition";
import Image from "next/image";

const TEAM = [
  { 
    name: "Natalia E. Crnkovic", 
    role: "Abogada", 
    specialty: "Formada en Universidad Nacional de la Patagonia San Juan Bosco",
    experience: "Matrícula STJ Santa Cruz T° IX F° 199",
    image: "/WhatsApp Image 2025-10-02 at 16.24.34.jpeg",
    facebook: "https://www.facebook.com/EstudioJuridicoCrnk/about/?utm_source=chatgpt.com"
  },
  { 
    name: "Nicolás A. Crnkovic", 
    role: "Abogado", 
    specialty: "Formado en Universidad Nacional de la Patagonia San Juan Bosco",
    experience: "Chubut E 363 T° II F° 164 · Matrícula Federal T° 122 F° 910 · STJ Santa Cruz T° XIV F° 045",
    image: "/Gemini_Generated_Image_n3yu3in3yu3in3yu.png",
    facebook: "https://m.facebook.com/EstudioJuridicoCrnk/posts/uno-de-los-integrantes-de-estudio-juridico-crnkovic-es-nicolas-a-crnkovic-abogad/434607449083812/?utm_source=chatgpt.com"
  },
];

export default function Team() {
  return (
    <section id="nosotros" className="bg-[#BF926B]/5 py-20 md:py-24 lg:py-28 relative px-6 sm:px-8 md:px-4 creative-section">
      {/* Fondo creativo: patrón diagonal */}
      <div aria-hidden className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute inset-0 diagonal-pattern opacity-20"></div>
        <div className="absolute inset-0 creative-grid opacity-10"></div>
      </div>
      <div className="relative max-w-content container-px mx-auto">
        <SectionTransition>
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#054035] font-montserrat mb-6 text-shadow">
              Conoce a Nuestro <span className="text-gradient">Equipo</span>
            </h2>
            <div className="w-20 h-1 bg-[#BF926B] mx-auto rounded-full mb-6"></div>
            <p className="text-base text-[#0A594B] font-lato max-w-3xl mx-auto leading-relaxed">
              Somos Natalia E. Crnkovic y Nicolás A. Crnkovic, hermanos y abogados formados en la Universidad Nacional de la Patagonia San Juan Bosco. 
              Trabajamos en equipo con enfoque estratégico y preventivo, priorizando soluciones reales, trato cercano y comunicación clara en cada etapa. 
              Actuamos en Santa Cruz y Chubut.
            </p>
          </div>
        </SectionTransition>
        
        <div className="grid sm:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto">
          {TEAM.map((member, index) => (
            <SectionTransition key={member.name} delay={200 + (index * 150)}>
              <div className="group advanced-card rounded-2xl overflow-hidden border border-[#E8ECEB] spotlight-effect h-full flex flex-col">
                {/* Foto grande superior */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] bg-[#F7F7F7]">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    className={`transition-transform duration-700 ease-out group-hover:scale-[1.03] object-cover ${index === 0 ? 'object-top' : ''}`}
                    priority={index === 0}
                  />
                </div>
                {/* Información del abogado */}
                <div className="p-8 text-center space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-[#054035] font-montserrat">
                      {member.name}
                    </h3>
                    <div className="inline-block bg-[#BF926B]/10 text-[#054035] text-sm font-lato px-4 py-2 rounded-full border border-[#BF926B]/20 mb-3">
                      {member.role}
                    </div>
                    <p className="text-[#0A594B] text-sm font-lato leading-relaxed mb-4">
                      {member.specialty}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <span className="inline-block bg-white text-[#054035] text-xs font-lato px-3 py-1 rounded-md border border-[#BF926B]/30 shadow-sm">
                      {member.experience}
                    </span>
                    {member.facebook && (
                      <div className="mt-2 relative z-10">
                        <a
                          href={member.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[#054035] hover:text-[#BF926B] transition-colors duration-300 text-sm font-lato hover:underline cursor-pointer relative z-20 px-2 py-1 rounded-md hover:bg-[#BF926B]/5"
                          style={{ pointerEvents: 'auto' }}
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                          Ver en Facebook
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </SectionTransition>
          ))}
        </div>
        
        {/* Sección de valores o misión */}
        <SectionTransition delay={800}>
          <div className="mt-20 text-center">
            <div className="max-w-4xl mx-auto bg-[#BF926B]/5 rounded-2xl p-10 border border-[#BF926B]/20 shadow-xl hover-lift hover-glow transition-all duration-500">
              <h3 className="text-xl md:text-2xl font-bold text-[#054035] font-montserrat mb-6">
                Nuestra <span className="text-gradient">Misión</span>
              </h3>
              <p className="text-base text-[#0A594B] font-lato leading-relaxed">
                Brindar soluciones legales integrales con los más altos estándares de calidad, 
                ética profesional y compromiso con nuestros clientes, construyendo relaciones 
                duraderas basadas en la confianza y los resultados exitosos.
              </p>
            </div>
          </div>
        </SectionTransition>
      </div>
    </section>
  );
}
