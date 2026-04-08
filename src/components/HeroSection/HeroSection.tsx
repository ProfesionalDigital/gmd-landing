import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

const cards = [
  {
    id: 1,
    title: "Identificamos oportunidades",
    description: "Analizamos el mercado y las necesidades de cada población.",
    color: "teal",
    img: "https://imagedelivery.net/3xEh-XSYeJWAvnbRPV3bRg/20a1da17-9b15-491f-3c1f-2341827f6b00/public",
  },
  {
    id: 2,
    title: "Desarrollamos soluciones",
    description: "Definimos estándares y producimos bajo nuestras especificaciones.",
    color: "purple",
    img: "https://imagedelivery.net/3xEh-XSYeJWAvnbRPV3bRg/40f57e07-70f9-46e1-c1ec-530afa205900/public",
  },
  {
    id: 3,
    title: "Garantizamos continuidad",
    description: "Red de +1.000 distribuidores y soporte postventa en todo el país.",
    color: "brand",
    img: "https://imagedelivery.net/3xEh-XSYeJWAvnbRPV3bRg/ee7c24fa-0520-471b-d439-623c83f5eb00/public",
  }
];

export const HeroSection = () => {

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'teal':
        return {
          bg: 'bg-teal-100',
          border: 'border-teal-300',
          imgPlaceholder: 'bg-teal-200/50',
          title: 'text-teal-900',
        };
      case 'purple':
        return {
          bg: 'bg-purple-100',
          border: 'border-purple-300',
          imgPlaceholder: 'bg-purple-200/50',
          title: 'text-purple-900',
        };
      case 'brand':
        return {
          bg: 'bg-brand-100',
          border: 'border-brand-300',
          imgPlaceholder: 'bg-brand-200/50',
          title: 'text-brand-900',
        };
      default:
        return {
          bg: 'bg-gmd-light',
          border: 'border-navy-200',
          imgPlaceholder: 'bg-navy-200/50',
          title: 'text-navy-900',
        };
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-white md:h-[calc(100vh-139px)]">
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-14">

          {/* Columna Izquierda: Textos y Botones */}
          <div className="flex flex-col justify-center space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-navy-900 leading-[1.15] tracking-tight">
                Productos de salud con <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-800 to-navy-600">el respaldo que necesitas</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-navy-600 leading-relaxed max-w-2xl font-medium">
              Acompañamos cada paso de tu proceso, desde el análisis del mercado hasta la entrega, el servicio y la continuidad para operar sin interrupciones.
            </p>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                className="flex items-center justify-center bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 hover:-translate-y-1"
                href="https://www.gmd.com.co/category/todos-los-productos/0ZGVT000000004r4AA"
              >
                Explorar catálogo
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                className="flex items-center justify-center bg-white hover:bg-gmd-light text-navy-800 border-2 border-navy-100 hover:border-navy-200 px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                href="https://www.gmd.com.co/contacto"
              >
                Quiero ser distribuidor
              </a>
            </div>

            {/* Badges Inferiores */}
            {/* <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-navy-100/60 mt-4">
              {badges.map(badge => (
                <div key={badge} className="flex items-center gap-2 bg-gmd-light/60 px-4 py-2 rounded-lg border border-navy-100/50">
                  <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></div>
                  <span className="text-sm font-semibold text-navy-800">{badge}</span>
                </div>
              ))}
            </div> */}
          </div>

          {/* Columna Derecha: Swiper Carousel JS */}
          <div className="relative w-full max-w-[320px] sm:max-w-sm mx-auto md:max-w-md lg:max-w-md flex items-center justify-center">

            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards, Autoplay, Pagination]}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false, // para que tras hacer clic siga moviendose
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              className="w-full pb-12" // Padding para permitir ver los punticos (pagination) debajo de las cards
            >
              {cards.map((card) => {
                const colors = getColorClasses(card.color);

                return (
                  <SwiperSlide key={card.id} className="rounded-[2rem]">
                    <div className={`p-6 md:p-8 rounded-[2rem] border-2 ${colors.border} ${colors.bg} shadow-xl h-full flex flex-col`}>

                      {/* Imagen Placeholder / Real (Arriba) */}
                      <div className={`w-full aspect-square rounded-2xl mb-6 ${colors.imgPlaceholder} flex items-center justify-center overflow-hidden transition-transform duration-500 hover:scale-[1.02] p-4`}>
                        {card.img ? (
                          <img src={card.img} alt={card.title} className="w-full h-full rounded-xl object-cover" />
                        ) : (
                          <div className="text-navy-900/30 flex flex-col items-center">
                            <svg className="w-12 h-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-sm font-semibold">Imagen ilustrativa</span>
                          </div>
                        )}
                      </div>

                      {/* Textos (Abajo) */}
                      <div className="flex-1 flex flex-col">
                        <h3 className={`text-xl md:text-2xl font-bold ${colors.title} mb-3 leading-tight`}>
                          {card.title}
                        </h3>
                        <p className="text-navy-700 text-base md:text-lg font-medium leading-relaxed">
                          {card.description}
                        </p>
                      </div>

                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

          </div>

        </div>
      </div>
    </section>
  );
};
