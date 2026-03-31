export const Ticker = () => {
  const items = [
    "Más de 25 años en el mercado",
    "Envío a toda Colombia",
    "Registro INVIMA",
    "Personalización de productos",
    "Amplio portafolio",
    "Calidad certificada",
    "Garantía y respaldo"
  ];

  // Triplicamos la lista de items para que si el monitor es muy ancho la animación se vea continua natural
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div className="w-full bg-navy-900 border-y border-navy-800 py-4 overflow-hidden flex whitespace-nowrap">
      {/* 
        Usamos w-max para que el div se estire fluidamente sin estar atado al w-full del padre.
        Se mueve infinitamente gracias a la animación 'scroll' definida como lineal e infinita.
      */}
      <div className="animate-scroll [animation-duration:100s] flex w-max items-center">

        {/* Usamos dos bloques idénticos y la animación traslada -50%, creando un bucle continuo de derecha a izquierda */}
        <div className="flex shrink-0 items-center">
          {repeatedItems.map((item, index) => (
            <div key={`part1-${index}`} className="flex items-center">
              <span className="text-white font-medium px-4 md:px-8 tracking-wide text-sm md:text-base cursor-default">
                {item}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0 shadow-[0_0_8px_rgba(254,120,0,0.6)]"></div>
            </div>
          ))}
        </div>

        {/* Clon idéntico */}
        <div className="flex shrink-0 items-center">
          {repeatedItems.map((item, index) => (
            <div key={`part2-${index}`} className="flex items-center">
              <span className="text-white font-medium px-4 md:px-8 tracking-wide text-sm md:text-base cursor-default">
                {item}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0 shadow-[0_0_8px_rgba(254,120,0,0.6)]"></div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
