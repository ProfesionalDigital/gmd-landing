import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const ProductsCarousel = () => {
  const products = [
    {
      id: 1,
      name: 'Nebulizador Compacto',
      sku: 'CDK-222',
      category: 'TERAPIA',
      bgClass: 'bg-navy-900',
      pillClass: 'bg-white/10 text-white font-semibold backdrop-blur-md border border-white/10',
    },
    {
      id: 2,
      name: 'Silla de Ruedas III',
      sku: 'KBE-9953-II',
      category: 'MOVILIDAD',
      bgClass: 'bg-[#F4F5F6]',
      pillClass: 'bg-white text-navy-800 font-bold shadow-sm border border-gray-100',
    },
    {
      id: 3,
      name: 'Rodillera Ortopédica',
      sku: 'GMD-928',
      category: 'REHABILITACIÓN',
      bgClass: 'bg-teal-100/50',
      pillClass: 'bg-white text-navy-800 font-bold shadow-sm border border-gray-100',
    },
    {
      id: 4,
      name: 'Nebulizador Portátil',
      sku: 'CDK-195',
      category: 'TERAPIA',
      bgClass: 'bg-[#F7F5F2]',
      pillClass: 'bg-white text-navy-800 font-bold shadow-sm border border-gray-100',
    },
    {
      id: 5,
      name: 'Balón Terapéutico',
      sku: 'GMRN-235',
      category: 'REHABILITACIÓN',
      bgClass: 'bg-navy-900',
      pillClass: 'bg-white/10 text-white font-semibold backdrop-blur-md border border-white/10',
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header e Indicadores del Carousel */}
        <div className="flex items-end justify-between mb-10 md:mb-12">
          <div className="flex flex-col gap-2">
            <span className="text-teal-600 font-bold text-xs md:text-sm tracking-widest uppercase">Colección</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">Productos destacados</h2>
          </div>
          
          {/* Controles de Navegación Swiper (Ocultos en móvil, visibles en LG) */}
          <div className="hidden sm:flex items-center gap-3">
            <button className="swiper-btn-prev flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 text-gray-400 hover:text-navy-900 hover:border-navy-900 transition-all cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="swiper-btn-next flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 text-gray-400 hover:text-navy-900 hover:border-navy-900 transition-all cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="-mx-4 sm:mx-0 px-4 sm:px-0">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1.2}
            navigation={{
              prevEl: '.swiper-btn-prev',
              nextEl: '.swiper-btn-next',
            }}
            breakpoints={{
              480: { slidesPerView: 2.2, spaceBetween: 20 },
              768: { slidesPerView: 3.2, spaceBetween: 24 },
              1024: { slidesPerView: 4, spaceBetween: 32 },
            }}
            className="w-full pb-8"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="flex flex-col gap-5 group cursor-pointer h-full">
                  {/* Tarjeta de Imagen */}
                  <div className={`relative w-full aspect-square rounded-[2rem] p-6 lg:p-8 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:-translate-y-1 ${product.bgClass}`}>
                    
                    {/* Placeholder o futura imagen real del producto */}
                    <div className="w-full h-full bg-white rounded-xl shadow-sm flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-105">
                      <div className="text-gray-300">
                        <svg className="w-16 h-16 mx-auto opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Pill de Categoría */}
                    <div className={`absolute bottom-6 left-6 px-4 py-1.5 text-[10px] sm:text-xs tracking-widest uppercase rounded-full ${product.pillClass}`}>
                      {product.category}
                    </div>
                  </div>
                  
                  {/* Información del Producto */}
                  <div className="flex flex-col gap-1 px-2">
                    <h4 className="text-lg font-bold text-navy-900 group-hover:text-brand-500 transition-colors">{product.name}</h4>
                    <span className="text-xs text-gray-400 font-semibold tracking-wide">{product.sku}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
      </div>
    </section>
  );
};
