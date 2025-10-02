import SectionTransition from "./SectionTransition";

const WORK_STEPS = [
  {
    step: "01",
    title: "Escucha y diagnóstico",
    description:
      "Recibimos tu consulta (WhatsApp/mail) y coordinamos una entrevista inicial presencial u online.",
  },
  {
    step: "02",
    title: "Estrategia y presupuesto claro",
    description: "Objetivos, plazos y honorarios por escrito.",
  },
  {
    step: "03",
    title: "Gestión y seguimiento",
    description: "Presentaciones, audiencias y negociaciones con informes periódicos.",
  },
  {
    step: "04",
    title: "Cierre y prevención",
    description:
      "Buscamos el mejor resultado y te asesoramos para evitar nuevos conflictos.",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-white py-20 md:py-24 lg:py-28 relative px-6 sm:px-8 md:px-4 creative-section">
      {/* Fondo creativo con elementos flotantes */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none select-none overflow-hidden floating-elements"
      >
        <div className="absolute inset-0 diagonal-pattern opacity-10"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#BF926B]/5 rounded-full morphing-shape"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#054035]/5 rounded-full morphing-shape"></div>
      </div>
      <div className="relative max-w-content container-px mx-auto">
        <SectionTransition>
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#054035] font-montserrat mb-6 text-shadow">
              Cómo <span className="text-gradient">Trabajamos</span>
            </h2>
            <div className="w-20 h-1 bg-[#BF926B] mx-auto rounded-full mb-6"></div>
            <p className="text-base text-[#0A594B] font-lato max-w-3xl mx-auto leading-relaxed">
              Nuestro proceso de trabajo está diseñado para brindarte transparencia, 
              seguimiento constante y los mejores resultados en cada caso.
            </p>
          </div>
        </SectionTransition>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {WORK_STEPS.map((step, index) => (
            <SectionTransition key={step.step} delay={100 + (index * 150)}>
              <div className="group advanced-card rounded-2xl p-8 shadow-lg border border-[#E8ECEB] relative overflow-hidden h-full flex flex-col text-left spotlight-effect">
                {/* Header del paso con marco y número */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-md border-2 border-[#BF926B] grid place-items-center font-montserrat text-[#BF926B] font-bold">
                    {step.step}
                  </div>
                  <div className="h-6 w-px bg-[#E6D5C7]"></div>
                  <h3 className="font-bold text-lg text-[#054035] font-montserrat">
                    {step.title}
                  </h3>
                </div>

                {/* Cuerpo */}
                <p className="text-sm text-[#0A594B] font-lato leading-relaxed flex-grow">
                  {step.description}
                </p>

                {/* Footer decorativo */}
                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="inline-block w-8 h-1 bg-[#BF926B] rounded-full"></span>
                    <span className="inline-block w-4 h-1 bg-[#0A594B] rounded-full"></span>
                  </div>
                  <div className="text-xs text-[#0A594B]/70 font-montserrat tracking-wide">
                    Paso {step.step}
                  </div>
                </div>
                {/* Overlay hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: "radial-gradient(60% 60% at 100% 0%, #BF926B0D 0%, transparent 100%)"}} />
              </div>
            </SectionTransition>
          ))}
        </div>
      </div>
    </section>
  );
}
