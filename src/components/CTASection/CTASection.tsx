export const CTASection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-navy-900">

      {/* Fondo Gradiente Premium usando la paleta de Tailwind configurada */}
      {/* Mezclamos navy-900 (azul muy oscuro) con teal-900 y teal-800 para lograr el verde profundo de tu diseño */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-teal-900/90 to-teal-700/80"></div>

      {/* Luces decorativas suaves radiales para enriquecer el fondo sin usar imágenes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-400/10 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">

        {/* Over-title superior */}
        <span className="text-teal-500 font-bold text-xs md:text-sm tracking-[0.3em] uppercase mb-4 block">
          Distribuidores
        </span>

        {/* Título Principal */}
        <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-white tracking-tight leading-[1.1] mb-6">
          Sé parte de una red que <br className="hidden md:block" />
          impacta vidas
        </h2>

        {/* Descripción subtítulo */}
        <p className="text-teal-50 text-lg md:text-xl max-w-2xl mx-auto mb-10 text-center opacity-80 leading-relaxed font-medium">
          Lleva soluciones que mejoran la calidad de vida y haz crecer tu negocio con un portafolio de alta calidad, respaldo especializado y una marca en constante evolución.
        </p>

        {/* Botón Call To Action con efecto Hover interactivo */}
        <button className="group flex items-center justify-center bg-white hover:bg-gray-50 text-navy-900 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
          Quiero ser distribuidor
          <svg
            className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>

        {/* Viñetas / Footer Informativo inferior */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-12 text-sm text-teal-100/50 font-medium">
          <span className="flex items-center">
            Sin costo de inscripción
          </span>
          <span className="flex items-center">
            Soporte 24/7
          </span>
          <span className="flex items-center">
            Margen competitivo
          </span>
        </div>

      </div>
    </section>
  );
};
