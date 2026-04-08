import { useEffect, useState, useRef } from 'react';

// Hook interno para animar los números de 0 al valor final
const AnimatedNumber = ({ end, duration = 2500, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer para arrancar la animación solo cuando es visible
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });

    if (nodeRef.current) observer.observe(nodeRef.current);

    return () => observer.disconnect();
  }, []);

  // requestAnimationFrame para un conteo fluido a 60fps
  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Easing Function tipo "Ease-Out Quart" para que parta rápido y desacelere suavemente al llegar
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, duration, end]);

  // Usamos 'en-US' para garantizar el formato "1,000" con coma en lugar de punto.
  return <span ref={nodeRef}>{count.toLocaleString('en-US')}{suffix}</span>;
}

// Datos Interactivos para la Historia Visual (Right Column)
const storyChapters = [
  {
    id: 1,
    year: "2011",
    title: "Damos vida a la marca GMD.",
    img: "https://imagedelivery.net/3xEh-XSYeJWAvnbRPV3bRg/b69ca88b-1b25-440a-69aa-fc3cb942c000/public", // Aquí pondrás la primera URL (Ej. inicio de la empresa)
  },
  {
    id: 2,
    year: "2020",
    title: "Transformación digital",
    img: "https://imagedelivery.net/3xEh-XSYeJWAvnbRPV3bRg/74461ed4-f91e-437a-4e97-896e984bfc00/public", // URL (Ej. bodega o camiones de distribución)
  },
  {
    id: 3,
    year: "2023",
    title: "Nueva línea (Marca blanca)",
    img: "https://imagedelivery.net/3xEh-XSYeJWAvnbRPV3bRg/64b690dd-9e5c-4cc4-6ace-b62750e6bc00/public", // URL (Ej. producto calidad de exportación)
  }
];

export const HistorySection = () => {
  const [activeChapter, setActiveChapter] = useState(0);

  // Auto-play interactivo de las historias (como los stories de IG)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveChapter((prev) => (prev + 1) % storyChapters.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-navy-900 overflow-hidden relative border-t border-navy-800">

      {/* Luces decorativas de fondo para dar contraste moderno y elegante */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[140px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-teal-500/5 rounded-full blur-[150px] pointer-events-none transform -translate-x-1/2 translate-y-1/2"></div>

      {/* Gran "GMD" translúcido en el fondo (como en tu imagen de referencia) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[30rem] font-extrabold text-white/[0.02] pointer-events-none whitespace-nowrap hidden lg:block tracking-tighter">
        GMD
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 lg:pt-32 pb-24 lg:pb-36">

        {/* STATS SECTION (CON ANIMACIÓN DE 0 a X) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-24 lg:mb-32 divider-bottom border-b border-navy-800 pb-16">
          <div className="flex flex-col items-center justify-center text-center">
            <h4 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-white mb-2 lg:mb-4 tracking-tight">
              <AnimatedNumber end={25} suffix="+" duration={1300} />
            </h4>
            <span className="text-navy-400 text-xs md:text-sm tracking-[0.3em] uppercase font-bold">AÑOS</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <h4 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-white mb-2 lg:mb-4 tracking-tight">
              <AnimatedNumber end={400} suffix="+" duration={2800} />
            </h4>
            <span className="text-navy-400 text-xs md:text-sm tracking-[0.3em] uppercase font-bold">PRODUCTOS</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <h4 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-white mb-2 lg:mb-4 tracking-tight">
              <AnimatedNumber end={700} suffix="+" duration={900} />
            </h4>
            <span className="text-navy-400 text-xs md:text-sm tracking-[0.3em] uppercase font-bold">CIUDADES</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <h4 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-white mb-2 lg:mb-4 tracking-tight">
              <AnimatedNumber end={100} suffix="%" duration={1900} />
            </h4>
            <span className="text-navy-400 text-xs md:text-sm tracking-[0.3em] uppercase font-bold">COLOMBIANO</span>
          </div>
        </div>

        {/* CONTENIDO PRINCIPAL A 2 COLUMNAS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Columna Izquierda: Textos */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-8 pr-0 lg:pr-8">
            <div className="space-y-4">
              <span className="text-teal-400 font-bold text-xs md:text-sm tracking-[0.2em] uppercase">
                Nuestra historia
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white tracking-tight leading-[1.1]">
                Nacimos en el 2001 desde una necesidad real: <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-500">cuidar</span>
              </h2>
            </div>

            <p className="text-navy-400 text-lg md:text-xl leading-relaxed">
              Lo que empezó como una búsqueda se convirtió en un propósito. Hoy, evolucionamos junto a quienes confían en nosotros, ofreciendo soluciones que mejoran la calidad de vida.
            </p>

            <div>
              <a
                className="flex items-center text-brand-500 hover:text-brand-400 font-bold transition-all duration-300 group mt-4 text-lg"
                href="https://cloud.impormedical.co/IM/Quienes_Somos"
              >
                Conoce nuestra historia
                <svg className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Columna Derecha: Interactividad (Historia Visual) */}
          <div className="relative w-full h-[450px] md:h-[550px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl group ring-1 ring-white/10">

            {/* Imágenes Animadas de Fondo */}
            {storyChapters.map((chap, idx) => (
              <div
                key={chap.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${activeChapter === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                {chap.img ? (
                  <img src={chap.img} alt={chap.title} className="w-full h-full object-cover transition-transform duration-[15000ms] ease-linear scale-110 group-hover:scale-105" />
                ) : (
                  <div className="w-full h-full bg-navy-800 flex flex-col items-center justify-center transition-transform duration-[10000ms] ease-linear scale-110 group-hover:scale-105">
                    <span className="text-white/20 uppercase tracking-[0.2em] font-bold">Sin foto asignada</span>
                  </div>
                )}
              </div>
            ))}

            {/* Overlay Oscuro para asegurar que el texto se lea impecable */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/30 to-black/20 z-20 pointer-events-none"></div>

            {/* Badge: Palmira, Colombia (Reemplazando a Bogotá como pediste) */}
            <div className="absolute top-6 left-6 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/20 flex items-center gap-2 z-30">
              <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></div>
              <span className="text-white text-xs font-semibold tracking-widest">Palmira, Colombia 🇨🇴</span>
            </div>

            {/* Línea de Tiempo Interactiva Abajo */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-30 pointer-events-auto">
              <div className="flex justify-between gap-4">
                {storyChapters.map((chap, idx) => {
                  const isActive = activeChapter === idx;
                  return (
                    <div
                      key={chap.id}
                      onClick={() => setActiveChapter(idx)}
                      className="cursor-pointer flex-1 group/item"
                    >
                      {/* Barra Superior / ProgressBar indicadora */}
                      <div className="w-full h-1 bg-white/20 rounded-full mb-3 overflow-hidden relative">
                        {isActive && (
                          <div className="absolute top-0 left-0 h-full bg-brand-500 w-full animate-[progress_6s_linear_forwards]"></div>
                        )}
                      </div>

                      {/* Textos de la línea de tiempo */}
                      <div className={`transition-all duration-300 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-50 group-hover/item:opacity-80'}`}>
                        <span className={`block text-xs md:text-sm font-bold tracking-[0.1em] mb-1 ${isActive ? 'text-brand-500' : 'text-white'}`}>
                          {chap.year}
                        </span>
                        <span className="text-white font-semibold text-sm md:text-lg leading-tight block">
                          {chap.title}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Definir la animación del progress bar inyectada de forma arbitraría */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}} />
    </section>
  );
};
