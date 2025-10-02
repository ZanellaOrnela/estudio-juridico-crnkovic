import SectionTransition from "./SectionTransition";
import ScrollReveal from "./ScrollReveal";

const ADDRESS = "Galería Comercial — Local 10, Av. 25 de Mayo, Las Heras, Santa Cruz (CP 9017)";
// Consulta simplificada para Maps (evitar caracteres especiales y mejorar geocodificación)
const MAP_QUERY = "Galeria Comercial Local 10, Av 25 de Mayo, Las Heras, Santa Cruz 9017, Argentina";
// OPCIONAL: si conocés coordenadas exactas, completá estos valores y el mapa
// mostrará el pin en ese punto con máxima precisión.
const MAP_LAT: number | null = null; // ej: -46.54123
const MAP_LNG: number | null = null; // ej: -68.93567
const HAS_COORDS = MAP_LAT !== null && MAP_LNG !== null;
const PHONE_DISPLAY = "297 457-3242";
const PHONE_DIAL = "+5492974573242";
const WHATSAPP_URL = `https://wa.me/5492974573242?text=${encodeURIComponent("Hola, quisiera hacer una consulta.")}`;
const EMAIL = "estudiojuridicocrnk@gmail.com";
const MAPS_LINK = HAS_COORDS
  ? `https://www.google.com/maps/search/?api=1&query=${MAP_LAT},${MAP_LNG}`
  : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`;
const MAP_EMBED_SRC = HAS_COORDS
  ? `https://www.google.com/maps?q=${MAP_LAT},${MAP_LNG}&z=17&output=embed`
  : `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=17&iwloc=near&output=embed`;

export default function LocationContact() {
  return (
    <section id="ubicacion-contacto" className="bg-white py-20 md:py-24 lg:py-28 relative px-6 sm:px-8 md:px-4 creative-section">
      {/* Fondo creativo */}
      <div aria-hidden className="absolute inset-0 pointer-events-none select-none overflow-hidden floating-elements">
        <div className="absolute inset-0 creative-grid opacity-10"></div>
        <div className="absolute top-20 right-20 w-36 h-36 bg-[#BF926B]/5 rounded-full morphing-shape"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-[#054035]/5 rounded-full morphing-shape"></div>
      </div>

      <div className="relative max-w-content container-px mx-auto">
        <SectionTransition>
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#054035] font-montserrat mb-6 text-shadow">
              Ubicación y <span className="text-gradient">Contacto</span>
            </h2>
            <div className="w-20 h-1 bg-[#BF926B] mx-auto rounded-full"></div>
          </div>
        </SectionTransition>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
          {/* Columna izquierda: datos y CTAs */}
          <SectionTransition delay={150}>
            <ScrollReveal direction="left" delay={200}>
              <div className="advanced-card rounded-2xl p-8 border border-[#E8ECEB] shadow-md h-full hover-lift transition-all duration-500 spotlight-effect flex flex-col">
              <div className="space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-montserrat font-bold text-[#054035] text-lg mb-2">Dirección</h3>
                    <p className="text-[#0A594B] font-lato text-sm leading-relaxed">{ADDRESS}</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-montserrat font-semibold text-[#054035] text-sm mb-1">WhatsApp / Teléfono</h4>
                      <p className="text-[#0A594B] font-lato text-sm">
                        <a href={`tel:${PHONE_DIAL}`} className="underline decoration-[#BF926B]/50 underline-offset-2">
                          {PHONE_DISPLAY}
                        </a>
                      </p>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-semibold text-[#054035] text-sm mb-1">Email</h4>
                      <p className="text-[#0A594B] font-lato text-sm">
                        <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("Consulta")}`} className="underline decoration-[#BF926B]/50 underline-offset-2">
                          {EMAIL}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-montserrat font-semibold text-[#054035] text-sm mb-1">Facebook</h4>
                      <a href="https://m.facebook.com/EstudioJuridicoCrnk" target="_blank" rel="noopener noreferrer" className="text-[#BF926B] hover:text-[#054035] text-sm font-lato">
                        /EstudioJuridicoCrnk
                      </a>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-semibold text-[#054035] text-sm mb-1">Instagram</h4>
                      <a href="https://instagram.com/estudiojuridicocrnk" target="_blank" rel="noopener noreferrer" className="text-[#BF926B] hover:text-[#054035] text-sm font-lato">
                        @estudiojuridicocrnk
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary hover-lift hover-glow inline-flex items-center justify-center px-5 py-3 rounded-full font-semibold text-white transition-all duration-300" style={{ background: '#054035' }}>
                      Abrir WhatsApp
                    </a>
                    <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="hover-lift hover-scale inline-flex items-center justify-center px-5 py-3 rounded-full font-semibold text-[#054035] border-2 border-[#BF926B] transition-all duration-300">
                      Cómo llegar
                    </a>
                    <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("Consulta")}`} className="hover-lift hover-scale inline-flex items-center justify-center px-5 py-3 rounded-full font-semibold text-[#054035] border-2 border-[#BF926B] transition-all duration-300">
                      Enviar correo
                    </a>
                  </div>

                  <div className="bg-[#BF926B]/10 border border-[#BF926B]/20 rounded-xl p-4 hover-lift transition-all duration-300">
                    <p className="text-[#054035] font-montserrat font-semibold">¿Empezamos hoy?</p>
                    <p className="text-[#0A594B] text-sm font-lato mt-1">
                      Contanos tu caso por WhatsApp {PHONE_DISPLAY} o escribinos a {EMAIL}. Respondemos con un diagnóstico inicial y próximos pasos.
                    </p>
                  </div>
                </div>
              </div>
              </div>
            </ScrollReveal>
          </SectionTransition>

          {/* Columna derecha: mapa */}
          <SectionTransition delay={250}>
            <ScrollReveal direction="right" delay={300}>
              <div className="advanced-card rounded-2xl p-2 sm:p-4 border border-[#E8ECEB] shadow-md h-full hover-lift transition-all duration-500 spotlight-effect flex flex-col">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-[#F7F7F7] flex-1">
                  <iframe
                    title="Mapa: cómo llegar al Estudio Jurídico Crnkovic"
                    src={MAP_EMBED_SRC}
                    className="w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    aria-label="Mapa embebido con la ubicación del estudio"
                  />
                </div>
                <div className="flex justify-end mt-3">
                  <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-[#054035] font-montserrat underline underline-offset-4 hover:text-[#BF926B] transition-colors duration-300">
                    Ver en Google Maps
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </SectionTransition>
        </div>
      </div>
    </section>
  );
}


