import { useState, useEffect } from 'react';

const cards = [
  {
    id: 1,
    title: "Identificamos oportunidades",
    description: "Analizamos el mercado y las necesidades de cada población.",
    color: "teal",
  },
  {
    id: 2,
    title: "Desarrollamos soluciones",
    description: "Definimos estándares y producimos bajo nuestras especificaciones.",
    color: "purple",
  },
  {
    id: 3,
    title: "Garantizamos continuidad",
    description: "Red de +1.000 distribuidores y soporte postventa en todo el país.",
    color: "brand",
  }
];

const badges = [
  "Registro INVIMA",
  "Envío nacional",
  "Garantía directa"
];

export const HeroSection = () => {
  const [currentCard, setCurrentCard] = useState(0);

  // Auto deslizamiento del carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % cards.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'teal':
        return {
          bg: 'bg-teal-100/40',
          border: 'border-teal-300',
          icon: 'bg-teal-300',
          title: 'text-teal-900',
          shadow: 'shadow-teal-900/5'
        };
      case 'purple':
        return {
          bg: 'bg-purple-100/40',
          border: 'border-purple-300',
          icon: 'bg-purple-300',
          title: 'text-purple-900',
          shadow: 'shadow-purple-900/5'
        };
      case 'brand':
        return {
          bg: 'bg-brand-100/40',
          border: 'border-brand-300',
          icon: 'bg-brand-300',
          title: 'text-brand-900',
          shadow: 'shadow-brand-900/5'
        };
      default:
        return {
          bg: 'bg-gmd-light',
          border: 'border-navy-200',
          icon: 'bg-navy-300',
          title: 'text-navy-900',
          shadow: 'shadow-navy-900/5'
        };
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 lg:py-24">
      {/* Fondo decorativo (opcional, para darle más vida tipo landing premium tech) */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-brand-100/50 blur-3xl opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-sky-100/50 blur-3xl opacity-50 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Columna Izquierda: Textos y Botones */}
          <div className="flex flex-col justify-center space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-navy-900 leading-[1.15] tracking-tight">
                Desarrollamos productos de salud <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-800 to-navy-600">con el respaldo para que funcionen.</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-navy-600 leading-relaxed max-w-2xl font-medium">
              En GMD participamos en todo el ciclo: desde entender las necesidades del mercado hasta garantizar que cada producto tenga continuidad, servicio y respaldo. No distribuimos. Desarrollamos soluciones.
            </p>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="flex items-center justify-center bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 hover:-translate-y-1">
                Explorar catálogo
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button className="flex items-center justify-center bg-white hover:bg-gmd-light text-navy-800 border-2 border-navy-100 hover:border-navy-200 px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
                Quiero ser distribuidor
              </button>
            </div>

            {/* Badges Inferiores */}
            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-navy-100/60 mt-4">
              {badges.map(badge => (
                <div key={badge} className="flex items-center gap-2 bg-gmd-light/60 px-4 py-2 rounded-lg border border-navy-100/50">
                  <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></div>
                  <span className="text-sm font-semibold text-navy-800">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Columna Derecha: Carousel */}
          <div className="relative w-full h-[400px] md:h-[450px] lg:h-[550px] flex items-center justify-center perspective-1000">
            {cards.map((card, index) => {
              const isCurrent = index === currentCard;
              const isPrev = index === (currentCard - 1 + cards.length) % cards.length;
              const isNext = index === (currentCard + 1) % cards.length;
              const colors = getColorClasses(card.color);

              // Lógica de posicionamiento para un efecto 3D simple tipo stack
              let transformClasses = "opacity-0 translate-x-12 scale-90 z-0"; // oculto
              if (isCurrent) {
                transformClasses = "opacity-100 translate-x-0 scale-100 z-30 shadow-2xl";
              } else if (isNext) {
                transformClasses = "opacity-40 translate-x-12 scale-95 z-20 hidden md:block cursor-pointer";
              } else if (isPrev) {
                transformClasses = "opacity-40 -translate-x-12 scale-95 z-20 hidden md:block cursor-pointer";
              }

              return (
                <div
                  key={card.id}
                  onClick={() => !isCurrent && setCurrentCard(index)}
                  className={`absolute w-full rounded-3xl max-w-sm md:max-w-md lg:max-w-lg transition-all duration-700 ease-out transform ${transformClasses}`}
                >
                  <div className={`p-8 md:p-10 rounded-3xl border-2 ${colors.border} ${colors.bg} backdrop-blur-md ${colors.shadow}`}>
                    <div className={`w-14 h-14 rounded-2xl ${colors.icon} mb-8 shadow-sm`} />
                    <h3 className={`text-2xl md:text-3xl font-bold ${colors.title} mb-4 leading-tight`}>
                      {card.title}
                    </h3>
                    <p className="text-navy-700 text-lg md:text-xl font-medium leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Controles del Carousel */}
            <div className="absolute -bottom-2 lg:bottom-4 left-0 right-0 flex justify-center items-center gap-4 z-40">
              {cards.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentCard(idx)}
                  className={`relative flex items-center justify-center transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500 rounded-full
                    ${idx === currentCard ? 'w-10 h-3 bg-brand-500' : 'w-3 h-3 bg-gray-200 hover:bg-navy-300'}`}
                  aria-label={`Ir a diapositiva ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
