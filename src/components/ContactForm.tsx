"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(formData: FormData) {
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setMessage("Gracias, te contactaremos a la brevedad.");
      (document.getElementById("contact-form") as HTMLFormElement)?.reset();
    } catch {
      setStatus("error");
      setMessage("Hubo un error al enviar. Intenta nuevamente.");
    }
  }

  return (
    <section id="contacto" className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#2A2A2A] to-[#333333] relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#D96E48] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#737048] rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-content container-px mx-auto">
        {/* Header mejorado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-montserrat mb-6">
            Consulta <span className="text-[#D96E48]">Gratuita</span>
          </h2>
          <div className="w-20 h-1 bg-[#D96E48] mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-[#CCCCCC] font-lato max-w-2xl mx-auto leading-relaxed">
            Contanos brevemente tu consulta y te responderemos en menos de 24 horas con una evaluación inicial gratuita.
          </p>
        </div>
        {/* Formulario mejorado */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/20 shadow-2xl">
            <form
              id="contact-form"
              className="grid gap-6"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                onSubmit(formData);
              }}
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-lato font-semibold text-white flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#D96E48] rounded-full"></span>
                    Nombre Completo
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full h-12 rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm px-4 text-white placeholder-white/60 focus:border-[#D96E48] focus:outline-none transition-all duration-300 font-lato"
                    placeholder="Ingresa tu nombre completo"
                    suppressHydrationWarning
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-lato font-semibold text-white flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#D96E48] rounded-full"></span>
                    Correo Electrónico
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full h-12 rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm px-4 text-white placeholder-white/60 focus:border-[#D96E48] focus:outline-none transition-all duration-300 font-lato"
                    placeholder="tu@email.com"
                    suppressHydrationWarning
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-lato font-semibold text-white flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#737048] rounded-full"></span>
                    Teléfono
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    className="w-full h-12 rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm px-4 text-white placeholder-white/60 focus:border-[#D96E48] focus:outline-none transition-all duration-300 font-lato"
                    placeholder="(11) 1234-5678"
                    suppressHydrationWarning
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-lato font-semibold text-white flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#D96E48] rounded-full"></span>
                    Tipo de Consulta
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full h-12 rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm px-4 text-white focus:border-[#D96E48] focus:outline-none transition-all duration-300 font-lato"
                    suppressHydrationWarning
                  >
                    <option value="" className="bg-[#333333] text-white">Selecciona un área</option>
                    <option value="Derecho Civil" className="bg-[#333333] text-white">Derecho Civil</option>
                    <option value="Derecho Comercial" className="bg-[#333333] text-white">Derecho Comercial</option>
                    <option value="Derecho Laboral" className="bg-[#333333] text-white">Derecho Laboral</option>
                    <option value="Derecho de Familia" className="bg-[#333333] text-white">Derecho de Familia</option>
                    <option value="Sucesiones" className="bg-[#333333] text-white">Sucesiones</option>
                    <option value="Otro" className="bg-[#333333] text-white">Otro</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-lato font-semibold text-white flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#D96E48] rounded-full"></span>
                  Describe tu Consulta
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm px-4 py-3 text-white placeholder-white/60 focus:border-[#D96E48] focus:outline-none transition-all duration-300 font-lato resize-none"
                  placeholder="Describe brevemente tu situación legal. Cuanto más detalle proporciones, mejor podremos ayudarte..."
                />
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#D96E48] to-[#E47A34] text-white font-bold hover:from-[#c85a3a] hover:to-[#D96E48] disabled:opacity-60 transition-all duration-300 font-montserrat text-base shadow-lg hover:shadow-xl hover:shadow-[#D96E48]/25 transform hover:scale-105"
                  suppressHydrationWarning
                >
                  {status === "loading" ? "Enviando Consulta..." : "Enviar Consulta Gratuita"}
                </button>
                {message && (
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                    status === "success" ? "bg-green-500/20 text-green-300" : "bg-red-500/20 text-red-300"
                  }`}>
                    <span className={`w-2 h-2 rounded-full ${
                      status === "success" ? "bg-green-400" : "bg-red-400"
                    }`}></span>
                    <p className="text-sm font-lato">{message}</p>
                  </div>
                )}
              </div>
            </form>
          </div>
          
          {/* Información adicional */}
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-[#D96E48]/20 rounded-full flex items-center justify-center mx-auto">
                <div className="w-6 h-6 bg-[#D96E48] rounded-full"></div>
              </div>
              <h3 className="text-white font-semibold font-montserrat">Respuesta Rápida</h3>
              <p className="text-[#CCCCCC] text-sm font-lato">Te contactamos en menos de 24 horas</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-[#737048]/20 rounded-full flex items-center justify-center mx-auto">
                <div className="w-6 h-6 bg-[#737048] rounded-full"></div>
              </div>
              <h3 className="text-white font-semibold font-montserrat">Consulta Gratuita</h3>
              <p className="text-[#CCCCCC] text-sm font-lato">Primera evaluación sin costo</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-[#D96E48]/20 rounded-full flex items-center justify-center mx-auto">
                <div className="w-6 h-6 bg-[#D96E48] rounded-full"></div>
              </div>
              <h3 className="text-white font-semibold font-montserrat">Confidencialidad</h3>
              <p className="text-[#CCCCCC] text-sm font-lato">Absoluta reserva profesional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
