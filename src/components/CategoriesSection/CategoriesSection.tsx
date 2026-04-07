export const CategoriesSection = () => {
  const categories = [
    {
      id: 1,
      title: "Movilidad y Rehabilitación",
      productsCount: "32 productos",
      img: "https://imagedelivery.net/3xEh-XSYeJWAvnbRPV3bRg/d85472e6-b51c-45e9-88b0-b0ee5d8c7a00/public",
    },
    {
      id: 2,
      title: "Monitoreo y control de Signos Vitales",
      productsCount: "18 productos",
      img: "https://imagedelivery.net/3xEh-XSYeJWAvnbRPV3bRg/cf0d4c6b-a1b6-424f-c643-762458937f00/public",
    },
    {
      id: 3,
      title: "Instrumental Médico y dotación profesional",
      productsCount: "45 productos",
      img: "https://imagedelivery.net/3xEh-XSYeJWAvnbRPV3bRg/57e65a62-4e66-427d-3ab2-04948a10a900/public",
    },
    {
      id: 4,
      title: "Cuidado del paciente y vida Diaria",
      productsCount: "28 productos",
      img: "https://imagedelivery.net/3xEh-XSYeJWAvnbRPV3bRg/867ec1a9-8ce8-4b80-4d83-779fe652e800/public",
    },
    {
      id: 5,
      title: "Terapia Respiratoria",
      productsCount: "15 productos",
      img: "https://imagedelivery.net/3xEh-XSYeJWAvnbRPV3bRg/63b7089e-9cbc-4ffc-06f7-85bd17716b00/public",
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-teal-600 font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-3 block">
            Categorías
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
            Encuentra la solución ideal
          </h2>
        </div>

        {/* Grid de Categorías */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, index) => {
            // Logica para crear el layout 2 arriba y 3 abajo en pantallas grandes
            const isTopRow = index < 2;
            const colSpanClass = isTopRow ? "lg:col-span-3" : "lg:col-span-2";

            return (
              <div
                key={category.id}
                className={`relative group overflow-hidden rounded-[2rem] h-[300px] sm:h-[350px] lg:h-[400px] cursor-pointer shadow-sm hover:shadow-2xl transition-shadow duration-500 bg-white ${colSpanClass}`}
              >
                {/* Contenedor de Imagen con Efecto Hover Zoom In */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  {category.img ? (
                    <img
                      src={category.img}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gmd-light/50 flex flex-col items-center justify-center transition-transform duration-700 ease-out group-hover:scale-110 px-8 text-center border-2 border-dashed border-gray-200 rounded-[2rem]">
                      <svg className="w-12 h-12 text-navy-300 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-navy-400 font-semibold text-sm">Imagen de Categoría <br /> (URL Pendiente)</span>
                    </div>
                  )}
                </div>

                {/* Gradiente Oscuro Superpuesto (mantiene legibilidad del texto blanco) */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                {/* Contenido de Texto Inferior */}
                <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full flex flex-col items-start transition-transform duration-500 transform group-hover:-translate-y-2">
                  <h3 className="text-white text-2xl lg:text-[1.75rem] font-bold mb-1 md:mb-2 leading-tight">
                    {category.title}
                  </h3>

                  <div className="flex items-center text-gray-300 font-medium text-sm md:text-base">
                    <span>{category.productsCount}</span>
                    <svg
                      className="w-5 h-5 ml-2 opacity-0 -translate-x-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-0 text-brand-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
