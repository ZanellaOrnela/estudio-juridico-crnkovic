import SectionTransition from "./SectionTransition";
export default function TrajectorySection() {
  return (
    <section className="bg-[#BF926B]/10 relative overflow-hidden">
      <div className="max-w-content container-px mx-auto pt-16 md:pt-20 lg:pt-24 pb-24 md:pb-28 lg:pb-32 relative z-10 px-6 sm:px-8 md:px-4">
        <SectionTransition>
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#054035] font-montserrat mb-6">
              Por qué <span className="text-[#BF926B]">elegirnos</span>
            </h2>
            <div className="w-20 h-1 bg-[#BF926B] mx-auto rounded-full"></div>
          </div>
        </SectionTransition>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Ítems de valor */}
          {[
            {
              title: "+10 años de experiencia combinada",
              desc: "En Santa Cruz y Chubut, con conocimiento local y redes de apoyo.",
            },
            {
              title: "Atención directa de los abogados",
              desc: "Trato cercano, seguimiento personalizado y respuestas claras.",
            },
            {
              title: "Comunicación clara",
              desc: "Sin jerga innecesaria: explicamos opciones, riesgos y próximos pasos.",
            },
            {
              title: "Honorarios transparentes",
              desc: "Acuerdos por escrito, presupuestos y plazos definidos desde el inicio.",
            },
            {
              title: "Estrategia y prevención",
              desc: "Buscamos resolver el conflicto y prevenir que vuelva a ocurrir.",
            },
          ].map((item, idx) => (
            <SectionTransition key={item.title} delay={150 + idx * 120}>
              <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-lg border border-[#E8ECEB] transition-all duration-300 h-full relative overflow-hidden">
                {/* Header con check decorativo */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="mt-1 w-5 h-5 rounded-[6px] grid place-items-center border-2 border-[#054035] text-[#054035] font-bold text-[10px] leading-none">
                    ✓
                  </div>
                  <h3 className="font-montserrat font-bold text-[#054035] text-base">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-[#0A594B] font-lato leading-relaxed">
                  {item.desc}
                </p>
                {/* Acentos */}
                <div className="absolute bottom-0 right-0 w-20 h-12 bg-[#BF926B]/10 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </SectionTransition>
          ))}
        </div>
      </div>
    </section>
  );
}

