import SectionTransition from "./SectionTransition";
import Image from "next/image";

const TEAM = [
  { 
    name: "Lic. Ana García", 
    role: "Socia Fundadora", 
    specialty: "Derecho Civil y Comercial",
    experience: "40+ años de experiencia",
    image: "/abog1.png"
  },
  { 
    name: "Abog. Juan Pérez", 
    role: "Socio", 
    specialty: "Derecho Laboral y Previsional",
    experience: "25+ años de experiencia",
    image: "/abog2.png"
  },
  { 
    name: "Dra. María Rodríguez", 
    role: "Asociada Senior", 
    specialty: "Derecho de Familia y Sucesiones",
    experience: "15+ años de experiencia",
    image: "/abog3.png"
  },
];

export default function Team() {
  return (
    <section id="nosotros" className="bg-[#403E28] py-16 md:py-20 lg:py-24 relative px-6 sm:px-8 md:px-4">
      {/* Título flotante sobre la transición */}
      <div className="absolute -top-12 left-6 right-6 sm:left-12 sm:right-12 md:left-1/2 md:right-auto md:transform md:-translate-x-1/2 z-20">
        <div className="bg-white px-6 sm:px-8 md:px-12 py-6 md:py-8 shadow-xl border border-gray-100">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#403E28] font-montserrat mb-6">
              Conoce a Nuestro <span className="text-[#D96E48]">Equipo</span>
            </h2>
            <div className="w-20 h-1 bg-[#D96E48] mx-auto rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Elementos gráficos de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#737048] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#D96E48] rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-content container-px mx-auto">
        <SectionTransition>
          <div className="text-center mb-16 pt-24 sm:pt-28 md:pt-32">
            <p className="text-lg text-[#F5F5F5] font-lato max-w-3xl mx-auto leading-relaxed">
              Somos un estudio enfocado en brindar asesoramiento claro, efectivo y humano. 
              Nuestro equipo combina experiencia, actualización constante y un trato cercano 
              para garantizar el mejor resultado en cada caso.
            </p>
          </div>
        </SectionTransition>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {TEAM.map((member, index) => (
            <SectionTransition key={member.name} delay={200 + (index * 150)}>
              <div className="group bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden hover:bg-white/15 transition-all duration-500 border border-white/20 hover:border-[#D96E48]/40 hover:shadow-2xl hover:shadow-[#D96E48]/20">
                {/* Foto profesional - Protagonista */}
                <div className="relative overflow-hidden">
                  <div className="aspect-square w-full">
                    <Image 
                      src={member.image} 
                      alt={`Foto de ${member.name}`}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  {/* Overlay gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Badge de experiencia flotante */}
                  <div className="absolute top-4 right-4 bg-[#D96E48] text-white px-3 py-1 rounded-full text-xs font-semibold font-lato shadow-lg">
                    {member.experience.split(' ')[0]}
                  </div>
                </div>
                
                {/* Información del abogado */}
                <div className="p-6 text-center space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold text-white font-montserrat group-hover:text-[#D96E48] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-base md:text-lg text-[#D96E48] font-semibold font-lato">
                    {member.role}
                  </p>
                  <p className="text-[#F5F5F5] text-sm md:text-base font-lato leading-relaxed">
                    {member.specialty}
                  </p>
                  <div className="pt-2">
                    <span className="inline-block bg-white/10 text-[#CCCCCC] text-xs font-lato px-3 py-1 rounded-full border border-white/20">
                      {member.experience}
                    </span>
                  </div>
                </div>
              </div>
            </SectionTransition>
          ))}
        </div>
        
        {/* Sección de valores o misión */}
        <SectionTransition delay={800}>
          <div className="mt-20 text-center">
            <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white font-montserrat mb-6">
                Nuestra <span className="text-[#D96E48]">Misión</span>
              </h3>
              <p className="text-base md:text-lg text-[#F5F5F5] font-lato leading-relaxed">
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
