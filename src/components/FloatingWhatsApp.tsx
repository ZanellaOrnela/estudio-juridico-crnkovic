const WHATSAPP_URL = "https://wa.me/5492974573242?text=Hola%20quisiera%20hacer%20una%20consulta";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp"
      className="fixed md:hidden bottom-6 right-6 z-50 w-14 h-14 rounded-full grid place-items-center shadow-xl hover-lift hover-glow animate-float transition-all duration-300"
      style={{ background: '#054035', color: '#FFFFFF' }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="transition-transform duration-300 group-hover:scale-110">
        <path d="M20.52 3.48A11.94 11.94 0 0012.06 0C5.46 0 .12 5.34.12 11.94c0 2.1.54 4.14 1.56 5.94L0 24l6.3-1.62a12.04 12.04 0 005.76 1.5h.06c6.6 0 11.94-5.34 11.94-11.94 0-3.18-1.26-6.18-3.54-8.46zM12.12 22.08h-.06a9.96 9.96 0 01-5.1-1.38l-.36-.18-3.72.96.99-3.63-.24-.39a10.02 10.02 0 01-1.56-5.52C2.07 6.45 6.6 1.92 12.06 1.92c2.67 0 5.19 1.05 7.08 2.94a9.94 9.94 0 012.94 7.08c0 5.52-4.5 10.14-10.02 10.14zm5.82-7.5c-.33-.18-1.95-.96-2.25-1.08-.3-.12-.51-.18-.72.18-.21.36-.81 1.08-.99 1.32-.18.24-.36.27-.69.09-.33-.18-1.41-.51-2.67-1.62-.99-.87-1.65-1.95-1.86-2.28-.21-.33-.02-.51.16-.69.17-.17.39-.45.57-.69.18-.24.24-.39.36-.66.12-.27.06-.51-.03-.72-.09-.18-.72-1.74-.99-2.37-.26-.63-.54-.54-.72-.54h-.63c-.21 0-.54.09-.81.39-.27.3-1.06 1.05-1.06 2.55s1.08 2.97 1.23 3.18c.15.21 2.13 3.24 5.16 4.56.72.3 1.26.48 1.68.63.7.22 1.34.19 1.85.12.57-.09 1.95-.81 2.22-1.6.27-.78.27-1.44.18-1.59-.09-.15-.3-.24-.63-.42z"/>
      </svg>
    </a>
  );
}


