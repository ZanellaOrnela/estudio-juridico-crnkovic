import SectionTransition from "./SectionTransition";
import Link from "next/link";

const PRACTICE_AREAS = [
  {
    title: "Derecho de Familia",
    services: [
      "Cuota alimentaria",
      "Régimen de comunicación", 
      "Divorcio (unilateral y por presentación conjunta)",
      "Separación de bienes",
      "Uniones convivenciales",
      "Compensación económica",
      "Sucesiones",
      "Filiación"
    ],
  },
  {
    title: "Derecho Laboral",
    services: [
      "Despidos (directos e indirectos)",
      "Accidentes y enfermedades laborales (ART)",
      "Diferencias salariales",
      "Multas por registración deficiente"
    ],
  },
  {
    title: "Amparos de Salud",
    services: [
      "Coberturas médicas",
      "Medicación",
      "Prácticas y tratamientos",
      "Afiliaciones y prestaciones"
    ],
  },
  {
    title: "Derecho Penal",
    services: [
      "Defensas integrales",
      "Asistencia en indagatoria",
      "Excarcelaciones",
      "Recursos",
      "Juicios"
    ],
  },
  {
    title: "Derecho Administrativo",
    services: [
      "Sanciones",
      "Contrataciones públicas",
      "Recursos administrativos y judiciales"
    ],
  },
  {
    title: "Ejecuciones y Cobros",
    services: [
      "Ejecución de pagarés",
      "Cobro de deudas",
      "Ejecuciones de contrato"
    ],
  },
  {
    title: "Daños y Perjuicios / Mala Praxis",
    services: [
      "Responsabilidad civil",
      "Mala praxis médica",
      "Daños materiales y morales"
    ],
  },
  {
    title: "Defensa del Consumidor",
    services: [
      "Planes de ahorro, bancos, tarjetas y servicios",
      "Publicidad engañosa",
      "Cláusulas abusivas"
    ],
  }
];

export default function PracticeAreas() {
  return (
    <section id="servicios" className="bg-[#054035]/5 py-20 md:py-24 lg:py-28 relative px-6 sm:px-8 md:px-4 creative-section">
      {/* Fondo creativo: patrón avanzado */}
      <div aria-hidden className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute inset-0 creative-grid opacity-15"></div>
        <div className="absolute -top-10 -right-10 w-64 h-64 rounded-2xl bg-[#BF926B]/10 morphing-shape"></div>
        <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-2xl bg-[#054035]/10 morphing-shape"></div>
      </div>

      <div className="relative max-w-content container-px mx-auto">
        <SectionTransition>
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#054035] font-montserrat mb-6 text-shadow">
              Áreas de <span className="text-gradient">Práctica</span>
            </h2>
            <div className="w-20 h-1 bg-[#BF926B] mx-auto rounded-full mb-6"></div>
            <p className="text-base text-[#0A594B] font-lato max-w-3xl mx-auto leading-relaxed">
              Abarcamos las principales ramas del derecho para brindarte soluciones
              integrales y oportunas con la experiencia de más de cuatro décadas.
            </p>
          </div>
        </SectionTransition>
        {/* Chips de categorías */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {PRACTICE_AREAS.slice(0,6).map((a) => (
            <span key={a.title} className="text-xs font-montserrat tracking-wide px-3 py-1 rounded-full border border-[#BF926B]/30 text-[#054035] bg-white">
              {a.title}
            </span>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {PRACTICE_AREAS.map((area, index) => (
            <SectionTransition key={area.title} delay={100 + (index * 100)}>
              <div className="group advanced-card rounded-2xl p-0 shadow-lg border border-[#E8ECEB] relative overflow-hidden h-full flex flex-col gradient-border">
                {/* Header sólido */}
                <div className="bg-[#054035] text-white px-6 py-4 flex items-center justify-between">
                  <h3 className="font-bold text-base lg:text-lg font-montserrat">
                    {area.title}
                  </h3>
                  <div className="flex gap-1 opacity-80">
                    <span className="inline-block w-8 h-1 bg-[#BF926B] rounded-full"></span>
                    <span className="inline-block w-4 h-1 bg-white/60 rounded-full"></span>
                  </div>
                </div>

                {/* Lista de servicios */}
                <div className="p-6 flex-1">
                  <ul className="text-sm text-[#0A594B] font-lato leading-relaxed space-y-2">
                    {area.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start">
                        <span className="mt-1 mr-3 inline-flex items-center justify-center w-4 h-4 rounded-[4px] border border-[#054035] text-[#054035] text-[10px] font-bold">✓</span>
                        <span className="text-sm leading-relaxed">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer decorativo */}
                <div className="px-6 pb-6">
                  <div className="h-px bg-gradient-to-r from-[#BF926B] via-transparent to-transparent"></div>
                </div>
              </div>
            </SectionTransition>
          ))}
        </div>

        {/* CTA Section */}
        <SectionTransition delay={900}>
          <div className="mt-20 text-center">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#BF926B]/5 to-[#BF926B]/10 rounded-3xl p-10 border border-[#BF926B]/20 shadow-xl relative overflow-hidden hover-lift hover-glow transition-all duration-500">
              {/* Elementos decorativos de fondo */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-[#BF926B]/5 rounded-br-3xl"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#054035]/5 rounded-tl-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-[#054035] font-montserrat mb-6">
                  ¿Tu caso no figura?
                </h3>
                <p className="text-base text-[#0A594B] font-lato leading-relaxed mb-8 max-w-2xl mx-auto">
                  Contanos tu situación: evaluamos viabilidad y próximos pasos sin tecnicismos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="https://wa.me/5492974573242?text=Hola%20quisiera%20hacer%20una%20consulta"
                    className="btn-primary hover-lift hover-glow inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white bg-[#054035] transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Escribir por WhatsApp
                  </Link>
                  <Link
                    href="#contacto"
                    className="hover-lift hover-scale inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-[#054035] border-2 border-[#BF926B] hover:bg-[#BF926B] hover:text-white transition-all duration-300"
                  >
                    Enviar consulta
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SectionTransition>
      </div>
    </section>
  );
}