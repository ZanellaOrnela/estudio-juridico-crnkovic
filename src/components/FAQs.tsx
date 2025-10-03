"use client";

import { useState } from "react";

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
    alert(`FAQ clicked: ${index}, Current open: ${openIndex}`);
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="preguntas-frecuentes" className="bg-[#054035]/5 py-20 md:py-24 lg:py-28 relative px-6 sm:px-8 md:px-4">
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#054035] font-montserrat mb-6">
            Preguntas <span className="text-[#BF926B]">frecuentes</span>
          </h2>
          <div className="w-20 h-1 bg-[#BF926B] mx-auto rounded-full"></div>
          <p className="text-sm text-gray-500 mt-2">Estado: {openIndex !== null ? `FAQ ${openIndex} abierta` : 'Ninguna FAQ abierta'}</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((f, idx) => (
            <div key={f.q} className="bg-white rounded-xl border border-[#E8ECEB] p-4 shadow-sm hover:shadow-md transition-all duration-300">
              <div 
                className="cursor-pointer select-none"
                onClick={() => toggleFAQ(idx)}
                style={{ pointerEvents: 'auto' }}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-montserrat font-semibold text-[#054035] text-left">
                    {f.q}
                  </h3>
                  <div className={`mt-1 w-5 h-5 rounded-[6px] border-2 border-[#BF926B] text-[#BF926B] grid place-items-center text-[12px] leading-none transition-transform duration-300 flex-shrink-0 ${
                    openIndex === idx ? 'rotate-45' : ''
                  }`}>
                    +
                  </div>
                </div>
              </div>
              {openIndex === idx && (
                <div className="pt-3 text-[#0A594B] font-lato text-sm leading-relaxed animate-fadeIn">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


