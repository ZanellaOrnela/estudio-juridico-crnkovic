import { useState } from "react";
import SectionTransition from "./SectionTransition";
import ScrollReveal from "./ScrollReveal";

const FAQS = [
  {
    q: "¿Atienden solo en Santa Cruz?",
    a: "No. También Chubut y fuero Federal según el caso.",
  },
  {
    q: "¿Realizan consultas online?",
    a: "Sí, por videollamada o teléfono, con presupuesto previo.",
  },
  {
    q: "¿Cómo se pactan los honorarios?",
    a: "Por escrito, según complejidad y normativa vigente.",
  },
  {
    q: "¿Qué documentación llevo a la primera consulta?",
    a: "DNI, contratos, recibos, certificados, constancias médicas o material vinculado al caso. Si tenés dudas, escribinos y te orientamos.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="preguntas-frecuentes" className="bg-[#054035]/5 py-20 md:py-24 lg:py-28 relative px-6 sm:px-8 md:px-4 creative-section">
      <div className="relative max-w-content container-px mx-auto">
        <SectionTransition>
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#054035] font-montserrat mb-6 text-shadow">
              Preguntas <span className="text-gradient">frecuentes</span>
            </h2>
            <div className="w-20 h-1 bg-[#BF926B] mx-auto rounded-full"></div>
          </div>
        </SectionTransition>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((f, idx) => (
            <SectionTransition key={f.q} delay={100 + idx * 120}>
              <ScrollReveal direction="up" delay={idx * 100}>
                <div className="advanced-card rounded-xl border border-[#E8ECEB] p-4 shadow-sm hover-lift transition-all duration-300 spotlight-effect">
                  <div 
                    className="cursor-pointer select-none"
                    onClick={() => toggleFAQ(idx)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-montserrat font-semibold text-[#054035]">
                        {f.q}
                      </h3>
                      <div className={`mt-1 w-5 h-5 rounded-[6px] border-2 border-[#BF926B] text-[#BF926B] grid place-items-center text-[12px] leading-none transition-transform duration-300 ${
                        openIndex === idx ? 'rotate-45' : ''
                      }`}>
                        +
                      </div>
                    </div>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openIndex === idx ? 'max-h-96 pt-3' : 'max-h-0 pt-0'
                  }`}>
                    <div className="text-[#0A594B] font-lato text-sm leading-relaxed">
                      {f.a}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </SectionTransition>
          ))}
        </div>
      </div>
    </section>
  );
}


