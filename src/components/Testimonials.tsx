import SectionTransition from "./SectionTransition";

const TESTIMONIALS = [
  {
    quote:
      "Me acompañaron en cada paso del proceso. Resolución rápida y comunicación clara. Su profesionalismo y dedicación fueron excepcionales.",
    author: "María S.",
    case: "Derecho de Familia",
    rating: 5
  },
  {
    quote:
      "Profesionales y empáticos. Logramos un acuerdo favorable en poco tiempo. Recomiendo totalmente sus servicios.",
    author: "Javier R.",
    case: "Derecho Laboral",
    rating: 5
  },
  {
    quote:
      "Excelente asesoramiento en mi caso comercial. Siempre disponibles para resolver dudas y muy transparentes en los costos.",
    author: "Ana M.",
    case: "Derecho Comercial",
    rating: 5
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#F8F8F8] to-[#EFEFEF] relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#D96E48] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-[#737048] rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-content container-px mx-auto">
        <SectionTransition>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#333333] font-montserrat mb-6">
              Lo que Dicen Nuestros <span className="text-[#D96E48]">Clientes</span>
            </h2>
            <div className="w-20 h-1 bg-[#D96E48] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-[#666666] font-lato max-w-3xl mx-auto leading-relaxed">
              La confianza de nuestros clientes es nuestro mayor logro. Conoce sus experiencias trabajando con nosotros.
            </p>
          </div>
        </SectionTransition>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {TESTIMONIALS.map((testimonial, index) => (
            <SectionTransition key={index} delay={200 + (index * 150)}>
              <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden h-full flex flex-col">
                {/* Elemento decorativo */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#D96E48]/10 to-[#737048]/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-[#D96E48] rounded-full"></div>
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-base md:text-lg text-[#333333] font-lato leading-relaxed mb-6 relative flex-grow">
                  <span className="text-4xl text-[#D96E48]/30 absolute -top-2 -left-2 font-serif">&ldquo;</span>
                  {testimonial.quote}
                  <span className="text-4xl text-[#D96E48]/30 absolute -bottom-2 -right-2 font-serif">&rdquo;</span>
                </blockquote>
                
                {/* Author info */}
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <p className="font-semibold text-[#333333] font-montserrat">{testimonial.author}</p>
                    <p className="text-sm text-[#D96E48] font-lato">{testimonial.case}</p>
                  </div>
                  <div className="w-12 h-12 bg-[#D96E48]/10 rounded-full flex items-center justify-center group-hover:bg-[#D96E48]/20 transition-colors">
                    <div className="w-6 h-6 bg-[#D96E48] rounded-full"></div>
                  </div>
                </div>
              </div>
            </SectionTransition>
          ))}
        </div>
        
        {/* Call to action */}
        <SectionTransition delay={800}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#D96E48]/10 rounded-full border border-[#D96E48]/20">
              <div className="w-2 h-2 bg-[#D96E48] rounded-full animate-pulse"></div>
              <span className="text-[#D96E48] font-lato text-sm font-semibold">
                Únete a más de 1000 clientes satisfechos
              </span>
            </div>
          </div>
        </SectionTransition>
      </div>
    </section>
  );
}
